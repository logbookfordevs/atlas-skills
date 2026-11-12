# Notes: Creative Room landing refinement (impeccable)

Skill base: `/Users/leonardo/.claude/skills/impeccable` (abbreviated `SK/` below).

**Substitution, stated up front** (per the context script's `AUTONOMY_DIRECTIVE_CHECK`): I ran as a subagent with no structured question tool and no way to serve the decision page, so I inferred decisions from the brief, CONTEXT.md and DESIGN.md. Every question I would have asked is listed in section (c).

## (a) Skill files read

- `SK/SKILL.md` (Setup, How to design, Modes, Commands, Routing)
- Output of `SK/scripts/impeccable context --target index.html`. It loaded DESIGN.md and reported NO_PRODUCT_MD, SCOPED_EXISTING_ALLOWED, EXISTING_VISUAL_SYSTEM, AUTONOMY_DIRECTIVE_CHECK and IMAGE_TOOLS.
- `SK/reference/routing.md`
- `SK/reference/polish.md`: the playbook for this request. The request is a broad refinement pass, which matches "Final quality pass" in the SKILL.md Commands table.
- `SK/reference/clarify.md`: the request names copy.
- `SK/reference/animate.md`: the request names motion.
- `SK/reference/audit.md`: the request names accessibility. I used it only for its a11y and responsive checklist. I did not produce an audit report, because the user asked for fixes.
- `SK/reference/mode-persuade.md`: a landing page is in Persuade mode (SKILL.md "Modes").
- `SK/reference/craft-floor.md`: read immediately before the first edit (SKILL.md Setup step 3).

I did not read new-work.md or init.md. This is a refinement, not a new surface or a replacement world (SKILL.md "Routing → Otherwise"; context `SCOPED_EXISTING_ALLOWED`).

## (b) Changes and the rule behind each

### Identity and system
1. **Tokens.** I put every colour on `:root` using DESIGN.md names (wall, panel, raised, seam, screen, dim, faint, brass, brass-soft, velvet, velvet-line). I removed the off-system #9b5cff, #ff4fd8, #000, #fff, #6b645a, #8a8278 and #4a443d. Rules: polish.md §1 "Establish the system" and §4 "Color… Use semantic tokens"; DESIGN.md "Samples Carry the Colour Rule". Detector evidence: design-system-color.
2. **Velvet band.** The band is now sticky at 95% velvet with a light blur and the DESIGN.md "Band drop" shadow. The wordmark is Screen White, 560 weight, instead of uppercase brass 800. Nav links are Dim House, and the current section gets a 2px brass underline in the step-rail line state. Rules: DESIGN.md Navigation and "One Brass Rule"; SKILL.md "Refinement preserves" (I kept the band and the four links).
3. **Primary button.** It is now a Screen White pill with Wall text. Before, it was a brass fill with a purple ring and a black glow. The secondary button is a Seam-bordered pill with a Tarnished Brass hover. Rules: DESIGN.md Buttons and "Don't use Brass as a large fill"; craft-floor.md "Depth: a zero-offset colored halo is decoration".
4. **Brass is used only to mean "here".** It marks focus, the nav underline for the current section, the final "Ship it?" numeral (it waits on Leonardo), and the "Copied" state. Rule: DESIGN.md "One Brass Rule".

### Typography
5. **Gradient headline removed.** The 72px, 800-weight, +0.04em, line-height 1.5 H1 is now Geist 520, `clamp(44px, 6.4vw, 88px)`, line-height 1.02, -0.035em, balanced, 14ch. Rules: craft-floor.md Refuse "Gradient text"; craft-floor.md Verify "Type: display max 6rem, tracking floor -0.04em, balanced headings"; DESIGN.md Display (close-tracked). Detector: gradient-text, oversized-h1, tight-leading.
6. **Heading outline fixed.** It was h1 then h4s. Now there is a single h1, one h2 per section using the DESIGN.md display token `clamp(34px,3.1vw,46px)`, and h3 for the step titles. Body text is 15px/1.625, small text is 13–13.5px and mono is 13–14px. Rules: audit.md §1 "Semantic HTML: improper heading hierarchy"; DESIGN.md Hierarchy. Detector: skipped-heading, tiny-text, undersized-ui-text.
7. **Mono is for data only.** It sets commands, file paths and step numerals, with `tnum`. Rules: DESIGN.md "Mono Is Data Rule"; craft-floor.md Refuse "Monospace as a costume".
8. **Line length.** Text has a measure (lede 58ch, body ≤64ch) instead of `max-width: none`. Rule: craft-floor.md Verify "Type: body measure 65–75ch".

### Layout and hierarchy
9. **Responsive shell.** The fixed `width:1180px` with 13px padding is now a fluid shell with 20px/40px page padding (DESIGN.md spacing page-x/page-x-wide). Rules: audit.md §4 "Fixed widths"; polish.md §4 "Layout and type".
10. **Reel.** The clipped overflowing strip (the fifth image was cut off) is now a 4-column grid: the lead frame spans 2×2, the frames are 16:10 with 10px corners and Seam rings, and each has a caption. Below 900px it becomes a 2-column grid. Rules: DESIGN.md Sample Frames and Layout; polish.md §4 "Prevent image layout shift… correct aspect ratios" (width/height attributes added); adapt rule in SKILL.md frontend defaults ("Mobile is not degraded desktop").
11. **Icon cards removed.** The three emoji icon-tile cards with false claims are gone. In their place is a hairline "This is / This is not" ledger using the README's own content. Rules: craft-floor.md Refuse "Same-size cards of icon plus heading plus text", "Unicode glyphs or emoji standing in for an icon system". Detector: icon-tile-stack.
12. **Process steps.** Steps are now rows with mono two-digit numerals. Rules: craft-floor.md Refuse "Section numbers… unless the sequence itself carries information" (it does: this is the ordered pipeline); DESIGN.md step numerals in mono.
13. **Desk section.** The italic grey quote with a 4px brass `border-left` is now a set statement plus a Booth Panel list of the five rooms. Rules: craft-floor.md Refuse "A colored border-left… above 1px"; DESIGN.md "Don't use Brass as… a decorative line"; Panel card component.
14. **Spacing.** Sections are 112px apart and headings sit 40px above their content. Rule: craft-floor.md Verify "Spacing: … more space above a heading than below it".

### Copy (clarify.md, mode-persuade.md)
15. **Hero and sections rewritten from CONTEXT.md facts.**
    - The H1 is now "Every frame is a function." and the lede comes from the README.
    - I removed "Unleash Your Creativity With AI-Powered Video" and the buzzword lede. They contradict house rule 1 ("Video is rendered from code… no text-to-video").
    - I removed "Blazing Fast", "AI Magic" and "hundreds of templates". CONTEXT.md does not support them.
    - I removed the "NEW!!" badge and "Made with ❤️ and AI".
    Rules: clarify.md "Preserve factual meaning, product terminology, and brand voice", Verify "factual accuracy"; craft-floor.md Verify "Copy: the product's own language". Detector: marketing-buzzword.
16. **Primary action.** "Get Started" was an `alert('Coming soon!')`. It is now the working action, `pnpm desk:start`, with a Copy button, and a secondary link "How a piece is born". Rules: mode-persuade.md line 9 ("expose a clear action… in its working form… A decorative link… does not count"); clarify.md "Actions… specific verb and object".
17. **Contact form replaced.** "Stay In The Loop!" was a fake signup (placeholder-only label, `alert('Thanks!')`, "Submit"). It is now "Get started" with the four real commands and copy buttons. The nav link "Contact" is now "Get started". Rules: polish.md §3 triage 1 "misleading state"; clarify.md Forms "placeholders are examples, not labels" and "instead of using… Submit". See (c) for the question I could not ask.
18. **Process copy.** Step 1 was over-long and is now trimmed to the README line. I fixed the step casing and used typographic quotes. Rules: clarify.md "Say each idea once"; polish.md §4 "Keep terminology, capitalization, punctuation… consistent".

### Accessibility
19. **Keyboard focus.** `*:focus{outline:none}` is now a brass `:focus-visible` ring. Rules: audit.md §1 "Missing focus indicators"; DESIGN.md (Brass = focus ring).
20. **Real controls.** The `<span onclick>` nav items and `<div onclick>` buttons are now `<a href>` and `<button>`. Rule: audit.md §1 "divs instead of buttons".
21. **Page semantics.** I added landmarks (`header`, `nav`, `main`, `footer`), a skip link, `lang`, the viewport meta and a meta description. Rule: audit.md §1 "Semantic HTML… missing landmarks".
22. **Alt text.** Every reel image now describes what it shows. I did not say which creation each image comes from, because nothing in CONTEXT.md says so. Rules: clarify.md "Make alt text convey the image's information"; audit.md §1 Alt text.
23. **Contrast.** The footer was #4a443d on #14120f (1.9:1) and is now Exit Light #958c80 (~5.6:1). Secondary text is Dim House (~7.6:1). Rule: craft-floor.md Verify "Contrast ≥4.5:1". Detector: low-contrast.
24. **Touch targets.** Nav links and buttons are at least 44px tall. Copy buttons in the list are 40px tall and spaced well past the 24px rule. Rule: audit.md §4 "Touch targets".

### States and polish
25. **Copy buttons have every state.** They have hover, focus and active states. Success shows "Copied" in brass, with the label reverting after 1.8s. On failure the command is selected and the message says "press Ctrl+C or ⌘C". Each section has its own polite `role=status` live region next to its controls. Rules: craft-floor.md Verify "States"; clarify.md Errors "what failed… how to recover"; clarify.md "accessible names and announced state changes".
26. **Browser surfaces.** I themed `::selection` (brass at 38%), `caret-color`, `scrollbar-color`, the link underline offset, `tnum` numerals and `color-scheme: dark`. Rule: craft-floor.md Verify "Browser surfaces"; DESIGN.md (brass selection at 38%).
27. **Section highlight in the nav.** The nav underlines the section in view with brass, using `aria-current`. Rule: polish.md §4 "Make… current state obvious".

### Motion (animate.md)
28. **Removed motion.** I removed the infinite `pulse` scale on the CTA, the fade-and-rise on every section (which used an 80px translate and an elastic `cubic-bezier(.68,-.55,.27,1.55)`), and the card hover that animated `top` and `width`. Rules: animate.md "Prefer one rehearsed focal sequence to repeated section reveals", "do not use bounce or elastic curves by reflex", "Avoid casually animating layout-driving properties"; animate.md Accessibility "Any nonessential loop must stop"; craft-floor.md Verify "Motion: one authored moment… from an already-visible default". Detector: bounce-easing ×9.
29. **Focal moment: the Projected Light Rule.** Frames rest dimmed at brightness .74 and saturate .85. Hovering one lights it over 450ms on the projector ease and fades in a contained spill of its own image (30px blur, 1.5× saturate, 38%, inset). The hero's ambient wash (90px blur at 13%, masked) crossfades to the last-hovered frame. Content is visible without JS. On touch devices (`hover: none`) frames show at full brightness. Rules: animate.md "Set the motion thesis… must come from this product", "Focus and depth: bounded blur, filter… light"; DESIGN.md Projected Light Rule and "Do contain the colour spill… next to text".
30. **Reduced motion.** Smooth scroll is off. Filter and opacity transitions are shortened rather than removed, so feedback stays. Rule: animate.md "Reduced motion means fewer and gentler animations, not disabling all motion".

## (c) Declined, deferred, routed elsewhere, or decided without asking

These are the questions I would have asked. I had no question tool (AUTONOMY_DIRECTIVE_CHECK), so I inferred each one.

- **Factual copy replaced without asking.** SKILL.md "Ask before replacing factual copy or adding claims", polish.md §4 "Ask before changing claims" and clarify.md "Ask before changing factual claims" all call for asking first.
  - The user explicitly asked me to fix copy and pointed to CONTEXT.md for facts.
  - The old claims contradict CONTEXT.md (AI-powered video versus "rendered entirely from code"), so I replaced them only with statements taken from CONTEXT.md.
  - I added no new claims. The reel captions describe only what each image shows.
  - **Unasked question:** "The current hero sells AI-generated video, which contradicts house rule 1. OK to replace it with README language?"
- **Signup form and "Contact" removed.** Refinement keeps behaviour (SKILL.md "Refinement preserves"). However, the form was non-functional (an alert) and the README says the repo is private, so I treated it as a misleading state (polish.md §3.1).
  - **Unasked question:** "Is there a real mailing list or contact address? If so, I'll restore a labelled email field with real validation and error states."
- **Hero composition.** I kept it centred and kept the section order (hero, reel, features→ledger, process, desk, sign-up→start). This follows SKILL.md "Refinement preserves". mode-persuade.md "Comps" pushes against a centred hero, but that guidance is for new comps. A layout change on that scale would be a redesign through new-work.md, which this request did not ask for.
- **Mapping reel images to creations.** Not done. Nothing in CONTEXT.md identifies which creation each still comes from.
  - **Unasked question:** "Which creation is each still from? Captions could then link to the piece."
- **PRODUCT.md missing.** The context script directs that init be offered afterward rather than blocking. **Follow-up offered:** run `/impeccable init` to capture PRODUCT.md, and record a landing-page surface brief in Persuade mode.
- **Detector findings left in place on purpose.**
  - design-system-font "Geist / Geist Mono not declared": a false positive. DESIGN.md declares "Geist Variable" and "Geist Mono Variable", and Google Fonts serves the same families as "Geist".
  - overused-font: DESIGN.md pins Geist, so "The brief wins" (SKILL.md).
  - rgba(0,0,0,.7): DESIGN.md's own Band-drop shadow.
  - Off-ramp 14px, 16–18px and 20px: mono commands at 14px (DESIGN.md Mono 11–14px), the Persuade lede at 16–18px, and the Desk principle statement at 20px. These are narrow, intentional landing-page exceptions, per polish.md §5 "document only narrow intentional exceptions".
  - flat-type-hierarchy "h2 15px": comes from the visually hidden reel h2. The visible h2s are 34–46px.
- **No audit report produced.** audit.md says "Don't fix issues". The user asked for fixes, so polish is the governing playbook.
- **No critique snapshot to close.** I did not run `critique-storage latest`, since none had been run in this sandbox. polish.md §5 says not to close a snapshot when none was read.

## (d) Verification and gaps

Done:
- **Detector.** I ran `impeccable detect --json index.html` before the changes (about 40 findings across bounce-easing, gradient-text, low-contrast, icon-tile-stack, skipped-heading, buzzword, off-system colours and others) and after them. The remaining findings are only the exceptions listed in (c).
- **Rendering.** I used agent-browser (session `imp-landing`). Full-page screenshots at 1440×900 and 390×844 are in `shots/` (`before-desktop.png`, `after-desktop.png`, `after-mobile.png`, `desktop-hero.png`, `desktop-hover.png`, `mobile-focus.png`). `shots/original-index.html.txt` is a backup of the original page.
- **Mobile overflow.** It was 409px in an initial pass, caused by the hero wash bleeding past the edge. I fixed it, and `scrollWidth` is now 390.
- **Keyboard.** I tabbed through on mobile; the brass focus ring is visible, and I fixed the wordmark's ring, which was stretching across the full width.
- **Copy button.** Clicking it gave "Copied pnpm desk:start to the clipboard." and the button switched to "Copied".
- **Hover.** Hovering a frame lit it and the wash followed.

Gaps:
- I did not run a real screen reader (VoiceOver), test 200% zoom, or check in Safari or Firefox. `color-mix` and `text-wrap: balance` need recent browsers, and both degrade gracefully.
- The clipboard failure path (the selection fallback) is reasoned about in code but was not exercised.
- I did not test on a physical touch device. The `(hover: none)` branch was not emulated.
- I did not record the hover and spill transitions frame by frame; I only checked their end states.
- Contrast ratios come from the detector's computation plus DESIGN.md token values. I did not measure them separately with a picker.
- Process note: I briefly wrote screenshots and a contact sheet outside the working directory (a sibling `imp-landing-shots/` and `scratchpad/contact/`). I moved or deleted them straight away, and nothing remains outside this folder.
