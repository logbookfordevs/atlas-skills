import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { JSDOM } from 'jsdom';

const site = JSON.parse(await readFile(new URL('../site.json', import.meta.url), 'utf8'));
const skills = JSON.parse(await readFile(new URL('../content.json', import.meta.url), 'utf8'));
const pages = [
  { path: '/', ...site.overview, hasImage: true },
  { path: '/stack/', ...site.stack, hasImage: true },
  ...skills.map((skill) => ({ path: `/skills/${skill.id}/`, title: skill.name, description: skill.summary, hasImage: false })),
];

for (const page of pages) {
  test(`crawlers can read the correct metadata at ${page.path} without JavaScript`, async () => {
    const html = await readFile(new URL(`../dist${page.path}index.html`, import.meta.url), 'utf8');
    const dom = new JSDOM(html);
    const head = dom.window.document.head;
    const meta = (attribute, key) => {
      const matches = head.querySelectorAll(`meta[${attribute}="${key}"]`);
      assert.equal(matches.length, 1, `${key} should appear once`);
      return matches[0].getAttribute('content');
    };
    const title = page.path === '/' ? site.siteName : `${page.title} · Atlas`;
    const url = `https://atlas.logbookfordevs.com${page.path}`;

    assert.equal(dom.window.document.title, `${page.title} · Atlas`);
    assert.equal(meta('name', 'description'), page.description);
    assert.equal(meta('property', 'og:title'), title);
    assert.equal(meta('property', 'og:description'), page.description);
    assert.equal(meta('property', 'og:type'), 'website');
    assert.equal(meta('property', 'og:site_name'), site.siteName);
    assert.equal(meta('property', 'og:locale'), 'en_US');
    assert.equal(meta('property', 'og:url'), url);
    assert.equal(head.querySelectorAll('link[rel="canonical"]').length, 1);
    assert.equal(head.querySelector('link[rel="canonical"]').getAttribute('href'), url);
    assert.equal(meta('name', 'twitter:title'), title);
    assert.equal(meta('name', 'twitter:description'), page.description);
    assert.equal(meta('name', 'twitter:card'), page.hasImage ? 'summary_large_image' : 'summary');

    if (page.hasImage) {
      assert.equal(meta('property', 'og:image'), 'https://atlas.logbookfordevs.com/og.png');
      assert.equal(meta('property', 'og:image:type'), 'image/png');
      assert.equal(meta('property', 'og:image:width'), String(site.socialImage.width));
      assert.equal(meta('property', 'og:image:height'), String(site.socialImage.height));
      assert.equal(meta('property', 'og:image:alt'), site.socialImage.alt);
      assert.equal(meta('name', 'twitter:image'), meta('property', 'og:image'));
      assert.equal(meta('name', 'twitter:image:alt'), site.socialImage.alt);
    } else {
      assert.equal(head.querySelectorAll('meta[property^="og:image"], meta[name^="twitter:image"]').length, 0);
    }

    assert.equal(head.querySelector('meta[name="robots"]'), null);
    assert.equal(dom.window.document.getElementById('root').childElementCount, 0);
    dom.window.close();
  });
}

test('the deployed PNG matches its image metadata and is under 5 MB', async () => {
  const image = await readFile(new URL('../dist/og.png', import.meta.url));
  assert.deepEqual([...image.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.equal(image.readUInt32BE(16), site.socialImage.width);
  assert.equal(image.readUInt32BE(20), site.socialImage.height);
  assert.ok(image.length < 5_000_000);
});
