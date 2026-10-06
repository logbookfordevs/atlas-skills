# Motion

Read [Animate](animate.md) for the purpose/frequency gate and construction process. Load [recipes](RECIPES.md) for matching components. Start with the concrete requested interaction; an empty invocation is not permission to invent animation work.

For direct manipulation, momentum, velocity handoff and interruptible springs, also read [Apple Design](apple-design.md). Its physical interaction guidance does not authorize an Apple-style visual skin; apply visual materials only when the accepted direction calls for them. Existing project motion tokens remain authoritative.

Read [performance additions](perf-additions.md) when layout, blur, off-screen animation or frame cost matters. Its `build.md` and `recipes.md` pointers refer to Animate and RECIPES above. Animated blur is capped at 8px; prefer opacity and transforms, batch measurements before writes, and pause off-screen animation. Use [vocabulary](vocabulary.md) when a named effect or animation request needs interpretation.

Apply [accessible motion and zoom](../a11y/motion-and-zoom.md). For conflicting generic recipe values, use the interaction choices in [Craft](../craft/guide.md). Validate reversal, rapid repetition, exit behavior, keyboard/touch input and reduced motion for the affected path.

For navigation-level React transitions, read [React View Transitions](view-transitions/SKILL.md) and its relevant references. Check the project's actual framework support before using experimental APIs. Apply ease-out to its generic exit recipes unless acceleration away is deliberately selected. For text-specific animation, use the independently available Animate Text skill when appropriate. Do not migrate the animation library merely to repair performance.

Motion used to explore a design question stays inside the design artifact. This mode implements the agreed behavior in production code.
