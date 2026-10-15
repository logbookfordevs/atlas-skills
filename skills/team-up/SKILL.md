---
name: team-up
description: "Choose subagent roles, models and reasoning effort for delegation; use Arena to compare and synthesize competing candidates, or Swarm for parallel coverage and races with consolidated evidence."
---

# Team Up

Default to Delegation for ordinary assignments and role/model selection. Select Arena or Swarm when requested or deliberately chosen for the outcome below. Read the selected method and use the [selection policy](references/selection.md) for teammate assignments in every mode.

| Mode | Outcome | Read and follow |
| --- | --- | --- |
| Delegation | Choose what to delegate and fitting roles, models and effort with the smallest capable team. | [Selection](references/selection.md) |
| Arena | Compare complete candidates against a rubric, select a base, graft useful strengths and verify the synthesized artifact. | [Arena](references/arena/arena.md) |
| Swarm | Partition coverage, race the same brief or mix both, then return one evidenced report with gaps and a declared race rule. | [Swarm](references/swarm/swarm.md) |

Requests for `arena` or `swarm` select that bundled method. A caller requesting only role/model selection uses the selection policy and returns to its existing workflow; policy use does not launch Arena or Swarm. The selected task determines permitted writes, evidence and delivery scope.
