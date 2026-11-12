---
name: atlas-review
description: "Use when reviewing code changes, screens or animation; or tracing downstream breakage."
disable-model-invocation: false
---

# Atlas Review

Select methods from the requested outcome and the actual change. An explicitly bounded request such as “Standards & Spec only” limits selection. Ask only when ambiguity materially changes the review. Read [Scope and ownership](references/ownership.md) and the selected methods.

## Code-review baseline

Start a code-change review (branch, PR, commit or working tree) with [Standards & Spec](references/code/code-review.md) to judge repository standards and originating intent, unless the user explicitly bounds method selection.

## Add methods for concrete questions

Add each applicable method below to the code-review baseline without waiting for the user to name it. For a focused interface or motion request, select the relevant methods within that scope.

| Method | Select when | Read and follow |
| --- | --- | --- |
| Impact | Shared behavior, contracts or saved data change: what could break for downstream consumers, and which safety facts need proof? | [Blast Radius](references/impact/blast-radius.md) |
| Interface | A screen or flow changes, or an existing one needs assessment: can users understand and use it across devices and access needs? | Select the interface scope below |
| Motion | Transitions or gestures change, or a specific interaction feels slow, jumpy or hard to interrupt. Check feedback, timing, performance and reduced motion. | [Motion Review](references/motion/review-animations.md) |
| Motion Audit | A screen, flow or app needs a survey of existing motion problems and prioritized improvements, rather than review of a particular change or interaction. | [Motion Audit](references/motion-audit/index.md) |

A component edit with unchanged motion does not select Motion; a diff review does not expand into an app-wide audit.

For Interface, use [Interface Changes](references/interface/changes/index.md) when the request names a branch, PR, commit range or uncommitted changes. Use [Interface Audit](references/interface/audit/index.md) for a screen, flow or repository audit. Preserve a supplied scope; ask when both interpretations remain materially different. Changes classifies introduced, regressed and pre-existing findings; Audit owns severity, consolidation and coverage. The six interface disciplines are bundled here, independent of a Craft installation.

Briefly state the selected methods and the questions they address. Keep the Standards and Spec reports distinct from other selected methods' findings.

Reviewing does not authorize fixes. Impact may run existing checks or owned scratch probes in isolated state; product code remains read-only. Motion Audit may write requested plans under the repository's artifact convention. Loading Atlas Craft or Atlas Motion for judgments does not change that authorization. Follow Atlas Motion's Motion ownership ruling when UI polish and motion methods disagree.

Follow each method's evidence limits and independent-context requirements. After an authorized fix, use focused re-check when material uncertainty remains; stop with adequate evidence. Report checks and domains that could not be inspected without implying complete coverage. Atlas Verify is an optional follow-up when behavior checks or recorded QA are requested, or when existing evidence leaves a material behavior uncertainty.
