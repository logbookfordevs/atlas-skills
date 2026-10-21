# Work with Atlas

Choose the next method from what remains unresolved. A small change can go straight to implementation. A larger effort may need a decision map, a specification or executable tickets first. Each step earns its place by answering a question or preserving context the next step needs.

[Atlas Mode](../skills/atlas-mode/SKILL.md) can help choose an approach and carry it out. It applies clearly selected methods directly and explains materially different workflows before you choose. Individual skills remain usable on their own. [The package list](../README.md#skills-v2) and [website reference](https://atlas.logbookfordevs.com/) describe the available methods.

## Skills and bundled methods

Atlas packages group related methods while preserving their source records and concrete ownership rules. For example, Atlas Implement offers Architect, TDD and Source-Driven Development; choosing TDD does not require running Architect too.

Required source methods and supporting files ship inside the consuming package. Some independent companions, such as Research and Prototype for Wayfinder ticket types, still require their own installation. Atlas Setup checks declared dependencies when requested. The [composition manifest](../sources/composition.json) records package contents; the [stack manifest](../stacks/atlas.json) selects packages to install. Neither is a runtime execution schedule.

AFK — AI Field Kit is optional installation and management tooling. Its profiles are not Atlas workflow stages. See [stack installation](atlas-stack.md) for terminal and interface instructions.

## Example: build saved filters

Suppose users need to save a dashboard filter, return later and restore it, but sharing, ownership and empty states are undecided.

| What remains unresolved | Method | Useful result |
| --- | --- | --- |
| Behavior and trade-offs | Atlas Grill; With Docs when documentation is requested | Decisions and constraints to build against |
| A settled conversation needs a contract | Atlas To Spec | A local specification with behavior, exclusions and test seams |
| The work needs executable slices | Atlas To Tickets | Vertical implementation tickets with explicit blockers |
| Implementation shape, tests or version-specific APIs | Atlas Implement: Architect, TDD or Source-Driven as applicable | Working code with the selected method's evidence |
| Progress must survive handoffs | Tracking Implementation, when requested | One durable Implementation Record alongside the executor |
| An interface needs realistic edge-case data | Atlas Verify: UI Stress | An isolated data-switching harness and findings, with fixes handed to implementation |
| Animation drops frames | Atlas Motion: Performance | A cause-based diagnosis with code evidence and available profiling results |
| Completed behavior needs proof | Atlas Verify: Run, when requested or selected for the task | A structured verification report with actual evidence and coverage gaps |
| The change needs judgment | Atlas Review, or Tracking's checkpoint review gate | Findings, their resolution and remaining uncertainty |

These are choices, not required phases. Once scope is settled, a request might be:

> Build saved filters test-first. Track the implementation in a local HTML record, then run a verification of the completed behavior in my logged-in browser session.

Tracking records execution state; Atlas Implement supplies selected implementation methods. Tracking's gate runs Code review plus applicable specialist reviews, each with a concrete question and scope. Existing same-checkpoint evidence can be reused. At acceptance, Tracking launches Plannotator's interactive diff review when available, then offers annotation of the local implementation record. For delegated work, the parent able to host the interactive session owns its launch, records feedback and delegates requested implementation changes back. Final checkpoint acceptance remains the user's decision. Tracking does not automatically select Atlas Verify.

For a tiny edit, ordinary project validation may be enough. A local test run, a review, a commit, a push and user acceptance are distinct outcomes.

## Example: settle an interface question

Choose the artifact or judgment that answers the current question:

- **Hierarchy and navigation:** HTML UI's Wireframe method keeps fidelity low while you judge structure.
- **An interactive visual commitment:** HTML UI's Model method makes the agreed flow concrete. It uses the independently available Design Artifact guidance.
- **An uncertain state model or behavior:** the independent Prototype skill can build a bounded experiment.
- **An established interface needs refinement:** Atlas Craft supplies Color, Type, Layout, Accessibility, UI Polish and Copy methods while preserving accepted identity.
- **A changed interface needs review:** Atlas Review's Interface Changes distinguishes introduced, regressed and pre-existing problems. Interface Audit assesses an existing screen or flow more broadly.

Carry approved references, viewport expectations, states and permitted adaptations into the spec or ticket. Reopen direction only when a material choice remains unresolved.

## Example: build demanding motion

Atlas Motion builds animations with Animate, physical gestures with Fluid, or identifies worthwhile Opportunities without changing product code. Atlas Review supplies Motion review and Motion Audit for judging existing work.

Use Animated-Driven Frontend for synchronized progress, scroll sequences, rendering pipelines, WebGL assets and runtime ownership. Test uncertain effects with a representative sample before expanding them, including interruption, mobile performance and reduced motion. The active package is engineering guidance; it does not prescribe the retired cinematic production stages or a production binder.

## Other entry points

| Situation | Use | Boundary |
| --- | --- | --- |
| A bug has an unknown cause | Independent Diagnosing Bugs | Establish the cause and validate the fix through the actual behavior. |
| Unresolved decisions exceed one session | Atlas Wayfinder | Create or resume a decision map; it plans by default rather than executing the whole project. |
| You need to understand code | Atlas Explain: How, Why or Teach | Select the explanation mode; the topic alone does not bypass its chooser. |
| A shared contract could affect other consumers | Atlas Review: Impact | Trace downstream assumptions and preserve evidence for the risks. |
| A consequential assumption needs challenge | Atlas Review: Adversarial | Independent review supplies evidence for judgment, not automatic authority. |
| Work benefits from teammates | Team Up: Delegation, Arena or Swarm | Choose the smallest capable team; use Arena for competing candidates and Swarm for structured coverage or races. |
| A session exposes recurring workflow friction | Atlas Retro: Diagnose | Propose improvements. Enforce requires authorization to implement prevention. |
| Installed dependencies or stack alignment need inspection | Atlas Setup | Installation and named removals retain their own approvals. Setup stays outside Atlas Mode. |
| A tracked implementation needs continuation | Tracking Implementation: Resume | Recover the existing record, source, blockers, review selections and evidence. |

## Preserve useful handoffs

| Artifact | What it carries |
| --- | --- |
| Specification | Intended behavior, constraints, accepted trade-offs, test seams and exclusions |
| Approved visual reference | Authoritative states, viewports, must-preserve details and permitted adaptations |
| Ticket | One executable slice, source references, blockers and acceptance criteria |
| Implementation Record | Execution state, evidence, review findings, acceptance and continuation context |
| Verification report | Checked behavior, results, recordings or other evidence, and coverage gaps |

Tracking creates local HTML records by default, following repository or user storage conventions. Use remote tracking on user request; resume existing records in their current home. Link existing artifacts rather than duplicating their state.

## Current references and historical maps

Use [Skill maintenance](authoring/source-composition.md) for package changes, [the stack guide](atlas-stack.md) for installation, and the [website](https://atlas.logbookfordevs.com/) for user-facing examples.

The previous composition, skills/profile and cinematic maps described retired workflows. Their source files are retained as [historical snapshots](migrations/retired-guides/README.md), not current invocation or CLI guidance. Previously published external copies are also snapshots; this repository update does not republish them.
