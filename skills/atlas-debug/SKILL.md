---
name: atlas-debug
description: 'Use when the user asks to diagnose or debug a bug or performance regression, or reports something broken, throwing, failing or unexpectedly slow.'
disable-model-invocation: false
---

# Atlas Debug

Read and follow [Diagnosing Bugs](references/diagnosis/diagnosing-bugs.md) as the diagnosis workflow.

Read and follow [Statechart](references/statechart/SKILL.md) when checking state transitions, event ordering, retries or concurrency would materially help diagnose the bug or help the user understand it, or when the user explicitly requests Statechart. Its checked paths and charts serve both investigation and human understanding.

Statechart augments the diagnosis loop. Keep its model bounds and assumptions visible, and reproduce suspected bug paths against real code; a model result does not replace the diagnosis workflow's reproduction and fix verification. The task's scope determines whether to diagnose only or also apply a repair.
