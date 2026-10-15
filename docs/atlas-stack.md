# Installing the Atlas stack with AFK

AFK import is an optional installation route. For direct package installation and the current standalone-core gaps, see [the README](../README.md#skills-v2).

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

The stack lists selected skills as an installable collection; it does not define daily activation. This file is a selection manifest, not a lockfile. External references follow the authors’ repositories and Skills CLI update behavior. Implement Spec, PR and Retro install from Matt Pocock’s repository; Atlas Verify installs from Atlas, carrying the maintained verification source and report engine from Product Engineering.

The carried-source manifest in `sources/composition.json` is separate: it preserves pinned snapshots and adaptations inside Atlas’s own packages. Its scheduled update issues do not update external installations or this stack’s source selection.

Atlas Implement carries TDD and Source-Driven Development as directly loaded methods, so those two no longer need separate stack installations. Atlas Debug carries Diagnosing Bugs and its reproduction script, replacing the standalone selection. Doubt-Driven Development remains an independent selection. Updating the shared stack does not remove existing standalone installations from a user's machine.

Atlas Grill replaces Grilling, Grill Me and Grill with Docs. It defaults to Grilling and selects With Docs only on an explicit user request. Atlas Wayfinder replaces Wayfinder and remains manually invoked. Both packages carry Grilling and Domain Modeling from the same registered sources, so Domain Modeling needs no separate stack installation. Wayfinder uses the configured tracker adapter or its bundled local fallback; Research and Prototype remain independent dependencies for their ticket types.

Atlas Simplify carries Code Simplification verbatim and replaces its independent stack selection. Tracking offers Atlas Simplify for material simplification opportunities while preserving the checkpoint's agreed scope.

Atlas Verify carries PE Verify's Run/report engine and Pstack's Create, Maintain and Performance methods. Atlas Review adds Pstack Interrogate as Adversarial and Blast Radius as Impact. These methods and their support files ship inside the consuming packages; no separate Pstack installation is needed. The Pstack baseline is the modified standalone mirror at `backnotprop/pstack`, with its own pinned source records and MIT notices. Method selection does not add automatic review passes, product repairs or publication steps.

Atlas Explain carries How, Why and conversational Teach from the same pinned Pstack mirror. A missing mode prompts the user to choose before investigation. Teach's How/Why calls load bundled references directly, and Unslop is bundled locally as Teach's editorial dependency and shares its maintained source with Writing for Humans. Matt Pocock's stateful Teach remains a separate, manually invoked `teach` package, carried verbatim with all four format references and original invocation metadata. Its stack selection now comes from Atlas's distribution, so there is one installation entry for Matt Teach.

Atlas Implement adds Architect as a selective design-first method alongside TDD and Source-Driven. Its Arena comparison dependency, required principle references, and complete shared How/Why/Interrogate methods are bundled; Architect needs no separate installation of Atlas Explain, Atlas Review or Pstack. Shared methods retain one maintained source record and portable copies in each consumer. No global principle library is installed.

Team Up now exposes Arena and Swarm alongside its default delegation policy. Arena shares the existing maintained source with Architect and carries its four required principle references. Swarm carries Pstack's full partition/race/hybrid method with host and evidence adaptations. The role/model/effort policy and model ladder have one maintained authored input, bundled into both Team Up and Implement so Arena uses the policy without re-entering a workflow router. No separate Arena, Swarm or Team Up installation is required by Architect.

Writing for Humans loads Pstack Technical Writing for technical documentation. Its four layers sit within the existing author, reader and factual contracts, with Unslop as the shared editorial catalog. PR guidance is removed from Writing for Humans; the independently selected Matt `pr` skill owns that workflow. Unslop replaces Stop Slop, with contextual punctuation and terminology rules and explicit preservation of voice and factual qualifications. No standalone Unslop installation is required.

Tracking offers Audit Trail on explicit request, retaining the selection on resume. It carries Pstack Show Me Your Work with its append-only TSV format, template and logging helper, plus the shared Unslop catalog and contextual evidence principle. The trail is linked from the canonical Tracking Home. Transcript reconciliation and reviewer independence report actual host coverage and gaps; Attention accompanies checkpoint handoffs. HumanLayer Show Me still guides presentation, and Tracking retains code-review, commit and acceptance policy.

Impeccable is used as a separately configured tool and is excluded from skill installation selections. AFK’s own CLI guidance remains a companion supplied by AFK, rather than an Atlas installation entry.
