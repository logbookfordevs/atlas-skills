import { describe, expect, it } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { routes } from '@/routes';

function open(path = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return router;
}

describe('Atlas navigation', () => {
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
    await user.click(screen.getByRole('link', { name: 'Team Up' }));
    await screen.findByRole('heading', { level: 1, name: 'Team Up' });
    expect(screen.queryByRole('region', { name: 'Built on' })).toBeNull();
    expect(screen.getByRole('link', { name: 'Source receipt' })).toBeTruthy();
  });

  it('shows both original authors and the collection that selected Craft references', () => {
    open('/skills/atlas-craft/');
    const origins = screen.getByRole('region', { name: 'Built on' });
    expect(within(origins).getAllByText('Jakub Krehel')).toHaveLength(3);
    expect(within(origins).getByRole('link', { name: 'Product Engineering' }).getAttribute('href')).toBe('https://github.com/backnotprop/product-engineering');
  });
});
