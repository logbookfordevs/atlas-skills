# Landing blind verdict — judge G

## Evidence and limits

Read RUBRIC.md first, then BRIEF.md, CONTEXT.md, DESIGN.md and PLANTS.md; read both output HTML files completely in chunks of at most 200 lines. Opened all 15 supplied PNGs across before-shots/, X/shots/ and Y/shots/, including full-page and keyboard captures. Read all supplied metrics. No browser interaction was performed; clipboard and observer behavior are assessed from source, not claimed as runtime-tested.

Measured sRGB WCAG contrast from the supplied CSS tokens: Dim/Wall **7.49:1**, Dim/Panel **7.08:1**, Dim/Velvet **6.95:1**, Faint/Wall **5.65:1**, Screen/Wall **15.47:1**, Brass/Wall **8.09:1**. These measure solid token pairs, not every composited image pixel. Both supplied axe runs have zero violations and both 390px metrics show no horizontal page overflow; neither result substitutes for the manual findings below.

## Pillars

| Pillar | X | Y | Winner | Evidence / rationale |
|---|---:|---:|---|---|
| color | 8.5 | 8.5 | tie | Both restore the warm palette and excellent measured text contrast; Y has a small non-state brass step numeral (Y:285), but neither dilutes the accent materially. |
| typography | 8.5 | 8.5 | tie | Both use Geist language/mono data, balanced display wrapping and bounded readable copy. Y has a crisper shorter hero; X has a more restrained display scale (X:271–287; Y:140–147). |
| layout | 6.5 | 8.5 | Y | Y shows captioned work in the opening viewport and exposes all mobile navigation labels; X spends the entire opening viewport before any sample and clips the mobile final nav label (page-1440.png and page-390.png in each shots directory). |
| accessibility | 7.5 | 8 | tie | Both have zero supplied axe violations, landmarks, alt, real controls and live copy status. X focus outline is visibly clipped by nav overflow; Y focus is intact, but its comparison ledger hides the column meaning from assistive technology (X:178–184; Y:443–456). |
| states | 7.5 | 8.5 | Y | Both provide actionable copy fallback and copied feedback. Y adds visible inline failure/status feedback and a complete focus outline; X announces failure only in hidden status and clips nav focus (X:753,790–793; Y:529–548; focus screenshots). |
| copy | 8 | 8.5 | tie | Both replace false AI-platform claims with accurate code-rendering facts and the source voice. Y supplies sample captions and more complete Desk/QA/final facts; its hero copy command still lacks immediate setup context (X:601–752; Y:390–503). |
| motion | 7 | 9 | Y | Neither has infinite motion or layout-property animation. X retains an unsolicited staggered 500ms entrance and button scale under reduced motion; Y uses restrained hover light/fade and reduces the long transitions and smooth scroll (X:238,561–577; Y:362–366; both metrics). |
| ux | 6.5 | 8 | Y | Both make the studio credible and preserve identity. Y better demonstrates the work and offers a literal command action; X still hides all work below the first screen and retains a generic three-card structure, while its Start the Desk link merely scrolls (X:603–607,634–650). |

Winners use the required margin of at least 1.0; smaller differences are ties. Source pointers in pillar rationale refer to the corresponding index.html.

## Plant coverage

| Plant | X | Y | Evidence |
|---|---|---|---|
| L1 | fixed | fixed | Both metrics.jsonl:3 report no axe violations; token calculations below; X:281–287,549–558; Y:145–147,356. |
| L2 | fixed | partial | X:167–198,242–257 removes decorative brass; Y:285 still colors the final static step brass. |
| L3 | fixed | fixed | X:14–40 and Y:14–25 restore warm tokens; both page-1440.png show no purple/pink interface chrome. |
| L4 | fixed | fixed | X:271–287,316–335; Y:140–147,240–242,281; coherent close-tracked display/body roles. |
| L5 | fixed | fixed | X:272–287,438–447 and Y:142–147,238–244 constrain measure and wrap; revised prose uses curly punctuation without trailing three-dot slop. |
| L6 | partial | fixed | Both metrics.jsonl:2 have scrollW=clientW=390; X still has excessive hero-to-work gap and clipped navigation (X/shots/page-390.png); Y/shots/page-390.png shows clean responsive navigation/grid. |
| L7 | partial | fixed | X:634–650 retains three identical icon-card scaffolds, though copy is improved; Y:438–488 uses differentiated ledger, process rows and rooms; both introduce clear section headings and setup context. |
| L8 | partial | fixed | Both restore lang, viewport, semantic landmarks, headings, alt, labels and real controls (X:582–626,723–753; Y:370–435,496–503); X focus outline remains clipped in focus-tab3-1440.png. |
| L9 | fixed | fixed | X:170,191,221,526 and Y:96,101,163,340 use roughly 40–44px controls, removing tiny CTA targets; this does not assert every control meets a 44px recommendation. |
| L10 | partial | fixed | Both restore pill buttons, tonal surfaces and hover/copy feedback; X focus clipping remains (focus screenshot); Y:161–181,339–347 and focus screenshot show cleaner states. |
| L11 | fixed | fixed | X:600–613,637–752; Y:390–503: code-rendering facts, optional Desk, real commands and source-consistent voice replace invented AI/template claims. |
| L12 | partial | fixed | Both metrics:1–4 show zero infinite animations; X:238,563–577 leaves scale/staggered fade active with reduced motion, while Y:362–366 shortens light fades and disables smooth scrolling. |
| L13 | partial | fixed | X opening desktop/mobile screenshots contain no work; X:619 supplies only a group label. Y opening screenshots already show samples with captions (Y:402–435), a clear definition and one primary command action. |

## New defects

### X

- Navigation overflow clips the brass keyboard outline at its top/bottom, visible in X/shots/focus-tab3-1440.png; X/index.html:178–184,188–193. At 390px the last navigation label is also concealed behind the fade (X/shots/page-390.png).
- The primary label Start the Desk implies execution but only navigates to instructions, X/index.html:603–604. Prefer a label describing setup or a literal copy action.
- Mobile command wells horizontally scroll their code at the narrow width rather than making the complete command immediately readable, X/index.html:499–515 and X/shots/page-390-full.png; pnpm studio:doctor is visibly clipped.

### Y

- Hero offers pnpm desk:start before installation/prerequisites, with no direct setup CTA beside it; Y/index.html:393–397 versus prerequisites at 491–500. A fresh checkout user can copy the wrong first command.
- The This is / This is not comparison header is aria-hidden and the desktop descriptions contain no explicit negation; definition-list semantics present an opposite as the definition. Y/index.html:443–456; the Not prefix is mobile-only CSS at 262–265.
- The final process step numeral is permanently brass without being current, selected or waiting for a real approval, Y/index.html:285; minor One Brass Rule deviation (DESIGN.md:163).

## Overall ship pick: Y

I would ship Y because its captioned samples enter the first viewport, its mobile navigation stays legible, and the page explains the code-rendered studio with a concrete action. It preserves the dark screening-room identity while offering more complete visible feedback and quieter reduced-motion behavior. Before release, connect the hero command to setup prerequisites and make the comparison ledger’s negative meaning explicit to assistive technology.
