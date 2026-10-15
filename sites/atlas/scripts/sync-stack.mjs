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
assert.deepEqual(content.map(skill => skill.id).sort(), [...atlas.skills].sort(), 'Website references must cover the Atlas stack selection exactly');
if (existsSync(canonical)) {
  const composition = JSON.parse(readFileSync(new URL('../../../sources/composition.json', import.meta.url)));
  assert.deepEqual(content.map(skill => skill.id).sort(), composition.workflows.map(workflow => workflow.id).sort(), 'Website references must cover every active Atlas package');
}
console.log('Website catalog and stack snapshots are aligned.');
