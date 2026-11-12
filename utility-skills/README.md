# Utility skills

Optional authored skills and source compositions for use beyond Atlas’s core workflows. These packages are separate from `skills/` and are not included in the shared stack.

| Skill | Purpose | Invocation |
| --- | --- | --- |
| [Challenge](challenge/SKILL.md) | Test an assessment with independent reviewers, executable evidence where possible, supported objections and explicit unknowns | Manual |
| [Showdown](showdown/SKILL.md) | Benchmark contenders head-to-head on identical briefs with blind judges and a fighting-game report | Manual |
| [Snap Out of It](snap-out-of-it/SKILL.md) | A candid second opinion and friendly wake-up call for overthinking or overengineering | Manual |
| [Writing for Humans](writing-for-humans/SKILL.md) | Write, revise or critique prose for meaning, voice and reader experience | Manual |
| [Skill Source Composition](skill-source-composition/SKILL.md) | Carry, adapt and combine upstream material with provenance, integrity checks and reviewed updates | Manual |

Install with Skills CLI:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills --skill challenge
```

The remote command requires this package to be published on `main`. To try it from a checkout containing the package:

```sh
npx skills add ./utility-skills/challenge
```

For example: “Use skill-source-composition to bring these upstream skills into this project, preserving our adaptations and making updates reviewable.”

Skill Source Composition is a portable methodology reference. It does not require an Atlas checkout, install Atlas’s build scripts or create an upstream watcher merely by being invoked. Atlas’s own implementation is documented in [Skill maintenance](../docs/authoring/source-composition.md) and [Upstream updates](../docs/authoring/upstream-updates.md).

Challenge carries patched sources from [Pstack Interrogate](https://github.com/backnotprop/pstack/tree/main/skills/interrogate), [Theo Browne’s Council](https://github.com/t3dotgg/tstack/tree/main/skills/council) and [Addy Osmani’s Doubt-Driven Development](https://github.com/addyosmani/agent-skills/tree/main/skills/doubt-driven-development). Each retains its pinned original, MIT license, replayable patch and source receipt. Team Up is required for selected Arena phases; it remains a separately installed Core package. Challenge does not require the three upstream skills to be installed separately.

For example: “Use challenge on our conclusion that this is a one-day fix. What evidence or omitted work could change that estimate?” Snap Out of It instead asks whether we are making the problem harder than it needs to be. Its previous name was Reality Check.

Showdown runs Team Up's Arena Phases A–C for framing, contender runs and cross-family judging, then adds its own rule judge and report. It audits every contender's instruction files before scoring, and keeps refusals by design out of the round tally. For example: “Use showdown to benchmark these two design skills on our app's landing page and settings screen.”

Registered utility compositions use the same builder, source watcher and reviewed-adoption pipeline as Core and creative packages. Standalone Skill Source Composition remains an independently authored package without a generated receipt. Directory grouping does not remove provenance or update coverage. Existing personal installations are not changed by this repository reorganization.
