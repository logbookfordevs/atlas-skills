import { mkdir, readFile, writeFile } from 'node:fs/promises';

const skills = JSON.parse(await readFile(new URL('../content.json', import.meta.url), 'utf8'));
const entry = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const pages = [
  ...skills.map((skill) => ({ path: `skills/${skill.id}`, title: skill.name, description: skill.summary })),
  { path: 'stack', title: 'The shared stack', description: 'Explore the Atlas stack and independent skills from their original authors. Download the shared manifest.' },
];

// Every known URL serves the React entry even on hosts without an SPA rewrite.
for (const page of pages) {
  const directory = new URL(`../dist/${page.path}/`, import.meta.url);
  const html = entry.replace('<title>Overview · Atlas</title>', `<title>${escape(page.title)} · Atlas</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${escape(page.description)}$2`);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html);
}

await writeFile(new URL('../dist/assets/atlas-stack.json', import.meta.url), await readFile(new URL('../stack.json', import.meta.url)));
console.log(`Built React entries for ${pages.length + 1} Atlas URLs.`);
