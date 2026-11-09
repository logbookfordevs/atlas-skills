---
name: all-tickets
description: "Coordinate dependency-linked tickets on one integration branch."
disable-model-invocation: true
---

# All Tickets

Read the selected tickets and their governing spec, plan or conversation, including source references and blocking relationships. Use their established local files or issue tracker as the source of truth. Ask for missing ticket or tracker context when it prevents resolving the graph; local tickets need no external tracker setup.

The goal is the selected ticket graph implemented on one integration branch, with each ticket accounted for according to its closure mechanism. Work the **frontier**: tickets whose blockers have been integrated and validated, rather than tickets whose workers merely reported completion.

Use `team-up` to choose implementer, exploration and merger assignments within host capacity. Start each subagent in a fresh context. Communicate primarily through pointers to the spec, tickets, shared research notes and exact commits. Tickets may run in parallel or in sequence as dependencies permit. Run independent implementers in the background when supported.

The coordinator owns user decisions. For selected TDD work, pass approved test seams to workers; missing or invalidated seams return as blockers. Workers also raise consequential trade-offs for the coordinator to resolve with the user before that work proceeds.

## Coordinate the graph

1. Resolve the ticket graph and choose the integration branch. If no ticket is ready while work remains, identify the missing dependency, cycle or blocker before dispatching more work.
2. When shared exploration would help, use an exploration subagent to investigate relevant code or primary documentation. Save its notes at a shared location following the artifact convention, accessible outside any disposable worker worktree; give later workers pointers to them.
3. Create or reuse the integration branch from the agreed base.
4. Dispatch a fresh implementer for each ready ticket in its own worktree and branch, based on the recorded integration tip. Use host-supported worktree preparation, preferring `yggtree` when available. Confirm the base before implementation and preserve existing work if it needs reconciliation. Each worker uses `engineering-principles` with TDD where applicable, runs its ticket's checks, merges the current integration tip into its branch, and reports the exact commit, validation evidence and blockers. Workers own ticket implementation and commits; the coordinator owns the shared review, PR and CI workflow.
5. Use a merger subagent to integrate each completed ticket branch. Serialize writes to the integration branch, resolve conflicts against the agreed intent and validate the resulting checkpoint before updating the frontier. Reconcile the current tip again if another ticket merged after a worker's final synchronization. After the first validated merge, push the integration branch and open or update one draft integration PR for visibility. Keep it draft until Implement's shared delivery workflow completes, adding final review and verification evidence there.
6. Dispatch newly unblocked tickets as validated merges advance the graph. Record integrated commits and remaining blockers in the existing ticket or tracking home without duplicating the source requirements. For local tickets, use their status convention and record the integrated commit and validation evidence; resolve them when their acceptance criteria are met. For trackers that close through PRs, closing links represent pending closure until the PR is merged.
7. Once every ticket is integrated, validate the combined ticket scope and return to Implement's shared delivery workflow. If review findings require delegated fixes, use a fresh implementer scoped to the warranted findings, integrate its changes and verify them. The coordinator owns the final review outcome and CI readiness. After shared review, verification and CI succeed, mark the integration PR ready for review before reporting it ready for the user to merge. Keep it draft while delivery blockers remain or when the user requests a draft; marking it ready does not authorize merging.
8. Clean up task-owned implementer and merger worktrees after verifying that their integrated commits are reachable from the integration branch and required notes remain accessible outside the worktrees. Retain unresolved or uncommitted work with its location and next action. Report the integration branch and PR, integrated tickets, remaining closure state and any blockers.
