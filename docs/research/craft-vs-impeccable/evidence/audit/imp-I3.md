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
