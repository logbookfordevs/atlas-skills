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
