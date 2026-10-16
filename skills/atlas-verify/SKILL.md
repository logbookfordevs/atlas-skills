---
name: atlas-verify
description: "Run requested verification of implemented behavior or project QA, including requests to verify after implementation or in an existing browser session. Also create or maintain reusable project verifiers, or assess benchmark and performance claims."
disable-model-invocation: false
metadata:
  short-description: Verify behavior, maintain project verifiers and assess measurements.
---

# Atlas Verify

Select from the requested outcome, honoring an explicit method choice. Read and follow the selected method; combine only when the requested proof needs both.

| Method | When it applies | Read and follow |
| --- | --- | --- |
| Run | Verify implemented behavior, smoke/regression checks or a QA list; default for “verify this” | [Run](references/run.md) |
| Create | Generate a reusable project-local verification skill, control harness or feature map | [Project verifiers](references/project-verifiers.md), then [Create](references/create/create-verification-skill.md) |
| Maintain | Audit or refresh an existing project verification skill and its feature map | [Project verifiers](references/project-verifiers.md), then [Maintain](references/maintain/maintain-verification-skill.md) |
| Performance | Measure or assess a speedup, regression or benchmark claim | [Performance](references/performance/benchmark-checklist.md) |

Requests for `pe-verify`, `create-verification-skill`, `maintain-verification-skill` or `benchmark-checklist` select their corresponding bundled method. “Create a verification for this feature” means Run unless the requested outcome is reusable verification assets. A missing project verifier does not turn a Run into Create or Maintain.

Verification does not authorize product repairs or optimization. Create and Maintain may write the selected project verifier directory; Run and standalone Performance produce temporary evidence. Run owns the structured report contract. Other methods retain their own deliverables and use that report only when requested or contributing to a Run. Performance within a Run uses the same measurements as evidence, without repeating the experiment.
