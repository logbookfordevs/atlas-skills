# Atlas Core and AFK configuration

[The Atlas Core manifest](../stacks/atlas.json) publishes Leonardo’s AFK Core selection. Edit it directly when the selection changes; run `pnpm build:skills` and `pnpm check` afterward. Atlas owns its authored, patched and bundled packages; independent skills install from their listed upstreams. See [the distribution premise and direct installation route](../README.md) for using Atlas without AFK.

AFK configuration is independent of Atlas skill generation. Choose **Import pack in Kit → Packs (in AFK 2.0.7: Sources & Stacks)** to import the manifest. In the upcoming kit release, AFK saves it as a pack; turn it on for **Global** to keep it always on. Import does not install skills or add them directly to Core. See [installation and maintenance](atlas-stack.md) and [AFK’s kit guide](https://github.com/logbookfordevs/ai-field-kit/blob/main/docs/kit.md#packs). Atlas has no dependency on the retired AFK catalogs or registry.
