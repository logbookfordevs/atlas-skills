---
name: atlas-review
description: "Review code against standards and intent, assess frontend interfaces or motion, and audit existing animation with improvement plans."
disable-model-invocation: false
---

# Atlas Review

Choose from the requested outcome and context, honoring an explicit choice. Ask only when ambiguity changes the method. Read [Atlas routing](references/routing.md) and the selected methods.

| Mode | Need | Read and follow |
| --- | --- | --- |
| Code | Assess changes against standards and originating intent | [Code](references/code/code-review.md) |
| Static | Run scoped lint/typecheck checks and judge findings | [Static](references/static/static-review.md) |
| Interface | Assess a screen/flow, or interface problems introduced by a change | Select the interface scope below |
| Motion | Review animation against specialist standards | [Motion](references/motion/review-animations.md) |
| Motion Audit | Survey existing motion and prepare prioritized improvement plans | [Motion Audit](references/motion-audit/index.md) |

For Interface, use [Interface Changes](references/interface/changes/index.md) when the request names a branch, PR, commit range or uncommitted changes. Use [Interface Audit](references/interface/audit/index.md) for a screen, flow or repository audit. Preserve a supplied scope; ask when both interpretations remain materially different. Changes classifies introduced, regressed and pre-existing findings; Audit owns severity, consolidation and coverage. The six interface disciplines are bundled here, independent of a Craft installation.

Reviewing does not authorize fixes. Motion Audit may write requested plans under the repository's artifact convention, while product code stays read-only. Construction references bundled for motion judgments do not change that authorization. Follow [Motion ownership](references/motion-ownership.md) when UI polish and motion methods disagree.

Follow each method's evidence limits and independent-context requirements. After an authorized fix, use focused re-check when material uncertainty remains; stop with adequate evidence. Report checks and domains that could not be inspected without implying complete coverage. PE Verify remains the independent route for behavior checks and recorded QA evidence.
