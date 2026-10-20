# Creative skills

Download-distributed skills by **[April Zhu (@Aprilzz423)](https://x.com/Aprilzz423)**, carried with their supporting files and original MIT licenses. The only adaptation is YAML description formatting for Skills CLI compatibility. Atlas hosts these copies; their authors retain credit for the skills and underlying work.

| Skill | What it creates | Author’s site |
| --- | --- | --- |
| [ISO-GLOW](iso-glow/SKILL.md) | Interactive isometric figures with glowing line art, 3D variants and the solid Lumen style | [isoglow.dev](https://isoglow.dev/) |
| [Colorfigures](colorfigures/SKILL.md) | Hand-inked, flat-colour interactive isometric objects with optional explanatory labels | [Colorfigures](https://april-zhu.com/colorfigures) |

## Credits and licenses

Both skills were created by **April Zhu**. ISO-GLOW builds on **[iso-figure](https://github.com/MrBongoC/ai-iso-skill)** by **Tolga Cohce (MrBongoC)**. Colorfigures builds on ISO-GLOW and, through it, iso-figure. Preserve this authorship chain when redistributing them.

The original [ISO-GLOW license](iso-glow/LICENSE) and [Colorfigures license](colorfigures/LICENSE) contain the applicable MIT terms and copyright notices. Their files are not relicensed as Atlas-authored work.

## Install and maintain

Install either optional skill directly from Atlas with Skills CLI; no ZIP download is needed:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills/tree/main/creative-skills/iso-glow
npx skills add https://github.com/logbookfordevs/atlas-skills/tree/main/creative-skills/colorfigures
```

Choose the destination agent when prompted. Add `-g` for a global installation. These remote commands become available after this addition is published to Atlas’s main branch.

These packages live separately from Atlas’s composed workflows in `skills/` and are optional: they are excluded from `stacks/atlas.json`. They are not registered in the Git-based upstream watcher because April distributes them as downloads rather than Git repositories.

[provenance.json](provenance.json) records the imported download fingerprints and each original file’s SHA-256. All 21 original files were checked against the supplied ZIP archives on import. The two description-format fixes are recorded as replayable patches under `patches/`, with packaged hashes in the provenance record. Updates are manual: obtain a new author-provided distribution, review its changes and license, then refresh the fingerprints together. Keep attribution outside the instruction files; retain only the recorded compatibility adaptations unless a further change is intentional.
