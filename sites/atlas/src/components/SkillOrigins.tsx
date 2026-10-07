import { Arrow } from '@/components/Icons';
import { upstreamCredits } from '@/data';
import type { Skill } from '@/data';

export function SkillOrigins({ skill }: { skill: Skill }) {
  const credit = upstreamCredits[skill.id];
  const hasUpstream = Boolean(credit?.references.length);
  const hasCollection = Boolean(credit?.collections.length);
  if (!hasUpstream) return null;

  return <section className="skill-origins" aria-labelledby="origins-heading">
    <h2 id="origins-heading">Built on</h2>
    <p>{skill.origin}</p>
    <ul className="origin-list">{credit.references.map((source) => <li key={source.id}>
      <a href={source.url}>{source.title}<Arrow /></a>
      <span className="origin-author">{source.author}</span>
    </li>)}</ul>
    {hasCollection && <p className="origin-selection">References selected through {credit.collections.map((collection) => <a key={collection.url} href={collection.url}>{collection.title}</a>)}.</p>}
  </section>;
}
