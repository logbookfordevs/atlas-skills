---
name: atlas-verifiers
description: "Choose, create or maintain reusable app and formal verifiers, or investigate a state model with Statechart. Describe the problem; no method name is required."
disable-model-invocation: true
---

# Atlas Verifiers

Start from the user's problem and inspect the relevant project context. When the requested outcome clearly identifies a method, name it and proceed. When suitable approaches imply materially different outcomes, effort or assumptions, explain the relevant options in plain language, recommend one with a reason, and wait for the user's choice. Ask for facts only when they cannot be discovered from the project. Advice requests stay advisory.

Read the selected methods before planning or performing their work. Combine methods when each serves the selected outcome; reuse evidence.

| Method | Outcome | Read and follow |
| --- | --- | --- |
| Create | A reusable project skill for launching and driving the real app, with evidence recipes and a feature map | [Project verifiers](references/project-verifiers.md), then [Create](references/create/create-verification-skill.md) |
| Maintain | Bring an existing app-driving skill, harness and feature map back in line with the app | [Project verifiers](references/project-verifiers.md), then [Maintain](references/maintain/maintain-verification-skill.md) |
| Statechart | Check a state-transition model and explain paths that violate agreed rules; no reusable verifier is required | [Statechart](references/statechart/SKILL.md) |
| Formal Create | Build reusable checks for important properties, with explicit tools, bounds, assumptions and code coverage | [Formal Create](references/formal-create/SKILL.md) |
| Formal Maintain | Reconcile existing formal checks with changed code, distinguishing verification drift from product bugs | [Formal Maintain](references/formal-maintain/SKILL.md) |

Create and Maintain write verification assets. Statechart works in scratch space. Formal methods may introduce temporary defects to prove checks can fail; restore those experiments before handoff and preserve existing product changes. Product repairs require implementation authority. Keep each method's evidence and deliverable contract, including bounds, assumptions and unverified coverage.

Running QA, UI stress checks or performance measurements belongs to Atlas Verify. Reusable app-driving skills remain usable directly; they do not require a copied Atlas report engine.
