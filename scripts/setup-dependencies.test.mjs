import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { setupDependencies } from './setup-dependencies.mjs';
import { buildSkills } from './build-skills.mjs';

function fixture() {
  return {
    composition: { version: 1, sources: [], workflows: [
      { id: 'atlas-fixture', entry: 'authored/atlas-fixture/entry.md', agent: 'authored/atlas-fixture/openai.yaml', methods: [], dependencies: [
        { id: 'external', relationship: 'behavioral', required: true, condition: 'Fixture path.' },
        { id: 'atlas-owned', relationship: 'behavioral', required: false, condition: 'Owned path.' },
        { id: 'tool', relationship: 'tool', required: false, condition: 'Tool path.' },
      ] },
      { id: 'atlas-owned', entry: 'authored/atlas-owned/entry.md', agent: 'authored/atlas-owned/openai.yaml', methods: [], dependencies: [] },
      { id: 'atlas-setup', entry: 'authored/atlas-setup/entry.md', agent: 'authored/atlas-setup/openai.yaml', methods: [], dependencies: [],
        generatedReferences: [{ generator: 'setup-dependencies', target: 'references/dependencies.json' }] },
    ] },
    catalog: { defaultSource: 'https://github.com/atlas/skills', items: [
      { id: 'external', source: 'https://github.com/upstream/skills', args: ['--skill', 'external', '--global'] },
    ] },
  };
}

test('setup includes independent skills, deduplicates consumers, and excludes owned skills and tools', () => {
  const { composition, catalog } = fixture();
  composition.workflows[1].dependencies.push({ id: 'external', relationship: 'behavioral', required: false, condition: 'Optional path.' });
  composition.workflows[0].dependencies.push({ id: 'legacy-owned', relationship: 'behavioral', required: true, condition: 'Legacy path.' });
  catalog.items.push({ id: 'legacy-owned', source: catalog.defaultSource, args: ['--skill', 'legacy-owned'] });
  const registry = setupDependencies(composition, catalog);
  assert.equal(registry.dependencies.length, 1);
  assert.deepEqual(registry.dependencies[0].consumers, [
    { skill: 'atlas-fixture', required: true, condition: 'Fixture path.' },
    { skill: 'atlas-owned', required: false, condition: 'Optional path.' },
  ]);
  assert.equal(registry.dependencies[0].command, 'npx skills add https://github.com/upstream/skills --skill external');
  assert.ok(!registry.packages.includes('atlas-setup'));
});

test('setup rejects unresolved sources and unsafe installation selectors', () => {
  const { composition, catalog } = fixture();
  assert.throws(() => setupDependencies(composition, { ...catalog, items: [] }), /Missing dependency catalog entry/);
  catalog.items[0].source = 'https://github.com/upstream/skills;echo';
  assert.throws(() => setupDependencies(composition, catalog), /Unsupported setup source/);
  catalog.items[0].source = 'https://github.com/upstream/skills';
  catalog.items[0].args = ['--skill', 'external;echo'];
  assert.throws(() => setupDependencies(composition, catalog), /Invalid setup skill selector/);
});

test('setup regenerates after dependency addition, removal, source changes, and Atlas ownership changes', t => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-setup-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const { composition, catalog } = fixture();
  for (const workflow of composition.workflows) {
    mkdirSync(join(root, 'authored', workflow.id), { recursive: true });
    writeFileSync(join(root, workflow.entry), `---\nname: ${workflow.id}\ndescription: Fixture\n---\n`);
    writeFileSync(join(root, workflow.agent), 'policy: {}\n');
  }
  mkdirSync(join(root, 'sources'));
  mkdirSync(join(root, 'afk/catalog'), { recursive: true });
  const save = () => {
    writeFileSync(join(root, 'sources/composition.json'), JSON.stringify(composition));
    writeFileSync(join(root, 'afk/catalog/skills.json'), JSON.stringify(catalog));
  };
  const output = () => JSON.parse(readFileSync(join(root, 'skills/atlas-setup/references/dependencies.json')));
  save();
  buildSkills(root);
  buildSkills(root, { check: true });
  catalog.items[0].source = 'https://github.com/new-upstream/skills';
  save();
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  assert.equal(output().dependencies[0].source, catalog.items[0].source);
  composition.workflows[0].dependencies.push({ id: 'second', relationship: 'behavioral', required: false, condition: 'New optional path.' });
  catalog.items.push({ id: 'second', source: 'https://github.com/second/skills', args: ['--skill', 'second'] });
  save();
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  assert.equal(output().dependencies.length, 2);
  composition.workflows[0].dependencies = composition.workflows[0].dependencies.filter(dependency => dependency.id !== 'second');
  save();
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  assert.equal(output().dependencies.length, 1);
  catalog.items[0].source = catalog.defaultSource;
  save();
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  assert.equal(output().dependencies.length, 0);
});

test('Atlas Setup has matching manual discovery metadata', () => {
  const root = new URL('../', import.meta.url);
  const entry = readFileSync(new URL('skills/atlas-setup/SKILL.md', root), 'utf8');
  const policy = readFileSync(new URL('skills/atlas-setup/agents/openai.yaml', root), 'utf8');
  const catalog = JSON.parse(readFileSync(new URL('afk/catalog/skills.json', root)));
  assert.match(entry.split('---')[1], /disable-model-invocation: true/);
  assert.match(policy, /allow_implicit_invocation: false/);
  assert.equal(catalog.items.find(item => item.id === 'atlas-setup').invocation, 'manual');
});
