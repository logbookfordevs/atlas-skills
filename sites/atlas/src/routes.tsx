import { SiteShell } from '@/components/SiteShell';
import { Overview } from '@/pages/Overview';
import { SkillReference } from '@/pages/SkillReference';
import { Stack } from '@/pages/Stack';
import { NotFound } from '@/pages/NotFound';

export const routes = [{
  element: <SiteShell />,
  children: [
    { index: true, element: <Overview /> },
    { path: 'skills/:id', element: <SkillReference /> },
    { path: 'stack', element: <Stack /> },
    { path: '*', element: <NotFound /> },
  ],
}];
