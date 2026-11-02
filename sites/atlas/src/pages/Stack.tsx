import { AtlasLink } from '@/components/AtlasLink';
import { Arrow } from '@/components/Icons';
import { CopyCommand } from '@/components/CopyCommand';
import { repository, stack, skillPath } from '@/data';

export function Stack() {
  const total = stack.sources.reduce((count, source) => count + source.skills.length, 0);
  return <article className="stack-page">
    <header className="article-header"><h1>Logbook Atlas Core</h1><p className="lead">The skills Leonardo keeps on every machine.</p><p>{total} selected skills from {stack.sources.length} sources. One manifest to find and install the collection.</p></header>
    <section className="stack-intro">
      <h2>How it fits together</h2>
      <p>This collection is the Core of Leonardo’s AFK kit: his always-on selection. Atlas maintains its own utilities, adaptations, and compositions. Independent skills keep their original sources and update paths.</p>
      <h2>Install the Core with AFK</h2>
      <p><a href="https://ai-field-kit.logbookfordevs.com/">AFK — AI Field Kit</a> manages coding-agent skills, tools and shared rules. Its upcoming kit release groups skills into Core, Packs and Try later bookmarks. Packs replace profiles and stacks; turn them on globally or per project, or read them once.</p>
      <h3>From your terminal</h3>
      <p>Available since AFK 2.0.6, including released 2.0.7. The command guides you through choosing an agent and installation destination.</p>
      <CopyCommand command="npx @logbookfordevs/afk install https://atlas.logbookfordevs.com/stack.json" />
      <p>With AFK already installed, start the command with <code>afk install</code>. In the upcoming kit release, AFK saves the manifest as a pack named Logbook Atlas, then installs its skills through Skills CLI. Turn that pack on for <strong>Global</strong> to keep it always on. Importing a manifest does not add it directly to your Core.</p>
      <h3>Through the AFK interface</h3>
      <p>Open AFK to review the collection and manage your installed skills.</p>
      <CopyCommand command="npx @logbookfordevs/afk" />
      <ol>
        <li>Choose <strong>Import pack</strong> in <strong>Kit → Packs</strong> (in AFK 2.0.7: <strong>Sources &amp; Stacks</strong>).</li>
        <li>Paste the manifest URL below and review the selected sources and skills.</li>
        <li>Import saves the selection without installing skills. Install through AFK or run its copied Skills CLI script.</li>
        <li>In the kit release, turn the saved Logbook Atlas pack on for <strong>Global</strong> to keep it always on.</li>
      </ol>
      <CopyCommand command="https://atlas.logbookfordevs.com/stack.json" label="manifest URL" />
      <p>AFK is optional. Install Atlas packages directly with Skills CLI, then add independent skills from the sources below. Each Atlas reference provides a command for that package.</p>
      <CopyCommand command={`npx skills add ${repository}`} />
      <p><a href="https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#install-directly-from-a-manifest">Read AFK’s manifest installation guide <Arrow /></a></p>
      <div className="stack-actions">
        <a className="text-link" href="/stack.json" download="atlas-stack.json">Download the manifest <Arrow down /></a>
        <a className="text-link" href={`${repository}/blob/main/docs/atlas-stack.md`}>Read the Core guide <Arrow /></a>
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
