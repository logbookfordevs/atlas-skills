import assert from 'node:assert/strict';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, posix } from 'node:path';
import { tmpdir } from 'node:os';
import { test } from 'node:test';
import { buildSkills, composeSkills, repositoryRoot, sha256 } from './build-skills.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'atlas-build-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  cpSync(join(repositoryRoot, 'sources'), join(root, 'sources'), { recursive: true });
  mkdirSync(join(root, 'workflows/logbook-fixture'), { recursive: true });
  writeFileSync(join(root, 'workflows/logbook-fixture/entry.md'), '---\nname: logbook-fixture\ndescription: Package fixture\n---\n');
  writeFileSync(join(root, 'workflows/logbook-fixture/openai.yaml'), 'policy:\n  allow_implicit_invocation: true\n');
  const path = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(path));
  manifest.workflows = [{ id: 'logbook-fixture', entry: 'workflows/logbook-fixture/entry.md', agent: 'workflows/logbook-fixture/openai.yaml', methods: ['research'], dependencies: [] }];
  manifest.rulings = [];
  for (const source of manifest.sources) { source.consumers = []; source.rulings = []; }
  manifest.sources.find(source => source.id === 'research').consumers = ['logbook-fixture'];
  writeFileSync(path, JSON.stringify(manifest));
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
    assert.ok(receipt.dependencies.every(dependency => dependency.relationship === 'behavioral' && typeof dependency.required === 'boolean'));
    for (const [name, checksum] of Object.entries(receipt.files)) assert.equal(sha256(files.get(name)), checksum);
  }
});

test('a package is portable and hand-edited output is rejected', t => {
  const root = fixture(t);
  buildSkills(root);
  buildSkills(root, { check: true });
  const path = join(root, 'skills/logbook-fixture/references/research.md');
  writeFileSync(path, 'untracked output edit');
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  buildSkills(root, { check: true });
});

test('altered upstream bytes and license notices fail integrity checks', t => {
  for (const file of ['source.md', 'LICENSE']) {
    const root = fixture(t);
    writeFileSync(join(root, 'sources/upstream/research', file), 'changed without adopting a new pin');
    assert.throws(() => composeSkills(root), /integrity failure/);
  }
});

test('verbatim references preserve source bytes and authored changes stale the package', t => {
  const root = fixture(t);
  buildSkills(root);
  const entry = join(root, 'workflows/logbook-fixture/entry.md');
  writeFileSync(entry, `${readFileSync(entry, 'utf8')}\nAdditional task-specific guidance.\n`);
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  const manifestPath = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(manifestPath));
  const source = manifest.sources.find(source => source.id === 'research');
  const files = composeSkills(root).get('logbook-fixture');
  assert.deepEqual(files.get('references/research.md'), readFileSync(join(root, source.snapshot)));
  source.method = 'sources/methods/research-test.md';
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
  const source = manifest.sources.find(source => source.id === 'research');
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
  const files = composeSkills().get('atlas-decide');
  assert.ok(files);
  const entry = files.get('SKILL.md').toString().split('---')[1];
  assert.match(entry, /name: atlas-decide/);
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
  const source = manifest.sources.find(source => source.id === 'prototype');
  source.consumers = ['logbook-fixture'];
  manifest.workflows[0].methods.push('prototype');
  writeFileSync(path, JSON.stringify(manifest));
  const files = composeSkills(root).get('logbook-fixture');
  for (const file of source.supportingFiles) {
    const target = join(posix.dirname(source.carriedPath), file.relativePath);
    assert.deepEqual(files.get(target), readFileSync(join(root, file.snapshot)));
  }
  source.supportingFiles[0].relativePath = '../escape.md';
  writeFileSync(path, JSON.stringify(manifest));
  assert.throws(() => composeSkills(root), /Invalid package path/);
  source.supportingFiles[0].relativePath = 'LOGIC.md';
  writeFileSync(path, JSON.stringify(manifest));
  writeFileSync(join(root, source.supportingFiles[0].snapshot), 'unexpected changes');
  assert.throws(() => composeSkills(root), /Supporting file integrity failure/);
});

test('automatic design discovery metadata and supporting receipts agree', () => {
  const files = composeSkills().get('atlas-design');
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


test('Implement is manually discoverable with portable tracking references and pinned source bytes', () => {
  const files = composeSkills().get('atlas-implement');
  assert.ok(files);
  assert.match(files.get('SKILL.md').toString().split('---')[1], /disable-model-invocation: true/);
  assert.match(files.get('agents/openai.yaml').toString(), /allow_implicit_invocation: false/);
  const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
  for (const source of receipt.sources) {
    assert.ok(['verbatim', 'patched', 'derived'].includes(source.classification));
    if (source.classification === 'verbatim') assert.equal(source.sourceSha256, source.carriedSha256);
    for (const notice of source.notices ?? []) assert.equal(sha256(files.get(notice.carriedPath)), notice.carriedSha256);
    assert.ok(source.rulings.every(id => receipt.rulings.some(ruling => ruling.id === id)));
  }
  for (const reference of receipt.authoredReferences) assert.equal(sha256(files.get(reference.target)), reference.carriedSha256);
  for (const ruling of receipt.rulings) assert.ok(receipt.authoredInputs.includes(ruling.document));
});


test('workflow packages build identically without the legacy archive', t => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-without-legacy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const directory of ['sources', 'workflows']) {
    cpSync(join(repositoryRoot, directory), join(root, directory), { recursive: true });
  }
  const expected = composeSkills();
  const actual = composeSkills(root);
  assert.deepEqual(actual, expected);
  for (const [, files] of actual) {
    const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
    assert.ok(receipt.authoredInputs.every(input => input.startsWith('workflows/')));
    assert.ok(receipt.authoredReferences.every(reference => reference.classification === 'atlas-authored'));
  }
});

test('selected UI source receipts preserve PE lineage and protect additional notices', t => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-ui-notices-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const directory of ['sources', 'workflows']) {
    cpSync(join(repositoryRoot, directory), join(root, directory), { recursive: true });
  }
  const files = composeSkills(root).get('atlas-implement');
  const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
  const selected = receipt.sources.filter(source => source.selection);
  assert.ok(selected.length > 0);
  for (const source of selected) {
    assert.match(source.selection.commit, /^[a-f0-9]{40}$/);
    assert.equal(source.selection.sha256, source.carriedSha256);
    for (const notice of source.notices) {
      assert.equal(sha256(files.get(notice.carriedPath)), notice.carriedSha256);
    }
  }
  const path = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(path));
  const source = manifest.sources.find(candidate => candidate.notices?.length);
  writeFileSync(join(root, source.notices[0].input), 'unreviewed notice');
  assert.throws(() => composeSkills(root), /Notice integrity failure/);
  cpSync(join(repositoryRoot, source.notices[0].input), join(root, source.notices[0].input));
  source.notices[0].input = 'sources/selection/conflicting-NOTICE';
  writeFileSync(join(root, source.notices[0].input), 'unreviewed notice');
  source.notices[0].sha256 = sha256(Buffer.from('unreviewed notice'));
  writeFileSync(path, JSON.stringify(manifest));
  assert.throws(() => composeSkills(root), /Conflicting notice/);
});
