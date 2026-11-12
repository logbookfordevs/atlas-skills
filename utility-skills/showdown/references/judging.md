# Judging

Blind judges score outputs; a rule judge explains the scores. Keep the two apart: a judge who knows the contenders' rulebooks starts recognising whose output is whose.

## Rubric

Write `RUBRIC.md` once and copy it into every judge package unchanged.

- Score every round 0–10 for each label. Anchors: 0–2 still broken; 3–4 partly fixed with clear remaining defects; 5–6 competent; 7–8 strong with minor issues; 9–10 nothing material to fix.
- A round winner needs a margin of at least 1.0; anything smaller is a draw.
- Each round names what it measures in checkable terms (measured contrast, tab reach, properties animated, reduced-motion behaviour), so judges score evidence rather than taste.
- Plant coverage: every plant for the stage marked `fixed`, `partial`, `missed` or `regressed` per label, each with a `file:line` or screenshot pointer.
- New defects: regressions, invented claims, overreach and bugs each output introduced.
- Ship pick: the label the judge would ship, in three sentences.

## Sealed map

Write `map.json` before building any package: per stage, each label to a contender id, assigned at random (`{"landing": {"A": "<contender>", "B": "<contender>"}}`). Contender ids are the same everywhere: map, rulings and `showdown.json`.

## Judge package

One folder per stage, containing:

- `before/` with the seed and its capture;
- one folder per label holding only the output files and their capture;
- `PLANTS.md` cut to this stage;
- `BRIEF.md` with the request and context exactly as contenders received them;
- `RUBRIC.md`.

Scrub before dispatch: grep every file for contender names, method names and tool-specific markers, including context files. A schema comment written by one contender's tooling (for example `<!-- tool:product-schema -->`) is a leak even in a file both sides received. Contender `NOTES.md` stays out of the package.

## Judge brief

Each judge reads `RUBRIC.md` first, then every file completely, one file at a time in chunks of at most 200 lines, and views every screenshot. It may open the outputs in a browser to check hover, focus, motion and state switching. It does not try to identify the method behind a label, and writes `verdict-<stage>-<judge>.md` (evidence first) and `verdict-<stage>-<judge>.json`:

```json
{"stage": "landing", "judge": "G",
 "rounds": {"<round>": {"A": 0, "B": 0, "winner": "A|B|draw", "why": "..."}},
 "plants": {"P1": {"A": "fixed", "B": "partial"}},
 "newDefects": {"A": ["..."], "B": ["..."]},
 "ship": {"pick": "A|B", "why": "..."}}
```

## Combining verdicts

Agreement between judges is the result. When they split, prefer the judge whose evidence is line-cited and computed (measured contrast, quoted source lines) over a generic one, and lower that round's confidence. A judge that marks every plant `fixed` for every label is lenient: keep its scores, weight the discriminating judge, and disclose the leniency in the report.

## Rule judge

A fresh judge from a family other than the contenders' model receives the sealed map, every verdict, the rule inventories, each contender's `NOTES.md`, the refusal-probe outputs, and the paths to the contenders' actual instruction files. It verifies each rule it cites by opening the file at that line, and writes `RULINGS.md` plus `rulings.json`:

```json
{"rounds": {"<round>": {
   "byStage": {"<stage>": {"winner": "<contender>|draw", "agreement": "all|split|<judge>-only"}},
   "combined": "<contender>|draw", "confidence": "high|medium|low",
   "why": "2–4 sentences, evidence first",
   "rules": {"<contender>": [{"rule": "...", "cite": "path:LINE", "effect": "helped|hurt|absent"}]},
   "instructionDepth": {"<contender>": 0, "note": "depth of the instructions, independent of this run"},
   "variance": "instruction-led or plausibly single-run execution"}},
 "refusalProbes": [{"contender": "...", "behavior": "...", "quality": "builder only", "contractAdherence": "...", "risks": "builder only", "cite": ["..."]}],
 "refusalProbeVerdict": "how the probe is scored given one side declines by design",
 "refusals": [{"contender": "...", "what": "...", "cite": "path:LINE"}],
 "selfViolations": [{"contender": "...", "what": "...", "cite": "..."}],
 "overall": "five sentences at most"}
```

It cites at least one verified rule from every contender for every round, or marks the rule `absent` when a contender has nothing on the point that decided the round. It checks each contender's `NOTES.md` against its instruction files and reports where a run broke its own contract. A refusal probe is judged on contract adherence for the declining side and on quality for the side that builds; it is never averaged into the rounds.
