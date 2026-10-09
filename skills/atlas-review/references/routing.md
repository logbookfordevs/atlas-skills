# Routing and ownership

Resolve upstream names in entries and supporting references to these bundled methods. Read domain rules when needed; consolidate through Interface Audit only for an Interface review.

| Upstream name | Local method |
| --- | --- |
| better-interface | [Interface Audit](interface/audit/index.md) |
| interface-review | [Interface Changes](interface/changes/index.md) |
| better-accessibility | [Accessibility](accessibility/index.md) |
| better-layout | [Layout](layout/index.md) |
| better-writing | [Copy](copy/index.md) |
| better-typography | [Type](type/index.md) |
| better-colors | [Color](color/index.md) |
| better-ui | [UI Polish](ui/index.md) |
| review-animations | [Motion Review](motion/review-animations.md) |
| improve-animations | [Motion Audit](motion-audit/index.md) |
| animate | [Animate criteria](animate/animate.md) |
| apple-design | [Fluid criteria](fluid/apple-design.md) |

A screen or flow uses Interface Audit. A branch, PR, commit range or working-tree change uses Interface Changes for scope, affected surfaces and finding classification, then Interface Audit for domain review and consolidation. Follow the bundled reference instead of asking the user to invoke an upstream skill. General code review still owns correctness, security and intent; Interface review owns frontend findings.

Domain entries and supporting examples may describe fixes. During review, treat those as proposed changes: product code remains read-only. Motion Audit may produce plans under repository artifact conventions; its execution variant hands off to an explicitly authorized executor instead of implementing within Review. Find Animation Opportunities is a separate Atlas Motion request when available.

Follow [Motion ownership](motion-ownership.md) for conflicts between UI polish and motion, including supporting examples. Load construction methods only for the rules needed to judge a finding. Whole-interface severity consolidation does not merge the Code method's separate Standards and Spec reports.

PE Verify remains independent: it proves requested behavior with recorded evidence. An Interface or Motion verdict does not establish QA completion. Native/Expo motion is outside these bundled construction methods.
