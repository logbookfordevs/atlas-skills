---
name: arena
description: "Spawn N parallel candidates at the same task, pick a base, graft the strongest parts of the losers into it. Use for /arena, 'arena this', 'throw it in the arena', or when one attempt at a non-trivial artifact would lock in the wrong shape."
disable-model-invocation: true
---

# Arena

Track Frame, Fan out, Cross-judge, Pick, Graft and Verify with the host's available planning mechanism. When used by Architect, its integration rules determine the minimum distinct candidates and the proof expected of design artifacts.

## Phase A: Frame

Every candidate gets the same prompt, so the prompt is the contract.

1. State the artifact each candidate is producing.
2. Derive the rubric, 3-6 concrete gradeable criteria for what success looks like on *this* task. It is the picker's tool in Phase D. Candidates only see the task.
3. Pick available runners through the host's delegation tools, honoring user choices and project policy. Prefer different model perspectives for judgment-sensitive work; same-model candidates are valid when disclosed. If an explicitly requested model is unavailable, resolve the fallback with the user. Without delegation, produce candidates sequentially in isolated output locations and disclose the lack of independent contexts.
4. Give each candidate its own output location (a git worktree where possible, otherwise `/tmp/arena-<slug>/candidate-<n>/`), per the [Separate Before Serializing Shared State](../principles/principle-separate-before-serializing-shared-state/SKILL.md) reference.

## Phase B: Fan out

Schedule candidates within host capacity, each with the task, the path to the shared grounding, its own output path, and instructions to produce the artifact and a short rationale naming the alternatives it considered and what it rejected.

If a candidate produces no output, proceed with N-1 and note the dropout.

## Phase C: Cross-judge

After all candidates finish writing, assign a read-only cross-judge using an available model, preferably a different family from the parent's. It sees the rubric and candidates by path label, scores each criterion, and recommends a base with rationale. Its reading can run alongside Phase D. Without an independent reviewer, perform a separate sequential scoring pass and disclose that limitation; do not claim independent agreement.

## Phase D: Pick a base

Read every candidate end to end before picking. Score each against the rubric criterion by criterion, not on holistic feel, and compare with the cross-judge. Agreement on the base supports the pick; validate its reasoning against the rubric. Investigate disagreement for missed evidence, different trade-offs or rubric ambiguity. Read both rationales before deciding.

Pick the base a future maintainer can extend most easily without breaking invariants. When two feel tied, prefer the cleaner boundary or smaller API, per [Laziness Protocol](../principles/principle-laziness-protocol/SKILL.md).

## Phase E: Graft

Walk each losing candidate once more for what is worth porting into the base, usually one or two things per candidate, not most of it. Fold each graft in by hand, per the [Redesign From First Principles](../principles/principle-redesign-from-first-principles/SKILL.md) reference, so the result stays coherent under one mental model. Don't paste mechanically.

If the candidates converge on one shape, that is strong agreement. Note it and ship the consensus shape. No graft is needed. If they wildly diverge, Phase A was under-specified. Reframe and re-run rather than averaging the divergence.

## Phase F: Verify

Verify the synthesized artifact like any other output, per the [Prove It Works](../principles/principle-prove-it-works/SKILL.md) reference. If verification finds a problem the arena missed, either Phase A was wrong (re-frame and re-run) or a candidate caught it and you missed the graft (go back to Phase E). Don't paper over it.

## Outputs

One synthesized artifact, with a short synthesis note alongside naming the base and why, the cross-judge's verdict, each graft with its source candidate, what was rejected and why, any convergence or dropouts, and the verification result.
