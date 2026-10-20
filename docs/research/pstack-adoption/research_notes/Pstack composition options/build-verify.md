# Build and verification composition options

## Which topology fits the methods, after comparing all packaging options?

### Takeaway

**Preferred target: keep and substantively expand Atlas Verify; add selectable Adversarial and Impact methods to Atlas Review; keep both TDD methods in Atlas Implement; retain TypeScript as an optional original-name guide.** PE Verify + create/maintain project verification + benchmark can form a useful verification lifecycle composition. Interrogate fits Atlas Review's existing mode-selection model. Independent source maintenance does not require independent public packages.

The earlier recommendation over-weighted native package independence. Source identity, provenance, patches and update tracking can remain separate inside a router. This revised recommendation follows concrete routing and ownership benefits, not a presumption that more composition is better. Native packages remain a credible smaller-distribution alternative.

### Cited Findings

- Freshly reread current Atlas Implement, Review and Verify entries and relevant Code/evidence/report/QA-list/Tracking contracts. Current branch remains `feat/atlas-implement`, HEAD `1d671b4cb4d5193891f5f98d9cfdd726741a0c6d`. Atlas Review already groups Code, Static, Interface, Motion and Motion Audit, selecting only the requested method; Atlas Implement similarly selects TDD and/or Source-Driven. These packages establish a precedent for related methods with distinct purposes and outputs, rather than requiring every pair to be in direct conflict. [Review][a-review], [Implement][a-implement]. Local root: `/Users/leonardo/Codes/projects/logbook-atlas/skills/`.
- Current Atlas Verify remains the one-source PE adaptation, with feature/list execution, strict report generation and an entry-wide statement that its only repository write is a requested QA list. Generator/maintenance cannot simply be linked under that unchanged global contract: they deliberately create or edit project verification skills, maps and helpers. [Current Verify lines 15-39][a-verify], [Create lines 23-40][p-create], [Maintain lines 19-39][p-maintain].
- Pstack sources remain pinned at `1f0f9c3bac03c4297f6fc8f7644fa412eda57085`; Matt at `49dd158d1076134a641b33efb035946536778336`. Reread all seven relevant Pstack entries, with previously inspected support trees retained as research context. Generator builds project-specific launch/doctor/drive/evidence/cleanup knowledge; maintenance reconciles that knowledge against source and live behavior; benchmark evaluates a measured performance claim; blast-radius investigates downstream risk; Interrogate reviews execution adversarially. Their distinct deliverables are real, but distinct methods are still composable. [Create][p-create], [Maintain][p-maintain], [Benchmark][p-benchmark], [Blast][p-blast], [Interrogate][p-interrogate].
- Atlas's source model explicitly separates source records, consumers, carried methods, supporting files and rulings; one source ID may differ from its consuming skill name. Complete support scope, immutable pins, licenses and replayable patches are maintained regardless of public package naming. Bundled methods do not require separate installation. [Composition contract lines 35-55,67-79][a-composition].

### Inferences

The table compares **proposed placement in an existing Atlas composition**, a **new separate composition**, **native original-name packaging**, **replacement**, and **skip/defer**. A placement listed below is a proposal, not a claim that it exists today.

| Candidate | Add to existing composition | New separate composition | Native original-name package | Replacement | Skip/defer and preferred choice |
| --- | --- | --- | --- | --- | --- |
| Pstack `tdd` | **Atlas Implement: focused bug-regression method**, beside Matt and Source-Driven, with explicit route and seam precedence. | A separate `atlas-tdd` would duplicate Implement's selection responsibility. | Valid alone, or as a mutually exclusive alternative to Matt; two public `tdd` entries collide. | Replacing Matt loses feature/interface/seam design and substantive examples. | Skip if Atlas wants only the existing Matt discipline and its practical evidence exceptions. **Prefer the routed method** for the narrower bug workflow. |
| Matt `tdd` / current adaptation | **Keep Atlas Implement's feature/seam/integration-TDD method**, approved-seam patch and support. | A new TDD composition is unnecessary while Implement already groups execution disciplines. | Credible if dissolving Implement into direct skills; retain Atlas's seam/tool portability patches. | Pstack cannot replace its broader scope; do not replace Pstack's narrow loop with every Matt step either. | Do not skip the broader method merely because the short bug method is attractive. **Keep current placement.** |
| `typescript-best-practices` | Useful contextual language guidance in Implement and Review, but it should not become a mode or an extra phase. | A new `atlas-typescript` adds no clear routing value for one language guide. | **Best fit after correctness/convention patches**, usable from architecture, debugging, implementation and review. | Does not replace TDD, official-doc research, typecheck or Code review. | Defer if project standards/lint already cover the needed guidance. **Optional native guide**, not Verify content. |
| `blast-radius` | **Atlas Review: Impact mode**, including its targeted executable safety proof. More natural than Verify because its initiating question is what could break. | A new `atlas-impact` is defensible only if broader risk disciplines emerge; one method does not require it. | Strong alternative for standalone impact inquiries or a deliberately small Review package. | Cannot replace Code's Standards/Spec assessment or PE's requested QA report. | Skip on routine changes with adequate impact evidence. **Prefer Impact mode; keep out of Verify's default modes.** |
| `interrogate` | **Atlas Review: Adversarial mode**, with its own synthesis and finding categories. Existing mode selection prevents contamination of Code output. | A separate `atlas-adversarial` would mostly rename the original method while duplicating Review discovery. | Strong alternative if upstream-faithful direct invocation matters more than unified discovery; no efficacy disadvantage is established. | Do not replace Code's separate Standards/Spec reports or in-flight Doubt-Driven. | Optional per request/risk, not another automatic gate. **Prefer the selectable Review mode.** |
| `create-verification-skill` | **Atlas Verify: Create project verifier**, resolving write authority, recipe discovery and proof scope. | A separate create/maintain lifecycle composition plus native PE keeps authoring apart, but adds another public verification owner. | Strong modular alternative and useful outside Atlas. | Cannot replace execution/reporting: it builds driving knowledge and proves only one seed feature. | Skip generation when existing recipes/harnesses suffice; a normal verification run does not trigger creation automatically. **Prefer Verify mode.** |
| `maintain-verification-skill` | **Atlas Verify: Maintain project verifier**, sharing discovery, driver ownership and coverage/evidence rules with Run/Create. | A dedicated lifecycle composition could group it with Create but split discovery across owners. | Strong companion to native Create, provided invocation dependencies are declared. | Does not replace release QA or product repair; its target is verification assets. | No generated/local map means this mode is inapplicable, not a reason to generate automatically. **Prefer Verify mode.** |
| `benchmark-checklist` | **Atlas Verify: Performance evidence**, directly selectable and conditionally applied to performance claims in Run. | A new `atlas-performance` would need broader actual performance methods; do not import optimization playbooks to manufacture a composition. | Strong lightweight alternative for measured numbers outside QA reports. | Does not replace the report runner, optimization executor or regression tests. | Skip on runs without performance claims; defer a separate package when bundled. **Prefer a lazily loaded Verify method.** |
| PE Verify / current Atlas Verify | **Atlas Verify: Run**, preserving PE's feature/list execution and full report machinery as a separately tracked source. | The proposed expanded Verify is the meaningful composition; no second Atlas reporting wrapper is needed. | **Best alternative if lifecycle integration is declined**: native patched `pe-verify` with native Create/Maintain/Benchmark. | Pstack sources do not replace PE schema, validator, renderer or capture machinery. | Can skip rendered QA on ordinary low-risk work, but retain reporting capability. **Keep PE as the Run method in expanded Verify.** |

This preference is for an integrated Atlas distribution. It does **not** establish that the present single-source `atlas-verify` already delivers the proposed lifecycle. If Atlas declines the substantive expansion and keeps only its current PE adaptation, the earlier native `pe-verify` option remains the cleaner naming choice under the user's policy.

### Gaps

- No model or user-discovery trial compares one router with multiple public skills. Fewer public entrypoints may improve discovery; lazy loading may limit overhead; neither benefit was measured.
- No package, mode, method or metadata was edited. The unchanged current source is evidence for existing contracts, not evidence that the proposed design works.

## What concrete Atlas Verify composition would earn the name?

### Takeaway

Use one thin selector over **four complete, independently maintained methods**: Run, Create project verifier, Maintain project verifier, and Performance evidence. The selector earns its role through mode-specific permissions/deliverables and explicit bridges between reusable recipes, actual runs, coverage and measurements. It must not turn these choices into a mandatory pipeline.

### Cited Findings

- PE's feature/list report modes, code/browser/mixed checks, explicit skipped/not-run distinction, temporary run layout, renderer and media requirements already supply execution/reporting. Its schema allows only feature/list at `report.mode`; it has no create/maintain/benchmark workflow statuses. [PE source][pe-verify], [current report contract lines 36-80][a-report].
- Pstack Create writes a durable project-local skill/map/helpers, then runs launch/doctor/one feature/evidence/cleanup; its seed aim is 3-5 features. An unexecuted output remains a draft. Maintain restricts edits to that local skill directory and covers every feature from source and live execution, distinguishing doc/harness drift from app regressions. [Create lines 25-40][p-create], [Maintain lines 19-39][p-maintain].
- PE QA-list interpretation treats headings/bullets as checks; a feature map has a different structure with user entrypoints, driving recipes and Gotchas. These are not interchangeable input formats. PE's browser capture uses a fresh single page/context per item; Pstack maintenance uses one coordinator-owned live instance/session model and healthy-state resets. [QA list lines 19-36][a-qa], [feature-map example][p-map], [PE evidence lines 19-21][a-evidence], [Maintain line 33][p-maintain].
- The benchmark method tests whether timed work happened, errors occurred, production tuning is comparable, results reproduce and the user-visible path benefits. It requires at least five alternating runs per side for a comparison, with a disclosed one-run ballpark exception. Those numbers are measurement policy, not application SLAs. [Benchmark lines 9-33][p-benchmark].
- Tracking already records selected execution disciplines and linked scope/revision/gaps, has one automatic Code review, and leaves acceptance to the human. Broader Verify choices need no additional acceptance machinery. [Tracking lines 84-119][a-tracking].

### Inferences

Proposed selector and contracts:

| Selected method | Trigger/outcome | Allowed repository writes | Required deliverable and proof |
| --- | --- | --- | --- |
| **Run** | Verify implemented behavior; selected feature or QA list. Default for “verify this.” | No product edits; QA list only when requested. Reads existing local verifier as driving knowledge when relevant. | PE `report.json` + rendered report + captured evidence; record scope/revision/gaps. Never require verifier creation first. |
| **Create project verifier** | User asks for reusable verification/control instructions or explicitly selects establishing them. | The chosen project verification skill directory: SKILL, map, helpers. Product startup repairs stay with authorized executor; disposable verification scaffolding is explicit. | Generated assets plus proof of launch/doctor/one mapped feature/cleanup/evidence survival. Other seeded features remain unproved. PE can package this same live proof; no second drive solely to manufacture a report. |
| **Maintain project verifier** | User asks to audit/refresh existing verification instructions/map. | Only selected verifier directory; product regressions reported to executor. Publication state remains separate and requires applicable authorization. | Corrected assets if needed, source/live coverage per feature, remaining prerequisites/gaps, cleanup receipt. Keep maintenance result distinct from per-feature behavior verdicts. |
| **Performance evidence** | User asks to vet/measure a claim, or a selected Run item asserts a speedup/regression. | Temporary measurement artifacts; instrumentation/harness edits only within the agreed verification asset scope. Product optimizations belong to executor. | Raw repetitions/errors/work counts/environment/tuning, verdict and uncertainty. Use existing benchmark harnesses. PE report optional for a standalone performance request; required only when this evidence is part of a requested Run report. |

Concrete rulings, rather than a list of source links:

1. **Select the task before applying write/report rules.** Common rule: no product repair is authorized by verification. Run's existing “only QA-list repo write” and “one report JSON deliverable” apply to Run, not globally to Create/Maintain. Those modes produce durable skill assets and their own proof receipts. Performance may produce measurement artifacts without HTML. This is a real contract change that the router must state plainly.
2. **Use local recipes without imposing a framework migration.** Run discovers existing documentation, tests or `verify-<app>` instructions and follows applicable launch/doctor/drive/isolation/cleanup knowledge. Existing Playwright, CLI/PTY or HTTP harnesses stay valid. Missing local skills are a gap only if the requested run actually needs them; no automatic Create or Maintain detour.
3. **Preserve generated-skill usability.** A generated `verify-<app>` should explain how to launch/drive/capture/clean up without requiring AFK or an undeclared Atlas installation. When invoked through Atlas Verify, the Run method supplies PE reporting. The local skill owns app-specific knowledge, not a copied PE renderer that must be maintained separately in every project.
4. **Separate workflow selection from report mode.** `Create`, `Maintain` and `Performance` are Atlas task selectors; never write those strings into PE schema v1 `mode`. If their live checks are rendered, represent one proof as feature mode or independent checks as list mode. Keep lifecycle receipts alongside the report, not in invented schema fields. Do not weaken schema validation merely to fit the composition.
5. **Define coverage translation.** Map feature IDs, entrypoints and preconditions deliberately to report items/checkpoints/evidence. Do not parse every map heading as a QA item. Create proves one feature, Maintain covers every mapped feature, and Run honors the requested feature/list/selective scope. An unreachable attempted path with unmet prerequisites is a coverage gap, normally `skipped`, not proof the behavior passed. `clean/changed/blocked` maintenance outcomes must not be confused with PE item statuses.
6. **One live writer per shared app instance.** Source readers can be parallel and read-only through Team Up. The coordinator owns shared driving and cleanup; split work only when instances/data are actually isolated. Group compatible PE checks or use separate contexts deliberately instead of giving parallel workers the same UI session. Capture proof once and reuse it; reset/doctor after surprises.
7. **Performance is a selected evidence method, not an optimization mandate.** Apply its questions when making a measured claim; do not run it for a copy check. Keep actual error/work/tuning/repetition evidence. Retain stated inconclusive outcomes rather than mapping unknown results to pass. Do not import Perf issue/Hillclimb/Opening-a-PR execution, reset, commit or publication instructions as dependencies of number validation.
8. **Keep reporting proportional and handoffs explicit.** Run retains PE report requirements. Create/Maintain may reuse that reporting for their live checks, but have distinct asset/lifecycle deliverables. Tracking links the selected method, actual checked revision and gaps; the existing Code review and human acceptance gate remain. A maintained verifier, green report or benchmark never means shipped or accepted.

Packaging for this target:

- Preserve PE entry/support/schema/scripts/assets/license/NOTICE as the Run source; preserve Pstack Create's complete three-file example tree and its entry, Maintain's entry, Benchmark's entry and licenses under their own source records.
- Keep existing provenance IDs where appropriate; source paths and patch receipts remain independent of the outer invocation name. Bundle needed source references so an Atlas Verify installation works without AFK or a separately installed native `pe-verify`.
- Treat original-name requests as explicit method selection when unambiguous. Do not require parallel native packages solely to preserve upstream vocabulary. Native distributions can remain separately available where useful, without making duplicate installed public entries the default.

Alternatives rejected as the default target:

- **Native PE + native Create/Maintain/Benchmark:** coherent and lower integration effort, with strong reuse outside Atlas. It is the best alternative, not an inferior method. It leaves users/each caller to reconcile recipe discovery, authority, output scope, driver ownership and coverage translation; Atlas's intended integrated workflow makes that coordination worth centralizing.
- **PE Run + a new separate lifecycle composition:** clean separation between checking and maintaining the checker, useful if authoring tools should never share discovery with QA. Here it creates a new public owner for two related lifecycle actions while the existing Verify router could select them safely. Prefer this only if the combined entry becomes confusing in trials.
- **Replace PE with Pstack generation/maintenance:** rejected because generating/driving knowledge does not supply PE's report, schema, statuses, validator or renderer. Conversely, replacing generation with a PE QA-list seed loses launch/doctor/isolation/helper lifecycle knowledge.
- **Combine every method into every run:** rejected. It would oververify small tasks, invent maintenance work and produce duplicated proof. Composition means selection and conflict resolution, not sequential execution of every method.
- **Keep the current wrapper unchanged while merely naming future sources:** rejected as justification for naming. The lifecycle contracts and bridges must actually be authored/reviewed before claiming a meaningful composition exists.

### Gaps

- Schema v1 is adequate for linking existing command and browser proof, but rich native-desktop/terminal/measurement presentation may need a future versioned report extension. This proposal neither solves that by relabeling native checks “browser” nor presumes an extension is needed now.
- No Create→Run→Maintain compatibility trial or benchmark-to-report trial was run. Proposed bridges are design recommendations, not verified integration.
- Which modes should always render a report is a product choice. The preferred design keeps PE reporting mandatory for Run and optional for other modes' proof packaging, preserving each task's useful output without needless report ceremony.

## How should Review and Implement incorporate the remaining methods?

### Takeaway

Add **Adversarial** and **Impact** as selectable Atlas Review methods with their own outputs. Keep the two TDD sources routed inside Atlas Implement and TypeScript outside the verification lifecycle. These decisions preserve method differences while making Atlas's existing entrypoints more useful.

### Cited Findings

- Interrogate explicitly says not to auto-apply changes and produces model-attributed synthesized judgments. Its four references provide the reviewer template, rubric, quality lens and lead filtering. Atlas Code deliberately preserves separate Standards and Spec reports without merged ranking; Atlas Review already says review does not authorize fixes. The conflict exists only if outputs are collapsed or one method silently substitutes for the other. [Interrogate lines 9,40-76][p-interrogate], [lead judgment][p-lead], [Code lines 83-96][a-code], [Review lines 21-23][a-review].
- Blast-radius begins with a change and risk inquiry, traces pinned library/source/wire/timing/downstream behavior, and asks for one or two load-bearing safety facts backed by executable proof or explicitly marked unproven. Its own output contains what changed, safety fact, risks, cleared risks and cheapest premerge proof. This is an investigative review result with experiments, not a generic feature/list QA report. [Blast lines 15-50][p-blast].
- Pstack TDD is a focused bug regression loop with practical alternative checks; Matt/Atlas is a public-interface/approved-seam method with test/mocking support. Atlas already counts source-approved seams as pre-agreed. TypeScript prescribes modeling/pattern rules across reading/editing files, not a finite run or report. [Pstack TDD][p-tdd], [Matt][m-tdd], [Atlas seam ruling][a-tdd], [TypeScript][p-ts].
- Tracking currently asks for Code mode once automatically and explicitly forbids automatic rerunning; independent Doubt-Driven challenges in-flight decisions with its own context/authorization contract. Neither is replaced by another Review mode. [Tracking lines 112-119][a-tracking], [Doubt-Driven][d-doubt].

### Inferences

**Atlas Review proposal:**

- **Code stays the ordinary standards-and-intent method.** Preserve pinned scope, independent Standards/Spec contexts, originating-material checks and separate outputs. Do not silently dispatch both Code and Interrogate for “review this.”
- **Adversarial selects Interrogate.** Explicit “interrogate,” “multimodel/adversarial review,” or a selected need for independent challenge routes here. Preserve intent, actual reviewer roster, model-attributed findings, lead filtering and agreement/disagreement. If Code is also requested, return its two axes separately beside the Adversarial result; do not rank all findings into one consensus verdict.
- **Impact selects blast-radius.** Explicit downstream-risk questions route here. Keep real code tracing, a scratch executable probe or existing test, proof limitations and cleared risks. Review's read-only product boundary permits running existing checks and creating owned scratch proof; it does not authorize fixes, broad harness edits, publication or unconstrained Arena work. Arena/How/Why are contextual/conditional support, not a mandatory chain.
- **Use Verify as a handoff only when needed.** An impact probe can supply all useful evidence without a rendered PE report. If the user wants recorded QA or a risk needs a broader real-user-path check, pass the exact question/target/revision and existing proof to Verify Run. No duplicate experiment just to cross a package boundary. A preexisting concrete check requested only for execution belongs in Verify; discovering what could break remains Impact review.
- **Patch dispatch and judgment at the method boundary.** Team Up chooses actual available reviewers/efforts, with honest disclosure of cross-provider versus same-model isolated versus sequential degraded review. Remove automatic model-table PR behavior. Treat line-count/abstraction heuristics under repository standards and concrete consequences, not universal blockers. Preserve no-auto-fix. These integration rules are useful in either native or composed packaging.

Why not keep Interrogate and blast-radius native by default? Native packages preserve recognizable commands and independent reuse with fewer router changes. Those are real advantages. For Atlas's existing Review product, however, explicit method selection already unifies several review questions without erasing output contracts; adding these two complete methods makes that same entrypoint answer two additional common questions. Separately maintained source entries and support files retain upstream independence inside the composition. A new prefixed review package would duplicate this existing owner.

**Keep out of Atlas Verify:** Interrogate/Code/Interface/Motion judgment; blast-radius risk discovery; feature implementation/TDD; broad TypeScript policy; in-flight Doubt-Driven; Tracking's state and acceptance gates; optimization executors/PR playbooks. Verify can consume their exact evidence questions and artifacts without owning those workflows.

**Atlas Implement proposal:** keep Matt's feature/seam/integration TDD and Pstack's cheap existing-path bug regression as separately sourced methods. Explicit method choice wins; an approved integration seam cannot be silently downgraded by the cheap-test escape. Reuse one fail-before/pass-after receipt. Clarify when an authorized existing regression path already establishes its seam, rather than demanding duplicate confirmation. Source-Driven can still establish version-specific facts alongside the selected loop. Do not place bug repair in read-only Verify merely because TDD produces proof.

**TypeScript proposal:** optional original-name package after fixing overclaiming examples and respecting repository brand/discriminant/schema conventions. It can be loaded contextually by Implement or Review, without a new mode or mandatory extra pass. A shared bundled guide in multiple packages is also feasible if Atlas requires it in core; that would be dependency closure, not a reason to call the guide a verification method. Skip/defer if project standards already suffice.

Priority and uncertainty:

1. Prefer the expanded Verify and Review topologies **as proposals for review**, rather than renaming packages now. Author mode/authority/output/coverage rulings before implementation; keep each source's pin/patch/license/support tree separately tracked.
2. Validate routing against simple feature QA, missing local verifier, explicit generator, all-feature maintenance, standalone benchmark, adversarial diff review and downstream-risk inquiry. Correct routing includes selecting no unnecessary methods and never expanding a read-only task into repairs.
3. Run one project-specific compatibility trial later. Check proof survives cleanup, seeded versus covered features remain distinct, shared sessions have one driver, reports preserve schema, and existing Tracking gates remain unchanged.
4. Treat model efficacy, discovery improvement and net maintenance savings as unmeasured. Native packaging remains the fallback if the proposed router fails those real-use checks or users prefer direct skills. No source-contract evidence requires a universal composition choice.

### Gaps

- This is a focused corrective source analysis. Earlier notes/report were background and remain untouched; this file records the more complete options assessment and revised preference. No runtime implementation, install, source change, commit, push or PR occurred.
- No evidence shows that Interrogate's model diversity produces higher-quality results than Atlas Code or Doubt-Driven. The preferred placement follows task fit and discoverability, not claimed reviewer superiority.
- All source pins are unchanged. Source contracts were reread locally; latest-upstream status and running capability availability were not refreshed because neither is needed to compare the specified pinned designs.

[a-review]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-review/SKILL.md
[a-implement]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-implement/SKILL.md
[a-verify]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-verify/SKILL.md
[a-composition]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/docs/authoring/source-composition.md
[a-report]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-verify/references/report-schema.md
[a-qa]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-verify/references/qa-list.md
[a-evidence]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-verify/references/evidence.md
[a-tracking]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/tracking-implementation/SKILL.md
[a-code]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-review/references/code/code-review.md
[a-tdd]: https://github.com/logbookfordevs/logbook-atlas/blob/1d671b4cb4d5193891f5f98d9cfdd726741a0c6d/skills/atlas-implement/references/tdd/tdd.md
[p-create]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/create-verification-skill/SKILL.md
[p-maintain]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/maintain-verification-skill/SKILL.md
[p-benchmark]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/benchmark-checklist/SKILL.md
[p-blast]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/blast-radius/SKILL.md
[p-interrogate]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/interrogate/SKILL.md
[p-lead]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/interrogate/references/lead-judgment.md
[p-tdd]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/tdd/SKILL.md
[p-ts]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/typescript-best-practices/SKILL.md
[p-map]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/create-verification-skill/references/feature-map-example/README.md
[m-tdd]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/tdd/SKILL.md
[pe-verify]: https://github.com/backnotprop/product-engineering/blob/0642a58496d4dfa1de9688a82c29dfa34d24370a/skills/pe-verify/SKILL.md
[d-doubt]: https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/doubt-driven-development/SKILL.md
