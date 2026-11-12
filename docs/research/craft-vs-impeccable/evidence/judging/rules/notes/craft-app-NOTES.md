# Piece Overview refinement: notes

Skills root: `/Users/leonardo/Codes/projects/logbook-atlas/skills/`. Below, `craft/` means `atlas-craft/` and `motion/` means `atlas-motion/`. A citation is the file path, then the section, then line numbers.

## (a) Skill files read

- `craft/SKILL.md`, `motion/SKILL.md`
- `craft/references/ownership.md`, `craft/references/motion-ownership.md`
- `motion/references/ownership.md`, `motion/references/motion-ownership.md` (identical to craft's), `motion/references/animate/animate.md` and `motion/references/animate/RECIPES.md` (both identical to craft's copies, checked with `diff`)
- Color: `craft/references/color/index.md`, `color/contrast.md`, `color/color-usage.md`
- Type: `craft/references/type/index.md`, `type/spacing-and-sizing.md`, `type/wrapping-and-punctuation.md`, `type/details-and-accessibility.md`
- Layout: `craft/references/layout/index.md`, `layout/grouping-and-alignment.md`, `layout/spacing-and-adaptivity.md`
- Accessibility: `craft/references/accessibility/index.md`, `accessibility/focus-and-keyboard.md`, `accessibility/semantics-and-aria.md`, `accessibility/screen-readers.md`, `accessibility/motion-and-zoom.md`, `accessibility/hit-areas.md`, `accessibility/forms.md`
- UI polish: `craft/references/ui/index.md`, `ui/surfaces.md`, `ui/icons.md`, `ui/animations.md`, and the first 60 lines of `ui/enter-exit.md`
- Copy: `craft/references/copy/index.md`, `copy/patterns.md`
- States: `craft/references/states/state-machine.md`, `states/switcher.md`. I read these to decide how to treat the bench, then declined to apply them (see (c)).
- Project context: `PRODUCT.md`, `DESIGN.md`

## (b) Changes, each with the rule behind it

### Color
1. **Saturated green and red removed from the chrome.** These were on the claim pills, the room dots, the feedback dots and the Delete button (`#19c37d`, `#ff3b3b`, `#ff0000`). State now uses lines, words and brass instead.
   - Rules: DESIGN.md, "The Samples Carry the Colour Rule". `craft/references/color/index.md`, "One color, one meaning" (l.43–45), and the Reporting section, which treats a semantic colour used against its meaning as HIGH (l.87).
2. **Status no longer relies on colour alone.**
   - Stage line: solid segments mean a claim is on file and dashed segments mean it is open, with the label "Rendered 2/5".
   - Feedback rows carry the words "In review" with a dot, or "Done" with a check.
   - Asks shows "2 need you" with a dot.
   - Rules: `accessibility/index.md`, "Pair color with a second cue" (l.71–73, WCAG 1.4.1). DESIGN.md, line-form state ("solid is answered, dashed is open").
3. **Brass is now only for "here" and "waits on you".** It marks the current tab underline, the focus ring, the Asks count and the "In review" status.
   - Removed: the brass section headings and the three brass-filled buttons.
   - Rules: DESIGN.md, "The One Brass Rule". `color/index.md`, "Fill exactly one action per view" (l.47–51).
4. **One filled action per view.** In ready and empty, it is "Send ask" (Screen White, the primary button from DESIGN.md). "Open in Finder" is secondary and "Delete piece" is a ghost button. In error, it is "Try again".
   - Rules: `color/index.md` l.47–49. `color/color-usage.md`, "One colored action per view" (l.35–48). `layout/index.md`, "One primary action per view" (l.37–39).
5. **Failing text pair fixed.** Meta and blurb text used `#6b645a`, which measured 3.20:1 on wall and 3.03:1 on panel against a 4.5:1 requirement. It is now Dim House: 7.49:1 on wall, 7.08:1 on panel.
   - Rules: `color/contrast.md` thresholds (l.11–15). `accessibility/index.md` l.77–83. The user asked for colour fixes, which satisfies "Fix a failing pair only on request" (`contrast.md` l.36).
6. **Input boundary fixed.** The input edge used Seam, which measured 1.32:1 on panel against the 3:1 non-text minimum. It now uses `--field-edge` → `--faint`: 5.34:1 on panel and 5.65:1 on wall.
   - Rules: `ui/index.md` l.33 (inputs keep a 3:1 border). `accessibility/index.md` l.81 (1.4.11). `color/index.md`, "If a role has no token, add the token" (l.37).
7. **Role tokens added.** `--focus-ring`, `--field-edge`, `--image-outline` and `--ease-projector` were added. All colour literals now live in `:root`, except the bench.
   - Rule: `color/index.md`, "Before you finish", first row (l.65).

### Typography
8. **Geist for language, Geist Mono for data.** The whole page was set in Geist Mono. Mono now covers only paths, sizes, counts, durations and the ⌘K key.
   - Rule: DESIGN.md, "The Mono Is Data Rule".
9. **Hierarchy follows DESIGN.md roles.**
   - h1 uses Display: 520 weight, `clamp(34px, 3.1vw, 46px)`, line-height 1.06, −0.025em, balanced wrap. It replaces 800-weight text forced with `text-transform: capitalize`.
   - h2 uses Title: 15px, 560, sentence case.
   - Body is 15px at 1.625, small text is 13px, labels are 12px.
   - Rules: `type/index.md`, "Use a type scale" (l.37–41), "Heading sizes descend" (l.43–45), "Line-height by role" (l.47–51) and "Measured, not preferred" (l.15–19). The 11px blurb fell below the size floors (l.103–107).
10. **Sizes moved to rem, letter-spacing to em, line-heights made unitless.** Root font smoothing was added and `font-variant-numeric: tabular-nums` was applied to mono data.
    - Rule: `type/index.md`, "Before you finish" (l.139–151).
11. **Variable weights loaded.** Geist and Geist Mono now load the variable `wght@100..900` range, so 520 and 560 render from real faces instead of being synthesised.
    - Rule: `type/index.md`, "Load the faces the design uses" (l.27–29).
12. **Copy stored in its real case.** "Fruit Dreams" is stored as written, with no `text-transform`.
    - Rule: `type/index.md`, "Natural case" (l.82–84).
13. **Typographic punctuation.** "Loading..." became "Loading…", curly apostrophes are used, and non-breaking spaces sit inside "72 BPM", "18.4 MB" and "30 s".
    - Rules: `type/index.md` l.86 and l.148. `type/wrapping-and-punctuation.md`, smart punctuation (l.9–18).
14. **Measure and wrapping.**
    - The blurb is capped at 64ch with `text-wrap: pretty`.
    - Paths break after slashes using `<wbr>`, a change made after the 390px render showed `f0120.p|ng`.
    - Labels and badges use `nowrap`.
    - Rule: `type/index.md`, "Cap the measure" and "Wrap deliberately" (l.59–70).
15. **Input text at 16px below 640px.** Above that it stays at the 15px body size.
    - Rule: `type/index.md`, "Inputs at 16px on mobile" (l.94–101). This rule says to ask which fix to use; see the unasked questions.

### Layout and hierarchy
16. **Shell and spacing follow DESIGN.md.** The shell has a 1520px max width with 20px page padding, 40px from 1024px. The stage starts 48px below the band, 64px on wide screens, and sections are 32px apart. These replace the ad-hoc 26/15/7/14/22px values.
    - Rules: `layout/index.md` l.13 (use the project's spacing tokens). `layout/index.md`, "Align to shared edges" (l.25–27).
17. **Fixed grid replaced.** The room grid was `repeat(4, 240px)`. It is now `repeat(auto-fit, minmax(min(100%, 150px), 1fr))`, and the two columns use `minmax(0, …)` and stack below 960px.
    - Rules: `layout/index.md` "Before you finish", first row (l.75). "Hold structure until it breaks" (l.61–63). 320px reflow is required by `accessibility/index.md` l.107–109.
18. **Order by importance.** Title comes first, then the hand-off, then the stage line and path, with actions trailing. Rooms come next, then renders, then feedback and the ask form as separate panels. The Ask form was previously jammed under feedback.
    - Rules: `layout/index.md`, "Order by importance" (l.33–35). "Group with space, not lines" (l.17–19).
19. **Nested box with an equal radius removed.** Inside each room card, a 16px-radius box sat in a 16px-radius card. Row separators were replaced by spacing and a hover surface.
    - Rules: `ui/index.md`, "Outer radius equals inner radius plus padding" (l.23–25). `layout/grouping-and-alignment.md` l.5–30.
20. **Band rebuilt to the DESIGN.md "Shell and Rooms" spec.**
    - Left: the product name "Creative Room" plus a dim "Desk", linking to the Lobby.
    - Middle: the piece name and the room tabs, with a brass underline on the current tab and a brass mono count on Asks.
    - Right: the ⌘K pill and the Tablet button.
    - The band is sticky at 95% velvet with a backdrop blur and uses the "Band drop" shadow.
    - Below 1024px the tabs scroll horizontally with a faded edge.
    - Rules: DESIGN.md, "Shell and Rooms" and "Navigation". `layout/index.md`, "Hint at hidden content" (l.41–45), for the faded tab edge.
21. **Sticky band cannot hide content.** `scroll-padding-block-start` is set to the band height.
    - Rules: `layout/index.md` l.59 and l.85. `accessibility/index.md` l.35 (2.4.11).

### Accessibility
22. **Focus ring restored.** `*:focus { outline: none }` was removed and replaced with a global `:focus-visible` ring: 2px Brass with a 2px offset. Brass measured 8.09:1 on wall, 7.64:1 on panel and 7.49:1 on velvet. The bench got its own ring.
    - Rules: `accessibility/index.md`, "Visible focus rings" (l.29–33). `focus-and-keyboard.md` l.5–22.
23. **`alert()`-driven fake controls replaced with native elements.**
    - Clickable `<div>`/`<span>` elements became `<button>` for actions and `<a href>` for room cards, render rows, checkpoint rows and tabs.
    - The emoji icons became inline Lucide SVGs with `aria-hidden`. Icon-only buttons have names: "Pair a tablet", and "Jump to" stays in the accessible name when the label is visually hidden on narrow screens.
    - Rules: `accessibility/index.md`, "Native elements first" (l.21–23) and "Accessible names everywhere" (l.67–69). `semantics-and-aria.md` l.14–30.
24. **Landmarks and structure.**
    - A skip link is the first focusable element. The bench markup moved after the content so the skip link comes first in tab order; the bench still works the same way.
    - There is one `<main id="main">`, the rooms `<nav>` is labelled, sections are labelled, and `lang="en"` is set.
    - `<title>` reads "Overview · Fruit Dreams · Desk".
    - Rules: `accessibility/index.md`, "Structure is navigation" (l.103–105). `semantics-and-aria.md` l.34–39. `type/index.md` l.113–115.
25. **Ask form behaviour.**
    - The field has a visible `<label for>` and a hint linked through `aria-describedby`.
    - The form validates on submit. An empty field gets `aria-invalid` and an inline error with an icon, and focus returns to the field.
    - Success is announced through a `role="status"` region that is rendered from the start.
    - Rules: `accessibility/index.md`, "Label and type every control" (l.57–61), "Errors that announce" (l.63–65) and "Announce dynamic content" (l.93–97). `forms.md` l.22–42 and l.72–76.
26. **Loading is announced.** `<main>` gets `aria-busy` and a polite "Loading Fruit Dreams…" is announced. The skeleton is marked `aria-hidden`. The error panel uses `role="alert"`.
    - Rule: `screen-readers.md`, "Choosing how to announce a change" (l.30–37) and the loading note at l.61.
27. **Delete confirmation is a native modal.** It uses `<dialog>` opened with `showModal()`. Focus lands on Cancel, Escape closes it, and focus returns to "Delete piece".
    - Rules: `accessibility/index.md`, "Trap and restore focus" (l.43–45). `focus-and-keyboard.md` l.117–120, which says to focus the least destructive action.
28. **Hit areas.** Buttons are at least 40px tall, the input at least 44px, tabs and icon buttons 36px, and chips 32px. All exceed the 24px minimum.
    - Rule: `accessibility/index.md`, "Minimum hit area" (l.49–51).
29. **Thumbnails are decorative.** They use `alt=""` because the file path beside them names them.
    - Rule: `screen-readers.md`, "Alt text" table (l.73).

### UI polish
30. **Thumbnails follow the DESIGN.md sample-frame look.** They are 16:10, dimmed at rest (brightness 0.74, saturate 0.85) and lit on row hover or focus. Each has a 1px white outline at 10% opacity, inset.
    - Rules: DESIGN.md, "Sample Frames". `ui/index.md`, "Outline images in pure black or white" (l.37–39). `ui/surfaces.md` l.141–166.
31. **Icons use `currentColor`.** One library (Lucide) is used throughout, at stroke 1.75, and 2 on the primary button. This follows DESIGN.md "Buttons → Icons". Icon-side padding is 2px less than the text side.
    - Rules: `ui/index.md`, "One SVG, recolored per state" (l.55–57). `ui/surfaces.md`, "Optical alignment" (l.49–64).
32. **Empty states use dashed Seam outlines** in the shape of what they stand in for: the empty panel and the open stage segments.
    - Rule: DESIGN.md, "Shapes" (empty states).

### Copy
33. **Product vocabulary and sentence case throughout.**

    | Before | After |
    | --- | --- |
    | "Open In Finder" | "Open in Finder" |
    | "Checkpoint Feedback" | "Checkpoint feedback" |
    | "Ask An Agent" | "Ask an agent" |
    | "In Progress" | "In review" |
    | "Submit" | "Send ask" |
    | "Delete" | "Delete piece" |

    "In review" is PRODUCT.md's term for a checkpoint page awaiting feedback.
    - Rules: `copy/index.md`, "One voice, one vocabulary" (l.27–31), "One capitalization policy" (l.68–70), "Verb-first buttons" (l.56–58) and "Inventory the existing strings first" (l.17–25), using PRODUCT.md as the inventory.
34. **"Initiate Render Pipeline" removed as a header button.** It became an "Ask for a new render" chip that pre-fills the ask field. PRODUCT.md says the Desk never runs a skill or a model, and that agents do the work through asks. The old label misled on both counts.
    - Rule: `copy/index.md` Reporting, where copy that misleads is HIGH (l.143).
35. **Placeholder shows an example.** "Type your request here..." became "Find three references for the balloon's lift".
    - Rule: `copy/index.md`, "Placeholders show an example" (l.121–123).
36. **Empty state points forward.** "No Data" became "Nothing in this piece yet", followed by what will appear and where it comes from, links into the rooms, and the ask form as the next action.
    - Rule: `copy/index.md`, "Empty states point forward" (l.103–117).
37. **Error says what failed and what to do.** The raw ENOENT text in red was replaced with:
    - what failed: the Desk couldn't read `desk/board.json` in `creations/fruit-dreams`;
    - reassurance that nothing in the piece was changed;
    - the next step: check the file, then try again;
    - "Try again" and "Open in Finder" buttons, with the raw error kept in a collapsed "Error details". The stray "(undefined)" was dropped.
    - Rules: `copy/index.md`, "Errors say how to fix" (l.78–88). `copy/patterns.md`, status copy "Failed" (l.23). Copy Reporting, where an error with no recovery is HIGH (l.143).
38. **Delete is now confirmed.** Before, one click deleted the piece with no confirmation. The dialog is titled "Delete Fruit Dreams?". Its body names the path and what is lost and says it can't be undone. The buttons are "Cancel" and "Delete piece".
    - Rules: `copy/index.md`, "Undo beats confirmation" (l.90–99). `copy/patterns.md`, "Destructive flows" (l.7–13). Copy Reporting, where a destructive action with neither confirmation nor undo is HIGH (l.143).
39. **Loading copy follows the in-progress pattern:** "Loading Fruit Dreams…".
    - Rule: `copy/patterns.md` l.21.

### Motion
I worked through Animate's build sequence for each item (`animate.md`, "The Build Sequence", l.32–164).

40. **Render list entrance removed.** Rows slid in from `translateX(200px)` with an overshooting `cubic-bezier(.68,-.55,.27,1.55)` and a 300ms-per-row stagger, roughly 1.5s in total.
    - Gate: a piece's Overview is opened tens of times a day.
    - Purpose: none; it moved data the user is reading, for style only.
    - Result: no animation.
    - Rules: `animate.md` §1 (l.34–45) and §2 (l.47–60, "data the user is reading … should not move for style"). The never-ship table also bans UI durations over 300ms (l.181).
41. **Hover scale removed, plus `transition: all`.** Buttons and room cards scaled to 1.1 on hover with `transition: all .4s`.
    - Hover is now a 150ms `ease` change of colour, background or border, gated by `@media (hover: hover) and (pointer: fine)`.
    - Rules: `animate.md` §5, hover uses `ease` (l.101). Never Ship: "`transition: all`" (l.176) and "Ungated `:hover` motion" (l.186). `ui/animations.md`, "High-frequency motion" (l.138–151).
42. **Press feedback added.** Pressing a button, chip or the ⌘K pill scales it to 0.97 over 160ms on the project's projector ease, `cubic-bezier(0.16, 1, 0.3, 1)`.
    - It only applies under `prefers-reduced-motion: no-preference` and never to `aria-disabled` buttons.
    - Rules: `RECIPES.md`, "Button press" (l.9–25). `animate.md`, Hard Rule 3 (l.28): extend the codebase's tokens, which is why the projector ease is used instead of Animate's `--ease-out`. `motion-ownership.md` l.7, where the 0.97 press and the project token take precedence over UI Polish's 0.96 preset. `ui/index.md` l.66, which excludes disabled controls.
43. **Spinner replaced.** The full-screen 60px spinner turned every 0.3s and covered the band. It is now a 14px inline spinner turning once a second on `linear`, beside text, while the band stays visible and a static skeleton holds the room's shape.
    - Rules: `animate.md` §5, constant motion uses `linear` (l.102). `accessibility/motion-and-zoom.md`, where loading spinners are kept under reduced motion (l.32).
44. **Delete dialog animates as a modal.** Opacity plus `scale(0.96 → 1)` over 250ms on the projector ease, using `@starting-style` and `transition-behavior: allow-discrete`. The backdrop fades with it. Under reduced motion only opacity changes.
    - Gate: the dialog is occasional, and its purpose is preventing a jarring change.
    - Rules: `RECIPES.md`, "Modal" (l.80–103). `animate.md` §3, `@starting-style` (l.69). `animate.md` §7 (l.145–164). `accessibility/index.md`, "Honor prefers-reduced-motion" (l.85–87).
45. **Thumbnail hover kept at DESIGN.md's 450ms filter transition on the projector ease.** This is an accepted identity value.
    - Rules: `motion-ownership.md` l.7 ("Use the project's accepted tokens and coherent motion language"). `motion/SKILL.md` ("Preserve project motion tokens and accepted visual identity"). See (c) for the tension.
46. **State switches render instantly, with no transition between states.**
    - Rule: `animate.md` §1. The bench is a high-frequency control.

## (c) Declined, deferred or routed elsewhere

- **The bench is functionally untouched.** It still uses `data-s`, `aria-pressed` and `?state=`, as requested. I did not rebuild it to the `switcher.md` spec, with `__state`, a grouped list and arrow and H keys.
  - Why: `craft/SKILL.md` says "States requires a request for that workbench … ordinary refinement does not create it". Two changes only: its markup moved to the end of `<body>` so the product's skip link comes first, and it gained a focus ring.
  - Its colour `#8fb7c9` equals DESIGN.md's Test Bench Blue token. `switcher.md` l.7 says a switcher must not look native to the product. I left this alone and am noting it.
- **Atlas Motion Opportunities was not run.** The request was to fix existing motion, which is construction under Animate. Opportunities is read-only discovery (`motion/SKILL.md`; `motion/references/ownership.md` l.3).
- **Fluid and Performance were not used.** There are no gestures and no reported stutter (`motion/SKILL.md` table).
- **Mobile Web reference not loaded.** It applies only to mobile browser behaviour such as the keyboard or browser chrome (`craft/SKILL.md`). PRODUCT.md makes the desktop view the design target.
- **No full audit.** A whole-interface audit belongs to Atlas Review (`craft/SKILL.md`; `ownership.md` l.5). I applied the domain fixes only.
- **450ms thumbnail hover kept** even though `animate.md` l.127/181 says UI animations stay under 300ms. DESIGN.md specifies it, and motion ownership defers to accepted project tokens (`motion-ownership.md` l.7). It is a filter transition, not movement.
- **Settings gear removed from the band.** It only fired `alert('settings')`, and settings is not a capability in PRODUCT.md. DESIGN.md lists the right side of the band as agent dot, ⌘K and Close Desk.
  - I did not add the agent dot or Close Desk, because their states are unknown in this stand-in, and inventing them would be a new direction (`craft/SKILL.md`: "a new design direction needs its own decision").
- **Destructive button is not coloured red.** `color/index.md` l.74 allows "a distinct treatment" for destructive actions, but DESIGN.md forbids saturated chrome. The distinct treatment is the trash icon, the explicit verb-plus-object label, and the confirmation step.
- **Icon stroke kept at DESIGN.md's 1.75 and 2.** `ui/icons.md` gives absolute stroke widths. The project convention wins per `ui/index.md` l.19.

### Questions I could not ask (non-interactive)
1. **Should Delete be reversible?** For example, moving the piece to the Trash with an Undo. And what exactly does it delete: the whole piece folder, or only `desk/`? `copy/index.md` l.90–92 prefers undo when an action is reversible. I implemented confirm-before-delete, the safe choice when reversibility is unknown, and wrote the dialog body assuming the whole piece folder is deleted.
2. **Should a missing `desk/board.json` fail the whole Overview?** PRODUCT.md says every room is optional and that deleting `desk/` never breaks a piece. That suggests only the Board card should degrade. I kept the page-level error state that the bench defines and noted the tension here.
3. **Which iOS 16px input fix?** `type/index.md` l.96–99 says to ask between sizing up on mobile and scaling the input. I chose sizing up below 640px.
4. **Is "Ask for a new render" the right replacement for "Initiate Render Pipeline"?** It routes the action through asks, consistent with PRODUCT.md, but it is a product-flow change that wants Leonardo's confirmation.

## (d) Verification

**Done** (agent-browser, session `craft-app`; screenshots in `../../shots-craft-app/before` and `/after`):
- Rendered ready, empty, loading and error at 1440×900, before and after. All four load via `?state=` and via bench clicks. `location.search` and `aria-pressed` stayed in sync, and Try again moved to loading with `aria-busy="true"`.
- Checked 390px and 320px for ready and error. `scrollWidth` equals `innerWidth`, so there is no horizontal scroll. Path wrapping was fixed after the first 390px pass.
- Keyboard: the first Tab lands on "Skip to content", and the visible brass focus ring was confirmed on a room card.
- Ask form: submitting it empty set `aria-invalid="true"`, showed the inline error and kept focus on the input.
- Delete dialog: it opened with focus on Cancel. Escape closed it and returned focus to "Delete piece", and the piece was not deleted.
- Contrast: WCAG 2 ratios were computed from the declared token hexes on opaque surfaces with `contrast.mjs`. The results are listed in (b) 5, 6 and 22.
- No console errors were captured by `agent-browser errors`.

**Gaps (Not verified):**
- Screen-reader output: no VoiceOver or NVDA run. The live-region and `role="alert"` announcements are unconfirmed (`screen-readers.md` l.49).
- No automated accessibility audit (axe) was run.
- The `prefers-reduced-motion: reduce` rendering was not emulated. It was checked from CSS only.
- Motion feel was not replayed at slow speed in DevTools: the dialog, the press feedback and the spinner.
- Contrast was not measured on translucent surfaces as rendered. Text on the 95% velvet band was computed against solid velvet, not against content scrolling beneath it.
- Forced-colors mode was not checked.
- 200% browser text zoom was not checked.
- RTL mirroring was not checked.
- Hover states were not captured in screenshots.
- Google Fonts loading was assumed from the rendered result.
