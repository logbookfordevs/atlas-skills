# Fresh-start migration review

The applied checkout currently removes active Decide, preserves Craft and implements upstream update detection and reviewed adoption. The remaining roster migration was prepared and validated in isolation, then applied after explicit scope clarification. Source snapshots and existing legacy evidence are preserved.

## Applied changes

- Preserve Craft with Better Colors, Better Typography and Better Layout.
- Retire active Design and Specify in favor of the narrower operations below, preserving their files under `docs/archive/fresh-start/`.
- Add HTML UI with Wireframe and Model modes carrying the existing maintained HTML references. Matt's Prototype remains independent upstream.
- Publish the existing To Spec and To Tickets adaptations separately as Atlas To Spec and Atlas To Tickets. Only their public metadata names change; their existing behavior is retained. Record the changes in replayable source patches.
- Keep Review's Code, Static and Motion modes; keep Motion's Animate and Fluid modes; keep Writing for Humans with the complete verbatim Stop Slop tree.
- Keep Animated-Driven Frontend, Team Up and Tracking Implementation. Only tracking's obsolete code-review dependency name becomes Atlas Review; its checkpoint policy and methods remain intact.
- Remove replaced atomic source entries from the installation recommendations where the selected composition already provides them. Preserve their upstream evidence and licenses.
- Remove AFK CLI, Profile Use and the temporarily excluded Compass from the Atlas skill roster. CLI and Profile Use remain companion skills owned by AFK. Existing legacy files are retained as history.
- Retain unchanged independent upstream skill recommendations, including Impeccable, Wayfinder, Research, Prototype, diagnosis and writing for agents. No mirror imports are made.

The prior explicit retirements (Ask, Code Grill, Design Grill, Create Agent, Code Review Verdicts) are already absent from active catalog entries and deleted legacy files in the existing working tree. No extra legacy or snapshot deletion is proposed by this migration.

## Validation

The isolated migration passes package regeneration, portable-link and metadata checks, catalog consistency, source/patch integrity, and the upstream-sync regression tests. It does not assert authored wording. Human model behavior and published installation remain unverified.

The actual checkout passes all 29 current checks. The daily workflow remains unpublished and inactive until it reaches the default branch. No commit, push, upstream adoption or GitHub issue publication was performed.
