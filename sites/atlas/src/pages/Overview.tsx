import { useViewTransitionState } from 'react-router';
import { AtlasLink } from '@/components/AtlasLink';
import { Arrow } from '@/components/Icons';
import { CopyCommand } from '@/components/CopyCommand';
import { skills, skillGroups, skillPath, sourceLabel, thirdPartyByRecommendation, thirdPartyRecommendation } from '@/data';
import type { Skill, ThirdPartySkill } from '@/data';

function SkillRow({ skill }: { skill: Skill }) {
  const isTransitioning = useViewTransitionState(skillPath(skill.id));
  return <AtlasLink className="skill-row" to={skillPath(skill.id)}>
    <span className="skill-name" style={{ viewTransitionName: isTransitioning ? 'skill-title' : 'none' }}>{skill.name}</span>
    <span className="skill-summary">{skill.summary}</span><Arrow />
  </AtlasLink>;
}

function ConsumerLinks({ ids }: { ids: string[] }) {
  return ids.map((id, index) => {
    const separator = index === 0 ? '' : index === ids.length - 1 ? ' and ' : ', ';
    const name = skills.find((skill) => skill.id === id)?.name ?? id;
    return <span key={id}>{separator}<AtlasLink to={skillPath(id)}>{name}</AtlasLink></span>;
  });
}

function ThirdPartyRow({ skill }: { skill: ThirdPartySkill }) {
  const recommendation = thirdPartyRecommendation(skill.id);
  return <div className="third-party-row" id={`install-${skill.id}`}>
    <div className="third-party-heading">
      <h3>{skill.name}</h3>
      <a className="text-link" href={skill.source}>{sourceLabel(skill.source)} <Arrow /></a>
    </div>
    {recommendation && <p className="third-party-recommendation">{recommendation}</p>}
    <p className="third-party-use">Used by <ConsumerLinks ids={skill.consumers.map((consumer) => consumer.skill)} /></p>
    <CopyCommand command={skill.command} label={`${skill.name} installation command`} />
  </div>;
}

function ThirdPartySkills() {
  return <section className="collection third-party" id="install-separately" aria-labelledby="install-separately-title">
    <h2 id="install-separately-title">Install separately</h2>
    <p className="section-copy">Skills by other authors that Atlas works with. Atlas links to them rather than bundling copies, so install them from their original sources. <AtlasLink to={skillPath('atlas-setup')}>Atlas Setup</AtlasLink> can check which ones your installed skills use.</p>
    <div className="skill-rows">{thirdPartyByRecommendation.map((skill) => <ThirdPartyRow key={skill.id} skill={skill} />)}</div>
  </section>;
}

export function Overview() {
  return <>
    <section className="intro" id="overview">
      <h1>Atlas</h1><p className="lead">Reusable skills for working with coding agents.</p>
      <p>A skill gives an agent instructions for a particular kind of work, from writing a specification to refining an interface.</p>
      <p>Atlas is the Logbook for Devs collection of utilities, adaptations, and composed skills. Each reference below explains what a skill does, when to use it, and how to get started.</p>
      <p>To work in Atlas, invoke <AtlasLink to={skillPath('atlas-mode')}>Atlas Mode</AtlasLink> with your task. It applies the relevant skills and inner methods as the work develops; you can also use any skill directly.</p>
      <AtlasLink className="text-link" to="/workflow/">Follow an example workflow <Arrow /></AtlasLink>
    </section>
    <section className="collection" id="skills">
      <h2>The skill reference</h2><p className="section-copy">Start with the work in front of you.</p>
      {skillGroups.map((group) => <section className="skill-group" key={group}>
        <h3>{group}</h3><div className="skill-rows">{skills.filter((skill) => skill.group === group).map((skill) => <SkillRow key={skill.id} skill={skill} />)}</div>
      </section>)}
    </section>
    <ThirdPartySkills />
    <section className="closing-note">
      <h2>One skill is a good start.</h2>
      <p>Install a package from its reference page, then ask your agent to use it. <AtlasLink to={skillPath('atlas-setup')}>Atlas Setup</AtlasLink> can check any independent dependencies it needs.</p>
      <p>The <AtlasLink to="/stack/">Logbook Atlas Core</AtlasLink> brings Atlas together with skills from other authors. Those skills stay independent, with their original sources and update paths.</p>
      <AtlasLink className="text-link" to="/stack/">Explore the Core <Arrow /></AtlasLink>
    </section>
  </>;
}
