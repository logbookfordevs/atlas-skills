---
name: interrogate
description: "Independent adversaries challenge an assessment, design or change; the lead verifies their evidence."
disable-model-invocation: true
---

# Interrogate

Adversaries try to break the current assessment, design or change. Verify what can be tested and preserve supported objections and consequential unknowns. Report the findings; keep repairs advisory.

## Frame

Use the scope the user names. For an investigation, identify the conclusion, evidence and decision it would inform. For a code review without another scope, use the branch diff from its merge base through scoped working-tree changes. Pin the base and checkpoint, including relevant uncommitted additions and excluding unrelated work.

State the question and intended behavior or decision constraints in plain language. Ask only when missing intent would materially change the challenge. Read [Council](council.md) for breadth and findings, and [Doubt discipline](doubt.md) to prepare the smallest sufficient reviewer context.

## Fan out

Load Team Up and its bundled `references/arena/arena.md`. Run Arena Phase A steps 3 and 4 and Phase B, then Phase F for verification. This is partial Arena execution: track only those phases. Challenge supplies the review brief instead of Arena's candidate artifact and rationale. Skip Cross-judge, Pick and Graft; retain every material supported finding, rather than selecting a winner.

Use Council's scope-based reviewer count through Arena's shared selection policy. One fresh reviewer can cover a bounded question; use multiple independent reviewers for distinct uncertainties or consequential blind spots. Honor explicit reviewer requests and host capacity. Prefer useful cross-family perspectives when available and disclose the actual roster, context isolation, unavailable reviewers and any loss of independence. A sequential self-check is a disclosed fallback, not an independent review.

Give each adversary the same grounding, constraints and evidence access. A specialist question may supplement that common brief. Keep contexts independent for the initial pass. For code probes, use Arena's isolated working locations and carry the scoped uncommitted changes into each; for document-only analysis, a separate context and output location suffice. Preserve unrelated work and clean up only owned scratch state.

Give each adversary this brief:

> Try to disprove this assessment or show where it fails its constraints. Examine the evidence, hidden assumptions, alternative explanations, edge cases and omitted work that could change the decision. Run real-code tests or isolated probes when they can settle a claim. For a reproduced failure, report the command, actual output and expected result. For other objections, cite the supporting evidence, explain the inference and name the consequence. Mark unsupported possibilities as unresolved questions, not established failures. State what you checked and could not inspect. No findings is a valid result.

## Verify

Apply Arena Phase F to the assessment and evidence, not to a synthesized implementation. Rerun executable findings in isolated state and check that the demonstrated behavior violates the stated intent. Inspect other objections against their cited sources and constraints. If a run is blocked or cannot be repeated, retain the evidence and limitation without claiming independent reproduction.

Merge findings with the same root cause; agreement is a signal, not proof. Use Doubt discipline to resolve misread constraints, actionable objections, accepted trade-offs and noise. Use Council's evidence distinctions and synthesis. Request focused fresh review only when a material revision or unresolved disagreement warrants it, within the bounded loop.

## Output

Report the challenged conclusion and scope, actual reviewers and limitations, findings with evidence status, and dismissed objections with reasons. Explain what should change in the assessment, what survived and which unknowns need resolution before acting. Include commands and outcomes for executable evidence. Keep the response proportionate to the question.
