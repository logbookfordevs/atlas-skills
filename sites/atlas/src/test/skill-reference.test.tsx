import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { routes } from '@/routes';
import { skills } from '@/data';

function open(path: string) {
  render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />);
}

describe('Skill reference samples', () => {
  it('shows a sample image for each Atlas Figures treatment that has one', async () => {
    open('/skills/atlas-figures/');
    await screen.findByRole('heading', { level: 1, name: 'Atlas Figures' });

    const treatments = skills.find((skill) => skill.id === 'atlas-figures')!.modes;
    for (const treatment of treatments) {
      expect(screen.getByRole('img', { name: `${treatment.title} sample` }).getAttribute('src')).toBe(treatment.image);
    }
  });

  it('renders no sample images for modes without one', async () => {
    open('/skills/atlas-review/');
    await screen.findByRole('heading', { level: 1, name: 'Atlas Review' });

    expect(screen.queryAllByRole('img', { name: / sample$/ })).toHaveLength(0);
  });
});
