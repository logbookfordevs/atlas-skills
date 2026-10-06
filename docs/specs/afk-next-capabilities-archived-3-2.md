# Logbook Atlas: proposal 3.2 — maintained skills, selective composition

Date: 2026-10-05.
Status: revised direction for review. These recommendations supersede proposal 3.1’s catalog-wide umbrella and retirement map; they do not authorize implementation, installation changes, renaming, or cutover.

## Purpose

Atlas is Leonardo’s maintained collection of authored skills, intentionally adapted upstream skills, and selected unchanged upstream skills. Its value is the workflow choices, useful adaptations, provenance, and conflict decisions. Reducing entry count is not a goal.

AFK’s current local app manages availability, invocation preferences, profiles, source bookmarks, tools and agent rules. Skills CLI owns external installation and updates. Atlas no longer needs a catalog-reduction strategy to manage context exposure. AFK profiles group skills but do not reconcile their instructions or prove runtime invocation. Atlas packages remain usable through standard Skills CLI without AFK.

## Collection and composition contract

Preserve independently useful entry points and existing invocation expectations by default. Carry selected upstream skills under Atlas’s roof when Leonardo actively uses or intentionally maintains them; a transition from verbatim to patched should preserve one authoring and update path. Interesting recommendations need not all be redistributed.

Composition is selective. A new skill earns its place when it creates one useful operation with a clear contract. Conflicting sources are a reason to consider composition, not a requirement to merge. Compatible sources may also form a valuable process. Preserve direct access where useful and avoid duplicate automatic triggers. An umbrella is not a mandatory classification layer.

Source composition carries selected material inside a skill. Behavioral composition uses independently addressable skills. Profiles expose or read groups without owning their process. These are different relationships. Runtime references must be packaged locally; one canonical source can feed multiple outputs without shared runtime storage. Edit canonical inputs, regenerate outputs, and verify parity.

New Atlas behavior belongs in authored instructions. Select an upstream method only when its contract fits. Patch for a documented conflict with another source or an explicit Atlas decision; preserve existing intentional forks. A caller override is also an adaptation and requires a recorded rationale. Preserve upstream frontmatter by default; metadata changes require a concrete documented reason. Verify installer discovery when carrying metadata in references.

## Umbrella definition — confirmed during review

An umbrella is a scoped successor to Compass: a skill bringing related methods together—its own authored implementation and, where useful, verbatim or deliberately patched upstream skills—whose routing layer helps select among hard-to-distinguish flows and resolves overlapping guidance. It can choose alternatives, combine complementary methods, or transition between flows as the engagement develops. Define conditions and carry-forward evidence for each relationship rather than assume one path forever or load everything together.

Authored content absorbed into an umbrella becomes its maintained implementation; it is not upstream source composition and does not depend on its legacy copy. Source composition carries upstream content and resources inside the package. Behavior composition uses independent skills, whose availability the host must resolve. These distinctions also apply when a bundled reference calls an independent skill.

Brief clarification is appropriate only when it changes method selection. Preserve each source’s contract, provenance and update impact. Manual workflows will often form an umbrella’s content and automatic primitives often remain independent; this is a tendency, not a restriction. Design is explicitly automatic and can compose automatic sources. Direct access to composed operations is decided deliberately per operation; source preservation alone does not guarantee independent discovery. Compass’s broad routing role is intended to move into these scoped umbrellas, with no live retirement implied by this documentation update.

## Recommendations for the former umbrellas

Decisions recorded during the 5 October review: Investigate and Plan are removed; Decide is retained as a manual umbrella; Design is retained as an automatic umbrella. The remaining sections are recommendations pending review. Historical details are preserved for reconsideration. No underlying source is silently discarded.

### Investigate — Removed · decision recorded

No Investigate umbrella. Research remains automatic, atomic and independently available, carried verbatim with upstream tracking.

Investigate’s package, authored workflow and preview registration were deleted after explicit authorization. Research’s pinned snapshot and generic source-maintenance tooling remain. Personal installed copies were not modified.

<details>
<summary>Previous proposal 3.1 — Auto umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Answer a question with evidence.

**Trigger:** A bounded research question—not every document read.

**Entries proposed for absorption:** research

**Independent behavioral composition:** domain-modeling, truss-evaluation

**Locally packaged shared methods:** Implement · source verification; Decide · adversarial challenge

**PE contributions:** None listed.

**Authored ruling:** Atlas owns direct investigation. Load verbatim Research only for authorized background research with a findings file; workers use the direct route.

</details>

### Decide — Keep · manual umbrella · atlas-decide

Compose Wayfinder, Grill with Docs and Grill Me as preserved source references. Public modes are **Probe** (Grill Me), **Record** (Grill with Docs), **Shape** (Atlas-authored Design Grill), and **Map** (Wayfinder). Select from the user’s request; naming a mode is optional. The authored layer provides scoped routing, quick clarification when selection requires it, and conflict rulings.

Methods may be alternatives, complementary or sequential: define transitions and carry findings forward. Preserve each source’s provenance and existing intentional adaptations. Grilling remains an independent reusable primitive.

<details>
<summary>Previous proposal 3.1 — Manual umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Resolve choices through focused challenge or a persistent decision map.

**Trigger:** Deliberately enter an interview or challenge process.

**Entries proposed for absorption:** afk-code-grill, doubt-driven-development, to-questionnaire, grill-with-docs, grill-me, wayfinder

**Independent behavioral composition:** grilling, domain-modeling, codebase-design, truss-evaluation

**Locally packaged shared methods:** Investigate · research; Design · experiments and visual decisions

**PE contributions:** None listed.

**Authored ruling:** A bounded challenge is not the full continuous adversarial posture.

</details>

### Plan — Removed · decision recorded

No Plan umbrella. To Spec and To Tickets remain separate independently invocable skills, preserving their intentional Matt Pocock fork adaptations and reviewed upstream updates.

This removes the proposed wrapper, not either underlying operation. Names and installation migration require a separate reviewed change.

<details>
<summary>Previous proposal 3.1 — Manual umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Turn agreed direction into specs and executable tickets.

**Trigger:** Deliberately request a spec, tickets, or both from agreed direction.

**Entries proposed for absorption:** afk-to-spec, afk-to-tickets

**Independent behavioral composition:** domain-modeling

**Locally packaged shared methods:** Decide · unresolved decisions

**PE contributions:** None listed.

**Authored ruling:** Surface unresolved choices; do not silently settle them or begin implementation.

</details>

### Design — Keep · automatic umbrella · atlas-design

Design owns pre-production artifacts: **Wireframe** (HTML Wireframe), **Model** (HTML Prototype), and **Experiment** (Prototype). Following PE Design’s boundary, its deliverable is a design artifact or experiment rather than a production implementation. Artifact motion may demonstrate an interaction decision; production work is a separate engagement. Implement now covers only Graph, Track, A11y and Motion. Animate and Apple Design remain in Implement’s Motion mode. Existing public artifact modes are retained rather than silently adopting all six PE Design modes.

Design Grill remains Decide → Shape. Preserve the selected visual commitment, content, states and tokens across artifacts and into implementation. HTML sources retain narrow portable sibling-link patches; Prototype and its complete resource tree remain verbatim. Its production-promotion step requires explicit implementation scope. Impeccable and Animated Driven Frontend stay independent. Full PE Design composition remains unselected.

<details>
<summary>Previous proposal 3.1 — Auto umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Explore, prototype, animate, commit.

**Trigger:** Select appropriate design methods; offer the independent manual ADF workflow when cinematic production fits.

**Entries proposed for absorption:** afk-design-grill, html-wireframe, html-prototype, animate, apple-design, animate-text, prototype

**Independent behavioral composition:** impeccable, design-artifact, logbook-animated-driven-frontend

**Locally packaged shared methods:** Review · motion/fidelity

**PE contributions:** PE Design · contribution accepted; methods/sources next pass; PE Brand Assets · deferred; possible future enrichment

**Authored ruling:** Impeccable stays independent and complete. ADF starts only when deliberately selected, preserving its creative contract. Rough experiments cannot approve fidelity.

</details>

### Implement — Keep · manual umbrella · atlas-implement

Public modes are **Graph**, **Track**, **A11y**, and **Motion**. Graph directly carries Matt Pocock’s verbatim Implement Spec for ticket-graph execution. Track is the absorbed Atlas-authored tracking/recovery process. A11y carries the complete seven-file Better Accessibility tree unchanged.

Select methods by the requested outcome and combine them when useful. Tracking is optional; invoking Implement alone does not create records. The authored Graph execution wrapper is removed. The root retains only the temporary `code-review` → `afk-code-review` name mapping while Review is pending. No new universal merging framework or review sequence is prescribed.

A11y’s named Better Colors, Better Typography and Better Layout capabilities remain independent conditional dependencies for contrast/color, text sizing/input zoom and spatial RTL respectively. Bundled A11y files are available locally; an external named capability may still be required by the selected topic.

Craft and the additional performance/vocabulary/React transition material are excluded from Implement for now. The excluded sources’ pins, licenses, replayable patches and PE selection records remain available for later review, with no active consumers. Motion retains Animate and Apple Design verbatim for animation construction and physical interaction guidance, including Animate’s recipes. Animate requires independent Pick UI Library when the task calls for component selection. This does not create independent runtime skills. Animate and Apple Design remain in Implement’s Motion mode; Animate Text remains independent. No private course material is carried.

The proposed PE/Foundry maintenance migration is deferred until this skill review is finished. Live model evaluation remains pending.

<details>
<summary>Previous proposal 3.1 — Manual umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Deliver a scoped change in direct or tracked mode.

**Trigger:** Explicit tracking or an existing tracked implementation selects tracked mode; bounded work otherwise uses direct mode.

**Entries proposed for absorption:** afk-implement, source-driven-development

**Independent behavioral composition:** tdd, codebase-design, code-simplification

**Locally packaged shared methods:** Review · technical review and conditional finding re-check; Decide · adversarial method; Design · visual commitment

**PE contributions:** PE Build · contribution accepted; methods/sources next pass

**Authored ruling:** Invoking Implement alone does not select tracking. Both modes verify the work; tracked mode preserves durable recovery, review basis, and acceptance gates.

</details>

### Diagnose — Keep atomic operation

Diagnosis is already a coherent independent operation. Keep it available without building a one-member umbrella.

Reconsider grouping only when useful sibling methods arrive.

<details>
<summary>Previous proposal 3.1 — Auto umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Find the cause. Prove the recovery.

**Trigger:** A failure or debugging request—not incident paperwork for every error.

**Entries proposed for absorption:** diagnosing-bugs

**Independent behavioral composition:** truss-evaluation

**Locally packaged shared methods:** Investigate · research; Implement · source verification

**PE contributions:** None listed.

**Authored ruling:** Preserve the tight pass/fail feedback loop. Scale the record to the incident.

</details>

### Review — Strong composition candidate

Technical, interface and motion review can share findings and evidence contracts. Keep precise review operations accessible; a unified review skill must add authored lens selection and reconciliation.

Preserve review-only behavior, verdict discussion and the human judgment boundary. Targeted re-check is conditional, not a mandatory repeated full review.

<details>
<summary>Previous proposal 3.1 — Auto umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Judge against intent and evidence.

**Trigger:** A review request selects its lens—not every review mode.

**Entries proposed for absorption:** review-animations, afk-code-review, afk-code-review-verdicts, afk-static-review

**Independent behavioral composition:** impeccable, truss-evaluation

**Locally packaged shared methods:** Design · shared motion policy

**PE contributions:** PE Review · contribution accepted; methods/sources next pass

**Authored ruling:** Standards and Spec remain separate; review-only work does not edit code.

**Execution detail:** Verify finding resolution: re-check confirmed fixes when material uncertainty remains; inspect the original failure and nearby regressions. Prefer the original reviewer for continuity; use a fresh perspective when disagreement or risk warrants it. Report resolved, still present, or insufficient evidence. Stop with adequate evidence; no mandatory second full review.

</details>

### Verify — Keep authored skill candidate

Verification has a distinct job: run requested checks and report evidence and gaps. Retain the planned live execution and reusable-script paths; tool-specific skills remain independent.

Discover available tooling and honor user preference. Script creation is not proof of execution. PE contributions remain accepted in principle; exact sources are unselected.

<details>
<summary>Previous proposal 3.1 — Manual umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Check now or make verification repeatable, with evidence.

**Trigger:** Deliberately request verification, reusable checks, or both; routine validation stays available.

**Entries proposed for absorption:** No existing entries; authored method proposed.

**Independent behavioral composition:** Select suitable installed tooling under user and repository preferences. Use its independent skill when applicable; direct MCP/browser tool use needs no mandatory skill. Agent Browser and Playwright guidance are alternatives, not required installs.

**Locally packaged shared methods:** None listed.

**PE contributions:** PE Verify · contribution accepted; methods/sources next pass

**Authored ruling:** Evidence must match the claim. Repeatability needs controlled state and meaningful assertions. Large test infrastructure and product fixes belong to implementation.

**Execution detail:** Check now: run scoped checks and report observed evidence. Make repeatable: author bounded tests or scripts, document reruns, and validate where possible. Combine either mode as needed. Creating scripts neither proves execution nor schedules future runs.

</details>

### Document Behavior — Keep distinct skill candidate

Preserve the job of documenting a defined product surface, flows and states. Formerly Describe; not a generic research or writing umbrella.

Use evidence gathering as support. Select concrete PE or upstream contributions in a later pass.

<details>
<summary>Previous proposal 3.1 — Auto umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Document how the product behaves.

**Trigger:** Product behavior documentation—not “describe this function”.

**Entries proposed for absorption:** No existing entries; authored method proposed.

**Independent behavioral composition:** domain-modeling

**Locally packaged shared methods:** Investigate · research

**PE contributions:** PE Product Description · direction endorsed

**Authored ruling:** Keep observed, source-inferred, and intended behavior distinct.

</details>

### Learn — Keep useful operations

Keep teaching and Show Me independently accessible. A composed learning skill is optional when explanation plus visualization consistently improves one learning engagement.

Avoid burying the visual trigger behind a broad description.

<details>
<summary>Previous proposal 3.1 — Auto umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Explain visually. Build understanding.

**Trigger:** Teaching or visual explanation; persistent learning only when requested.

**Entries proposed for absorption:** show-me, teach

**Independent behavioral composition:** design-artifact

**Locally packaged shared methods:** Investigate · research

**PE contributions:** None listed.

**Authored ruling:** A one-off explanation does not start a curriculum.

</details>

### Clarify — Keep small candidate

Bro, Facts, Readback and Recap remain direct operations initially. A manual Clarify entry may help humans select among them; add it only if this benefit survives simple examples.

Readback confirmation belongs to its operation. Writing for Humans, Writing for Agents and Handoff remain independent.

<details>
<summary>Previous proposal 3.1 — Manual umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Restore understanding of the current exchange.

**Trigger:** Invoke Clarify and state what you need naturally; no source names or mode menu required.

**Entries proposed for absorption:** bro, facts, readback, recap

**Independent behavioral composition:** None listed.

**Locally packaged shared methods:** None listed.

**PE contributions:** None listed.

**Authored ruling:** Select the right context and reference. Ask only if ambiguity materially changes the answer; readback alone pauses for confirmation.

</details>

### Configure — Keep authored skill candidate

Optional guided initialization of context documents expected by other skills. It adds a coherent operation rather than grouping installation tools.

Inspect existing context, create only relevant documents, use independent writing/domain/design capabilities as needed. Skills continue on-demand setup without Configure.

<details>
<summary>Previous proposal 3.1 — Manual umbrella</summary>

Historical proposal, not the current recommendation.

**Purpose:** Initialize shared project context through guided setup.

**Trigger:** Optional and user-invoked. Without Configure, skills still initialize missing context on demand.

**Entries proposed for absorption:** No existing entries; authored method proposed.

**Independent behavioral composition:** writing-for-agents, domain-modeling, wizard

**Locally packaged shared methods:** None listed.

**PE contributions:** None listed.

**Authored ruling:** Use the same document expectations as consuming skills. Preserve existing decisions; create only relevant documents, with no duplicate templates or mandatory onboarding.

**Guided setup:** Inspect existing context and what the selected skills expect. Guide missing preferences and vocabulary; establish product/design context where relevant. Create or update relevant AGENTS.md, CONTEXT.md, PRODUCT.md, or DESIGN.md using project conventions. Use the relevant independent design capability when needed. Wizard is only for necessary human-only steps. Validate the shared context and report unresolved gaps. This is Atlas-authored; no Matt setup source is proposed.

</details>

Coordinate remains deferred. Architect and Clean Room stay independent. Library/tool skills, both writing skills, and Handoff remain independent. PE Design, Build, Review and Verify contribution directions remain accepted in principle; exact material and whether to use PE’s synthesis, primary upstreams, or both remain open. Brand Assets remains possible future enrichment. Prior names are history, not mandatory new public identifiers.

## Upstream maintenance contract

Classify each contribution separately, including within a multi-source skill:

| Class | Stored evidence | Update behavior |
| --- | --- | --- |
| Verbatim | Immutable upstream revision, original path, complete carried content, source/license checksums | Propose adoption of new bytes; review behavioral changes even without local edits. |
| Verbatim patched | Pristine pinned snapshot plus reproducible patch, carried checksum, adaptation rationale | Replay against the candidate revision, report textual conflicts and semantic changes, revise deliberately. |
| Derived | Pinned source lineage, retained/omitted concepts and authored method | Alert on upstream changes; editorial review determines which ideas to incorporate. No automatic patch-equivalence claim. |
| Atlas-authored | Canonical authored input and optional inspirations | Atlas owns changes; no upstream synchronization claim for original behavior. |

For every carried source, record repository, immutable commit, original path, license/notices, source and carried-content hashes, classification, and consumer map. Record why a patch exists and which behavior it preserves. Existing to-spec, to-tickets and code-review forks retain their necessary adaptations in direct upstream → patched lineage, without an artificial additional AFK fork layer. Each upstream source in a composed skill has its own receipt; composition does not automatically make every contribution derived.

A scheduled watcher is proposed, not implemented by this revision. It detects changes since the pinned revision and opens or updates a reviewable proposal with upstream diff, affected consumers, metadata/dependency/license changes, adaptation impact and focused validation. It must deduplicate unchanged candidates. It does not mutate installed skills, silently merge, or adopt upstream revisions automatically.

An agent recommends adopt, adapt, defer or reject with reasons. No local patch is not blanket approval. Clean patch application proves textual compatibility, not behavioral compatibility. Reconciliation uses the old snapshot, current adaptation and candidate upstream. Preserve the accepted pin until human review approves adoption. Then update snapshots, patches/derivations, checksums and notices together, regenerate affected packages, and run focused integrity and behavioral checks. Record the decision so updates are reversible. Failed fetches, unavailable revisions and conflicts remain visible; they do not imply currency.

Installing from Atlas means receiving Atlas’s reviewed revision, which can lag upstream. Credits identify the original author and source prominently; redistribution requires suitable licensing and applicable notices. Direct upstream and Atlas installations of the same skill must not compete silently: document identity, choose one installed copy, and review any renaming or caller migration.

## Conflict ownership

A composed skill owns selection conditions and rulings between its sources. Independently collaborating skills need a scoped integration agreement; no universal always-loaded conflict manual. Track which sources and revisions informed each ruling, why it applies, consumers affected and what would reopen it. Upstream changes should flag relevant rulings, not ask the runtime agent to rediscover them every execution.

## Existing implementation and safe next steps

The Investigate implementation and preview listing were removed after explicit authorization. Generation/integrity machinery and pinned source evidence are retained. Archived skills and personal installed copies were not changed. Other working-tree changes remain separate.

Next: inventory independently valuable operations and existing callers; select the actively maintained upstream set; formalize fork provenance first; implement watcher review proposals; evaluate one useful composition at a time. Before any retirement, test existing triggers, manual invocation, partial installation, caller behavior and package discovery. Packaging checks do not prove frontier-model routing quality. Model evaluation should compare concrete user tasks without pinning prose.

The exact active roster, skill names, watcher cadence/hosting and optional compositions remain for review. No quota for umbrellas or skills applies.

## History

[Proposal 3.1](afk-next-capabilities-archived-3-1.md) preserves the previous detailed capability map and review decisions. [Its HTML](show-me-afk-next-31-archived-3-1.html) is historical. The current HTML retains its familiar filename for link continuity: [visual proposal](show-me-afk-next-31.html).
