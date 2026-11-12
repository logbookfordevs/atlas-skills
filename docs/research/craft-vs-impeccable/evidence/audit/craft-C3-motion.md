# Motion shard audit

Paths below are relative to `skills/atlas-motion/` unless otherwise stated.

## Ledger

- `SKILL.md`: 20 lines; read lines 1–20 (complete). Routes four methods and defines scope.
- `references/ownership.md`: 5 lines; read lines 1–5 (complete). Defines authorization and handoffs.
- `references/motion-ownership.md`: 11 lines; read lines 1–11 (complete). Resolves ownership and token conflicts.
- `references/animate/RECIPES.md`: 324 lines; read lines 1–324 (complete). Recipes for common transitions and gestures.
- `references/animate/animate.md`: 202 lines; read lines 1–202 (complete). Animation decision sequence and construction rules.
- `references/fluid/apple-design.md`: 290 lines; read lines 1–290 (complete). Physical gesture, accessibility and design guidance.
- `references/performance/animation-performance.md`: 214 lines; read lines 1–214 (complete). Frame budget diagnosis and reporting.
- `references/opportunities/index.md`: 135 lines; read lines 1–135 (complete). Read-only opportunity gate and report.
- `SOURCE-MANIFEST.json`: 170 lines; read lines 1–170 (complete). Provenance, patches and hashes.
- `agents/openai.yaml`: 6 lines; read lines 1–6 (complete). Invocation metadata.

## Comparison with atlas-craft

`cmp` performed on every counterpart requested. Identical: `motion-ownership.md`, `animate/RECIPES.md`, `animate/animate.md`, `fluid/apple-design.md`. `ownership.md` differs; `diff -u` shows Craft addresses domain severity, whole-interface review routing, identity and browser/screen-reader verification limits; Motion instead specifies read-only opportunities, missing Review handoff and construction authorization. The competing package was not otherwise read.

## Rules by pillar

### Motion

- Reject animation for keyboard actions and actions occurring 100+ times/day; tens/day get near-imperceptible motion or none. `references/animate/animate.md:34`
- Name feedback, spatial consistency, state indication, jarring-change prevention, explanation, or delight; explanation is marketing/onboarding only and delight rare/first-time only. `references/animate/animate.md:47`
- Do not move data users read or act on for decoration. `references/animate/animate.md:60`
- Extend existing motion tokens; do not create parallel easing or duration systems. `references/animate/animate.md:27`
- Prefer CSS transitions for controlled state, `@starting-style` for entry, WAAPI for programmatic control, and springs for gestures; choose cheapest adequate tool. `references/animate/animate.md:62`
- Prefer transform and opacity; allow measured accordion height and recipe clip-path exceptions; never enter from `scale(0)`, use 0.9–0.97 plus opacity. `references/animate/animate.md:78`
- Anchor popover/menu/tooltip origins to trigger; centered modals are exempt. `references/animate/animate.md:82`
- Use ease-out for entry/exit, ease-in-out for on-screen movement, linear for constant progress; never ease-in UI. `references/animate/animate.md:93`
- Press 100–160ms, tooltip 125–200ms, dropdown 150–250ms, modal/drawer 200–500ms; general UI budget under 300ms. The 200–500ms range and 400ms toast recipe create an explicit tension with the general budget. `references/animate/animate.md:117`; `references/animate/RECIPES.md:126`
- Use transitions for rapidly retriggered states; exit along entry path; hold confirmation uses 2s linear and 200ms release. `references/animate/animate.md:138`
- Stagger occasional group entrances 30–80ms without blocking interaction. `references/opportunities/index.md:89`
- Respond on pointer-down, track drags 1:1 preserving grab offset, and capture pointer. `references/fluid/apple-design.md:28`; `references/fluid/apple-design.md:44`
- Never lock input during transitions; restart at current presentation value and retain velocity through retargets. `references/fluid/apple-design.md:61`
- Start physical springs at damping 1.0; use approximately 0.8 for momentum, with response 0.3–0.4s for listed interactions. `references/fluid/apple-design.md:79`
- Project release velocity to select nearest snap point using deceleration approximately 0.998, then pass release velocity to spring. `references/fluid/apple-design.md:108`
- Use progressive rubber-band resistance and approximately 10px gesture hysteresis. `references/fluid/apple-design.md:153`
- Default to transform/opacity; preserve flow, hit targets, focus and legibility when swapping layout properties. `references/performance/animation-performance.md:68`
- Budget 16.7ms at 60fps and approximately 8ms at 120Hz; profile actual driver and browser acceleration rather than assume. `references/performance/animation-performance.md:47`; `references/performance/animation-performance.md:96`
- Avoid React state updates or inherited parent CSS variables each frame; write the target transform directly. `references/performance/animation-performance.md:119`; `references/performance/animation-performance.md:134`
- Keep animated blur under 20px; add `will-change` only for observed shifts or measured dropped frames, on the small animated element. `references/performance/animation-performance.md:150`

### Accessibility

- Ship reduced-motion handling with animation; replace slides, springs and parallax with short opacity crossfades or static states, removing overshoot. `references/animate/animate.md:145`; `references/fluid/apple-design.md:207`
- Gate hover motion with `(hover: hover) and (pointer: fine)`. `references/animate/animate.md:154`
- Honor reduced transparency with opaque backgrounds and no blur; for increased contrast use near-solid backgrounds with contrasting border. `references/fluid/apple-design.md:211`
- Avoid full-viewport moving backgrounds, slow oscillation around 0.2Hz, and abrupt brightness jumps. `references/fluid/apple-design.md:215`
- Preserve keyboard access and non-motion feedback; visual presets cannot excuse accessibility failures. `references/motion-ownership.md:9`
- Scale layout with user text size using rem/em spacing. `references/fluid/apple-design.md:233`

### UX / direction

- Show feedback on pointer-down and continuously during drag; commit taps on release with cancel-by-dragging-away support. `references/fluid/apple-design.md:32`; `references/fluid/apple-design.md:166`
- Minimize gesture disambiguation delay and only incur double-tap delay where double-tap exists. `references/fluid/apple-design.md:168`
- Synchronize visual, sound and haptic feedback on the same frame and reserve sound/haptics for meaningful events. `references/fluid/apple-design.md:199`
- Provide undo for slips and reserve confirmations for genuinely destructive irreversible actions. `references/fluid/apple-design.md:252`
- Each screen should reveal location, available destinations, content and exit; never trap the user. `references/fluid/apple-design.md:263`

### Typography, layout, states and copy

- Use size-specific tracking: tighter on display headings, body near zero; leading tighter for large headings and looser for body. `references/fluid/apple-design.md:230`
- Build type hierarchy with weight, size and leading; default to system font unless there is a reason otherwise. `references/fluid/apple-design.md:232`
- Avoid stacking light translucent surfaces; use heavier material to separate structural regions. `references/fluid/apple-design.md:183`
- Modal tasks use a dimming scrim; nonblocking parallel panels use separation without scrim. `references/fluid/apple-design.md:186`
- Place controls near what they affect and arrange them to mirror the controlled object. `references/fluid/apple-design.md:264`
- Confirm meaningful actions, expose ongoing status, warn before problems and validate inline. `references/fluid/apple-design.md:262`
- Prefer specific navigation labels to generic umbrellas. `references/fluid/apple-design.md:265`

## Scope, refusals and routing

- Performance reports first and fixes only on request; Opportunities does not change product code. Discovery or review alone does not authorize implementation. `SKILL.md:18`; `references/ownership.md:5`
- Existing motion audits and diff reviews route to Atlas Review; React Native/Expo construction is outside this package. `SKILL.md:20`
- Ask only when ambiguity changes the selected method; honor explicit choice. `SKILL.md:9`
- If Review is unavailable, provide the proposal and identify the handoff gap. `references/ownership.md:3`

## Process obligations

- Choose method, load ownership and selected references, and run frequency and purpose gates before construction. `SKILL.md:9`; `references/animate/animate.md:24`
- If a component is needed, find a suitable library via existing libraries, search or user consultation before animation work. `references/animate/animate.md:76`
- Discovery maps stack, tokens and frequency, sweeps every seam, gates candidates, and reports at most 5–7 suggestions plus 2–5 rejected candidates. `references/opportunities/index.md:19`; `references/opportunities/index.md:100`; `references/opportunities/index.md:120`
- Diagnose animation properties, driver and causes before proposing fixes; record on a real mid-range phone and distinguish code findings from missing device evidence. `references/performance/animation-performance.md:174`; `references/performance/animation-performance.md:200`
- Feel-check gesture interruption in the running product; slow to 2–5× or inspect frame-by-frame, test gestures on a real device, and state gaps. `references/motion-ownership.md:11`; `references/animate/animate.md:190`

## Depth notes

Motion is deep: decision gates, timings, gesture physics, recipes and performance diagnostics are specified, though some example durations conflict with the stated general limit. Accessibility provides clear reduced-motion and media-query direction but delegates broader keyboard and non-motion requirements. UX, typography, layout, states and copy appear as supporting design principles rather than comprehensive standalone audits.
