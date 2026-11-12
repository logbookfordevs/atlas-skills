import content from '../content.json';
import stack from '../stack.json';
import upstream from '../upstream.json';
import site from '../site.json';
import redirects from '../skill-redirects.json';
import thirdParty from '../third-party.json';

export interface Skill {
  id: string;
  name: string;
  group: string;
  summary: string;
  intro: string;
  use: string;
  modes: { title: string; description: string; example: string }[];
  note: string;
  origin?: string;
  optional?: boolean;
  sourceDirectory?: string;
}

export interface UpstreamCredit {
  references: { id: string; title: string; author: string; url: string; classification: string }[];
  collections: { title: string; url: string }[];
}

export interface ThirdPartySkill {
  id: string;
  name: string;
  source: string;
  command: string;
  consumers: { skill: string; required: boolean; condition: string }[];
}

export const skills: Skill[] = content;
export const thirdPartySkills: ThirdPartySkill[] = thirdParty;
export const thirdPartyPath = (id: string) => `/#install-${id}`;
export const sourceLabel = (source: string) => source.replace(/^https:\/\/github\.com\//, '').replace(/\.git$/, '');
const recommendations: Record<string, string> = site.thirdParty;
export const thirdPartyRecommendation = (id: string) => recommendations[id];
export const thirdPartyByRecommendation = [...thirdPartySkills].sort((a, b) => Number(Boolean(recommendations[b.id])) - Number(Boolean(recommendations[a.id])));
export const skillGroups = [...new Set(skills.map((skill) => skill.group))];
export const upstreamCredits: Record<string, UpstreamCredit> = upstream;
export const skillRedirects: Record<string, string> = redirects;
export { site, stack };
export const repository = 'https://github.com/logbookfordevs/atlas-skills';
export const skillPath = (id: string) => `/skills/${id}/`;

export function pageMetadata(pathname: string) {
  const skill = skills.find((entry) => skillPath(entry.id).replace(/\/$/, '') === pathname.replace(/\/$/, ''));
  if (skill) return { title: skill.name, description: skill.summary, path: skillPath(skill.id), usesSiteImage: false };
  if (pathname.replace(/\/$/, '') === '/workflow') {
    return { ...site.workflow, path: '/workflow/', usesSiteImage: true };
  }
  if (pathname.replace(/\/$/, '') === '/tools') {
    return { ...site.tools, path: '/tools/', usesSiteImage: true };
  }
  if (pathname.replace(/\/$/, '') === '/stack') {
    return { ...site.stack, path: '/stack/', usesSiteImage: true };
  }
  if (pathname === '/') {
    return { ...site.overview, path: '/', usesSiteImage: true };
  }
  return { title: 'Page not found', description: 'Find an Atlas skill in the reference.', path: null, usesSiteImage: false };
}
