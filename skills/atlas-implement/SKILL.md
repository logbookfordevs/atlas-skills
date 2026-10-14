---
name: atlas-implement
description: "Build features or fix bugs test-first with TDD, red-green-refactor or integration tests; ground framework, library or API implementation in official, version-matched documentation with Source-Driven Development. Select either method or combine them when both apply."
disable-model-invocation: false
metadata:
  short-description: Implement with bundled TDD and Source-Driven methods.
---

# Atlas Implement

Select from the requested outcome and implementation context, honoring an explicit method choice. Read and follow each selected method before editing; combine methods when both needs apply.

| Method | When it applies | Read and follow |
| --- | --- | --- |
| TDD | Test-first feature or bug work, red-green-refactor, integration tests, or behavior with an agreed public Test Seam | [TDD](references/tdd/tdd.md) |
| Source-Driven Development | Implementation whose correctness depends on framework, library or API versions and their official documentation | [Source-Driven](references/source-driven/source-driven.md) |

For combined work, use Source-Driven to establish version-specific facts and TDD to prove the behavior through the agreed seam. Retain each method's evidence and scope. Mechanical edits and version-independent work use normal project validation when neither method applies.

When Tracking is active, record selected methods separately as `atlas-implement:tdd` and `atlas-implement:source-driven`. Return their evidence to the existing Implementation Record. Tracking owns execution state, the review baseline and acceptance; Atlas Implement supplies the selected implementation methods.
