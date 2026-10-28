---
name: atlas-verify
description: "Use when the user requests behavior verification, QA, a verification report or UI stress testing; asks to create or maintain project verifiers; or wants a benchmark or performance claim assessed."
disable-model-invocation: false
metadata:
  short-description: Verify behavior, maintain project verifiers and assess measurements.
---

# Atlas Verify

For verification work, select Run, UI Stress or Performance from the task and its material risks, honoring an explicit method choice. Combine methods only when each adds distinct proof; reuse shared evidence rather than repeat checks. Briefly state the selection. Read the selected methods before planning checks or collecting verification evidence, then follow them.

| Method | When it applies | Read and follow |
| --- | --- | --- |
| Run | Verify implemented behavior, smoke/regression checks or a QA list; default for “verify this” | [Run](references/run.md) |
| UI Stress | Exercise a component or screen with realistic worst-case data, empty and extreme states | [UI Stress](references/stress/break-ui.md) |
| Create | User requests a reusable project-local verification skill, control harness or feature map | [Project verifiers](references/project-verifiers.md), then [Create](references/create/create-verification-skill.md) |
| Maintain | User requests an audit or refresh of an existing project verification skill and its feature map | [Project verifiers](references/project-verifiers.md), then [Maintain](references/maintain/maintain-verification-skill.md) |
| Performance | A speedup, regression, benchmark claim or material performance risk needs measured evidence | [Performance](references/performance/benchmark-checklist.md) |

Requests for `break-ui` select UI Stress. Requests for `pe-verify`, `create-verification-skill`, `maintain-verification-skill` or `benchmark-checklist` select their corresponding bundled method. “Create a verification for this feature” means Run unless the requested outcome is reusable verification assets. A missing project verifier does not turn a Run into Create or Maintain.

Verification does not authorize product repairs or optimization. Create and Maintain may write the selected project verifier directory; Run, UI Stress and standalone Performance produce temporary evidence. UI Stress may build an isolated harness and fixtures while product source and live data stay unchanged. Run owns the structured report contract. Other methods retain their own deliverables and use that report only when requested or contributing to a Run. Performance within a Run uses the same measurements as evidence, without repeating the experiment.
