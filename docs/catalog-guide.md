# Atlas stack and AFK configuration

[The Atlas stack manifest](../stacks/atlas.json) defines the shared skill selection. Edit it directly; run `pnpm build:skills` and `pnpm check` after changes. Atlas owns its authored, patched and composed packages; independent skills install from their listed upstreams.

The `afk/` directory stores Leonardo’s AFK configuration. It is independent of Atlas skill generation. AFK’s Sources & Stacks can import the manifest; profiles and activation remain AFK concerns. Atlas has no dependency on the retired AFK catalogs or registry.
