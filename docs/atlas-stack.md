# Installing the Atlas stack with AFK

[stacks/atlas.json](../stacks/atlas.json) is the portable AFK version-one stack manifest. It combines Atlas packages with selected independent skills from their original repositories. It is generated from [the skill registry](../afk/catalog/skills.json); the registry remains the single selection source of truth.

## Import

In AFK’s Sources & Stacks, add a stack by pasting the manifest JSON or providing its direct HTTPS JSON URL. Inspect the sources and skill selections before saving. Copy the stack’s install script, select the installation destination and agent, and run the copied script when ready. Import and copy do not install or activate skills. Profiles remain optional activation groups.

This requires the AFK Sources & Stacks feature currently being implemented on its review branch. Both this manifest and that feature must be published before remote import is available. The direct preview URL, after publication, is:

```text
https://raw.githubusercontent.com/logbookfordevs/logbook-atlas/feat/skills-v2/stacks/atlas.json
```

The Atlas source and schema URL intentionally target their preview branches. Move those references to stable releases when the reviewed work is published there. Explicit skill selections prevent retained legacy entries or newly added upstream skills from joining the stack automatically.

## Maintenance

Edit the existing registry, then run `pnpm build:stack`. `pnpm check` verifies the generated manifest is current. Do not edit the generated JSON separately. Installation scope and agent are chosen in AFK; the manifest contains no executable commands, profile state, invocation overrides, tool installs or post-install actions.

The stack lists all currently retained registry entries as a selectable collection; it does not infer daily activation from the old catalog’s `default` flags. This file is a selection manifest, not a lockfile. External references follow the authors’ repositories and Skills CLI update behavior. The new Product Description, Verify, PR and Retro candidates remain outside this manifest pending source verification and adoption.

The carried-source manifest in `sources/composition.json` is separate: it preserves pinned snapshots and adaptations inside Atlas’s own packages. Its scheduled update issues do not update external installations or this stack’s source selection.

Impeccable’s custom-agent provisioning is not performed by this manifest. Follow its upstream setup guidance for capabilities beyond the selected skill package. AFK’s own CLI guidance remains a companion supplied by AFK, rather than an Atlas installation entry.
