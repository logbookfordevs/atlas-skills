import assert from 'node:assert/strict';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, posix } from 'node:path';
import { tmpdir } from 'node:os';
import { test } from 'node:test';
import { buildSkills, composeSkills, repositoryRoot, sha256 } from './build-skills.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'atlas-build-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const directory of ['sources/upstream/fixture-source/support/nested', 'sources/methods', 'authored/logbook-fixture']) {
    mkdirSync(join(root, directory), { recursive: true });
  }
  writeFileSync(join(root, 'authored/logbook-fixture/entry.md'), '---\nname: logbook-fixture\ndescription: Package fixture\n---\n');
  writeFileSync(join(root, 'authored/logbook-fixture/openai.yaml'), 'policy:\n  allow_implicit_invocation: true\n');
  const snapshot = 'sources/upstream/fixture-source/source.md';
  const license = 'sources/upstream/fixture-source/LICENSE';
  const sourceBytes = Buffer.from('fixture source\n');
  const licenseBytes = Buffer.from('fixture license\n');
  writeFileSync(join(root, snapshot), sourceBytes);
  writeFileSync(join(root, license), licenseBytes);
  const supportingFiles = ['details.md', 'nested/context.md'].map(relativePath => {
    const snapshot = `sources/upstream/fixture-source/support/${relativePath}`;
    const bytes = Buffer.from(`fixture support ${relativePath}\n`);
    writeFileSync(join(root, snapshot), bytes);
    return { relativePath, snapshot, sourceSha256: sha256(bytes) };
  });
  const manifest = {
    version: 1,
    sources: [{
      id: 'fixture-source', classification: 'verbatim',
      upstream: { repository: 'https://example.com/fixture', commit: 'a'.repeat(40), path: 'source.md' },
      snapshot, method: snapshot, sourceSha256: sha256(sourceBytes),
      license, licenseSha256: sha256(licenseBytes), adaptation: 'Fixture source',
      supportingFiles, consumers: ['logbook-fixture'], rulings: [],
    }],
    workflows: [{ id: 'logbook-fixture', entry: 'authored/logbook-fixture/entry.md', agent: 'authored/logbook-fixture/openai.yaml', methods: ['fixture-source'], dependencies: [] }],
    rulings: [],
  };
  writeFileSync(join(root, 'sources/composition.json'), JSON.stringify(manifest));
  return root;
}

test('committed packages regenerate exactly and all bundled links resolve', () => {
  buildSkills(repositoryRoot, { check: true });
  for (const [, files] of composeSkills()) {
    for (const [name, bytes] of files) {
      if (!name.endsWith('.md')) continue;
      const prose = bytes.toString().replace(/```[\s\S]*?```/g, '');
      for (const match of prose.matchAll(/\]\(([^)]+)\)/g)) {
        if (/^(?:https?:|#)/.test(match[1])) continue;
        const target = posix.normalize(posix.join(posix.dirname(name), match[1].split('#')[0]));
        assert.ok(files.has(target), `Missing packaged reference ${name} → ${match[1]}`);
      }
    }
    const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
    assert.ok(receipt.dependencies.every(dependency => ['behavioral', 'tool'].includes(dependency.relationship) && typeof dependency.required === 'boolean'));
    for (const [name, checksum] of Object.entries(receipt.files)) assert.equal(sha256(files.get(name)), checksum);
  }
});

test('a package is portable and hand-edited output is rejected', t => {
  const root = fixture(t);
  buildSkills(root);
  buildSkills(root, { check: true });
  const path = join(root, 'skills/logbook-fixture/references/fixture-source.md');
  writeFileSync(path, 'untracked output edit');
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  buildSkills(root, { check: true });
});

test('altered upstream bytes and license notices fail integrity checks', t => {
  for (const file of ['source.md', 'LICENSE']) {
    const root = fixture(t);
    writeFileSync(join(root, 'sources/upstream/fixture-source', file), 'changed without adopting a new pin');
    assert.throws(() => composeSkills(root), /integrity failure/);
  }
});

test('verbatim references preserve source bytes and authored changes stale the package', t => {
  const root = fixture(t);
  buildSkills(root);
  const entry = join(root, 'authored/logbook-fixture/entry.md');
  writeFileSync(entry, `${readFileSync(entry, 'utf8')}\nAdditional task-specific guidance.\n`);
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  const manifestPath = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(manifestPath));
  const source = manifest.sources.find(source => source.id === 'fixture-source');
  const files = composeSkills(root).get('logbook-fixture');
  assert.deepEqual(files.get('references/fixture-source.md'), readFileSync(join(root, source.snapshot)));
  source.method = 'sources/methods/verbatim-test.md';
  writeFileSync(join(root, source.method), 'changed carried content');
  writeFileSync(manifestPath, JSON.stringify(manifest));
  assert.throws(() => composeSkills(root), /Verbatim mismatch/);
});

test('archived skill files retain their pre-move bytes', () => {
  const receipt = JSON.parse(readFileSync(join(repositoryRoot, 'docs/migrations/skills-v2-archive.json')));
  for (const file of receipt.files) assert.equal(sha256(readFileSync(join(repositoryRoot, file.to))), file.sha256, file.to);
});

test('patched source support verifies replay without relying on authored prose', t => {
  const root = fixture(t);
  const manifestPath = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(manifestPath));
  const source = manifest.sources.find(source => source.id === 'fixture-source');
  source.classification = 'patched';
  source.method = 'sources/methods/patch-fixture.md';
  source.patch = 'sources/patch-fixture.patch';
  writeFileSync(join(root, source.snapshot), 'before\n');
  source.sourceSha256 = sha256(Buffer.from('before\n'));
  writeFileSync(join(root, source.method), 'after\n');
  writeFileSync(join(root, source.patch), '--- a/source.md\n+++ b/source.md\n@@ -1 +1 @@\n-before\n+after\n');
  writeFileSync(manifestPath, JSON.stringify(manifest));
  assert.doesNotThrow(() => composeSkills(root));
  writeFileSync(join(root, source.method), 'different\n');
  assert.throws(() => composeSkills(root), /Patch replay mismatch/);
});

test('manual workflow metadata and copied source receipts agree', () => {
  const files = composeSkills().get('atlas-to-spec');
  assert.ok(files);
  const entry = files.get('SKILL.md').toString().split('---')[1];
  assert.match(entry, /name: atlas-to-spec/);
  assert.match(entry, /disable-model-invocation: true/);
  assert.match(files.get('agents/openai.yaml').toString(), /allow_implicit_invocation: false/);
  const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
  for (const source of receipt.sources) {
    assert.ok(['verbatim', 'patched', 'derived'].includes(source.classification));
    if (source.classification === 'verbatim') assert.equal(source.sourceSha256, source.carriedSha256);
    for (const notice of source.notices ?? []) assert.equal(sha256(files.get(notice.carriedPath)), notice.carriedSha256);
    assert.ok(source.rulings.every(id => receipt.rulings.some(ruling => ruling.id === id)));
  }
});


test('supporting source trees remain portable and reject tampering and escaping paths', t => {
  const root = fixture(t);
  const path = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(path));
  const source = manifest.sources[0];
  const carriedPath = source.carriedPath ?? `references/${source.id}.md`;
  const originalPath = source.supportingFiles[0].relativePath;
  const files = composeSkills(root).get('logbook-fixture');
  for (const file of source.supportingFiles) {
    const target = join(posix.dirname(carriedPath), file.relativePath);
    assert.deepEqual(files.get(target), readFileSync(join(root, file.snapshot)));
  }
  source.supportingFiles[0].relativePath = '../escape.md';
  writeFileSync(path, JSON.stringify(manifest));
  assert.throws(() => composeSkills(root), /Invalid package path/);
  source.supportingFiles[0].relativePath = originalPath;
  writeFileSync(path, JSON.stringify(manifest));
  writeFileSync(join(root, source.supportingFiles[0].snapshot), 'unexpected changes');
  assert.throws(() => composeSkills(root), /Supporting file integrity failure/);
});

test('automatic design discovery metadata and supporting receipts agree', () => {
  const files = composeSkills().get('html-ui');
  assert.ok(files);
  assert.match(files.get('SKILL.md').toString().split('---')[1], /disable-model-invocation: false/);
  assert.match(files.get('agents/openai.yaml').toString(), /allow_implicit_invocation: true/);
  const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
  for (const source of receipt.sources) {
    for (const file of source.supportingFiles) {
      assert.equal(file.sourceSha256, file.carriedSha256);
      assert.equal(sha256(files.get(file.carriedPath)), file.carriedSha256);
    }
  }
  for (const reference of receipt.authoredReferences) assert.equal(sha256(files.get(reference.target)), reference.carriedSha256);
});


test('Tracking Implementation is automatically discoverable with portable authored references', () => {
  const files = composeSkills().get('tracking-implementation');
  assert.ok(files);
  assert.match(files.get('SKILL.md').toString().split('---')[1], /disable-model-invocation: false/);
  assert.match(files.get('agents/openai.yaml').toString(), /allow_implicit_invocation: true/);
  const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
  for (const source of receipt.sources) {
    assert.equal(sha256(files.get(source.carriedPath)), source.carriedSha256);
    assert.equal(sha256(files.get(source.licensePath)), source.licenseSha256);
  }
  for (const reference of receipt.authoredReferences) assert.equal(sha256(files.get(reference.target)), reference.carriedSha256);
  for (const ruling of receipt.rulings) assert.ok(receipt.authoredInputs.includes(ruling.document));
});


test('workflow packages build identically without the legacy archive', t => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-without-legacy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const directory of ['sources', 'authored']) {
    cpSync(join(repositoryRoot, directory), join(root, directory), { recursive: true });
  }
  mkdirSync(join(root, 'stacks'), { recursive: true });
  cpSync(join(repositoryRoot, 'stacks/atlas.json'), join(root, 'stacks/atlas.json'));
  const expected = composeSkills();
  const actual = composeSkills(root);
  assert.deepEqual(actual, expected);
  for (const [, files] of actual) {
    const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
    assert.ok(receipt.authoredInputs.every(input => input.startsWith('authored/') || input.startsWith('sources/methods/')));
    assert.ok(receipt.authoredReferences.every(reference => reference.classification === 'atlas-authored'));
  }
});

test('source receipts preserve selection metadata and protect shared additional notices', t => {
  const root = fixture(t);
  const path = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(path));
  const source = manifest.sources[0];
  const noticeBytes = Buffer.from('fixture notice\n');
  mkdirSync(join(root, 'sources/notices'), { recursive: true });
  writeFileSync(join(root, 'sources/notices/NOTICE'), noticeBytes);
  source.selection = { repository: 'https://example.com/selection', commit: 'b'.repeat(40), path: 'source.md', sha256: source.sourceSha256 };
  source.notices = [{ input: 'sources/notices/NOTICE', target: 'licenses/shared-NOTICE.txt', sha256: sha256(noticeBytes) }];
  const peer = { ...source, id: 'notice-peer', carriedPath: 'references/notice-peer/source.md' };
  manifest.sources.push(peer);
  manifest.workflows[0].methods.push(peer.id);
  writeFileSync(path, JSON.stringify(manifest));
  const files = composeSkills(root).get('logbook-fixture');
  const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
  assert.equal(receipt.sources.length, 2);
  for (const item of receipt.sources) {
    assert.deepEqual(item.selection, source.selection);
    assert.equal(item.selection.sha256, item.carriedSha256);
    for (const notice of item.notices) {
      assert.equal(sha256(files.get(notice.carriedPath)), notice.carriedSha256);
    }
  }
  assert.deepEqual(files.get('licenses/shared-NOTICE.txt'), noticeBytes);
  writeFileSync(join(root, source.notices[0].input), 'unreviewed notice');
  assert.throws(() => composeSkills(root), /Notice integrity failure/);
  writeFileSync(join(root, source.notices[0].input), noticeBytes);
  const conflictingBytes = Buffer.from('conflicting fixture notice\n');
  peer.notices = [{ ...source.notices[0], input: 'sources/notices/conflicting-NOTICE', sha256: sha256(conflictingBytes) }];
  writeFileSync(join(root, peer.notices[0].input), conflictingBytes);
  writeFileSync(path, JSON.stringify(manifest));
  assert.throws(() => composeSkills(root), /Conflicting notice/);
});
