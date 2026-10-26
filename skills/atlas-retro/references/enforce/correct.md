---
name: correct
description: "Find the mistakes agents keep repeating in this repo and make each one impossible. Try architecture first, then types, then a lint whose error names the fix, then a test, and write docs last. Prove each check fails on a real past mistake. Use only for explicitly requested Enforce work within the authorized repair scope."
disable-model-invocation: true
---

# Correct

The operator keeps correcting agents in this repo for the same mistakes. Within the authorized mistake classes, change the repo so future agents encounter a structural constraint or a failing check. An ordinary correction does not activate Enforce.

Assume every contributor is an agent that sees only the files it opened, copies the nearest example, and takes the shortest path that compiles. Design the repo so a change that looks right from one file is right for the whole repo.

## Find the mistake classes

First, inspect the selected session and directly relevant recent commits, reverts, review comments, agent instruction files, and comments that explain workarounds. Reuse supplied evidence. Report missing access instead of inventing recurrence. Group the mistakes into classes. A class counts once it has happened twice; cite the distinct occurrences. If recurrence is unproved, report the candidate and evidence gap rather than expanding the repair scope.

## Fix each class at the highest level that works

1. **Eliminate it with architecture.** Give each piece of state one owner and each task one supported way. Hide internals so the wrong import fails. Replace hand-synced lists with one source of truth. Delete old ways and dead code an agent would copy.
2. **Enforce it with types so the bad state can't be written.** If bad code still compiles, add a lint or CI check whose error names the file, type, or function to use instead. If the pattern is already common, fail only when a change adds more.
3. **Test the behavior.** Within the selected repair, fix tests that pass when the behavior breaks or fail when only the internals change. Preserve unrelated tests and meaningful coverage.
4. **Write docs or agent rules last, only for judgment calls.** Nothing fails when an agent skips them.

## Fix and prove

Fix the authorized classes, prioritizing frequency and impact. Keep changes proportionate; broader architectural changes outside that scope require a separate decision. Use the repository's checkpoint and commit policy. Prove each new guardrail rejects a real past mistake using a controlled fixture, temporary reproduction or isolated checkout, and show the corrected case passes. Keep deliberately failing reproductions outside the product checkpoint. Run relevant project validation. Reuse or wire the guardrail into the existing CI mechanism within scope; distinguish local execution, CI configuration and an observed CI run. Report unavailable proof or CI execution as a gap. Follow the repository's exception policy; retain a reason and owner for any necessary exception.

## Retain the enforcement evidence

Use the existing project convention to record each repaired class, its enforcing mechanism and proof. Reuse check configuration and diagnostics rather than creating a parallel rule inventory. Add or revise agent instructions only for an enduring judgment call that enforcement cannot express; follow `writing-for-agents` when available. If it is unavailable, report the authoring gap and continue independent authorized code/check work. A correction does not require a new rule or table. Retire redundant prose only when its invariant is covered and removal is within scope.

**Reply:** each class with its evidence, the level you picked, and why a higher level didn't work.
