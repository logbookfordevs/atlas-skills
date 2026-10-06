# Maintaining composed skills

Workflow inputs live under `workflows/`; reusable maintained methods live under `sources/methods/`. `sources/composition.json` records lineage and declared consumers. Generated packages live under `skills/` and are portable without AFK or a shared runtime directory. The Investigate preview was removed after review; Atlas Decide is now the first active composed workflow package. Pinned snapshots and composition tooling remain for subsequent skills.

Run `pnpm build:skills` after editing inputs. Run `pnpm check` before committing. Commit canonical inputs and generated outputs together. The check compares bytes, including entry metadata, agent policy, local references, license notices and source manifests. A package includes its authored methods and carried upstream references with their supporting resources. Only separately installed skills are behavioral dependencies; their availability is conditional on the selected method. A bundled method may itself require an independent skill.

## Sources and adaptations

- Atlas Decide carries Grill Me, Grill with Docs and Wayfinder **verbatim**, each with its own immutable pin, checksums and MIT notice. The authored entry selects operations and transitions; it does not patch their frontmatter or silently cancel their instructions. Named primitives remain independent behavioral dependencies. A required dependency may be conditional on the selected flow; the manifest records that condition.


- Research: Matt Pocock's MIT-licensed source, **verbatim**, including its frontmatter. The build copies the pinned snapshot directly and verifies identical bytes. Research remains an independent operation. No composed Research consumer is currently shipped.
- Source verification: **derived** from Addy Osmani's Source Driven Development. Retains version/condition-aware primary evidence, precise attribution and truthful limits. Removes implementation and routine per-decision browsing/approval requirements. The derived method is not consumed by Atlas Implement; its independent original can be selected in a tracking execution bundle.
- Adversarial challenge: **derived** from Addy Osmani's Doubt Driven Development. Retains artifact + contract, fresh-context challenge when authorized, reconciliation, and a bounded stop. Omits the continuous posture, mandatory cross-model offer and host-specific orchestration. This derived method remains unconsumed; neither Decide nor Implement silently absorbs its continuous original posture.

Snapshots preserve upstream evidence; a verbatim reference carries that same content into the runtime package. Preserve upstream frontmatter by default. The enclosing entry governs discovery, and selecting a reference means following its method. Select another route when that method does not fit. Local reference paths do not invoke another umbrella.

Each upstream origin has a repository, immutable commit and original path, plus source and license SHA-256 values. Generated receipts include the carried-content checksum and classification. Hashes verify bytes, not behavior. Derived methods have explicit derivation records instead of falsely claiming verbatim patches. License notices ship with each consumer.

## Updating an input

Compare a candidate upstream revision with its pinned snapshot. Review the affected adaptation and all declared consumers. Adopt the revision deliberately, refresh the source/license checksums, update the patch or derived method and adaptation record, then regenerate and validate consumers together. The build performs no network updates. A watcher/issue bot is deferred; this manifest supplies its future input and impact map.

Add new Atlas behavior to authored inputs. Patch an upstream only for a documented conflict with another composed source or an explicit Atlas contract; improving or normalizing it is not sufficient. A caller override is also a behavioral adaptation and must be recorded. Supported patches use the temporary path `source.md` and are replayed during the build. Source snapshots are immutable until deliberate adoption changes their pin and hash together.

## Frontier-model design

The supplied [OpenAI Astra article](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra) informed a short outcome-based description, conditional reference loading, explicit completion, and fewer unnecessary approval or orchestration rituals. Writing for Agents informed pointer conditions, hierarchy, and separating always-loaded metadata from detailed methods. These are design choices, not a claim of measured superiority on Astra. Record actual behavior against the evaluation cases before making that claim.

## Manifest and future watcher contract

The architecture was checked against [PE’s file manifest](https://github.com/backnotprop/product-engineering/blob/main/foundry/MANIFEST.json), [upstream checker](https://github.com/backnotprop/product-engineering/blob/main/foundry/scripts/check-upstream.sh) and [watcher](https://github.com/backnotprop/product-engineering/blob/main/.github/workflows/upstream-watch.yml). Atlas uses its own implementation; no PE runtime composition is implied. PE calls patched lifts `verbatim-minus` and editorial derivations `distilled`; Atlas uses `patched` and `derived`.

`sources/composition.json` is the authoring manifest, and each generated `SOURCE-MANIFEST.json` is its portable consumer receipt. Each source records original repository/path, immutable commit, tracking ref, pristine snapshot/source hash, carried method/classification, license hash and relevant ruling IDs. Patches carry their replayable file; generated receipts include its checksum. Consumer records describe named independent dependencies. Atlas’s authored routing is recorded separately and linked to its affected sources through ruling IDs.

Future drift detection must compare each tracked file’s pinned upstream content with the candidate tracking-ref content, not merely notice that the repository HEAD changed. Distinguish changed, removed, unavailable and unchanged paths. Independently compare stored snapshot bytes with the pinned remote blob so editing a file and local hash together cannot masquerade as upstream. Online authenticity verification is separate from the offline build and its byte checks. Report patch replay and semantic impact separately, including affected consumers and rulings. Never adopt a new pin, replace installed files or merge changes automatically. Human review selects adoption; regenerate and validate impacted outputs after updating snapshots and adaptations together. No scheduled watcher is implemented by this slice.

## Source trees and authored references

Atlas Design is the automatic composed workflow. Its canonical entry owns selection and artifact fidelity and production boundaries. `workflows/atlas-decide/references/shape/design-choices.md` is absorbed Atlas-authored Design Grill content in Decide’s Shape mode; it has no upstream watcher. The legacy original remains unchanged.

A source may declare `carriedPath` and `supportingFiles`. Keep its runtime entry and supporting files together under the corresponding `references/<mode>/`, retaining their relative paths and upstream frontmatter. Source identity remains in provenance records rather than defining the top-level runtime folder. Multiple sources within a mode may use separate subfolders when needed to preserve relative paths or avoid filename collisions. Each supporting file records its original upstream path, pristine snapshot and checksum; the generated receipt records its carried path and checksum. Supporting files are verbatim in this version; adapting one requires extending the explicit patch contract, not editing generated output. Consumer receipts and future drift detection include every supporting file, not only the entry. Entry-level upstream patches still replay independently.

Workflow `authoredReferences` records Atlas-owned implementation files and their package targets. Putting authored content in a reference file is progressive disclosure, not upstream source composition. Canonical files under `workflows/` are the maintained inputs; archived copies are optional historical evidence. Integrate an absorbed authored skill as ordinary umbrella instructions and references; do not retain its former entry-plus-references package structure merely to mirror the archive. Preserve nested upstream trees where source-relative paths require them. Upstream content is tracked separately under `sources`. Duplicate or escaping output paths fail generation. Relative link validation resolves from the containing reference directory. Installed package discovery must recognize the umbrella, without discovering the source entries as extra public skills.

Design carries Prototype verbatim and HTML Wireframe/HTML Prototype with a narrow sibling-link adaptation: their Design Artifact pointer now names the independent installed skill. This is a concrete portable-path conflict; frontmatter and remaining method content are unchanged. The Prototype production-promotion boundary is an explicit caller ruling, not a concealed upstream edit.

Animate Text remains an independent optional route: repository inspection found no redistribution license, so no upstream content is carried. Selected public PE Build references are adopted as described below; whole PE skills are not nested into Atlas.

Shape belongs to Decide because it settles frontend choices through an interview and visual commitment. Atlas Design owns design artifacts, preserves that commitment, and offers the manual Shape engagement only when needed. Authored reference ownership moves in the manifest; upstream Design receipts and patch lineage do not change.

## Runtime writing review

Apply Writing for Agents’s relevance, no-op, duplication and information-hierarchy checks to each authored entry and reference. Ask what task behavior each sentence changes. Keep routing conditions, actionable name/path resolution, actual dependency gaps, completion criteria and rulings that change execution. Remove collection identity, preserved-frontmatter explanations, composition classifications, maintainer ownership and receipt/license commentary from the runtime entry; maintain them here and in manifests. Mode names can appear in operational tables without an explanation of the Atlas abstraction. Branch-specific detail belongs with its method instead of being repeated in the root.

The Decide and Design entries were reviewed against that distinction. Their sources, invocation policies, Shape placement and pending Impeccable integration remain unchanged. This is a writing correction, not a new composition decision. Generated provenance receipts and license notices remain packaged without an always-loaded pointer from the runtime entry.

## Implement execution and tracking

Atlas Implement remains manual, with Craft, A11y, Motion, Track and Graph. Track is owned authored implementation, not a fork of its legacy archive. Graph preserves Matt’s Implement Spec verbatim and retains its host-tool, Code Review and publication mappings. Neither UI mode selection nor invoking Implement alone implies tracking.

The previous `shared/combined.md` framework and two combined execution/closeout rulings were explicitly removed. Do not relocate that framework into another reference. Agents combine the requested modes against the task while following their individual methods; there is no prescribed universal combined review sequence or tracker state model. Track retains its existing human acceptance and recovery behavior. Finding re-check remains conditional on material uncertainty.

## Public UI source adoption

Craft adopts PE Build’s 30 public files. Six complete Jakub trees cover UI, layout, typography, colors, writing and accessibility (seven A11y files). Their entries and supporting resources match the original upstream blobs byte-for-byte. Baseline UI and Emil’s library choices are also verbatim. Emil craft and Leon’s redesign audit retain PE’s documented cuts; Atlas stores original snapshots and normalized replayable patches. Those cuts remove a greeting/report contract conflicting with implementation and a scroll-hijacking/redesign process that must not govern routine refinement. Redesign audit remains gated on an explicit redesign request.

PE polish lenses are a verbatim lift from PE’s own Apache-licensed reference, with PE’s NOTICE acknowledging its Impeccable derivation. Motion performance is a derived original-ibelick method carrying PE’s synthesis unchanged, with original MIT and PE Apache notices. This distinction preserves both original maintenance and the PE contribution. Each selected method records `selection` with the PE repository, immutable pin, path, classification and carried hash, alongside its original upstream record. A future watcher must consider changes to PE’s selected cuts/synthesis as well as original upstream changes; adopt neither automatically.

Motion moves Animate and Apple Design from Design without changing their reviewed source pins or bytes. It adds the verbatim Animation Vocabulary and bounded performance guidance. The caller preserves project tokens and accepted visual direction, maps source names to packaged paths, and records concrete conflicting-recipe rulings. Accessibility applies to all affected UI modes; stylistic recipes do not authorize replacing project identity.

No private animations.dev files are included. React View Transitions is carried verbatim with its original nested references and compiled AGENTS.md. Its original entry explicitly declares MIT in frontmatter; the license receipt preserves that source declaration rather than inventing a missing standalone license file. The existing Animate and Apple snapshots are a later reviewed revision than PE’s pin and are deliberately retained, not silently downgraded to match PE.

Additional source `notices` record canonical input, output path and SHA-256. Generation verifies the bytes, allows identical notices to share one output path and rejects conflicting notices. Every affected consumer carries those license/attribution bytes and source-selection records. Original source trees and semantic adoption need reviewed updates; offline checks establish byte integrity, not behavioral quality.

Organize runtime references by public mode. Decide uses `probe/`, `record/`, `shape/`, `map/`; Design uses `wireframe/`, `model/`, `experiment/`; Implement uses `craft/`, `a11y/`, `motion/`, `track/`, `graph/`. There is no `shared/` coordination folder. Preserve source-relative resource trees inside a mode when required, and keep source identity in the manifest. Track’s authored resources stay sibling files rather than a nested skill package.
