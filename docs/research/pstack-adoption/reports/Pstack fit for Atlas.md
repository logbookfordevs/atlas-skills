# Adopt Pstack selectively through clear ownership

Research snapshot: **2026-10-15**. Advisory recommendations. This work changed research documentation only: no runtime packages were edited, installed, renamed, committed, pushed or published, and no efficacy trial was run.

**Atlas should adopt selected Pstack methods as original-name packages, complete their dependencies inside Atlas, and reserve compositions for substantive routing or conflict rulings.** The most useful additions explain code and historical rationale, compare alternatives, investigate downstream risk, establish repeatable verification knowledge, check performance claims, and turn repeated mistakes into enforcement. Pstack's short bug-regression TDD complements Matt's broader feature/interface method; it does not replace it. Writing needs one human-document owner with selected technical guidance and a deliberate anti-slop choice. Existing Bro-family selections already cover Pstack Bro, while unmodified No Comments conflicts with Atlas's retained-invariant comment policy. These judgments come from pinned source contracts, not evidence that the methods improve model performance. The user's request categories organize this assessment; they are **not proposed package compositions**.

## Distinct methods earn packages, not category wrappers

The inspected Pstack source is the modified standalone mirror `backnotprop/pstack@1f0f9c3bac03c4297f6fc8f7644fa412eda57085`; Matt's source is `mattpocock/skills@49dd158d1076134a641b33efb035946536778336`. Atlas comparisons use research snapshot `1d671b4cb4d5193891f5f98d9cfdd726741a0c6d`, rather than claiming a newly delivered state. Pstack explicitly declares harness-neutral rewrites; its sync commit does **not** establish byte equivalence with Cursor. ([Mirror declaration][mirror], [pinned commit][p-commit])

The disposition table covers every requested method and its named comparisons. “Adopt” means prepare a reviewable candidate with the identified patches, not install it now. Original names remain preferable after portability patches. Optional specialists can belong to Atlas's distribution without becoming default workflow gates.

| Method | Distinct contribution and overlap | Recommendation |
|---|---|---|
| `how` | Read-only architecture/runtime explanation; separates exploration from explanation and supplies two role templates. | **Adopt original name.** Preserve grounding and diagrams; adapt dispatch through Team Up. ([Source][p-how]) |
| `why` | Reconstructs rationale from history and available evidence categories; grades claims Direct/Supported/Inferred/Speculative/Unknown. | **Adopt original name.** Preserve contradictions and gaps; patch assumed git/gh availability and explicitly scoped coverage. `how` is a companion, not a hard dependency. ([Method][p-why], [epistemics][p-epistemics]) |
| Pstack `teach` | Conversational explanation of current code/change through How and Why, with Unslop; forbids quizzes and repeated readback exercises. | **Adopt for engineering understanding**, subject to the Teach naming decision below. Close all three dependencies and patch unavailable image generation. ([Source][p-teach]) |
| Matt `teach` | Persistent multi-session learning workspace: mission, resources, records, HTML lessons, shared assets, quizzes and retrieval practice. | **Retain as a separate learning choice.** Neither Teach replaces the other; choose mutually exclusive installation or a real mode router. ([Source][m-teach]) |
| `bro` | Simplifies the assistant's previous message. Pstack, installed Bro and Bro upstream have identical bytes at the inspected pins. | **Keep existing selection; add no duplicate.** Resolve redistribution evidence before vendoring Bro-family files. ([Pstack][p-bro], [Bro][b-bro]) |
| `recap` | Two or three sentences of current-session state, emphasizing the latest event. | **Keep existing optional selection.** A reminder, not a durable implementation record. ([Source][b-recap]) |
| `readback` | Restates the human's request, adds nothing, stops before work and asks confirmation. | **Keep explicit-only.** Do not make its confirmation a routine implementation gate. ([Source][b-readback]) |
| `facts` | Terse engineering facts and implications; expressly not holistic fact gathering. | **Keep explicit-only.** It does not replace research or verification. ([Source][b-facts]) |
| `architect` | Usage-first interfaces/types/module map, competing candidates, synthesis, then implementation; scraps a failing shape. | **Adopt original name**, showing “design then implement; checkpoint on request.” Keep its three references and meaningful dependency closure. ([Source][p-architect]) |
| `arena` | Same-task alternatives, independent rubric/judge, selected base plus grafted strengths, final verification. | **Adopt original name.** Team Up selects runners; Arena owns comparison and synthesis. ([Source][p-arena]) |
| `swarm` | Partition/race/hybrid work, declared winner policy, isolated outputs, explicit missing evidence and coverage gaps. | **Adopt original name.** Bound concurrency and retain gap accounting; do not merge it with Arena. ([Source][p-swarm]) |
| Pstack `tdd` | Narrow existing-test bug regression: fail first, minimal repair, pass after; explicit practical substitutes when proof is infeasible. | **Use as a routed bug method**, not a second public `tdd` beside Matt's. Its cheap-test escape must not defeat an approved integration seam. ([Source][p-tdd]) |
| Matt/Atlas TDD | Public interfaces, vertical tracer bullets, independent expectations and boundary mocking, with substantive test/mocking references. | **Retain feature/seam/integration TDD.** Atlas already accepts previously approved seams; preserve that ruling and red/green proof. ([Matt][m-tdd], [Atlas adaptation][a-tdd]) |
| `typescript-best-practices` | Detailed modeling/pattern guidance beyond an executor: unions, brands, schemas, exhaustiveness and derived types. | **Adopt conditionally after correctness patches.** Respect project conventions and validate examples; do not add a mandatory review phase. ([Entry][p-ts], [patterns][p-patterns]) |
| `blast-radius` | Traces consumers, pins, wire/storage/timing contracts and the few facts safety depends on; distinguishes cleared from unproved risk. | **Adopt original name.** Bound scratch probes; keep history and Arena escalation conditional, particularly in read-only review. ([Source][p-blast]) |
| `benchmark-checklist` | Checks actual work/errors, production correspondence, bottlenecks, repeated comparisons and user-visible implications. | **Adopt original name.** Adapt host tools; preserve raw results and uncertainty, without importing PR/executor playbooks. ([Source][p-benchmark]) |
| `create-verification-skill` | Builds project-local launch/doctor/drive/evidence/cleanup knowledge and feature maps, then proves a real journey. | **Adopt original name** with all three examples. Patch live-side-effect/product-repair authority; generated but unexecuted means draft. ([Source][p-create]) |
| `maintain-verification-skill` | Reconciles maps against source, serially drives every feature, preserves proof and reports app regressions separately. | **Ship as generator companion.** Bound source-reader concurrency; keep edits inside the skill directory and publication conditional. ([Source][p-maintain]) |
| `pe-verify` / current `atlas-verify` | Runs selected code/browser/mixed checks and validates/renders one structured report with explicit gaps/statuses. | **Prefer patched original `pe-verify`.** Existing one-source adaptation does not require a new brand; preserve scripts, schema, renderer and evidence machinery. Rename remains unimplemented. ([Current manifest][a-verify-manifest], [upstream][pe-verify]) |
| `interrogate` | Same-intent multimodel review, disagreement map and lead-filtered Act On/Consider/Noted/Dismissed findings. | **Adopt as optional original-name candidate.** Patch provider defaults, automatic model-table PR, arbitrary blocker heuristics and degraded-review disclosure. Preserve no auto-fix. ([Entry][p-interrogate], [lead judgment][p-lead]) |
| Atlas Review / Doubt-Driven Development | Review preserves separate Standards/Spec axes; Doubt challenges in-flight decisions with fresh, stripped context. | **Keep their contracts.** Interrogate consensus cannot replace separate axes or bypass Doubt's cross-model CLI consent. ([Code review][a-code], [Doubt][d-doubt]) |
| `no-comments` | Deletes first, adjudicates/refactors, escalates shape issues; even declined constraint enforcement still leads to comment deletion. | **Skip unchanged.** An explicit aggressive audit needs a real preservation-policy patch; it is an executor, not merely style advice. ([Entry][p-no-comments], [audit policy][p-comment-sicko]) |
| `unslop` | Compact rule-ID prose catalog; preserves meaning, allows useful passive voice and natural list size, but still has blanket punctuation/vocabulary bans. | **Offer as an alternative**, and required closure where upstream explicitly calls it. Do not stack it as a second general default pass. ([Source][p-unslop]) |
| Stop Slop / Writing for Humans | Existing Human Writing bundles Stop Slop's entry, phrases, structures and examples; outer contract protects facts, voice and uncertainty. | **Keep human-writing ownership; trial alternatives.** Make truth/genre prevail over catalogs; no evidence establishes Unslop superiority. ([Human writing][a-humans], [Stop Slop][stop-slop]) |
| `technical-writing` / Writing for Agents | Diátaxis and instruction/disambiguation checks suit human engineering docs; skill/AGENTS instructions have a different audience. | **Prefer a sourced technical-doc branch in Writing for Humans.** Original-name alternative also works with Unslop closure. Writing for Agents retains agent-document ownership. ([Technical method][p-technical], [audience boundary][a-humans]) |
| `show-me-your-work` | Append-only decision TSV plus transcript audit, different-model-family review and ongoing Attention footer. | **Offer explicit audit mode/original package.** Keep one Tracking Home; disclose unavailable transcripts/diversity rather than pretending the TSV alone fulfills the method. ([Source][p-work]) |
| Tracking / Show Me | Tracking owns state, evidence, review/resolution and acceptance; Show Me supplies visual explanation. | **Retain both roles.** A decision ledger can support Tracking and be presented visually; it replaces neither QA nor acceptance. ([Tracking][a-tracking], [Show Me][show-me]) |
| `correct` / Matt `retro` | Correct implements enforcement for repeated mistake classes and proves guards fail on past mistakes; Retro recommends environment improvements. | **Adopt original `correct`; retain advisory Retro.** Patch automatic commits/scope; use Writing for Agents for instruction edits. Retro already values deterministic checks. ([Correct][p-correct], [Retro][m-retro]) |
| `automate-me` | Mines current-workspace repeated preferences, asks questions, drafts manual personal skills, then assumes worktree/commit/PR delivery. | **Defer default; retain opt-in candidate.** Validate transcript access, secure approval of inferred durable preferences, use Atlas authoring policy and conditional delivery. ([Source][p-automate]) |
| All `principle-*` methods | Twenty-four small contextual methods, including dependencies that README “standalone” claims overlook. | **Ship selected closure plus a cheap index.** Load relevant leaves once; classify every leaf in the appendix. ([Runtime index][p-principles]) |

## Compose where behavior conflicts, preserve independent owners elsewhere

**TDD is the strongest new composition ruling.** Route explicit feature/interface TDD and requested integration-test design to Matt; route an ordinary bug with an existing inexpensive observable check to Pstack's focused regression loop when that method is selected. Explicit method choice wins. A pre-agreed Test Seam outranks a generic cheap-test escape: an intentional integration boundary is not wasteful merely because setup costs more. Reuse one failing-before/passing-after receipt across selected methods, and expose infeasibility rather than weakening assertions. Neither pinned body places refactoring inside its loop: Matt delegates it to review, despite broader wording in display metadata. ([Pstack][p-tdd], [Matt body][m-tdd], [Atlas approved-seam ruling][a-tdd])

**Teach needs a product choice, not concatenation.** Pstack teaches a current change without quizzes or durable course writes; Matt deliberately builds a persistent learning system with exercises. Prefer Pstack for an engineering-understanding installation and Matt as an alternate learning-workspace choice. If simultaneous access is required, an `atlas-teach` router earns its name by resolving purpose and side effects before creating files. Catalog descriptions alone cannot disambiguate two installed entries both named `teach`. Pstack Teach also asks for narrow Why research while Why permits category skipping only for absence or demonstrated irrelevance; explicitly scoped investigations need a recorded coverage ruling. ([Pstack Teach][p-teach], [Why coverage][p-why], [Matt Teach][m-teach])

**Writing has related methods worth grouping.** A technical-document branch belongs under human-writing ownership, with genre, terminology, facts and calibrated uncertainty above catalog prohibitions. Stop Slop can remove a meaningful qualifier if applied literally; Unslop is more permissive in some areas but still imposes rigid bans. Compare them as alternative methods on real prose before replacing the default. Technical Writing is not automatically appropriate for skills or agent instructions. This is substantive audience/mode routing; another prefixed technical-writing package would add little. ([Stop Slop examples][stop-examples], [Unslop][p-unslop], [technical defaults][p-technical], [human-writing contract][a-humans])

**Architect's default implementation is an invocation difference, not an inherent conflict with Atlas Implement.** Architect owns candidate design and its implementation path; Implement selects applicable disciplines. Actual conflicts arise when a selected TDD seam or explicit design checkpoint clashes with immediate implementation. Those selected commitments govern the phase. Likewise, “every unit green,” failing-test-first delivery and planned temporary scaffolding breakage require explicit phase/checkpoint semantics when combined. Mere co-installation does not activate every method. ([Architect][p-architect], [Implement][a-implement], [sequence principle][pr-sequence], [outcome principle][pr-outcome])

Arena and Swarm should stay independent: alternative synthesis differs from distributed coverage/races. Team Up chooses available agents/models/effort, while those methods own work organization and evidence. Interrogate can become a separate Review mode if demand warrants it, but its merged ranking must not overwrite Standards/Spec reports. Show Me Your Work can become optional Tracking evidence if the ledger's relationship to the canonical record is explicit; do not silently add audit, multimodel, verification and acceptance gates. ([Arena][p-arena], [Swarm][p-swarm], [Team Up][a-team], [Review][a-code], [Tracking][a-tracking])

The current native-first direction also favors original `wayfinder` with patches, original research/prototype access and native Diagnosing Bugs/Code Simplification. Preserve useful machinery rather than replacing methods with thin summaries. **Research and Prototype must work both individually and through Wayfinder**, so a single-package install cannot depend on an undeclared sibling. These packaging directions remain proposals; this report implements none of them.

## Complete closures make Atlas independent of AFK

Atlas should deliver its recommended core itself. AFK can assist selection/installation, but runtime completeness cannot depend on its server, profiles or installer. Distinguish mandatory skill calls, conditional calls, named principle references, optional companions and host capabilities. Preserve support trees; changing tool names is not permission to discard templates or evidence helpers. The repository already documents standalone patched packages and dependency declarations. ([Maintenance contract][a-maintenance])

| Candidate | Required closure or support | Boundary to preserve |
|---|---|---|
| How / Why | How's two role templates; Why's 12 Markdown references, including epistemics, investigator/synthesizer and category playbooks. | Why does not invoke How. Missing git/gh/history/connectors are evidence gaps, not invented availability. |
| Pstack Teach | How + Why + Unslop, with their support files. | Image generation for spatial teaching needs capability detection and an honest diagram fallback. |
| Matt Teach | Entry and four format references; persistent HTML/assets workspace. | Browsing, writes and viewing are capabilities, not additional named packages. |
| Arena | Four directly named principles: separate state, laziness, redesign, prove. Conditional audit adds Show Me Your Work, Unslop and encode-lessons. | Isolated candidates plus judge; verify the synthesized result, not just its winning input. |
| Architect | Three local references; Arena; How except isolated greenfield; conditional Why and Interrogate; **14-principle conservative closure**, including indirect context/audit edges. | Candidate runners read Architect as context; they must not recursively launch the full workflow. |
| Swarm / Interrogate | Swarm has no Pstack skill/principle dependencies. Interrogate has four review/lead references. | Bounded host scheduling; actual model diversity versus same-model isolated or sequential degraded review must be stated. |
| TypeScript guide | Patterns reference; type-system, boundary and encode-lessons principles. | Type-system ↔ TypeScript references form a load-once cycle, not recursive execution. |
| Verification lifecycle | Generator's three feature-map examples; optional maintenance companion; generated local skill/map/helpers. | Generation works without PE/AFK; self-proof and later all-feature maintenance have distinct scopes. |
| Writing / audit | Technical Writing → Unslop. Show Me Your Work → log helper, TSV template, Unslop and encode-lessons. | Transcript read and cross-family reviewer are substantive requirements, not optional formatting. |
| Automate Me | Unslop, host authoring method, transcript access; Poteto is an example read. | Package a pinned non-executable example rather than importing Poteto's broader runtime/autonomy policy. |

These closures are traced from bodies rather than the README: it omits Teach's Unslop edge and treats several audit/orchestration methods as standalone too loosely. Architect's conservative 14-leaf set is boundary-discipline, encode-lessons-in-structure, exhaust-the-design-space, fix-root-causes, foundational-thinking, guard-the-context-window, laziness-protocol, make-operations-idempotent, minimize-reader-load, outcome-oriented-execution, prove-it-works, redesign-from-first-principles, separate-before-serializing-shared-state and subtract-before-you-add. Conditional closure is packaging availability, not an instruction to execute every branch. ([Teach][p-teach], [Architect and runner][p-architect], [runner][p-runner], [Arena][p-arena], [context edge][pr-reader], [audit edge][pr-prove], [audit support][p-work])

Generated verification knowledge and PE reports cooperate without a new omnibus composition. A local `verify-<app>` owns launch, stable handles, isolation, journeys, cleanup and evidence paths; PE Verify consumes selected journeys and renders the run. Derive explicit feature/entrypoint items rather than feeding a map's Gotchas and nested bullets blindly into a Markdown QA parser. Maintenance `clean/changed/blocked` is lifecycle state, not PE pass/fail; an attempted unreachable feature is normally skipped with prerequisites, while unselected checks remain not-run. PE schema v1 rejects unknown fields and offers no first-class benchmark or native-desktop transcript structure. Preserve it until an actual reporting need warrants a versioned extension; schema validity does not prove execution or measurement validity. ([Generator][p-create], [maintenance][p-maintain], [PE schema][a-schema], [validator][a-validator])

Host patches must address model slugs, dispatch syntax, concurrency, transcripts, history, connectors, browser/native drivers and image generation. Sequential self-review cannot honestly claim independent model diversity. Benchmark Linux tools need host equivalents; its minimum five runs per side is neither a universal sufficiency guarantee nor a latency target. Generated journeys need owned test data/process cleanup; they do not authorize real messages or unrelated product fixes. Preserve manual invocation metadata, and make publication assumptions in Correct, maintenance, Automate Me and model-default repair conditional on the caller's authorization. ([Benchmark][p-benchmark], [Interrogate][p-interrogate], [generator][p-create], [maintenance][p-maintain], [Correct][p-correct], [Automate Me][p-automate])

## Preserve provenance without claiming untested quality

Pstack's pinned root license is **MIT, copyright 2026 Lauren Tan**; Matt's is MIT, copyright 2026 Matt Pocock. Retain notices and exact source paths, mirror/original lineage, immutable pins, hashes, copied/patched/derived classification, replayable patches and behavioral rulings. The current PE Verify source has its separate Apache-2.0/NOTICE provenance. Neither a matching hash nor a successful patch replay proves method quality. ([Pstack license][p-license], [Matt license][m-license], [PE source receipt][a-verify-manifest], [maintenance rules][a-maintenance])

Bro requires a narrower conclusion. Research verified installed Bro/Recap/Readback/Facts against `backnotprop/bro@523ed36584ec877b975db8c418ef12d485235d0e`, and Pstack Bro matched exactly. **The separate Bro repository has no verified LICENSE/COPYING or manifest license declaration at that pin.** Keep existing optional selections distinct from new vendoring; obtain redistribution evidence before bundling its family. Pstack's declared MIT distribution does not settle historical ownership of identical text or confer permission for the other Bro files. This uncertainty does not block unrelated licensed Pstack dependencies. ([Bro tree][b-tree], [Codex manifest][b-manifest], [Pstack Bro][p-bro], [Pstack license][p-license])

No reviewed skill was executed and no comparative model, routing, cost or quality trial was run. The research does not prove the mirror's equivalence to Cursor, latest-upstream status, correct host fallbacks, working transcript discovery, PE media ergonomics or real-app verification. The TypeScript guide specifically needs repairs before promotion: a plain numeric duration does not prohibit negatives, arbitrary NonEmpty indexing does not prove bounds, and claims about every `as` or unconditional internal trust overstate guarantees. Validate corrected examples under representative strict compiler configurations. ([Mirror][mirror], [TypeScript patterns][p-patterns], [boundary discipline][pr-boundary])

## Appendix: all 24 principles stay contextual

The complete classification below is a packaging/loading judgment. **A** means high practical value or selected-core dependency; **B** means conditional specialist/reference; **C** means scope or conflict ruling required. Every label below is the suffix of the original `principle-` package name. Install closure where needed; do not inject all 24 into global instructions. Poteto's index already distinguishes applying a principle from reading every leaf eagerly. ([Index and loading rule][p-principles])

| Principle | Class | Contribution and limiting rule |
|---|---|---|
| [attack-the-premise][pr-attack] | B | Challenge a shared premise after repeated failed fixes; needs actor/evidence census. |
| [boundary-discipline][pr-boundary] | A | Parse boundaries, isolate core; qualify unconditional internal trust. |
| [build-the-lever][pr-lever] | B | Reusable deterministic tooling; avoid tooling ceremony for every one-off. |
| [encode-lessons-in-structure][pr-encode] | A | Turn recurring mistakes into checks; preserve irreducible judgment. |
| [exhaust-the-design-space][pr-exhaust] | A | Distinct candidates for novel design; not every routine change. |
| [experience-first][pr-experience] | A | User/maintainer experience governs implementation convenience. |
| [explain-the-number][pr-number] | A | Connect measurements to limiters and alternatives; retain uncertainty. |
| [fix-root-causes][pr-root] | A | Reproduce/instrument causes; broader repairs remain within scope. |
| [foundational-thinking][pr-foundation] | A | Data/access/concurrency shape before scaffolding details. |
| [guard-the-context-window][pr-context] | B | Bound phases/context and summarize bulk; adapt actual host budgets. |
| [laziness-protocol][pr-laziness] | A | Consolidate decisions and minimize changes; complements Simplification. |
| [make-operations-idempotent][pr-idempotent] | A | Retry/restart/crash convergence for stateful lifecycles. |
| [migrate-callers-then-delete-legacy-apis][pr-migrate] | C | Internal coordinated migration only; preserve external compatibility and Atlas baselines. |
| [minimize-reader-load][pr-reader] | A | Reduce hidden state/indirection; adds context-window reference. |
| [model-the-domain][pr-domain] | A | State/types/registries encode invariants; complements glossary/ADR workflow. |
| [never-block-on-the-human][pr-human] | C | Advance reversible work; no inherited external-action authorization. |
| [outcome-oriented-execution][pr-outcome] | C | Planned intermediate breakage needs explicit verification boundaries. |
| [prove-it-works][pr-prove] | A | Observe actual outcomes; conditional audit adds heavier closure. |
| [redesign-from-first-principles][pr-redesign] | B | Reconsider foundational shape; keep rewrite scope bounded. |
| [separate-before-serializing-shared-state][pr-separate] | A | Isolate writes before serializing canonical state; instructions are not locks. |
| [sequence-verifiable-units][pr-sequence] | B | Ordered proof units; reconcile green-unit, failing-test and temporary-breakage rules. |
| [subtract-before-you-add][pr-subtract] | B | Remove demonstrated dead weight; no automatic retained-baseline deletion. |
| [test-behavior-not-implementation][pr-behavior] | A | Public behavior and meaningful effects; preserve legitimate negative assertions. |
| [type-system-discipline][pr-types] | A | Construct valid states/derive schemas; qualify guarantees and load TS cycle once. |

## Adopt in phases, then decide final identities

The next useful output is a small set of reviewable package/ruling proposals, followed by empirical trials. Route correctness, instruction cost and output quality are separate results: a correctly selected method can still produce weak work. Record loaded files, actual model diversity, proof gaps, clarification count, time/cost where measurable and human assessment, without equating fewer words with better outcomes.

| Phase | Reviewable work | Evidence required before expanding |
|---|---|---|
| 1: settle boundaries | Ratify native-first identity map, TDD precedence, Teach coexistence and writing-owner rules. Preserve standalone Research/Prototype through Wayfinder; prefer patched `pe-verify`. | Four routing cases: cheap regression, approved feature seam, requested costly integration seam, no meaningful executable seam. No duplicate confirmation or hidden gates. |
| 2: package useful complements | Prepare How/Why, Correct, Benchmark and Blast Radius; ship generator/maintenance together for one real project need. | Complete local links/licenses/closure, replayable patches and host capability checks. Generate/prove one journey, retain evidence, then maintain every seeded feature. |
| 3: test heavier methods | Add Arena/Swarm/Architect and selected Teach with Team Up adaptations; trial Interrogate and optional audit trails. | Isolated candidates, verified synthesis, bounded scheduling, accurate disagreement/gap reports and transcript/diversity disclosure. Feed one selected app run through unchanged PE reporting. |
| 4: choose editorial/language defaults | Repair TypeScript examples; compare Unslop against complete current Human Writing/Stop Slop. Keep Automate Me opt-in and No Comments unchanged out. | Strict compiler examples; representative docs preserving qualifiers/domain terms; explicit approval before durable inferred personalization. |

Open decisions are concrete: whether both Teach providers must coexist; whether focused TDD becomes a method in Implement or a provenance-tracked adaptation within one broader TDD package; which technical-writing and anti-slop route becomes default; how unavailable transcript/cross-family capabilities degrade; and which package sets constitute the recommended core versus optional specialists. Decide these **before final packaging identities**, with explicit rulings only where semantics differ. The goal is an Atlas distribution that remains complete without AFK and can explain why each maintained method exists.

[mirror]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/MIRROR.md
[p-commit]: https://github.com/backnotprop/pstack/commit/1f0f9c3bac03c4297f6fc8f7644fa412eda57085
[p-license]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/LICENSE
[m-license]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/LICENSE
[p-how]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/how/SKILL.md
[p-why]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/why/SKILL.md
[p-epistemics]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/why/references/epistemics.md
[p-teach]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/teach/SKILL.md
[m-teach]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/productivity/teach/SKILL.md
[p-bro]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/bro/SKILL.md
[b-bro]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/bro/SKILL.md
[b-recap]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/recap/SKILL.md
[b-readback]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/readback/SKILL.md
[b-facts]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/facts/SKILL.md
[b-tree]: https://github.com/backnotprop/bro/tree/523ed36584ec877b975db8c418ef12d485235d0e
[b-manifest]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/.codex-plugin/plugin.json
[p-architect]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/architect/SKILL.md
[p-runner]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/architect/references/runner-prompt.md
[p-arena]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/arena/SKILL.md
[p-swarm]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/swarm/SKILL.md
[p-tdd]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/tdd/SKILL.md
[m-tdd]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/tdd/SKILL.md
[a-tdd]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-implement/references/tdd/tdd.md
[a-implement]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-implement/SKILL.md
[p-ts]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/typescript-best-practices/SKILL.md
[p-patterns]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/typescript-best-practices/references/patterns.md
[p-blast]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/blast-radius/SKILL.md
[p-benchmark]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/benchmark-checklist/SKILL.md
[p-create]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/create-verification-skill/SKILL.md
[p-maintain]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/maintain-verification-skill/SKILL.md
[a-verify-manifest]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/SOURCE-MANIFEST.json
[pe-verify]: https://github.com/backnotprop/product-engineering/blob/0642a58496d4dfa1de9688a82c29dfa34d24370a/skills/pe-verify/SKILL.md
[p-interrogate]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/interrogate/SKILL.md
[p-lead]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/interrogate/references/lead-judgment.md
[a-code]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-review/references/code/code-review.md
[d-doubt]: https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/doubt-driven-development/SKILL.md
[p-no-comments]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/no-comments/SKILL.md
[p-comment-sicko]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/no-comments/references/comment-sicko.md
[p-unslop]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/unslop/SKILL.md
[a-humans]: /Users/leonardo/Codes/projects/logbook-atlas/skills/writing-for-humans/SKILL.md
[stop-slop]: https://github.com/hardikpandya/stop-slop/blob/8da1f030185bdfe8471220585162991eaeb970e9/SKILL.md
[stop-examples]: https://github.com/hardikpandya/stop-slop/blob/8da1f030185bdfe8471220585162991eaeb970e9/references/examples.md
[p-technical]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/technical-writing/SKILL.md
[p-work]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/show-me-your-work/SKILL.md
[a-tracking]: /Users/leonardo/Codes/projects/logbook-atlas/skills/tracking-implementation/SKILL.md
[show-me]: https://github.com/humanlayer/skills/blob/ca7c8088db69e315a8b2deea43820270457f8f3c/plugins/show-me/skills/show-me/SKILL.md
[p-correct]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/correct/SKILL.md
[m-retro]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/retro/SKILL.md
[p-automate]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/automate-me/SKILL.md
[p-principles]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/poteto-mode/SKILL.md#L38-L79
[a-team]: /Users/leonardo/Codes/projects/logbook-atlas/skills/team-up/SKILL.md
[a-maintenance]: /Users/leonardo/Codes/projects/logbook-atlas/docs/authoring/source-composition.md
[a-schema]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/references/report-schema.md
[a-validator]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/scripts/validate_report_lib.py
[pr-attack]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-attack-the-premise/SKILL.md
[pr-boundary]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-boundary-discipline/SKILL.md
[pr-lever]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-build-the-lever/SKILL.md
[pr-encode]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-encode-lessons-in-structure/SKILL.md
[pr-exhaust]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-exhaust-the-design-space/SKILL.md
[pr-experience]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-experience-first/SKILL.md
[pr-number]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-explain-the-number/SKILL.md
[pr-root]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-fix-root-causes/SKILL.md
[pr-foundation]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-foundational-thinking/SKILL.md
[pr-context]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-guard-the-context-window/SKILL.md
[pr-laziness]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-laziness-protocol/SKILL.md
[pr-idempotent]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-make-operations-idempotent/SKILL.md
[pr-migrate]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-migrate-callers-then-delete-legacy-apis/SKILL.md
[pr-reader]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-minimize-reader-load/SKILL.md
[pr-domain]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-model-the-domain/SKILL.md
[pr-human]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-never-block-on-the-human/SKILL.md
[pr-outcome]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-outcome-oriented-execution/SKILL.md
[pr-prove]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-prove-it-works/SKILL.md
[pr-redesign]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-redesign-from-first-principles/SKILL.md
[pr-separate]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-separate-before-serializing-shared-state/SKILL.md
[pr-sequence]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-sequence-verifiable-units/SKILL.md
[pr-subtract]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-subtract-before-you-add/SKILL.md
[pr-behavior]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-test-behavior-not-implementation/SKILL.md
[pr-types]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/principle-type-system-discipline/SKILL.md
