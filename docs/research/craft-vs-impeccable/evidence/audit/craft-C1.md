# Audit shard craft-C1 (atlas-craft: entry, ownership, color, type, layout)

Root: /Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-craft. All paths below are relative to it. Files were read with the Read tool (line numbered), each in one pass. No competing skill was read.

## 1. Ledger

| File | Lines | Read | Summary |
| --- | --- | --- | --- |
| SKILL.md | 29 | lines 1-29 (complete) | Mode router: Color, Type, Layout, Accessibility, UI Polish, Copy, States; plus Mobile Web conditional and motion ownership |
| references/ownership.md | 9 | lines 1-9 (complete) | Scope/handoff rules: no cross-discipline orchestration, motion owner, web-only, verification gaps |
| references/motion-ownership.md | 11 | lines 1-11 (complete) | Ruling: Animate/Fluid own motion values; Craft owns surfaces/icons/optical alignment; Accessibility owns reduced motion |
| SOURCE-MANIFEST.json | 727 | lines 1-727 (complete; Read output ended at 727 plus trailing newline) | Provenance: upstream commits, hashes, patches, rulings |
| references/color/index.md | 98 | 1-98 (complete) | better-colors entry: principles, fix table, severity, report format |
| references/color/color-formats.md | 90 | 1-90 (complete) | Notation choice, conversion limits, gamut, modern CSS |
| references/color/color-usage.md | 109 | 1-109 (complete) | One meaning, tokens in role, one colored action, gradients, cultures, increased contrast |
| references/color/contrast.md | 70 | 1-70 (complete) | WCAG2/APCA thresholds, fix-on-request, polarity, what to check |
| references/color/palette-generation.md | 108 | 1-108 (complete) | Brand step placement, ramp properties, library use, multi-hue, dark mode |
| references/color/palette-structure.md | 72 | 1-72 (complete) | Ramps needed, step-role table, neutrals, status, audit procedure |
| references/color/token-naming.md | 99 | 1-99 (complete) | Two-tier tokens, role inventory, grammar, anti-patterns, Tailwind v4 |
| references/type/index.md | 168 | 1-168 (complete) | better-typography entry: measured vs heuristic, rules, fix table, severity |
| references/type/choosing-fonts.md | 53 | 1-53 (complete) | Categories, fallback stacks for a type change, formats, anatomy |
| references/type/css-cheat-sheet.md | 67 | 1-67 (complete) | Declaration to Tailwind lookup |
| references/type/details-and-accessibility.md | 84 | 1-84 (complete) | Underlines, selection, iOS input zoom recipes, decorative text |
| references/type/spacing-and-sizing.md | 87 | 1-87 (complete) | Units, role-based type scale table, heading map, line-height, text-box |
| references/type/variable-fonts-and-opentype.md | 100 | 1-100 (complete) | Static vs variable, synthesis, axes, features |
| references/type/wrapping-and-punctuation.md | 23 | 1-23 (complete) | Measure, smart punctuation table, i18n |
| references/layout/index.md | 100 | 1-100 (complete) | better-layout entry: grouping, alignment, logical props, fix table, severity |
| references/layout/grouping-and-alignment.md | 103 | 1-103 (complete) | Space-over-lines, control distinction, shared edges, logical property map, order |
| references/layout/spacing-and-adaptivity.md | 158 | 1-158 (complete) | Control clearance, insets, hidden-content cues, safe areas, container queries, growth/clipping |

Provenance note (SOURCE-MANIFEST.json): color, type, layout, accessibility, UI, Copy come from jakubkrehel/skills commit 592aedc4 (better-colors, better-typography, better-layout, better-accessibility, better-ui, better-writing; Copy = better-writing, patched, SOURCE-MANIFEST.json:441-478). Entry-file selections for color/type/layout come from backnotprop/product-engineering commit 0642a584 (SOURCE-MANIFEST.json:129-136, 209-216, 265-272). Animate and apple-design are emilkowalski/skills (:479-541), mobile-native Emil Kowalski (:542-568), state-machine jakubkrehel commit 60bf140e (:569-603). Color supporting files are verbatim except contrast.md (patched, :97-105). Type supporting files are all verbatim (:164-206). Layout supporting files both patched (:244-262), plus a keyboard-clearance correction (:278). motion-ownership.md is atlas-authored (:61-68). SOURCE-MANIFEST.json:672-726 hashes files; ownership.md hash at :725.

## 2. Rules by pillar

### Color
- Never report a contrast value that was not measured; never estimate a color that could be computed. references/color/index.md:13
- Notation, tinted neutral, gradient interpolation space are project choices, not findings. Broken role mapping, failing pair, out-of-gamut step are findings. references/color/index.md:13
- Perceived lightness always means OKLCH L in 0 to 1. references/color/index.md:13
- Reuse project tokens and notation; consistent hex beats hex with scattered oklch(). New system: oklch() default. references/color/index.md:19-21
- One neutral ramp, one accent ramp, only the status ramps the product renders; a second accent hue only when two things must be distinguishable at a glance. references/color/index.md:25; references/color/palette-structure.md:9-13
- Status ramps: 0-4, add only when product shows that state; four roles (bg, border, solid, text). references/color/palette-structure.md:13,60
- Never generate a step no role consumes; never fewer neutral steps than accent steps. references/color/index.md:29; references/color/palette-structure.md:17,51
- Step-role map: solid fill 600 (Tailwind)/9 (Radix); solid hover 700/10; low-contrast text 700/11; high-contrast text 900/12; border 300/7. references/color/palette-structure.md:19-32
- Solid fill sits on 600 because white on most 500 hues fails 4.5:1; `text-white` on a 500 fill must be measured and moved to 600. references/color/palette-structure.md:41; references/color/index.md:80
- Prefer Radix role-defined model for new systems; on Tailwind keep 50-950 and map roles in semantic tier. references/color/palette-structure.md:36-39
- Two tiers: primitives (`--blue-600`) never used in components; semantics (`--color-text-secondary`) are the only tier components reference. references/color/token-naming.md:5-9; references/color/index.md:33
- Third (component) tier only for intentional divergence: one is an exception, twenty means semantic roles are missing. references/color/token-naming.md:27
- Role inventory must be complete: surfaces (page, surface, raised, sunken, overlay scrim), text (primary, secondary, disabled, inverse, on-accent), borders (subtle, default, strong, focus ring, separator), accent, status. references/color/token-naming.md:33-39
- Separator and border are separate roles even if they share a value. references/color/token-naming.md:41
- Naming grammar: `--color-{bg|text|border}-{variant}-{state}`; `--color-{accent|danger}-{subtle|border|solid|text}-{state}`. references/color/token-naming.md:45
- One word per concept: text (not fg/foreground/content/ink), bg (not background/surface/fill), border (not stroke/outline/line), accent (not primary/brand/theme). references/color/token-naming.md:58-63
- `primary` reserved for one meaning; `--color-primary` beside `--color-text-primary` is renamed accent. references/color/token-naming.md:65; references/color/index.md:69
- Ban numbered semantics (`--color-text-2`), appearance names (`--color-blue-button`, `--color-light-gray`), state-plus-hue (`--color-gray-hover`). references/color/token-naming.md:69-76
- Tailwind v4: declare tokens in @theme; dark repoints in `.dark` outside @theme without `inline`; raw `bg-blue-600` in component is flagged. references/color/token-naming.md:80-97
- Never borrow a token for a role it does not name (border as text color, text token as background). references/color/index.md:37,70; references/color/color-usage.md:21-31
- Hue held constant across ramp; HSL not perceptual; build with color library (culori, colorjs.io, chroma.js), never by eye. references/color/palette-generation.md:17-28
- Step spacing: 50-200 about 0.04-0.05 OKLCH L apart; mid-ramp 0.07-0.10; adjacent steps under 0.03 apart means drop one. references/color/palette-generation.md:22-23; references/color/index.md:72
- Ramps stop short of pure black and white; chroma peaks mid-ramp and falls at both ends. references/color/palette-generation.md:21,24
- Multi-hue: match perceived lightness exactly per step; match chroma as the same proportion of each hue's own maximum. references/color/palette-generation.md:62-67; references/color/index.md:73
- Brand color placed on the solid-fill step; pin only if contractually fixed, else snap; never quietly darken the brand (white on #3b82f6 = 3.68:1 example). references/color/palette-generation.md:9-13
- Status hue at least 15 degrees OKLCH from accent, else distinct destructive treatment (outlined button with icon). references/color/palette-structure.md:59; references/color/index.md:74
- One color, one meaning; anything within 15 degrees hue counts as same color; color must not be absent where meaning occurs. references/color/index.md:45; references/color/color-usage.md:7,19
- One filled primary action per view; color on the background not the label; selected states may use accent on glyph/label; several colored backgrounds fine for distinct states. references/color/index.md:49-51; references/color/color-usage.md:35-48
- Gradients: default `in oklab`, `in oklch` when two-hue gradient grays out; gray dead zone fixed by polar space or a third stop; banding on large areas; keep text off gradients or measure worst region/scrim. references/color/index.md:59; references/color/color-usage.md:50-81
- Culture: gain/loss colors per-locale tokens where shipping to markets that invert them. references/color/color-usage.md:83-85
- Dark mode is not the reversed ramp: lower accent chroma a step or two, widen dark-end separation, remeasure every pair. references/color/palette-generation.md:69-91; references/color/index.md:75
- One switching mechanism (prefers-color-scheme alone, or .dark class, or light-dark() with color-scheme); mixing is a finding. references/color/palette-generation.md:93-108; references/color/index.md:76
- Increased contrast: separate block per appearance; gap widens by at least 0.15 OKLCH L; remeasure aiming Lc 90 body text. references/color/color-usage.md:87-109; references/color/index.md:78
- Gamut: write sRGB value first then P3 in `@media (color-gamut: p3)`; sRGB-first ramps; P3 extra room e.g. green +0.07 chroma, blue +0.015 at L 0.65. references/color/color-formats.md:46-66; references/color/index.md:81
- Convert notation only on request, agreed migration, or straggler; leave keywords, gradient functions, third-party configs; bulk conversion is a migration. references/color/color-formats.md:25-44
- color-mix()/relative color/light-dark() resolve at render; keep generated values out of token layer; compute before reporting contrast. references/color/color-formats.md:84-90
- Fix table patterns: literal hex/rgb/oklch in components where token exists; hsl ramps differing only in lightness; one chroma number copied across hues; contrast fix that changes hue not lightness; alpha text (`/50`, rgba, color-mix transparent) must be measured or made solid. references/color/index.md:65-81; references/color/token-naming.md:99
- Palette audit: collect all literals (incl. SVG, charts, email); collapse colors within 0.02 OKLab deltaE, keep most used, never average; assign roles; report inventory before changing; consolidation stays a proposal until accepted. references/color/palette-structure.md:62-72

### Typography
- Exact (findings when missed): unitless line-height, weight 400+ below 18px, 60-75 char measure, 16px inputs on iOS, tabular-nums on changing values. references/type/index.md:17
- Heuristics (report only if breaking project scale): letter-spacing, pairing, scale ratios. Never propose a new typeface unless task asks for type change. references/type/index.md:19
- Rarely more than three fonts; fewer sizes/weights; pair for contrast, not near-identical sans pairs. references/type/index.md:23
- Weight 400+ below 18px; weights 100-300 only at 28px+ and checked against background. references/type/index.md:25,144
- Load every face used; browsers synthesize otherwise; `font-synthesis: none` only after verifying fallbacks and only the unwanted longhand. references/type/index.md:29,136; references/type/variable-fonts-and-opentype.md:12-22
- Properties over raw tags: font-weight not "wght"; font-variant-numeric not "tnum"; leave font-optical-sizing auto; raw tags only for custom axes/features without property. references/type/index.md:33-35; references/type/variable-fonts-and-opentype.md:40-89
- Type scale with semantic names (team: `text-body-sm`); each size paired with line-height and weight. references/type/index.md:39-41
- Starter scale: Display 2.25rem/1.1/600, Title 1.5rem/1.2/600, Heading 1.125rem/1.3/600, Body 1rem/1.5/400, Caption 0.8125rem/1.4/400; emphasis is one weight step up not a size change. references/type/spacing-and-sizing.md:30-38
- Headings descend with level; never smaller than body unless deliberate overline. references/type/index.md:45
- Line-height: display 1.1, headings 1.2-1.3, body 1.5-1.6, unitless; anything wrapping 3+ lines at least 1.4. references/type/index.md:49-51; references/type/spacing-and-sizing.md:50-58
- Letter-spacing: headings 24px+ get -0.01 to -0.02em; uppercase labels 14px or smaller +0.05em; body 0; use em; `font-kerning: none` never a fix. references/type/index.md:55-57
- Measure cap 60-75 characters (65ch; max-w-xl 576px, max-w-2xl 672px, max-w-prose 65ch; approx 560-680px at 16px). references/type/index.md:61; references/type/wrapping-and-punctuation.md:7
- Wrapping: balance for headings/short text only (never paragraphs, Chromium ignores past six lines); pretty for any paragraph; overflow-wrap: break-word for long words/links/IDs; nowrap for labels/badges; interface text `text-align: start`, justify only editorial. references/type/index.md:65-70,144-145
- tabular-nums for timers, counters, prices, numeric columns; prose figures proportional. references/type/index.md:74
- Truncation: single-line and line-clamp recipes (line-clamp needs `display: -webkit-box` and `-webkit-box-orient: vertical`); truncated value needs a way back (Layout owns). references/type/index.md:78-80,146
- Natural case stored, text-transform for casing; typographic punctuation (curly quotes, en dash ranges, em dash, single ellipsis char, `&nbsp;` in "10 km"); code keeps straight quotes. references/type/index.md:84-86; references/type/wrapping-and-punctuation.md:9-18
- Underlines: from-font position/thickness or hand-tuned offset; dotted for abbreviations; skip-ink: none banned. references/type/index.md:90,149; references/type/details-and-accessibility.md:5-37
- iOS input zoom: inputs under 16px zoom the page; two fixes (text-base sm:text-sm, or 16px with transform scale plus compensated width and line-height); ask which look the design wants; wrapper draws surface/outline. references/type/index.md:96-101; references/type/details-and-accessibility.md:49-71
- Size floors: long-form body starts 16px; inputs/menus start 14px; captions 13px; rarely below 12px; font-size in rem. references/type/index.md:105-107
- Font smoothing antialiased once on root, never per component. references/type/index.md:111,151
- lang and dir set; `<bdi>` for mixed-direction values; never reorder digits by hand; 3+ line paragraphs align to their own script. references/type/index.md:115; references/type/wrapping-and-punctuation.md:22-23
- text-box trim-both cap alphabetic as progressive enhancement (Chromium 133+, Safari 18.2+, no Firefox). references/type/index.md:119; references/type/spacing-and-sizing.md:60-87
- Decorative text in CSS not images; text selectable by default; `user-select: none` only on drag/gesture surface. references/type/index.md:123-129,153; references/type/details-and-accessibility.md:73-84
- Font choice: system-ui or commercial stack for a type change; woff2 on web; Display/Text optical variants matched to size. references/type/choosing-fonts.md:15-39

### Layout and hierarchy
- Numbers apply only where project has no spacing scale/density system; a finding needs a showable failure (clip, overlap, broken mirror, misread group); mere difference from starting values is not one. references/layout/index.md:13
- Group by space, then background shapes, then separator lines (only for dense data); gap between groups at least 2x within-group gap (8px inside means 16px+ between). references/layout/index.md:19; references/layout/grouping-and-alignment.md:7-30
- Separators stay low-contrast hairlines and are never paired with a large gap that already grouped. references/layout/grouping-and-alignment.md:30
- Every interactive element needs a background shape, border, underline, or consistent placement zone; non-clickable badges shaped like buttons collect dead clicks. references/layout/index.md:23; references/layout/grouping-and-alignment.md:32-43
- Pick a small set of alignment edges; one spacing step per nesting level (16px default); numbers in tables `text-align: end`, text `start`. references/layout/index.md:27; references/layout/grouping-and-alignment.md:45-60
- Logical properties for anything that mirrors; physical left/right only for physical geometry such as safe-area insets; translateX and background-position have no logical form and need `[dir="rtl"]` override. references/layout/index.md:31,84; references/layout/grouping-and-alignment.md:62-84
- Progression (stars, steppers, progress bars) mirrors in RTL; digits never reverse. references/layout/grouping-and-alignment.md:84
- Order by importance; visual order equals DOM order; never use `order`, `row-reverse` or grid placement to reorder out of source sequence. references/layout/index.md:35; references/layout/grouping-and-alignment.md:86-103
- One primary action per view; secondary behind a menu once there are more than 3; prefer short view linking deeper. references/layout/index.md:39
- Hidden content needs a visible cue: peek 16-32px past scroll edge, or disclosure control naming what is hidden ("Show 12 more results"); hover-only `title` does not count. references/layout/index.md:43-45; references/layout/spacing-and-adaptivity.md:54-83
- Peek math: item width = 100% + gap - peek. references/layout/spacing-and-adaptivity.md:60,72
- Control clearance without a density system: 12px between bordered/filled controls; 24px between visible glyphs of borderless controls (counting button padding); 24px+ between unrelated groups; compact layouts may use less if hit areas never overlap; preserve established usable density. references/layout/index.md:49; references/layout/spacing-and-adaptivity.md:5-30
- Inset full-width buttons from edges, about 16px inline on mobile, with safe-area bottom padding; edge-to-edge only with platform chrome. references/layout/index.md:53; references/layout/spacing-and-adaptivity.md:32-52
- Content bleeds, controls float; env(safe-area-inset-*) is non-zero only with `viewport-fit=cover`; physical inset pairing plus RTL override; sticky header needs `scroll-padding-block-start`. references/layout/index.md:57-59,81-85; references/layout/spacing-and-adaptivity.md:85-116
- Breakpoints from content not device presets; container queries for component adaptation, `@media (max-width)` inside reusable component is a finding; container-type: inline-size needs definite width (collapses shrink-to-fit boxes). references/layout/index.md:63,79-80; references/layout/spacing-and-adaptivity.md:118-135
- Growth: translated strings grow, short ones proportionally more; use max-width/min-height not fixed; flex-wrap rows; test pseudo-localization and German. references/layout/index.md:67; references/layout/spacing-and-adaptivity.md:137-150
- Overflow fixes: `minmax(0, 1fr)`, `min-width: 0`; `100vw` to `100%`; `100vh` to `100dvh` on full-height mobile pane but verify software keyboard separately; fixed `height:` on text box to `min-height` or `max-height` plus overflow-y:auto. references/layout/index.md:75-78; references/layout/spacing-and-adaptivity.md:148-158
- Never park a critical action where resize, zoom or scroll clips it; keep in flow or stable chrome (sticky footer with safe-area padding or top of view); modal `max-height: 100dvh` with scrolling body and action row outside scroll. references/layout/index.md:69; references/layout/spacing-and-adaptivity.md:152-156
- Software keyboard can resize visual viewport without layout viewport; dvh and safe-area padding do not guarantee clearance; verify with keyboard open. references/layout/spacing-and-adaptivity.md:158; references/layout/index.md:77

### Accessibility (as touched by these files; main body lives in references/accessibility, out of scope)
- Whether a pair must pass belongs to Accessibility; thresholds in contrast.md are what a measured pair is reported against; with no standard named, report WCAG 2 plus APCA value. references/color/index.md:15; references/color/contrast.md:5
- WCAG 2: text AA 4.5:1 / AAA 7:1; large text (24px or 18.67px bold) AA 3:1 / AAA 4.5:1; UI components and graphics AA 3:1; disabled controls and logos exempt. references/color/contrast.md:11-17
- APCA: body Lc 75 (preferred 90); non-body labels/headlines Lc 60; large text (36px regular / 24px bold) Lc 45; fine/outline icons Lc 45; solid icons/UI Lc 30; dividers Lc 15; disabled/placeholder aim Lc 30; Lc is signed, compare absolute value. references/color/contrast.md:21-34
- Never let color be the sole carrier of meaning; pair with icon/label. references/color/index.md:45
- Check every pair in every appearance; translucent surfaces against lightest and darkest content; computed colors as rendered; text over images at the worst region or with scrim. references/color/contrast.md:65-70
- Mid-lightness backgrounds cap achievable contrast: near OKLCH L 0.75 even black reaches about Lc 60. references/color/contrast.md:54
- Text polarity: WCAG 2 crossover near 56% OKLCH L; at oklch(65% 0 0) black 6.49:1, white 3.23:1; APCA and WCAG can favor different colors; measure the actual pair. references/color/contrast.md:59-63
- 200% zoom and 320px width clipping is HIGH in type and layout. references/type/index.md:157; references/layout/index.md:89
- Semantic heading structure belongs to Accessibility; hit areas/focus behavior belong to Accessibility. references/type/index.md:13; references/layout/index.md:15
- Selected `::selection` must stay legible; focus color contrast verified against surface. references/type/index.md:127; references/type/details-and-accessibility.md:69
- Increased-contrast preference supported per appearance. references/color/color-usage.md:87-109

### States/polish
- States mode only on request for workbench/`state-machine`; ordinary refinement never creates it; setup leaves product code and live data unchanged and hands over before visual edits; remove workbench only when user asks. SKILL.md:19,21
- UI Polish scope: surfaces, radius, elevation, icons, optical alignment (details in references/ui, out of my files). SKILL.md:17; references/motion-ownership.md:5
- Surfaces, shadows, icon color belong to UI Polish. references/color/index.md:15
- Within my files polish is mostly layout/typography micro-detail: text-box trim in buttons/badges, from-font underlines, optical x-height note. references/type/index.md:119; references/type/choosing-fonts.md:53

### Copy
- Copy is a mode for labels, errors, empty states, confirmations and localized strings, routed to references/copy/index.md (better-writing). SKILL.md:18
- Words belong to Copy; substantial prose belongs to Writing for Humans. references/type/index.md:13; references/layout/index.md:15; SKILL.md:25
- Disclosure labels should name content ("Show 12 more results", not "More"). references/layout/spacing-and-adaptivity.md:57
- Copy content itself is outside my assignment (references/copy/ not read).

### Motion
- Craft owns surfaces, icons, optical alignment; Animate owns decision to animate, frequency/purpose gates, properties, curves, durations, press feedback, entrances, exits, interruption; Fluid owns direct manipulation, springs, momentum, velocity handoff, gesture physics. references/motion-ownership.md:5
- Use accepted project motion tokens; a new value comes from Animate/Fluid rules and is verified against the actual interaction. references/motion-ownership.md:7
- UI Polish `0.96` press scale, fixed stagger/exit presets and blanket zero-bounce checklist yield to the motion owner; zero bounce can suit an icon cross-fade but does not prohibit momentum-driven gesture overshoot. references/motion-ownership.md:7
- Accessibility owns reduced motion, keyboard access, non-motion feedback; motion chooses compliant transition or static fallback; no visual preset excuses an accessibility failure. references/motion-ownership.md:9
- Review loading construction guidance is criteria only; Review read-only toward product code; Opportunities produces proposals only; implement when authorized; judge gesture feel in the running product; list verification gaps when runtime evidence unavailable. references/motion-ownership.md:11
- Handoffs: Review Animations / Improve Animations mean Atlas Review Motion / Motion Audit; Find Animation Opportunities means Atlas Motion Opportunities mode. references/ownership.md:5
- In type: only color of a real underline animates reliably; other underline animation needs a separate element; its motion is UI Polish's. references/type/index.md:92
- In color/layout entries: animation or gesture decisions follow Motion ownership. references/color/index.md:9; references/type/index.md:9; references/layout/index.md:9
- Example in type reference uses `transition: text-decoration-color 200ms ease-out` (a supporting example, yields to motion owner). references/type/details-and-accessibility.md:31

### UX/direction
- Choose from requested outcome/context, honoring explicit choice; ask only when ambiguity changes the method; combine domains when complementary. SKILL.md:9
- Preserve accepted identity and project foundations; a new design direction needs its own decision; load related domains only when needed. SKILL.md:23; references/ownership.md:7
- Never propose a new typeface unless task asks. references/type/index.md:19
- Match the project's color notation/system rather than imposing; hex-based project is not wrong. references/color/index.md:19; references/color/color-formats.md:14
- Neutral tint (warm/cool/none) is stylistic option held across the whole ramp. references/color/palette-structure.md:45-49
- Prefer short view that links deeper over one long view. references/layout/index.md:39
- Mobile: when task involves keyboard overlap, browser chrome, tap feedback, scroll gestures, read references/mobile-web/mobile-native.md. SKILL.md:27

## 3. Refusals, scope limits, ask-first, routing

- Do not change failing colors on a contrast finding; report pair, measured value, threshold missed, and leave colors alone until asked; remeasure after any change. references/color/index.md:55; references/color/contrast.md:36-57
- Palette consolidation is a proposal until user accepts; report inventory first. references/color/palette-structure.md:72
- Never convert an isolated value in a project that uses another notation; bulk conversion is the task not a side effect. references/color/color-formats.md:25,44
- Ask which iOS-input fix the design wants (size up vs scale). references/type/index.md:96
- A request to review is read-only; apply fixes only when user asks for refinement/implementation. SKILL.md:23
- States requires explicit request for workbench or `state-machine`. SKILL.md:21
- Whole-interface audits and change reviews belong to Atlas Review (offer Interface mode when available); substantial prose to Writing for Humans. SKILL.md:25; references/ownership.md:5
- A cross-domain reference does not authorize an entire audit or cross-discipline orchestration. references/ownership.md:3,5
- Web-interface methods only; native/Expo motion outside the composition. references/ownership.md:9
- Domain routing: color pass/fail requirement to Accessibility; surfaces/shadows/icons to UI Polish; type contrast measured in Color; hit areas/focus to Accessibility; radius/shadows/animation to UI Polish; line length/truncation mechanics to Type; truncation way-back to Layout; spatial RTL to Layout; bidi to Type. references/color/index.md:15; references/type/index.md:13,80; references/layout/index.md:15,45,84
- Do not disable font-kerning, do not use `font-synthesis: none` broadly. references/type/index.md:57,136
- Do not apply numbers where project has a spacing scale; preserve established density. references/layout/index.md:13; references/layout/spacing-and-adaptivity.md:13
- Do not add @supports oklch fallback on modern baseline (dead weight). references/color/color-formats.md:82

## 4. Process obligations

- Read Scope and ownership and the selected methods before working. SKILL.md:9
- Report browser and assistive-technology checks that could not run as verification gaps; bundled instructions do not supply missing runtime tools. SKILL.md:29; references/ownership.md:9
- States: setup hands over the workbench before visual edits; cleanup only on user request. SKILL.md:21
- Color verification: without browser check token values, gamut of each declared color, both theme blocks, contrast from declared pair; with browser measure actual rendered background (opacity, image) in light and dark; mark `Not verified` for anything skipped. references/color/index.md:89
- Type verification: declared size/weight per heading level descending per section, line-height units, measure, truncation vs realistic lengths; with browser compare computed values and resize with real content. references/type/index.md:159
- Layout verification: without browser logical props, container/media queries vs supported viewports, DOM vs visual order; with browser every supported width, 320px, 200% zoom, RTL mirror. references/layout/index.md:91
- Severity: color HIGH = unreadable content or misleading semantic color; three HIGH-on-sight triggers (failing required pair, color-only meaning, semantic color against meaning); MEDIUM theme/token/gamut; LOW polish. references/color/index.md:85-87
- Type HIGH = unreadable text, truncation with no way back, clipping at 320px or 200% zoom; MEDIUM breaks type system/heading hierarchy. references/type/index.md:157
- Layout HIGH = blocks content/action at supported viewport, 320px/200% zoom clip or overlap, truncation with no way back, hidden content with no cue; MEDIUM hierarchy/order/adaptability. references/layout/index.md:89
- Report format: group by violated principle, severity order, one row per root cause listing all locations; table columns Severity/Location/Before/After/Why; Location is `path/to/file:line`; end with `Block` if any HIGH remains else `Approve`; never Approve uninspected coverage; with nothing, state "No actionable <domain> findings" and report verification. references/color/index.md:91-98; references/type/index.md:161-168; references/layout/index.md:93-100
- Remeasure after any contrast change; do not assume the fix landed. references/color/contrast.md:57; references/color/color-usage.md:109
- Motion: judge gesture feel/interruption in running product; identify verification gaps when runtime evidence missing. references/motion-ownership.md:11
- Maintenance (Atlas repo): files are generated/managed; hashes pinned in SOURCE-MANIFEST.json:672-726 (changing managed files needs patches per manifest conventions). SOURCE-MANIFEST.json:4-55

## 5. Depth notes

- Color: Deep and numeric. It gives exact thresholds (WCAG and APCA tables, 0.04-0.05 ramp steps, 15 degrees, 0.15 L widening), a 17-row fix table, token grammar and an audit procedure. Its weakness is that it is system-building oriented; there is little on judging taste or palette direction beyond structure.
- Typography: Deep on mechanics (scale table, line-height/tracking/measure numbers, 19-row fix table, iOS zoom recipe, OpenType). Thin on aesthetic direction: pairing and scale ratios are explicitly heuristic, no guidance on expressive hierarchy, and font choice is deliberately constrained.
- Layout/hierarchy: Solid on structure, RTL, safe areas, clipping and adaptivity with concrete px values and detection patterns. Moderate on visual hierarchy beyond grouping/order (no scale of emphasis, no density guidance beyond control clearance).
- Accessibility: In these files it appears only as thresholds and cross-references; the full a11y body is in unread files.
- States/polish, Copy, Motion, UX/direction: Within my files these are routing and ownership statements only (SKILL.md, ownership.md, motion-ownership.md), not method content; motion-ownership.md is short and rulings-based with no numeric values, apart from naming the `0.96` press scale as yielding.
- Outside-scope links resolved: none were read; SKILL.md routes to references/accessibility, ui, copy, states, mobile-web, animate, fluid (not read).
