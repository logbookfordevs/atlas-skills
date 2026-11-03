# Creative skills

Optional creative compositions and independent skills, with original authorship and MIT licenses preserved. **The artists and engineers credited here created the visual methods, engines and examples. Atlas packages their work and helps you choose a treatment.** Atlas Figures bundles six distinct treatments; Playable remains available as an independent package.

**[April Zhu (@Aprilzz423)](https://x.com/Aprilzz423)** created [ISO-GLOW](https://isoglow.dev/), [Colorfigures](https://april-zhu.com/colorfigures) and [Playable](https://april-zhu.com/playable), including their figure engines, interactions and examples. Explore her original sites to see the work in action. Their lineage includes **[iso-figure](https://github.com/MrBongoC/ai-iso-skill)** by **Tolga Cohce**. Both authors’ notices remain with the distributed files.

| Skill | What it creates | Author’s site |
| --- | --- | --- |
| [Atlas Figures](atlas-figures/SKILL.md) | A chooser for Hairline, Anatomy, Engraved Figures, Teardown, ISO-GLOW and Colorfigures | [Sources and credits](#atlas-figures) |
| [Playable](playable/SKILL.md) | Rigged 3D models or sketch-built robots with animation, camera-relative movement, lights and mobile controls | [Playable](https://april-zhu.com/playable) |

Invoke `/playable` explicitly. It is a separate character-playground workflow, rather than a seventh Figures treatment. Give it a rigged model or an original robot sketch. Converting or inspecting model files uses Blender; the bundled sketch-built robot path needs no supplied model. Preserve its footer credit and the credits for any models you supply. [April’s site](https://april-zhu.com/playable) has demos and the original distribution.

## Atlas Figures

Invoke `atlas-figures` with a treatment to start directly, or with your subject to see all six treatments and a recommendation. When the treatment is undecided, you choose before the agent loads its method or builds anything. A choice already made in the conversation carries forward. Its figure engines, examples and method references are bundled. Teardown uses installed Atlas Craft for design-domain guidance; the other treatments do not require Craft. Separate installations of the original figure skills are unnecessary.

| Treatment | Upstream author and source | Packaging |
| --- | --- | --- |
| Hairline Create / Adopt | [Lucas Marques](https://github.com/lucasmarkes/hairline) | Create verbatim; Adopt changes its sibling invocation to a bundled link |
| Anatomy | [Ryan](https://github.com/wheresryan22/anatomy) | Verbatim, including kit, examples and references |
| Engraved Figures | [Brooklyn Nicholson](https://github.com/OutThisLife/brooklyn-skills/tree/main/skills/engraved-figures) | Verbatim |
| Teardown | [Jakub Krehel](https://github.com/jakubkrehel/skills/tree/main/skills/teardown) | Method resolves sibling design guidance through installed Atlas Craft; drawing assets unchanged |
| ISO-GLOW / Colorfigures | [April Zhu](https://x.com/Aprilzz423), with [Tolga Cohce’s iso-figure](https://github.com/MrBongoC/ai-iso-skill) lineage | Existing description-format compatibility patches; remaining files verbatim |

All sources retain their MIT licenses. The chooser is Atlas-authored. [Its source receipt](atlas-figures/SOURCE-MANIFEST.json) identifies exact revisions, download fingerprints, source classifications, carried files and patches. Teardown reuses Atlas Craft’s maintained Typography, Colors, Accessibility, Layout, Writing and UI references instead of duplicating them. It reads the relevant domain guidance within Teardown’s scope; it does not launch Craft’s broader workflow. Each treatment retains its own visual grammar.

The Git-based sources use Atlas’s [reviewed upstream-update pipeline](../docs/authoring/upstream-updates.md). April’s sources retain their actual download identities and require manual review of a new distribution. ISO-GLOW and Colorfigures retain complete pristine extracted downloads under `sources/upstream/iso-glow/` and `sources/upstream/colorfigures/`, with provenance in `sources/composition.json`. Update those sources, replay their patches and rebuild Figures together; no archive files or standalone package copies are kept. Playable has no bundled copy. The composition builder validates the bundled snapshots rather than silently adopting updates; independent packages retain the file fingerprints in `provenance.json`.

## Credits and licenses

ISO-GLOW, Colorfigures and Playable were created by **April Zhu**. ISO-GLOW builds on **[iso-figure](https://github.com/MrBongoC/ai-iso-skill)** by **Tolga Cohce (MrBongoC)**. Colorfigures builds on ISO-GLOW and, through it, iso-figure. Playable builds on ISO-GLOW’s 3D template and includes its own engine and controller; it needs no separate ISO-GLOW installation. Preserve this authorship chain when redistributing them.

The original [ISO-GLOW license](../sources/upstream/iso-glow/LICENSE), [Colorfigures license](../sources/upstream/colorfigures/LICENSE) and [Playable license](playable/LICENSE) contain the applicable MIT terms and copyright notices. Their files are not relicensed as Atlas-authored work.

## Install and maintain

Install Atlas Figures or Playable directly from Atlas with Skills CLI; no ZIP download is needed:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-figures
npx skills add https://github.com/logbookfordevs/atlas-skills/tree/main/creative-skills/playable
```

Choose the destination agent when prompted. Add `-g` for a global installation. For Teardown’s design guidance, also install Atlas Craft if it is missing:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-craft
```

These packages live separately from Atlas’s composed workflows in `skills/` and are optional: they are excluded from `stacks/atlas.json`. April’s sources retain download provenance because she distributes them as downloads rather than Git repositories.

[provenance.json](provenance.json) records Playable’s download fingerprint and original file hashes. It was imported from the supplied `playable.zip` on 2026-11-02. Its manual-only invocation and concise description are recorded in `patches/playable.patch`, with Atlas-owned host metadata disabling implicit invocation; its workflow and assets remain verbatim. Its MIT license includes required credit to [Playable](https://april-zhu.com/playable); credit on published scenes is requested by the author. Updates are manual: obtain a new author-provided distribution, review its changes and license, then refresh the fingerprints together. Keep attribution outside the instruction files; retain only the recorded adaptations unless a further change is intentional.
