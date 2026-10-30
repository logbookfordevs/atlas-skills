---
name: atlas-verify
description: "Use when the user requests behavior verification, QA, a verification report or UI stress testing, or wants a benchmark or performance claim assessed."
disable-model-invocation: false
metadata:
  short-description: Verify behavior, stress-test UI and assess measurements.
---

# Atlas Verify

For verification work, select Run, UI Stress or Performance from the task and its material risks, honoring an explicit method choice. Combine methods only when each adds distinct proof; reuse shared evidence rather than repeat checks. Briefly state the selection. Read the selected methods before planning checks or collecting verification evidence, then follow them.

| Method | When it applies | Read and follow |
| --- | --- | --- |
| Run | Verify implemented behavior, smoke/regression checks or a QA list; default for “verify this” | [Run](references/run.md) |
| UI Stress | Exercise a component or screen with realistic worst-case data, empty and extreme states | [UI Stress](references/stress/break-ui.md) |
| Performance | A speedup, regression, benchmark claim or material performance risk needs measured evidence | [Performance](references/performance/benchmark-checklist.md) |

“Create a verification for this feature” means Run unless the requested outcome is reusable verification assets. For asset creation or maintenance, suggest the manually invoked Atlas Verifiers skill. A missing project verifier does not add that work to a Run.

Verification does not authorize product repairs or optimization. Run, UI Stress and standalone Performance produce temporary evidence. UI Stress may build an isolated harness and fixtures while product source and live data stay unchanged. Run owns the structured report contract. Other methods retain their own deliverables and use that report only when requested or contributing to a Run. Performance within a Run uses the same measurements as evidence, without repeating the experiment.
