---
name: all-tickets
description: "Coordinate dependency-linked tickets on one integration branch."
disable-model-invocation: true
---

You have been provided tickets, usually with a governing spec or plan, describing how to implement the work.

The tickets live in an issue tracker or as local files. If you can't find them or their blocking relationships, ask the user.

The goal is the selected tickets implemented on a single **integration branch**, with every ticket resolved the way its tracker or local convention closes work.

The tickets are not a list of steps. They are a **task graph** with blocking relationships between them. This means there is always a **frontier** of tickets which are ready to be grabbed.

Start every subagent with a fresh context window. Use `team-up` to choose implementer, exploration and merger assignments.

Communication to and from subagents should be sparse. Communicate primarily through **context pointers**: to the spec, tickets, research notes, and previous commits. Don't duplicate information already available via pointers.

**Implementer subagents** should be run in the background where possible for maximum concurrency. They can't reach the user, so they return missing test seams and consequential trade-offs to you as blockers; resolve them with the user before that ticket proceeds.

## Steps

1. Read the spec and tickets to understand the task graph.

2. (optional) Use an **exploration subagent** to conduct any exploration required by the tickets - relevant codebase files or external documentation. Ensure the exploration subagent can save files - it should save its markdown notes in a directory outside the repo, accessible by all future subagents. This lets **implementer subagents** focus on implementation rather than exploration.

3. Create the integration branch. If the issue tracker closes work through PRs, or the user asks for one, open a draft PR after the first merge in step 5 (a branch with no commits ahead of main can't open one), marked as closing the spec and tickets.

4. Use a fresh **implementer subagent** for each ticket, each in its own worktree on its own branch. Each implementer subagent:
   - confirms its worktree is based on the integration branch before starting, and resets onto it if not, while the worktree holds no work of its own;
   - uses `engineering-principles` with TDD at the agreed test seams to build the ticket;
   - merges the integration branch tip into its own branch before reporting done

5. Once an **implementer subagent** completes, merge its work to the integration branch with a **merger subagent**, which runs the relevant checks on the merged result before reporting done.

6. If a validated merge changes the **frontier** of available tickets, kick off more **implementer subagents** to work on the new tickets. This allows for maximum concurrency.

7. Once all tickets are complete, return to Implement's delivery steps for the integration branch. Fix review findings in a single fresh **implementer subagent** and merge its work as in step 5.

8. Once delivery passes, mark the PR ready for review. Resolve each ticket the way its tracker or local convention closes work, and report the integration branch.

9. Clean up all **implementer subagent** worktrees.
