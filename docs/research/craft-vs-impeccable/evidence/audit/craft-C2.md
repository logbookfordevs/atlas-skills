# Craft C2 audit

## Ledger

- `agents/openai.yaml` — 6 lines; read lines 1–6 (complete). Agent metadata.
- `references/accessibility/focus-and-keyboard.md` — 143 lines; read lines 1–143 (complete). Focus, keyboard patterns and route changes.
- `references/accessibility/forms.md` — 77 lines; read lines 1–77 (complete). Labels, validation and form submission.
- `references/accessibility/hit-areas.md` — 93 lines; read lines 1–93 (complete). Target sizing and gesture alternatives.
- `references/accessibility/index.md` — 142 lines; read lines 1–142 (complete). Accessibility overview.
- `references/accessibility/motion-and-zoom.md` — 48 lines; read lines 1–48 (complete). Reduced motion, timers and reflow.
- `references/accessibility/screen-readers.md` — 99 lines; read lines 1–99 (complete). Announcements, alt text and media.
- `references/accessibility/semantics-and-aria.md` — 81 lines; read lines 1–81 (complete). Native semantics, names and disabled controls.
- `references/copy/index.md` — 154 lines; read lines 1–154 (complete). Interface writing overview.
- `references/copy/patterns.md` — 56 lines; read lines 1–56 (complete). Destructive and status copy, localization.
- `references/mobile-web/mobile-native.md` — 97 lines; read lines 1–97 (complete). Mobile browser viewport, input and scrolling.
- `references/states/state-machine.md` — 90 lines; read lines 1–90 (complete). State workbench workflow.
- `references/states/switcher.md` — 204 lines; read lines 1–204 (complete). Workbench switcher behavior and layout.
- `references/ui/animations.md` — 170 lines; read lines 1–170 (complete). Transition and reduced-motion recipes.
- `references/ui/enter-exit.md` — 157 lines; read lines 1–157 (complete). Entrance and exit recipes.
- `references/ui/icon-transitions.md` — 72 lines; read lines 1–72 (complete). Icon swap techniques.
- `references/ui/icons.md` — 105 lines; read lines 1–105 (complete). Icon sizing, state and RTL.
- `references/ui/index.md` — 83 lines; read lines 1–83 (complete). Surface and polish overview.
- `references/ui/performance.md` — 63 lines; read lines 1–63 (complete). Transition and compositing guidance.
- `references/ui/surfaces.md` — 166 lines; read lines 1–166 (complete). Radius, alignment, shadow and outline recipes.
- `licenses/animate.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/apple-design.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/better-accessibility.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/better-colors.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/better-layout.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/better-typography.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/better-ui.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/better-writing.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/mobile-native.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.
- `licenses/state-machine.txt` — 21 lines; read lines 1–6 (header only, as assigned); lines 7–21 not read. MIT license and copyright header.

## Rules by pillar

### Color
- Normal text requires 4.5:1; large text at 24px or 18.67px bold requires 3:1; UI boundaries and meaningful graphics require 3:1. `references/accessibility/index.md:77`
- Pair status color with text, icon or underline. `references/accessibility/index.md:71`
- Custom focus rings require 3:1 against every adjacent color crossed. `references/accessibility/index.md:33`
- Content images use a 1px inset outline, pure black at 10% in light mode or pure white at 10% in dark; skip transparent artwork. `references/ui/index.md:37`
- Browser theme color should match the page surface and follow the app theme; reconcile PWA manifest colors with launch. `references/mobile-web/mobile-native.md:76`

### Typography
- Use the existing copy casing policy per element, defaulting to sentence case when absent. `references/copy/index.md:68`
- Text survives 200% resize; do not restrict viewport zoom. `references/accessibility/index.md:107`
- Inline icons measure 1em–1.25em of adjacent type. `references/ui/icons.md:29`
- Use 1.5px rendered strokes beside 400-weight 14–16px type, 2px beside 500–600, 2.5px beside 700. `references/ui/icons.md:5`
- Switcher chrome uses a system font and not project fonts. `references/states/switcher.md:5`

### Layout/hierarchy
- Prevent focus from being entirely hidden under sticky chrome by padding the scroller by its height. `references/accessibility/focus-and-keyboard.md:37`
- Reflow at 320px without page-level horizontal scrolling; genuinely two-dimensional content can scroll inside its own container. `references/accessibility/motion-and-zoom.md:43`
- Use `100dvh` for toolbar-responsive app surfaces and `100svh` for a stable first screen. `references/mobile-web/mobile-native.md:53`
- Switch the state workbench to a select above the component when the side list cannot fit; breakpoint equals component width plus 232px. `references/states/switcher.md:62`
- Outer radius equals inner radius plus padding and border; above 24px padding or for asymmetric inset treat as separate surfaces. `references/ui/index.md:23`

### Accessibility
- Use native buttons for actions and links for navigation; avoid clickable divs. `references/accessibility/semantics-and-aria.md:14`
- Do not use positive tabindex; composites use one 0 and remaining -1, or `aria-activedescendant` for an input-focused combobox. `references/accessibility/focus-and-keyboard.md:66`
- Open modal focus inside, trap it, and restore it to the trigger; custom dialogs require an accessible name, `aria-modal` and inert background. `references/accessibility/focus-and-keyboard.md:93`
- AA target size is 24×24 CSS px subject to exceptions; do not overlap expanded hit areas. `references/accessibility/hit-areas.md:5`
- Every drag or multipoint gesture has a single-pointer alternative. `references/accessibility/hit-areas.md:89`
- Label each input, mark invalid fields and link inline errors; focus the first invalid field after submission. `references/accessibility/forms.md:5`
- Use a stable empty polite live region for recurring updates; do not move focus to a toast. `references/accessibility/screen-readers.md:46`
- Decorative images have empty alt; functional image alt states its action; charts need a fuller text or table alternative. `references/accessibility/screen-readers.md:67`
- Motion lasting over 5 seconds needs a visible pause or stop control; action or error toasts persist until dismissed. `references/accessibility/motion-and-zoom.md:36`

### States/polish
- List only branches the component can actually reach; record missing designed states without adding a branch. `references/states/state-machine.md:19`
- Use the real component and production layout and theme, with product-shaped fixtures through props or the app data seam. `references/states/state-machine.md:33`
- Hold loading fixtures pending until the switcher changes and isolate fixtures from live mutations. `references/states/state-machine.md:50`
- Switcher state lives in `__state`; arrow keys traverse groups and H toggles chrome, excluding editing and modified key events. `references/states/switcher.md:18`
- Keep borders for input boundaries and structural separators; retain a 1px transparent border beneath shadow rings for forced colors. `references/ui/index.md:31`
- Use one icon library per surface, `currentColor`, outline for default and fill for selected state. `references/ui/icons.md:29`

### Copy
- Inventory surrounding strings, terms, capitalization and voice before writing; retain one term for each object and action. `references/copy/index.md:17`
- Buttons start with an action verb; links name destinations rather than saying 'Click here'. `references/copy/index.md:56`
- Errors state what failed and the next step; show known requirements before input. `references/copy/index.md:78`
- Prefer undo for frequent reversible actions; confirm irreversible, bulk or other-people-affecting actions with consequence and verb-object buttons. `references/copy/index.md:90`
- Empty states explain the content and offer one next action; filtered empties name the query and offer an exit. `references/copy/index.md:103`
- Keep messages whole with locale plural rules and format numbers, dates and lists using the user's locale. `references/copy/index.md:52`

### Motion
- The shared Motion ownership ruling overrides conflicting upstream motion presets. `references/ui/index.md:8`
- Use transitions for reversible hover, toggle, open and close; keyframes suit one-time sequences. `references/ui/animations.md:5`
- Under reduced motion replace movement and scale with opacity; stop parallax and autoplay. `references/accessibility/index.md:85`
- Transition named properties rather than `all`; do not preemptively add `will-change`. `references/ui/performance.md:5`
- Never add a dependency solely for icon swaps; use the installed motion library or CSS. `references/ui/icon-transitions.md:5`
- Use native activation with immediate press feedback, preserving cancellation until release. `references/mobile-web/mobile-native.md:39`

### UX/direction
- Keep the established component library, tokens, density and coherent deliberate visual conventions. `references/ui/index.md:15`
- Preserve content selection and native long-press unless a custom gesture demonstrably conflicts. `references/mobile-web/mobile-native.md:22`
- Contain overscroll in inner overlays when needed; do not reset root overscroll without demonstrated app-shell conflict. `references/mobile-web/mobile-native.md:61`
- A focused control must remain visible with the software keyboard open; `dvh` alone is not proof. `references/mobile-web/mobile-native.md:53`
- Mirror directional icons in RTL but not logos, physical objects or media playback; use only one flip mechanism. `references/ui/icons.md:81`

## Refusals, scope and routing
- Workbench covers one component; list choices and ask when the request spans components. Ask before adding a component seam; leave unreachable states out. `references/states/state-machine.md:13` `references/states/state-machine.md:43`
- Workbench is not a review or design-alternative request; do not visually change or delete it until the user asks. `references/states/state-machine.md:11` `references/states/state-machine.md:64`
- Mobile Web excludes React Native and review remains read-only. `references/mobile-web/mobile-native.md:8`
- Route contrast fixes to Color, typography to Type, and animation decisions to the shared Motion owner. `references/accessibility/index.md:15` `references/ui/index.md:41`
- Report failed color pairs and criteria; leave colors unchanged unless asked. `references/accessibility/index.md:83`

## Process obligations
- For accessibility review, walk keyboard and screen-reader flows; cite WCAG A/AA or a concrete blocked task and distinguish recommendations from failures. `references/accessibility/index.md:13` `references/accessibility/index.md:17`
- Verify accessible names, focus, keyboard and forms; browser checks include accessibility tree and automated audit; label unrun checks Not verified. `references/accessibility/index.md:131`
- Inventory copy and locales first; check each label, error and term; report unseen CMS or server strings as Not verified. `references/copy/index.md:17` `references/copy/index.md:141`
- Inspect every defined UI state; when browser available replay motion at 10% speed; report unrun checks. `references/ui/index.md:70`
- Load every workbench state and ensure fixtures show; recheck all states after visual changes. On user-directed removal search route and fixture names and check the diff. `references/states/state-machine.md:58`
- Verify mobile on a supported phone, keyboard open and landscape, plus standalone when applicable; distinguish emulation from device evidence and report gaps. `references/mobile-web/mobile-native.md:87`

## Depth notes
- **Color:** contrast thresholds and surface-specific colors are concrete; comprehensive palette selection is routed elsewhere.
- **Typography:** limited to accessibility, copy conventions and icon relationships; typography technique belongs to Type.
- **Layout/hierarchy:** mobile viewport, zoom and switcher rules are specific, while general layout ownership is elsewhere.
- **Accessibility:** extensive coverage spans semantics, focus, forms, announcements, gestures, zoom and reporting.
- **States/polish:** detailed workbench mechanics and surface/icon prescriptions; state coverage is limited to existing code branches.
- **Copy:** substantial treatment of voice, errors, destructive actions, empty states and localization.
- **Motion:** recipes are detailed, but shared motion ownership explicitly overrides their conflicting numeric examples.
- **UX/direction:** focused on preserving product conventions and mobile interaction behaviors, rather than an end-to-end design strategy.
