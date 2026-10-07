import content from '../content.json';
import stack from '../stack.json';
import upstream from '../upstream.json';
import site from '../site.json';

export interface Skill {
  id: string;
  name: string;
  group: string;
  summary: string;
  intro: string;
  use: string;
  modes: string[][];
  prompt: string;
  note: string;
  origin?: string;
}

export interface UpstreamCredit {
  references: { id: string; title: string; author: string; url: string; classification: string }[];
  collections: { title: string; url: string }[];
}

export const skills: Skill[] = content;
export const upstreamCredits: Record<string, UpstreamCredit> = upstream;
export { site, stack };
export const repository = 'https://github.com/logbookfordevs/atlas-skills';
export const skillPath = (id: string) => `/skills/${id}/`;

export function pageMetadata(pathname: string) {
  const skill = skills.find((entry) => skillPath(entry.id).replace(/\/$/, '') === pathname.replace(/\/$/, ''));
  if (skill) return { title: skill.name, description: skill.summary, path: skillPath(skill.id), usesSiteImage: false };
  if (pathname.replace(/\/$/, '') === '/stack') {
    return { ...site.stack, path: '/stack/', usesSiteImage: true };
  }
  if (pathname === '/') {
    return { ...site.overview, path: '/', usesSiteImage: true };
  }
  return { title: 'Page not found', description: 'Find an Atlas skill in the reference.', path: null, usesSiteImage: false };
}
