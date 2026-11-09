---
name: implement
description: Implement with your input on decisions, review the changes, and leave a PR ready for you to merge.
disable-model-invocation: true
---

Implement the work established in this conversation, spec, or ticket. Fetch supplied references before starting; if a reference or requirement is ambiguous, ask. Bring consequential trade-offs or conflicts with the ticket to me before proceeding.

Use `engineering-principles` with TDD where applicable, at agreed test seams. Run focused checks as you go and complete relevant repository validation before review.

**All Tickets:** When the requested scope needs coordination of dependency-linked tickets, read and follow [All Tickets](references/all-tickets.md), then return to the steps below. The coordinator owns those steps once for the complete change. A single ticket linked to a larger spec remains one ticket.

When done:

1. Use `atlas-review` unless I explicitly skip review. Fix valid findings within scope and verify the fixes.
2. Create or reuse the task's branch, commit, and push.
3. Open or update the PR with verification evidence.
4. Wait for CI; fix task-caused failures, verify, and push.
5. Share the PR link and review outcome, ready for me to merge, or explain remaining blockers.
