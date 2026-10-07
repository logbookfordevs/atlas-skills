import { AtlasLink } from '@/components/AtlasLink';
import { Arrow } from '@/components/Icons';
import { repository, stack, skillPath } from '@/data';

export function Stack() {
  const total = stack.sources.reduce((count, source) => count + source.skills.length, 0);
  return <article className="stack-page">
    <header className="article-header"><h1>The shared stack</h1><p className="lead">Atlas, alongside skills from their original authors.</p><p>{total} selected skills from {stack.sources.length} sources. One manifest to keep the collection easy to find and install.</p></header>
    <section className="stack-intro">
      <h2>How it fits together</h2>
      <p>Atlas maintains its own utilities, adaptations, and compositions. The independent skills listed here remain separate and receive updates from their upstream authors.</p>
      <p><a href="https://github.com/logbookfordevs/ai-field-kit">AFK</a> manages installed skills and activation. Import the manifest in Sources &amp; Stacks, review the selection, and copy an install script.</p>
      <div className="stack-actions">
        <a className="text-link" href="/assets/atlas-stack.json" download="atlas-stack.json">Download the manifest <Arrow down /></a>
        <a className="text-link" href={`${repository}/blob/main/docs/atlas-stack.md`}>Read the stack guide <Arrow /></a>
      </div>
    </section>
    <div className="stack-sources">{stack.sources.map((source, index) => {
      const isAtlas = index === 0;
      const sourceUrl = source.source.startsWith('https://') ? source.source.replace(/\.git$/, '') : `https://github.com/${source.source}`;
      return <section className="stack-source" key={source.source}>
        <h2>{source.name}</h2><a className="text-link" href={sourceUrl}>{isAtlas ? 'Atlas repository' : 'Original source'} <Arrow /></a>
        <div className="stack-skills">{source.skills.map((id) => <span key={id}>
          {isAtlas && <AtlasLink to={skillPath(id)}>{id}</AtlasLink>}
          {!isAtlas && id}
        </span>)}</div>
      </section>;
    })}</div>
  </article>;
}
