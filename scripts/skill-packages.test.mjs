import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, posix } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import { recordPatches } from './record-patches.mjs';
import { buildSkills, composeSkills, repositoryRoot, sha256 } from './build-skills.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'atlas-build-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const directory of ['sources/upstream/fixture-source/support/nested', 'sources/methods', 'skills/logbook-fixture/agents']) {
    mkdirSync(join(root, directory), { recursive: true });
  }
  writeFileSync(join(root, 'skills/logbook-fixture/SKILL.md'), '---\nname: logbook-fixture\ndescription: Package fixture\n---\n');
  writeFileSync(join(root, 'skills/logbook-fixture/agents/openai.yaml'), 'policy:\n  allow_implicit_invocation: true\n');
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
    workflows: [{ id: 'logbook-fixture', entry: 'skills/logbook-fixture/SKILL.md', agent: 'skills/logbook-fixture/agents/openai.yaml', methods: ['fixture-source'], dependencies: [] }],
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
  const entry = join(root, 'skills/logbook-fixture/SKILL.md');
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

test('upstream invocation metadata stays in snapshots and retired copies are removed', t => {
  const root = fixture(t);
  const manifestPath = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(manifestPath));
  const source = manifest.sources[0];
  const snapshot = 'sources/upstream/fixture-source/support/agents/openai.yaml';
  const upstreamMetadata = Buffer.from('interface:\n  display_name: Upstream Fixture\n');
  mkdirSync(join(root, snapshot, '..'), { recursive: true });
  writeFileSync(join(root, snapshot), upstreamMetadata);
  source.supportingFiles.push({ relativePath: 'agents/openai.yaml', snapshot, sourceSha256: sha256(upstreamMetadata) });
  source.supportingFileTargets = { 'agents/openai.yaml': 'references/upstream/agents/openai.yaml' };
  writeFileSync(manifestPath, JSON.stringify(manifest));
  buildSkills(root);

  const packagePath = join(root, 'skills/logbook-fixture');
  const retired = 'references/upstream/agents/openai.yaml';
  mkdirSync(join(packagePath, retired, '..'), { recursive: true });
  writeFileSync(join(packagePath, retired), upstreamMetadata);
  const receiptPath = join(packagePath, 'SOURCE-MANIFEST.json');
  const previous = JSON.parse(readFileSync(receiptPath));
  previous.managedFiles.push(retired);
  previous.files[retired] = sha256(upstreamMetadata);
  writeFileSync(receiptPath, JSON.stringify(previous));
  buildSkills(root);

  assert.equal(existsSync(join(packagePath, retired)), false);
  assert.deepEqual(readFileSync(join(root, snapshot)), upstreamMetadata);
  assert.equal(readFileSync(join(packagePath, 'agents/openai.yaml'), 'utf8'), 'policy:\n  allow_implicit_invocation: true\n');
  const files = composeSkills(root).get('logbook-fixture');
  assert.deepEqual([...files.keys()].filter(name => name.endsWith('agents/openai.yaml')), ['agents/openai.yaml']);
  assert.ok(files.has('references/fixture-source.md'));
  assert.ok(files.has('references/details.md'));
  buildSkills(root, { check: true });
  writeFileSync(join(root, snapshot), 'changed upstream metadata');
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


test('Tracking Implementation is automatically discoverable with portable runtime references', () => {
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
  const packagePrefix = 'skills/tracking-implementation/';
  for (const ruling of receipt.rulings) {
    assert.ok(ruling.document.startsWith(packagePrefix));
    assert.ok(files.has(ruling.document.slice(packagePrefix.length)), `Missing bundled ruling: ${ruling.document}`);
  }
});

test('Atlas Verify validates and renders from a portable package without the source repo', t => {
  const python = spawnSync('python3', ['--version'], { encoding: 'utf8' });
  if (python.error?.code === 'ENOENT') {
    t.skip('Python 3 is unavailable; the verification report tools require it.');
    return;
  }

  assert.equal(python.status, 0, python.stderr);
  const root = mkdtempSync(join(tmpdir(), 'atlas-verify-package-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  for (const [name, bytes] of composeSkills().get('atlas-verify')) {
    const path = join(root, name);
    mkdirSync(join(path, '..'), { recursive: true });
    writeFileSync(path, bytes);
  }

  const report = join(root, 'assets/sample/report.json');
  const options = { cwd: root, encoding: 'utf8', env: { ...process.env, PYTHONDONTWRITEBYTECODE: '1' } };
  const validation = spawnSync('python3', [join(root, 'scripts/validate-report.py'), report], options);
  assert.equal(validation.status, 0, validation.stdout + validation.stderr);

  const rendering = spawnSync('python3', [join(root, 'scripts/render-report.py'), report, '--no-convert'], options);
  assert.equal(rendering.status, 0, rendering.stdout + rendering.stderr);
  const rendered = readFileSync(join(root, 'assets/sample/report.html'), 'utf8');
  const payload = rendered.match(/<script id="report-data">([\s\S]*?)<\/script>/)[1];
  const browser = { window: {} };
  runInNewContext(payload, browser);
  assert.deepEqual(JSON.parse(JSON.stringify(browser.window.__REPORT__)), JSON.parse(readFileSync(report, 'utf8')));

  const malformed = join(root, 'invalid.json');
  writeFileSync(malformed, JSON.stringify({ schema_version: 1, title: 'Incomplete report' }));
  const rejection = spawnSync('python3', [join(root, 'scripts/validate-report.py'), malformed], options);
  assert.equal(rejection.status, 1);
  assert.ok(rejection.stdout.includes('mode'));
});


test('workflow packages build identically without the legacy archive', t => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-without-legacy-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const directory of ['sources', 'skills']) {
    cpSync(join(repositoryRoot, directory), join(root, directory), { recursive: true });
  }
  mkdirSync(join(root, 'stacks'), { recursive: true });
  cpSync(join(repositoryRoot, 'stacks/atlas.json'), join(root, 'stacks/atlas.json'));
  const expected = composeSkills();
  const actual = composeSkills(root);
  assert.deepEqual(actual, expected);
  for (const [, files] of actual) {
    const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
    assert.ok(receipt.authoredInputs.every(input => input.startsWith('skills/')));
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

 test('direct authoring preserves new resources and removes only retired managed support', t => {
  const root = fixture(t);
  buildSkills(root);
  const extra = join(root, 'skills/logbook-fixture/references/atlas-owned.md');
  writeFileSync(extra, 'owned resource\n');
  const path = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(path));
  const removed = manifest.sources[0].supportingFiles.pop();
  writeFileSync(path, JSON.stringify(manifest));
  buildSkills(root);
  assert.equal(readFileSync(extra, 'utf8'), 'owned resource\n');
  assert.equal(composeSkills(root).get('logbook-fixture').has(`references/${removed.relativePath}`), false);
  buildSkills(root, { check: true });
});

test('recording a directly edited method produces a replayable patch without changing its original', t => {
  const root = fixture(t);
  buildSkills(root);
  const path = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(path));
  const source = manifest.sources[0];
  source.classification = 'patched';
  source.method = 'skills/logbook-fixture/references/fixture-source.md';
  source.patch = 'sources/fixture.patch';
  writeFileSync(path, JSON.stringify(manifest));
  const original = readFileSync(join(root, source.snapshot));
  writeFileSync(join(root, source.method), 'adapted locally\n');
  recordPatches(root, source.id);
  buildSkills(root);
  buildSkills(root, { check: true });
  assert.deepEqual(readFileSync(join(root, source.snapshot)), original);
  assert.equal(readFileSync(join(root, source.method), 'utf8'), 'adapted locally\n');
});

 test('an upstream addition cannot overwrite an Atlas-owned resource', t => {
  const root = fixture(t);
  buildSkills(root);
  writeFileSync(join(root, 'skills/logbook-fixture/references/local.md'), 'owned\n');
  buildSkills(root);
  const path = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(path));
  manifest.sources[0].supportingFiles.push({ ...manifest.sources[0].supportingFiles[0], relativePath: 'local.md' });
  writeFileSync(path, JSON.stringify(manifest));
  assert.throws(() => buildSkills(root), /conflicts with Atlas-owned file/);
  assert.equal(readFileSync(join(root, 'skills/logbook-fixture/references/local.md'), 'utf8'), 'owned\n');
});

test('supporting-only patches replay, carry receipts and reject unrecorded edits', t => {
  const root = fixture(t);
  const manifestPath = join(root, 'sources/composition.json');
  const manifest = JSON.parse(readFileSync(manifestPath));
  const source = manifest.sources[0];
  source.classification = 'patched';
  const file = source.supportingFiles[0];
  file.method = 'sources/methods/details.md';
  file.patch = 'sources/patches/details.patch';
  writeFileSync(join(root, file.method), 'See [Accessibility](accessibility.md).\n');
  writeFileSync(manifestPath, JSON.stringify(manifest));
  recordPatches(root);
  const output = composeSkills(root).get('logbook-fixture');
  assert.equal(output.get('references/details.md').toString(), 'See [Accessibility](accessibility.md).\n');
  assert.equal(readFileSync(join(root, file.snapshot), 'utf8'), 'fixture support details.md\n');
  const receipt = JSON.parse(output.get('SOURCE-MANIFEST.json')).sources[0].supportingFiles[0];
  assert.equal(receipt.classification, 'patched');
  assert.equal(receipt.patchSha256, sha256(readFileSync(join(root, file.patch))));
  writeFileSync(join(root, file.method), 'unrecorded edit\n');
  assert.throws(() => composeSkills(root), /Supporting patch replay mismatch/);
  delete file.patch;
  writeFileSync(manifestPath, JSON.stringify(manifest));
  assert.throws(() => recordPatches(root), /Incomplete patch registration/);
});
