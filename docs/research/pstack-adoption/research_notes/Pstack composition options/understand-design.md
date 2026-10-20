# Pstack composition options: understanding, design, orchestration, principles

Research date: 2026-10-15. This is a correction to placement reasoning, not a new efficacy evaluation or runtime implementation. Primary source snapshots read locally: Pstack `1f0f9c3bac03c4297f6fc8f7644fa412eda57085`; Atlas `1d671b4cb4d5193891f5f98d9cfdd726741a0c6d`; Matt `49dd158d1076134a641b33efb035946536778336` (verified with local `git rev-parse HEAD`; the assignment's alternate ending `946778336` is incorrect). Earlier notes retain detailed dependency/license analysis; this note reconsiders the public topology. No upstream skill was executed. The recommendations below are design judgments, not observed model-performance improvements.

## What criterion should decide composition rather than original-name packaging?

### Takeaway

Evaluate all routes by the user-facing contract: existing Atlas mode, new composition, replacement, independently packaged source, or omission. Separate source maintenance is compatible with one composed public package; it is not evidence for separate public skills. Conversely, a shared topic or workflow phase alone does not justify composition.

### Cited Findings

- Atlas explicitly separates source identity from consuming workflow identity: sources have `consumers`, workflows have `methods`, and rulings record concrete caller decisions. It supports patched standalone skills **and** multiple sources bundled under one workflow. Only independently installable packages need stack entries. [Atlas maintenance](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/docs/authoring/source-composition.md)
- Atlas Implement already combines TDD and Source-Driven Development as independently selected or jointly applicable methods, while Atlas Grill selects Grilling by default and With Docs explicitly. These are existing precedents for independent source tracking under a single public router. [Implement](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-implement/SKILL.md); [Grill](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-grill/SKILL.md)
- Team Up owns available agent/model/effort selection, whereas Arena owns candidate comparison/synthesis and Swarm owns partition/race aggregation. Their responsibilities can be composed without pretending they are equivalent. [Team Up](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/team-up/SKILL.md); [Arena](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/arena/SKILL.md); [Swarm](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/swarm/SKILL.md)

### Inferences

Use the user's criterion directly: an Atlas composition earns its surface through meaningful rule conflict, consequential mode routing, or grouping several related methods behind a useful interface. Apply these questions equally to native and composed options:

1. What concrete user request becomes easier or safer to route?
2. Which instructions apply together, which are alternatives, and which source loses authority at a genuine conflict?
3. Does the proposed public name reveal the resulting outcome? Can someone select a leaf directly through an alias without learning new jargon?
4. What new discovery ambiguity, required context, execution expense or recursive invocation risk does the router introduce?
5. Are all required support/dependency files available within the chosen distribution, regardless of AFK?

The original report's native-first conclusion treated different outputs as sufficient evidence for different packages. That is incomplete: outputs are often precisely what a mode router selects. The opposite mistake would be grouping all methods called “understand,” “design,” or “delegate” merely because the research used those categories. Neither default is warranted. Do not make model trials or another sign-off an extra gate for deciding a source topology; reserve trials for claims about reliability, discovery or performance.

### Gaps

There is no comparative invocation trial measuring whether these routers improve selection over original names. These are source-grounded architecture recommendations with stated costs.

## Should How, Why and the two Teach methods compose into Explain or Learn?

### Takeaway

**Preferred engineering-understanding topology: an `atlas-explain` composition with Mechanics (How), Rationale (Why), and Guided Explanation (Pstack Teach) modes; preserve Matt Teach as the independent sustained-learning choice.** This is justified by real scope and output routing, not a requirement that all learning methods share one umbrella. Original-name How/Why/Pstack Teach remains a credible lower-intervention alternative.

### Cited Findings

- How explains architecture, runtime, ownership and layering; Why reconstructs motivation from history and available evidence categories. How's simple path uses one explainer; complex paths split exploration and explanation. Why defaults to full available-category coverage, keeps confidence tiers, and permits skipping only for absence or demonstrated irrelevance. [How](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/how/SKILL.md); [Why](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/why/SKILL.md)
- Pstack Teach combines How and Why into conversational understanding of current work, normally narrows Why, allows one of the two for small changes, forbids quizzes, and requires Unslop for its replies. It demands progressive visual explanation where appropriate. [Pstack Teach](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/teach/SKILL.md)
- Matt Teach is explicitly multi-session and stateful: mission, resources, learning records, HTML lessons/references and reusable assets. It uses quizzes, retrieval, spacing and feedback to build durable skills. [Matt Teach](https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/productivity/teach/SKILL.md)
- No current Atlas Explain/Learn package appeared in the repository skill inventory examined; these are proposed additions, not existing modes. Existing packaging machinery permits direct relative reference loading rather than installed sibling calls. [Atlas maintenance](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/docs/authoring/source-composition.md)

### Inferences

The meaningful Explain contract is: select **mechanism**, **historical cause**, or **teaching presentation** before deciding investigation depth. That avoids full rationale investigation for “how does this parser work?” while preserving evidence separation for “why was this queue chosen?” It also resolves Teach's instruction to narrow Why against Why's stricter skip rules: the caller may explicitly define a bounded investigation; preserve a coverage statement naming that scope and unavailable/unsearched categories. Unknown rationale stays unknown. Do not erase confidence qualifiers in the style pass.

Concrete routing:

| Request | Selected path | Required distinction |
| --- | --- | --- |
| “How does auth reach the session cache?” | Explain → How | Mechanics from source; do not invent intent. |
| “Why did we move sessions out of Redis?” | Explain → Why | Investigate rationale and confidence; code shape cannot establish motivation. |
| “Teach me this change; I need to review it” | Explain → Pstack Teach | Small complete explanation, deeper layers on request; narrow rationale when appropriate; no course files. |
| “Help me learn distributed systems over the next month” | Matt Teach | Persistent mission, records, lessons and retrieval practice; this is a different learning outcome. |

`Explain` is the stronger name for the first three because the output is understanding of existing work. `Learn` is stronger for Matt's durable skill-building workflow. The user did not request that both outcomes have one entry point; therefore no need to create `atlas-learn` solely to rename one source.

**Genuine alternatives and costs:**

- **Native How, Why and Pstack Teach; Matt Teach separately with an unambiguous installed identity:** cheapest semantic migration, preserves upstream names, but users choose evidence/pacing contracts themselves and two public `teach` identities must be disambiguated. An identical installed name is not solved by independent provenance records.
- **One `atlas-learn` router containing all four:** justified if Atlas wants one front door for “teach/explain/learn.” It must select conversational explanation versus a durable learning workspace **before file creation**, and no-quizzes applies only to conversational mode. This is a real behavioral conflict, so it earns composition; its cost is a broader name and higher risk of turning a one-off question into a course.
- **Two compositions, Explain plus Learn:** valid if Learn later groups additional learning methods; currently Learn would wrap only Matt Teach and adds little beyond a descriptive name. Prefer a single-source adapted package in that case.
- **Replace one Teach with the other:** reject as a default because it discards either durable practice or focused code understanding. **Skip/defer Matt Teach** is reasonable only if Atlas explicitly limits scope to engineering explanations; it is a product-scope choice, not redundancy.

Bundling Explain means keeping How/Why templates and epistemics, Teach's local support and required Unslop closure available internally; it does not require three extra public installs. Default model selection should defer to Team Up. Portability patches, such as unavailable image generation, remain necessary under either topology.

### Gaps

Whether Atlas wants a general learning entry point is a product preference. The preferred proposal does not block on it: engineering Explain can be composed independently, and Matt Teach can stay selectable without a second composition.

## Does Architect belong in Atlas Implement or a distinct design package?

### Takeaway

**Preferred: Architect as an explicit Design-first method inside Atlas Implement, combinable with TDD and Source-Driven Development.** This has a concrete phase contract and is more useful than a separate package merely because it produces designs. It must not run for every write or every non-trivial implementation.

### Cited Findings

- Architect grounds through How and conditional Why, runs Arena for at least two structurally distinct design candidates, synthesizes a usage-first type/module sketch, implements by default, and restarts the design when repeated friction invalidates it. Its human checkpoint is opt-in. [Architect](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/architect/SKILL.md)
- Architect candidates write caller usage before types, favor deep interfaces, isolate shared state, validate boundaries and encode invariants. The sketch uses unimplemented bodies/pseudocode as a design artifact. [Runner](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/architect/references/runner-prompt.md)
- Atlas Implement currently advertises TDD and version-specific official documentation. Its TDD method tests observable behavior at agreed seams, accepts source-approved seams, uses vertical red/green slices and excludes implementation from imagined bulk-test structure. [Implement](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-implement/SKILL.md); [TDD](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-implement/references/tdd/tdd.md)

### Inferences

The useful composition is **design path × implementation discipline**, not “all methods that write files.” Architect owns shape; TDD owns behavior proof; Source-Driven owns version-sensitive external facts. Proposed routing examples:

- “Architect this API, then build it test-first” → ground → two candidate usage/type sketches → choose shape → reuse an approved seam (confirm only genuinely missing/invalidated seams) → one red/green behavior slice at a time. A sketch can be a separate design artifact; compiling stubs that throw are not a completed implementation or proof of a correct failing behavior test.
- “Design this with a checkpoint” → same design phases, then the one explicitly requested pause. Do not add a second confirmation merely because the router selected Architect.
- “Fix this small regression test-first” → TDD, without Architect's bakeoff unless the interface shape is actually in question or the user selects design-first.
- “Implement this approved spec with the documented framework API” → Source-Driven and applicable TDD; no mandatory redesign of an accepted shape.

**Required rulings:** preserve opt-in checkpoint semantics and existing seam approvals; isolate design candidates; phase planned scaffold breakage rather than pretending a stubbed project is green; evidence produced by design is input to implementation, not acceptance. Keep full How/Arena and conditional Why/Interrogate dependency availability. Source closure does not mean all methods run every invocation.

**Alternatives and costs:** Native `architect` is a strong alternative when direct `/architect` discoverability and minimal router changes matter. It must still call applicable implementation disciplines or clearly delegate to them, otherwise its default implementation can bypass Atlas commitments. A new `atlas-design` composition would be justified if Atlas groups several architectural exploration/decision methods there; Architect alone does not need another prefix. Replacing Atlas Implement with Architect loses cheap TDD/docs paths. Deferring Architect is reasonable if recurring candidate comparison cost exceeds present need, but it provides a distinct interface-design method rather than duplicating existing TDD.

The main risk of placing it in Implement is discovery: the current descriptor emphasizes tests/docs and would hide design-first requests unless updated. The opposite risk is importing Architect's broad “non-trivial” trigger and making every implementation expensive. Publish clear design-selection examples and honor explicit `architect` aliases; do not key it merely on “writes code” or on crossing any function boundary.

### Gaps

No trial establishes whether a three-method Implement descriptor routes design requests reliably. The composition is substantively justified; its discoverability remains to validate during implementation.

## Should Arena and Swarm join Team Up, remain public leaves, or get an Atlas router?

### Takeaway

**Preferred: keep Team Up's existing name and make Arena and Swarm optional loaded methods beneath its common selection policy.** This is a source composition, not a simple rename. A newly branded `atlas-team` is a valid discoverability choice if Atlas wants a single promoted orchestration entry, but it adds no behavioral value beyond that same composition.

### Cited Findings

- Team Up chooses fitting custom agents and valid model/effort pairs, respects user requests and uses the smallest capable team. It does not currently prescribe a competition or coverage protocol. [Team Up](https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/team-up/SKILL.md)
- Arena requires identical task candidates, isolated outputs, a task rubric, cross-judge, base selection, manual grafting and verification of the final synthesis. [Arena](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/arena/SKILL.md)
- Swarm partitions, races or mixes work; declares winner policy before execution; requires exact revision/method evidence where specified; retries missing evidence once; and records gaps rather than treating them as passes. It does not prescribe Arena's grafting process. [Swarm](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/swarm/SKILL.md)

### Inferences

Three method choices are meaningful: ordinary delegation/selection; Swarm coverage or race aggregation; Arena comparative synthesis. Shared Team Up policy owns valid roles/models/effort in every path; Arena/Swarm own workflow and evidence. A request to “delegate two independent schema audits” selects coverage, “produce two different API shapes and combine the strongest parts” selects Arena, “race three fixes and use the first verified pass” selects Swarm with its declared race rule. Architect can load Arena directly as an internal method without rediscovering the router.

This composition resolves an actual policy conflict: Pstack's fixed model defaults/family fallback cannot override Team Up's host-valid model policy. It also prevents a vague “parallel work” request from receiving arbitrary aggregation semantics.

**Critical scope rule:** existing callers that consult Team Up solely to choose roles/models continue to receive selection policy. Loading the policy from inside an Arena candidate must not trigger another Arena. The orchestrator chooses the workflow once; workers get scoped assignments. Read Arena/Swarm only when selected. Neither an `atlas-team` label nor a long merged instruction body is necessary.

**Alternatives:** independent original-name Arena and Swarm, both using Team Up for selection, preserve direct selection and minimize changes to the frequently invoked Team Up entry. This is compelling where users already know `/arena` and `/swarm`; its cost is three public surfaces and more repeated policy/dependency wiring. A new Atlas router over all three earns its name through workflow routing and policy conflict, but must preserve the same explicit mode semantics. Replacing Team Up with either Arena or Swarm is wrong: many delegations need neither competition nor a formal coverage protocol. Skipping Arena or Swarm can reduce present scope without declaring them duplicates.

Concurrency scheduling, independent output ownership and honest degraded review remain necessary whichever topology wins. Do not claim diversity from repeated same-model seats or parallel independence from sequential self-review. No extra human review gate follows merely from choosing a multi-agent method.

### Gaps

The preference for enriching existing Team Up rather than promoting a new Atlas Team is economy of public surface, not empirical proof that the old name has better recall. Independent leaves are the strongest alternative if direct invocation outweighs reduced package count.

## Are the principles public skills, bundled references, or a new Atlas composition?

### Takeaway

**Preferred: contextual bundled references with a small loading index and complete required closure; no new public principles omnibus.** Public single-principle invocation can remain an advanced optional distribution surface, but is not required for source identity or maintenance.

### Cited Findings

- Poteto's index names 24 principle leaves with contextual triggers and requires reading a leaf before applying/citing it. Full Poteto also adds broad orchestration/autonomy and external-plugin rules beyond the principle set. [Index](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/poteto-mode/SKILL.md)
- Arena and Architect explicitly reference principle skills; model/type guidance itself points to other principle leaves and TypeScript guidance. These links are required availability edges under that retained contract, not a reason to activate every principle. [Arena](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/arena/SKILL.md); [Architect runner](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/architect/references/runner-prompt.md); [Type System Discipline](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-type-system-discipline/SKILL.md)
- Outcome-Oriented Execution permits planned scoped reversible breakage at explicit verification boundaries; Sequence Verifiable Units requires each current unit green and also describes a failing-test-first delivery sequence. This requires phase/unit interpretation when composed with TDD and Architect. [Outcome](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-outcome-oriented-execution/SKILL.md); [Sequence](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-sequence-verifiable-units/SKILL.md)
- Prove It Works requires observation of the real artifact and a reproducible check when possible; it conditionally references Show Me Your Work for substantial auditable work. Separate Before Serializing requires structurally isolated owned outputs or enforced serialization for genuinely shared state. [Prove](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-prove-it-works/SKILL.md); [Separate](https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-separate-before-serializing-shared-state/SKILL.md)

### Inferences

Maintain each source independently and carry it where consumed, with relative links and load-once cycle handling. Put conflict rulings in the consuming workflow: Architect decides sketch boundaries, Implement decides TDD cycle completion, orchestration decides output ownership, Verify decides evidence validity. The rule conflict earns composition **at the consumer where it arises**, rather than a universal `atlas-principles` layer that must understand every workflow.

A public principles collection is justified only if users need direct access as a reference library or explicitly selectable judgment sessions. It must not globally activate all 24 or silently import Poteto's autonomy. A new composed “engineering judgment” skill would need a genuine decision procedure or outcome, not just concatenate maxims. Omitting unconsumed specialist leaves is reasonable; omitting a leaf still called by a retained method leaves an incomplete package. Narrowly rewrite an explicit skill call into a direct bundled reference only with a recorded adaptation, never by silently dropping its substance.

### Gaps

Earlier notes contain a conservative Architect closure of 14 principles and should remain the dependency inventory input. This correction did not independently re-run every transitive edge; the recommendation is about topology and activation, not a new closure count or all-leaf ranking.
