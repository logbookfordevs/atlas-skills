import { useViewTransitionState } from 'react-router';
import { AtlasLink } from '@/components/AtlasLink';
import { Arrow } from '@/components/Icons';
import { skills, skillPath } from '@/data';
import type { Skill } from '@/data';

function SkillRow({ skill }: { skill: Skill }) {
  const isTransitioning = useViewTransitionState(skillPath(skill.id));
  return <AtlasLink className="skill-row" to={skillPath(skill.id)}>
    <span className="skill-name" style={{ viewTransitionName: isTransitioning ? 'skill-title' : 'none' }}>{skill.name}</span>
    <span className="skill-summary">{skill.summary}</span><Arrow />
  </AtlasLink>;
}

export function Overview() {
  const groups = [...new Set(skills.map((skill) => skill.group))];
  return <>
    <section className="intro" id="overview">
      <h1>Atlas</h1><p className="lead">Reusable skills for working with coding agents.</p>
      <p>A skill gives an agent instructions for a particular kind of work, from writing a specification to refining an interface.</p>
      <p>Atlas is the Logbook for Devs collection of utilities, adaptations, and composed skills. Each reference below explains what a skill does, when to use it, and how to get started.</p>
    </section>
    <section className="collection" id="skills">
      <h2>The skill reference</h2><p className="section-copy">Start with the work in front of you.</p>
      {groups.map((group) => <section className="skill-group" key={group}>
        <h3>{group}</h3><div className="skill-rows">{skills.filter((skill) => skill.group === group).map((skill) => <SkillRow key={skill.id} skill={skill} />)}</div>
      </section>)}
    </section>
    <section className="closing-note">
      <h2>One skill is a good start.</h2>
      <p>Install a package from its reference page, then ask your agent to use it. <AtlasLink to={skillPath('atlas-setup')}>Atlas Setup</AtlasLink> can check any independent dependencies it needs.</p>
      <p>The <AtlasLink to="/stack/">shared stack</AtlasLink> brings Atlas together with skills from other authors. Those skills stay independent, with their original sources and update paths.</p>
      <AtlasLink className="text-link" to="/stack/">Explore the shared stack <Arrow /></AtlasLink>
    </section>
  </>;
}
