---
name: tracking-implementation
description: "Track implementation when the user asks to track progress, maintain an implementation record, or resume previously tracked work. Apply alongside any executor; a request to implement alone does not activate tracking. Audit Trail adds decision provenance on request."
disable-model-invocation: false
metadata:
  short-description: Implement work with durable tracking, validation, and review.
---

# Tracking Implementation
Keep execution state visible in an Implementation Record alongside the selected executor. The executor chooses and performs implementation work; Tracking records it and maintains the evidence, commit and acceptance contracts. Its Tracking Home is the source of truth for the implementation unit.

## Activation
Activate when the user requests tracking, or resumes an existing tracked implementation from a ticket, spec, plan, prototype, prompt, or conversation. Read every source the user provides before shaping the implementation.

If the user asks to resume tracked implementation, use [resume.md](references/resume.md).

Skip tiny one-shot edits unless the user asks for tracked implementation.

## Optional Audit Trail
For an explicit Audit Trail or Show Me Your Work request, read and follow [Audit Trail](references/audit-trail/audit-trail.md). Resume it when the active record already selects it. Ordinary tracking uses no separate decision log.

## Artifact presentation
Create new local Implementation Records as HTML unless the user explicitly requests Markdown or another format. When resuming an existing record, retain its format unless the user requests a conversion.

Before creating or updating the Implementation Record, read and follow [Show Me](references/show-me.md). Let it organize the artifact around the work being tracked, choosing representations that make changes, evidence, review findings and continuation context easy to inspect. The record fields below define required content; use them within the chosen presentation rather than as a repeated prose template. Preserve structured state and complete, inspectable evidence within the selected Tracking Home; secondary views follow its synchronization agreement. Use the host’s available file-opening mechanism for HTML artifacts. Distinguish explanatory sketches from verified runtime results.

## Implementation Records
Start with one Implementation Record. It persists across sessions, compactions, and handoffs; do not create one record per session.

Split only when the work has independently owned, validated, or reviewed implementation slices. Each implementing agent owns one record and its directly relevant handoff notes; research and review agents report into the record they support.

Before implementation, ask whether the Tracking Home should be local or use an available remote mechanism:

- **Local:** create one Implementation Record in the format defined by Artifact presentation, following the repository or user storage convention. Let Show Me guide its layout and representations for the work and review needs; retain the chosen record across updates.
- **Remote:** inspect the available mechanism and agree where status, execution evidence, review state, findings, and handoff notes will live.

An existing remote ticket may host the record when remote tracking is chosen. Otherwise keep the source artifact unchanged and reference it from the Implementation Record. Treat secondary representations as references unless the user agrees to a synchronization contract.

Keep local Implementation Records outside agent-created commits unless the user or repository convention explicitly opts them in. Remote tracking remains external to Git unless a local counterpart is selected.

The selected Tracking Home is the only required tracking artifact by default. Selecting Audit Trail adds its linked canonical decision log as evidence; execution state remains in the Tracking Home.

When parallel implementation needs separate worktrees, prefer `yggtree` when available before falling back to native Git worktree commands.

## Active Implementation
Choose the active record in this order:

1. The Implementation Record explicitly named by the user.
2. Any record marked `in_progress`, `validating`, or `review`.
3. The pending record selected by the user or executor.
4. A new record shaped from the provided source.

Before starting, read blockers and previous `Continuation Context` when they affect the active implementation.

## Implementation State
Keep this state in the selected Tracking Home. For HTML, embed the fields in a labeled JSON block and expose their current values in the visible record. Markdown records use equivalent frontmatter; remote trackers use equivalent fields. The state schema is:

```json
{
  "id": "<scope-or-slice-id>",
  "title": "<Implementation title>",
  "status": "in_progress",
  "blocked_by": [],
  "source": "<artifact-or-issue-reference>",
  "review_base": "<commit recorded before implementation>",
  "updated_at": "2026-06-15T16:40:00-03:00",
  "review_gate": "pending"
}
```

Statuses: `pending`, `in_progress`, `validating`, `review`, `blocked`, `done`.

`review_gate` uses `pending`, `changes_requested`, `awaiting_acceptance`, and `accepted`:

- `pending`: automated code review has not completed.
- `changes_requested`: the latest review has findings being judged or fixed.
- `awaiting_acceptance`: the review was clean, or its findings were judged and warranted fixes were validated and committed; the gate awaits the user's final judgment.
- `accepted`: the user accepted the checkpoint.

Keep the implementation status `review` until the review gate is accepted. Preserve the automatic review under `## Complete Review Record`:

- For actionable findings, preserve the complete review output plus the judgment and resolution for each finding.
- For a clean review, keep a compact receipt with the reviewed range, finding count per axis, verification gaps, and `awaiting_acceptance` gate state.

Use `blocked_by` for record dependencies, human decisions, missing context, or external blockers.

## Execution Evidence
Record the selected execution bundle before implementation begins: TDD or Source-Driven Development through Atlas Implement, independent `doubt-driven-development`, `atlas-verify`, normal project validation, or a combination.

Use `atlas-verify` when a verification report or QA run is requested, or changed behavior needs reproducible acceptance evidence beyond routine project checks. Reuse adequate existing evidence; keep ordinary validation for low-risk changes such as prose edits. Follow the installed skill's verification and report contracts. Within tracked implementation, return failures to the selected executor for fixes; verification itself stays read-only.

Use Atlas Implement's TDD method when the implementation has a meaningful public Test Seam. Treat a seam approved in the source as pre-agreed. If the seam is missing, ambiguous, or invalidated by codebase evidence, agree on it with the user before writing tests. Use normal validation with an explicit skip reason when no meaningful executable seam exists.

Before moving an implementation to `review`, record evidence for each selected discipline:

- TDD: failing-test evidence before implementation when practical, then the passing run after implementation. If literal test-first was skipped, record why and the nearest proof used.
- Source-Driven Development: official docs or primary sources consulted, version signals checked, and source-backed implementation decisions or unresolved gaps.
- `doubt-driven-development`: fresh-context adversarial review result, findings reconciled, and unresolved concerns escalated.
- `atlas-verify`: link its report from Execution Evidence and the checkpoint handoff, identify the checked scope and revision, and record unresolved failures or coverage gaps. Keep its report in the skill's prescribed location; consume it as evidence alongside the existing code-review and acceptance gates.
- Normal validation: tests, typechecks, lint, builds, runtime checks, browser checks, or a clear reason a check could not run.

Do not mark the implementation `review` while selected discipline evidence is missing without an explicit skip reason.

During implementation, run focused tests and relevant typechecking. Run the complete relevant validation before review, or record the strongest available substitute.

## Green Atomic Commits
Record `HEAD` as `review_base` before editing. Keep it unchanged for any later user-requested review.

Forward local commits are authorized, not mandatory. Create a green atomic commit when a durable checkpoint improves the work.

Commit all implementation-owned changes before opening the automated Review Gate. When the user would benefit from reviewing a small or judgment-sensitive change first, hand off for pre-commit user review instead.

History rewrites and remote or public actions still require approval. If local commits are unavailable, ask.

## Review Gate
After final validation, run `atlas-review` in Code mode once automatically from `review_base`. If it reports findings, set `changes_requested`; judge each finding against the code and its cited source, fix warranted findings, record evidence for dismissals, revalidate, and commit. Do not rerun it automatically. Once the review is clean or warranted fixes are committed, set `awaiting_acceptance`. The user decides whether fixes or later changes require another review.

At `awaiting_acceptance`, use Plannotator's available skills and tool guidance to generate a Guided Review of the final implementation-owned diff from `review_base` and deliver it through Inbox when available. Link the current guide from the Tracking Home and final handoff. Use local delivery unless hosted sharing is authorized. Interactive diff review and record annotation run on user request.

When guide delivery is unavailable, record the gap and provide an inline checkpoint walkthrough. Refresh the guide after implementation changes so it matches the checkpoint awaiting acceptance.

Explicit acceptance of the identified checkpoint, including an Inbox reply, sets `accepted`. Change requests set `changes_requested` and return to implementation. Opening the guide, resolving an Inbox thread, dismissing a review, or receiving no reply leaves acceptance pending.

## Inbox Coordination
Use Plannotator Inbox for unresolved implementation decisions and checkpoint handoff, following its available skills and tool guidance. Continue independent work while decisions are pending. Reconcile replies into the Tracking Home's decisions, blockers and acceptance state before resuming affected work; keep Inbox references there for continuation.

## Implementation Record
Keep task-local state in the Tracking Home using these content groups, or equivalent tracker fields:

- **Source links:** reference the authoritative scope, acceptance criteria, parent and story coverage instead of copying them. When no accessible source supplies this information, write the agreed scope and acceptance criteria in the record, plus any missing source context. Record local deviations and coverage gaps.
- **Structured state:** preserve the Implementation State schema for identity, status, blockers, review baseline and gate; add explanations where needed.
- **Changes and Decisions:** material changes, reasons, implementation-specific invariants, deviations and important constraints.
- **Guided Review:** an Open Guided Review link for the current checkpoint, its reviewed revision or diff identity, and delivery references or explicit availability gaps.
- **Execution Evidence:** selected execution disciplines with their required proof, actual validation runs and results, and explicit gaps or skip reasons. Apply the Execution Evidence requirements above.
- **Complete Review Record:** the full actionable review output, judgment and resolution for every finding, dismissal evidence, unresolved items, or the clean-review receipt defined above.
- **Acceptance Journey:** hands-on inspection guidance when product or design acceptance needs it; follow [Review Guides](references/review-guides.md).
- **Continuation Context:** recovery context and information needed by downstream tickets, including after this implementation is accepted and done.

These groups define required information when relevant, not a fixed heading or presentation template.

Record material deviations, assumptions, trade-offs, scope changes, surprising constraints, reviewer context, and next-agent context in the relevant Implementation Record. If a note belongs to a later slice, put it in that record's `Continuation Context`.

Before final handoff after implementation or review fixes:

- Record a note for non-obvious behavior invariants.
- Create or update an ADR for reusable policy, ownership, shared component, integration contract, data/model, migration, or long-term product decisions.
- Record material simplification opportunities and offer `code-simplification`; do not silently refactor outside the checkpoint scope.

When implementation changes user-facing behavior, copy, or workflow, or acceptance needs visual judgment, follow [Review Guides](references/review-guides.md).

## Operating Loop
1. Read every provided source and resolve the implementation scope.
2. Create or select one Implementation Record and choose its local or remote Tracking Home.
3. Split into additional records only for independently owned, validated, or reviewed slices.
4. Read blockers and relevant previous handoff notes.
5. Record the execution bundle and confirm its Test Seam or skip reason.
6. Mark the active implementation `in_progress` before editing.
7. Before editing, adopt a comment-free default: express intent through names, structure, and types; every new comment must preserve enduring, non-obvious code behavior.
8. Implement one green behavior slice at a time, creating atomic checkpoints when useful.
9. Record important scope changes, working set changes, and blockers as they happen.
10. Move to `validating`, run the complete relevant validation bundle, and record discipline evidence.
11. Commit remaining implementation-owned changes, or hand off for pre-commit user review.
12. Once implementation-owned changes are committed, move to `review` and run the Review Gate workflow.
13. Run the checkpoint-notes/ADR check before final handoff.
14. Move to `done` only after the review gate is accepted.
15. Update the Tracking Home's modification signal whenever its record changes.
