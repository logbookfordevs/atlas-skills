import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { inspectSource, prepareUpdate, publishIssue } from './upstream-sync.mjs';
import { buildSkills, sha256 } from './build-skills.mjs';

const bytes = text => Buffer.from(text);
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'atlas-watch-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const source = { id: 'fixture', classification: 'verbatim',
    upstream: { repository: 'https://github.com/author/skills', commit: 'a'.repeat(40), path: 'skills/fixture/SKILL.md', licensePath: 'LICENSE' },
    snapshot: 'sources/upstream/fixture/source.md', method: 'sources/upstream/fixture/source.md', license: 'sources/upstream/fixture/LICENSE',
    sourceSha256: sha256(bytes('before\n')), licenseSha256: sha256(bytes('license\n')), supportingFiles: [], consumers: ['fixture-skill'], rulings: [], adaptation: 'Fixture' };
  const revision = { commit: 'b'.repeat(40), files: new Map([['skills/fixture/SKILL.md', bytes('after\n')], ['LICENSE', bytes('license\n')]]) };
  return { root, source, revision };
}

test('watcher ignores unrelated changes but detects support additions and removals', t => {
  const { root, source, revision } = fixture(t);
  revision.files.set(source.upstream.path, bytes('before\n'));
  revision.files.set('unrelated/file.md', bytes('change\n'));
  assert.equal(inspectSource(source, revision, root).status, 'unchanged');
  revision.files.set('skills/fixture/references/detail.md', bytes('detail\n'));
  const added = inspectSource(source, revision, root);
  assert.equal(added.status, 'ready-for-review'); assert.equal(added.files.length, 1);
  source.supportingFiles = [{ relativePath: 'references/detail.md', sourceSha256: sha256(bytes('detail\n')) }];
  revision.files.delete('skills/fixture/references/detail.md');
  assert(inspectSource(source, revision, root).changed.some(file => file.startsWith('removed:')));
});

test('patch replay preserves adaptations and conflicts leave maintained files untouched', t => {
  const { root, source, revision } = fixture(t);
  source.classification = 'patched'; source.patch = 'sources/fixture.patch';
  mkdirSync(join(root, 'sources'), { recursive: true });
  writeFileSync(join(root, source.patch), '--- a/source.md\n+++ b/source.md\n@@ -1 +1 @@\n-after\n+adapted\n');
  const clean = inspectSource(source, revision, root);
  assert.equal(clean.method.toString(), 'adapted\n');
  revision.files.set(source.upstream.path, bytes('unrelated rewrite\n'));
  const before = readFileSync(join(root, source.patch));
  assert.equal(inspectSource(source, revision, root).status, 'conflict');
  assert.deepEqual(readFileSync(join(root, source.patch)), before);
});

test('license changes, missing source paths and symlink-like paths cannot become silent updates', t => {
  const { root, source, revision } = fixture(t);
  revision.files.set('LICENSE', bytes('different permission\n'));
  assert.equal(inspectSource(source, revision, root).status, 'license-review');
  revision.files.delete(source.upstream.path);
  assert.throws(() => inspectSource(source, revision, root), /Missing upstream file/);
  source.upstream.path = '../escape';
  assert.throws(() => inspectSource(source, revision, root), /Unsafe source path/);
});

test('watcher deduplicates issues by source marker and avoids unchanged edits', t => {
  const { root } = fixture(t);
  const report = { id: 'fixture', status: 'ready-for-review', classification: 'verbatim', pinned: 'a'.repeat(40), candidate: 'b'.repeat(40), consumers: ['fixture-skill'], rulings: [], changed: ['SKILL.md'], compare: 'https://github.com/author/skills/compare/base...candidate' };
  let issue, mutations = 0;
  const gh = args => {
    if (args[1] === 'list') return JSON.stringify(issue ? [issue] : []);
    mutations++;
    issue = { number: 17, body: readFileSync(args.at(-1), 'utf8') };
    return '';
  };
  assert.equal(publishIssue(report, gh, root), 'created');
  assert.equal(publishIssue(report, gh, root), 'unchanged');
  assert.equal(mutations, 1);
  report.candidate = 'c'.repeat(40);
  assert.equal(publishIssue(report, gh, root), 'updated');
  assert.equal(mutations, 2);
});

test('preparation validates the complete staged package before updating maintained inputs', t => {
  const { root, source, revision } = fixture(t);
  const write = (name, value) => { mkdirSync(join(root, name, '..'), { recursive: true }); writeFileSync(join(root, name), value); };
  write(source.snapshot, 'before\n'); write(source.license, 'license\n');
  write('skills/fixture-skill/SKILL.md', '---\nname: fixture-skill\ndescription: Fixture\n---\n');
  write('skills/fixture-skill/agents/openai.yaml', 'policy: {}\n');
  write('stacks/atlas.json', '{"version":1,"sources":[]}');
  const manifest = { version: 1, sources: [source], workflows: [{ id: 'fixture-skill', entry: 'skills/fixture-skill/SKILL.md', agent: 'skills/fixture-skill/agents/openai.yaml', methods: ['fixture'], dependencies: [] }], rulings: [] };
  write('sources/composition.json', JSON.stringify(manifest));
  write('skills/fixture-skill/references/owned.md', 'owned context\n');
  buildSkills(root);
  const candidate = inspectSource(source, revision, root);
  const bad = structuredClone(manifest); bad.workflows[0].entry = 'skills/missing/SKILL.md';
  assert.throws(() => prepareUpdate(root, source, candidate, bad));
  assert.equal(readFileSync(join(root, source.snapshot), 'utf8'), 'before\n');
  prepareUpdate(root, source, candidate, manifest);
  assert.equal(readFileSync(join(root, source.snapshot), 'utf8'), 'after\n');
  assert.equal(JSON.parse(readFileSync(join(root, 'sources/composition.json'))).sources[0].upstream.commit, revision.commit);
  assert.equal(readFileSync(join(root, 'skills/fixture-skill/references/fixture.md'), 'utf8'), 'after\n');
  assert.equal(readFileSync(join(root, 'skills/fixture-skill/references/owned.md'), 'utf8'), 'owned context\n');
});

test('a missing baseline resource is distinguished from an upstream revision update', t => {
  const { root, source, revision } = fixture(t);
  revision.commit = source.upstream.commit;
  revision.files.set(source.upstream.path, bytes('before\n'));
  revision.files.set('skills/fixture/agents/openai.yaml', bytes('policy: {}\n'));
  const result = inspectSource(source, revision, root);
  assert.equal(result.status, 'baseline-review');
  assert.equal(result.changed.length, 1);
});

test('preparation preserves Atlas invocation metadata while carrying relocated upstream metadata', t => {
  const { root, source, revision } = fixture(t);
  const write = (name, value) => { mkdirSync(join(root, name, '..'), { recursive: true }); writeFileSync(join(root, name), value); };
  source.carriedPath = 'SKILL.md';
  source.supportingFileTargets = { 'agents/openai.yaml': 'references/upstream/agents/openai.yaml' };
  write(source.snapshot, 'before\n'); write(source.license, 'license\n');
  const agent = 'skills/fixture-skill/agents/openai.yaml';
  write(agent, 'interface:\n  display_name: Atlas Fixture\n');
  write('stacks/atlas.json', '{"version":1,"sources":[]}');
  const manifest = { version: 1, sources: [source], workflows: [{ id: 'fixture-skill', entry: source.snapshot, agent, methods: ['fixture'], dependencies: [] }], rulings: [] };
  write('sources/composition.json', JSON.stringify(manifest));
  buildSkills(root);
  revision.files.set('skills/fixture/agents/openai.yaml', bytes('interface:\n  display_name: Upstream Fixture\n'));
  prepareUpdate(root, source, inspectSource(source, revision, root), manifest);
  assert.equal(readFileSync(join(root, agent), 'utf8'), 'interface:\n  display_name: Atlas Fixture\n');
  const carried = 'skills/fixture-skill/references/upstream/agents/openai.yaml';
  assert.equal(readFileSync(join(root, carried), 'utf8'), 'interface:\n  display_name: Upstream Fixture\n');
  const next = JSON.parse(readFileSync(join(root, 'sources/composition.json')));
  revision.commit = 'c'.repeat(40);
  revision.files.set('skills/fixture/agents/openai.yaml', bytes('interface:\n  display_name: Updated Upstream\n'));
  prepareUpdate(root, next.sources[0], inspectSource(next.sources[0], revision, root), next);
  assert.equal(readFileSync(join(root, carried), 'utf8'), 'interface:\n  display_name: Updated Upstream\n');
  assert.equal(readFileSync(join(root, agent), 'utf8'), 'interface:\n  display_name: Atlas Fixture\n');
  buildSkills(root, { check: true });
  const unsafe = JSON.parse(readFileSync(join(root, 'sources/composition.json')));
  unsafe.sources[0].supportingFileTargets['agents/openai.yaml'] = '../escape';
  write('sources/composition.json', JSON.stringify(unsafe));
  assert.throws(() => buildSkills(root), /Invalid package path/);
});
