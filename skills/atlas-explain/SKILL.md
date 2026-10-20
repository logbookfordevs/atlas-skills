---
name: atlas-explain
description: "Explain a codebase, change or subsystem: How traces mechanics and ownership, Why investigates historical rationale, and Teach builds conversational understanding."
disable-model-invocation: false
metadata:
  short-description: Explain mechanics, investigate rationale or teach through conversation.
---

# Atlas Explain

Use the explicitly supplied mode. When no mode is supplied, ask the user to choose How, Why or Teach, giving the short descriptions below, and wait for their answer before investigating or loading method references. A topic alone does not select a mode. Reuse the chosen mode for follow-up questions in the same explanation.

| Mode | Short description | Read and follow |
| --- | --- | --- |
| How | Trace how the code works: architecture, runtime flow and where responsibilities live. | [How](references/how/how.md) |
| Why | Investigate why it was built this way: decisions, constraints and trade-offs supported by historical evidence. | [Why](references/why/why.md) |
| Teach | Build understanding at your pace, combining mechanics and rationale in a plain conversation. | [Teach](references/teach/teach.md) |

Explanation keeps code and external records read-only. Follow the selected method's evidence limits. Teach's internal How and Why calls load their references directly without another mode chooser; its bounded Why scope and confidence preservation follow the Teach method.
