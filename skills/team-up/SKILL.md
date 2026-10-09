---
name: team-up
description: Choose subagent roles, models, and reasoning effort when delegating work or deciding what to delegate.
---

# Team Up

Delegate where parallel work or context isolation materially helps; use the smallest capable team.

Prefer an available custom agent when its specialization fits the assignment. Respect its fixed model and reasoning effort.

For configurable teammates:

1. Inspect the harness's available models, supported effort levels and dispatch controls. Select from model-and-effort pairs the harness can actually run; resolve display names to advertised identifiers or confirmed aliases.
2. Read [Model preferences](references/model-preferences.md) and use the ladder matching the available providers: GPT only, Claude only, or both. Filter it to supported pairs while preserving order. For other providers or an empty filtered ladder, assess the available options directly using the lowest-cost reliable fit.
3. Choose the earliest suitable pair for the assignment's difficulty, uncertainty and stakes. Bounded, well-specified work can start early; broad synthesis, ambiguous debugging and consequential decisions can justify a later starting point. The ladder is a preference order, not a requirement to execute every step.
4. Inherit settings only after assessing that they fit. Pass the selected model and effort explicitly when the harness supports them.
5. Check the result against the assignment's acceptance criteria. When a failure reflects insufficient reasoning or task capability, move to the next available suitable pair and carry forward useful findings and unresolved gaps. Resolve missing inputs or tool failures directly. Stop escalating when the result meets the criteria.

Honor the user's requested model and effort. If either is unavailable, explain the limitation and resolve the alternative with the user before dispatch. Explicit user choices and fixed custom-agent settings take precedence over the ladders; task-specific evidence can justify a different configurable selection.
