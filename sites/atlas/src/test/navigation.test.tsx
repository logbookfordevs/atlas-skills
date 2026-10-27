import { describe, expect, it } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { routes } from '@/routes';
import { site, skills, skillGroups } from '@/data';

function open(path = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

describe('Atlas navigation', () => {
  it('updates sharing metadata on navigation and history without retaining another page’s image', async () => {
    const user = userEvent.setup();
    const router = open();
    const property = (key: string) => document.head.querySelector(`meta[property="${key}"]`)?.getAttribute('content');
    const name = (key: string) => document.head.querySelector(`meta[name="${key}"]`)?.getAttribute('content');
    const canonical = () => document.head.querySelector('link[rel="canonical"]')?.getAttribute('href');

    expect(property('og:title')).toBe(site.siteName);
    expect(property('og:image')).toBe(`${site.origin}/og.png`);
    expect(name('twitter:card')).toBe('summary_large_image');
    expect(canonical()).toBe(`${site.origin}/`);

    await user.click(screen.getByRole('link', { name: /^HTML UI\s*Make/ }));
    await screen.findByRole('heading', { level: 1, name: 'HTML UI' });
    expect(property('og:title')).toBe('HTML UI · Atlas');
    expect(property('og:description')).toBe('Make an interface idea concrete before committing to it.');
    expect(property('og:url')).toBe(`${site.origin}/skills/html-ui/`);
    expect(canonical()).toBe(`${site.origin}/skills/html-ui/`);
    expect(property('og:image')).toBeUndefined();
    expect(property('og:image:width')).toBeUndefined();
    expect(name('twitter:image')).toBeUndefined();
    expect(name('twitter:card')).toBe('summary');

    await router.navigate(-1);
    await waitFor(() => expect(property('og:image')).toBe(`${site.origin}/og.png`));
    expect(document.head.querySelectorAll('meta[property="og:title"]')).toHaveLength(1);

    await router.navigate('/skills/missing/');
    await screen.findByRole('heading', { level: 1, name: 'Page not found.' });
    expect(canonical()).toBeUndefined();
    expect(property('og:url')).toBeUndefined();
    expect(property('og:image')).toBeUndefined();
    expect(name('robots')).toBe('noindex');

    await router.navigate('/stack/');
    await screen.findByRole('heading', { level: 1, name: 'The shared stack' });
    expect(canonical()).toBe(`${site.origin}/stack/`);
    expect(property('og:image')).toBe(`${site.origin}/og.png`);
    expect(name('robots')).toBeUndefined();
  });

  it('keeps the shell and chosen appearance through links and browser history', async () => {
    const user = userEvent.setup();
    const router = open();
    const header = document.querySelector('.header');
    const toggle = screen.getByRole('button', { name: 'Switch to dark appearance' });
    await user.click(toggle);
    await user.click(screen.getByRole('link', { name: /^Atlas Motion\s*Build/ }));
    await screen.findByRole('heading', { level: 1, name: 'Atlas Motion' });
    expect(document.querySelector('.header')).toBe(header);
    expect(screen.getByRole('button', { name: 'Switch to light appearance' })).toBe(toggle);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('atlas-appearance')).toBe('dark');
    expect(document.title).toBe('Atlas Motion · Atlas');

    await router.navigate(-1);
    await screen.findByRole('heading', { level: 1, name: 'Atlas' });
    expect(document.querySelector('.header')).toBe(header);
    await router.navigate(1);
    await screen.findByRole('heading', { level: 1, name: 'Atlas Motion' });
  });

  it('opens direct references, changes references, and returns to the skills section', async () => {
    const user = userEvent.setup();
    const router = open('/skills/animated-driven-frontend/');
    await screen.findByRole('heading', { level: 1, name: 'Animated-Driven Frontend' });
    await user.click(screen.getByRole('link', { name: 'Atlas Craft' }));
    await screen.findByRole('heading', { level: 1, name: 'Atlas Craft' });
    expect(document.activeElement?.id).toBe('main');
    await user.click(screen.getByRole('link', { name: 'Back to all skills' }));
    await screen.findByRole('heading', { name: 'The skill reference' });
    expect(router.state.location.pathname).toBe('/');
    expect(router.state.location.hash).toBe('#skills');
  });

  it('uses the saved first-paint appearance and supports keyboard navigation without motion', async () => {
    const user = userEvent.setup();
    document.documentElement.dataset.theme = 'dark';
    const router = open('/stack/');
    expect(screen.getByRole('button', { name: 'Switch to light appearance' })).toBeTruthy();
    const overview = screen.getByRole('link', { name: 'Overview' });
    overview.focus();
    await user.keyboard('{Enter}');
    await waitFor(() => expect(router.state.location.pathname).toBe('/'));
    expect(document.documentElement.dataset.navigation).toBe('keyboard');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('offers a way back from an unknown skill', async () => {
    open('/skills/missing/');
    expect(await screen.findByRole('heading', { level: 1, name: 'Page not found.' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Browse the skill reference' }).getAttribute('href')).toBe('/#skills');
  });

  it('credits the original HTML methods, then omits upstream credits on an authored skill', async () => {
    const user = userEvent.setup();
    open('/skills/html-ui/');
    const origins = screen.getByRole('region', { name: 'Built on' });
    const wireframe = within(origins).getByRole('link', { name: 'HTML Wireframe' });
    const prototype = within(origins).getByRole('link', { name: 'HTML Prototype' });
    expect(wireframe.getAttribute('href')).toMatch(/^https:\/\/github.com\/plannotator\/effective-html\/blob\/[a-f0-9]{40}\/skills\/html-wireframe\/SKILL.md$/);
    expect(prototype.getAttribute('href')).toMatch(/\/skills\/html-prototype\/SKILL.md$/);
    expect(within(origins).getAllByText('Plannotator')).toHaveLength(2);
    await user.click(screen.getByRole('link', { name: 'Animated-Driven Frontend' }));
    await screen.findByRole('heading', { level: 1, name: 'Animated-Driven Frontend' });
    expect(screen.queryByRole('region', { name: 'Built on' })).toBeNull();
    expect(screen.getByRole('link', { name: 'Source receipt' })).toBeTruthy();
  });

  it('offers a JSON manifest for AFK and resolves every Atlas stack link', async () => {
    const user = userEvent.setup();
    const router = open('/stack/');
    expect(screen.getByRole('link', { name: /Download the manifest/ }).getAttribute('href')).toBe('/stack.json');
    expect(screen.getByRole('link', { name: 'AFK — AI Field Kit' }).getAttribute('href')).toBe('https://ai-field-kit.logbookfordevs.com/');
    expect(screen.getByText('npx @logbookfordevs/afk install https://atlas.logbookfordevs.com/stack.json')).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Through the AFK interface' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Copy manifest URL' }));
    expect(await navigator.clipboard.readText()).toBe('https://atlas.logbookfordevs.com/stack.json');
    const atlasLinks = screen.getAllByRole('link').filter(link => link.getAttribute('href')?.startsWith('/skills/'));
    for (const link of atlasLinks) {
      await router.navigate(link.getAttribute('href')!);
      expect(screen.queryByRole('heading', { name: 'Page not found.' })).toBeNull();
      await screen.findByRole('heading', { level: 1 });
    }
  });

  it('shows both original authors and the collection that selected Craft references', () => {
    open('/skills/atlas-craft/');
    const origins = screen.getByRole('region', { name: 'Built on' });
    expect(within(origins).getAllByText('Jakub Krehel').length).toBeGreaterThan(0);
    expect(within(origins).getAllByText('Emil Kowalski').length).toBeGreaterThan(0);
    for (const title of ['Better Accessibility', 'Better UI', 'Better Writing', 'Animate', 'Apple Design', 'Mobile Native']) {
      expect(within(origins).getByRole('link', { name: title }).getAttribute('href')).toMatch(/\/blob\/[a-f0-9]{40}\//);
    }
    expect(within(origins).getByRole('link', { name: 'Product Engineering' }).getAttribute('href')).toBe('https://github.com/backnotprop/product-engineering');
  });
});


it('links optional creative references to their actual source directory', async () => {
  open('/skills/atlas-figures/');
  await screen.findByRole('heading', { level: 1, name: 'Atlas Figures' });
  expect(screen.getByRole('link', { name: /Read the complete skill/ }).getAttribute('href')).toBe('https://github.com/logbookfordevs/atlas-skills/blob/main/creative-skills/atlas-figures/SKILL.md');
  expect(screen.getByRole('link', { name: /Source receipt/ }).getAttribute('href')).toBe('https://github.com/logbookfordevs/atlas-skills/blob/main/creative-skills/atlas-figures/SOURCE-MANIFEST.json');
});


it('keeps the complete grouped skill navigation available on overview, workflow and stack pages', async () => {
  const router = open();
  for (const path of ['/', '/workflow/', '/stack/']) {
    await router.navigate(path);
    const directory = screen.getByRole('navigation', { name: 'Skill reference' });
    expect(within(directory).getAllByRole('link')).toHaveLength(skills.length);
    for (const group of skillGroups) {
      const section = within(directory).getByRole('group', { name: group });
      for (const skill of skills.filter((entry) => entry.group === group)) {
        expect(within(section).getByRole('link', { name: skill.name }).getAttribute('href')).toBe(`/skills/${skill.id}/`);
      }
    }
  }
});

it('opens the workflow from the overview and copies a usable implementation prompt', async () => {
  const user = userEvent.setup();
  const router = open();
  await user.click(screen.getByRole('link', { name: /Follow an example workflow/ }));
  await screen.findByRole('heading', { level: 1, name: 'A workflow you can borrow.' });
  expect(screen.getByRole('link', { name: 'Workflow' }).getAttribute('aria-current')).toBe('page');
  expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${site.origin}/workflow/`);
  await user.click(screen.getByRole('button', { name: 'Copy implementation prompt' }));
  const prompt = await navigator.clipboard.readText();
  expect(prompt).toContain('docs/tickets/saved-filters/');
  expect(prompt).toContain('track the implementation');
  expect(prompt).toContain('QA with atlas-verify');
  expect(prompt).toContain('give me a report');
  await user.click(screen.getByRole('link', { name: 'With the full stack ↓' }));
  expect(router.state.location.hash).toBe('#full-stack');
});

it('closes the mobile directory control after selecting a skill and marks the new reference active', async () => {
  const user = userEvent.setup();
  open('/workflow/');
  const toggle = screen.getByRole('button', { name: 'Browse skills' });
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
  await user.click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  const directory = screen.getByRole('navigation', { name: 'Skill reference' });
  await user.click(within(directory).getByRole('link', { name: 'Atlas Verify' }));
  await screen.findByRole('heading', { level: 1, name: 'Atlas Verify' });
  expect(toggle.getAttribute('aria-expanded')).toBe('false');
  expect(within(directory).getByRole('link', { name: 'Atlas Verify' }).getAttribute('aria-current')).toBe('page');
});

it('reaches recommended tools from setup and copies the downloadable agent instructions', async () => {
  const user = userEvent.setup();
  open('/workflow/');
  await user.click(screen.getByRole('link', { name: /^Recommended Tools$/ }));
  await screen.findByRole('heading', { level: 1, name: 'Recommended tools' });
  expect(screen.getByRole('link', { name: /^Recommended tools$/ }).getAttribute('aria-current')).toBe('page');
  expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${site.origin}/tools/`);
  expect(screen.getByRole('link', { name: 'Download AGENTS.md ↓' }).getAttribute('download')).toBe('AGENTS.md');
  await user.click(screen.getByText('Read and copy the example'));
  await user.click(screen.getByRole('button', { name: 'Copy AGENTS.md example' }));
  const example = await navigator.clipboard.readText();
  expect(example).toContain('## Skills\n');
  expect(example).toContain('## Sub-agents\n');
  expect(example).not.toContain('Lexamica');
});

it('explores workflow stations, copies the selected request and returns from acceptance to implementation', async () => {
  const user = userEvent.setup();
  const router = open('/workflow/');
  const stations = screen.getByRole('group', { name: 'Workflow stations' });
  await user.click(within(stations).getByRole('button', { name: 'Specify' }));
  expect(within(stations).getByRole('button', { name: 'Specify' }).getAttribute('aria-pressed')).toBe('true');
  await user.click(screen.getByRole('button', { name: 'Copy Specify figure prompt' }));
  expect(await navigator.clipboard.readText()).toMatch(/^\/atlas-to-spec /);
  await user.click(within(stations).getByRole('button', { name: 'Accept' }));
  expect(screen.queryByRole('button', { name: /Copy .* figure prompt/ })).toBeNull();
  await user.click(screen.getByRole('button', { name: /Revisit implementation/ }));
  expect(within(stations).getByRole('button', { name: 'Build & QA' }).getAttribute('aria-pressed')).toBe('true');
  await user.click(screen.getByRole('link', { name: 'Read this step ↓' }));
  expect(router.state.location.hash).toBe('#stage-build');
});
