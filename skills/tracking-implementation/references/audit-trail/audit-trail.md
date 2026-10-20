---
name: show-me-your-work
description: "Keep a reviewable decision trail for long-running or unattended work: a TSV log with one row per decision (what, why, evidence, result). Optional Audit Trail for tracked implementation, selected on user request. Local by default; follow Tracking's artifact and commit policy."
disable-model-invocation: true
---

# Show me your work

Keep one canonical decision log when Audit Trail is selected. Record the mode and log reference in the Tracking Home's Execution Evidence and retain them on resume. Tracking owns execution state, review and acceptance; this trail supplies append-only decision provenance. Long or unattended work alone does not activate this mode.

## The format

A single TSV file, one row per decision. Cells stay single-line. Evidence is a pointer, not prose.

Copy [the decision-log template](references/decision-log-template.tsv) (the header row) to start a clean log. Columns:

- **ts.** ISO8601 timestamp.
- **phase.** The phase or workstream.
- **decision.** What was chosen or done, one line.
- **why.** The reason in plain words. If a principle drove it, say it plainly, not as a jargon tag.
- **evidence.** A link or path that proves it: commit SHA, PR number, `file:line`, or an artifact, trace, or screenshot path. Never a paragraph.
- **result.** The outcome or predicate state: `tests green`, `reverted`, `pixel-diff 0`, `INCONCLUSIVE`, `open`.

An example, plain-spoken so a reviewer reads it at a glance.

```
ts	phase	decision	why	evidence	result
2026-05-24T09:02:00Z	frame	counted the work first, about 100 components and roughly 75 hours	wanted to know the size before starting a long run	commit 3a9f1c2	found 5 things to sort out before starting
2026-05-24T09:40:00Z	harness	took screenshots of the old version before changing anything	so we can compare old against new and catch any visual change	scripts/snapshot.sh, baseline/	saved 120 reference screenshots
2026-05-24T11:15:00Z	widget	moved the widget styles over without changing how it looks	keep the change small and the result identical	commit 7c21e0a, pixel-diff 0	looks identical, tests pass
2026-05-24T12:30:00Z	widget	threw out a helper's work because its screenshots were blank	checked the real files instead of trusting its summary	worktree reset	reverted, tightened the instructions for next time
```

## Logging a row

Write each entry the way you'd tell a teammate what you did. Plain words, concrete actions, no AI speak or abstract jargon (the bundled [Unslop](../unslop/unslop.md) reference applies to log text too).

Use the bundled [log helper](scripts/log.sh) as `bash <audit-method-directory>/scripts/log.sh <logfile> <phase> <decision> <why> <evidence> <result>`; resolve its path from this reference, not the product working directory. It stamps `ts`, writes the header on first use, strips stray tabs/newlines, and prefixes any cell starting with `=`, `+`, `-`, or `@` with a single quote. A bare `printf` appending a row works too, but mind those same bytes if cells come from generated or user-supplied text.

Log decision points and checkpoints, not every action: a fork chosen, a unit completed with its verification result, a pivot or revert with its trigger, a blocker surfaced, a gate fixed. For loop runs, one row per iteration. Skip the trivial and self-evident.

A run is one agent conversation, including its later turns and any summary of it. A pickup, a replacement agent, or a new chat starts a new run. When a run adds to a log that already has rows, its first row has phase `start`, and so does its first row after another run's `start` row. So a run that comes back to a log in a later turn first reads the log's last rows to see whether another run wrote since. A `start` row names the `ts` range of the rows before it that this run did not write, and its evidence names this run, such as its agent id. Use phase `start` for nothing else.

## Where it lives

Follow the repository or user artifact convention. By default keep the TSV beside the local Implementation Record and outside agent-created commits. For a remote Tracking Home, agree on an accessible attachment or linked artifact location; a local path alone is not remote delivery. Link the canonical TSV from the Tracking Home. Any rendered view is a secondary representation under Tracking's synchronization agreement.

Commit the trail only when the user or repository convention opts it in, following Tracking's checkpoint policy.

## Rules

- Append-only. A wrong call gets a new row that supersedes it. Never edit or delete history.
- Prefer evidence produced by committed scripts over hand-made one-offs (the bundled [Encode Lessons in Structure](../principles/principle-encode-lessons-in-structure/SKILL.md) principle; this evidence preference does not authorize unrelated tooling changes).

## Audit the log against the transcript

At a checkpoint handoff, check that the log told the truth. Use the host's available transcript mechanism to locate only this run's conversation in the active workspace, including its continuations and summaries. Match the run/session identity as well as the workspace; a matching working directory alone does not identify this run. Restrict reads to that conversation rather than searching unrelated session contents.

If the transcript is inaccessible or incomplete, reconcile against the visible conversation and recorded artifacts, and record the missing coverage as a transcript-audit gap. Do not claim full transcript reconciliation. Walk this run's rows against what actually happened. Each stretch begins at one of this run's `start` rows, or at the first row if this run created the log, and ends at the next `start` row of another run:

- Check that every row maps to a real decision or action.
- Check that each row's evidence resolves and shows what the row claims.
- A fork, pivot, or abandoned approach that shaped the work but isn't logged is a gap. Add it.

Correct the log, not the story. The audit never edits or removes a row, even an invented one. When a row records neither a real decision nor a real action, or its claim or evidence is wrong, add a row that supersedes it with what actually happened and a pointer that resolves. This audit does not check rows outside this run's stretches. If this run's own work shows one of them is wrong, supersede it like any wrong call.

## Cross-model review of the trail

Before a checkpoint handoff, use available delegation controls to request a read-only reviewer on a different model family from the one that did the work. Give the reviewer the run identity, trail, audited row ranges and the same bounded transcript evidence. Self-review is not independent review. The reviewer flags what the user should pay attention to; it does not redo the implementation.

If a different family, delegation or transcript access is unavailable, record the actual reviewer/model and evidence coverage, or that review was not run. A same-family independent review may supply useful findings but does not fulfill cross-family review. Keep unmet independence or transcript coverage visible as gaps; do not invent a reviewer or report "No flags" as evidence of an unperformed review.

- Decisions logged with weak or absent evidence.
- Verification steps skipped or claimed without proof in the transcript.
- Choices that look risky in hindsight (premature, scope-creeping, papering over a symptom).
- Gaps the user would otherwise miss on a casual skim.

Include an "Attention" summary in the checkpoint handoff and link it from Execution Evidence. Identify the actual reviewer model, audited row ranges and transcript/independence coverage, then list flags with pointers to specific rows or moments. "No flags" is valid only for a performed review within its stated scope. Ordinary progress replies need no repeated footer. Reconcile findings into Tracking's existing decisions, evidence, blockers and handoff; the trail review does not replace code review or create another acceptance gate.

## Reviewing the trail

Read top to bottom, follow the evidence pointers, spot-check. GitHub renders a committed TSV as a table. `column -s$'\t' -t <logfile>` renders it in a terminal.

## Composing this skill

Other methods that explicitly select this audit trail load this reference and reuse the canonical log. The trail owns its format; the Tracking Home retains execution state and acceptance.
