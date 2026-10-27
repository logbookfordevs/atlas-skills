import { AtlasLink } from '@/components/AtlasLink';
import { CopyCommand } from '@/components/CopyCommand';
import { WorkflowAnatomy } from '@/components/workflow-anatomy/WorkflowAnatomy';
import { Arrow } from '@/components/Icons';
import { repository, skillPath } from '@/data';

export function Workflow() {
  return <article className="article workflow-page">
    <header className="article-header">
      <h1>A workflow you can borrow.</h1>
      <p className="lead">Take one idea through planning, implementation, QA and review. Then adapt the path to your work.</p>
      <p>Our example: let people save a dashboard filter and reopen it later. Ownership and sharing still need decisions. Here is how you could work through that with Atlas.</p>
      <nav className="workflow-jumps" aria-label="On this page">
        <AtlasLink to="/workflow/#setup">Tools &amp; setup ↓</AtlasLink><AtlasLink to="/workflow/#explore-workflow">Interactive view ↓</AtlasLink><AtlasLink to="/workflow/#atlas-example">The Atlas example ↓</AtlasLink><AtlasLink to="/workflow/#full-stack">With the full stack ↓</AtlasLink>
      </nav>
    </header>

    <section id="setup" aria-labelledby="setup-title">
      <h2 id="setup-title">Before your first run</h2>
      <p>Install Atlas through Skills CLI, or install the shared stack from its <AtlasLink to="/stack/">installation guide</AtlasLink>.</p>
      <CopyCommand command={`npx skills add ${repository}`} />
      <p>Choose the skills, agent and installation destination when prompted. You can ask <AtlasLink to={skillPath('atlas-setup')}>Atlas Setup</AtlasLink> to check installed skills and any missing companions.</p>
      <CopyCommand variant="prompt" label="Atlas Setup prompt" command="/atlas-setup Check my installed Atlas skills and recommend any missing companions." />
      <p>For browser access, interactive code review, worktrees and agent hosts, see <AtlasLink to="/tools/">Recommended Tools</AtlasLink>. It also includes a shareable <AtlasLink to="/tools/#agent-instructions">AGENTS.md example</AtlasLink> you can adapt.</p>
    </section>

    <section aria-labelledby="shortest-start">
      <h2 id="shortest-start">Start with Atlas Mode</h2>
      <p>If you would rather describe the work than remember the skill names, start here:</p>
      <p className="small-copy">Examples beginning with <code>/skill-name</code> require an explicit skill invocation. Select that skill through your host’s slash-command menu or skill picker, then add the request.</p>
      <CopyCommand variant="prompt" label="Atlas Mode prompt" command="/atlas-mode Refine saved dashboard filters with me. We still need to decide who can see them and whether they can be shared. Help me work through those questions." />
      <p className="small-copy"><AtlasLink to={skillPath('atlas-mode')}>Atlas Mode</AtlasLink> reads and applies the relevant skills, so you can describe each step without remembering its skill name. Work through the same stages below, asking for the next one when you are ready. Keep each request focused on the current stage.</p>
    </section>

    <WorkflowAnatomy />

    <section id="atlas-example" aria-labelledby="atlas-example-title">
      <h2 id="atlas-example-title">Follow the feature through Atlas</h2>
      <p>Use the named skills below, or expand “With Atlas Mode” to ask for the same step in plain language. Finish and review each stage before requesting the next; if you already have a usable spec or ticket, start from there.</p>
      <ol className="workflow-steps">
        <li id="stage-refine">
          <h3>Settle the open questions</h3>
          <p><AtlasLink to={skillPath('atlas-grill')}>Atlas Grill</AtlasLink> helps you decide what the feature should do before you commit to a design.</p>
          <blockquote className="workflow-aside"><p>For work that spans several sessions, <AtlasLink to={skillPath('atlas-wayfinder')}>Atlas Wayfinder</AtlasLink> extends Grill’s questioning into a shared map of connected decisions. Invoke <code>/atlas-wayfinder</code> to map the effort and resolve those decisions one at a time.</p></blockquote>
          <CopyCommand variant="prompt" label="Grill prompt" command="Use atlas-grill to refine saved dashboard filters with me. Users should save a filter and reopen it later. Challenge the unclear parts, especially ownership, sharing and what happens when a saved filter no longer matches any results." />
          <details className="workflow-mode-example">
            <summary>With Atlas Mode</summary>
            <CopyCommand variant="prompt" label="Atlas Mode refinement prompt" command="/atlas-mode Help me refine saved dashboard filters. Work through ownership, sharing and empty results with me." />
          </details>
          <p className="workflow-result"><strong>You leave with:</strong> agreed behavior, boundaries and decisions the implementation can use.</p>
        </li>
        <li id="stage-specify">
          <h3>Give the decisions a home</h3>
          <p>Stay in the same conversation. <AtlasLink to={skillPath('atlas-to-spec')}>Atlas To Spec</AtlasLink> turns the discussion into something another agent can build from.</p>
          <CopyCommand variant="prompt" label="specification prompt" command="/atlas-to-spec Turn what we agreed into a local specification. Include the behavior, acceptance criteria, exclusions and the decisions we have already made." />
          <details className="workflow-mode-example">
            <summary>With Atlas Mode</summary>
            <CopyCommand variant="prompt" label="Atlas Mode specification prompt" command="/atlas-mode Turn the decisions we have agreed into a local specification I can review." />
          </details>
          <p className="workflow-result"><strong>You leave with:</strong> a saved spec and its path. Read it before moving on; correct anything that does not match your intent.</p>
        </li>
        <li id="stage-slice">
          <h3>Split it into useful tickets</h3>
          <p><AtlasLink to={skillPath('atlas-to-tickets')}>Atlas To Tickets</AtlasLink> creates vertical slices. Each ticket should deliver usable behavior, such as saving and reopening a private filter, rather than just adding database tables or a screen.</p>
          <CopyCommand variant="prompt" label="ticket prompt" command="/atlas-to-tickets Split this spec into vertical implementation tickets. Show what each ticket delivers, what it depends on, and how we will know it works. Save them locally and link each one to the spec." />
          <details className="workflow-mode-example">
            <summary>With Atlas Mode</summary>
            <CopyCommand variant="prompt" label="Atlas Mode tickets prompt" command="/atlas-mode Split this approved spec into vertical implementation tickets, with acceptance criteria and dependencies." />
          </details>
          <p className="workflow-result"><strong>You leave with:</strong> scoped tickets, their dependencies and acceptance criteria.</p>
        </li>
        <li id="stage-build">
          <h3>Build one ticket in a fresh chat</h3>
          <p>Give the new chat the ticket and spec paths. Ask for tracking and QA explicitly so both outcomes are part of the assignment. Replace the paths below with the ones your agent created.</p>
          <CopyCommand variant="prompt" label="implementation prompt" command="Implement ticket 1 from docs/tickets/saved-filters/ and its linked spec. Work test-first and track the implementation. When it is ready, do a proper QA with atlas-verify and give me a report." />
          <details className="workflow-mode-example">
            <summary>With Atlas Mode</summary>
            <CopyCommand variant="prompt" label="Atlas Mode implementation prompt" command="/atlas-mode Implement ticket 1 from docs/tickets/saved-filters/ and its linked spec. Work test-first and track the implementation. When it is ready, do a proper QA and give me a report." />
          </details>
          <p><AtlasLink to={skillPath('atlas-implement')}>Atlas Implement</AtlasLink> supplies the test-first method. <AtlasLink to={skillPath('tracking-implementation')}>Tracking Implementation</AtlasLink> maintains the record and opens it when the host supports that. <AtlasLink to={skillPath('atlas-verify')}>Atlas Verify</AtlasLink> supplies the requested QA and report.</p>
          <p className="workflow-result"><strong>You leave with:</strong> working code, a tracking record, QA evidence and clearly identified checks that could not run.</p>
        </li>
        <li id="stage-accept">
          <h3>Review the checkpoint yourself</h3>
          <p>Tracking runs the code review and applicable specialist reviews before handing the checkpoint to you. With <a href="https://plannotator.ai/">Plannotator</a> configured, it opens an interactive diff review for your annotations and acceptance.</p>
          <p>Inspect the change and the QA report. Send corrections back to the agent, let it update the checkpoint and affected checks, then accept when you are satisfied. If Plannotator is unavailable, the agent reports that gap and leaves acceptance pending.</p>
          <p className="workflow-result"><strong>You leave with:</strong> a checkpoint you have reviewed and accepted, or a clear list of what still needs work. A commit, a push and publication remain separate actions.</p>
        </li>
      </ol>
      <p>For each remaining ticket, start a fresh chat with its ticket and spec, then repeat implementation, QA and review. Keep completed records as references.</p>
    </section>

    <section id="full-stack" aria-labelledby="full-stack-title">
      <h2 id="full-stack-title">Use the same path with the full stack</h2>
      <p>The <AtlasLink to="/stack/">shared stack</AtlasLink> adds independent skills from other authors. Keep the same feature and add a companion when it answers a question that is still open.</p>
      <dl className="workflow-companions">
        <div><dt>You need evidence before choosing</dt><dd>Use <a href="https://github.com/mattpocock/skills/tree/main/skills/engineering/research">Research</a> for a separate investigation and saved findings. For example, investigate storage and sync options before committing to cross-device saved filters.</dd></div>
        <div><dt>You need to try an interaction</dt><dd>Use <a href="https://github.com/mattpocock/skills/tree/main/skills/engineering/prototype">Prototype</a> for a throwaway experiment. Try the filter picker before making it part of the product.</dd></div>
        <div><dt>A design decision has lasting consequences</dt><dd>Use <a href="https://github.com/leoreisdias/truss-framework">Truss Evaluation</a> to examine a consequential trade-off, such as where shared filter ownership belongs.</dd></div>
        <div><dt>You need to change chats mid-ticket</dt><dd>Use <a href="https://github.com/mattpocock/skills/tree/main/skills/productivity/handoff">Handoff</a> to carry current evidence, decisions and next actions into the next conversation.</dd></div>
        <div><dt>The change is ready for a pull request</dt><dd>Use <a href="https://github.com/mattpocock/skills/tree/main/skills/engineering/pr">PR</a> to write its description from the finished change and validation evidence.</dd></div>
      </dl>
      <CopyCommand variant="prompt" label="prototype prompt" command="Use prototype to try the saved-filter picker before we commit to its interaction. Build a throwaway version that lets us judge switching, naming and deleting filters. Keep production code unchanged." />
      <p>If an explanation does not click, <a href="https://github.com/backnotprop/bro">Bro</a> can restate it plainly. Readback can restate your request before work starts. These are useful additions whenever understanding is the next thing you need.</p>
      <p>Choose companions as needed. For a small, clear fix, you may go straight to implementation and ordinary project checks. For a large effort with unresolved decisions across sessions, <AtlasLink to={skillPath('atlas-wayfinder')}>Atlas Wayfinder</AtlasLink> can give you a decision map before you create executable tickets.</p>
      <AtlasLink className="text-link" to="/stack/">Explore and install the full stack <Arrow /></AtlasLink>
    </section>


  </article>;
}
