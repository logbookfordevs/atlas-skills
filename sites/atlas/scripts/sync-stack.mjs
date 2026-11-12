import assert from 'node:assert/strict';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const check = process.argv.includes('--check');
const canonical = new URL('../../../stacks/atlas.json', import.meta.url);
const snapshot = new URL('../stack.json', import.meta.url);
const bytes = readFileSync(existsSync(canonical) ? canonical : snapshot);
const targets = [snapshot, new URL('../public/stack.json', import.meta.url), new URL('../public/assets/atlas-stack.json', import.meta.url)];
for (const target of targets) {
  if (check) assert.deepEqual(readFileSync(target), bytes, `Stale stack snapshot: ${target.pathname}`);
  else writeFileSync(target, bytes);
}

const content = JSON.parse(readFileSync(new URL('../content.json', import.meta.url)));
const stack = JSON.parse(bytes);
const atlas = stack.sources.find(source => source.source === 'https://github.com/logbookfordevs/atlas-skills');
assert.deepEqual(content.filter(skill => !skill.optional).map(skill => skill.id).sort(), [...atlas.skills].sort(), 'Website references must cover the Atlas stack selection exactly');
if (existsSync(canonical)) {
  const composition = JSON.parse(readFileSync(new URL('../../../sources/composition.json', import.meta.url)));
  assert.deepEqual(content.map(skill => skill.id).sort(), composition.workflows.map(workflow => workflow.id).sort(), 'Website references must cover every active Atlas package');
}
const dependencies = new URL('../../../skills/atlas-setup/references/dependencies.json', import.meta.url);
const thirdPartySnapshot = new URL('../third-party.json', import.meta.url);
if (existsSync(dependencies)) {
  const smallWords = new Set(['for', 'and', 'of', 'to']);
  const title = id => id.split('-').map((word, index) => index > 0 && smallWords.has(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  const thirdParty = JSON.parse(readFileSync(dependencies)).dependencies
    .filter(dependency => dependency.source.replace(/\.git$/, '') !== atlas.source)
    .map(dependency => ({
      id: dependency.id,
      name: title(dependency.skill),
      source: dependency.source,
      command: dependency.command,
      consumers: dependency.consumers.map(({ skill, required, condition }) => ({ skill, required, condition })),
    }));
  const bytes = JSON.stringify(thirdParty, null, 2) + '\n';
  if (check) assert.equal(readFileSync(thirdPartySnapshot, 'utf8'), bytes, 'Stale third-party snapshot: third-party.json');
  else writeFileSync(thirdPartySnapshot, bytes);
}
console.log('Website catalog, stack and third-party snapshots are aligned.');
