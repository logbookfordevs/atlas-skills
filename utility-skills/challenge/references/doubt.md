---
name: doubt-driven-development
description: "Fresh context, reconciliation and bounded review for the selected challenge."
---

# Doubt discipline

Apply this discipline to the selected assessment. It does not introduce review gates for every decision in the surrounding task. The leading agent owns dispatch and reconciliation; reviewers investigate their assignments without spawning another review workflow.

## Extract the reviewable question

Name the consequential conclusion and why acting on it matters. Give reviewers the smallest sufficient artifact, its constraints and the available evidence, including evidence against it. Split a large assessment into reviewable questions while preserving the context each needs.

Keep the author's persuasive narrative separate from the grounding. For an implementation, supply the code and behavior contract rather than an assertion that the code is safe. When the conclusion itself is the subject, include that conclusion as the artifact to examine; reviewers must know which claim they are testing. Include its supporting observations without presenting its interpretation as established fact.

A useful brief asks reviewers to find ways the conclusion could fail under the actual constraints. They may return no material objections after examining the evidence. Fresh context reduces anchoring; it does not make a reviewer authoritative.

## Reconcile

Read each finding against the artifact and evidence before deciding. Classify in this order:

1. **Misread or missing constraints:** correct the brief before treating the objection as a failure. Reassess any findings affected by that correction.
2. **Valid and actionable:** explain the necessary revision to the assessment or proposal. Apply changes only within the caller's existing authority.
3. **Valid trade-off:** explain the cost, benefit and reason to accept or reconsider it.
4. **Noise:** dismiss an unsupported, contradicted or immaterial objection with its reason.

Consequential unresolved assumptions stay visible as unknowns, with a proposed check. They are neither confirmed failures nor cleared risks. Use executable evidence where available; otherwise show the source and inference. Resolve disagreement from evidence and constraints rather than deference or majority vote.

## Stop

Stop when material objections have been addressed or exposed as explicit decision blockers and another review would add no useful evidence. Re-review only a material revision, corrected brief or consequential unresolved objection; rereading an unchanged artifact is not progress.

Use at most three review cycles for one challenge, or stop earlier at the user's direction. If substantive issues remain at that bound, report them and the next needed evidence or decision. Do not manufacture consensus, silently expand scope or imply that a surviving conclusion has been proven in every circumstance.

Choose models and dispatch through Team Up and the host's supported tools. Honor explicit model choices and disclose unavailable independence; this method adds no separate CLI or repeated permission flow.
