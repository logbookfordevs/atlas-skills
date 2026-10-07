import { mkdir, readFile, writeFile } from 'node:fs/promises';

const skills = JSON.parse(await readFile(new URL('../content.json', import.meta.url), 'utf8'));
const site = JSON.parse(await readFile(new URL('../site.json', import.meta.url), 'utf8'));
const entry = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const pages = [
  { path: '/', ...site.overview, usesSiteImage: true },
  ...skills.map((skill) => ({ path: `/skills/${skill.id}/`, title: skill.name, description: skill.summary, usesSiteImage: false })),
  { path: '/stack/', ...site.stack, usesSiteImage: true },
];

function socialMetadata(page) {
  const title = page.path === '/' ? site.siteName : `${page.title} · ${site.name}`;
  const url = new URL(page.path, site.origin).href;
  const image = new URL(site.socialImage.path, site.origin).href;
  const properties = {
    'og:type': 'website',
    'og:site_name': site.siteName,
    'og:locale': site.locale,
    'og:title': title,
    'og:description': page.description,
    'og:url': url,
    ...(page.usesSiteImage ? {
      'og:image': image,
      'og:image:type': 'image/png',
      'og:image:width': String(site.socialImage.width),
      'og:image:height': String(site.socialImage.height),
      'og:image:alt': site.socialImage.alt,
    } : {}),
  };
  const names = {
    'twitter:card': page.usesSiteImage ? 'summary_large_image' : 'summary',
    'twitter:title': title,
    'twitter:description': page.description,
    ...(page.usesSiteImage ? { 'twitter:image': image, 'twitter:image:alt': site.socialImage.alt } : {}),
  };
  const tags = [`<link rel="canonical" href="${escape(url)}" />`];
  for (const [key, value] of Object.entries(properties)) tags.push(`<meta property="${key}" content="${escape(value)}" />`);
  for (const [key, value] of Object.entries(names)) tags.push(`<meta name="${key}" content="${escape(value)}" />`);
  return tags.join('\n    ');
}

// Crawlers receive route metadata before JavaScript, alongside each React entry.
for (const page of pages) {
  const directory = new URL(`../dist${page.path}`, import.meta.url);
  const html = entry.replace(/<title>[^<]*<\/title>/, () => `<title>${escape(page.title)} · ${escape(site.name)}</title>\n    ${socialMetadata(page)}`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, (_, before, after) => `${before}${escape(page.description)}${after}`);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html);
}

await writeFile(new URL('../dist/assets/atlas-stack.json', import.meta.url), await readFile(new URL('../stack.json', import.meta.url)));
console.log(`Built React entries and sharing metadata for ${pages.length} Atlas URLs.`);
