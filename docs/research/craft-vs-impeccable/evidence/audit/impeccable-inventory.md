# impeccable rule inventory (v4.8.0)

Shards: I1 (GPT-6.1 Terra high), I2 & I3 (Claude Sonnet 5.5). All report complete reads.

---
<!-- shard imp-I1.md -->
# Impeccable shard I1

## Ledger

Counts are logical lines; SKILL.md has 87 newline characters and 88 numbered lines (no final newline).

- SKILL.md — 88 lines; read lines 1–88 (complete). Entry, setup, mode and command routing.
- reference/craft-floor.md — 44 lines; read lines 1–44 (complete). Mechanical floor and default-pattern refusals.
- reference/new-work.md — 154 lines; read lines 1–154 (complete). Direction, build, review and documentation workflow.
- reference/shape.md — 59 lines; read lines 1–59 (complete). Discovery and confirmed design brief.
- reference/routing.md — 24 lines; read lines 1–24 (complete). Context-aware command selection.
- reference/craft.md — 5 lines; read lines 1–5 (complete). Deprecated alias.
- reference/operate.md — 61 lines; read lines 1–61 (complete). Product UI and reading guidance.
- reference/mode-operate.md — 21 lines; read lines 1–21 (complete). Working-screen direction and comps.
- reference/mode-persuade.md — 19 lines; read lines 1–19 (complete). Marketing/showcase direction and comps.
- reference/mode-read.md — 21 lines; read lines 1–21 (complete). Reading-surface direction and comps.
- reference/init.md — 131 lines; read lines 1–131 (complete). Product truth interview and setup.
- scripts/command-metadata.json — 98 lines; read lines 1–98 (complete). Command descriptions and triggers.
- scripts/VERSION — 1 line; read line 1 (complete). Binary version 0.1.18.

## Rules by pillar

### Color
- Body and placeholder contrast at least 4.5:1; large text at least 3:1. reference/craft-floor.md:9
- On colored surfaces tint secondary text from the surface hue or foreground, never gray. reference/craft-floor.md:9
- Choose restrained, committed (one saturated color covers 30–60%), full palette (3–4 roles), or drenched strategy before choosing colors. reference/new-work.md:65
- Select light or dark from the user's physical scene and ambient light, not category. reference/new-work.md:65
- In product UI standardize semantic state colors and reserve accent for primary actions, selection and state indicators. reference/operate.md:22
- On Operate screens use palette for shell, state, data series and selection; one gray screen with an accent is not the intended result. reference/mode-operate.md:7

### Typography
- Set body prose to 65–75ch, display to at most 6rem and tracking no tighter than -0.04em; test actual copy at each breakpoint. reference/craft-floor.md:12
- Product interfaces typically use a fixed rem scale with ratio 1.125–1.2, rather than fluid headings. reference/operate.md:14
- Product tables may be 120ch or wider; prose still needs a readable measure. reference/operate.md:16
- Read-mode web comps use about 60–75 characters per line and body text near 16px. reference/mode-read.md:15
- Reserve monospace for code, parameters, data or small labels, not running text or default headings. reference/mode-read.md:15
- On own-world pages do not use a system display face as the display voice; source and self-host a fitting face. reference/craft-floor.md:39

### Layout and hierarchy
- Put more space above headings than below and separate groups more generously than items within groups. reference/craft-floor.md:11
- Do not use an eyebrow above a heading; this is an absolute ban even if a brief requests one. reference/craft-floor.md:27
- Avoid same-size icon-heading-text cards as page structure and never nest cards. reference/craft-floor.md:25
- Make product responsiveness structural, such as collapsing sidebars and adapting tables or columns. reference/operate.md:28
- Read surfaces keep a calm reading column and familiar reading order and navigation; the world owns the surrounding frame. reference/mode-read.md:7
- Preserve first-viewport composition across desktop widths 1280–1600; capture 1440px desktop and 390px mobile for comp-led gates. reference/new-work.md:118

### Accessibility
- Verify contrast at 4.5:1 for body and placeholder, 3:1 for large text. reference/craft-floor.md:9
- Check keyboard focus along with working controls and responsive composition. reference/craft-floor.md:14
- Preserve semantics and accessibility during implementation. reference/new-work.md:134
- Check reachable focus, error, empty and overlong states for overlap and clipping at target sizes. reference/new-work.md:138
- Read text must retain contrast against its ground and readable measure, without visual performance behind it. reference/mode-read.md:7

### States and polish
- Include hover, disabled, loading, error and empty states, real content and working controls. reference/craft-floor.md:14
- Interactive product components need default, hover, focus, active, disabled, loading and error states. reference/operate.md:32
- Use skeletons for content loading and empty states that teach the interface. reference/operate.md:34
- Let overlays escape clipping ancestors via dialog, popover, fixed positioning or a portal. reference/operate.md:37
- Theme selection, caret, scrollbars, focus rings, underline offset and tabular numerals to the palette. reference/craft-floor.md:15
- Inspect the actual interactive states and fix overlaps and clipping in batched render rounds. reference/new-work.md:138

### Copy
- Controls name their action; errors name both the problem and recovery. reference/craft-floor.md:16
- Ask before replacing factual copy or adding claims during refinement. SKILL.md:28
- Do not invent customers, prices, benchmarks, endpoints or capabilities; synthetic demonstrations must be labeled. reference/new-work.md:59
- Use real title, opening, section names and a representative difficult example in Read comps, not filler. reference/mode-read.md:17
- Persuade openings make the offer intelligible, show a working primary action and demonstrate product-specific proof. reference/mode-persuade.md:9

### Motion
- Author one orchestrated moment rather than identical entrances on every section; use exponential ease-out from an already-visible default. reference/craft-floor.md:13
- Keep costly effects bounded and content visible by default. reference/new-work.md:132
- Most product transitions should last 150–250ms. reference/operate.md:41
- Product motion communicates state, feedback, loading or reveal, not decoration. reference/operate.md:42
- Do not orchestrate product page-load sequences that delay the task. reference/operate.md:43

### UX and direction
- Select mode per surface: Persuade for decisions, Operate for tasks, Read for comprehension, Experience for the work itself. SKILL.md:36
- Inherit coherent existing identity; a missing DESIGN.md alone does not establish greenfield. reference/new-work.md:12
- Local additions inherit their surface's visual world; do not run an identity exercise for them. reference/new-work.md:16
- Operate worlds contribute type, palette, density and one signature move, while familiar platform navigation and controls remain. reference/mode-operate.md:7
- Experience surfaces put the work itself in the first viewport; Persuade surfaces put the actual category action there. reference/mode-persuade.md:9
- A first viewport should demonstrate the mechanism at meaningful scale rather than merely convey mood. reference/new-work.md:126

## Refusals, limits and routing

- Brief-pinned aesthetics win; refinement preserves identity and behavior, whereas redesign replaces the visual world while retaining product truth. SKILL.md:27
- Never use hate or militarist symbols as ornament; factual documentary content remains. SKILL.md:29
- No-argument invocation presents a context-aware menu and never automatically executes a command. SKILL.md:74; reference/routing.md:11
- Shape asks for explicit confirmation and stops without code or a direction contract. reference/shape.md:55
- Init asks about product truth, not aesthetics, and does not silently overwrite existing context. reference/init.md:15; reference/init.md:41
- Never repair stale context as a design-task side effect except a finding marked auto. SKILL.md:88
- Ask before durable DESIGN.md changes on local extensions. reference/new-work.md:33
- Do not fabricate commercial or factual claims. reference/new-work.md:59

## Process obligations

- Run context once per session, load the applicable playbook and inspect target and incumbent visual evidence; read craft-floor immediately before UI editing. SKILL.md:19
- On launcher failure send the specified separate notice before the next tool call and read existing context directly. SKILL.md:23
- Before implementation ask two or three relevant questions or compact confirmation, unless facts are settled; surface purpose still needs confirmation. reference/new-work.md:20
- For a new or replacement world run concept-seed before artifact code, present directions and obtain choice as specified. reference/new-work.md:48
- Record and re-read six direction-contract blocks and seed reference in the surface brief before building; keep contract out of browser-delivered artifacts. reference/new-work.md:75; reference/new-work.md:77; reference/new-work.md:87
- Comp-led work proceeds through measured spec, plates, hero, sections, motion and responsive gates; plates require user review before page code. reference/new-work.md:105; reference/new-work.md:113
- Batch screenshot inspection at shipped sizes and all reachable interactive states; fix, then confirm in one final round. reference/new-work.md:138
- Validate captures before handing them off; run detector once on changed web targets when hookless, skipping native. reference/new-work.md:140; reference/new-work.md:142
- Send the prescribed evidence to a fresh finish reviewer, act on its disposition, and document the shipped world afterward. reference/new-work.md:144; reference/new-work.md:146; reference/new-work.md:152
- Comp-led final disposition must be recorded; later edits invalidate the capture and require rechecking. reference/new-work.md:154

## Depth notes

- Color: concrete contrast, palette proportions and semantic use are specified; detailed color selection is contextual.
- Typography: numeric measures and product-mode scale are explicit; face selection is directed by mode and subject.
- Layout/hierarchy: strong mode distinctions and comp fidelity gates; fewer general-purpose grid dimensions.
- Accessibility: contrast and keyboard checks are explicit, but these files defer broader technical auditing to its command.
- States/polish: state inventories, overlays and rendered checks are substantial; detailed behavior depends on the task.
- Copy: action, recovery and factual integrity are clear; voice-specific writing guidance is limited.
- Motion: timing and purpose are explicit for Operate, while other modes emphasize authored orchestration.
- UX/direction: exceptionally deep on authority, mode, concept selection, comp-led execution and finish gates.

---
<!-- shard imp-I2.md -->
# Audit shard imp-I2 (impeccable/reference)

All paths relative to `/Users/leonardo/.claude/skills/impeccable/`. Files read with the Read tool (line-numbered); critique.md read in two reads (1-400, 401-819).

## 1. Ledger

| File | Lines | Read | Summary |
|---|---|---|---|
| reference/critique.md | 819 | lines 1-819 (complete) | Dual-assessment critique command: orchestration, report template, snapshot persistence, closing questions; inline cognitive-load checklist, Nielsen heuristic scoring, P0-P3, 5 personas. |
| reference/audit.md | 139 | lines 1-139 (complete) | Web technical audit: 5 dimensions scored 0-4 (a11y, perf, theming, responsive, implementation integrity), report format, no fixing. |
| reference/audit.native.md | 139 | lines 1-139 (complete) | Native (iOS/Android/adaptive) mirror of audit: VoiceOver/TalkBack, platform conformance, adaptivity. |
| reference/polish.md | 105 | lines 1-105 (complete) | Final-pass refinement: system establishment, triage order, whole-path polish, verification, closing critique snapshot. |
| reference/harden.md | 362 | lines 1-362 (complete) | Resilience: extreme inputs, i18n/RTL/Arabic-script, errors, empty/loading, interrupted gestures, validation, testing. |
| reference/onboard.md | 234 | lines 1-234 (complete) | Onboarding/first value: empty states, tooltips, tours (3-7 steps), tutorials, avoid list. |
| reference/clarify.md | 94 | lines 1-94 (complete) | UX copy rewriting by function (actions, forms, errors, loading/empty/success), localization, verification. |
| reference/distill.md | 111 | lines 1-111 (complete) | Strip to essence: IA, visual (1-2 colors, 3-4 sizes), layout, interaction, content, code simplification. |
| reference/quieter.md | 99 | lines 1-99 (complete) | Reduce intensity without going generic: color, weight, motion, composition. |
| reference/bolder.md | 33 | lines 1-33 (complete) | Scoped amplification of one existing section using the system's own vocabulary. |
| reference/delight.md | 70 | lines 1-70 (complete) | Earned, product-specific delight; protections; verification. |
| reference/overdrive.md | 127 | lines 1-127 (complete) | Ambitious technical effects; mandatory propose-before-build; progressive enhancement; perf rules. |
| reference/component-review.md | 63 | lines 1-63 (complete) | Comp-led build checkpoint: plate/plan review via component-review CLI, hero manifest, never self-approve. |

Links not followed (outside assignment): ios.md, android.md, animate.md, new-work.md (referenced at audit.native.md:3, delight.md:59, bolder.md:3).

## 2. Rules by pillar

### Color
- Reduce saturation toward 70-85% of current when quieting loud palettes. reference/quieter.md:52
- Neutrals dominate; color as accent ("10% rule"). reference/quieter.md:54
- Use warm/cool tinted grays, not pure gray. reference/quieter.md:56
- Never gray text on a colored background; use a darker shade of that color or transparency. reference/quieter.md:57
- Quiet does not mean grayscale: "Remove all color" is an avoid item. reference/quieter.md:85
- Distill palette: 1-2 colors plus neutrals, not 5-7. reference/distill.md:51
- Audit theming: flag hard-coded colors not using tokens, broken dark mode, wrong token types, values not updating on theme switch. reference/audit.md:38-42
- Audit native theming: raw hex instead of semantic system colors / Material roles; Dynamic Color (Android 12+) needs static fallback. reference/audit.native.md:36-38
- Polish: semantic tokens, stable color meanings across themes; verify text, control and focus contrast in every state. reference/polish.md:64-67
- Contrast thresholds: text < 4.5:1, large text < 3:1 (7:1 AAA) are flagged. reference/audit.md:14
- Meaning must not rely on color alone (red/green). reference/critique.md:725; reference/clarify.md:76
- Bolder: no new colors, fonts, radii, shadows or primitives the surface doesn't already own. reference/bolder.md:9, 29
- Quieter: "generic quiet" (gray text on white, one sans at uniform weight, identical card grid) is a failure. reference/quieter.md:33
- Reduce contrast extremes; high contrast only where it matters most. reference/quieter.md:19, 55

### Typography
- Distill: one font family, 3-4 sizes max, 2-3 weights. reference/distill.md:52
- Quieter: reduce weights (900->600, 700->500) and sizes where appropriate. reference/quieter.md:60
- Minimum readable size: 16px body on mobile; 14px only for secondary text; iOS Safari force-zooms focused inputs under 16px. reference/harden.md:81
- Use `clamp()` for fluid type; test zoom to 200%; containers must expand with text. reference/harden.md:80-83
- Polish: same-role typography consistent; test measure, wrapping, localization expansion, zoom, font loading. reference/polish.md:61
- Bolder: reuse the system's type scale at full strength; flat sections often opt out of display type. reference/bolder.md:13, 17
- Quieter: reduce scale jumps between sizes for calmer feel. reference/quieter.md:79
- Native: fixed point sizes defeating Dynamic Type, or px instead of sp, are defects. reference/audit.native.md:14
- Persian ZWNJ (U+200C) must be preserved; never normalize it away. reference/harden.md:113
- Treat Persian ی/ک and Arabic ي/ك as equivalent in search/validation while preserving the stored form. reference/harden.md:114
- Use `Intl.NumberFormat`/`Intl.DateTimeFormat` with locale for digits and calendars (fa-IR, ar-SA). reference/harden.md:115-129

### Layout / hierarchy
- Never nest cards inside cards; cards not needed for basic layout, use spacing/alignment. reference/distill.md:54-55
- One spacing scale; remove arbitrary gaps. reference/distill.md:56; reference/quieter.md:81
- Linear vertical flow over complex grids; remove sidebars where possible; pick left or center alignment and stay with it. reference/distill.md:60-62
- Hierarchy: ONE primary action, few secondary, rest tertiary/hidden. reference/distill.md:47, 70
- Never eliminate hierarchy; some things must stand out. reference/distill.md:91; reference/quieter.md:84-88
- Cognitive load: <=4 items per group; <=4 visible options per decision; 5-7 pushes boundary; 8+ overloaded. reference/critique.md:337-341, 351-356
- Nav menus <=5 top-level items; action buttons 1 primary + 1-2 secondary, rest in a menu; docs sidebars <=4 siblings per level. reference/critique.md:359-362
- Cognitive-load checklist is 8 items; 0-1 failures low, 2-3 moderate, 4+ critical. reference/critique.md:334-345
- Visual noise floor fix: one primary element, 2-3 secondary, everything else muted. reference/critique.md:385-387
- Polish: align to project grid/spacing scale, optical as well as mathematical alignment; group related tightly, separate groups generously. reference/polish.md:59-60
- Bolder: "skeleton test" - strip copy; structure must still say what the section is and why. reference/bolder.md:24
- Bolder: target should read as a peak in rhythm (density/pace shift), not just more of the same. reference/bolder.md:20
- Bolder: commit to one decisive move, then quiet the surroundings; if everything got louder the section got flatter. reference/bolder.md:19
- Harden: avoid fixed widths on text containers; `min-width:0` on flex/grid items; 30-40% space budget for translations. reference/harden.md:64-77, 88-91
- Use CSS logical properties for RTL (margin-inline-start etc.). reference/harden.md:101-110
- Audit responsive: fixed widths, horizontal scroll, text scaling, missing breakpoints. reference/audit.md:48-54
- Native: stretched phone layouts on tablets, insets (notch/Dynamic Island/home indicator/keyboard), foldables. reference/audit.native.md:47-48, 57-62

### Accessibility
- Touch targets: flag < 44x44px; WCAG 2.5.8 AA floor is 24x24 CSS px unless exception (spacing via 24px circle rule, equivalent control, inline text, UA styling, essential). reference/audit.md:50
- Native targets: 44 pt iOS / 48 dp Android. reference/audit.native.md:15
- Reduced motion needs an intentional alternative preserving state change/hierarchy; flag global `0.01ms` kill, flashing above threshold, motion that blocks focus/reading/tasks. reference/audit.md:15
- Native: Reduce Motion must give crossfade alternative to parallax/large slides. reference/audit.native.md:16
- Audit a11y checks: ARIA roles/labels/states, focus indicators, tab order, keyboard traps, heading hierarchy, landmarks, div-as-button, alt text, input labels, required indicators. reference/audit.md:16-20
- Custom sliders/drag surfaces: must work under touch, `touch-action` set, state cleared on cancel/lostcapture/blur; state evidence source (emulated vs synthesized vs physical). reference/audit.md:51
- Interrupted gestures: second pointer must not hijack drag; `pointercancel`, `lostpointercapture`, release outside, `blur` clear drag state and release capture; next gesture works without reload. reference/harden.md:227-230
- Add behavioral regression test per confirmed gesture fix when runner can drive input. reference/harden.md:331
- Persona Sam: 4.5:1 text contrast, 200% zoom, keyboard-only primary flow, announced state changes. reference/critique.md:712-720
- Harden a11y: focus management in modals, skip links, live regions, test Windows high contrast mode. reference/harden.md:276-291
- Native: unlabeled interactive elements, reading/focus order, text scaling clip at large sizes, contrast in both appearances. reference/audit.native.md:12-17
- Polish: verify visible keyboard focus, logical tab order, labels, screen-reader names; zoom, contrast. reference/polish.md:74, 91
- Clarify: alt text conveys image info, empty alt for decoration; accessible names align with visible labels. reference/clarify.md:74-75
- Delight must not override platform conventions or accessibility; check muted/keyboard/touch paths. reference/delight.md:52-53, 67
- Distill must not sacrifice a11y (labels, ARIA still required). reference/distill.md:88

### States / polish
- Every control needs default, hover, focus, active, disabled, loading, error, success. reference/polish.md:73
- Triage order: (1) broken/blocked/data loss/misleading/inaccessible, (2) missing loading/empty/error/success/disabled/permission, (3) flow/hierarchy/responsive/system drift, (4) visual/motion, (5) code cleanup. reference/polish.md:41-45
- Do not perfect one corner while leaving the rest below the bar. reference/polish.md:47
- Classify drift: missing token / one-off implementation / conceptual mismatch / local defect; fix at narrowest correct level. reference/polish.md:13-18
- Prevent image layout shift; correct aspect ratios, responsive sources, useful alt. reference/polish.md:69
- Remove debug output, dead code, unused imports, obsolete styles; promote to token only genuinely reusable values. reference/polish.md:81-83
- Finish with a source diff removing accidental churn, orphaned code, temp artifacts. reference/polish.md:97
- Harden: test 1000+ items, 50+ options, emoji, RTL, CJK, 100+ char names, offline, 3G throttle, 10 rapid submits. reference/harden.md:7-13, 349-358
- Error states need retry + explanation; preserve user input on form error; per-status handling (400/401/403/404/429/500). reference/harden.md:160-191
- Empty states: no items, no results, no notifications, no data; provide clear next action. reference/harden.md:201-206
- Prevent double-submission; optimistic updates with rollback. reference/harden.md:222-224
- Never leave generic "Error occurred" messages; never block whole interface when one component errors. reference/harden.md:338, 343
- Memory hygiene: clean listeners, cancel subscriptions, clear timers, abort requests. reference/harden.md:301-305
- Debounce search 300ms, throttle scroll 100ms (example values). reference/harden.md:310-313
- Empty-state types: first use, user cleared, no results, no permissions, error. reference/onboard.md:187-192
- Audit perf: layout thrash, layout-property animation, unbounded blur/filter/shadow, missing lazy loading, `will-change` applied broadly or left on at rest. reference/audit.md:27-30
- Audit scores each dimension 0-4; total /20; bands 18-20 Excellent, 14-17 Good, 10-13 Acceptable, 6-9 Poor, 0-5 Critical. reference/audit.md:70-79
- Severity P0 Blocking / P1 Major (or WCAG AA violation) / P2 Minor / P3 Polish; "Would a user contact support?" => at least P1; keep P3s few. reference/audit.md:92-96, 132; reference/critique.md:631-638
- Native audit: unvirtualized lists, main-thread jank, startup work before first frame. reference/audit.native.md:23-29
- Overdrive perf: target 60fps (simplify under 50), lazy-init heavy resources, pause off-screen, test mid-range devices. reference/overdrive.md:104-107

### Copy
- Say each idea once; heading explains state => intro adds new info or disappears. reference/clarify.md:29
- Message hierarchy per state: one fact needed now, next action, context that changes decision, tone. reference/clarify.md:22-27
- Action labels: specific verb + object; describe outcome not gesture; same noun/verb for same concept. reference/clarify.md:35
- Destructive actions: name object and consequence; prefer undo over confirmation; button names action, not Yes/No/OK/Submit. reference/clarify.md:37
- Placeholders are examples, not labels; persistent labels; format requirements before submission. reference/clarify.md:41
- Actionable error = what failed, why (when known), how to recover; no internal codes as primary message; no jokes on privacy/payment/deletion/blocked work. reference/clarify.md:47-53
- Loading text names real operation; never invent progress; routine success brief. reference/clarify.md:57-61
- Complete translatable messages; structured variables; allow expansion; proper pluralization (not `count !== 1 ? 's'`). reference/clarify.md:71-73; reference/harden.md:149-156
- Ask before changing factual claims, legal meaning or domain-specific terms. reference/clarify.md:18; reference/polish.md:80
- Final copy as short as possible without removing meaning or recovery. reference/clarify.md:92
- Distill copy: active voice, cut filler/hedging, no headers restating intros. reference/distill.md:73-78
- Delight copy must use the product's language; generic whimsy is worse than neutral clarity. reference/delight.md:46
- Onboarding empty-state copy structure: what will be here, why it matters, how to start (CTA + template), visual, contextual help. reference/onboard.md:170-185
- Heuristic 9 error scoring: 1 = "Something went wrong"; 3 = problem + next steps; 4 = also preserves user work. reference/critique.md:583-587

### Motion
- Quieter: shorter distances (10-20px not 40px), ease-out-quart, never bounce or elastic; remove decorative animation; keep functional motion. reference/quieter.md:72-76
- Polish: motion coherent, interruptible, performant; do not add animation merely to make polish visible. reference/polish.md:75
- Overdrive: progressive enhancement non-negotiable; `@supports` fallbacks; WebGPU falls back to WebGL2; CSS-only fallback must still look good. reference/overdrive.md:86-100
- Overdrive: no sound without explicit user opt-in; no bleeding-edge API without fallback; one extraordinary moment only. reference/overdrive.md:113-118
- Overdrive: verify effects in the browser for timing, easing, smoothness, not from code. reference/overdrive.md:24
- Overdrive browser-support facts: scroll-driven animations Chrome/Edge/Safari, Firefox flag only; View Transitions cross-document no Firefox. reference/overdrive.md:51, 56
- Delight: nonessential loops stop when hidden; celebration proportional to frequency and consequence; sound requires consent and respects mute; for authored motion load animate.md. reference/delight.md:55, 59
- Persona Alex red flag: slow animations that can't be skipped. reference/critique.md:671

### UX / direction
- Polish is refinement, never concealed redesign; preserve visual world, content, behavior; if concept is wrong recommend redesign or `bolder`. reference/polish.md:3
- Detector result is defect evidence, not proof of quality; inspect rendered experience. reference/polish.md:5; reference/critique.md:10
- Design specificity: could an unrelated product use it unchanged? Judge before detector output. reference/critique.md:51
- Nielsen 10 heuristics scored 0-4 (/40); n/a allowed (esp. 7, 10 on Persuade/Experience surfaces) with renormalized max; "most real interfaces score 20-32". reference/critique.md:55, 131-133
- Bands: 36-40 Excellent, 28-35 Good, 20-27 Acceptable, 12-19 Poor, 0-11 Critical; with n/a use percent 90/70/50/30. reference/critique.md:615-623
- Critique report: 3-5 priority issues each tagged P0-P3 with fix and suggested command; 2-3 strengths; 2-3 personas; "cut 'consider exploring...' entirely"; don't soften criticism. reference/critique.md:148-188
- Persona selection table (e.g. landing: Jordan, Riley, Casey; dashboard: Alex, Sam); project-specific personas only from real Design Context. reference/critique.md:786-819
- Distill: ask what's the ONE primary goal; "expect to say no to good ideas"; simplicity != fewer features; document removed complexity. reference/distill.md:19-37, 87-92, 104-109
- Onboarding: get to aha moment fast; skippable; 1-3 core concepts; tours 3-7 steps with Skip and replay; show once and respect dismissals; no separate tutorial mode. reference/onboard.md:26-56, 129-135, 211-221
- Bolder: reflex of "more effects" is opposite of bold; amplify what system owns; keep existing claims true; ask if real evidence is absent. reference/bolder.md:5, 17-18
- Delight: state one delight thesis in one sentence; derive from product mechanism, not stock catalog; don't celebrate an ordinary click; Operate+Read concentrates delight at first use/completion/recovery. reference/delight.md:9-10, 23, 27, 35
- Quieter visitor modes: Persuade/Experience keep POV; Operate/Read reduce noise (fewer accents, flatter cards, less motion). reference/quieter.md:5-9
- Overdrive: context decides what "extraordinary" means; not for changing what product does (collab/offline are product decisions); don't mask weak fundamentals. reference/overdrive.md:10, 82, 117
- Recommended-command whitelist (19 commands) and "end with /impeccable polish". reference/critique.md:273-280; reference/audit.md:124
- Handoff to `/impeccable polish` at end of harden, onboard, clarify, distill, quieter, bolder, delight. reference/harden.md:362; reference/onboard.md:234; reference/clarify.md:94; reference/distill.md:111; reference/quieter.md:99; reference/bolder.md:33; reference/delight.md:70

## 3. Refusals, scope limits, ask-first, routing

- Audit does not fix issues; documents them for other commands. reference/audit.md:1; reference/audit.native.md:1
- Audit is web only; native routes to audit.native.md. reference/audit.md:5
- Do not run `impeccable detect` on native source (empty result reads as clean); native critique runs Assessment A alone, no degraded banner. reference/critique.md:33
- Polish: ask when a binding system principle cannot be inferred; ask before changing claims. reference/polish.md:18, 80
- Polish preserves scope; do not smuggle in redesign. reference/polish.md:3
- Clarify: ask before changing factual claims, legal meaning, domain-specific terms. reference/clarify.md:18
- Distill and quieter: if context unclear, do not guess; ask via AskUserQuestion and wait. reference/distill.md:24; reference/quieter.md:31
- Bolder: scope is sovereign; touch only named target; if system can't express it, ask naming exact addition and job. reference/bolder.md:7-9
- Bolder routing: "bolder" during an open direction round belongs to new-work.md, not this command. reference/bolder.md:3
- Delight: ask only when brand emotional range or stakes cannot be inferred; no manufactured celebration. reference/delight.md:23
- Overdrive: must propose 2-3 directions and get user pick via AskUserQuestion before any code; trade-offs inside the option. reference/overdrive.md:14-20
- Overdrive excludes product-capability changes. reference/overdrive.md:82
- Critique: skip question only if fewer than 3 Priority Issues; otherwise questions required. reference/critique.md:256
- Critique targets: do not pass CSS-only files to detect; skip CLI scan for URLs; ask/narrow for 500+ files. reference/critique.md:68-70
- Component-review: never write or edit `.impeccable/review/components.json`; never submit page or write receipt for user; never approve yourself. reference/component-review.md:7, 11, 13
- Component-review: if serve exits 2 (no browser) or 4 (30 idle minutes), stop, report pending with session ID, do not build past checkpoint. reference/component-review.md:13
- Component-review: hero manifest schema fixed; version 3 fields refused in hero; no re-requesting plan/asset/assembly approval after acceptance. reference/component-review.md:53, 61
- Harden hand-off: not a redesign; hands off to polish. reference/harden.md:362
- Do not claim a visible overlay unless injection succeeded and detector ran in page. reference/critique.md:14

## 4. Process obligations

- Critique setup: resolve target to path/URL (prefer source path); run `critique-storage slug`; read `.impeccable/critique/ignore.md` and silently drop matches. reference/critique.md:20-29
- Critique must run A and B as two isolated parallel sub-agents when a sub-agent tool exists; inline is a degraded run requiring banner `⚠️ DEGRADED: single-context (<reason>)` as first line. reference/critique.md:8-9, 38-42, 106-107
- A must finish before detector findings enter parent context. reference/critique.md:10
- Skipped detector = failed run unless detect missing/crashes after real attempt or native. reference/critique.md:11
- Each assessment opens its own new browser tab; mutation preflight; live-server run in background and stopped with `stop --keep-inject`; stop any server before final report. reference/critique.md:13, 44, 76-79
- Desktop apps: CDP port 127.0.0.1 only, window on screen, assessments take turns, restore state; Tauri on macOS/Linux has no CDP. reference/critique.md:82-89; reference/audit.md:62
- Reuse Assessment B CLI findings; don't rerun detect in parent. reference/critique.md:93
- Deliver the full report in chat BEFORE persistence; then write snapshot via `critique-storage write` with `IMPECCABLE_CRITIQUE_META`; delete temp body file; read trend; print trend line; then ask questions (question is last). reference/critique.md:15, 192-241
- Report's first line declares method provenance (dual-agent / degraded / native). reference/critique.md:103-108
- Run ends with targeted questions or literal `Questions skipped: <reason>`. reference/critique.md:16, 258
- After answers: Action Summary of commands ordered by user priority, ending with `/impeccable polish`; tell user they can run one-at-a-time and re-run critique. reference/critique.md:262-286
- Polish: read DESIGN.md and tokens first; test at representative sizes (desktop+mobile web; device classes on native); read latest critique snapshot via `critique-storage latest` and retain `snapshot_file`; exit 2 means none/stale. reference/polish.md:9, 22, 31-35
- Polish verify: re-walk path with mouse, keyboard, touch; check console errors, layout shift, latency; follow `impeccable context` quality guidance; never add another detector pass; clean scan does not replace visual judgment. reference/polish.md:87-95
- Polish closes snapshot with `critique-storage close` only if a snapshot was read, `snapshot_file` retained, and all its Priority Issues cleared. reference/polish.md:99-105
- Harden verify: list of 10 manual tests; for gestures state evidence source and untested items. reference/harden.md:347-360
- Overdrive: begin response with the OVERDRIVE banner block. reference/overdrive.md:1-6
- Overdrive: verify in browser, batch fixes between looks. reference/overdrive.md:22-24
- Overdrive verify: wow/removal/device/context tests. reference/overdrive.md:122-125
- Bolder pre-finish checklist: outside-target unchanged, no new primitives, action-driving conventions intact, same brand. reference/bolder.md:26-31
- Component-review: run `component-review plan` (refuses until every raster region has plate); then host `component_review` tool or `capture` + `serve` + `status`/`verify`; apply decisions (approve/revise/split/reclassify/missing), rerun `comp-spec`, then plan/capture/serve again. reference/component-review.md:7-26
- After three failed hero or responsive attempts, present first-viewport review; acceptance makes numeric readings advisory but material vetoes hold. reference/component-review.md:30, 61
- Distill: document removed features/options and alternate access. reference/distill.md:104-109
- Quieter/distill/clarify verify checklists (still functional, distinctive, 200% zoom, translations). reference/quieter.md:90-97; reference/distill.md:94-102; reference/clarify.md:80-90

## 5. Depth notes

- Color: thin and scattered; only quieter.md has concrete numbers (70-85% saturation, 10% rule); no palette construction, no OKLCH or contrast-pair guidance in these files.
- Typography: modest; concrete limits in distill (3-4 sizes, 2-3 weights) and harden (16px floor), otherwise defers to other references. Harden's Arabic-script section is unusually deep.
- Layout/hierarchy: moderate; cognitive-load rules (<=4/5/8+) are precise and checkable, but spacing/grid values are absent.
- Accessibility: strong and precise in audit.md (WCAG 2.5.8 24px circle rule, gesture evidence provenance) and harden.md; native audit mirrors with platform thresholds.
- States/polish: deep; polish.md triage order, harden.md edge-case catalog and audit severity/score bands are checkable and process-heavy.
- Copy: deep; clarify.md is dense and rule-like with concrete bans (Yes/No/OK/Submit, internal codes, concatenated fragments).
- Motion: thin here; quieter and overdrive give a few numbers (10-20px, 60fps/50fps floor), authored motion is delegated to animate.md (not read).
- UX/direction: very deep; critique.md (819 lines) is a full orchestration spec with hard invariants, heuristics rubric, personas; overdrive/bolder/delight have strong ask-first gates.

---
<!-- shard imp-I3.md -->
# Impeccable audit shard I3 (reference/ command files, degraded roles, scripts)

Skill root: /Users/leonardo/.claude/skills/impeccable. Paths below are relative to `reference/` unless prefixed `scripts/`. Files read with the Read tool, one call per file (all under 2000 lines), so each was returned whole.

## 1. Ledger

| File | Lines | Read | Summary |
|---|---|---|---|
| typeset.md | 90 | lines 1-90 (complete) | Typography command: two isolated assessments (judgment + `detect --scope type`), set the system, 16px body floor, 45-75ch measure, text-wrap rules, verify, live `scale` param |
| layout.md | 84 | 1-84 (complete) | Layout command: squint test, grouping, rhythm, spacing scale, container-aware, verify, live `density` param |
| colorize.md | 86 | 1-86 (complete) | Color command: audit, strategy, roles, OKLCH, WCAG table, verify, live `color-amount` param |
| animate.md | 89 | 1-89 (complete) | Motion command: find the job, motion thesis, material by meaning, timing table, runtime, reduced-motion, verify |
| adapt.md | 318 | 1-318 (complete) | Web adaptation: source/target context, per-device strategies, breakpoints, touch, custom-control gesture testing, embedded responsive-design reference |
| adapt.native.md | 58 | 1-58 (complete) | Native adaptation: phone to tablet, orientation/foldables, iOS to Android idiom table, web to native |
| optimize.md | 257 | 1-257 (complete) | Performance: measure first, loading/rendering/animation/network, Core Web Vitals thresholds, verify |
| ios.md | 51 | 1-51 (complete) | iOS platform rules: HIG conformance, 44pt, Dynamic Type, semantic colors, Simulator screenshots |
| android.md | 46 | 1-46 (complete) | Android platform rules: Material 3, 48dp, sp, color roles, emulator screenshots |
| document.md | 416 | 1-416 (complete) | DESIGN.md generation: Stitch frontmatter schema, 8 canonical sections, scan/seed modes, `.impeccable/design.json` sidecar |
| extract.md | 69 | 1-69 (complete) | Extract reusable components/tokens into a design system; 3+ uses rule |
| live.md | 325 | 1-325 (complete) | Live variant mode protocol: poll loop, identity lock, three-axis variants, params, accept/carbonize cleanup |
| live-setup.md | 104 | 1-104 (complete) | One-time live config, framework table, CSP detection/consent |
| generate.md | 101 | 1-101 (complete) | Fast lane into live mode: parse request, reuse dev server/tab, generate, accept and close |
| visualize.md | 47 | 1-47 (complete) | Comp-led build: three direction comps, one approval point, comp becomes spec, plates/provenance |
| hooks.md | 114 | 1-114 (complete) | Design detector hook management, triage of findings, ignore commands, constraints |
| doctor.md | 54 | 1-54 (complete) | Artifact drift report/repair (schema vs truth drift), severity handling |
| region-map.md | 26 | 1-26 (complete) | Region map of an approved comp before asset production |
| degraded/asset-producer.md | 41 | 1-41 (complete) | Inline role: plates from approved comp; decision-comp mode; transparent cutouts |
| degraded/documenter.md | 23 | 1-23 (complete) | Inline role: records DESIGN.md from the shipped build |
| degraded/finish-reviewer.md | 37 | 1-37 (complete) | Inline role: finish review, dispositions recapture/rebuild/fix/ship |
| degraded/manual-edit-applier.md | 91 | 1-91 (complete) | Inline role: apply live manual copy edits to source, JSON output |

Total 2527 lines in the assigned markdown; every one covered.

Scripts (`scripts/`, not read line by line):
- `impeccable` (launcher, 10167 B, 249 lines, read in full), `impeccable.cmd` 11095 B, `VERSION` = 0.1.18, `engine-checksums.txt` 787 B (sha256 per platform asset), `command-metadata.json` 8318 B (command descriptions).
- `bin/darwin-arm64/impeccable` 17,721,856 B (Rust engine binary; rule text extracted with `strings`).
- `live-browser.js` 553,621 B; `live-browser-dom.js` 12,283 B; `live-browser-ignores.js` 10,423 B; `live-browser-session.js` 5,838 B; `modern-screenshot.umd.js` 29,290 B.
- `data/font-index.json` 1,100,013 B; `data/font-index-failures.json` 2,437 B.
- Launcher `scripts/impeccable:1-249`: runs the platform binary next to it; falls back to `$IMPECCABLE_BIN`, `~/.impeccable/bin`, version-pinned cache, PATH; downloads from GitHub releases only after sha256 match against engine-checksums.txt, refuses unverified downloads (lines 171-245). Exports `IMPECCABLE_SKILL_DIR` so the binary finds `reference/*.md` (77-79).
- live-browser.js carries no detector rule ids (grep for low-contrast, tiny-text, side-tab, overused-font, kicker: 0 hits); it is the injected overlay (variant wrapping, `data-impeccable-variant`, reduced-motion CSS for its own UI), not the rule engine. The rules live in the binary.

### Automated checks the binary enforces (from `strings` on the engine, rule catalog near binary string offset ~15236)
Rule ids and messages that matter to pillars (message thresholds quoted from the engine):
- Color: `ai-color-palette` (purple/violet gradients, cyan-on-dark are tells); cream/beige page background as default surface (`cream-palette`); gray text on colored background; `low-contrast` (4.5:1 body, 3:1 large); gradient text; glowing shadows / dark-glow (zero-offset chromatic halo, colored blurred shadow on dark); `radial-halo` and radial spotlight glow; `hard-offset-shadow` (>=4px unblurred offset, review prompt, waive with `data-impeccable-ignore="hard-offset-shadow"`).
- Typography: `overused-font` (Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, Space Grotesk, others in a list incl. open sans, montserrat, arial, helvetica, instrument sans, mona sans); `flat-type-hierarchy` (dominant heading/body ratio under 1.25); `tiny-text` (body under 12px; 14px min, 16px ideal); `undersized-ui-text` (functional text under 11px; footer smallprint floor 10px; on-ramp values not exempt); `all-caps-body` (80+ chars); `wide-tracking` (>0.05em body); `extreme-negative-tracking`; `tight-leading` (<1.3x; use 1.5-1.7 body); `line-length` (>~80 chars, use 65-75ch); `justified-text` without hyphens; `straggler`; `unbalanced-heading`; `oversized-h1`; `italic-serif-display`; `kicker-above-heading` (banned outright); `hero-eyebrow-chip`; `numbered-section-labels`; `skipped-heading`; `heading-rhythm` (space above heading must exceed space below).
- Layout: `nested-cards`; `monotonous-spacing`; `cramped-padding` (8px min, ideally 12-16); body text touching viewport edge (<16px, or <12px at <=480px); `icon-tile-stack`; `side-tab` / `border-accent-on-rounded`; `gpt-thin-border-wide-shadow`; `repeating-stripes-gradient`; `codex-grid-background`; `edge-flush-cards`; `first-viewport-column-overflow`; `clipped-overflow-container`; content overflow; `text-occlusion`; `repeated-container-text`.
- Motion: `bounce-easing` (bounce/elastic, use ease-out-quart/quint/expo); `pulsing-dot` (decorative pulse); `blinking-cursor`; auto-scrolling marquee; `content-hidden-at-rest` (large text share at opacity 0 after reveal handlers); `script-error`.
- Imagery: `shape-assembled-illustration`; `organic-clip-path`; `buried-raster` (tint must stay under 0.9 alpha); `broken-image`.
- Copy: `marketing-buzzword` (streamline, empower, supercharge, world-class, enterprise-grade, next-generation, cutting-edge); `aphoristic-cadence`; `theater-slop-phrase`; em-dash overuse (advisory, >=8 and ~1/500 chars).
- Design-system drift: `design-system-font`, `design-system-color`, `design-system-radius`, `design-system-font-size` (values outside DESIGN.md).
- Config: `detector.ignoreRules/ignoreFiles/ignoreValues`; inline `impeccable-disable <rule>` / `-line` / `-next-line` markers; `--no-config`, `--no-advisory`, `--no-inline-ignores`.

## 2. Rules by pillar

### Color
- Read DESIGN.md, tokens, assets, themes, representative states before choosing; list confirmed brand colors, current roles, grayscale-obscured hierarchy, contrast failures, color-only communication. colorize.md:14-21
- Ask only when a binding brand decision cannot be inferred; new identity routes to new-work.md. colorize.md:23
- Name emotional temperature, dominant relationship, contrast range and dosage before editing; no fixed percentage rule. colorize.md:27
- Build roles not swatches: canvas/elevated surfaces, primary/secondary text, action/focus/selection, borders, success/warning/error/info, data scales. colorize.md:29-36
- Keep existing color space; for a new web palette prefer OKLCH; hue from product meaning, never a default category association. colorize.md:38
- Strongest color owns a deliberate region; primary action color is not spent on decoration. colorize.md:42-43
- Tint neutrals only when brand hue creates cohesion; plain gray is valid. colorize.md:44
- On colored surfaces derive secondary text from the foreground/surface hue, not washed-out gray. colorize.md:45
- Data: distinct lightness, chroma, shape, label or pattern so color is not the only code. colorize.md:47
- Dark mode: design elevation and contrast explicitly; do not invert mechanically. colorize.md:48
- Define primitives plus semantic tokens when a token system exists; themes remap semantic roles. colorize.md:49
- WCAG AA: body 4.5:1, large text 3:1, controls/icons/focus indicators 3:1; check interactive states, overlays, text on images, disabled, both themes, simulate vision deficiencies. colorize.md:55-63
- OKLCH ramps: vary lightness, reduce chroma near white and black; prefer explicit colors over chains of translucent overlays. colorize.md:65
- Operate+Read: color encodes action, selection, status, wayfinding; rarity gives an accent force. Persuade+Experience: color may own large regions. colorize.md:9-10
- Live: every variant declares `color-amount` range 0-1 step 0.05 default 0.5, authored against `var(--p-color-amount, 0.5)`; at most two extra params. colorize.md:80-86
- Live colorize action: default mode varies existing palette role (Restrained / Committed / Full palette / Drenched) and contrast strategy; departure varies hue family. live.md:168
- Tonal ramps in sidecar: 8 steps dark to light, ~15% to ~95% lightness, chroma reduced near ends. document.md:328
- iOS: semantic system colors only (raw hex breaks Dark Mode/increased contrast), one tint color, system materials, no hand-rolled glassmorphism. ios.md:30-33
- Android: Material color roles, Dynamic Color with static fallback on 12+, tonal elevation, no arbitrary drop shadows. android.md:30-33
- Automated: ai-color-palette, cream palette, gray-on-color, low-contrast, glow shadows, radial halo (see section 1 scripts list). hooks.md:7

### Typography
- Preserve confirmed families and improve their use; replacing typography that creates a new identity routes to new-work.md and updates DESIGN.md. typeset.md:1,11
- Modes: Persuade+Experience display type carries voice; Operate+Read single well-tuned family and fixed role scale. typeset.md:7-8
- Assessment must answer six questions with file/selector/computed value: authority/fit, hierarchy, scale/consistency, reading, stress (long headings, localization, zoom, fallback), delivery. typeset.md:17-23
- Run `impeccable detect --json --scope type`; detector findings must not anchor the judgment pass; clean scan is a floor. typeset.md:24-30
- State roles, contrast between roles, measure/density, authoritative faces, constraints before editing; fewest roles/families that make hierarchy unmistakable. typeset.md:34-42
- Body floor 1rem/16px on web unless a dense role, platform, or user setting justifies. typeset.md:46
- Prose 45-75ch; leading varies inversely with measure. typeset.md:21,47
- Light on dark: more line height, a touch more tracking, one weight step. typeset.md:48
- Only used font assets/weights, metric-compatible fallbacks, nonblocking. typeset.md:52
- Paragraph rhythm: spacing or first-line indent, not both. typeset.md:55
- No second family without a role only it can perform; no decoration at the expense of comprehension. typeset.md:57
- `text-wrap: balance` on headings and short centered blocks; `text-wrap: pretty` on body; hand breaks only between phrases and checked at every width. typeset.md:63-66
- `straggler` and `unbalanced-heading` findings are advisory; deliberate uneven breaks must be said to be intended. typeset.md:67
- Verify with rendered or source evidence per item and rerun scan; no bare "yes". typeset.md:78
- Live: every variant declares `scale` range 0.85-1.3 step 0.05; at most one pairing/weight param. typeset.md:84-90
- Live typeset: departure varies pairing and scale ratio; default keeps faces, varies scale ratio, case, weight. live.md:167
- Native: Dynamic Type/system text styles, no hard-coded point sizes; SF carries UI; 11pt floor, Body 17pt. ios.md:24-26
- Android: Material type scale roles, Roboto system face, sp units never px. android.md:24-26
- Binary thresholds: tiny body <12px (14 min, 16 ideal), functional text <11px, tracking >0.05em body, leading <1.3, flat hierarchy <1.25 ratio, overused-font list. scripts binary strings
- DESIGN.md typography frontmatter keys: fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontFeature, fontVariation; roles display/headline/title/body/label. document.md:19-25,110

### Layout / hierarchy
- Squint test must reveal primary, secondary, major groups in order; group by proximity before containers. layout.md:18-19,47
- Name spatial thesis: task path, grouping, lead/support, density and rhythm, adaptation across container/viewport/input/content extremes. layout.md:35-41
- Rhythm = deliberate tight vs generous intervals; documented spacing scale, 4-unit base preferred over 8-only. layout.md:49
- Hierarchy follows product priority, not framework defaults; do not make every group an isolated component. layout.md:50-51
- Responsive is structural: reorder, collapse, reflow, reveal; container-aware components; `gap` for sibling rhythm. layout.md:52-54
- Touch targets usable even when marks are small; depth only when it clarifies state. layout.md:55-56
- DOM/focus order must agree with visual order. layout.md:23,69
- Operate+Read: predictable structure, stable density; Persuade+Experience may be asymmetric if the world earns it. layout.md:7-8
- Run `detect --scope layout`; scan cannot prove hierarchy; keep mechanical evidence out of first assessment. layout.md:25-31
- Live: every variant declares `density` range 0.6-1.4 step 0.05, spacing authored against `var(--p-density, 1)`; one structural param only if topology branches. layout.md:78-84
- Live layout action must vary structural arrangement, not spacing tweaks. live.md:169
- Mobile: single column, full-width, bottom nav, 44x44px targets, 16px min text, bottom sheets over dropdowns. adapt.md:39-56
- Tablet: two columns, master-detail; desktop: max-width constraints, persistent side nav. adapt.md:66-84
- Email: 600px max, single column, inline CSS, table layout. adapt.md:115-119
- Content-driven breakpoints, three usually suffice (640, 768, 1024); mobile-first `min-width`; `clamp()` for fluid values. adapt.md:211-213
- Safe areas via `env(safe-area-inset-*)` and `viewport-fit=cover`. adapt.md:243-264
- Pointer/hover media queries; never rely on hover for function. adapt.md:215-241
- Tables become cards on mobile; progressive disclosure with details/summary. adapt.md:302
- Native: size classes/window size classes, never device-model checks; restructure phone UI on tablet, never stretch. adapt.native.md:15,47
- iOS: tab bar 2-5 sections, nav stack, sheets, large titles, edge-swipe back alive, 44x44pt. ios.md:14-20
- Android: navigation bar 3-5 on compact, rail/drawer on expanded, predictive Back, edge-to-edge insets, one FAB, 48x48dp with 8dp gaps. android.md:13-20,38
- DESIGN.md Layout section: grid/spatial model, container, density, responsive changes, spacing rhythm, exact values only when observed. document.md:186-188
- Binary: nested-cards, monotonous-spacing, cramped-padding (8px min), icon-tile-stack, side-tab, thin-border+wide-shadow rows, text occlusion, overflow. scripts binary strings

### Accessibility
- Contrast thresholds and non-color cues (colorize.md:55-63); simulate color-vision deficiencies. colorize.md:63
- Preserve browser zoom, user font settings, Dynamic Type, platform text scaling. typeset.md:54
- Typography verify includes zoom, text scaling, focus, contrast. typeset.md:75
- Touch targets: 44x44 (web/iOS), 48x48dp Android. adapt.md:46; ios.md:20; android.md:20
- Honor Reduce Motion (iOS crossfade) and Android Remove animations setting. ios.md:45; android.md:40
- Keyboard/touch/AT order matches visual order. layout.md:69
- Extracted components: ARIA, keyboard nav, focus management built in. extract.md:40
- Do not sacrifice accessibility for performance. optimize.md:239
- Verify Dark Mode and large Dynamic Type (iOS) / font_scale 1.3 and night mode (Android), restoring settings after. ios.md:50; android.md:45
- Skipped heading levels flagged by detector. scripts binary strings

### States / polish
- Verify custom controls (sliders, drag surfaces): tap, complete a drag, swipe along page scroll axis across the control, and drag along its axis; screenshots/resized viewports verify layout, never a gesture; state evidence source (emulated, synthesized touch, engine, device). adapt.md:191-195
- Test real devices; DevTools emulation misses touch, performance, chrome; at least one real iPhone, one real Android. adapt.md:168,314
- Verify across orientations, browsers, OS, input methods, 320px and 4K, throttled network. adapt.md:181-189
- Extracted components need sensible defaults, variants, docs; extract only things used 3+ times with same intent; keep differently-intended lookalikes separate. extract.md:22,68
- DESIGN.md component snippets include `:hover`, `:focus-visible`, and meaningful `:active`. document.md:312
- Performance: LCP < 2.5s, INP < 200ms, CLS < 0.1; measure before and after; compress images 80-85%; `font-display: swap|optional`; `content-visibility: auto`; virtualize very long lists; no lazy-loading above the fold. optimize.md:20,34,64,107,191-209,242
- Reserve space (`aspect-ratio`, dimensions) to prevent shift. optimize.md:205-216
- Avoid `will-change` everywhere; optimize the biggest bottleneck first; test low-end Android. optimize.md:241-252
- Detector: broken-image, content-hidden-at-rest, script-error, clipped overflow, text-occlusion. scripts binary strings

### Copy
- Skill itself contains little copy guidance in these files; copy rules live in the binary: marketing-buzzword list, aphoristic-cadence (3+ sections ending on a short rebuttal), theater framing, em-dash saturation (>=8, ~1/500 chars, advisory), kickers/eyebrows banned outright. scripts binary strings
- Manual copy edits applied verbatim: preserve `op.newText` exactly (leading zeros, punctuation, casing), source text must be an exact substring, keep typed data types, encode `>` in JSX as `{"alpha -> beta"}`. degraded/manual-edit-applier.md:38-47
- Variant brief reads voice tone off the copy as part of the identity lock. live.md:143

### Motion (scored pillar; animate.md in full)
- Purpose test: motion must explain state, relationship, hierarchy, or one earned authored moment; "decoration without purpose is animation debt." animate.md:3
- Modes: Persuade+Experience prefer one rehearsed focal sequence over repeated section reveals; Operate+Read keep routine transitions fast and no page-load choreography. animate.md:9-10
- Native follows ios.md/android.md Motion section including Reduce Motion; do not apply the web tooling to native. animate.md:11
- Find only places where motion would: acknowledge an action, make state/spatial change legible, preserve continuity, direct attention at a meaningful moment, embody the world; do not animate static areas because they exist. animate.md:15-23
- Ask only for a material constraint that cannot be inferred. animate.md:23
- Write a motion thesis before implementing: focal moment, continuity, feedback, budget. animate.md:27-32
- A generic fade-and-rise, hover lift, parallax layer, or scroll reveal is not a thesis; the focal moment must come from this product/surface. animate.md:34
- Choose material by meaning: continuity (shared-element/FLIP/view transitions), focus/depth (bounded blur/filter/backdrop/shadow), reveal (masks/clip-paths), material/energy (color, gradient, texture, shaders), state feedback (smallest change). Do not stack techniques; one strong material idea. animate.md:38-46
- Sibling stagger only when a list appears as a list; cap total delay; never turn every scrolled section into a staggered list. animate.md:48
- Duration table: 100-150ms immediate feedback; 150-300ms routine state; 300-500ms layout/overlay/view transition; 500-800ms authored focal entrance. animate.md:54-59
- Exit faster than entrance; deceleration such as `cubic-bezier(0.16, 1, 0.3, 1)`; no bounce/elastic by reflex; long feedback feels like latency. animate.md:61
- Runtime: CSS transitions/keyframes for declarative; WAAPI or existing motion library for interruption/sequencing; View Transitions for continuity; scroll-driven only when scroll relationship carries meaning, with robust fallback; no new dependency for what the stack can do. animate.md:65-69
- Content visible in default state so failed scripts do not hide the page. animate.md:71
- Avoid casually animating width, height, top, left, margins; use FLIP/transforms/grid techniques; bound blur/filter/shadow/canvas/shader to isolated regions; `will-change` only during known animation; measure on target devices. animate.md:71
- Nonessential loops stop when offscreen or hidden; respect autoplay and sound preferences. animate.md:75
- Every web animation needs an intentional `prefers-reduced-motion` path: remove/reduce spatial movement, keep opacity/color/state changes that carry meaning; reduced motion = fewer, gentler, not none. animate.md:77
- Verify: focal motion specific to world; supporting animations explain feedback/state/relationship; interruption and repeat use; desktop/mobile/keyboard; expensive effects smooth on target; removing an animation would lose meaning, not just decoration. animate.md:81-87
- Handoff to `/impeccable polish`. animate.md:89
- Optimize cross-check: transform/opacity for reliable movement but blur, filters, masks, clip-paths, shadows, color shifts allowed when meaningful; 16ms/frame target; rAF for JS animation; debounce scroll handlers. optimize.md:111-138
- Live `animate` action varies motion vocabulary per variant (cascade stagger / clip wipe / scale-and-focus / morph / parallax). live.md:171
- iOS: system transitions (push slides, sheets rise, dismiss reverses); Reduce Motion crossfade instead of parallax/large slides. ios.md:44-45
- Android: Material container transform, shared-axis, fade-through with standard easing; Remove animations honored with crossfade or instant cut. android.md:40
- Hook/detector motion checks: bounce/elastic easing, decorative pulsing dot, blinking cursor, auto-scrolling marquee, content hidden at rest, repeated-use `hooks ignore-value bounce-easing <name>` allowed for literal ball-bounce subjects. hooks.md:81; scripts binary strings
- DESIGN.md: no `motion:` frontmatter group; motion tokens (name, value, purpose) go in sidecar `extensions.motion`; motion guidance sits with the world/component it affects. document.md:275-277,413,416

### UX / direction
- Visitor modes (Persuade, Experience, Operate, Read, Native) steer every command; commands change structure within the established world, identity replacement belongs to new-work.md. typeset.md:5-11; layout.md:5-11; colorize.md:7-10
- Adaptation is rethinking, not scaling: assess source/target context before planning; do not hide core functionality, use different IA per context, ignore landscape/touch-on-desktop. adapt.md:3,31,170-177
- Native: HIG/Material 3 govern structure in every mode; brand expresses through the open layer (tint, type accents, motion, content). ios.md:5; android.md:5
- "Slop test": would a fluent iPhone/Android user trust this, or is it a ported website / iOS skin. ios.md:9; android.md:9
- iOS: use platform controls (switch, segmented, pickers, action sheets, swipe actions), SF Symbols not web icon sets, deliberate modality, grouped lists. ios.md:37-40
- Android: Material components, snackbars for transient feedback (never toast), dialogs only for interrupting decisions. android.md:37-39
- Web to native: reconform, do not reflow. adapt.native.md:43
- Comp-led builds: three distinct comps, 150-300 word prompts that carry only what the image model cannot know; commitment is depth: one dominant move, rest hold still, "busy is louder, not bolder". visualize.md:11,13,17
- Medium follows what pixels are: figures, product objects, perspective illustrations, named textures ship as raster; text/controls/chrome/diagrams semantic; never flatten image-native regions silently. visualize.md:39
- Split regions by what varies independently (swappable content, moving parts, structure); frame and its view are separate. region-map.md:20
- Live: Phase A identity lock sentence (real values, no aesthetic family name), Phase B default vs departure (departure only on explicit current-request ask; unsure means default), Phase C three variants on three different axes (hierarchy, layout topology, typographic system, color strategy, density, structural decomposition), Phase D squint test. live.md:139-159
- Live precedence: DESIGN.md wins visual, PRODUCT.md wins product/voice, surface brief wins surface strategy. live.md:60
- Param budget by visual weight: leaf 0, small 0-1, medium target 2, large 2-3 up to 4; hard cap 4. live.md:222-227
- Live action variations: bolder, quieter, distill, polish, adapt (different target context), delight, overdrive. live.md:163-173
- Performance is a feature: fix the actual bottleneck, measure before/after. optimize.md:1,20

## 3. Refusals, scope limits, ask-first, routing
- Native `ios`/`android`/`adaptive` route adapt to adapt.native.md, and animate/typeset/layout to the platform files; web tooling not applied to native. adapt.md:5; animate.md:11; typeset.md:9; layout.md:9
- generate.md declines on native projects and offers `bolder`/`quieter` on source instead. generate.md:5
- Live editing refuses production/HTTPS-deployed sites; use `detect <url>` or extension; do not disable browser security or weaken production CSP. live.md:7; live-setup.md:45
- Never run init/document or ask for PRODUCT.md/DESIGN.md inside generate; extract identity from the event, offer `init` in one line afterward. generate.md:11
- Never hand-write a variants wrapper or invent a session id; sessions are browser-minted. generate.md:12
- Do not act on hook findings while live markers are in the file. generate.md:13
- Never kill/restart the dev server; reuse the running one and its tab. generate.md:39,96
- Ask first (AskUserQuestion, wait): existing DESIGN.md overwrite (refresh/overwrite/merge); no design system found for extract; generate wording naming no direction; `ignore-file`/`ignore-rule` suppressions; CSP patch consent. document.md:71; extract.md:9; generate.md:34; hooks.md:61; live-setup.md:60-71
- `document --seed` does not authorize replacing coherent code; offer scan mode or route via new-work. document.md:78
- Seed mode requires PRODUCT.md (route to init.md) and a concrete first surface; stop after seed DESIGN.md, do not implement. document.md:356-358
- Never invent frontmatter groups beyond colors/typography/rounded/spacing/components; do not rename canonical section headers; no duplicate token values between frontmatter and prose. document.md:413-416
- Doctor: maintenance only, do not redesign, only open files the report names, run no other command; deprecated fields (`## Register`) treated as absent; never assert DESIGN.md stale from commit count alone. doctor.md:3,37,41
- `init`/`document` are conversations, not unattended repairs; run only if user asks that turn. doctor.md:31
- Hooks: never hand-edit `.impeccable/config.json` (except `detector.extensions`); do not edit launcher/binary; never call the hook sandboxed; hook never blocks edits. hooks.md:105-108
- Finish reviewer: no browser, edits nothing, reads only provided inputs plus the craft floor, never other skill reference files. degraded/finish-reviewer.md:6,10
- Asset producer: do not redesign, add objects, touch page code/spec/comp; produce only spec-listed regions; never self-approve. degraded/asset-producer.md:38,18
- Manual edit applier: no polling, no commit/stage/push, never asks, no live scaffolding in source, returns only JSON. degraded/manual-edit-applier.md:24,49,72
- Documenter: never canonize a craft-floor refusal (kickers/eyebrows, hard offset shadows outside neobrutalism, glyph icons, system display faces) as a design-system rule. degraded/documenter.md:20
- Craft-floor refuse list is referenced but lives in craft-floor.md (outside this shard): kickers/eyebrows, hard offset shadows outside neobrutalist worlds, glyph icons, system display faces, gradient text, side stripes. degraded/finish-reviewer.md:24
- Links that this shard depends on but did not read: new-work.md, craft-floor.md, init.md, component-review.md.

## 4. Process obligations
- Before editing: typeset states roles/measure/constraints (typeset.md:34-40); layout names spatial thesis (layout.md:35-41); colorize names temperature/dosage (colorize.md:27); animate writes a motion thesis (animate.md:27-32).
- Run the mechanical scan and rerun after editing: `impeccable detect --json --scope type|layout [targets]`; synthesize with the judgment pass; clean scan is not proof. typeset.md:24-30,78; layout.md:25-31,72
- Isolated assessments via sub-agent when available and permitted, else sequentially; detector must not anchor design assessment. typeset.md:15; layout.md:15
- Verification answers each item with rendered or source evidence, not a bare "yes". typeset.md:78; layout.md:72
- Handoff `/impeccable polish` at the end of typeset, layout, colorize, animate, adapt, optimize. typeset.md:80; layout.md:74; colorize.md:76; animate.md:89; adapt.md:197; optimize.md:257
- Performance work: measure first, optimize biggest bottleneck, re-measure, check no regressions. optimize.md:20,243,246-255
- Adapt: test on real devices; custom controls need tap + drag + scroll-across evidence and the evidence source named; untested hardware is a reported gap. adapt.md:168,191-195
- Native builds: screenshots from Simulator (`xcrun simctl io booted screenshot`) / emulator (`adb exec-out screencap -p`), never a browser; capture every shipped device class; test dark mode and large type; say whether evidence came from simulator or hardware. ios.md:49-51; android.md:44-46
- Live protocol: boot with `impeccable live`, open the app URL, run the long poll (no short `--timeout`), reply `done`, poll again immediately; background task on Claude Code; do not screenshot/QA variants between generate and accept; full verification once at accept; chat is overhead. live.md:11-30
- Live accept (carbonize) is required before the next poll: move CSS to real stylesheet, bake params, unwrap, delete markers, then `impeccable live-complete --id` and verify `phase: "completed"`. live.md:277-285
- Live cleanup on exit: `impeccable live-server stop`, remove leftover `impeccable-variants-start` / `impeccable-carbonize-start`. live.md:318-321
- Recovery commands: `live-status`, `live-resume`, `live-complete`; journal under `.impeccable/live/sessions/` is canonical. live.md:68-76
- Live setup: write `.impeccable/live/config.json`, run `detect-csp` once, get consent before patching CSP, dev-only guard, record `cspChecked: true`. live-setup.md:5-17,49-71
- DESIGN.md: scan assets in priority order, auto-extract, ask two rounds of at most three questions for qualitative language, write DESIGN.md plus sidecar, show the file and offer refinement. document.md:86,118,128-148,342-346
- Sidecar regenerated whenever DESIGN.md is regenerated; skipped in seed mode. document.md:255,383
- Hooks: triage each finding as fix / confident false positive (narrowest ignore with named evidence in `--reason`, disclosed) / unsure (ask once). document `ignore-value` before `ignore-file`; inline disable only for files that leave the repo. hooks.md:55-70
- Hook tiers: per-edit immediate rules; Stop deep pass for taste rules (copy cadence, palette, typography taste, layout rhythm); `hook.perEditRules: "all"` restores full per-edit. hooks.md:7
- Doctor: run `doctor --json`, act by severity (`auto` run `--fix` once and report; `mention` state with fix; `route` name the command), report all groups in one pass, empty findings = one line and stop. doctor.md:15-33
- Comp-led build: comp round runs after `build-phase start`; approval point has no substitute or skip; record approved comp in surface brief and sidecar `"approved": true`; plates produced before page code; `embed-prompt` after every generated image. visualize.md:9,31,33,43
- Region map: gridded comp, `regions.json`, `--inspect-map` into a new output directory each time; zero errors does not certify accuracy. region-map.md:5-8
- Finish reviewer order: 0 evidence (recapture if captures invalid), 1 persistence, 2 fidelity (TYPE, MATERIAL, GROUND rows mandatory), 3 ceiling, 4 contract, 5 truth, 6 floor; dispositions `recapture|rebuild|fix|ship`; max eight material fixes. degraded/finish-reviewer.md:18-34
- Inline degraded roles disclose the substitution in one line when run without subagents. degraded/*.md:2

## 5. Depth notes
- Color: colorize.md is mostly principle with a single numeric table (AA thresholds) and the live param; strategy dosage is deliberately unspecified, so concrete color bans come from the binary (ai palette, cream, gray-on-color, glow) rather than prose.
- Typography: typeset.md is the thickest craft file in the shard, with measurable numbers (16px, 45-75ch, balance/pretty) and a six-question assessment; the binary adds hard thresholds (12px/11px, 1.3 leading, 1.25 hierarchy ratio, 0.05em tracking).
- Layout/hierarchy: layout.md is a short, principle-driven checklist with almost no numbers (4-unit scale, squint test); the numeric layout content is in adapt.md (44px targets, 600px email, 640/768/1024 breakpoints) and platform files.
- Accessibility: spread thinly across files (AA table, reduced motion, target sizes, text scaling); no dedicated section, no focus-ring or keyboard spec in this shard.
- States/polish: strongest on custom-control gesture verification and performance thresholds (optimize.md); empty/loading/error state design is not covered here.
- Copy: effectively absent from the prose in this shard; copy checks exist only as binary lint rules and the manual-edit applier's literal-text discipline.
- Motion: animate.md is compact but well-structured (thesis, material-by-meaning, 4-tier duration table, easing, runtime, reduced-motion, verify), explicitly anti-generic (rejects fade-and-rise, hover lift, parallax, scroll reveal as a thesis) and non-prescriptive about techniques; it lacks spring/physics, gesture, or interruption detail beyond one verify bullet, and relies on the detector's bounce/pulse/marquee/content-hidden rules for enforcement.
- UX/direction: very deep in process (live.md identity lock and axes, visualize.md comp discipline, finish-reviewer matrix) but that depth targets Impeccable's own tooling protocol more than reusable design judgment.
