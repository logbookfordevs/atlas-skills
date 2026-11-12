# Blind design verdict — app — judge G

## Overall ship pick: X

I would ship X because its work-led presentation, board-specific recovery and effective reduced-motion handling better preserve the Desk’s screening-room identity across all four states. Y has stronger mobile forms, navigation semantics and a native confirmation dialog, but its retry never settles and its loading spinner ignores reduced motion. X still needs mobile control names, a clearer input boundary, truthful static-demo feedback and fewer loading animations before an unqualified release.

## Evidence and scope

Read RUBRIC.md first, then BRIEF.md, PRODUCT.md, DESIGN.md and PLANTS.md; read both complete HTML sources in chunks of at most 200 lines. Viewed all 39 supplied PNGs in before-shots/, X/shots/ and Y/shots/, including every state, desktop/mobile captures, full-page captures and Tab-4 focus. Used the supplied metrics and inspected event handlers; no independent browser interaction was performed. Bench styling/accessibility is excluded. No method attribution was attempted.

## Pillar scores

| Pillar | X | Y | Winner |
|---|---:|---:|---|
| color | 8 | 8.5 | tie |
| typography | 8 | 8.5 | tie |
| layout | 7 | 8 | Y |
| accessibility | 5.5 | 8 | Y |
| states | 7 | 6 | X |
| copy | 7 | 7 | tie |
| motion | 7.5 | 4.5 | X |
| ux | 7.5 | 7.5 | tie |

A winner requires a margin of at least 1.0; smaller differences are ties.

### color

Both restore the exact warm neutrals, screen-white primary and restrained brass. Calculated dim/panel is 7.08:1, faint/panel 5.34:1 and brass/panel 7.64:1. Y improves the input boundary to faint/wall 5.65:1; X uses seam/wall 1.40:1 (X:179-186, Y:510-524). Neither supplied axe report contains a text contrast failure.

### typography

Both use a coherent Geist display/body hierarchy with correct weight, tracking and line height. Y consistently sets counts and durations in mono and wraps file paths deliberately (Y:759-768,873-878); X leaves room counts/durations in sans (X:309-312,379). X also crowds the mobile ask placeholder, while Y stacks the form.

### layout

Both eliminate the measured 996px mobile overflow. Y retains a compact, scannable four-file list, exposes current-room navigation, and stacks the ask input/button at 390px (Y:509-511,677-703; ready-390-full.png). X gives the latest render a dominant frame but puts older files below the desktop fold and squeezes its mobile input beside Send ask (X:178-180,403-409; ready-1440-full.png).

### accessibility

Both provide native room links, labelled inputs, landmarks, visible brass focus and error alerts. X hides the only Jump to and Tablet names with display:none on mobile (X:288-289,246-249), lacks a loading live region (443-454), and has a low-contrast input boundary. Y preserves the hidden Jump to text, labels Tablet, supplies a skip link, exposes individual stages, uses a native modal and announces loading (Y:697,707,812,820-835,940). Both supplied axe reports still flag a missing loading h1; the region finding lacks node detail and may concern excluded Bench scaffolding.

### states

Both replace the empty/error dead ends and add confirmation before deletion. X retry returns from loading to the error after 900ms, offers a Board recovery route and has a detailed skeleton/fade (X:457-474,517-520). Y has the better native modal and form validation, but retry only sets loading and never settles (Y:1008), its modal falsely states 4 renders in the empty state (724), and its loading skeleton omits the separate ask panel (936-939).

### copy

Both replace pipeline/Submit jargon with agent asks, explain optional rooms/chat, and give human missing-file messages. X correctly limits the error to the board and explains that Desk records do not break the piece (X:460-463); Y more clearly says the next agent you run picks up the ask (Y:855). Both falsely claim successful saving/deletion without persistence; Y additionally claims Finder opened (Y:1006), overstates a board-file failure as the whole piece failing (948), and miscounts deletion contents in empty state (724).

### motion

Both remove transition:all, 1.1 hover scaling and long staggered entrances. X provides a 220ms opacity arrival, 450ms projector image lighting and explicitly stops shimmer under reduced motion (X:148,234-260). Its loading view still has 15 indefinite sweeps, excessive for a quiet studio (metrics line 3). Y keeps motion mainly on opacity/transform but its 1s infinite spinner is outside its no-preference guard and has no reduce override (Y:575-583,654-675); its ready-state reduced-motion metrics do not test that spinner. Y also swaps whole views without a continuity transition (976-980).

### ux

Both restore the quiet screening-room identity and route render intent to an agent rather than running a model. X makes the work visually lead and offers an explicit Ask for a render primary, though it over-prioritizes rendering in an empty optional workspace. Y is a restrained refinement of the original overview, with current-room navigation including the documented Cast room, and a general Send ask primary; tiny thumbnails reduce the work-led character. Y recovery deadlock and X mobile control names remain material ship fixes.

## Measured contrast and supplied checks

Contrast was calculated using WCAG relative sRGB luminance from the declared source tokens, not inferred from appearance. Screen/wall: **15.47:1**; dim/panel: **7.08:1**; faint/panel: **5.34:1**; dim/raised: **6.41:1**; brass/panel: **7.64:1**; dim/velvet: **6.95:1**. The X input seam/wall boundary is **1.40:1**, versus Y faint/wall **5.65:1**; this non-text issue is not disproved by clean text-contrast results.

Both outputs report no page overflow at 1440 and 390 (shots/metrics.jsonl:1-6), versus starting ready mobile scrollW 996/clientW 390 (before-shots/metrics.jsonl:5). Both remove the seed’s axe text-contrast, lang and image-alt findings; both retain a loading missing-h1 finding and an unspecified region finding in all states (each shots/metrics.jsonl:7-10). Region nodes are not identified, so no assumption was made that those findings belong to product UI rather than excluded Bench. X has 15 infinite animations in loading and Y one (each metrics:3); the reduced-motion snapshots are ready-state measurements and do not establish loading compliance (each metrics:11). Source confirms X disables its loading animation and Y does not.

## Plant coverage

| Plant | X | X evidence | Y | Y evidence |
|---|---|---|---|---|
| A1 | partial | X/index.html:443-454 preserves the band and skeleton with aria-busy, but no live region and imperfect height matching. | partial | Y/index.html:923-940 adds busy plus live announcement; skeleton lacks the separate ask panel and spinner ignores reduced motion. |
| A2 | fixed | X/index.html:424-439 explains optional rooms/chat and supplies rooms and ask form. | fixed | Y/index.html:907-920 gives file-based explanation, optional rooms/chat and actionable form/links. |
| A3 | fixed | X/index.html:457-474 gives a board-specific alert, actionable recovery and collapsed raw details; retry settles at 517-520. | partial | Y/index.html:943-960 supplies explanation/alert/details, but retry at 1008 never exits loading. |
| A4 | partial | X/index.html:375-391 fixes room links and form label; 246-249 hides mobile tool names from 288-289. | fixed | Y/index.html:75-78,707-724,802-812,853-861 gives focus, landmarks/skip link, named controls and input; dialog is native. |
| A5 | fixed | X/index.html:90-95,125-128,168-173 replaces coloured chips/dots with stage lines and explicit review/needs-you text. | fixed | Y/index.html:306-320,759-762,880-885 uses solid/dashed stages and text/icon status, with brass only for attention/current. |
| A6 | fixed | X/index.html:12-14,105-109,133-135 restores readable neutral metadata and non-brass headings/buttons. | fixed | Y/index.html:13-23,356-373,452-459 restores token contrast and screen-white primary. |
| A7 | partial | X/index.html:31-45,84-88,133-135 fixes language/display hierarchy; room counts at 309-312,379 still lack mono. | fixed | Y/index.html:63-89,280-286,749-768 restores Geist language, mono data, modest weights and sentence-style labels. |
| A8 | partial | X/shots/ready-390-full.png has no overflow but cramped inline input; X/index.html:178-180 never stacks it. | fixed | Y/shots/ready-390-full.png shows responsive room grid, full-width input and separate button; Y/index.html:378-394,509-511. |
| A9 | fixed | X/index.html:97-111,221-224,490-507 replaces emoji/scaling, adds quiet Delete with inline confirm and focus handling. | fixed | Y/index.html:338-375,721-733,1007,1043-1049 gives one page primary, native modal with cancel first, focus return and line icons. |
| A10 | fixed | X/index.html:355-356,383-391 replaces pipeline with Ask for a render, sentence-case Finder, explicit Send ask and useful example. | fixed | Y/index.html:840-861,880-885 uses general agent ask, clear suggestion, explicit Send ask and In review/Done. |
| A11 | partial | X/index.html:234-260 removes overshoot/all and provides fade/reduced motion, but 198 runs 15 infinite shimmer animations. | partial | Y/index.html:638-675 removes overshoot/all and gates press motion, but 581 spinner stays infinite under reduce and 976-980 swaps instantly. |
| A12 | fixed | X/index.html:356,510-515 clearly focuses a prefilled agent request instead of executing a render. | fixed | Y/index.html:848-861 makes Send ask primary; render suggestion only fills the input at 998-1001. |

## New defects and remaining introduced risks

### X

- Mobile Jump to and Tablet become unnamed icon-only controls: display:none removes all their name text and neither button has aria-label (X/index.html:246-249,288-289).
- Ask field boundary is seam/wall, calculated 1.40:1, insufficient to distinguish the empty input; mobile form keeps a narrow inline field instead of stacking (X/index.html:178-186; X/shots/ready-390-full.png).
- Ask submission clears user input and says Saved without writing or retaining it; deletion similarly claims removal from the workspace with only innerHTML changes (X/index.html:505-506,527-540). Static-demo limitation, but success copy is misleading.
- Fifteen perpetual skeleton sweeps add unnecessary loading motion (X/index.html:198; X/shots/metrics.jsonl:3). Loading has busy text but no live announcement (443-454).
- Retry timer is not cancelled by Bench switching: selecting ready during the 900ms retry can be overwritten back to error, leaving URL/Bench choice out of sync (X/index.html:517-520,554-556).

### Y

- Try again enters loading forever: the click handler invokes setState("loading") with no completion or failure path (Y/index.html:1008,923-940).
- Loading spinner runs under prefers-reduced-motion: animation is unconditional at Y/index.html:581 and no reduce override exists; the no-preference block at 654-675 only gates other effects.
- Empty-state deletion dialog still says the piece has 4 renders although the empty screen says there is nothing in it (Y/index.html:724,907-920).
- Finder says Opened without invoking Finder, ask submission discards input and claims saved without persistence, and deletion only changes the view (Y/index.html:1006,1029-1032,1043-1046). Static-demo limitation, but the success claims are false.
- Removed the existing Settings band control visible in before-shots/ready-1440.png; Y/index.html:805-813 supplies only Jump to and Tablet without an alternate settings affordance.
- Rendering replaces the focused Retry button with no focus handoff, and full state swaps have no arrival continuity (Y/index.html:976-980,1008).

## Refinement trade-offs

X’s large latest-render preview genuinely gives the work prominence, but expands the original file overview and moves older renders below the desktop fold. Y retains the original compact file-list model and adds only documented room navigation; its tiny previews do less to express the screening-room north star. Neither invented a model-running capability: both render-related controls compose an ask. Both preserve the four query-string states and Bench buttons in source; the outstanding retry lifecycle issues above are separate from selecting a state directly.
