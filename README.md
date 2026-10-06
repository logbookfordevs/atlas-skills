# Logbook Atlas

![Thelu charts a route through developer tools: You are here. Probably.](docs/assets/logbook-atlas-banner.png)

The skill stack I use for Logbook for Devs: authored utilities, intentional upstream adaptations and a few focused compositions. Independent skills stay independent unless combining them removes real friction.

Atlas maintains what it authors, patches or bundles. Unchanged independent skills are recommended from their original sources in [the stack manifest](stacks/atlas.json). [AFK](https://github.com/logbookfordevs/ai-field-kit) manages installed skills and activation; Skills CLI handles installation.

## Local Skills V2 preview

These packages are committed and available on the review branch; default-branch cutover remains pending.

| Package | Purpose |
| --- | --- |
| [HTML UI](skills/html-ui/SKILL.md) | Wireframe and polished Model modes |
| [Atlas To Spec](skills/atlas-to-spec/SKILL.md) | Separate maintained adaptation of Matt Pocock's To Spec |
| [Atlas To Tickets](skills/atlas-to-tickets/SKILL.md) | Separate maintained adaptation with local ticket templates |
| [Atlas Review](skills/atlas-review/SKILL.md) | Code, Static and Motion review |
| [Atlas Craft](skills/atlas-craft/SKILL.md) | Better Colors, Typography and Layout |
| [Atlas Motion](skills/atlas-motion/SKILL.md) | Animate and Fluid interaction methods |
| [Tracking Implementation](skills/tracking-implementation/SKILL.md) | Automatic tracking alongside any selected executor |
| [Animated-Driven Frontend](skills/animated-driven-frontend/SKILL.md) | Manually invoked ZERO engineering knowledge |
| [Team Up](skills/team-up/SKILL.md) | Deliberate model, effort and custom-agent selection |
| [Writing for Humans](skills/writing-for-humans/SKILL.md) | Existing writing method with verbatim Stop Slop |
| [Atlas Setup](skills/atlas-setup/SKILL.md) | Manual check of independent dependencies for installed packages |

Select packages explicitly from the review branch:

```sh
npx skills add https://github.com/logbookfordevs/logbook-atlas#feat/skills-v2 --skill atlas-review
```

Avoid installing every recursively discovered skill from this development branch: retained historical entries may appear in discovery. No personal installation is changed by building the repository.

## Share the stack

The [Atlas stack manifest](stacks/atlas.json) combines these packages and the retained independent skills in AFK’s version-one format. Import pasted JSON or a direct manifest URL in the upcoming Sources & Stacks feature, review the selection, and copy an install script. See [stack installation and maintenance](docs/atlas-stack.md). The Atlas manifest is available on the review branch; AFK must support the version-one stack format to import it.

## Recommended independent skills

The stack manifest lists the unchanged skills used alongside Atlas, including Impeccable, Research, Wayfinder, Grill Me, Grill with Docs, Prototype, TDD, Diagnosing Bugs, Writing for Agents, and library-specific tools. Their original authors own their upstream updates. See [the fresh-start decisions](docs/specs/atlas-fresh-start.md) for the full disposition.

AFK CLI and Profile Use are companion skills owned by the AFK project, not Atlas packages. Compass is excluded for now. A public stack website and thin installer are possible follow-up work; neither is implemented here. Atlas Setup currently checks dependencies rather than installing the entire recommended stack.

## Source maintenance

A single [composition manifest](sources/composition.json) tracks carried sources, immutable revisions, licenses, supporting files, patches and consumers. Preserved upstream frontmatter stays with each source. Generated packages include source receipts and required notices.

The [upstream update workflow](docs/authoring/upstream-updates.md) detects changes, replays patches in isolation and opens or updates review issues. Reviewed adoption prepares complete packages locally; it never auto-merges an update. The daily schedule activates only after publication on the default branch.

```sh
pnpm upstream:check
pnpm upstream:prepare --source <id> --revision <reviewed-commit>
pnpm check
```

## Authoring

Edit `authored/` for Atlas-owned entries and references, or `sources/methods/` for maintained upstream adaptations. `skills/` is generated distribution output. Run `pnpm build:skills` after editing inputs and commit inputs and outputs together. See [authoring and provenance](docs/authoring/source-composition.md).

`legacy/` preserves retained migration baselines. Git history preserves retired experiments and proposal iterations; the [fresh-start record](docs/specs/atlas-fresh-start.md) defines the current direction.

---

A tool from [Logbook for Devs](https://logbookfordevs.com/).
