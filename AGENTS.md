# Atlas maintenance

Before adding, editing, patching, composing or removing skills, read [Skill maintenance](docs/authoring/source-composition.md). For upstream detection, adoption, license changes or patch conflicts, also read [Upstream updates](docs/authoring/upstream-updates.md). For shared stack selections and AFK import, read [Stack sharing](docs/atlas-stack.md).

Runtime instructions describe the task, reference-loading conditions and concrete conflict rulings. Apply Writing for Agents when authoring them; keep provenance, licensing and repository maintenance in docs and manifests.

For skill additions and revisions, keep descriptions short and tied to concrete task or decision triggers. Keep multi-method entries small, with conditional references. Prune redundant checks, emphasis and procedural scaffolding while preserving meaningful contracts. Assess discovery separately from usefulness after loading; an agent's retrospective explanation is a hypothesis, not selection evidence. See [OpenAI's skill guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra).

`legacy/` holds retained migration baselines; active-package changes leave those files intact unless their removal is explicitly requested. Record authorized baseline removals in the archive receipt.

When the user or a selected skill asks for delegation, use `team-up` to choose available custom roles, models and reasoning effort deliberately.
