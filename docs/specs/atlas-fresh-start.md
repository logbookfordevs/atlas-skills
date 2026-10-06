# Atlas fresh-start discussion

This records the fresh-start review of the original 54-entry AFK catalog plus five new candidates. The decisions below now define the locally implemented stack; Git history and retained archives preserve the earlier proposal. Keep original list numbers for discussion continuity.

## Recorded choices

- AFK CLI (1) and AFK Profile Use (15) belong in the AFK CLI project, not the Atlas skill collection. AFK Compass (13) is temporarily excluded; its future purpose remains open. CLI and Profile Use are already maintained in AFK; mention them as companions. Revisit Compass’s future role later.
- Remove AFK Ask (3), Code Grill (4), Design Grill (5), Create Agent (7), and Code Review Verdicts (50) from the target collection.
- Replace AFK Implement (12) with the existing Tracking Implementation utility. It activates automatically on an explicit tracking request or an existing tracked effort, alongside any executor or free-form implementation. Further tracking refinement is deferred and must be revisited before concluding the review.
- Keep one Review skill with Code, Static and Motion paths. Code carries Leonardo's maintained Code Review adaptation as verbatim patched source composition. Static absorbs the authored Static Review method. Motion carries Review Animations verbatim. Source files and supporting resources are bundled, not merely linked.
- Use the newly built Animated-Driven Frontend (2 replacement): ZERO engineering knowledge, utility scope, manual invocation; not the old cinematic version.
- Keep a Motion skill composing Animate (36) and Apple Design (37) as carried verbatim sources, unless implementation exposes a conflict requiring an explicit ruling or approved patch. Animate Text (38) is excluded for now.
- Replace AFK Architect (14) with the current Team Up utility, preserving its focus on deliberate model, effort and custom-role choices.
- Keep Writing for Humans (11), with Stop Slop (10) as its carried verbatim reference, as currently implemented.
- Keep shadcn/ui (18) and Plannotator Guide (19).
- All other entries remain independent and unchanged for this discussion. Do not infer a new umbrella placement or deletion from the visual's related-purpose groups. Decide, Design and Specify are retired; Craft is explicitly retained alongside Review and Motion.

## Distribution decision

Atlas is a personal working stack made reusable. It carries authored, patched and composed packages. Unchanged independent skills are recommended from their original sources; they are not mirrored merely for discovery. A website and thin installer remain follow-up ideas.

The five new candidates are Implement Spec, PE Product Description, PE Verify, Matt's PR and Matt's Retro. Some supplied paths did not resolve during the first lookup; verify current paths and full resource trees before adoption.

## Return before concluding

1. Compass: any future successor role.
2. Tracking Implementation: the requested later refinement.
3. Stack website and installer: whether to implement these follow-up ideas.

## Implementation checkpoint

Craft is retained with Better Colors, Better Typography and Better Layout. HTML Wireframe and HTML Prototype are to merge into HTML UI, with Wireframe and Model modes; Matt’s Prototype stays independent. AFK CLI and Profile Use already live in AFK and should be mentioned as companions rather than offered as Atlas skills.

The selected distribution direction is a personal, reusable stack: Atlas carries authored, patched and composed packages; unchanged independent skills remain recommended from their upstream sources. A thin installer and website are possible later work, not implemented by this checkpoint.

Active Decide, Design and Specify are retired with their files archived. HTML UI and the separate Atlas To Spec / Atlas To Tickets packages are generated and validated. Craft, Review, Motion and the independent authored utilities are retained. The upstream detector, reviewed preparation command and scheduled issue workflow are implemented locally; see [upstream maintenance](../authoring/upstream-updates.md). The initial broader cleanup was rejected by automatic approval review; later explicit scope clarification allowed the narrower migration, preserving source snapshots and legacy history. Nothing has been committed or published.

## Sources & Stacks sharing contract

AFK owns the portable version-one schema and Sources & Stacks interface. Atlas generates `stacks/atlas.json` from its existing skill registry. Users may paste JSON or import a direct HTTPS manifest URL, inspect selections grouped by original source, and copy a sequential Skills CLI installation script. No profile is required; importing and copying do not execute installation or activation. A remote manifest refresh reviews proposed selection changes separately from installed-skill updates. This supersedes the proposed standalone Atlas installer; a public website remains optional future work.
