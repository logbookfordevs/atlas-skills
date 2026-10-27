import { AtlasLink } from '@/components/AtlasLink';
import { Arrow } from '@/components/Icons';
import { CopyCommand } from '@/components/CopyCommand';
import { repository, stack, skillPath } from '@/data';

export function Stack() {
  const total = stack.sources.reduce((count, source) => count + source.skills.length, 0);
  return <article className="stack-page">
    <header className="article-header"><h1>The shared stack</h1><p className="lead">Atlas, alongside skills from their original authors.</p><p>{total} selected skills from {stack.sources.length} sources. One manifest to keep the collection easy to find and install.</p></header>
    <section className="stack-intro">
      <h2>How it fits together</h2>
      <p>Atlas maintains its own utilities, adaptations, and compositions. The independent skills listed here remain separate and receive updates from their upstream authors.</p>
      <h2>Install the collection with AFK</h2>
      <p><a href="https://ai-field-kit.logbookfordevs.com/">AFK — AI Field Kit</a> is a local workspace for managing coding-agent skills, reusable profiles, tools and shared rules. Use it to install the Atlas collection, then manage which skills are available globally or in each project.</p>
      <h3>From your terminal</h3>
      <p>Install the stack without opening the AFK interface. The command guides you through choosing an agent and installation destination.</p>
      <CopyCommand command="npx @logbookfordevs/afk install https://atlas.logbookfordevs.com/stack.json" />
      <h3>Through the AFK interface</h3>
      <p>Open AFK to review the collection and manage your installed skills.</p>
      <CopyCommand command="npx @logbookfordevs/afk" />
      <ol>
        <li>Open <strong>Sources &amp; Stacks → Import stack</strong> in AFK.</li>
        <li>Paste the manifest URL below and review the selected sources and skills.</li>
        <li>Save the stack, then choose your agent and installation destination. Select <strong>Install</strong>, or copy the install script to run yourself.</li>
      </ol>
      <CopyCommand command="https://atlas.logbookfordevs.com/stack.json" label="manifest URL" />
      <p>AFK is optional. Each skill reference also provides a direct Skills CLI command. <a href="https://ai-field-kit.logbookfordevs.com/">Explore what AFK can do <Arrow /></a></p>
      <div className="stack-actions">
        <a className="text-link" href="/stack.json" download="atlas-stack.json">Download the manifest <Arrow down /></a>
        <a className="text-link" href={`${repository}/blob/main/docs/atlas-stack.md`}>Read the stack guide <Arrow /></a>
      </div>
    </section>
    <div className="stack-sources">{stack.sources.map((source) => {
      const isAtlas = source.source.replace(/\.git$/, '') === repository;
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
