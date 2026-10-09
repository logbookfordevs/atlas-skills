---
name: better-ui
description: Polishes the surfaces, icons and motion in your project with exact values for border radius, optical alignment, shadows, icon states and animation.
---

# UI polish

## Atlas integration
Follow the caller's authorization and review scope. Load the linked domain methods when their rules are needed. For animation or gesture decisions, follow [Motion ownership](../motion-ownership.md).

For animation values, springs, interruption and gesture physics, read [Motion ownership](../motion-ownership.md). That ruling governs conflicting motion examples and checklists in this source tree.

This skill holds the visual polish for surfaces, icons and motion, with the exact value each detail takes. It applies once the underlying interaction is sound, and a polish finding never outranks a broken interaction.

## Exact values, optional polish

The values below are exact, not ranges to approximate. `cubic-bezier(0.2, 0, 0, 1)` is not `cubic-bezier(0.4, 0, 0.2, 1)`, and `0.96` is not `0.95`. The optical nudges and the concentric padding cutoff are the exceptions. They are starting points, judged by eye.

Keep the project's component library, tokens and density, and match its motion language wherever no rule here gives a value. A deliberate and consistent project convention, such as a style with no shadows, is a preference and not a finding. The same detail done two ways within the project is a finding.

Text wrapping, font rendering, tabular numbers and text spacing belong to [Type](../type/index.md). Hit areas, keyboard support, ARIA and the reduced-motion requirement belong to [Accessibility](../accessibility/index.md). Grouping, section spacing, breakpoints and spatial RTL belong to [Layout](../layout/index.md), except directional icon mirroring. Color tokens and contrast measurement belong to [Color](../color/index.md).

## Outer radius equals inner radius plus padding

Where nested surfaces share a visible, even inset, the outer radius is the inner radius plus the padding plus any border width. Past `24px` of padding, or where the padding is deliberately asymmetric, treat the layers as separate surfaces and keep each one's radius token. Recipes are in [surfaces.md](surfaces.md).

## Align optically where geometry looks off

Where geometric centering looks off, nudge by eye. Give a button `2px` less padding on its icon side, shift a play triangle toward its point and fix asymmetric glyphs in the SVG itself. Recipes are in [surfaces.md](surfaces.md#optical-alignment).

## Shadows for elevation, borders for structure

Where a border exists only to create depth, replace it with layered transparent `box-shadow` values. Keep borders on dividers, separators, table cells and selected states. Keep them on form inputs too, whose boundary needs 3:1 non-text contrast under [Accessibility](../accessibility/index.md). Focus rings belong to [Accessibility](../accessibility/index.md) as well.

Forced-colors mode removes every `box-shadow`. Keep `border: 1px solid transparent` under a shadow ring so that mode still draws an edge. Recipes are in [surfaces.md](surfaces.md#shadow-recipes).

## Outline images in pure black or white

Give content images a `1px` outline inset by `1px`. Use `oklch(0 0 0 / 0.1)` in light mode and `oklch(1 0 0 / 0.1)` in dark. Never use a palette near-black, a tinted neutral or the accent color, because the tint shows as a colored fringe on the image edge. Skip transparent artwork such as logos and illustrations. The recipe is in [surfaces.md](surfaces.md#image-outlines).

## Motion follows the shared owner

Use the bundled Animate method for press feedback, transitions, entry and exit decisions, reduced-motion fallbacks and interruption. Use Fluid for direct manipulation, springs, momentum and gesture handoff. Load them through Motion ownership when the requested polish includes motion.

For contextual icon swaps, preserve the icon's static meaning and accessible name. Let the shared motion methods choose the cross-fade, scale, curve, duration and bounce. The upstream animation references remain preserved as examples; their numeric presets and broad bounce prohibitions do not override the shared owner.

## Contain scroll inside overlays

Give scrollable dialogs, drawers, menus and side panels `overscroll-behavior: contain`, so scrolling past their end never scrolls the page behind.

## Match icon stroke to text weight

An icon's rendered stroke tracks the weight of the text beside it, from `1.5px` at 400 to `2.5px` at 700. Use one icon library per surface. The table, sizing and grid rules are in [icons.md](icons.md).

## One SVG, recolored per state

Icons use `currentColor` and take hover, selected and disabled states from CSS color and opacity, never from separate assets. Outline is the default variant, and fill marks the active state. Under `dir="rtl"`, mirror only icons whose meaning follows reading direction. See [icons.md](icons.md#icons-in-rtl).

## Before you finish

| Detection | Fix |
| --- | --- |
| Padded parent and child with the same `rounded-*` or `border-radius` | Add the padding to the outer radius |
| `box-shadow: 0 0 0 1px` ring with no `border` beside it | `border: 1px solid transparent` |
| `outline-slate-*`, `outline-zinc-*` or a hex outline color on `img` | `outline-black/10` and `dark:outline-white/10` |
| `:active` scale with no `:disabled` exclusion | `enabled:active:` or `:not(:disabled):active` |
| `fill="#..."` or `stroke="#..."` inside an icon SVG | `currentColor` |
| `overflow: auto` or `overflow-y-auto` on a dialog, drawer or menu with no `overscroll-behavior` | `overscroll-behavior: contain` |

## Reporting

**Severity.** `HIGH` breaks an interaction, as a keyframe toggle that cannot reverse or a hover state stuck on touch does. Two of the whole-interface review's escalation triggers land here and are `HIGH` on sight. One is motion that ignores `prefers-reduced-motion`, and the other is a state change carried by motion alone. `MEDIUM` is a visible inconsistency in surfaces, icons or motion. `LOW` is isolated polish.

**Verification.** Without a browser, read every state the component defines from the code, such as hover, pressed, selected, loading and empty, with its durations and easings. With one, walk each state and replay motion at 10% speed in the browser's Animations panel. Report every check you could not run as `Not verified`.

**Format.** Group findings under the principle each violates, ordered by severity, one row per root cause listing every location it appears in:

| Severity | Location | Before | After | Why |
| --- | --- | --- | --- | --- |

`Location` is `path/to/file:line`. `Why` names the principle and the user impact.

End with `Block` when any `HIGH` remains, `Approve` otherwise, leaving the rest in the table as work to do. Never `Approve` coverage you did not inspect. With nothing to report, state "No actionable UI-polish findings" and report verification.
