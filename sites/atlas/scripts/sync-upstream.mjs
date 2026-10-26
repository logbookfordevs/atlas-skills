import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const atlasRoot = process.argv[2];
if (!atlasRoot) throw new Error('Pass the Atlas repository root: node scripts/sync-upstream.mjs ../..');

const authors = {
  'https://github.com/lucasmarkes/hairline': 'Lucas Marques',
  'https://github.com/wheresryan22/anatomy': 'Ryan',
  'https://github.com/OutThisLife/brooklyn-skills': 'Brooklyn Nicholson',
  'https://github.com/plannotator/effective-html': 'Plannotator',
  'https://github.com/jakubkrehel/skills': 'Jakub Krehel',
  'https://github.com/emilkowalski/skills': 'Emil Kowalski',
  'https://github.com/mattpocock/skills': 'Matt Pocock',
  'https://github.com/humanlayer/skills': 'HumanLayer',
  'https://github.com/addyosmani/agent-skills': 'Addy Osmani',
  'https://github.com/backnotprop/product-engineering': 'Product Engineering',
  'https://github.com/backnotprop/pstack': 'Lauren Tan / Pstack mirror',
};
const titles = {
  'hairline-create': 'Hairline Create', 'hairline-adopt': 'Hairline Adopt',
  anatomy: 'Anatomy', 'engraved-figures': 'Engraved Figures', teardown: 'Teardown',
  'iso-glow': 'ISO-GLOW', colorfigures: 'Colorfigures',
  "explain-interface": "Explain Interface",
  "state-machine": "State Machine",
  "mobile-native": "Mobile Native",
  "animation-performance": "Animation Performance",
  "break-ui": "Break UI",
  "pe-verify": "PE Verify",
  "tdd": "TDD",
  "source-driven-development": "Source-Driven Development",
  "grilling": "Grilling",
  "domain-modeling": "Domain Modeling",
  "grill-with-docs": "Grill With Docs",
  "wayfinder-local-tracker": "Wayfinder local tracker",
  "wayfinder": "Wayfinder",
  "pstack-create-verification-skill": "Create Verification Skill",
  "pstack-maintain-verification-skill": "Maintain Verification Skill",
  "pstack-benchmark-checklist": "Benchmark Checklist",
  "pstack-interrogate": "Interrogate",
  "pstack-blast-radius": "Blast Radius",
  "pstack-how": "How",
  "pstack-why": "Why",
  "pstack-teach": "Teach",
  "pstack-architect": "Architect",
  "pstack-arena": "Arena",
  "pstack-principle-boundary-discipline": "Boundary Discipline",
  "pstack-principle-exhaust-the-design-space": "Exhaust The Design Space",
  "pstack-principle-fix-root-causes": "Fix Root Causes",
  "pstack-principle-foundational-thinking": "Foundational Thinking",
  "pstack-principle-guard-the-context-window": "Guard The Context Window",
  "pstack-principle-laziness-protocol": "Laziness Protocol",
  "pstack-principle-make-operations-idempotent": "Make Operations Idempotent",
  "pstack-principle-minimize-reader-load": "Minimize Reader Load",
  "pstack-principle-outcome-oriented-execution": "Outcome Oriented Execution",
  "pstack-principle-prove-it-works": "Prove It Works",
  "pstack-principle-redesign-from-first-principles": "Redesign From First Principles",
  "pstack-principle-separate-before-serializing-shared-state": "Separate Before Serializing Shared State",
  "pstack-principle-subtract-before-you-add": "Subtract Before You Add",
  "pstack-swarm": "Swarm",

  'html-wireframe': 'HTML Wireframe', 'html-prototype': 'HTML Prototype',
  'better-colors': 'Better Colors', 'better-typography': 'Better Typography', 'better-layout': 'Better Layout',
  'better-accessibility': 'Better Accessibility', 'better-ui': 'Better UI', 'better-writing': 'Better Writing',
  'better-interface': 'Better Interface', 'interface-review': 'Interface Review',
  'improve-animations': 'Improve Animations', 'find-animation-opportunities': 'Find Animation Opportunities',
  animate: 'Animate', 'apple-design': 'Apple Design', 'code-review': 'Code Review',
  'review-animations': 'Review Animations', 'to-spec': 'To Spec', 'to-tickets': 'To Tickets',
  'show-me': 'Show Me', 'pstack-unslop': 'Unslop', 'pstack-technical-writing': 'Technical Writing',
  'pstack-show-me-your-work': 'Show Me Your Work',
  'matt-retro': 'Retro', 'pstack-correct': 'Correct',
  'pstack-principle-encode-lessons-in-structure': 'Encode Lessons in Structure',
};
const skills = JSON.parse(await readFile(new URL('../content.json', import.meta.url), 'utf8'));
const snapshot = {};
const composition = JSON.parse(await readFile(resolve(atlasRoot, 'sources/composition.json'), 'utf8'));
const directories = new Map(composition.workflows.map(workflow => [workflow.id, workflow.directory ?? `skills/${workflow.id}`]));

for (const skill of skills) {
  const receipt = JSON.parse(await readFile(resolve(atlasRoot, directories.get(skill.id), 'SOURCE-MANIFEST.json'), 'utf8'));
  const references = receipt.sources.map((source) => {
    if (source.upstream.type === 'download') return { id: source.id, title: titles[source.id], author: 'April Zhu (based on Tolga Cohce’s iso-figure)', url: source.upstream.page, classification: source.classification };
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
