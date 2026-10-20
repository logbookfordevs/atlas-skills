---
name: architect
description: "Sketch types, signatures, and module structure before code, then stay in the loop while implementation fills in. Use for /architect, 'architect this', 'design this', or non-trivial work where jumping to code would lock in the wrong shape."
disable-model-invocation: true
---

# Architect

Sketch types, function signatures, class shapes, and module boundaries with `not implemented` bodies and pseudocode. Synthesize across multiple model perspectives, then fill in code against the chosen sketch.

Read [Architect integration](integration.md) before starting, including sketch/TDD boundaries and the task's checkpoint scope.

## Start

Track the applicable phases with the host's available planning mechanism before starting.

1. Ground
2. Sketch
3. Agree (only when a checkpoint is requested)
4. Implement
5. Scrap (only when repeated design friction warrants it)

## Phase A: Ground the problem

Build a real mental model of every system the new code touches. Follow the bundled [How method](../how/how.md) over the relevant subsystems. Naming a file isn't grounding. Produce the architectural explanation `how` prescribes. If the design redefines ownership or layering, also follow the bundled [Why method](../why/why.md) on the existing shape so the rationale becomes a constraint, not a guess.

Skip Phase A only when the work is genuinely greenfield with no surrounding system to integrate.

## Phase B: Sketch

Follow the bundled [Arena method](../arena/arena.md) with the design-sketch task and the Phase A grounding artifacts. Pass `references/runner-prompt.md` as each runner's prompt.

Choose candidate runners from the host's available roles and models, honoring user choices and project policy. Prefer distinct model perspectives when available; disclose same-model or sequential exploration. Use Arena's isolation and bounded scheduling. Candidate runners execute only the design-sketch assignment, not the full Architect workflow.

Design it twice. Require at least two structurally distinct candidates before synthesis, even when the first looks sufficient. This is the [Exhaust the Design Space](../principles/principle-exhaust-the-design-space/SKILL.md) reference made concrete. Whole-shape alternatives, not point fixes inside one shape.

Screen every candidate against [`references/design-red-flags.md`](references/design-red-flags.md) before synthesis. Assume the next contributor is an agent that sees only the files it opened, copies the nearest example, and takes the shortest path that compiles. Prefer the design where a change that looks right from one file is right for the whole repo.

Compare viable candidates on interface depth. Prefer the design that hides more complexity behind a smaller, simpler public surface. A rich interface can keep call chains short by concentrating capability instead of scattering it across layers.

Arena returns one synthesized design package. Its synthesis decision fills the rationale's "Synthesis decision" section.

## Phase C: Agree (opt-in)

Default: proceed directly to implementation with the synthesized design. No human checkpoint.

Opt in to a checkpoint when the invoker explicitly asks: "/architect with checkpoint," "stop and show me before implementing," or similar. Then surface the synthesized design and pause for sign-off.

The design may be delivered separately within the agreed commit scope, using the [Foundational Thinking](../principles/principle-foundational-thinking/SKILL.md) guidance. Temporary breakage follows [Outcome-Oriented Execution](../principles/principle-outcome-oriented-execution/SKILL.md) only at declared verification boundaries, subject to the integration rules and project policy. When adversarial pressure is requested or selected, follow the bundled [Interrogate method](../adversarial/interrogate.md) on the synthesized sketch.

If the human pushes back on the shape (in a checkpoint or after the fact), treat that as Phase A evidence. Re-ground and re-run Phase B before writing more code.

## Phase D: Implement against the sketch

Replace `not implemented` bodies with code, pseudocode with logic. The synthesized sketch is the contract. Deviations from it are signal to surface, not friction to absorb silently. If a function needs a parameter the sketch didn't anticipate, ask whether the sketch was wrong, the requirement was missed, or the implementation is overreaching.

## Phase E: Scrap when the architecture is wrong

If implementation keeps producing friction the sketch can't absorb, throw the sketch out. Don't bolt fixes onto a wrong design, per the [Redesign From First Principles](../principles/principle-redesign-from-first-principles/SKILL.md) and [Fix Root Causes](../principles/principle-fix-root-causes/SKILL.md) references.

The signal is a *pattern*, not single instances. Tells:

- The same shape of workaround appearing repeatedly across unrelated code.
- Multiple unrelated edge cases that all need special-case branches.
- Types that need escape hatches (`any`, casts, optional fields always set in practice) to compile.
- The "we need a lock" reflex when the sketch said the state wasn't shared.
- Callers having to know the abstraction's internal rules to use it.
- Two or more independent Phase D deviations of the same shape across the implementation.

Use judgment. A few edge cases don't condemn an architecture. Some problems are legitimately complex. Complexity in the data is not complexity in the design.

When you scrap:

1. Re-run the bundled [How method](../how/how.md) over what's been built.
2. Redesign as if the new constraints had been day-one assumptions, per [Redesign From First Principles](../principles/principle-redesign-from-first-principles/SKILL.md).
3. Subtract before adding, per the [Subtract Before You Add](../principles/principle-subtract-before-you-add/SKILL.md) reference. The new sketch should be smaller than the old one before it grows.
4. Return to Phase B and re-run the bundled Arena method.

## Outputs

The caller's usage is written first and the type sketch derived from it. One file with new types and signatures for small changes. Module map plus type definitions for larger work. The rationale ships alongside, shaped per `references/rationale-template.md`, including the usage sketch and the synthesis decision.
