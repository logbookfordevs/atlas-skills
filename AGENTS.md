# Atlas maintenance

Before adding, editing, patching, composing or removing skills, read [Skill maintenance](docs/authoring/source-composition.md). For upstream detection, adoption, license changes or patch conflicts, also read [Upstream updates](docs/authoring/upstream-updates.md). For shared stack selections and AFK import, read [Stack sharing](docs/atlas-stack.md).

Runtime instructions describe the task, reference-loading conditions and concrete conflict rulings. Apply Writing for Agents when authoring them; keep provenance, licensing and repository maintenance in docs and manifests.

`legacy/` holds retained migration baselines; active-package changes leave those files intact unless their removal is explicitly requested. Record authorized baseline removals in the archive receipt.

When the user or a selected skill asks for delegation, use `team-up` to choose available custom roles, models and reasoning effort deliberately.
