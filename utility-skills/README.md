# Utility skills

Optional Atlas-authored skills for use beyond Atlas’s core workflows. These packages are separate from `skills/` and are not included in the shared stack.

| Skill | Purpose | Invocation |
| --- | --- | --- |
| [Source Composition](source-composition/SKILL.md) | Carry, adapt and combine upstream material with provenance, integrity checks and reviewed updates | Manual |

Install with Skills CLI:

```sh
npx skills add https://github.com/logbookfordevs/atlas-skills/tree/main/utility-skills/source-composition
```

The remote command requires this package to be published on `main`. To try it from a checkout containing the package:

```sh
npx skills add ./utility-skills/source-composition
```

For example: “Use source-composition to bring these upstream templates into this project, preserving our adaptations and making updates reviewable.”

Source Composition is a portable methodology reference. It does not require an Atlas checkout, install Atlas’s build scripts or create an upstream watcher merely by being invoked. Atlas’s own implementation is documented in [Skill maintenance](../docs/authoring/source-composition.md) and [Upstream updates](../docs/authoring/upstream-updates.md).
