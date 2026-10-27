# Logbook Atlas

![Thelu charts a route through developer tools: You are here. Probably.](docs/assets/logbook-atlas-banner.png)

The skill stack I use for Logbook for Devs: core workflows with Atlas invocations, authored utilities, intentional upstream adaptations and a few focused compositions. Complementary skills remain independently available from their original sources.

Keep methods independently maintained; bundle what Atlas needs to deliver its core workflows without relying on AFK.

Atlas maintains what it authors, patches or bundles. Complementary independent skills are recommended from their original sources in [the stack manifest](stacks/atlas.json). [AFK](https://ai-field-kit.logbookfordevs.com/) is optional tooling for managing installed skills and activation. Install Atlas packages directly with Skills CLI; AFK is not a workflow requirement.

## Skills V2

Collection releases use Git tags and GitHub releases. **v1.1.0** identifies this skill set; see the [release notes](CHANGELOG.md). Upstream revisions remain recorded separately in each package’s source receipt.

Install the packages below, or import the shared stack to include the recommended independent skills. Original-name upstream packages retain their authorship and methods.

| Package | Purpose |
| --- | --- |
| [Atlas Mode](skills/atlas-mode/SKILL.md) | Manual working mode that applies Atlas skills and inner methods throughout a task |
| [HTML UI](skills/html-ui/SKILL.md) | Wireframe and polished Model modes |
| [Atlas Grill](skills/atlas-grill/SKILL.md) | Grilling by default; Domain Modeling and documentation on explicit request |
| [Atlas Wayfinder](skills/atlas-wayfinder/SKILL.md) | Manually invoked decision maps with shared Grilling and Domain Modeling methods |
| [Atlas Explain](skills/atlas-explain/SKILL.md) | How, Why, conversational Teach and requested Interface explanations; asks when the mode is unspecified |
| [Atlas To Spec](skills/atlas-to-spec/SKILL.md) | Separate maintained adaptation of Matt Pocock's To Spec |
| [Atlas To Tickets](skills/atlas-to-tickets/SKILL.md) | Separate maintained adaptation with local ticket templates |
| [Atlas Implement](skills/atlas-implement/SKILL.md) | Architect, TDD and Source-Driven methods, selected independently or together |
| [Atlas Review](skills/atlas-review/SKILL.md) | Code, Adversarial, Impact, Static, Interface, Motion and Motion Audit review |
| [Atlas Verify](skills/atlas-verify/SKILL.md) | Run behavior/QA checks, stress-test UI data, maintain project verifiers and assess performance evidence |
| [Atlas Craft](skills/atlas-craft/SKILL.md) | Six refinement domains plus an explicitly requested States workbench; conditional Mobile Web guidance |
| [Atlas Motion](skills/atlas-motion/SKILL.md) | Animate, Fluid, Performance diagnosis and read-only Opportunities |
| [Tracking Implementation](skills/tracking-implementation/SKILL.md) | Implementation state and evidence alongside any executor, with optional Audit Trail |
| [Animated-Driven Frontend](skills/animated-driven-frontend/SKILL.md) | Manually invoked ZERO engineering knowledge |
| [Team Up](skills/team-up/SKILL.md) | Role/model/effort selection, Arena candidate synthesis, Swarm coverage or races, and explicitly requested Clean Room decisions; optional shared subject preferences |
| [Writing for Humans](skills/writing-for-humans/SKILL.md) | Author voice and reader experience, technical documentation, and shared Unslop guidance |
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

The [CLI catalog](.claude-plugin/marketplace.json) groups packages as **Atlas Workflows**, **Creative Skills** and **Utility Skills**. Individual names and descriptions come from each package’s `SKILL.md`. Creative and utility skills remain optional and outside the shared stack. The catalog adds discovery paths and grouping; it is not an exclusion list, so `--full-depth` can still expose retained historical entries. No personal installation is changed by building the repository.

Start with `Use atlas-mode to <your task>`. Atlas Mode applies clearly selected skills and inner methods, including manually invoked packages such as Wayfinder and Retro. When alternatives imply materially different workflows, it explains the relevant choices, recommends an approach and waits for your selection. Requests for advice stay advisory. You can describe the outcome without remembering invocation names. Invoking the mode alone asks what you want to work on. Tracking, Audit Trail and other outcome-specific opt-ins retain their conditions; entering the mode is not approval for installation, cleanup or publication. The installed skills own their procedures, so install the packages you need or use the shared stack. Atlas Setup remains separately requested. Individual skills remain directly usable. Ask to exit Atlas Mode when you want to leave it.

The standalone core is still being completed. Atlas Wayfinder currently requires the independent Research and Prototype skills for those ticket types. Use [Atlas Setup](skills/atlas-setup/SKILL.md) to check declared dependencies and obtain direct install commands without AFK. Optional extensions and their loading conditions are listed in [the dependency registry](skills/atlas-setup/references/dependencies.json).

## Share the stack

The [shared stack page](https://atlas.logbookfordevs.com/stack/) explains the collection and offers its [public JSON manifest](https://atlas.logbookfordevs.com/stack.json). The canonical source is [stacks/atlas.json](stacks/atlas.json).

[AFK — AI Field Kit](https://ai-field-kit.logbookfordevs.com/) is a local workspace for managing coding-agent skills, reusable profiles, tools and shared rules. Install from your terminal with `npx @logbookfordevs/afk install https://atlas.logbookfordevs.com/stack.json`. To use the interface instead, run `npx @logbookfordevs/afk`, open **Sources & Stacks → Import stack**, and paste `https://atlas.logbookfordevs.com/stack.json`. Review and save the selection, choose your agent and destination, then install or copy its install script. AFK remains optional; individual packages can be installed directly with Skills CLI. See [stack installation and maintenance](docs/atlas-stack.md). AFK 2.0 supports the version-one stack format.

## Creative skills

[ISO-GLOW and Colorfigures](creative-skills/README.md) by [April Zhu (@Aprilzz423)](https://x.com/Aprilzz423) are preserved from their downloadable distributions under `creative-skills/`. Both retain their MIT licenses and credit [Tolga Cohce’s iso-figure](https://github.com/MrBongoC/ai-iso-skill), the underlying project. Install either optionally with Skills CLI using the commands in their README; neither is included in the shared stack. The optional [Atlas Figures](creative-skills/atlas-figures/SKILL.md) composition bundles these alongside Hairline, Anatomy, Engraved Figures and Teardown. It presents all six treatments and leaves selection to you. Creative packages remain outside the shared stack.

## Utility skills

[Source Composition](utility-skills/README.md) is an optional, manually invoked skill for applying Atlas’s provenance, verbatim and patched-source contracts, composition rulings and reviewed update strategy in other projects. Utility skills live in `utility-skills/` and install individually with Skills CLI; they are outside the shared stack.

## Recommended independent skills

The stack manifest lists the unchanged skills used alongside Atlas, including Research, Prototype, Doubt-Driven Development, Writing for Agents, and library-specific tools. TDD and Source-Driven Development ship inside Atlas Implement; Teach and Diagnosing Bugs install directly from Matt Pocock; Code Simplification installs directly from Addy Osmani. Atlas Grill and Atlas Wayfinder share bundled Grilling and Domain Modeling references. These packages retain pinned source receipts. Independent authors own upstream updates; Atlas maintains its carried adaptations. See [the fresh-start decisions](docs/specs/atlas-fresh-start.md) for the original disposition.

AFK CLI and Profile Use are companion skills owned by the AFK project, not Atlas packages. Compass is excluded for now. The website publishes the stack manifest; terminal stack installation is provided by AFK. Atlas Setup currently checks dependencies rather than installing the entire recommended stack.

For examples of combining the current skills, see [Work with Atlas](docs/workflows.md).

## Source maintenance

A single [composition manifest](sources/composition.json) tracks carried sources, immutable revisions, licenses, supporting files, patches and consumers. Preserved upstream frontmatter stays with each source. Installable packages include source receipts and required notices.

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
