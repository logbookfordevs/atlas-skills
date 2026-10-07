# Installing the Atlas stack with AFK

[stacks/atlas.json](../stacks/atlas.json) is the portable AFK version-one stack manifest. It combines Atlas packages with selected independent skills from their original repositories. This manifest is edited directly and is the single source of truth for the shared skill selection.

## Import

In AFK’s Sources & Stacks, add a stack by pasting the manifest JSON or providing its direct HTTPS JSON URL. Inspect the sources and skill selections before saving. Copy the stack’s install script, select the installation destination and agent, and run the copied script when ready. Import and copy do not install or activate skills. Profiles remain optional activation groups.

AFK 2.0 includes Sources & Stacks on its main branch. Import Atlas’s published manifest from:

```text
https://raw.githubusercontent.com/logbookfordevs/atlas-skills/main/stacks/atlas.json
```

The stack schema points to AFK’s main branch; Atlas packages come from Atlas’s default branch. Explicit skill selections prevent retained legacy entries or newly added upstream skills from joining the stack automatically.

## Maintenance

Edit `stacks/atlas.json`, then run `pnpm build:skills` to refresh Setup’s dependency references and `pnpm check` to validate the stack and packages. Installation scope and agent are chosen in AFK; the manifest contains no executable commands, profile state, invocation overrides, tool installs or post-install actions.

The stack lists selected skills as an installable collection; it does not define daily activation. This file is a selection manifest, not a lockfile. External references follow the authors’ repositories and Skills CLI update behavior. Implement Spec, PR and Retro install from Matt Pocock’s repository; Verify installs from Product Engineering.

The carried-source manifest in `sources/composition.json` is separate: it preserves pinned snapshots and adaptations inside Atlas’s own packages. Its scheduled update issues do not update external installations or this stack’s source selection.

Impeccable is used as a separately configured tool and is excluded from skill installation selections. AFK’s own CLI guidance remains a companion supplied by AFK, rather than an Atlas installation entry.
