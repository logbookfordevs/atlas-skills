# Creative skills

Optional creative compositions and independent skills, with original authorship and MIT licenses preserved. Atlas Figures bundles six distinct treatments; the independent April Zhu packages remain available separately.

| Skill | What it creates | Author’s site |
| --- | --- | --- |
| [Atlas Figures](atlas-figures/SKILL.md) | A chooser for Hairline, Anatomy, Engraved Figures, Teardown, ISO-GLOW and Colorfigures | [Sources and credits](#atlas-figures) |
| [ISO-GLOW](iso-glow/SKILL.md) | Interactive isometric figures with glowing line art, 3D variants and the solid Lumen style | [isoglow.dev](https://isoglow.dev/) |
| [Colorfigures](colorfigures/SKILL.md) | Hand-inked, flat-colour interactive 3D objects with rotation, see-through mechanisms, labels and zoom | [Colorfigures](https://april-zhu.com/colorfigures) |

## Atlas Figures

Invoke `atlas-figures` to see all six treatments, their differences and a recommendation for your subject. You choose the treatment before the agent loads its method or builds anything. A request that already names a treatment can proceed after the menu. Its figure engines, examples and method references are bundled. Teardown uses installed Atlas Craft for design-domain guidance; the other treatments do not require Craft. Separate installations of the original figure skills are unnecessary.

| Treatment | Upstream author and source | Packaging |
| --- | --- | --- |
| Hairline Create / Adopt | [Lucas Marques](https://github.com/lucasmarkes/hairline) | Create verbatim; Adopt changes its sibling invocation to a bundled link |
| Anatomy | [Ryan](https://github.com/wheresryan22/anatomy) | Verbatim, including kit, examples and references |
| Engraved Figures | [Brooklyn Nicholson](https://github.com/OutThisLife/brooklyn-skills/tree/main/skills/engraved-figures) | Verbatim |
| Teardown | [Jakub Krehel](https://github.com/jakubkrehel/skills/tree/main/skills/teardown) | Method resolves sibling design guidance through installed Atlas Craft; drawing assets unchanged |
| ISO-GLOW / Colorfigures | [April Zhu](https://x.com/Aprilzz423), with [Tolga Cohce’s iso-figure](https://github.com/MrBongoC/ai-iso-skill) lineage | Existing description-format compatibility patches; remaining files verbatim |

All sources retain their MIT licenses. The chooser is Atlas-authored. [Its source receipt](atlas-figures/SOURCE-MANIFEST.json) identifies exact revisions, download fingerprints, source classifications, carried files and patches. Teardown reuses Atlas Craft’s maintained Typography, Colors, Accessibility, Layout, Writing and UI references instead of duplicating them. It reads the relevant domain guidance within Teardown’s scope; it does not launch Craft’s broader workflow. Each treatment retains its own visual grammar.

The Git-based sources use Atlas’s [reviewed upstream-update pipeline](../docs/authoring/upstream-updates.md). April’s sources retain their actual download identities and require manual review of a new distribution. Updating an independent April package also requires explicitly refreshing its bundled copy and receipt; the builder validates the current snapshots rather than silently adopting it.

## Credits and licenses

The independent ISO-GLOW and Colorfigures skills were created by **April Zhu**. ISO-GLOW builds on **[iso-figure](https://github.com/MrBongoC/ai-iso-skill)** by **Tolga Cohce (MrBongoC)**. Colorfigures builds on ISO-GLOW and, through it, iso-figure. Preserve this authorship chain when redistributing them.

The original [ISO-GLOW license](iso-glow/LICENSE) and [Colorfigures license](colorfigures/LICENSE) contain the applicable MIT terms and copyright notices. Their files are not relicensed as Atlas-authored work.

## Install and maintain

Install the chooser, or either independent April skill, directly from Atlas with Skills CLI; no ZIP download is needed:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-figures
npx skills add https://github.com/logbookfordevs/atlas-skills/tree/main/creative-skills/iso-glow
npx skills add https://github.com/logbookfordevs/atlas-skills/tree/main/creative-skills/colorfigures
```

Choose the destination agent when prompted. Add `-g` for a global installation. For Teardown’s design guidance, also install Atlas Craft if it is missing:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-craft
```

These packages live separately from Atlas’s composed workflows in `skills/` and are optional: they are excluded from `stacks/atlas.json`. The independent April packages retain download provenance because April distributes them as downloads rather than Git repositories.

[provenance.json](provenance.json) records the imported download fingerprints and each original file’s SHA-256. Original files are checked against their recorded download archives. Colorfigures was refreshed from April’s distribution on 2026-10-22; it includes rotation, see-through mechanisms, zoom, mobile controls and three new examples. The two description-format fixes are recorded as replayable patches under `patches/`, with packaged hashes in the provenance record. Updates are manual: obtain a new author-provided distribution, review its changes and license, then refresh the fingerprints together. Keep attribution outside the instruction files; retain only the recorded compatibility adaptations unless a further change is intentional.
