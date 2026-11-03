---
name: atlas-explain
description: "Use when the user asks how code works, why a decision was made, wants to learn through conversation, wants a live interface, visual effect or screenshot explained, or asks to catch up on this chat’s work and pending decisions."
disable-model-invocation: false
metadata:
  short-description: Explain code and interfaces, teach, or catch up on work.
---

# Atlas Explain

Select and combine methods from the request and conversation, then read and follow the references needed for the explanation. An explicit method choice guides selection. Ask only when ambiguity would materially change the investigation or deliverable. When the user asks to explore options, present the relevant methods with short descriptions and a recommendation.

Use Teach for guided learning or when an explanation has not landed; let it coordinate How and Why for mechanics and rationale. Select Catch Up when the user asks about this chat’s recent work or pending decisions. Adapt the methods as follow-up questions change what the user needs to understand.

| Method | Need | Read and follow |
| --- | --- | --- |
| How | Trace how the code works: architecture, runtime flow and where responsibilities live. | [How](references/how/how.md) |
| Why | Investigate why it was built this way: decisions, constraints and trade-offs supported by historical evidence. | [Why](references/why/why.md) |
| Teach | Build understanding at your pace, combining mechanics and rationale in a plain conversation. | [Teach](references/teach/teach.md) |
| Interface | Explain a website's frontend or one visual mechanism from a live page; treat a screenshot as a reconstruction. | [Interface](references/interface/explain-interface.md) |
| Catch Up | Catch up on this chat’s work and pending decisions, with evidence and useful visuals. | [Catch Up](references/catch-up/ketchup.md) |

Explanation keeps code and external records read-only. Reuse investigation and evidence across methods for one coherent explanation. Preserve each method’s evidence limits and confidence language; Teach retains its bounded Why scope.
