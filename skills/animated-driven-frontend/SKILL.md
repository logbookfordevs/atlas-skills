---
name: animated-driven-frontend
description: "Engineer motion-driven frontends: synchronized scroll sequences, progress gestures, WebGL effects, asset loading, and rendering performance."
disable-model-invocation: true
---

# Animated-Driven Frontend

Apply the relevant engineering knowledge to the requested frontend task, using the project's existing architecture and motion stack.

| Need | Read |
| --- | --- |
| Shared progress, segment lifecycle, seeking, hold or drawing interactions, synchronized feedback | [Interaction systems](references/interaction-systems.md) |
| WebGL assets, GPU uploads, post-processing, shader effects, adaptive quality, mobile rendering | [Rendering pipeline](references/rendering-pipeline.md) |
| Runtime ownership, dependencies, accessible motion, loading and failure behavior | [Frontend constraints](references/frontend-constraints.md) |

Keep one authoritative state, timeline, or progress value for systems that must stay synchronized. Assign resource ownership and cleanup at segment or component boundaries. Choose native document scrolling unless precise synchronization justifies a virtual progress adapter.

For an uncertain effect or interaction, implement a bounded representative sample and inspect it in motion before expanding it. Evaluate first-use stalls, interruption, target-device behavior, and reduced-motion coverage alongside the visual result. Apply the relevant reference checks; code correctness and average FPS alone do not establish interaction quality.
