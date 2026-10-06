import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const catalogUrl = new URL("../afk/catalog/skills.json", import.meta.url);
const outputUrl = new URL("../stacks/atlas.json", import.meta.url);
const sourceNames = {
  "https://github.com/logbookfordevs/logbook-atlas#feat/skills-v2": "Logbook Atlas · Skills V2 preview",
  "https://github.com/mattpocock/skills": "Matt Pocock",
  "https://github.com/pbakaus/impeccable": "Impeccable",
  "https://github.com/leoreisdias/truss-framework": "Truss",
  "https://github.com/shadcn-ui/ui": "shadcn/ui",
  "plannotator/guides": "Plannotator",
  "backnotprop/orchestrator": "Orchestrator",
  "backnotprop/bro": "Bro",
  "https://github.com/plannotator/effective-html": "Effective HTML",
  "https://github.com/humanlayer/skills": "HumanLayer",
  "https://github.com/addyosmani/agent-skills.git": "Addy Osmani",
  "https://github.com/alesha-pro/tools": "Alesha Pro",
  "https://github.com/emilkowalski/skills": "Emil Kowalski",
};

export function buildStack(catalog) {
  const groups = new Map();
  const ids = new Set();
  for (const item of catalog.items) {
    if (ids.has(item.id)) throw new Error(`Duplicate catalog skill: ${item.id}`);
    ids.add(item.id);
    const selectedIndex = item.args.indexOf("--skill");
    const skill = item.args[selectedIndex + 1];
    if (selectedIndex < 0 || !skill || skill.startsWith("-")) throw new Error(`Missing explicit selection: ${item.id}`);
    if (!groups.has(item.source)) groups.set(item.source, { name: sourceNames[item.source] ?? item.source, source: item.source, skills: [] });
    const group = groups.get(item.source);
    if (group.skills.includes(skill)) throw new Error(`Duplicate selection: ${skill}`);
    group.skills.push(skill);
  }
  return {
    $schema: "https://raw.githubusercontent.com/logbookfordevs/ai-field-kit/feat/afk-fieldwork-pivot/docs/schemas/skill-stack.v1.schema.json",
    version: 1,
    id: "logbook-atlas",
    name: "Logbook Atlas",
    description: "The Logbook for Devs skill stack: Atlas utilities, adaptations and compositions alongside selected independent skills from their original authors. Skills V2 preview.",
    sources: [...groups.values()],
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const stack = buildStack(JSON.parse(readFileSync(catalogUrl, "utf8")));
  const expected = `${JSON.stringify(stack, null, 2)}\n`;
  if (process.argv.includes("--check")) {
    if (readFileSync(outputUrl, "utf8") !== expected) throw new Error("Stack manifest is stale; run pnpm build:stack.");
  } else writeFileSync(outputUrl, expected);
  console.log(`Atlas stack verified: ${stack.sources.length} sources, ${stack.sources.reduce((count, group) => count + group.skills.length, 0)} skills.`);
}
