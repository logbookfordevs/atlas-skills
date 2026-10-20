# Compose Pstack around useful task choices

Research snapshot: **2026-10-15**. The discussion table lists remaining decisions only. The six Verify/Review entries completed in `3889f2a` have been removed. TDD is settled: keep Matt unchanged and skip Pstack TDD for now. TypeScript Best Practices is deferred; Atlas Explain and the independent upstream Matt Teach selection are complete and removed from the table. Architect is complete as a selectable Atlas Implement method. Arena and Swarm are complete as Team Up modes. Technical Writing is complete as conditional guidance in Writing for Humans; PR writing belongs to the independent `pr` skill. Unslop replaces Stop Slop as one shared, lightly patched catalog in Writing for Humans and Explain. Show Me Your Work is complete as Tracking's optional Audit Trail, with the shared Unslop catalog also bundled there. Required principles remain contextual dependencies; the broader principle-library decision remains open. Atlas Retro (`atlas-retro`) is complete as a manual Diagnose/Enforce composition, with advisory default and explicit repair authority. No Comments is settled: skip absorption and add one reminder to the existing Code Standards reviewer to check changed comments against repository policy. Teach, Diagnosing Bugs and Code Simplification are now direct upstream stack selections; their unchanged carried packages are retired. The analysis below retains the original research context.

**The earlier report undercompared composition options.** It treated distinct outputs and independently maintained sources as too strong a reason for separate public packages. In particular, it recommended native PE Verify and Interrogate without equally developing their fit inside Atlas Verify and Atlas Review. The fuller comparison favors **Atlas Verify with Run/Create/Maintain/Performance methods, and Atlas Review with optional Adversarial/Impact methods**. Other useful compositions include an engineering Explain entry, design-first implementation, and selected orchestration methods under Team Up. These are proposed target contracts, not implemented modes or approved final names. Native packages remain strong alternatives where composition adds more discovery or maintenance burden than useful coordination.

## Source independence does not determine public packaging

Apply the user's criterion equally: a composition earns its interface through **actual conflict rulings, consequential mode routing, or useful grouping of related methods**. A patch alone does not earn an Atlas prefix; a shared topic alone does not earn a router. Separately pinned sources, support files, licenses, patches and update histories can remain intact within one public package. Atlas already supports this distinction between source records, consumers and selected methods. ([Maintenance model][a-maintenance], [Review selector][a-review], [Implement selector][a-implement])

The strongest revised topology extends owners that already exist. Verify coordinates reusable app-driving knowledge, its maintenance, actual execution and performance evidence. Review selects standards/intent, adversarial challenge or downstream-risk investigation while preserving their different outputs. **Explain, Architect's placement and Retro grouping are more tentative options**, dependent on Atlas's desired public scope. Neither preferred nor tentative proposals mean running every method together or constitute user approval. Existing Tracking review/acceptance rules remain; composition introduces **no new mandatory checkpoint**. ([Verify][a-verify], [Tracking][a-tracking])

## Remaining decisions

“Preferred” describes placement **if adopting the capability**. It is not a finding that every candidate belongs in the default core. The matrix compares existing compositions, new compositions, native skills, replacement and omission through the decisive alternative, rather than presuming either native-first or composition-first.

| Candidate | Preferred placement | Strongest alternative | Decisive benefit or cost |
|---|---|---|---|
| `automate-me` | **Defer default; explicit separate personalization workflow** | Future multi-method personalization composition | No existing router closely owns history mining plus durable-preference confirmation. A generic meta-router is premature. ([Source][p-automate]) |
| Bro: `bro`, `recap`, `readback`, `facts` | **Keep existing explicit commands; no Pstack duplicate** | Reuse narrow techniques within requested writing/handoff | Tiny conversational intents need little routing. Readback must not become an automatic approval gate; Facts is not research. ([Bro][b-bro], [Recap][b-recap], [Readback][b-readback], [Facts][b-facts]) |
| All 24 `principle-*` | **Contextual bundled references plus index** | Optional directly invocable reference library | Preserve consumed closure without global injection or an omnibus engineering-judgment router. ([Index][p-principles]) |

## Verify and Review need explicit bridges, not forced passes

**Atlas Verify would earn its name through four distinct contracts.** Its current Run-wide restriction on repository writes cannot govern authoring modes unchanged. PE already supports **code, browser and mixed checks**; Create/Maintain need no replacement reporting engine. ([Current Verify][a-verify], [PE][pe-verify])

| Selected method | Outcome and authority | Evidence/output boundary |
|---|---|---|
| **Run** | Requested feature/list QA; product code remains read-only. Use existing local recipes/harnesses. | Preserve PE report JSON, schema, validator, renderer and capture requirements. Missing verifier does not automatically trigger Create. |
| **Create** | Write the chosen project verifier directory: entry, map and helpers. | Prove launch/doctor/one mapped feature/cleanup/evidence survival. Other seeded features remain unproved; unexecuted assets are draft. |
| **Maintain** | Edit only the selected verifier assets; report product regressions to the executor. | Reconcile source and live coverage of every mapped feature. Keep `clean/changed/blocked` separate from behavior verdicts. |
| **Performance** | Vet a real measured claim; use existing harnesses and agreed measurement assets. | Preserve repetitions/errors/work counts/tuning and uncertainty. Standalone measurements need no mandatory PE report. |

The **proposed adapter must be explicit and is not built**: map feature/entrypoint IDs and preconditions deliberately to PE items/checkpoints/evidence instead of parsing every feature-map heading as a test. Keep PE schema v1 unchanged: Create/Maintain/Performance select tasks, while its report mode remains feature/list. Link raw benchmark evidence separately and use existing code/mixed evidence fields when reporting it; invent no benchmark fields or native-desktop browser support. An attempted unreachable route with unmet prerequisites is normally skipped, not passed. Capture useful proof once and reuse it. ([Feature-map generation][p-create], [maintenance][p-maintain], [QA parsing][a-qa], [schema][a-schema], [validator][a-validator])

One coordinator owns each shared live app/session and cleanup; parallel source readers are safe only within actual host bounds, and parallel drivers require isolated instances/data. Product repairs, real messages, optimization and publication require applicable task authority. A verification request grants none automatically. These coordination benefits make expanded Verify preferable for Atlas; **native PE plus native lifecycle/checklist methods remains the best fallback if this composition is not adopted**. ([Maintenance][p-maintain], [capture contract][a-evidence])

Review's **Adversarial** mode preserves Interrogate's lead-filtered agreement/disagreement output, no-auto-fix rule and actual reviewer roster. **Impact** preserves Blast Radius's load-bearing safety facts, cleared risks and unproved assumptions; owned scratch probes do not authorize repairs or broad harness edits. Code remains separate Standards/Spec review. A concrete check needing only execution can go to Verify; risk discovery stays Impact. No automatic Code-plus-Interrogate pair, mandatory PE report, or duplicate experiment follows from this topology. Team Up handles valid dispatch, and unavailable diversity is disclosed. ([Interrogate][p-interrogate], [lead filtering][p-lead], [Blast Radius][p-blast], [Code][a-code], [Team Up][a-team])

## The other compositions depend on scope and side effects

**Explain is coherent, but its name and adoption remain proposals.** Select mechanics through How, historical rationale through Why, or paced code understanding through Pstack Teach. Resolve Teach's narrow-Why instruction against Why's broad coverage with an explicitly bounded investigation and coverage statement; uncertainty survives prose cleanup. Matt Teach remains a durable course workflow with quizzes/assets. One wider learning router is defensible if users want that front door, but it must select conversation versus workspace before file creation. Retain templates, epistemics and Unslop closure under either topology. ([Why][p-why], [Pstack Teach][p-teach], [Matt Teach][m-teach])

Design-first Implement selects Architect only when requested or deliberately chosen for uncertain shape. Architect owns competing usage/type sketches; TDD owns behavior proof; Source-Driven owns version-sensitive facts. Explicit checkpoints and approved seams remain authoritative, without duplicate confirmation. Pstack's cheap-test escape cannot silently downgrade an agreed integration seam. Sketch/stub breakage and red/green proof need distinct phase boundaries. Arena/Swarm beneath Team Up similarly add optional aggregation methods; reading selection policy must never recursively launch orchestration. ([Architect][p-architect], [TDD ruling][a-tdd], [Team Up][a-team])

Human Writing should load technical documentation guidance conditionally and select **one** anti-pattern source. Truth, genre, uncertainty and domain names outrank catalog bans; Writing for Agents retains instruction authoring. Tracking's opted-in audit attachment must specify TSV ownership, transcript/diversity fallback and whether upstream's every-reply Attention footer survives or is deliberately adapted. Proposed Retro Diagnose remains advisory; Enforce selects Correct only with authorized repair scope and past-mistake proof. Automate Me additionally needs approval of inferred durable preferences and host-aware transcript/delivery rules. None adds a mandatory acceptance checkpoint. ([Human Writing][a-humans], [audit][p-work], [Retro][m-retro], [Correct][p-correct], [personalization][p-automate])

## Keep all 24 principles available contextually

Group the leaves by use, retain their identities and load only the applicable dependency closure. Consumer rulings resolve conflicts; no new public principles composition is needed. ([Loading index][p-principles])

| Context | Complete grouped coverage (`principle-` prefix omitted) |
|---|---|
| Design and reader experience | exhaust-the-design-space; experience-first; foundational-thinking; laziness-protocol; minimize-reader-load; model-the-domain; redesign-from-first-principles; subtract-before-you-add |
| Boundaries and state | boundary-discipline; type-system-discipline; make-operations-idempotent; separate-before-serializing-shared-state |
| Evidence and diagnosis | explain-the-number; fix-root-causes; prove-it-works; test-behavior-not-implementation; attack-the-premise |
| Durable execution | build-the-lever; encode-lessons-in-structure; sequence-verifiable-units; outcome-oriented-execution |
| Scope and capacity | guard-the-context-window; migrate-callers-then-delete-legacy-apis; never-block-on-the-human |

Preserve retained baselines and external compatibility; distinguish planned intermediate breakage from completed units; do not import Poteto's broader autonomy. Carry required references, handle cycles once and make distributions complete without AFK. Pstack's declared MIT mirror is modified, not verified byte-equal Cursor; retain notices/pins/patches. Bro's separate redistribution permission remains unverified despite byte-identical installed/source commands. ([Mirror][mirror], [license][p-license], [Bro tree][b-tree])

The next step is to author these routing/authority/output rulings as reviewable package proposals, then implement the selected topology. Validate representative requests and one Create→Run→Maintain/performance bridge without turning trials into new user-approval gates. No model-quality, discoverability, cost or integration trial was run here. This report changes the recommendation's balance; it does not claim the preferred compositions already exist or work.

[a-maintenance]: /Users/leonardo/Codes/projects/logbook-atlas/docs/authoring/source-composition.md
[a-review]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-review/SKILL.md
[a-implement]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-implement/SKILL.md
[a-verify]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/SKILL.md
[a-tracking]: /Users/leonardo/Codes/projects/logbook-atlas/skills/tracking-implementation/SKILL.md
[pe-verify]: https://github.com/backnotprop/product-engineering/blob/0642a58496d4dfa1de9688a82c29dfa34d24370a/skills/pe-verify/SKILL.md
[p-create]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/create-verification-skill/SKILL.md
[p-maintain]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/maintain-verification-skill/SKILL.md
[p-benchmark]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/benchmark-checklist/SKILL.md
[p-interrogate]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/interrogate/SKILL.md
[a-code]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-review/references/code/code-review.md
[p-blast]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/blast-radius/SKILL.md
[p-tdd]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/tdd/SKILL.md
[m-tdd]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/tdd/SKILL.md
[a-tdd]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-implement/references/tdd/tdd.md
[p-ts]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/typescript-best-practices/SKILL.md
[p-patterns]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/typescript-best-practices/references/patterns.md
[p-how]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/how/SKILL.md
[p-why]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/why/SKILL.md
[p-teach]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/teach/SKILL.md
[m-teach]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/productivity/teach/SKILL.md
[p-architect]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/architect/SKILL.md
[p-arena]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/arena/SKILL.md
[p-swarm]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/swarm/SKILL.md
[p-technical]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/technical-writing/SKILL.md
[a-humans]: /Users/leonardo/Codes/projects/logbook-atlas/skills/writing-for-humans/SKILL.md
[p-unslop]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/unslop/SKILL.md
[stop-slop]: https://github.com/hardikpandya/stop-slop/blob/8da1f030185bdfe8471220585162991eaeb970e9/SKILL.md
[p-work]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/show-me-your-work/SKILL.md
[show-me]: https://github.com/humanlayer/skills/blob/ca7c8088db69e315a8b2deea43820270457f8f3c/plugins/show-me/skills/show-me/SKILL.md
[p-correct]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/correct/SKILL.md
[m-retro]: https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/skills/engineering/retro/SKILL.md
[p-comment-sicko]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/no-comments/references/comment-sicko.md
[a-simplify]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-simplify/references/simplification/code-simplification.md
[p-automate]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/automate-me/SKILL.md
[b-bro]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/bro/SKILL.md
[b-recap]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/recap/SKILL.md
[b-readback]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/readback/SKILL.md
[b-facts]: https://github.com/backnotprop/bro/blob/523ed36584ec877b975db8c418ef12d485235d0e/skills/facts/SKILL.md
[p-principles]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/poteto-mode/SKILL.md#L38-L79
[a-qa]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/references/qa-list.md
[a-schema]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/references/report-schema.md
[a-validator]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/scripts/validate_report_lib.py
[a-evidence]: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-verify/references/evidence.md
[p-lead]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/skills/interrogate/references/lead-judgment.md
[a-team]: /Users/leonardo/Codes/projects/logbook-atlas/skills/team-up/SKILL.md
[mirror]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/MIRROR.md
[p-license]: https://github.com/backnotprop/pstack/blob/1f0f9c3bac03c4297f6fc8f7644fa412eda57085/LICENSE
[b-tree]: https://github.com/backnotprop/bro/tree/523ed36584ec877b975db8c418ef12d485235d0e
