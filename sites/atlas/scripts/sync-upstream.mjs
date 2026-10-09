import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const atlasRoot = process.argv[2];
if (!atlasRoot) throw new Error('Pass the Atlas repository root: node scripts/sync-upstream.mjs ../..');

const authors = {
  'https://github.com/plannotator/effective-html': 'Plannotator',
  'https://github.com/jakubkrehel/skills': 'Jakub Krehel',
  'https://github.com/emilkowalski/skills': 'Emil Kowalski',
  'https://github.com/mattpocock/skills': 'Matt Pocock',
  'https://github.com/humanlayer/skills': 'HumanLayer',
  'https://github.com/hardikpandya/stop-slop': 'Hardik Pandya',
};
const titles = {
  'html-wireframe': 'HTML Wireframe', 'html-prototype': 'HTML Prototype',
  'better-colors': 'Better Colors', 'better-typography': 'Better Typography', 'better-layout': 'Better Layout',
  'better-accessibility': 'Better Accessibility', 'better-ui': 'Better UI', 'better-writing': 'Better Writing',
  'better-interface': 'Better Interface', 'interface-review': 'Interface Review',
  'improve-animations': 'Improve Animations', 'find-animation-opportunities': 'Find Animation Opportunities',
  animate: 'Animate', 'apple-design': 'Apple Design', 'code-review': 'Code Review',
  'review-animations': 'Review Animations', 'to-spec': 'To Spec', 'to-tickets': 'To Tickets',
  'show-me': 'Show Me', 'stop-slop': 'Stop Slop',
};
const skills = JSON.parse(await readFile(new URL('../content.json', import.meta.url), 'utf8'));
const snapshot = {};

for (const skill of skills) {
  const receipt = JSON.parse(await readFile(resolve(atlasRoot, 'skills', skill.id, 'SOURCE-MANIFEST.json'), 'utf8'));
  const references = receipt.sources.map((source) => {
    const { repository, commit, path } = source.upstream;
    const author = authors[repository];
    const title = titles[source.id];
    if (!author || !title) throw new Error(`Add an attribution label for ${source.id} from ${repository}.`);
    return { id: source.id, title, author, url: `${repository}/blob/${commit}/${path}`, classification: source.classification };
  });
  const selections = receipt.sources.flatMap((source) => source.selection ? [source.selection.repository] : []);
  const collections = [...new Set(selections)].map((repository) => {
    if (repository !== 'https://github.com/backnotprop/product-engineering') throw new Error(`Add a collection label for ${repository}.`);
    return { title: 'Product Engineering', url: repository };
  });
  snapshot[skill.id] = { references, collections };
}

await writeFile(new URL('../upstream.json', import.meta.url), JSON.stringify(snapshot, null, 2) + '\n');
console.log(`Refreshed upstream credits for ${skills.length} Atlas skills.`);
