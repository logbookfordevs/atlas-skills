# Blind Review Verdict: Creative Room Landing Page (Judge M)

- **Surface:** `landing`
- **Judge ID:** `M`
- **Evaluated Refinements:** Anonymous Refinements `X` and `Y`

---

## 1. Executive Summary & Overall Ship Decision

**Ship Pick:** **Y**

**Why:** Candidate Y captures the authentic screening-room soul of Creative Room by implementing the signature Projected Light Rule—where the room is the dark canvas and samples supply the light through ambient washes and contained hover spills. Its copy brilliantly weaves the studio's irreverent voice and non-negotiable rules directly from CONTEXT.md into a high-utility developer layout with an instant hero copy command. While Candidate X delivers a clean and highly accessible refinement, Y achieves a much higher level of atmospheric polish, motion restraint (0 running animations), and design system fidelity without overreaching.

---

## 2. Pillar Evaluations & Scores

Scoring anchors: 0–2 still broken; 3–4 partially fixed; 5–6 competent; 7–8 strong with minor issues; 9–10 exemplary.
*Note: A pillar winner requires a margin of ≥ 1.0; otherwise it is recorded as a tie.*

### 2.1 Color
- **Score X:** 9.0 / 10
- **Score Y:** 10.0 / 10
- **Winner:** **Y** (Margin: 1.0)
- **Evaluation:**
  - Both candidates eliminate all WCAG contrast failures from the seed page: body copy (`#efe9de`) on wall graphite (`#14120f`) measures ~15.5:1, and secondary text (`#aba397`) measures ~7.5:1 (surpassing the 4.5:1 AA requirement).
  - Both candidates banish off-system saturated purple/pink gradients (`#9b5cff`, `#ff4fd8`) and maintain strict palette discipline with warm graphites (`#14120f`, `#1b1815`, `#25211d`).
  - Both exercise restraint with Brass (`#caa565`), reserving it for focus outlines, text selection, carets, and subtle hover borders.
  - **Y's decisive edge:** Y implements the core color philosophy defined in `DESIGN.md` ("the interface is the dark room and the samples are the light"). Through the Projected Light Rule, Y casts a subtle 13% opacity ambient wash (`filter: blur(90px) saturate(1.3)`) derived from the lead reel asset behind the hero, and fades in 38% opacity contained color spills behind hovered frames (`filter: blur(30px) saturate(1.5)`). This delivers rich screening-room color without contaminating the neutral UI chrome.

### 2.2 Typography
- **Score X:** 8.5 / 10
- **Score Y:** 9.5 / 10
- **Winner:** **Y** (Margin: 1.0)
- **Evaluation:**
  - Both candidates implement the Geist and Geist Mono font stacks, utilizing proper variable font weights (Display at 520, Title at 560, Body at 400).
  - Both fix the seed's arbitrary size ladder, abolish all uppercase headings, and set appropriate line heights (1.02–1.06 on display titles, 1.4 on section titles, 1.625 on body text) with negative tracking (-0.025em to -0.035em).
  - Both properly use `text-wrap: balance` on headlines, `text-wrap: pretty` on prose, and curved typographical quotes (`“...”`) and apostrophes (`’`).
  - **Divergence:** In `X/index.html:612-614`, the facts list omits whitespace between numeric spans and labels (`<li><span class="mono">46</span>skills</li>`, `<li><span class="mono">1</span>Desk</li>`, `<li><span class="mono">0</span>cameras</li>`). While CSS provides visual spacing, screen readers and text selections concatenate them as "46skills", "1Desk", and "0cameras". Y formats tabular numerals cleanly throughout, using CSS `counter(step, decimal-leading-zero)` with Geist Mono tabular figures for the production process steps.

### 2.3 Layout & Hierarchy
- **Score X:** 8.5 / 10
- **Score Y:** 9.5 / 10
- **Winner:** **Y** (Margin: 1.0)
- **Evaluation:**
  - Both candidates replace the broken fixed 1180px wrapper with fluid containers that eliminate horizontal overflow at 390px (`scrollW: 390`, `clientW: 390`).
  - Both establish a coherent vertical rhythm with 20px / 40px horizontal padding and 112px+ section gaps.
  - Both replace the seed's 3 generic cards and buried email signup with contextually appropriate studio content.
  - **Y's decisive edge:** Y prioritizes immediate developer utility by placing an actionable terminal command (`$ pnpm desk:start`) with an inline copy button directly in the hero action cluster. Sighted users also benefit from clear text captions under every reel frame ("Kinetic type", "Isometric line study", "Three.js still life", "Painted pond", "Explainer chart"), and the "What is this place?" section translates the studio's "This is / This is not" ledger into a responsive 2-column comparison grid that collapses elegantly on mobile.

### 2.4 Accessibility
- **Score X:** 9.0 / 10
- **Score Y:** 9.5 / 10
- **Winner:** **Tie** (Margin: 0.5 < 1.0)
- **Evaluation:**
  - Both candidates achieve zero axe-core violations across WCAG 2.1 AA rules (`violations: []` in `metrics.jsonl`).
  - Both provide clear semantic landmarks (`<header class="band">`, `<nav>`, `<main id="main">`, `<section aria-labelledby="...">`, `<footer class="foot">`) and accessible skip links.
  - Both provide high-contrast, 2px solid brass focus indicators (`:focus-visible`).
  - Both provide rich, descriptive alternative text for all 5 gallery images.
  - Both ensure all interactive buttons and navigation links satisfy the 40–44px minimum touch target size.
  - Both incorporate `role="status"` live regions with user-friendly messages for clipboard interactions, including keyboard-selection fallbacks.
  - Y has a minor edge with visible `<figcaption>` elements and semantic definition lists (`<dl>`, `<dt>`, `<dd>`), but the margin is 0.5, calling a tie.

### 2.5 States & Polish
- **Score X:** 7.5 / 10
- **Score Y:** 9.5 / 10
- **Winner:** **Y** (Margin: 2.0)
- **Evaluation:**
  - Both implement `DESIGN.md` radius tokens (10px frame corners, 12px inputs/rows, 16px cards, full pills) and the exact "Band drop" shadow (`inset 0 -1px 0 var(--velvet-line), 0 14px 30px -18px rgba(0,0,0,0.7)`).
  - Both implement interactive copy-to-clipboard functionality with active state feedback and automatic label resets.
  - **Divergence:**
    - Y implements an `IntersectionObserver` scrollspy on the sticky nav band that activates a brass 2px underline (`aria-current="true"`) on the current section link, mirroring `DESIGN.md`'s step rail state rules.
    - Y faithfully executes the Projected Light Rule on sample frames (450ms brightness un-dimming + 600ms contained 38% opacity backlight spill).
    - X wraps its frame hover styles in `@media (hover: hover) and (pointer: fine)`, causing hover behavior to fail in environments reporting coarse or emulated pointers. X also omits the design system's signature backlight spill entirely.

### 2.6 Copy
- **Score X:** 8.5 / 10
- **Score Y:** 9.5 / 10
- **Winner:** **Y** (Margin: 1.0)
- **Evaluation:**
  - Both candidates completely excise the seed's contradictory AI marketing clichés ("AI-Powered Video", "AI Magic", "Made with ❤️ and AI").
  - Both accurately document the true product reality: code-rendered animation (`Canvas, shaders, Three.js, ffmpeg`), 46 upstream skills, 5-room Desk structure, and Leonardo's editorial brief.
  - **Y's decisive edge:** Y captures the authentic, dry studio humor found in `CONTEXT.md`:
    - *"A studio where drawFrame(ctx, i) is the camera / A place with a camera. We checked. Twice."*
    - *"Short films, music videos, explainers, carousels and the occasional poster / A serious enterprise monorepo. It has a mascot."*
    - *"46 skills, one Desk and a very firm opinion about process / A democracy. Leonardo’s brief beats everyone’s defaults."*
    - *"brief.md: Every piece has one... pnpm lint cries if it’s missing."*
    - *"Run pnpm lint before you leave."*
  - Y feels like a first-party product document written by the studio author, whereas X's copy, while accurate, is slightly more generic.

### 2.7 Motion
- **Score X:** 7.0 / 10
- **Score Y:** 9.5 / 10
- **Winner:** **Y** (Margin: 2.5)
- **Evaluation:**
  - Both candidates eliminate the planted 0.9s infinite pulsing CTA and 1.2s overshoot easing.
  - Both adopt the signature projector ease (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - **Divergence:**
    - In `X/index.html:525-546`, X introduces CSS entrance animations (`.enter`) on hero elements with `animation-fill-mode: both`. Because the fill mode retains the final state permanently, Chromium's Web Animations API reports 4 running animations indefinitely (`runningAnims: 4` in `metrics.jsonl`). Additionally, under `prefers-reduced-motion: reduce`, X still runs `enter-fade` for 500ms rather than rendering instantaneously.
    - In Y, there are 0 infinite animations and 0 running animations (`runningAnims: 0` in `metrics.jsonl`). Content is immediately visible at load without requiring scroll observers or entrance delays.
    - Y's hover transitions are purpose-driven, compositor-friendly (`filter`, `opacity`), and capped to 150–200ms under `prefers-reduced-motion: reduce`.

### 2.8 UX & Direction
- **Score X:** 8.0 / 10
- **Score Y:** 9.5 / 10
- **Winner:** **Y** (Margin: 1.5)
- **Evaluation:**
  - Both candidates honor the brief's constraint to maintain the screening-room identity while eliminating interface friction.
  - X directs users to click a jump-link button ("Start the Desk") to navigate down to the CLI instructions at the bottom of the page.
  - Y offers higher directness: developers can immediately copy `pnpm desk:start` from the hero, view verified sample stills with captions, read the 7-stage production lifecycle, explore the Desk's five rooms, and access the complete CLI onboarding suite.
  - Y's atmospheric lighting cues transform what could have been a static landing page into an immersive screening room.

---

## 3. Plant Coverage Table

| Plant ID | Pillar | Description | Refinement X | Refinement Y | Evidence Pointer |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **L1** | Color | Body/lede text `#6b645a` and `#8a8278` contrast fail (~3:1 and ~4.9:1); footer `#4a443d` (~2:1). | **fixed** | **fixed** | X: `X/index.html:28-33` (uses `#efe9de` and `#aba397`, 15.5:1 & 7.5:1)<br>Y: `Y/index.html:24-27` (uses `var(--screen)` and `var(--dim)`) |
| **L2** | Color | Brass diluted across logo, nav, headings, both CTAs, and quote rule. | **fixed** | **fixed** | X: `X/index.html:36-40` (brass restricted to focus, selection, caret)<br>Y: `Y/index.html:65-67,109,285` (brass on focus, selection, active nav underline, step 07) |
| **L3** | Color | Off-system saturated purple/pink gradients (`#9b5cff`, `#ff4fd8`) & pure `#000` cards. | **fixed** | **fixed** | X: `X/index.html:14-41` (purples removed, warm graphite surfaces)<br>Y: `Y/index.html:17-23` (purples removed, warm graphite surfaces) |
| **L4** | Type | Display 72px with line-height 1.5, uppercase h4, arbitrary size ladder (10–72px). | **fixed** | **fixed** | X: `X/index.html:43-51,262-280` (`clamp(40px, 68px)`, 1.04 line-height, 520 weight)<br>Y: `Y/index.html:31-33,139-142` (`clamp(44px, 88px)`, 1.02 line-height, 520 weight) |
| **L5** | Type | No text-wrap balance/pretty, "...", straight quotes, unbounded line length. | **fixed** | **fixed** | X: `X/index.html:268,276` (curly quotes, `max-width: 58ch`, balance/pretty)<br>Y: `Y/index.html:140,145` (curly quotes, `max-width: 58ch`, balance/pretty) |
| **L6** | Layout | Fixed 1180px wrapper (horizontal scroll on mobile), inconsistent spacing, unaligned rhythms. | **fixed** | **fixed** | X: `X/shots/metrics.jsonl` (390px `hOverflow: false`, max-width `1180px + 2*page-x`)<br>Y: `Y/shots/metrics.jsonl` (390px `hOverflow: false`, max-width `1240px`) |
| **L7** | Layout | Generic 3 icon cards, buried signup, ghost/primary CTA same weight, no headings structure. | **fixed** | **fixed** | X: `X/index.html:227-250,568-600` (primary/secondary button styles, principle cards, CLI start)<br>Y: `Y/index.html:150-182,230-260` (hero command CTA, "This is / This is not" ledger, 4-step terminal) |
| **L8** | A11y | Nav/CTAs clickable spans/divs, `*:focus {outline:none}`, un-alted images, no lang/landmarks/meta. | **fixed** | **fixed** | X: `X/index.html:2,109-122` (landmarks, skip link, alts, 0 axe violations)<br>Y: `Y/index.html:2,73-77` (landmarks, skip link, alts, 0 axe violations) |
| **L9** | A11y | Tap targets ~25px tall. | **fixed** | **fixed** | X: `X/index.html:164-167` (buttons/links have `min-height: 40-44px`)<br>Y: `Y/index.html:93-94,166-169` (buttons/links have `min-height: 44px`, copy buttons `40px`) |
| **L10** | Polish | No hover/active/focus-visible states, radius mismatch, heavy black shadows, emoji icons. | **fixed** | **fixed** | X: `X/index.html:93-96,177-183` (focus ring, DESIGN.md radii, band shadow, SVGs)<br>Y: `Y/index.html:67,175-182` (focus ring, DESIGN.md radii, band shadow, SVGs) |
| **L11** | Copy | AI-marketing slop ("AI Magic", "templates"), "Get Started", "NEW!!", exclamation marks. | **fixed** | **fixed** | X: `X/index.html:565-715` (truthful studio copy, sentence case, zero AI claims)<br>Y: `Y/index.html:420-530` (authentic studio voice with CONTEXT.md humor, sentence case) |
| **L12** | Motion | Infinite pulsing CTA, `transition: all` 1.2s back/overshoot, layout hover, translateY(80px) observer. | **fixed** | **fixed** | X: `X/index.html:525-546` (0 infinite anims, compositor transitions; entrance anim on hero)<br>Y: `Y/index.html:360-366` (0 infinite anims, 0 running anims, projector ease, reduced motion) |
| **L13** | UX | Page doesn't explain Creative Room credibly, doesn't show work first, no clear single action. | **fixed** | **fixed** | X: `X/index.html:565-640` (clear engine facts, reel below hero, Start Desk CTA)<br>Y: `Y/index.html:420-470` (clear engine facts, hero CLI copy action, captioned reel) |

---

## 4. New Defects & Regressions

### Candidate X
1. **Typographic concatenation in hero facts (`X/index.html:612-614`):**
   The markup sets `<li><span class="mono">46</span>skills</li>`, `<li><span class="mono">1</span>Desk</li>`, and `<li><span class="mono">0</span>cameras</li>`. While a CSS margin creates a visual gap, the raw text in the DOM lacks whitespace, causing screen readers and plain-text selections to output "46skills", "1Desk", and "0cameras".
2. **Persistent running animations (`X/index.html:527` & `X/shots/metrics.jsonl`):**
   The hero entrance keyframes (`.enter`) employ `animation-fill-mode: both`. Because the animation stays in its active fill state permanently, the browser reports 4 running animations (`runningAnims: 4`). Furthermore, under `prefers-reduced-motion: reduce`, the animation continues to run for 500ms using `enter-fade` instead of completing immediately.
3. **Fragile hover media query (`X/index.html:314`):**
   Sample frame hover transitions are nested inside `@media (hover: hover) and (pointer: fine)`, which prevents hover interactions from triggering in environments where pointer emulation or hybrid touch inputs report coarse pointers.

### Candidate Y
1. **Visually hidden section heading for reel (`Y/index.html:440`):**
   The section title `<h2 class="sr-only" id="work-title">Stills from the room</h2>` is hidden from sighted users, leaving the reel gallery without an explicit visible section title.
2. **Mobile header height expansion (`Y/index.html:110-120`):**
   Below 640px viewport width, the velvet band header switches to a column layout, stacking the wordmark above the horizontally scrolling nav items. This increases the sticky header's height on smaller phones.

---

## 5. Pillar Score Summary

| Pillar | Candidate X | Candidate Y | Winner |
| :--- | :---: | :---: | :---: |
| **Color** | 9.0 | 10.0 | **Y** |
| **Typography** | 8.5 | 9.5 | **Y** |
| **Layout / Hierarchy** | 8.5 | 9.5 | **Y** |
| **Accessibility** | 9.0 | 9.5 | **Tie** |
| **States & Polish** | 7.5 | 9.5 | **Y** |
| **Copy** | 8.5 | 9.5 | **Y** |
| **Motion** | 7.0 | 9.5 | **Y** |
| **UX & Direction** | 8.0 | 9.5 | **Y** |
| **Overall Ship Pick** | | | **Y** |

