# Creative Room landing: refinement notes

Paths below are relative to `/Users/leonardo/Codes/projects/logbook-atlas/skills/`. Line numbers come from `cat -n`.

## (a) Skill files read

- `atlas-craft/SKILL.md`
- `atlas-craft/references/ownership.md`, `atlas-craft/references/motion-ownership.md`
- Color: `color/index.md`, `color/contrast.md`, `color/color-usage.md`, `color/token-naming.md`, `color/palette-structure.md`
- Type: `type/index.md`, `type/spacing-and-sizing.md`, `type/wrapping-and-punctuation.md`, `type/details-and-accessibility.md`, `type/variable-fonts-and-opentype.md`, `type/choosing-fonts.md`
- Layout: `layout/index.md`, `layout/grouping-and-alignment.md`, `layout/spacing-and-adaptivity.md`
- Accessibility: `accessibility/index.md`, `accessibility/focus-and-keyboard.md`, `accessibility/forms.md`, `accessibility/semantics-and-aria.md`, `accessibility/screen-readers.md`, `accessibility/hit-areas.md`, `accessibility/motion-and-zoom.md`
- UI polish: `ui/index.md`, `ui/surfaces.md`, `ui/icons.md`, `ui/enter-exit.md`, `ui/animations.md`
- Copy: `copy/index.md`, `copy/patterns.md`
- Mobile web: `mobile-web/mobile-native.md`
- `atlas-motion/SKILL.md`, `atlas-motion/references/ownership.md`, `atlas-motion/references/motion-ownership.md` (the same as Craft's copy), `atlas-motion/references/animate/animate.md` and `animate/RECIPES.md` (Button press, Stagger, Scroll reveal and Programmatic sections). Craft's `animate/` copies are byte-identical to these (checked with `diff`).
- Project inputs: `CONTEXT.md` and `DESIGN.md` in the run folder.

Not read, because nothing routed to them: `states/*` (see c), `fluid/apple-design.md` (no gestures), `performance/animation-performance.md` (I was not asked to diagnose stutter), `opportunities/index.md` (read-only discovery, and the request was to fix motion), `ui/icon-transitions.md`, `ui/performance.md`, `color/palette-generation.md` and `color/color-formats.md` (I reused the project palette, so no ramps were generated or converted).

## (b) Changes and the rules behind them

### Color
| Change | Rule |
| --- | --- |
| Put DESIGN.md colors in place as `:root` primitives, with semantic role tokens (`--color-text-secondary`, `--color-bg-surface`, `--color-focus-ring` and so on) that the components use. Removed the stray literals `#000`, `#6b645a`, `#8a8278`, `#4a443d` and `#9b5cff`. | `color/index.md` L17–21 (reuse the project's tokens), L31–33 (primitives and semantics), L65 (no literal where a token exists); `color/token-naming.md` L5–25 |
| Removed the violet and pink gradient headline, the violet "NEW!!" badge, the violet CTA ring and the gradient emoji tiles. The headline is now Screen White. | DESIGN.md "Samples Carry the Colour Rule". `color/index.md` L25 says a second accent hue has to earn its place, and L43–45 says one color, one meaning. `color/color-usage.md` L81 says to keep text off gradients. |
| Moved brass off the wordmark, nav links, section headings, the CTA fill and the quote's left border. Brass now marks only focus, the caret and text selection. | DESIGN.md "One Brass Rule" and Don'ts. `color/color-usage.md` L5–19 (one color, one meaning). |
| The primary action is now Screen White on Wall, and the secondary is outlined and neutral. | `color/index.md` L47–51 (one filled action per view); DESIGN.md Buttons |
| Fixed text that failed contrast. I measured each pair with a WCAG 2 script: hero and card copy `#6b645a` on `#14120f` was 3.20:1, and the footer `#4a443d` was 1.95:1. Both fail 4.5:1. They are now Dim House `#aba397`: 7.49:1 on wall, 7.08:1 on panel and 6.95:1 on velvet. | `color/index.md` L53–55 (measure the rendered pair; the user asked for the color fix); `color/contrast.md` L36–40 (change lightness, hold hue); `accessibility/index.md` L77–80 |
| Checked the focus ring: brass is 8.09:1 on wall, 7.64:1 on panel and 7.49:1 on velvet, all at least 3:1. | `accessibility/index.md` L33; `accessibility/focus-and-keyboard.md` L31 |
| Text selection uses brass at 38% (`color-mix`). | DESIGN.md Primary; `type/index.md` L127 |

### Typography
| Change | Rule |
| --- | --- |
| Kept Geist and Geist Mono and loaded only the weights in use (400–700, mono 400–500). Applied `ss01` and `cv11` globally. | `type/index.md` L19 (no new typeface), L27–29 (load the faces you use), L35 (raw tags only for features with no property); DESIGN.md Typography |
| Removed the italic on the quote. Geist ships no italic, so the browser was synthesizing it. | `type/index.md` L27–29 |
| Body went from 15px at line-height 1.3 to `0.9375rem` at 1.625. The process list went from 13px at 1.3 to body size and leading. | `type/index.md` L47–51 (line-height by role, at least 1.4 for wrapping text), L105–107 (sizes in rem, floors); DESIGN.md body |
| The hero headline went from 800 weight, line-height 1.5 and +0.04em tracking to 520 weight, 1.04 and −0.025em, with `text-wrap: balance` and an 18ch cap. h2s use the DESIGN display step. | `type/index.md` L47–55, L65; DESIGN.md Display |
| Set up a role-named type scale (`--text-label` through `--text-hero`). The heading levels are now h1 → h2 → h3, and each descends in size. | `type/index.md` L37–45; `type/spacing-and-sizing.md` L14–46 |
| Removed the uppercase brass `h4` section headings. Headings are now sentence case and neutral. | `type/index.md` L84; DESIGN.md Don'ts (no small uppercase eyebrow) |
| Capped the lead and step text at 58–60ch. The hero paragraph had `max-width: none`. | `type/index.md` L59–61; `type/wrapping-and-punctuation.md` L5–7 |
| Fixed punctuation: the `...` became `…`, and straight quotes became curly quotes and apostrophes. | `type/index.md` L86, L148 |
| Counts and file paths (`46`, `brief.md`, `renders/`, the commands) are set in Geist Mono with tabular numerals. Labels and headings stay sans. | DESIGN.md "Mono Is Data Rule"; `type/index.md` L72–74 |
| Applied font smoothing once on the root. | `type/index.md` L109–111 |
| Added `lang="en"`. | `type/index.md` L113–115 |

### Layout
| Change | Rule |
| --- | --- |
| The fixed `width: 1180px` container is now a fluid shell (`max-width`, with 20px and 40px gutters from DESIGN). The page reflows at 320px with no horizontal scroll (measured: scrollWidth 320 = clientWidth 320). | `layout/index.md` L65–69, L89 (clipping at 320 is HIGH); `accessibility/motion-and-zoom.md` L46 |
| The reel was an `overflow: hidden` flex row. It cut off the fifth image with no cue. It is now a grid with a lead frame spanning 2×2 and four 16:10 frames, collapsing to 2 columns and then 1. | `layout/index.md` L41–45 (hint at hidden content), L61–63 (breakpoints from content) |
| Header, sections and footer now share one leading edge. Before, the header and footer were inset 13px and the content by its own margin. | `layout/index.md` L25–27; `layout/grouping-and-alignment.md` L45–60 |
| Section spacing is one token. The ad hoc 64, 90, 110, 80 and 100px gaps are gone. Spacing inside a group is now at least 2× tighter than between groups. | `layout/index.md` L17–19 |
| The sticky velvet band sets `scroll-padding-block-start`, so anchor jumps land below it. | `layout/index.md` L55–59, L85; `accessibility/focus-and-keyboard.md` L37–39 |
| The nav uses `gap` and logical properties instead of `margin-left`. It scrolls horizontally with a faded end on narrow screens, matching the step rail in DESIGN. | `layout/index.md` L29–31, L41–43 |
| Grid tracks use `minmax(0, 1fr)`, and the principle cards use `auto-fit` with a `min()` floor. | `layout/index.md` L75 |
| The hero has one filled primary action and one secondary. | `layout/index.md` L37–39 |

### Accessibility
| Change | Rule |
| --- | --- |
| Removed `*:focus { outline: none }`. Focus now shows a 2px brass ring on `:focus-visible`. | `accessibility/index.md` L29–33, L115 |
| The `<span onclick>` nav items and `<div onclick>` buttons are now `<a href>` links. | `accessibility/index.md` L21–23, L116; `accessibility/semantics-and-aria.md` L14–30 |
| Added landmarks (`header`, `nav aria-label="Primary"`, `main`, `footer`), a skip link as the first tab stop (verified) and a real heading outline. | `accessibility/index.md` L103–105; `focus-and-keyboard.md` L41–64; `semantics-and-aria.md` L34–39 |
| Gave all five images descriptive alt text; before, none had an `alt` attribute. Added `width`/`height` and lazy loading. | `accessibility/index.md` L99–101, L122; `screen-readers.md` L67–79 |
| Added the viewport meta, with no zoom lock. | `accessibility/index.md` L107–109 |
| Interactive targets are at least 40px tall, and the buttons are 44px. Verified that no target is under 24px. | `accessibility/index.md` L49–51; `hit-areas.md` |
| The copy buttons keep their visible label "Copy" at the start of a unique name ("Copy pnpm desk:start"). Results are announced through a `role="status"` region that is present from page load. Icons are `aria-hidden`. | `accessibility/index.md` L67–69, L93–97; `semantics-and-aria.md` L41–47; `screen-readers.md` L39–59 |
| Removed the infinite CTA pulse. It moved on its own indefinitely with no pause control. | `accessibility/index.md` L89–91; `motion-and-zoom.md` L38 |
| Movement is opt-in under `prefers-reduced-motion: no-preference`. With reduced motion, the entrance is an opacity fade only. | `accessibility/index.md` L85–87; `motion-and-zoom.md` L5–34 |

### UI polish
| Change | Rule |
| --- | --- |
| Cards went from black with 8px corners and a heavy `rgba(0,0,0,.9)` shadow to tonal Booth Panel surfaces with 16px corners and 24px padding. Shadows now appear only on the floating band, using DESIGN's band-drop shadow. | `ui/index.md` L19, L31–33; DESIGN.md Elevation and panel-card |
| Sample frames: replaced the 3px black border and 12px corners with 10px corners and a 1px Seam ring. Frames are dimmed at rest (brightness 0.74, saturate 0.85) and lit on hover. | DESIGN.md "Sample Frames". This deliberately follows the project's Seam ring rather than the generic white 10% outline in `ui/surfaces.md` L141–166. `ui/index.md` L19 says to keep the project's tokens. |
| The emoji icons are now inline Lucide SVG line icons drawn with `currentColor` at stroke 1.75, and 2 on the primary button. | `ui/index.md` L51–57; `ui/icons.md` L29–40, L74–79; DESIGN.md Icons |
| Radii come from DESIGN tokens: pills for buttons, 12px for wells, 16px for cards, 10px for frames. Card padding is 24px, so nested surfaces keep their own radius tokens. | `ui/index.md` L23–25 |
| The primary button's icon side has 2px less padding. | `ui/index.md` L27–29; `ui/surfaces.md` L49–64 |
| Removed the card hover, which moved `top` and `width` with a 1.2s overshoot. The cards are not interactive, so a hover lift invited clicks that did nothing. | `layout/grouping-and-alignment.md` L43; `atlas-motion/.../animate.md` L80, L184 |

### Copy
| Change | Rule |
| --- | --- |
| Rewrote the hero ("Unleash Your Creativity With AI-Powered Video", "revolutionary… artificial intelligence"). It contradicted the product facts: CONTEXT says video is rendered from code with no text-to-video. The new copy uses CONTEXT's own voice and facts. | `copy/index.md` L13, L143 (misleading copy is HIGH), L17–29 (inventory and keep one voice) |
| Replaced the three false feature cards ("Blazing Fast", "AI Magic", "hundreds of templates", plus a non-link "Click here") with true ones: rendered from code, the optional Desk and 46 skills. | `copy/index.md` L62–66, L129, L143 |
| The process steps keep CONTEXT's wording. I trimmed the rambling first step and added the `renders/`, `qa/` and `final/` facts. | `copy/index.md` L46–48 (delete every word that does no work) |
| Buttons and links now start with a verb and name their destination: "Start the Desk", "See the work", "Copy". "Get Started" and "Learn More" are gone. | `copy/index.md` L56–66 |
| Applied sentence case to every heading, button and nav label. | `copy/index.md` L68–70 |
| Removed the footer's "All rights reserved. Made with ❤️ and AI." It is a private repo, and "AI" contradicted the product. Used CONTEXT's own line: "Private repo. This is a mood, not a license." | `copy/index.md` L13, L143 |
| Copy-button status copy follows the patterns: "Copied pnpm desk:start". On failure it reads "Couldn't copy. … is selected, so copy it with your keyboard." It does not say "oops" or "successfully". | `copy/patterns.md` L17–27; `copy/index.md` L78–88 |

### States
- Primary button: hover goes to 90% opacity, press scales to 0.97, and focus shows the brass ring.
- Secondary button: hover turns the border Tarnished Brass.
- Nav links: hover adds a Raised Seat fill.
- Frames: dim at rest, lit on hover. On touch devices they stay lit, because they can never be hovered.
- Copy button: Copy, then Copied with a check, then back to Copy after 2s. On failure the label reads Selected and the command text is selected.
- All hover styles are gated to `(hover: hover) and (pointer: fine)`.
- Sources: DESIGN.md Buttons and Sample Frames; `animate.md` L145–157, L186; `mobile-web/mobile-native.md` L28.

### Motion (Atlas Motion, Animate mode)
| Change | Rule |
| --- | --- |
| Removed the CTA `pulse` (infinite, 0.9s, scale 1.12). It fails the purpose gate and the accessibility timer rule. | `animate.md` L47–58; `accessibility/index.md` L89–91 |
| Removed the scroll-triggered `.fade` reveals (80px rise, `transition: all` over 1.2s with an overshooting bezier). Content stayed at opacity 0 until IntersectionObserver fired. The full-page "before" screenshot shows every section below the reel blank. | `animate.md` L19 (not animating is a success), L176–188 (`transition: all` and >300ms with no reason); `ui/enter-exit.md` L44 (hidden state belongs in the `from` keyframe) |
| Kept one hero entrance. This is the rare, first-visit tier, and its purpose is delight. Four groups stagger in at 80ms over 500ms on the project's projector ease, rising 12px. The hidden state lives only in the `from` keyframe, and reduced motion gets an opacity-only fade. | `animate.md` L36–41 (frequency), L56 (delight), L28 (extend the project's tokens: DESIGN's projector ease `cubic-bezier(0.16, 1, 0.3, 1)` is used, not a parallel `--ease-out`), L188 (30–80ms stagger); RECIPES "Stagger a group entrance"; `ui/enter-exit.md` L42–71 |
| Button press uses `transform: scale(0.97)` over 160ms, a CSS transition so it can be interrupted. It stays on under reduced motion as functional feedback. | RECIPES "Button press"; `motion-ownership.md` (UI Polish's 0.96 yields to the motion owner); `motion-and-zoom.md` L34 |
| Frame light uses `filter` over 450ms on the projector ease, following DESIGN.md's hover spec. Hover color transitions use 150ms `ease`. Every transition names its properties, with no `transition: all`. | DESIGN.md Sample Frames; `animate.md` L97–101, L176 |

### Mobile web
- Added `theme-color` set to the velvet band and `color-scheme: dark`. Source: `mobile-web/mobile-native.md` L74–83.

## (c) Declined, deferred or routed elsewhere

- **The email sign-up ("Stay In The Loop!") was removed, which is the question I could not ask.** It had no label, no type, no endpoint and an `alert('Thanks!')` that faked success. The "Get Started" button likewise showed `alert('Coming soon!')`. CONTEXT describes a private repo, and nothing in it mentions a mailing list. Thanking someone for an email that goes nowhere is misleading copy (`copy/index.md` L143). `atlas-craft/SKILL.md` says to ask only when ambiguity changes the method, and whether this page should collect emails does. The section is replaced with a truthful Getting started block using the real commands from CONTEXT.
  - **Unasked question:** "Should this page collect emails or contact requests? If so, which endpoint should it post to?"
  - If the answer is yes, the form should be rebuilt per `accessibility/forms.md` L5–77: a `<label>`, `type="email"`, `autocomplete="email"`, validation on submit with an inline `aria-describedby` error, a pending state that keeps its label, and a polite status message.
  - The nav item "Contact" became "Get started" for the same reason.
- **No workbench for states.** `atlas-craft/SKILL.md` (the States row and the paragraph after it) says ordinary refinement does not create one. I treated the request's "states" as interaction states and refined them in place.
- **Scroll reveals were not rebuilt.** RECIPES allows them on marketing surfaces, but they hide content the reader came for and fail the purpose gate (`animate.md` L58). This is a judgment call, so it can be revisited.
- **No full audit or review report.** Whole-interface audits and existing-motion audits belong to Atlas Review (`atlas-craft/SKILL.md`; `atlas-motion/SKILL.md`). Those were not invoked; this was a refinement.
- **Opportunities, Fluid and Performance were not run**: there is no discovery request, no gesture and no reported stutter (`atlas-motion/SKILL.md` table).
- **Image outlines use DESIGN's Seam ring**, not the generic white 10% outline (`ui/surfaces.md` L141–166). Project identity wins (`ui/index.md` L19; `ownership.md`).
- **No new typeface** was introduced (`type/index.md` L19).
- **Landing-specific values that extend DESIGN.md:** `--text-hero`, a 1180px reading shell instead of the Desk's 1520px shell, and 112/144px section spacing. These are landing-page extensions of the Desk system, not replacements. Ideally the owner should accept them into DESIGN.md.
- **Reel captions are left off.** I could not tell from CONTEXT which creation each still belongs to, so the alt text describes what is visible and makes no attribution.

## (d) Verification and gaps

**Checked** with `agent-browser`, session `craft-landing`:
- Full-page screenshots at 1440×900 (before and after) and at 320×720.
- No horizontal overflow at 320px or at 1440px.
- Geist and Geist Mono loaded (`document.fonts.check` returned true for both).
- Every `<img>` has an `alt`.
- The heading outline is h1 → h2 → h3.
- The first Tab stop is the skip link, the next is the wordmark, and focus shows a solid brass outline.
- Every link and button is at least 24px tall.
- Clicking a Copy button showed "Copied" and the status region read "Copied pnpm desk:start".
- WCAG 2 contrast ratios were computed from the declared token pairs (script at `scratchpad/craft-shots/contrast.js`), all listed in (b).

**Not verified:**
- No screen-reader pass with VoiceOver or NVDA.
- No automated audit such as axe.
- No 200% text-zoom check.
- Reduced motion was not emulated in the browser, only checked in code.
- Forced-colors mode was not tested.
- The clipboard failure path was not triggered.
- No RTL mirror check.
- No check on a real phone, so touch hover, the keyboard and the browser chrome colors are unverified (`mobile-web/mobile-native.md` L87–97).
- The motion feel was not replayed at 10% speed in DevTools.
- No APCA values were computed.
