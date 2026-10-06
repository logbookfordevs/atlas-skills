# Atlas authoring

Edit Atlas-owned instructions, references and templates directly in `skills/`. `sources/composition.json` identifies upstream-managed files; `sources/` retains pristine snapshots, licenses and replayable patches. After changing a patched upstream file, record its patch before refreshing package receipts. Builders and upstream preparation preserve Atlas-owned package files.

Keep runtime instructions focused on their task; maintenance and migration history belong in documentation. Only independent dependencies need host discovery. Preserve upstream-relative supporting trees inside composed references.

For composed methods, read `docs/authoring/source-composition.md` for provenance and adaptation ownership. Preserve upstream snapshots and license notices; adopt updates deliberately with new pins, reviewed adaptations, and regenerated consumers.

`legacy/` preserves the pre-v2 skills. Only retained legacy entries belong in its archive receipt; record explicit retirements separately. `main` remains the live catalog until reviewed cutover.

Validate parsing, discovery, packaging, hashes, and behavior. Do not assert skill body wording, headings, or example order in tests. Record behavioral evaluation separately from deterministic package checks.

When authoring runtime instructions, apply Writing for Agents’s relevance and no-op checks: keep actions, reference-loading conditions, operational mappings, completion criteria and concrete conflict rulings. Put composition terminology, provenance, licensing, generation and maintenance explanations in authoring docs and manifests unless the agent needs them to perform the current task.

When the user or a selected skill asks for delegation, use `team-up` to choose fitting available custom roles, models and effort deliberately.
