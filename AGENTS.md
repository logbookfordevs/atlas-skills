# Atlas authoring

`authored/` owns editable skill entries and their authored references; `sources/methods/` owns maintained reusable methods. Packages registered in `sources/composition.json`, including standalone authored skills, are generated: edit their canonical inputs, run `pnpm build:skills`, and commit inputs with outputs. `pnpm check` detects stale packages and verifies pinned-source integrity.

Authored methods, including absorbed own skills, belong to the umbrella’s implementation under `authored/`; reference files do not turn them into upstream source composition. Keep legacy migration history in documentation, not current input or dependency records. Only independent skills require host discovery. Organize packaged `references/` by public mode. Let requested modes cooperate without a separate shared coordination layer. Keep authored resources as normal files within their mode; preserve upstream-relative trees where needed and record source identity separately in the manifest.

For composed methods, read `docs/authoring/source-composition.md` for provenance and adaptation ownership. Preserve upstream snapshots and license notices; adopt updates deliberately with new pins, reviewed adaptations, and regenerated consumers.

`legacy/` preserves the pre-v2 skills. Only retained legacy entries belong in its archive receipt; record explicit retirements separately. `main` remains the live catalog until reviewed cutover.

Validate parsing, discovery, packaging, hashes, and behavior. Do not assert skill body wording, headings, or example order in tests. Record behavioral evaluation separately from deterministic package checks.

When authoring runtime instructions, apply Writing for Agents’s relevance and no-op checks: keep actions, reference-loading conditions, operational mappings, completion criteria and concrete conflict rulings. Put composition terminology, provenance, licensing, generation and maintenance explanations in authoring docs and manifests unless the agent needs them to perform the current task.

When the user or a selected skill asks for delegation, use `team-up` to choose fitting available custom roles, models and effort deliberately.
