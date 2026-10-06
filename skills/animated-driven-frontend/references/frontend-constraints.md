# Frontend Constraints

## Runtime ownership

Inspect the repository before selecting tools. Reuse its animation, rendering, input, styling, and audio primitives when they fit the task.

| Need | Candidate when no suitable owner exists |
| --- | --- |
| Simple DOM state feedback | CSS transitions or keyframes |
| React choreography | `motion/react` |
| Framework-agnostic motion | `motion` or Web Animations API |
| Authored timeline | GSAP |
| WebGL effects | The project's Three.js stack; choose Three.js or React Three Fiber according to its architecture |
| Audio scheduling or mixing | Existing audio layer; Howler when a dedicated engine is warranted |

Keep DOM choreography and WebGL rendering in separate owners joined by semantic state or normalized progress. Keep per-frame values outside React render state. Use one audio clock and one mute/preference owner. Separate input normalization from visual interpretation. Express motion tokens in the project's token system.

Before adding a dependency, verify that it owns a distinct concern, fits startup and steady-state budgets, supports target browsers and framework boundaries, and can be cleaned up. Consult current official documentation for the selected API. The ZERO stack is evidence of one composition, rather than a required package list.

## Motion and agency

Preserve information, consequences, and available actions when motion is reduced or the enhanced renderer fails. Maintain focus, reading order, selection, and announcements across visual transitions. Required interactions need pointer, touch, and keyboard paths; hover supplies additive feedback.

Use shorter distances, fewer spatial transformations, discrete state changes, and fewer ambient loops for reduced motion. Provide pause, skip, or simplified traversal for long sequences. Avoid disorienting parallax, rapid flashes, and involuntary camera motion.

Start sound from an intentional user action, expose a mute control, and keep critical meaning visual or textual. Scope input listeners and hotkeys to their owner and release them on teardown.

## DOM and loading costs

Prefer `transform` and `opacity` for continuous DOM animation. Batch reads before writes, isolate continuous work in leaf owners, and measure blur, filters, masks, shadows, and translucent layers. Pause offscreen and hidden work.

Render useful semantic content while enhancements load. Resource-dependent interactions need timeouts and recoverable error states. Loading completion includes the decode, upload, and warm-up work required for the next visible result.
