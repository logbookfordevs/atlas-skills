---
name: atlas-implement
description: "Implement and refine production UI with visual craft, accessibility and motion; execute a spec’s ticket graph; maintain durable implementation tracking and recovery."
disable-model-invocation: true
---

# Atlas Implement

Select from the requested outcome and existing context. An explicit scope or method choice takes precedence. Load only the relevant references. Use requested methods together when they complement the task; do not impose tracking or graph execution on UI work.

## Modes

| Mode | Need | Read and follow |
| --- | --- | --- |
| **Craft** | Build or refine production UI: layout, typography, color, copy and interaction details | [Craft](references/craft/guide.md), then the relevant material it selects |
| **A11y** | Implement accessible semantics, keyboard/focus behavior, forms, hit areas, screen-reader support, motion and zoom | [Accessibility](references/a11y/index.md), then its relevant topic files |
| **Motion** | Implement interface animation, transitions or gesture-driven continuity | [Motion](references/motion/guide.md), then its selected construction references |
| **Track** | Maintain durable execution state, review acceptance, handoffs and recovery | [Tracking](references/track/tracking.md); also read [Resume](references/track/resume.md) when resuming |
| **Graph** | Execute a spec’s blocking ticket graph through parallel implementers and an integration branch | [Graph execution](references/graph/execution.md), then the Implement Spec reference it names |

Explicit tracking or resuming an Implementation Record selects Track. A request to execute a spec’s ticket graph selects Graph; one bounded slice stays within that slice. Invoking this skill alone does not select a tracking lifecycle. Ordinary coding without a need for these methods does not require this workflow.

## UI work

Preserve the supplied design, accepted decisions and existing project foundations. New direction, briefs, wireframes, mockups and throwaway experiments belong to Atlas Design; an implementation request does not silently authorize redesign. Read-only review stays with an appropriate review operation.

For UI work, read [Craft’s scope and dependency mappings](references/craft/guide.md). Accessibility applies to the affected interaction even when the requested mode is Craft or Motion. Test the real rendered path, including relevant narrow-screen, keyboard, loading, error and recovery states. Inspect motion at normal and slow speed, including interruption and reduced motion. Source inspection or a clean build alone does not prove the interface works or feels right.

If a method requires an independent skill, resolve it through the host’s available skills; identify a missing required capability before starting that method.

## Handoff

Report delivered scope, validation and remaining gaps, plus integration branch and ticket state where applicable. For Track, update the records and review gate before handing off; preserve an actionable continuation when interrupted. Distinguish implementation, review, human acceptance, publication and tracker closure in the final status.
