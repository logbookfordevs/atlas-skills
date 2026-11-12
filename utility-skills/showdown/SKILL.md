---
name: showdown
description: "Benchmark skills, prompts or agent setups head-to-head on identical briefs with blind judges, delivered as a fighting-game report."
disable-model-invocation: true
---

# Showdown

A showdown pits **contenders** (skills, prompts, agent setups) against identical briefs and lets blind judges score them round by round. The contender is the only variable: model, effort, seed, context, tools and time stay equal. The result is an observed outcome for this sample, never a ranking.

Use Team Up's Arena for Phase A (Frame), Phase B (Fan out) and Phase C (Cross-judge) under Showdown's rounds, seeds and judging contract. A showdown reports; it never picks a base or grafts contenders together, so Arena Phases D–F stay out. Team Up owns roles, models, effort and dispatch; Showdown owns the card, the evidence and the verdict.

Work in a scratch folder. The subject project stays untouched: contenders refine copies. Recommendations the user put out of scope stay out of every brief and the report.

## 1. Audit the contenders

Read every instruction file of every contender before designing a round: entry file, every reference, manifests, and a listing of scripts and binaries with what they enforce. A skim produces wrong scores; an earlier verdict that missed a bundled mode is exactly the failure this step prevents. Record composition: when a contender bundles another source, its manifest names it, and that mode competes as that source.

Delegate the reading in shards when it is large. Each shard reads one file at a time with a file-read tool or in chunks of at most 200 lines, and writes a rule inventory: a ledger of every file with its line count and the lines read, rules per round with `path:LINE`, refusals and scope limits, and process obligations. Batched shell dumps truncate silently; a shard that cannot confirm every line is rerun, never used.

Done when every file of every contender appears in a ledger as read to its last line.

## 2. Frame the card

- **Rounds**: one per dimension where the contenders overlap, each with a one-line question.
- **Refusal probes**: from the inventories, list what each contender declines by design. Give each declined scope its own brief and report it outside the main tally as a walkover; a refusal the instructions demand is contract adherence, not lost quality.
- **Stages**: at least two surfaces where the contenders' methods may diverge (a marketing page and an in-app screen with empty, loading and error states, for example). Write down why each task was chosen; the report repeats it.
- **Seeds**: when any contender only refines, author flawed starting material from the real subject so every contender competes inside its scope. Plant skill-neutral defects across every round, drawn from general practice rather than one contender's rulebook, in a hidden `PLANTS.md` written before any run.
- **Rubric**: write it from [Judging](references/judging.md).

Done when the briefs, `PLANTS.md`, rubric and refusal probes are on disk, all dated before the first contender ran.

## 3. Fight

Through Arena Phase B, run every contender on every brief once: same model and effort, one isolated folder per run, identical copies of the seed and context. Each brief names only its own contender's entry file and bars reading the others. Each run follows its contender's own loading rules and writes `NOTES.md`: files read, each change with the rule that drove it (`path:LINE`), anything declined or deferred with its citation, verification done and gaps. Runs are non-interactive: the contender's own no-answer path applies, and unasked questions go in `NOTES.md`.

Done when every run has an output or a recorded dropout.

## 4. Capture

Run [`scripts/capture.sh`](scripts/capture.sh) on the seed and every output with the same arguments: screenshots at desktop and 390px, keyboard focus, axe-core, horizontal overflow, infinite animations and a reduced-motion pass.

Done when the seed and every output have a capture folder with `metrics.jsonl`.

## 5. Judge blind

Seal a random label map per stage before building judge packages. Build and dispatch the packages per [Judging](references/judging.md), with at least two judges from model families other than the contenders' model, selected through Team Up.

Done when every judge × stage verdict JSON parses and covers every round and every plant.

## 6. Unblind and rule

Open the map and dispatch a fresh rule judge per [Judging](references/judging.md#rule-judge). Then spot-check at least five of its citations yourself against the contenders' files.

Done when every round has a combined result with a verified citation from every contender (or an explicit `absent`), and your spot-checks match.

## 7. Report

Write `showdown.json` and build the fighting-game report from the bundled template per [Report](references/report.md), then verify it in a browser.

Done when the report renders at desktop and 390px with zero axe violations, every evidence link resolves, and its numbers come from the verdict JSON rather than retyped prose.
