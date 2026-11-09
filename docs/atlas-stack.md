# Installing the Logbook Atlas Core with AFK

The Logbook Atlas Core is Leonardo’s always-on skill selection from his AFK kit. It combines Atlas packages with independent skills from their original repositories. [stacks/atlas.json](../stacks/atlas.json) is its canonical published manifest, using the unchanged `skill-stack.v1` format.

AFK is optional. For direct `npx skills add …` installation and the current standalone-core gaps, see [the README](../README.md#skills-v2).

## Import

[AFK — AI Field Kit](https://ai-field-kit.logbookfordevs.com/) manages agent skills, tools and shared rules. Start the app with `npx @logbookfordevs/afk`.

AFK’s kit replaces profiles and Sources & Stacks with Core (always-on skills), Packs (named groups turned on globally or per project, or read once) and Try later (bookmarks). AFK 2.0.7 uses the earlier labels. The instructions below include the earlier app labels for compatibility.

### Terminal

Manifest URL installation is available in AFK 2.0.6 and later:

```sh
afk install https://atlas.logbookfordevs.com/stack.json
```

Without a global AFK installation:

```sh
npx @logbookfordevs/afk install https://atlas.logbookfordevs.com/stack.json
```

The command reviews sources and skills, asks for an agent and installation destination, and installs through Skills CLI. It first saves the manifest as a pack named **Logbook Atlas**. Turn that pack on for **Global** to keep it always on. There is no single command to import a manifest directly into Core. Publishing Leonardo’s Core does not make an imported manifest part of your Core automatically.

See AFK’s [manifest installation guide](https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#install-directly-from-a-manifest).

### AFK interface

Choose **Import pack in Kit → Packs (in AFK 2.0.7: Sources & Stacks)**. Paste the manifest JSON or its direct HTTPS URL, then review the sources and skills before saving:

```text
https://atlas.logbookfordevs.com/stack.json
```

Import saves the selection without downloading or installing skills. Install through AFK or run its copied Skills CLI script. Turn the saved **Logbook Atlas** pack on for **Global** to keep it always on. A pack can also be enabled per project or read once; see [Packs](https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#packs). AFK’s [Core](https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#core) remains the separate always-on selection.

The `/stack/` URL is the human-readable guide; `/stack.json` is the machine-readable import URL. The older `/assets/atlas-stack.json` remains an equivalent download. Terminal and app imports use the same manifest.

`afk add <repo>` installs from a repository and asks where each skill belongs, `afk sync` makes a machine match its kit, and `afk migrate` moves old stack settings. See [Move from stacks](https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#move-from-stacks) when upgrading from 2.0.7.

The schema URL still points to AFK’s main branch; Atlas packages come from Atlas’s default branch. Explicit skill selections prevent retained legacy entries or newly added upstream skills from joining the Core automatically. See AFK’s [manifest publishing contract](https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#share-a-pack-with-a-manifest).

## Maintenance

The stack includes `atlas-mode`, a manually invoked working mode that chooses and applies installed Atlas skills and inner methods throughout a task. Clear task intent selects a method directly, including manually invoked packages. Materially different workflows are explained with a recommendation and selected with the user before work begins; advice requests remain advisory. The user need not invoke each selected package separately. Outcome-specific opt-ins and action approvals remain with the selected methods. Its method guide exposes the collection’s available choices while procedures remain in their owning skills. Atlas Setup stays outside the mode and requires its own request. The mode is not an installer or a requirement for using individual skills. Tracking records the chosen execution evidence; it does not select or require Atlas Verify.

Edit `stacks/atlas.json`, then run `pnpm build:skills` to refresh Setup’s dependency references and `pnpm check` to validate the stack and packages. Run `npm run build` from `sites/atlas` to generate the site and its public JSON assets from the canonical manifest. `pnpm check` rejects stale snapshots or missing skill pages. Installation scope and agent are chosen in AFK; the manifest contains no executable commands, profile state, invocation overrides, tool installs or post-install actions.

The manifest publishes Leonardo’s Core as an installable collection. Your imported pack’s activation is managed separately in AFK. This file is a selection manifest, not a lockfile. External references follow the authors’ repositories and Skills CLI update behavior. PR installs from Matt Pocock’s repository; Implement Spec is bundled as Implement’s All Tickets mode. Atlas Retro installs from Atlas with bundled Diagnose and Enforce methods; Atlas Verify installs from Atlas, carrying the maintained verification source and report engine from Product Engineering.

The carried-source manifest in `sources/composition.json` is separate: it preserves pinned snapshots and adaptations inside Atlas’s own packages. Its scheduled update issues do not update external installations or this stack’s source selection.

Statechart installs independently from Pstack as `statechart` for checking TLA+ models and presenting state transitions and counterexamples. Formal Create depends on it when a TLA+ check is selected; Debug does not bundle or select it. It remains distinct from Craft’s visual States workbench.

Engineering Principles (`engineering-principles`, formerly `atlas-implement`) carries Architect, TDD and Source-Driven Development as directly loaded methods. Implement (`implement`) imports Leonardo’s authored delivery workflow and selects Task or All Tickets from the requested execution shape. All Tickets adapts Matt Pocock’s Implement Spec for local or remote ticket graphs, isolated workers and one integration branch; the coordinator owns the shared review, PR and CI workflow. The Core selects both packages and no longer selects standalone `implement-spec` from Matt’s source. Updating the Core does not remove private or standalone installations from a user's machine.

Atlas Debug carries Matt Pocock’s Diagnosing Bugs and its reproduction helper verbatim. The Logbook Atlas Core selects `atlas-debug` in place of standalone `diagnosing-bugs`. Doubt-Driven Development remains an independent selection.

Atlas Grill replaces Grilling, Grill Me and Grill with Docs. It defaults to Grilling and selects With Docs only on an explicit user request. Atlas Wayfinder replaces Wayfinder and remains manually invoked. Both packages carry Grilling and Domain Modeling from the same registered sources, so Domain Modeling needs no separate stack installation. Wayfinder uses the configured tracker adapter or its bundled local fallback; Research and Prototype remain independent dependencies for their ticket types.

Code Simplification installs directly from Addy Osmani as `code-simplification`. Tracking offers this independent skill for material simplification opportunities while preserving the checkpoint's agreed scope.

Atlas Verify carries PE Verify's report engine as Behavior, Pstack's Performance method and Emil's UI Stress method. Atlas Verifiers carries Pstack's Create, Maintain, Formal Create and Formal Maintain methods behind a manual entry. Describe the verification problem rather than memorizing a mode: the agent uses project context to recommend an approach, proceeds for a clear requested outcome, and asks you to choose when alternatives imply materially different work. Create/Maintain preserve app-driving knowledge; their formal counterparts preserve properties, models or code-level checks. Atlas Review carries Pstack Blast Radius as Impact. These methods and their support files ship inside the consuming packages; their bundled methods need no separate Pstack installation; Statechart is the conditional independent dependency described above. The Pstack baseline is the modified standalone mirror at `backnotprop/pstack`, with its own pinned source records and MIT notices. Method selection does not add automatic review passes, product repairs or publication steps.

Atlas Explain carries How, Why and conversational Teach from the same pinned Pstack mirror. Catch Up carries Pstack Ketchup and its bundled Bro voice reference; it requires an explicit catch-up request and replaces standalone Recap in the shared selection. The agent selects and combines methods from the conversation. It offers options when asked and clarifies only when ambiguity materially changes the investigation or deliverable. Teach's How/Why calls load bundled references directly, and Unslop is bundled locally as Teach's editorial dependency and shares its maintained source with Writing for Humans. Requested visual HTML or interactive explanations use lightweight guidance adapted from Plannotator’s MIT-distributed Big Pics Little Words, with source attribution and the license link in the repository README. This guidance can work alone or alongside the methods; it is maintained directly without a watched source. Matt Pocock's stateful Teach remains independently installed as `teach` directly from Matt's repository, separate from Atlas Explain's conversational Teach method.

Engineering Principles includes Architect as a selective design-first method alongside TDD and Source-Driven. Its Arena comparison dependency, required principle references, and complete shared How/Why methods are bundled; Architect needs no separate installation of Atlas Explain, Atlas Review or Pstack. Shared methods retain one maintained source record and portable copies in each consumer. No global principle library is installed.

Reality Check is a standalone, manually invoked Atlas skill for a fresh second opinion on overengineering. One reviewer from another model family questions the framing and inherited conventions, then recommends the simplest sufficient approach. Its reviewer brief stays inline, and its shared selection policy is bundled for independent installation. Recommendations stay advisory.

Team Up exposes Arena and Swarm alongside its default delegation policy. Arena shares the existing maintained source with Architect and carries its four required principle references. Swarm carries Pstack's full partition/race/hybrid method with host and evidence adaptations. The role/model/effort policy and model ladder have one maintained authored input, bundled into Team Up, Implement and Reality Check so each uses the policy without re-entering a workflow router. No separate Arena, Swarm or Team Up installation is required by Architect. The shared selection policy considers available model families before model and effort. Cross-family review is a default: reviews, audits and second opinions prefer a suitable model from a different family than the leading agent without increasing the team size by itself. Subject defaults favor GPT for correctness and robustness, and Claude for experience design and architecture. Other assignments retain normal selection judgment. Explicit model choices and fixed custom-agent settings take precedence; unavailable preferences are disclosed. These defaults apply across all Team Up modes and its bundled Architect policy. A Council request selects three independently run model families when available, for example GPT, Claude and Gemini, and discloses any shortfall; it specifies team composition rather than another mode.

Writing for Humans loads Pstack Technical Writing for technical documentation. Its four layers sit within the existing author, reader and factual contracts, with Unslop as the shared editorial catalog. PR guidance is removed from Writing for Humans; the independently selected Matt `pr` skill owns that workflow. Unslop replaces Stop Slop, with contextual punctuation and terminology rules and explicit preservation of voice and factual qualifications. No standalone Unslop installation is required.

Tracking offers Audit Trail on explicit request, retaining the selection on resume. It carries Pstack Show Me Your Work with its append-only TSV format, template and logging helper, plus the shared Unslop catalog and contextual evidence principle. The trail is linked from the canonical Tracking Home. Transcript reconciliation and reviewer independence report actual host coverage and gaps; Attention accompanies checkpoint handoffs. HumanLayer Show Me still guides presentation, and Tracking retains code-review, commit and acceptance policy.

Atlas Retro (`atlas-retro`) is a manually invoked composition. Diagnose carries Matt's session retrospective and remains advisory by default; Enforce carries Pstack Correct and implements only explicitly authorized recurring-mistake prevention. Both source methods retain independent provenance and patches. The Logbook Atlas Core selects Atlas Retro once from Atlas. Writing for Agents remains an explicitly declared independent companion for assessing or authoring agent instructions; missing availability is reported while independent work continues.

Impeccable is used as a separately configured tool and is excluded from skill installation selections. AFK’s own CLI guidance remains a companion supplied by AFK, rather than an Atlas installation entry.

Tracking’s checkpoint gate supplies the implementation scope, revision, originating intent, Tracking Home and existing evidence to Atlas Review, which owns method selection and execution. Tracking records the selected methods, review questions, findings and coverage gaps, manages resolutions and retains the acceptance gate. Completed evidence for the same checkpoint and question is reused and persists on resume. This does not add automatic verification runs.

## Setup and cleanup

Atlas Setup compares installed source/skill identities with the current selected stack and its bundled dependency registry. It uses a supplied manifest or the Atlas checkout's canonical manifest, otherwise the public URL; the bundled stack is a disclosed freshness fallback. Missing stack selections are recommendations, while dependencies retain their package-specific conditions.

Cleanup is proposed from previous selections or installation provenance, not simply from absence in the stack. The agent presents exact source, path, scope, shared-use effects and replacement evidence before asking for removal approval. Only the approved targets are removed using the installed manager's supported scoped command; unrelated skills and shared copies still in use remain intact.

Atlas Motion also carries Emil Kowalski’s Animation Performance as Performance: diagnose dropped frames and rendering costs, then apply repairs only when requested. Atlas Verify carries Break UI as UI Stress, including its worst-case data catalog. UI Stress exercises the real component through isolated temporary fixtures, reports observed and inferred failures separately, and hands repairs to the implementation executor. UI Stress has its own findings and supplies evidence to the Behavior report when the methods are combined. Neither method needs a separate installation.

Atlas Craft conditionally loads a Mobile Web reference adapted from Emil Kowalski’s Mobile Native for browser chrome, keyboard overlap, tap feedback and scroll ownership. It preserves the six Craft modes and their domain ownership. Dynamic viewport units address browser chrome; software-keyboard clearance needs separate verification. The corrected shared Layout guidance also ships in Atlas Review.

The shared selection publishes Leonardo’s AFK Core: it includes standalone Domain Modeling, Bro’s Big Pics Little Words and Kami. Orchestrator, Plannotator Guide and Hand Drawn Canvas Animation are no longer selected. Plannotator itself remains a separately configured tool.

## Optional utilities

Challenge, Snap Out of It (formerly Reality Check) and Writing for Humans live under `utility-skills/` alongside Skill Source Composition. They are optional and excluded from the shared Core selection; install them individually by name with Skills CLI. Existing personal installations remain untouched. Registered utilities retain source receipts, patch replay and reviewed upstream adoption. Challenge needs Team Up for selected Arena phases. Its bounded assessment review is distinct from the independently recommended Doubt-Driven Development skill’s ongoing per-decision workflow.
