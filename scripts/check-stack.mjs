import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export function validateStack(stack, hasPackage = () => true) {
  if (stack.version !== 1 || !stack.id || !stack.name || !Array.isArray(stack.sources) || !stack.sources.length) throw new Error('Invalid stack manifest');
  const selections = new Set();
  for (const group of stack.sources) {
    if (!group.name || typeof group.source !== 'string' || !group.source.trim() || !Array.isArray(group.skills) || !group.skills.length) throw new Error('Invalid stack source');
    for (const skill of group.skills) {
      if (!/^[a-z][a-z0-9-]*$/.test(skill)) throw new Error(`Invalid stack skill: ${skill}`);
      const key = `${group.source}/${skill}`;
      if (selections.has(key)) throw new Error(`Duplicate stack selection: ${skill}`);
      selections.add(key);
      if (/^https:\/\/github\.com\/logbookfordevs\/(?:logbook-atlas|atlas-skills)(?:#|$)/.test(group.source) && !hasPackage(skill)) throw new Error(`Missing Atlas package: ${skill}`);
    }
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const stack = JSON.parse(readFileSync(new URL('../stacks/atlas.json', import.meta.url)));
  validateStack(stack, skill => existsSync(new URL(`../skills/${skill}/SKILL.md`, import.meta.url)));
  console.log('Atlas stack verified.');
}
