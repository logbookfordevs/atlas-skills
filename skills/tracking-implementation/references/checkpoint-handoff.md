# Checkpoint Handoff

Use during implementation when a human decision is needed, and when the review gate reaches `awaiting_acceptance`.

## Implementation Questions

Use Plannotator Inbox for decisions that can wait while independent work continues. Give each question the implementation context, the concrete choice, its consequences and a recommendation. Use one named thread per implementation unit and retain its reference in the Tracking Home across sessions.

Record the unanswered decision in `blocked_by` when it blocks work. Continue independent work; resume dependent work after the answer arrives. If a decision blocks all progress, state the blocker and hand off with acceptance or decision still pending.

Use the available Inbox tools to read replies before resuming affected work. Reconcile answers into Changes and Decisions, blockers, scope or acceptance state in the Tracking Home before acting on them. An Inbox message or decision entry is a delivery reference; the record holds the execution state.

Keep routine progress in the record and conversation. Send Inbox questions for unresolved human choices and one checkpoint handoff when ready for acceptance. Use the same thread for follow-up changes and avoid duplicate submissions of the same checkpoint.

## Guided Review

After final validation and resolution of automated review findings, generate a guide for the implementation-owned changes from `review_base` to the final checkpoint. Preserve Changes and Decisions, Execution Evidence, Complete Review Record and any Product or Design Acceptance Journey alongside it.

1. Identify the final revision and exact implementation diff. Include implementation-owned additions; exclude unrelated working-tree changes. For a committed checkpoint, use the recorded `review_base` and final commit. For an authorized pre-commit handoff, capture the scoped working-tree patch, including additions, and label it as uncommitted.
2. When Inbox tools are available, call `get_guide_brief` for Plannotator's current guide method and schema. Read the exact diff and write a proportional walkthrough: implementation intent, the central change, consequences, and supporting changes. Account for every changed file exactly once. Keep validation claims tied to recorded evidence.
3. Deliver the guide and that exact patch with `submit_guide` in the implementation's Inbox thread. Include a short note with checkpoint identity, validation results, unresolved gaps and what the user is being asked to accept. Retain the returned delivery references and any returned guide URL.
4. Provide a clickable Open Guided Review link in the Tracking Home and final handoff. Use a returned guide URL when available. Otherwise export the same guide and patch as HTML with `plannotator guide export`, following the local artifact convention, and link that file. Read `plannotator guide --help` for the installed contract. Save enough guide and diff context to reopen the checkpoint after the live session ends.

Generate the guide once per checkpoint revision and reuse it for delivery and the record link. Regenerate it after implementation edits so the guide and patch match. Preserve earlier acceptance decisions with their original revision; obtain explicit acceptance of the changed checkpoint. Keep the original `review_base` and follow the main skill's policy for subsequent automated reviews.

Use local delivery by default. A hosted guide share uploads the diff and requires user authorization for that upload; use encrypted sharing unless the user requests a public link.

## Availability and Acceptance

- **Inbox unavailable or submission fails:** record the delivery gap, export a local guide through the installed Plannotator CLI and deliver its link in the conversation. Ask implementation questions through the host's available input mechanism.
- **Plannotator unavailable or guide generation fails:** record the gap and provide an inline walkthrough of the checkpoint in the Tracking Home and handoff. Keep acceptance pending and label the substitute accurately.
- **Remote Tracking Home:** retain the guide link, revision and delivery references there. Use the agreed mechanism for attachments or links; a local file link is usable only where the reviewer can access it.
- **No code diff:** provide an acceptance walkthrough of the changed record or external work, with its actual evidence and references. Record why a diff guide does not apply.

Inbox is asynchronous delivery. Reading a guide or closing a thread carries no acceptance. Apply an explicit approval only to the checkpoint it identifies; clarify an ambiguous reply before changing `review_gate`. Reconcile change requests into the record and implementation, then deliver the refreshed guide when ready.
