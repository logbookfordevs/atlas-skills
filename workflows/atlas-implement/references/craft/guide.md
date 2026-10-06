# Craft

Read the target, its design context, tokens and components before changing it. Preserve the accepted direction and scope. Fix blocked interaction and accessibility first, then flow/hierarchy, responsive behavior, consistency and visual detail. Inspect the rendered result after material changes; refine against the requested outcome rather than making every reference a checklist.

| Work | Read |
| --- | --- |
| UI detail, surfaces, icons and tactile feedback | [UI](ui/index.md) and [Emil’s craft](emil-craft.md) |
| Grouping, alignment, responsive structure and spacing | [Layout](layout/index.md) |
| Type roles, wrapping, rendering and mixed-direction text | [Typography](typography/index.md) |
| Palette roles, tokens, themes and measured contrast | [Colors](colors/index.md) |
| Labels, errors, empty states and product copy | [Writing](writing/index.md) |
| Broad refinement, simplification, bolder or quieter treatment | [Polish lenses](polish-lenses.md), selecting the relevant lenses |
| New UI from scratch | Also read [generation guardrails](generation-guardrails.md) |
| An unresolved library choice the user wants help selecting | [Library choices](library-choices.md); preserve installed foundations |
| Explicitly requested redesign | [Redesign audit](deslop-audit.md); do not load it for routine refinement |

Named `better-ui`, `better-layout`, `better-typography`, `better-colors` and `better-writing` calls resolve to the corresponding local index above; `better-accessibility` resolves to [Accessibility](../a11y/index.md). Follow their linked topic files. A `better-interface` review call needs an independently available interface-review capability.

The project's accepted design governs identity. For conflicting generic interaction examples, use the UI reference's precise recipes: press scale `0.96`, spring bounce `0` unless the requested direction is explicitly playful, and ease-out exits unless acceleration away is a deliberate choice. Add `will-change` only for observed stutter. Accessibility requirements govern correctness; preserve useful feedback while removing vestibular motion under reduced motion. Do not disable submit merely to defer validation; implement usable submission and recovery behavior.
