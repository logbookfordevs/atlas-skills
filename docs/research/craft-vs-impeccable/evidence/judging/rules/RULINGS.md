# Unblinded rule rulings

These rulings explain the existing blind results; they do not re-score them. Blind map verified: landing X=Craft/Y=impeccable; app X=impeccable/Y=Craft. Skill paths below are relative to the Atlas repo for `skills/...`, and to `/Users/leonardo/.claude/skills/impeccable/` for `reference/...` and bare `SKILL.md`. Benchmark evidence paths are relative to the arena root.

## Aggregation and evidence limits

Use a judge agreement as given; on disagreement prefer G’s concrete source/screenshot evidence. `G-only` means the chosen result matches G, including a tie against M’s named winner; it does not pretend the judges agreed. `split` would mean no defensible selection; none is needed here. Both surfaces have equal weight: one win plus one tie wins combined; opposing surface wins cancel; two ties tie. No averaging raw scores, no invented tie-breaker from rule depth, and no direction-round bonus in the refinement totals.

M marks every plant fixed in both surfaces, even while calling Craft’s app retry broken and reduced-motion spinner problematic. G supplies more discriminating partial coverage and specific evidence, including mobile control names, field boundaries and assistive comparison meaning. Prefer G on those disputes; still retain both judges’ agreed results. M’s landing fine-pointer hover criticism is not a Craft violation: atlas-motion explicitly requires gating (`skills/atlas-motion/references/animate/animate.md:154`). Retained `animation-fill-mode:both` objects are not by themselves proof of continuous visual animation, and filter animation is not automatically compositor-fast; neither inference is needed to retain the motion result.

Rule statements below were checked in actual line-numbered source, using the auditor inventories only as an index. Contestant logs are self-reports, not execution traces. Existing blind defects are attributed to the judges rather than independently re-tested; direction source and supplied screenshots/metrics were inspected, and Craft’s seed equality was checked with `cmp`. No fresh browser or screen-reader pass was performed. Instruction-depth scores use 0=absent, 1=mention, 2=brief guidance, 3=usable method, 4=detailed multi-case method, 5=extensive operational treatment; they judge instructions independently of outputs, not which contestant happened to load every reference.

## Combined results

| Pillar | Landing | App | Combined | Confidence | Instruction depth Craft / imp |
|---|---|---|---|---|---|
| color | tie (G-only) | tie (G-only) | **tie** | medium | 5 / 4 |
| typography | tie (G-only) | tie (G-only) | **tie** | medium | 5 / 4 |
| layout | imp (both) | craft (G-only) | **tie** | low | 4 / 4 |
| accessibility | tie (both) | craft (G-only) | **craft** | medium | 5 / 4 |
| states | imp (both) | imp (both) | **imp** | high | 4 / 5 |
| copy | tie (G-only) | tie (both) | **tie** | medium | 5 / 4 |
| motion | imp (both) | imp (G-only) | **imp** | medium | 5 / 4 |
| ux | imp (both) | tie (G-only) | **imp** | medium | 3 / 5 |

## Color

G finds both landing palettes and text contrast restored, while M awards impeccable atmospheric light-spill credit; G also identifies impeccable’s static brass numeral (landing verdict G:13,29). On the app G measures both text palettes as compliant and Craft’s stronger input boundary, whereas M again favors impeccable’s light spill (app verdict G:26–28). Both instruction sets explicitly require measured contrast and semantic roles, so retain G’s ties rather than convert atmosphere into a new score.

**Team Craft verified rules:**

- Reuse project tokens and notation. `skills/atlas-craft/references/color/index.md:19` — **helped**.
- Measure the actual rendered foreground/background pair; change only when asked. `skills/atlas-craft/references/color/index.md:55` — **helped**.
- Input boundaries need 3:1 non-text contrast. `skills/atlas-craft/references/ui/index.md:33` — **helped**.
**Impeccable verified rules:**

- Use semantic tokens and verify text, control and focus contrast in every state. `reference/polish.md:66` — **helped**.
- Color needs a stable role or world-specific atmospheric purpose. `reference/colorize.md:69` — **helped**.

**Instruction depth:** Craft is deeper on numeric ramps, semantic token grammar and measured-pair discipline; impeccable adds stronger atmosphere and page-scale color strategy.

**Attribution / variance:** The shared identity supplied the palette; differences in light spill and input boundaries plausibly reflect execution and emphasis rather than missing contrast instructions.

## Typography

G calls both surfaces ties: both restore Geist roles, hierarchy and readable wrapping, with Craft’s app counts and file paths slightly better handled (landing verdict G:14; app verdict G:30–32). M favors impeccable on both surfaces, citing landing fact spacing and app casing, but its app claim of rigorous mono use conflicts with G’s specific sans counts/durations citations. Craft’s measured type rules and impeccable’s typeset guidance both cover the deciding mechanics; no blind winner survives the required margin under G.

**Team Craft verified rules:**

- Load every face and weight the design uses. `skills/atlas-craft/references/type/index.md:29` — **helped**.
- Pair each type role’s size, line-height and weight. `skills/atlas-craft/references/type/index.md:39` — **helped**.
- Balance headings, pretty-wrap prose and break escaping IDs. `skills/atlas-craft/references/type/index.md:65` — **helped**.
**Impeccable verified rules:**

- Run real copy at every breakpoint; maintain clear scale, weight and measure. `reference/craft-floor.md:12` — **helped**.
- Use numeric, tabular, code and label features when content benefits. `reference/typeset.md:51` — **helped**.

**Instruction depth:** Craft has more explicit rendering, loading, punctuation, OpenType and input recipes; impeccable is deeper in assessing expressive role contrast and delivery as a whole.

**Attribution / variance:** Both provide adequate instructions; small wrapping, casing and role differences are more plausibly single-run execution than a demonstrated instructional advantage.

## Layout

Both judges favor impeccable’s landing composition; G specifically cites captioned samples in the first viewport and exposed mobile navigation (landing verdict G:15). App judges split: G favors Craft’s compact four-file list, current-room navigation and stacked mobile form, while M prefers impeccable’s featured render and compact band (app verdict G:34–36; M:65–68). Retain G’s source-supported app result, making equal-weight surface wins cancel.

**Team Craft verified rules:**

- Important content sits near the top; identifying content leads metadata/actions. `skills/atlas-craft/references/layout/index.md:35` — **helped**.
- Keep expanded structure until content stops fitting, then collapse. `skills/atlas-craft/references/layout/index.md:63` — **helped**.
- Hidden content needs a visible cue. `skills/atlas-craft/references/layout/index.md:43` — **helped**.
**Impeccable verified rules:**

- Reject identical icon-heading-text cards as page structure. `reference/craft-floor.md:25` — **helped**.
- Verify every supported viewport. `reference/polish.md:62` — **helped**.
- Make responsiveness structural. `reference/operate.md:28` — **helped**.

**Instruction depth:** Craft is deeper on alignment, grouping, overflow and adaptation mechanics; impeccable is deeper on page composition, hierarchy and refusing generic scaffolds.

**Attribution / variance:** The landing scaffold difference fits impeccable’s explicit refusal rule; the app reversal exposes a composition-versus-scanability trade-off and substantial single-run variance.

## Accessibility

Both judges tie landing accessibility; G records clipped Craft nav focus and impeccable’s hidden comparison polarity, despite zero supplied axe violations (landing verdict G:16,46–53). On the app G favors Craft for preserved mobile names, a stronger field boundary, skip link, native modal and loading announcement; M’s generic tie misses named mobile controls disappearing with display:none (app verdict G:38–40,85–86). Craft’s detailed name, contrast and focus rules map directly to its app advantage, though impeccable also explicitly requires those checks.

**Team Craft verified rules:**

- Icon-only controls need descriptive names retaining visible text. `skills/atlas-craft/references/accessibility/index.md:69` — **helped**.
- Prefer native dialog, move focus inside and restore the trigger. `skills/atlas-craft/references/accessibility/index.md:45` — **helped**.
- UI boundaries require 3:1. `skills/atlas-craft/references/accessibility/index.md:81` — **helped**.
**Impeccable verified rules:**

- Preserve visible focus, logical tab order, labels and appropriate targets. `reference/polish.md:74` — **helped**.
- Check screen-reader names, focus and semantics. `reference/polish.md:91` — **helped**.
- Icon-only controls need accessible names. `reference/clarify.md:65` — **helped**.

**Instruction depth:** Craft gives more implementation-level rules for names, focus, live regions, native semantics and exact WCAG distinctions; impeccable has broad audit and hardening coverage but less detail in its main polish route.

**Attribution / variance:** Craft’s depth is consistent with its app success, but impeccable’s missing names violate rules it already has, so this remains partly execution variance.

## States

Both judges favor impeccable on both surfaces: landing has more visible clipboard status and intact focus, and app retry settles back to an error rather than remaining in loading (landing verdict G:17; app verdict G:42–44). Craft has a stronger native delete modal but its recovery deadlock, fixed four-render deletion count and incomplete loading geometry outweigh that local strength. Impeccable’s whole-path triage and connected recovery rule directly describe the advantage; Craft also forbids polishing over broken interactions, so the failure is not licensed by its rules.

**Team Craft verified rules:**

- Polish applies after interaction is sound and never outranks a broken interaction. `skills/atlas-craft/references/ui/index.md:13` — **helped**.
- Inspect every defined state and disclose unrun checks. `skills/atlas-craft/references/ui/index.md:74` — **helped**.
- Confirmation names consequence and counts where applicable. `skills/atlas-craft/references/copy/index.md:97` — **helped**.
**Impeccable verified rules:**

- Fix blocked tasks and misleading state before missing states and visual polish. `reference/polish.md:41` — **helped**.
- Arrival, transition, empty and recovery paths must connect. `reference/polish.md:55` — **helped**.
- Every control needs appropriate state behavior. `reference/polish.md:73` — **helped**.

**Instruction depth:** Craft is detailed on surfaces and the explicitly requested state workbench; impeccable more deeply integrates product-state lifecycles, recovery, triage and resilience across a complete path.

**Attribution / variance:** The repeated win fits impeccable’s whole-path emphasis, but Craft’s retry deadlock is an execution failure despite applicable recovery and verification rules.

## Copy

G ties landing copy and both judges tie app copy: both replace false AI/pipeline claims with documented code-rendering and agent-ask facts (landing verdict G:18; app verdict G:46–48). M’s landing preference for impeccable’s dry humor is a voice judgment, not evidence Craft lacks writing instructions: Craft’s Copy mode IS upstream better-writing, verified in SOURCE-MANIFEST.json:442–469 and the copy entry’s name. Both prescribe product vocabulary, action-specific labels and recovery; both app outputs still claim saves/deletions without persistence, so this outcome does not establish a meaningful instruction difference.

**Team Craft verified rules:**

- A deliberate brand voice is not a defect; taste alone is not a finding. `skills/atlas-craft/references/copy/index.md:13` — **helped**.
- Keep the product’s existing voice and vocabulary. `skills/atlas-craft/references/copy/index.md:29` — **helped**.
- Buttons name actions and links name destinations. `skills/atlas-craft/references/copy/index.md:58` — **helped**.
- Check labels against actual invoked actions. `skills/atlas-craft/references/copy/index.md:145` — **helped**.
**Impeccable verified rules:**

- Preserve factual meaning, terminology and brand voice. `reference/clarify.md:3` — **helped**.
- Action labels describe the actual outcome. `reference/clarify.md:35` — **helped**.
- Success confirms a completed outcome. `reference/clarify.md:61` — **helped**.

**Instruction depth:** Craft’s better-writing is a full interface-copy method with inventory, voice, terminology, localization, confirmation and reporting detail; impeccable’s clarify is similarly capable but more compact.

**Attribution / variance:** The common factual recovery and blind ties support execution/voice variance, not a claim that one contestant had a writing skill and the other did not.

## Motion

Both judges favor impeccable landing motion; G cites Craft’s 500ms stagger and press scale under reduced motion versus impeccable’s restrained light/fades (landing verdict G:19,39). G favors impeccable app motion because its reduced-motion path stops skeleton sweeps and supplies continuity, while Craft’s spinner continues and views swap instantly; M calls that app margin a tie (app verdict G:50–52). Crucially, Craft explicitly keeps loading spinners under reduced motion and brief functional press feedback, so these are partly instruction-policy differences, not proof the contestant ignored atlas-motion; M’s retained fill-mode animation count is also not proof of perpetual visual movement.

**Team Craft verified rules:**

- Gate motion by frequency and named purpose. `skills/atlas-motion/references/animate/animate.md:34` — **helped**.
- Reduced motion keeps opacity/color and removes movement. `skills/atlas-motion/references/animate/animate.md:164` — **helped**.
- Reduced-motion guidance explicitly keeps loading spinners and brief functional press feedback. `skills/atlas-craft/references/accessibility/motion-and-zoom.md:32` — **hurt**.
- Bundled UI fallback keeps opacity and gates movement, scale and blur. `skills/atlas-craft/references/ui/animations.md:155` — **helped**.
- Shared Animate owner overrides UI recipe presets. `skills/atlas-craft/references/motion-ownership.md:7` — **helped**.
**Impeccable verified rules:**

- A generic fade-and-rise is not a product-specific motion thesis. `reference/animate.md:34` — **helped**.
- Every animation needs an intentional reduced-motion path. `reference/animate.md:77` — **helped**.
- One authored moment from an already-visible default. `reference/craft-floor.md:13` — **helped**.
- Do not add animation just to make polish visible. `reference/polish.md:75` — **helped**.

**Instruction depth:** Team Craft means atlas-motion plus bundled Craft refs: it is deeper on frequency gates, timing, interruption, gesture physics and performance; impeccable is more flexible and explicit on authored material and continuity.

**Attribution / variance:** Impeccable’s landing advantage fits its product-specific thesis; the app spinner difference is partly traceable to Craft’s permissive exception, while choreography choices remain single-run execution.

## Ux

Both judges favor impeccable landing UX: captioned work appears earlier and the command action is literal, whereas Craft’s Start the Desk only scrolls (landing verdict G:20). G ties the app: impeccable leads with the latest render and Craft keeps scanability, current-room navigation and a general ask action, each with material defects (app verdict G:54–56). Impeccable explicitly distinguishes Persuade from Operate and requires a working opening action; Craft preserves identity and prioritizes content but has no comparable end-to-end direction method.

**Team Craft verified rules:**

- Preserve accepted identity; a new direction needs its own decision. `skills/atlas-craft/SKILL.md:23` — **helped**.
- Give each view one primary action. `skills/atlas-craft/references/layout/index.md:39` — **helped**.
- Put important content near the top. `skills/atlas-craft/references/layout/index.md:35` — **helped**.
**Impeccable verified rules:**

- Persuade opening makes the offer clear, shows a working action and product-specific proof. `reference/mode-persuade.md:9` — **helped**.
- Operate prioritizes task scanability and consistency. `SKILL.md:37` — **helped**.
- Make primary task and current state obvious. `reference/polish.md:54` — **helped**.

**Instruction depth:** Craft gives strong local refinement and identity boundaries; impeccable is substantially deeper on surface purpose, product truth, concept generation, visitor path, direction contracts and finishing.

**Attribution / variance:** The landing win is plausibly instruction-led through Persuade’s real-action requirement, but the app tie prevents generalizing this run into universal UX superiority.

## Scope refusals and routing relevant to the benchmark

These are limits, permissions and handoffs, not all literal contestant refusals. A route listed here is not automatically an obligation to run another skill. The benchmark’s non-interactive constraints override asking the user; record the substitution rather than penalizing the mere absence of a question. They do not prove that a script-based answer mechanism was mechanically unavailable.

- **craft:** New visual direction needs a separate decision; no direction-creation method is supplied. `skills/atlas-craft/SKILL.md:23`.
- **craft:** Whole-interface audits/change reviews route to Atlas Review; substantial prose routes to Writing for Humans. `skills/atlas-craft/SKILL.md:25`.
- **craft:** Domain handoffs do not require cross-discipline orchestration for ordinary refinement. `skills/atlas-craft/references/ownership.md:5`.
- **craft:** States creates a workbench only on explicit request; ordinary state polish does not authorize rebuilding the Bench or removing it. `skills/atlas-craft/SKILL.md:21`.
- **craft:** Contrast or palette changes require authorization; the refinement briefs already authorize these fixes. `skills/atlas-craft/references/color/index.md:55`.
- **craft:** Do not introduce a new face unless asked for a type change. `skills/atlas-craft/references/type/index.md:19`.
- **craft:** Ask between the two visually different iOS 16px input fixes; app contestant chose sizing up under non-interactive constraints. `skills/atlas-craft/references/type/index.md:96`.
- **craft:** Reject animation failing frequency or purpose gates; this is a successful refusal, not a missing effect. `skills/atlas-motion/references/animate/animate.md:45`.
- **craft:** Motion Opportunities is read-only, Performance diagnoses first, audits/reviews route to Atlas Review; React Native/Expo is excluded. `skills/atlas-motion/SKILL.md:18`.
- **imp:** Refinement preserves identity/behavior; redesign replaces the world but preserves product truth. `SKILL.md:28`.
- **imp:** Ask before replacing factual copy or adding claims; supplied refinement facts and non-interactive constraints explain the disclosed substitutions. `SKILL.md:28`.
- **imp:** Polish must not conceal redesign; if the concept is wrong route to redesign or bolder. `reference/polish.md:3`.
- **imp:** Audit reports and does not fix; web audit routes native platforms elsewhere. `reference/audit.md:1`.
- **imp:** A new identity found during colorizing or typesetting routes through new-work rather than local refinement. `reference/colorize.md:23`.
- **imp:** Missing PRODUCT blocks new/replacement work through init, but narrow existing refinements may proceed and offer init afterward. `SKILL.md:77`.
- **imp:** Local extensions inherit identity and need approval before durable DESIGN.md changes. `reference/new-work.md:33`.
- **imp:** Direction selection must run concept-seed and follow the decision-page answer/fallback contract; no silent skip. `reference/new-work.md:48`.
- **imp:** No image generation means code-led, not a refused build; code-led skips comp round by contract. `reference/new-work.md:55`.
- **imp:** Do not fabricate factual/commercial claims or unsupported capabilities. `reference/new-work.md:59`.
- **imp:** Do not repair context drift as a design-task side effect. `SKILL.md:88`.
- **imp:** Default scaffolds are refused; eyebrows are an absolute ban, while most other defaults can be earned by the brief. `reference/craft-floor.md:21`.

## Instruction adherence and self-report corrections

- **Craft app recovery: execution failure.** Its log verifies only that retry enters loading (`judging/rules/notes/craft-app-NOTES.md:197`), not that recovery finishes. G and M both identify the deadlock (`judging/app/verdict-app-G.md:93`; M:103). This fails the loaded rule that broken interaction outranks polish (`skills/atlas-craft/references/ui/index.md:13`) and label/action verification (`references/copy/index.md:145` under Craft). Hard-coded four-render deletion counts also fail consequence accuracy (`skills/atlas-craft/references/copy/index.md:97`). Neither the States workbench opt-in nor keeping Bench behavior excuses product retry failure.
- **Craft app spinner: not a clear instruction violation.** The contestant explicitly cites keeping spinners (`judging/rules/notes/craft-app-NOTES.md:163–164`), and the real reference does permit them under reduced motion (`skills/atlas-craft/references/accessibility/motion-and-zoom.md:32`). That exception conflicts in spirit with the broad motion opt-in rule and the pause rule in the same file (:7,38); report the tension instead of inventing a missing exception. Keep G’s existing output score unchanged.
- **Craft landing motion: mixed adherence, not a blanket failure.** The log names first-visit delight as the gate for a repeat-on-load hero entrance (`craft-landing-NOTES.md:109`) without showing a first-visit guard; the justification is weak, not proof that 500ms marketing motion is banned (atlas-motion animate.md:125 permits longer marketing motion). A brief press scale is expressly allowed by the accessibility table (:34), although the broader accessibility entry prefers replacing scales (:87). The 500ms reduced-motion fade exceeds Animate’s illustrative 200ms fade but is not an explicit universal fade-duration ban. Fine-pointer hover gating is compliant. The clipped nav focus remains an output defect against Craft’s visible-focus obligation.
- **Copy is better-writing.** Verified provenance is `skills/atlas-craft/SOURCE-MANIFEST.json:442–469`, mapping upstream `skills/better-writing/SKILL.md` to `references/copy/index.md`, with integration patches. The entry still names itself `better-writing` (:2). Do not attribute the copy tie or M’s humor preference to Craft lacking writing guidance; its explicit brand-voice exception (:13) allows the studio’s existing dry humor.
- **Both app outputs: misleading success claims.** G documents no persistence despite “Saved”/deletion claims (`judging/app/verdict-app-G.md:87,96`); Craft additionally claims Finder opened. These fail Craft’s misleading-copy/actual-action checks (`skills/atlas-craft/references/copy/index.md:143–145`) and impeccable’s success-completed-outcome rule (`reference/clarify.md:61`) plus misleading-state triage (`reference/polish.md:41`). The static-file brief limits capability but does not make an unlabelled simulated success truthful.
- **Impeccable app accessible names: violation of loaded instructions.** Its log says it labels icon-only controls, but only Settings is named there (`imp-app-NOTES.md:53`). G shows Jump to/Tablet names disappear at mobile widths (`judging/app/verdict-app-G.md:85`), contradicting `reference/clarify.md:65` and `reference/polish.md:74,91`. Input contrast and mono-role omissions likewise show incomplete execution, not absent rules. Fifteen indefinite skeleton sweeps are questionable restraint under `reference/operate.md:42`; they are functional loading motion, so do not call all of them unambiguously forbidden decoration.
- **Impeccable landing ledger: violation of preserved meaning.** Hiding “This is not” polarity from assistive technology (`judging/landing/verdict-landing-G.md:53`) fails `reference/clarify.md:76` and `reference/polish.md:91`. The permanent brass final step is a minor project identity deviation despite NOTES calling it an actual waiting state (:27); a described pipeline step is not a live pending approval.
- **Refinement scope changes: disclosed tensions.** Both landing contestants remove a fake signup and replace contradictory AI claims using supplied product facts; both explicitly log the unanswered questions. The brief authorizes copy fixes and forbids interaction, so this is not a clear unauthorized-copy violation. Impeccable’s ask-before-factual-copy rule still matters, but no invented claims were needed. Craft removes Settings (`craft-app-NOTES.md:183`), whereas impeccable keeps it to preserve behavior (`imp-app-NOTES.md:91`); the Craft removal is a real scope risk, justified only by its reading of PRODUCT rather than a direct requirement. Impeccable’s large latest-render treatment is a refinement boundary trade-off, not a conclusively forbidden redesign: the identity and documented product job remain.
- **Verification gaps are not passes.** Both contestants explicitly disclose missing screen-reader, zoom and reduced-motion runtime checks; this satisfies reporting obligations but leaves those behaviors unverified by contestants. Do not transform broad NOTES claims into actual all-state or physical-device coverage. No evidence warrants claiming all skill rules were obeyed, or enumerating every possible violation beyond these inspected material issues.

## Direction round

### craft

**behavior:** Declined new-direction construction, also declined an unwanted tidy-up, and left index.html byte-identical to seeds/landing.orig/index.html (cmp verified). The supplied 390px metrics retain 1180px scroll width and the original accessibility/motion defects.

**contractAdherence:** Consistent with its narrow refinement contract and absence of a direction-selection method. SKILL.md:23 reserves a separate direction decision; it does not literally say never redesign or refuse a user who has already requested one, so the all-stop is a conservative benchmark interpretation reinforced by the ban on substituting general design knowledge, not a universal hard prohibition. Notes cite stale line 22; current verified line is 23.

Evidence: `skills/atlas-craft/SKILL.md:3`, `skills/atlas-craft/SKILL.md:23`, `skills/atlas-craft/references/ownership.md:7`, `judging/rules/notes/craft-direction-NOTES.md:25`, `judging/rules/notes/craft-direction-NOTES.md:31`, `shots/craft-direction/metrics.jsonl:2`.

### imp

**behavior:** Built a replacement Three-Drum Riso Zine: full blue opening, pink/yellow ink vocabulary, Bricolage display, misregistration, textured floods, live deterministic canvas, Play/Pause, frame scrubber and drum toggles. Added inferred PRODUCT.md, six-block surface contract, token-bearing landing DESIGN.md and JSON sidecar.

**quality:** Clear direction capability win: supplied desktop/mobile views show a distinctive, legible code-rendering demonstration and a visible command action. Source verifies multiply compositing, seeded dropout, frame controls, paused reduced-motion default and offscreen/hidden drawing guard; supplied metrics have no page overflow at 1440/390 and zero axe findings. This is screenshot/source judgment, not fresh runtime interaction or a claim of production readiness.

**contractAdherence:** Substantially follows replacement-world, concept seed, contract and documentation instructions, but not fully: NOTES:54 says decision wait exited 3 and the build proceeded, whereas new-work.md:51 requires repeating exit 3 and reserves the unanswered fallback for exit 4. NOTES:25–27 describe inferred PRODUCT.md before the later decision-page attempt; init.md:31 requires probing an available decision page before inference. Review remains self-reported fix with one partial item, honestly disclosed rather than passed; scoped landing documentation preserves the Desk’s separate root system.

**risks:** The supplied full-page screenshot still shows paper in the intended yellow creations and pink Desk regions, consistent with the reported open print-in issue; source’s awaiting cover depends on IntersectionObserver firing. Product audience and CTA remain inferred; pnpm desk:start precedes prerequisites. Clipboard failure only says Press ⌘C and has no live status region; the reduced-motion preference is read at startup rather than updated. A conventional copy-left/canvas-right hero limits how radical the composition is, even though the material and live mechanism are specific.

Evidence: `reference/new-work.md:11`, `reference/new-work.md:48`, `reference/new-work.md:51`, `reference/init.md:31`, `reference/new-work.md:75`, `reference/new-work.md:126`, `reference/new-work.md:146`, `runs/imp-direction/PRODUCT.md:5`, `runs/imp-direction/.impeccable/surfaces/index-html.md:17`, `runs/imp-direction/index.html:760`, `runs/imp-direction/index.html:798`, `runs/imp-direction/index.html:838`, `runs/imp-direction/index.html:852`, `judging/rules/notes/imp-direction-NOTES.md:117`, `shots/imp-direction/metrics.jsonl:1`.

### Additional process rulings

Impeccable’s NOTES are not fully vindicated by the rules. The exit-3 fallback claim is specifically wrong: the file says repeat on 3, then allows an unanswered fallback on 4 (`reference/new-work.md:51` versus `imp-direction-NOTES.md:54`). Its init inference also precedes probing the decision page despite that mechanism later working; `reference/init.md:31` explicitly treats a decision page as an answer mechanism. These are source-verified contradictions to its reported procedure; no shell trace proves an unreported timeout or different exit, so do not silently upgrade them to compliant fallback.

The reported final `fix` with one partial print-in item is the correct disposition to retain (`imp-direction-NOTES.md:117–122`; `reference/new-work.md:146,150`). The two-round unattended cap explains stopping, not a clean pass. Focus and print changes after capture leave a final evidence gap. Supplied full-page shots show the missing flood colors; source confirms a paper cover that waits on intersection. This is a material limit on the otherwise successful direction, not a reason to treat the untouched seed as comparable design quality.

Leaving root Desk DESIGN.md untouched and writing scoped landing docs is defensible scope preservation despite SKILL.md’s broad “replace DESIGN.md” wording: init preserves existing context, and the build created a separate surface world. Both token-bearing DESIGN.md and a JSON sidecar exist in `.impeccable/landing/`; their location differs from the default root `.impeccable/design.json`, so discovery by future tooling is unverified. Google Fonts, the 8.5rem title and tighter tracking are disclosed exceptions: the benchmark allows Google Fonts, and `reference/craft-floor.md:3` permits the committed world to override non-ban floor values. They are not clear hard-ban violations. Code-led work legitimately has no comp when image generation is unavailable (`reference/new-work.md:55,91`); its split hero is a compositional limitation, not a failed comp-fidelity gate that never applied.

**Fair direction verdict:** Impeccable wins direction task completion and demonstrated direction quality; Craft is out of scope / no submission, not a poor redesign. For an end-to-end direction-capability score count Craft as unfulfilled (zero completion), while any quality-only comparison marks Craft N/A and reports impeccable alone; report Craft’s scope adherence separately. Do not average this asymmetric scope test into the eight refinement pillars or excuse impeccable’s process deviations and open fix disposition.

## Overall

On equal-weight refinement surfaces, color, typography, layout and copy tie; Craft wins accessibility, and impeccable wins states, motion and UX. G is preferred on disagreements because its evidence is more discriminating, while M marks every plant fixed and sometimes contradicts its own defects. Craft’s deeper mechanical instructions do not guarantee cleaner execution, and its Copy mode is better-writing. Impeccable alone demonstrates replacement-direction capability, with an open fix disposition and documented process deviations. These single runs establish observed outcomes and plausible rule links, not causal proof or a population-level ranking.
