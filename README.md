# Logbook Atlas

![Thelu charts a route through developer tools: You are here. Probably.](docs/assets/logbook-atlas-banner.png)

The Logbook Atlas Core is the skill selection I keep on every machine in my AFK kit: core workflows with Atlas invocations, authored utilities, intentional upstream adaptations and a few focused compositions. Complementary skills remain independently available from their original sources.

Atlas skills rely on each other, the way Pstack's do: a skill names the Atlas skill that owns a method rather than carrying a copy. Copies are the exception, kept for a method whose owner is manual-only and for outside upstreams Atlas composes.

Atlas maintains what it authors, patches or bundles. Complementary independent skills are recommended from their original sources in [the stack manifest](stacks/atlas.json). [AFK](https://ai-field-kit.logbookfordevs.com/) is optional tooling for managing installed skills and activation. Install Atlas packages directly with Skills CLI; AFK is not a workflow requirement.

## Skills V2

Collection releases use Git tags and GitHub releases. **v1.4.0** identifies this skill set. See the [release notes](CHANGELOG.md). Upstream revisions remain recorded separately in each package’s source receipt.

Install the packages below, or import the Logbook Atlas Core to include the recommended independent skills. Original-name upstream packages retain their authorship and methods.

| Package | Purpose |
| --- | --- |
| [Atlas Mode](skills/atlas-mode/SKILL.md) | Manual working mode that applies Atlas skills and inner methods throughout a task |
| [HTML UI](skills/html-ui/SKILL.md) | Artifact, Wireframe and polished Model modes, with bundled Design Artifact direction |
| [Atlas Grill](skills/atlas-grill/SKILL.md) | Grilling by default; Domain Modeling and documentation on explicit request |
| [Atlas Wayfinder](skills/atlas-wayfinder/SKILL.md) | Manually invoked decision maps with shared Grilling and Domain Modeling methods |
| [Atlas Explain](skills/atlas-explain/SKILL.md) | Selects and combines How, Why, conversational Teach, Interface and Catch Up; creates visual HTML explanations when requested |
| [Atlas To Spec](skills/atlas-to-spec/SKILL.md) | Separate maintained adaptation of Matt Pocock's To Spec |
| [Atlas To Tickets](skills/atlas-to-tickets/SKILL.md) | Separate maintained adaptation with local ticket templates |
| [Atlas Debug](skills/atlas-debug/SKILL.md) | Diagnose bugs with Matt’s reproduction loop; explain expected versus actual behavior with Pele diagrams on request |
| [Engineering Principles](skills/engineering-principles/SKILL.md) | Architect, TDD and Source-Driven implementation methods, selected independently or together |
| [Implement](skills/implement/SKILL.md) | Deliver agreed work or coordinate dependency-linked tickets through review and CI to a PR ready for the user to merge |
| [Atlas Review](skills/atlas-review/SKILL.md) | Standards & Spec, Impact, Interface, Motion and Motion Audit review |
| [Atlas Verify](skills/atlas-verify/SKILL.md) | Run behavior/QA checks, stress-test UI data and assess performance evidence |
| [Atlas Verifiers](skills/atlas-verifiers/SKILL.md) | Manual guidance for creating or maintaining app-driving and formal checks |
| [Atlas Motion](skills/atlas-motion/SKILL.md) | Animate, Fluid, Performance diagnosis and read-only Opportunities |
| [Tracking Implementation](skills/tracking-implementation/SKILL.md) | Implementation state and evidence alongside any executor, with optional Audit Trail |
| [Animated-Driven Frontend](skills/animated-driven-frontend/SKILL.md) | Manually invoked ZERO engineering knowledge |
| [Team Up](skills/team-up/SKILL.md) | Role/model/effort selection, Arena candidate synthesis and Swarm coverage or races; cross-family review and subject preferences by default, with Council team selection |
| [Atlas Retro](skills/atlas-retro/SKILL.md) | Diagnose session friction or explicitly enforce recurring-mistake prevention |
| [Atlas Setup](skills/atlas-setup/SKILL.md) | Manual dependency and stack check, with explicitly approved cleanup |

Select packages explicitly:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-review
```

Browse the repository catalog before installing:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --list
```

The [CLI catalog](.claude-plugin/marketplace.json) groups packages as **Atlas Workflows**, **Creative Skills** and **Utility Skills**. Individual names and descriptions come from each package’s `SKILL.md`. Creative and utility skills remain optional and outside the Logbook Atlas Core. The catalog adds discovery paths and grouping; it is not an exclusion list, so `--full-depth` can still expose retained historical entries. No personal installation is changed by building the repository.

Start with `Use atlas-mode to <your task>`. Atlas Mode applies clearly selected skills and inner methods, including manually invoked packages such as Wayfinder and Retro. When alternatives imply materially different workflows, it explains the relevant choices, recommends an approach and waits for your selection. Requests for advice stay advisory. You can describe the outcome without remembering invocation names. Invoking the mode alone asks what you want to work on. Tracking, Audit Trail and other outcome-specific opt-ins retain their conditions; entering the mode is not approval for installation, cleanup or publication. The installed skills own their procedures, so install the packages you need or use the Logbook Atlas Core. Atlas Setup remains separately requested. Individual skills remain directly usable. Ask to exit Atlas Mode when you want to leave it.

The standalone core is still being completed. Atlas Wayfinder currently requires the independent Research and Prototype skills for those ticket types. Use [Atlas Setup](skills/atlas-setup/SKILL.md) to check declared dependencies and obtain direct install commands without AFK. Optional extensions and their loading conditions are listed in [the dependency registry](skills/atlas-setup/references/dependencies.json).

## Share the Core

The [Logbook Atlas Core page](https://atlas.logbookfordevs.com/stack/) explains the collection and offers its [public JSON manifest](https://atlas.logbookfordevs.com/stack.json). The canonical source is [stacks/atlas.json](stacks/atlas.json).

[AFK — AI Field Kit](https://ai-field-kit.logbookfordevs.com/) manages coding-agent skills, tools and shared rules. Install with `afk install https://atlas.logbookfordevs.com/stack.json`, or `npx @logbookfordevs/afk install https://atlas.logbookfordevs.com/stack.json`. Manifest URL installation is available in AFK 2.0.6 and later.

In AFK’s kit, Core holds always-on skills, Packs replace profiles and stacks, and Try later holds bookmarks. Installing the manifest saves a pack named **Logbook Atlas**, then installs through Skills CLI. Turn that pack on for **Global** to keep it always on; manifest import does not add skills directly to your Core.

To use the app, run `npx @logbookfordevs/afk` and choose **Import pack in Kit → Packs (in AFK 2.0.7: Sources & Stacks)**. Paste `https://atlas.logbookfordevs.com/stack.json` and review the selection. Import saves without installing; install through AFK or its copied Skills CLI script. AFK remains optional: use the direct `npx skills add …` commands above for Atlas packages and each listed upstream for independent skills. See [Core installation and maintenance](docs/atlas-stack.md) and [AFK’s kit guide](https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#install-directly-from-a-manifest).

## Creative skills

The figure engines, visual styles, examples and creative methods come from the authors below. **Atlas supplies packaging and the Figures chooser; the creative work is theirs.** Visit their original projects for demos and distributions.

| Author | Creative work carried in Atlas |
| --- | --- |
| **[April Zhu (@Aprilzz423)](https://x.com/Aprilzz423)** | **[ISO-GLOW](https://isoglow.dev/)** — glowing isometric illustrations and interactive 3D; **[Colorfigures](https://april-zhu.com/colorfigures)** — hand-inked objects with working mechanisms and see-through views; **[Minicharts](https://april-zhu.com/minicharts)** — illustrated data charts drawn to scale; **[Playable](https://april-zhu.com/playable)** — rigged models and original robots you can drive in the browser |
| **[Lucas Marques](https://github.com/lucasmarkes/hairline)** | **Hairline** — responsive isometric line figures |
| **[Ryan](https://github.com/wheresryan22/anatomy)** | **Anatomy** — detailed interactive mechanisms and technical illustrations |
| **[Brooklyn Nicholson](https://github.com/OutThisLife/brooklyn-skills)** | **Engraved Figures** — scientific plates and monochrome technical drawings |
| **[Jakub Krehel](https://github.com/jakubkrehel/skills)** | **Teardown** — coherent technical views and exploded assemblies |

April’s ISO-GLOW builds on **[Tolga Cohce’s iso-figure](https://github.com/MrBongoC/ai-iso-skill)**; Colorfigures continues that lineage. Original licenses and copyright notices are preserved.

The optional [Atlas Figures](creative-skills/atlas-figures/SKILL.md) composition follows your chosen treatment directly, or presents all seven options when you have not chosen. ISO-GLOW, Colorfigures and Minicharts are bundled treatments; their pristine download sources are retained under `sources/upstream/`. Playable is separately installable from Atlas. Playable keeps its original name and is independent of the Figures treatment chooser. See [Creative skills](creative-skills/README.md) for installation, source credits and license details. Creative packages remain outside the Logbook Atlas Core.

## Utility skills

Optional tools live in [`utility-skills/`](utility-skills/README.md), install individually with Skills CLI and stay outside the Logbook Atlas Core:

| Package | Purpose |
| --- | --- |
| [Challenge](utility-skills/challenge/SKILL.md) | Independently challenge an analysis, diagnosis, estimate or proposal before acting; compose Interrogate, Council and Doubt-Driven Development with selected Team Up Arena phases |
| [Showdown](utility-skills/showdown/SKILL.md) | Benchmark skills, prompts or agent setups head-to-head on identical briefs with blind judges, cited-rule rulings and a fighting-game report; runs on Team Up's Swarm |
| [Snap Out of It](utility-skills/snap-out-of-it/SKILL.md) | A candid second opinion and friendly wake-up call when overthinking or overengineering |
| [Writing for Humans](utility-skills/writing-for-humans/SKILL.md) | Author voice, reader experience, technical documentation and shared Unslop guidance |
| [Skill Source Composition](utility-skills/skill-source-composition/SKILL.md) | Apply provenance, patched-source contracts and reviewed upstream updates in another project |

## Recommended independent skills

The stack manifest lists the unchanged skills used alongside Atlas, including Research, Prototype, Doubt-Driven Development, Writing for Agents, and library-specific tools. TDD and Source-Driven Development ship inside Engineering Principles; Implement bundles the adapted Implement Spec coordinator. Teach and Diagnosing Bugs install directly from Matt Pocock; Code Simplification installs directly from Addy Osmani. Atlas Grill and Atlas Wayfinder share bundled Grilling and Domain Modeling references. These packages retain pinned source receipts. Independent authors own upstream updates; Atlas maintains its carried adaptations. See [the fresh-start decisions](docs/specs/atlas-fresh-start.md) for the original disposition.

AFK’s CLI guidance is owned by the AFK project, not Atlas. Compass is excluded for now. The website publishes the stack manifest; terminal stack installation is provided by AFK. Atlas Setup currently checks dependencies rather than installing the entire recommended stack.

For examples of combining the current skills, see [Work with Atlas](docs/workflows.md).

## Source maintenance

A single [composition manifest](sources/composition.json) tracks carried sources, immutable revisions, licenses, supporting files, patches and consumers. Preserved upstream frontmatter stays with each source. Installable packages include source receipts and required notices.

Atlas Explain’s visual-artifact guidance adapts [Big Pics Little Words](https://github.com/plannotator/effective-html/blob/975b047f6da6874e176db54f048c0c31c30e9f65/skills/big-pics-little-words/SKILL.md), originally from [backnotprop’s Bro](https://github.com/backnotprop/bro) and distributed by Plannotator under the [MIT license](https://github.com/plannotator/effective-html/blob/975b047f6da6874e176db54f048c0c31c30e9f65/LICENSE), copyright © 2026 Plannotator. This small adaptation is maintained directly, without upstream tracking.

The [upstream update workflow](docs/authoring/upstream-updates.md) detects changes, replays patches in isolation and opens or updates review issues. Reviewed adoption prepares complete packages locally; it never auto-merges an update. The daily workflow runs from the default branch.

```sh
pnpm upstream:check
pnpm upstream:prepare --source <id> --revision <reviewed-commit>
pnpm check
```

## Authoring

Follow [Skill maintenance](docs/authoring/source-composition.md) to add, edit, patch, compose or remove skills. It defines editable files, source registration, dependency maintenance and validation. [Composition decision history](docs/migrations/composition-decisions.md) preserves the rationale separately.

`legacy/` preserves retained migration baselines. Git history preserves retired experiments and proposal iterations; the [fresh-start record](docs/specs/atlas-fresh-start.md) records earlier distribution decisions.

---

A tool from [Logbook for Devs](https://logbookfordevs.com/).
