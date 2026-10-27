import { AtlasLink } from '@/components/AtlasLink';
import { CopyCommand } from '@/components/CopyCommand';
import agentsExample from '@/content/agents-example.md?raw';
import agentsDownload from '@/content/agents-example.md?url';

export function RecommendedTools() {
  return <article className="article tools-page">
    <header className="article-header">
      <h1>Recommended tools</h1>
      <p className="lead">The tools I use around Atlas, and the agent instructions that tie them together.</p>
      <p>These are personal recommendations. Pick what fits your host and project; you can use Atlas without installing the whole collection.</p>
    </header>
    <section aria-labelledby="browser-tools">
      <h2 id="browser-tools">Give the agent browser access</h2>
      <p>My usual pick is <a href="https://agent-browser.dev/">agent-browser</a>. Its recording works well for my workflow, and I’ve found it efficient enough for day-to-day use.</p>
      <blockquote className="workflow-aside"><p>Alternatives include <a href="https://github.com/microsoft/playwright-cli">Playwright CLI</a> for direct browser control, and <a href="https://browser-use.com/">Browser Use</a>, whose <a href="https://github.com/browser-use/browser-harness">Browser Harness</a> builds missing helpers as it works. Your host’s built-in browser tools can also work.</p></blockquote>
      <p>Make sure the agent can reach your running app and the intended login session. Installing skills alone does not supply that access.</p>
    </section>
    <section aria-labelledby="review-tools">
      <h2 id="review-tools">Review with Plannotator</h2>
      <p><a href="https://plannotator.ai/">Plannotator</a> gives you an interactive place to review a diff and leave annotations. Configure it for your agent host; Tracking uses it at the human acceptance checkpoint when available.</p>
    </section>
    <section aria-labelledby="worktree-tools">
      <h2 id="worktree-tools">Keep parallel work separate</h2>
      <p><a href="https://yggtree.logbookfordevs.com/">Yggtree</a> is our Git worktree CLI. Use it to create and manage separate checkouts for tasks, reviews or experiments while keeping your current work in place.</p>
      <CopyCommand command="npx yggtree" label="Yggtree command" />
      <p className="small-copy">Ask the agent to consult <code>yggtree --help</code> for its installed commands and options. <a href="https://github.com/logbookfordevs/yggdrasil-worktree">Source and installation guide</a>.</p>
    </section>
    <section aria-labelledby="agent-tools">
      <h2 id="agent-tools">Choose a home for your agents</h2>
      <p><a href="https://t3.codes/">T3 Code</a> is a control surface for coding agents, with desktop, web and mobile access. It is an option when you want to manage agent conversations through one app. Atlas also works in your existing supported host.</p>
      <p><a href="https://ai-field-kit.logbookfordevs.com/">AFK — AI Field Kit</a> is our optional tooling for installing and managing skills, profiles and shared rules. The <AtlasLink to="/stack/">stack guide</AtlasLink> shows both terminal and UI installation.</p>
    </section>
    <section id="agent-instructions" aria-labelledby="agent-instructions-title">
      <h2 id="agent-instructions-title">Borrow my agent instructions</h2>
      <p>This shareable version of my <code>AGENTS.md</code> covers skills, validation, code style and collaboration. Copy the sections you agree with into your host’s instructions file, or merge them into an existing one.</p>
      <p>The React/TypeScript requirement, JSX conventions and preferred tools reflect my workflow. Adapt them to yours. The example assumes Team Up is installed for delegation; inline visualizations depend on your host.</p>
      <a className="text-link" href={agentsDownload} download="AGENTS.md">Download AGENTS.md ↓</a>
      <details className="agents-example">
        <summary>Read and copy the example</summary>
        <CopyCommand command={agentsExample} label="AGENTS.md example" />
      </details>
    </section>
  </article>;
}
