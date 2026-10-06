# Logbook Atlas

![Thelu charts a route through developer tools: You are here. Probably.](docs/assets/logbook-atlas-banner.png)

The opinionated, maintained collection distributed by [AI Field Kit](https://github.com/logbookfordevs/ai-field-kit).

Atlas owns the default catalog and its content. AFK owns the CLI, installation, catalog schema support, and harness adapters. Existing skill names and behavior are preserved; the proposed next-generation workflows remain separate design work.

## Skills V2 preview

`feat/skills-v2` is the review branch. Investigate was removed after review; Research remains an independent upstream skill. Existing archived skills are not migrated by that deletion. The current direction preserves independently useful skills and creates scoped umbrellas selectively. **Atlas Decide**, **Atlas Design** and **Atlas Implement** are active local previews; these working-tree changes need publication before remote installation.

```sh
npx skills add https://github.com/logbookfordevs/logbook-atlas#feat/skills-v2 --skill atlas-decide
```

The preview carries its decision flows locally; Grilling and Domain Modeling remain independent prerequisites for applicable flows. No global installation is performed by this repository change.

- [Atlas Decide](skills/atlas-decide/SKILL.md)
- [Atlas Design](skills/atlas-design/SKILL.md) — pre-production artifacts and experiments
- [Atlas Implement](skills/atlas-implement/SKILL.md) — Craft, A11y, Motion, Track and Graph
- [Proposal](docs/specs/afk-next-capabilities.md) · [HTML review artifact](docs/specs/show-me-afk-next-31.html)
- [Source composition and maintenance](docs/authoring/source-composition.md)

## Contents

- `afk/catalog/` — manifests consumed by the AFK CLI
- `skills/` — generated Skills V2 packages; previous authored packages are in `legacy/`
- `rules/` — shared agent rules and supporting files
- `hooks/` — deterministic agent hooks
- `agents/` — portable custom-agent definitions

## Use the catalog

Preview the catalog without changing your saved defaults:

```bash
afk show skills --source logbookfordevs/logbook-atlas --ref main
```

Install an authored skill directly:

```bash
npx skills add https://github.com/logbookfordevs/logbook-atlas
```

## Development

```bash
pnpm install
pnpm check
```

`pnpm check` lints the repository and validates that catalog IDs are unique, referenced local assets exist, and AFK-owned source URLs point at this repository.

## Compatibility status

The updated AFK CLI defaults to Atlas and migrates legacy AFK catalog references while preserving custom sources. Publish Atlas before releasing the CLI update. Older CLI versions can select Atlas with `afk refresh --default-source logbookfordevs/logbook-atlas`. Local checkout changes alone do not distribute this migration.


## Catalog documentation

- [Catalog guide](docs/catalog-guide.md)
- [Composition map](afk-skills.html)
- [Workflow switchyard](docs/afk-skills-profiles-state-machine.html)
- [Legacy skills](legacy/)
- [Project-local registry](registry.json)

---

A tool from the [Logbook for Devs](https://logbookfordevs.com/)

Charting the technical seas, one commit at a time.
