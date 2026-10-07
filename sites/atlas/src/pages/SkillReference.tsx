import { useParams, useViewTransitionState } from 'react-router';
import { AtlasLink } from '@/components/AtlasLink';
import { CopyCommand } from '@/components/CopyCommand';
import { Arrow } from '@/components/Icons';
import { SkillOrigins } from '@/components/SkillOrigins';
import { repository, skills, skillPath } from '@/data';
import { NotFound } from '@/pages/NotFound';

export function SkillReference() {
  const { id = '' } = useParams();
  const isTransitioning = useViewTransitionState(skillPath(id));
  const skill = skills.find((entry) => entry.id === id);
  if (!skill) return <NotFound />;

  return <article className="article" key={skill.id}>
    <header className="article-header">
      <h1 style={{ viewTransitionName: isTransitioning ? 'skill-title' : 'none', width: 'fit-content' }}>{skill.name}</h1>
      <p className="lead">{skill.intro}</p><code className="skill-id">{skill.id}</code>
    </header>
    <section><h2>When to use it</h2><p>{skill.use}</p></section>
    <section><h2>How it works</h2><dl className="method-list">{skill.modes.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></section>
    <section><h2>Try it</h2><blockquote className="prompt"><p>“{skill.prompt}”</p></blockquote></section>
    <section><h2>Install</h2><CopyCommand command={`npx skills add ${repository} --skill ${skill.id}`} />
      <p className="small-copy">Install this package by name. Then use <AtlasLink to={skillPath('atlas-setup')}>Atlas Setup</AtlasLink> to check any independent dependencies.</p>
    </section>
    <aside className="reference-note"><p>{skill.note}</p></aside>
    <SkillOrigins skill={skill} />
    <section className="reference-sources">
      <h2>Go to the source</h2>
      <a href={`${repository}/blob/main/skills/${skill.id}/SKILL.md`}>Read the complete skill <Arrow /></a>
      <a href={`${repository}/blob/main/skills/${skill.id}/SOURCE-MANIFEST.json`}>Source receipt <Arrow /></a>
    </section>
    <AtlasLink className="back-link" to="/#skills">Back to all skills</AtlasLink>
  </article>;
}
