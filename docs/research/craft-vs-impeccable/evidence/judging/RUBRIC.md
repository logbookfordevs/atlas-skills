# Blind judging rubric

You are judging two anonymous refinements (X and Y) of the same flawed starting page. Both were produced by the same model on the same brief; only the method differed. You do not know the methods and must not try to identify them. Judge only what is in the files and screenshots.

## Inputs (per surface folder)
- `before/` — the starting page (index.html, img/) and `before-shots/` screenshots + `metrics.jsonl`.
- `X/` and `Y/` — each: `index.html`, `img/`, `shots/` (screenshots at 1440 and 390 wide, keyboard focus after Tab presses, full-page captures) and `shots/metrics.jsonl` (horizontal overflow, infinite animations, prefers-reduced-motion rule count, and axe-core WCAG 2.1 AA + best-practice violations).
- `PLANTS.md` — the defects deliberately planted in the starting page, written before any contestant ran. Use only the section for your surface.
- `BRIEF.md` — the user's request and context files given to both contestants (identity: DESIGN.md, PRODUCT.md / CONTEXT.md).
You may open the pages yourself (e.g. `agent-browser --session <yours> open file://...`) to check hover, focus, motion and state switching. Read the HTML/CSS source of both outputs fully.

## Pillars (score each 0–10 for X and for Y)
1. **Color** — contrast (measured, not eyeballed), accent discipline, fidelity to the identity's palette, no off-system hues, state not conveyed by colour alone.
2. **Typography** — scale/ratio coherence, line height and tracking per size, measure, wrapping and punctuation, font-role discipline (e.g. mono only for data where the system says so).
3. **Layout/hierarchy** — spacing system, alignment, grouping, one clear primary action, responsive behaviour at 390px, reading order.
4. **Accessibility** — semantics and landmarks, keyboard reach and visible focus, labels and names, alt text, live regions for async states, target sizes, axe results.
5. **States/polish** — hover/active/focus/disabled states, empty/loading/error quality (app), destructive-action safety, radius/shadow/icon consistency, optical detail.
6. **Copy** — truthfulness to the product facts, clarity, specificity of actions/labels, error and empty messages that say what happened and what to do, voice consistency, punctuation.
7. **Motion** — purpose, duration/easing appropriateness, properties animated (compositor-friendly vs layout), interruption, reduced-motion handling, absence of gratuitous/infinite motion.
8. **UX/direction (within refinement)** — does the page now communicate what the thing is and what to do; fidelity to the user's "keep the identity" constraint; did it overreach (unrequested redesign, invented features or claims) or under-reach.

Scoring anchors: 0–2 still broken; 3–4 partially fixed with clear remaining defects; 5–6 competent; 7–8 strong with minor issues; 9–10 exemplary, nothing material to fix. A pillar winner needs a margin of ≥1.0; otherwise call it a tie.

## Also required
- **Plant coverage table**: for every plant on your surface, mark X and Y as fixed / partial / missed / regressed, with a one-line evidence pointer (file:line or screenshot name).
- **New defects**: anything either output broke or introduced (regressions, invented claims, overreach, bugs), with evidence.
- **Overall**: which output you would ship, and why, in 3 sentences.

## Output
Write `verdict-<surface>-<your-judge-id>.md` (human-readable, evidence-first) and `verdict-<surface>-<your-judge-id>.json` with:
```json
{"surface":"landing|app","judge":"<id>","pillars":{"color":{"X":0,"Y":0,"winner":"X|Y|tie","why":"..."}, "...": {}},
 "plants":{"L1":{"X":"fixed","Y":"partial"}},
 "newDefects":{"X":["..."],"Y":["..."]},
 "overall":{"ship":"X|Y","why":"..."}}
```
Pillar keys: color, typography, layout, accessibility, states, copy, motion, ux.
