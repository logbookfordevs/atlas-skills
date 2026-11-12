# Notes: Piece Overview refinement (impeccable)

Skill base: `/Users/leonardo/.claude/skills/impeccable` (abbreviated `IMP/` below).

## (a) Skill files read

- `IMP/SKILL.md` (Setup, How to design, Modes, Commands and Routing)
- `IMP/scripts/impeccable context --target index.html` was run once. It printed PRODUCT.md and the directives, and told me to read DESIGN.md in full. No surface brief was found.
- `IMP/reference/polish.md`: the playbook for this request. It is a refinement across every quality axis (SKILL.md Routing: "explicit or clearly implied request").
- `IMP/reference/craft-floor.md`, read just before editing, as SKILL.md Setup step 3 requires.
- `IMP/reference/operate.md`: Operate-mode depth. SKILL.md Modes links it. The surface is app UI.
- `IMP/reference/mode-operate.md`: read for Operate context. It covers new-work comps, so it was not applied directly.
- `IMP/reference/clarify.md`, `IMP/reference/harden.md` and `IMP/reference/animate.md`: the request names copy, states and motion, and polish.md §4 covers those axes. I read them for the specifics.
- Project context: `PRODUCT.md` and `DESIGN.md` in the working directory.
- `impeccable critique-storage latest index.html --json` exited 2, so no prior critique existed. That step comes from polish.md §2 (lines 29–35).

## (b) Changes and the rule behind each

Mode is **Operate** (SKILL.md "Modes"). This is a **refinement**, so the Screening Room identity is kept (SKILL.md "How to design": "Refinement preserves").

### Color
| Change | Rule |
|---|---|
| Removed every saturated hue on the chrome: green/red claim pills, red Delete, `#ff0000` error text, and green/red status dots. | DESIGN.md "Samples Carry the Colour Rule"; polish.md §1 (drift class "conceptual mismatch") and §4 "Color" ("semantic tokens and stable color meanings") |
| Brass is no longer a button fill or a section-heading colour. It now marks only what waits on Leonardo: "2 need you" on Asks, "In review" checkpoint status and the focus ring. | DESIGN.md "One Brass Rule"; operate.md "Color" ("Accent … state indicators only, not decoration") |
| Replaced `#6b645a` secondary text, which measures about 3.2:1 on wall, with Dim House `#aba397`, about 7.6:1. | craft-floor.md "Verify › Contrast" (≥4.5:1) |
| The primary button is now the Screen White pill. Others are secondary Seam pills, plus a ghost Delete. | DESIGN.md "Components › Buttons"; operate.md "Components" (consistent affordances) |
| Themed the selection (brass at 38%), the caret and `color-scheme`. | craft-floor.md "Verify › Browser surfaces"; DESIGN.md Usher's Brass |

### Typography
| Change | Rule |
|---|---|
| The whole page was set in Geist Mono. Now it is Geist sans, and mono is kept only for paths, sizes, counts and the slug. | DESIGN.md "Mono Is Data Rule"; craft-floor.md "Refuse › Monospace as a costume" |
| h1 went from 800 weight with `capitalize` to the Display token: 520, clamp(34–46px), -0.025em, balanced wrap. | DESIGN.md Typography "Display". Brief wins over operate.md's fixed-scale advice (SKILL.md "The brief wins") |
| Section headings were 11px uppercase tracked in brass. They are now 15px/560 headings with a mono count, like the aside header. | craft-floor.md "Refuse › kicker or eyebrow" (ban); DESIGN.md Don't "reuse the aside's small uppercase group heading as an eyebrow" and Skills Aside "Header" |
| Body text is 15/1.625 and the lede measure is held to 64ch. Button labels are sentence case ("Open in Finder"). | DESIGN.md "Body"; craft-floor.md "Verify › Type" (measure); polish.md §4 "Content" (capitalization consistency) |

### Layout and hierarchy
| Change | Rule |
|---|---|
| The shell is max 1520px with a 20/40px gutter and a 48/64px stage top, replacing the ad hoc 26/15px padding. | DESIGN.md "Layout" and spacing tokens; polish.md §4 "Layout and type" (align to the spacing scale) |
| The five claim pills became the system's **stage line**: five segments, solid where a claim is on file and dashed where it is open, labelled with the furthest claim ("Rendered · 2 of 5 stages on file"). | polish.md §1 "one-off implementation → shared pattern"; DESIGN.md "Shell and Rooms › Lobby" and "line-form state" |
| Room tiles had nested cards (`.room > .inner`), fixed 4×240px columns and colour dots. They are now flat 12px-radius links in a fluid 4-up grid (2-up on mobile), with Seam rings and a brass count only where something waits. | craft-floor.md "Refuse › nested cards are always wrong"; operate.md "Layout" (structural responsiveness) |
| Renders and Feedback were boxed panels. They are now open sections divided by Seam hairlines. Only "Ask an agent" stays on a Booth Panel card (16px, 24px padding). | craft-floor.md "Refuse › Cards are the lazy container"; DESIGN.md "Elevation" (tonal) and `panel-card` |
| The newest render leads as a 16:10-family sample frame: dimmed at rest, lit on hover over 450ms on the projector ease, with a contained colour spill (blur 30px, sat 1.5, 38%). Older renders are rows. | DESIGN.md "Sample Frames" and "Projected Light Rule" (contained beside text); PRODUCT.md "The work leads"; craft-floor.md closing line ("spend the page on the committed world") |
| The band follows DESIGN's band: "Creative Room Desk" links to the Lobby, a breadcrumb runs to the piece, then ⌘K "Jump to", Tablet and Settings. It is sticky, at 95% velvet with blur and the band drop shadow. | DESIGN.md "Navigation › Velvet band", "Shadow Vocabulary › Band drop"; PRODUCT.md "⌘K", "Tablet … band's Tablet button" |
| Below 760px, actions wrap under the title, band labels collapse to icons and rooms go 2-up. Below 1024px the columns stack. | polish.md §4 "Verify every supported viewport"; PRODUCT.md ("Narrow screens must work") |

### Accessibility
| Change | Rule |
|---|---|
| Removed `*:focus { outline: none }` and added a global brass `:focus-visible` ring. | polish.md §4 "Interaction and state" (visible keyboard focus); DESIGN.md (Brass is the focus ring) |
| Clickable `div`/`span` elements became `<a>`/`<button>`. The emoji icons (🔍📱⚙️) became Lucide-style SVGs at stroke 1.75, and icon-only Settings got an `aria-label`. | craft-floor.md "Refuse › Unicode glyphs or emoji standing in for an icon system"; DESIGN.md "Icons"; clarify.md "Help" (icon-only controls need accessible names) |
| Added `lang`, the viewport meta, `<header>`/`<main>`/`<nav aria-label>`, `aria-current`, and section `aria-labelledby`. | polish.md §5 (semantics and screen-reader names); harden.md "Accessibility Resilience" |
| Status no longer relies on colour alone: each status has a word and a line mark ("In review" dashed brass, "Done" solid). The stage line has a text label. | clarify.md "Voice, accessibility" ("Do not rely on … color … alone"); harden.md "High contrast mode" |
| Images have `width`/`height` (no layout shift). The lead render has descriptive alt text; thumbnails use `alt=""` because the path names them beside it. | polish.md §4 "Color, imagery, and icons" (layout shift, useful alt); clarify.md (empty alt for decoration) |
| The ask input has a persistent `<label>`. The placeholder became an example, and validation is inline with `aria-invalid` and a live note. | clarify.md "Forms" (placeholders are examples, not labels; errors announced accessibly) |
| The bench moved to the end of the DOM, so keyboard focus starts in the product. | polish.md §4 (logical tab order) |

### States
| State | Change | Rule |
|---|---|---|
| Loading | The full-screen 0.3s spinner hid the band. It is now a layout-matched skeleton under the intact band, with `aria-busy` and an sr-only label. A visible line names the real operation: "Reading creations/fruit-dreams/desk/…". The sweep is slow and stops under reduced motion. | operate.md "Components" ("Skeleton states for loading, not spinners"); clarify.md "Loading" (name the real operation) |
| Empty | "No Data" became a first-use state that teaches. It says every room is optional and the chat still works. All stage segments are dashed ("Not started"). Rooms and renders use dashed Seam frames ("No cards yet", "No renders yet"), and Ask stays available as the next action. | operate.md ("Empty states that teach the interface"); clarify.md "empty state … next useful action"; DESIGN.md "Empty states use dashed Seam borders in the same shape"; PRODUCT.md "Never ceremony" |
| Error | A raw red ENOENT string, including "(undefined)", became an alert panel. It says what failed, that the piece is unaffected, and how to recover: Try again (re-reads, then returns), Open the Board, Open in Finder. The raw error sits behind "Technical details". The band stays usable. | clarify.md "Errors" (what, why, recovery; no internal codes as primary); harden.md "Error Handling" (retry); harden.md Avoid "Block entire interface" |
| Delete | It was one red click that wiped the page, with no confirmation. Now it is a ghost button that opens an inline confirmation naming the object and consequence ("Delete Fruit dreams? This removes creations/fruit-dreams/ from the workspace."), with "Keep piece" / "Delete piece". Focus is managed. | polish.md §3 priority 1 ("data loss"); clarify.md "destructive actions … name the object and consequence … not Yes/No"; craft-floor.md "Refuse › A modal for a task that needs neither…" (inline, not modal) |
| Feedback | `alert()` stand-ins became a quiet `role=status` toast. | operate.md "Product constraints" (modal as first thought) |

### Copy
| Change | Rule |
|---|---|
| "Initiate Render Pipeline" became **"Ask for a render"**. It focuses the Ask field and prefills "Render a new draft of the full loop". | PRODUCT.md Positioning ("The Desk never runs a skill or a model itself"); clarify.md "Actions" (specific verb plus object). Deviation recorded in (c) |
| "Submit" became "Send ask". The placeholder "Type your request here..." became "e.g. Three stills of the lemon balloon at dusk". Added a hint saying where the ask is saved. | clarify.md "Actions" / "Forms"; PRODUCT.md "Files are the contract" |
| "In Progress" became "In review", PRODUCT's own feedback vocabulary. "Checkpoint Feedback" and "Open In Finder" are now sentence case. | clarify.md "inconsistent terminology and capitalization"; PRODUCT.md "In progress" statuses (done, in review, not opened) |
| The page title "Desk" became "Fruit dreams · Desk". The piece title shows as "Fruit dreams" (sentence case) instead of CSS `capitalize`. | polish.md §4 "Content" |

### Motion
| Change | Rule |
|---|---|
| Removed the hover `scale(1.1)` on buttons and rooms, `transition: all .4s`, and the bouncy (`cubic-bezier(.68,-.55,.27,1.55)`) 200px slide-in staggered at 300ms per render row. | operate.md "Motion" ("No orchestrated page-load sequences", 150–250ms); animate.md "Timing" ("do not use bounce or elastic curves by reflex") |
| Kept motion that conveys state: 160ms colour and border transitions, the projector-ease 450ms lighting of samples on hover (the authored moment, from DESIGN), a 220ms opacity settle on state change from an already-visible 0.4, and the toast rise. | animate.md "Find the job"; craft-floor.md "Verify › Motion" ("one authored moment… from an already-visible default"); DESIGN.md "Sample Frames › Hover" |
| Added a `prefers-reduced-motion` path. It stops the skeleton sweep and state settle and zeroes filter transitions, but colour feedback stays. | animate.md "Accessibility and control" |

### Bench
The bench switcher keeps its look, `aria-pressed` states and `?state=` sync. It now also handles unknown `?state=` values by falling back to ready.

## (c) Declined, deferred or routed

- **Unasked question (AUTONOMY_DIRECTIVE_CHECK in the context output; polish.md §4 "Ask before changing claims"; SKILL.md "Ask before replacing factual copy").** I have no structured question tool here, so I inferred from the brief. The question I would have asked: *"'Initiate Render Pipeline' implies the Desk runs renders, which PRODUCT.md rules out. May I relabel it 'Ask for a render' and route it to an agent ask?"* I made the change because PRODUCT.md's positioning is binding product truth.
- **Unasked question: Delete scope.** *"What does Delete remove: the whole `creations/fruit-dreams/` folder, or only `desk/`?"* The original deleted "the piece", so the confirmation names the piece folder. If it only removes `desk/`, the copy should say so.
- **Settings button kept.** DESIGN's band lists only the agent dot, ⌘K and Close Desk, but Refinement preserves incumbent behavior (SKILL.md "How to design"). I did not add the agent dot or Close Desk either, because no data supports them.
- **Room tabs in the band** (DESIGN "Shell and Rooms") were not added. That would duplicate the Overview's room tiles. It is a structural redesign, outside polish scope (polish.md opening: "never concealed redesign").
- **Partial-failure error.** harden.md "Avoid: block entire interface when one component errors" suggests that only the Board tile should fail when only `board.json` is missing. The bench's error state is a screen-level state, so I contained the error to the stage and kept the band live. A per-room error is the better production design, so I deferred it.
- **Hand-off card** (PRODUCT Overview lists "hand-off") is not added. It is new content outside scope (polish.md opening).
- **Init / surface brief / CONTEXT_STALE.** No CONTEXT_STALE was reported, and no surface brief exists. SKILL.md says not to repair drift as a side effect of a design task, so no doctor or init ran.
- **Detector pass.** Not run. polish.md §5 says context requests a manual scan only when no detector is active, and the context output requested none.
- **Critique snapshot close.** None was read (exit 2), so nothing was closed (polish.md §5, last paragraph).

## (d) Verification

Done with `agent-browser`, session `imp-app`. Screenshots are in `_verify/`.
- Captured baselines (`before-*.png`) and refined captures of all four states at 1440×900 and 390×900 (`after-*-1440.png`, `after-*-390.png`, full-page `after2-*.png`). I fixed what one look showed, then looked again: the rooms grid had dead space, the lead frame was oversized, the empty frame was huge, and the error copy over-claimed.
- Interactions checked by script:
  - Delete opens the confirmation and focuses "Keep piece". Keep closes it and returns focus to Delete.
  - An empty ask shows the inline message and sets `aria-invalid`. A filled ask saves and clears.
  - The bench updates `?state=` and the view.
  - Try again goes loading → error.
  - `?state=bogus` falls back to ready.
  - Tab order now starts at the brand link. The focus ring is visible (`_verify/focus.png`).
  - No page errors were reported.
- Contrast was computed from the tokens: Dim House on wall is about 7.6:1, Exit Light placeholder about 5.6:1, brass on wall about 8:1.

**Gaps:**
- No screen-reader run.
- No 200% zoom pass and no touch-device test.
- No Safari or Firefox check.
- The `prefers-reduced-motion` path is CSS-only and was not emulated in the browser.
- Not tested at 1024–1280px intermediate widths beyond reasoning from the breakpoints.
- Google Fonts loading was not checked offline; it falls back to system sans.
