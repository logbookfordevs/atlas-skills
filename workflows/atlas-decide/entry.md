---
name: atlas-decide
description: "Choose and work through a decision flow: an interview, documented decisions, visual design choices, or a multi-session discovery map."
disable-model-invocation: true
---

# Atlas Decide

Select the needed flow from your request and existing context. When the distinction matters and is unclear, ask one brief question before entering the flow. An explicit choice takes priority over the default.

## Select the flow

Select from the request; the user need not name a mode.

| Mode | When | Read and follow |
| --- | --- | --- |
| **Probe** | Challenge an idea or plan in conversation, without a documentation commitment | [Grill Me](references/probe/grill-me.md) |
| **Record** | Sharpen a plan while recording decisions and domain vocabulary | [Grill with Docs](references/record/grill-with-docs.md) |
| **Shape** | Settle consequential frontend design choices through visible alternatives and a visual commitment | [Design Grill](references/shape/design-choices.md) |
| **Map** | Discover the route through an effort spanning sessions, or resume a decision map | [Wayfinder](references/map/wayfinder.md) |

For a bounded engineering decision with useful durable records, prefer Record. For a conversational challenge, prefer Probe. A large implementation task with settled decisions belongs to implementation, not automatically to Wayfinder. A map or ticket supplied for resumption selects Map; follow its chart/resume distinction and session bounds.

## Preconditions and transitions

Read the selected reference and follow its method. If it requires an independent skill, resolve that skill through the host's available skills. Explain any missing required capability and resolve access or select another flow with the user before proceeding.

Map needs a usable tracker contract for maps, child tickets, claims, blocking and frontier queries. Use Research and Prototype when their ticket types require them.

When an interview reveals a discovery effort needing multiple sessions, propose continuing in Map. Preserve the destination, decisions, unresolved questions and links to existing records. Confirm a new tracker-backed engagement if the request did not already authorize it. Resume from those findings rather than repeating the interview. Continue interviews within Map when its decision tickets require them.

After Shape, hand the selected references, visual commitment, fixed and adaptable elements, approval states and unresolved choices to Atlas Design for artifacts or motion. Visual alternatives can support Shape’s interview; producing one does not by itself mean the direction is selected. Preserve the user’s selection across the handoff.

Follow the selected method’s stopping point, human participation and artifact requirements. Report the resolved decision or open questions and the continuation, with record pointers when created. Beginning a decision flow does not authorize implementation or external messages.
