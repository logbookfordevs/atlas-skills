import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { setupDependencies } from './setup-dependencies.mjs';
import { buildSkills } from './build-skills.mjs';

function fixture() {
  const dependency = { id: 'external', relationship: 'behavioral', required: true, condition: 'Selected path.' };
  return {
    composition: { version: 1, sources: [], workflows: [
      { id: 'atlas-fixture', entry: 'skills/atlas-fixture/SKILL.md', agent: 'skills/atlas-fixture/agents/openai.yaml', methods: [], dependencies: [dependency, { id: 'atlas-owned', relationship: 'behavioral', required: true, condition: 'Owned path.' }, { id: 'tool', relationship: 'tool' }] },
      { id: 'atlas-owned', entry: 'skills/atlas-owned/SKILL.md', agent: 'skills/atlas-owned/agents/openai.yaml', methods: [], dependencies: [{ ...dependency, required: false }] },
      { id: 'atlas-setup', entry: 'skills/atlas-setup/SKILL.md', agent: 'skills/atlas-setup/agents/openai.yaml', methods: [], generatedReferences: [{ generator: 'setup-dependencies', target: 'references/dependencies.json' }, { generator: 'stack-manifest', target: 'references/stack.json' }] },
    ] },
    stack: { version: 1, sources: [{ name: 'Upstream', source: 'https://github.com/upstream/skills', skills: ['external'] }] },
  };
}

test('setup resolves stack sources, combines consumers and includes owned packages but excludes tools', () => {
  const { composition, stack } = fixture();
  const output = setupDependencies(composition, stack);
  assert.equal(output.dependencies.length, 2);
  const external = output.dependencies.find(dependency => dependency.id === 'external');
  assert.equal(external.consumers.length, 2);
  assert.equal(external.command, 'npx skills add https://github.com/upstream/skills --skill external');
  const owned = output.dependencies.find(dependency => dependency.id === 'atlas-owned');
  assert.equal(owned.command, 'npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-owned');
  assert.deepEqual(owned.consumers, [{ skill: 'atlas-fixture', required: true, condition: 'Owned path.' }]);
});

test('setup rejects missing, ambiguous and unsafe stack selections', () => {
  const { composition, stack } = fixture();
  assert.throws(() => setupDependencies(composition, { sources: [] }), /Missing dependency stack selection/);
  stack.sources.push({ ...stack.sources[0], source: 'https://github.com/other/skills' });
  assert.throws(() => setupDependencies(composition, stack), /Ambiguous setup skill/);
  stack.sources.pop();
  stack.sources[0].source += ';echo';
  assert.throws(() => setupDependencies(composition, stack), /Unsupported setup source/);
});

test('independently installed optional packages expose owned dependencies with their loading conditions', () => {
  for (const base of ['utility-skills', 'creative-skills']) {
    const { composition, stack } = fixture();
    composition.workflows[0].directory = `${base}/atlas-fixture`;
    const output = setupDependencies(composition, stack);
    const owned = output.dependencies.find(dependency => dependency.id === 'atlas-owned');
    assert.equal(owned.command, 'npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-owned');
    assert.deepEqual(owned.consumers, [{ skill: 'atlas-fixture', required: true, condition: 'Owned path.' }]);
    assert.equal(output.dependencies.length, 2);
    stack.sources.push({ name: 'Atlas', source: 'https://github.com/logbookfordevs/atlas-skills#reviewed', skills: ['atlas-owned'] });
    const selected = setupDependencies(composition, stack).dependencies.find(dependency => dependency.id === 'atlas-owned');
    assert.equal(selected.source, stack.sources[1].source);
    composition.workflows[0].dependencies = [];
    assert.ok(!setupDependencies(composition, stack).dependencies.some(dependency => dependency.id === 'atlas-owned'));
  }
});

test('core packages expose optional utility dependencies even when Core is the selected stack', () => {
  const { composition, stack } = fixture();
  composition.workflows[1].directory = 'utility-skills/atlas-owned';
  composition.workflows[0].dependencies[1].required = false;
  stack.sources.push({ name: 'Atlas Core', source: 'https://github.com/logbookfordevs/atlas-skills', skills: ['atlas-fixture'] });
  const owned = setupDependencies(composition, stack).dependencies.find(dependency => dependency.id === 'atlas-owned');
  assert.equal(owned.command, 'npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-owned');
  assert.deepEqual(owned.consumers, [{ skill: 'atlas-fixture', required: false, condition: 'Owned path.' }]);
});

test('setup regenerates when its stack source or required dependencies change without an AFK catalog', t => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-setup-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const { composition, stack } = fixture();
  for (const workflow of composition.workflows) {
    mkdirSync(join(root, 'skills', workflow.id, 'agents'), { recursive: true });
    writeFileSync(join(root, workflow.entry), `---\nname: ${workflow.id}\ndescription: Fixture\n---\n`);
    writeFileSync(join(root, workflow.agent), 'policy: {}\n');
  }
  mkdirSync(join(root, 'sources'));
  mkdirSync(join(root, 'stacks'));
  const save = () => {
    writeFileSync(join(root, 'sources/composition.json'), JSON.stringify(composition));
    writeFileSync(join(root, 'stacks/atlas.json'), JSON.stringify(stack));
  };
  save(); buildSkills(root); buildSkills(root, { check: true });
  const bundledStack = join(root, 'skills/atlas-setup/references/stack.json');
  assert.deepEqual(JSON.parse(readFileSync(bundledStack)), stack);
  stack.sources[0].source = 'https://github.com/new-upstream/skills';
  save();
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  assert.deepEqual(JSON.parse(readFileSync(bundledStack)), stack);
  const output = JSON.parse(readFileSync(join(root, 'skills/atlas-setup/references/dependencies.json')));
  assert.equal(output.dependencies.find(dependency => dependency.id === 'external').source, stack.sources[0].source);
  composition.workflows[0].dependencies = [];
  composition.workflows[1].dependencies = [];
  save(); buildSkills(root);
  assert.equal(JSON.parse(readFileSync(join(root, 'skills/atlas-setup/references/dependencies.json'))).dependencies.length, 0);
});

test('Atlas Setup preserves manual discovery metadata', () => {
  assert.match(readFileSync(new URL('../skills/atlas-setup/SKILL.md', import.meta.url), 'utf8').split('---')[1], /disable-model-invocation: true/);
  assert.match(readFileSync(new URL('../skills/atlas-setup/agents/openai.yaml', import.meta.url), 'utf8'), /allow_implicit_invocation: false/);
});
