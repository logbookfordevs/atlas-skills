# Logbook Atlas

![Thelu charts a route through developer tools: You are here. Probably.](docs/assets/logbook-atlas-banner.png)

The skill stack I use for Logbook for Devs: authored utilities, intentional upstream adaptations and a few focused compositions. Independent skills stay independent unless combining them removes real friction.

Atlas maintains what it authors, patches or bundles. Unchanged independent skills are recommended from their original sources in [the stack manifest](stacks/atlas.json). [AFK](https://github.com/logbookfordevs/ai-field-kit) manages installed skills and activation; Skills CLI handles installation.

## Skills V2

Install the Atlas-owned packages below, or import the shared stack to include the recommended independent skills.

| Package | Purpose |
| --- | --- |
| [HTML UI](skills/html-ui/SKILL.md) | Wireframe and polished Model modes |
| [Atlas To Spec](skills/atlas-to-spec/SKILL.md) | Separate maintained adaptation of Matt Pocock's To Spec |
| [Atlas To Tickets](skills/atlas-to-tickets/SKILL.md) | Separate maintained adaptation with local ticket templates |
| [Atlas Review](skills/atlas-review/SKILL.md) | Code, Static, Interface, Motion and Motion Audit review |
| [Atlas Craft](skills/atlas-craft/SKILL.md) | Color, Type, Layout, Accessibility, UI Polish and Copy |
| [Atlas Motion](skills/atlas-motion/SKILL.md) | Animate, Fluid and read-only Opportunities |
| [Tracking Implementation](skills/tracking-implementation/SKILL.md) | Automatic tracking alongside any selected executor |
| [Animated-Driven Frontend](skills/animated-driven-frontend/SKILL.md) | Manually invoked ZERO engineering knowledge |
| [Team Up](skills/team-up/SKILL.md) | Deliberate model, effort and custom-agent selection |
| [Writing for Humans](skills/writing-for-humans/SKILL.md) | Existing writing method with verbatim Stop Slop |
| [Atlas Setup](skills/atlas-setup/SKILL.md) | Manual check of independent dependencies for installed packages |

Select packages explicitly:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --skill atlas-review
```

Select the active packages by name: retained historical entries may appear in recursive discovery. No personal installation is changed by building the repository.

## Share the stack

The [Atlas stack manifest](stacks/atlas.json) combines these packages and the retained independent skills in AFK’s version-one format. Import pasted JSON or a direct manifest URL in AFK’s Sources & Stacks, review the selection, and copy an install script. See [stack installation and maintenance](docs/atlas-stack.md). AFK 2.0 supports the version-one stack format.

## Recommended independent skills

The stack manifest lists the unchanged skills used alongside Atlas, including Research, Wayfinder, Grill Me, Grill with Docs, Prototype, TDD, Diagnosing Bugs, Writing for Agents, and library-specific tools. Their original authors own their upstream updates. See [the fresh-start decisions](docs/specs/atlas-fresh-start.md) for the full disposition.

AFK CLI and Profile Use are companion skills owned by the AFK project, not Atlas packages. Compass is excluded for now. A public stack website and thin installer are possible follow-up work; neither is implemented here. Atlas Setup currently checks dependencies rather than installing the entire recommended stack.

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

`legacy/` preserves retained migration baselines. Git history preserves retired experiments and proposal iterations; the [fresh-start record](docs/specs/atlas-fresh-start.md) defines the current direction.

---

A tool from [Logbook for Devs](https://logbookfordevs.com/).
