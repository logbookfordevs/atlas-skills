# Maintaining Atlas skills

Canonical inputs are `authored/` and `sources/`; `skills/` is generated distribution output. Edit inputs, run `pnpm build:skills`, then `pnpm check`. Commit inputs and outputs together. Generated packages are portable without the legacy archive or AFK runtime.

## Current packages

The active stack preserves atomic operations. HTML UI composes HTML Wireframe and HTML Prototype as Wireframe and Model; Matt’s Prototype stays independent upstream. Atlas To Spec and Atlas To Tickets are separate patched packages, preserving the prior adaptations and ticket templates. Review carries patched Code Review, authored Static Review and verbatim Review Animations. Craft retains Better Colors, Better Typography and Better Layout. Motion carries a narrowly patched Animate and verbatim Apple Design; Animate’s component-selection call becomes guidance to search for suitable component recommendations for the task and project. Writing for Humans carries the complete verbatim Stop Slop tree with its frontmatter, supporting references and MIT license.

Decide, Design and Specify are retired as active umbrella entries. Their prior files are recoverable from Git history. Their former unchanged independent methods remain recommended upstream; source receipts are retained only for active consumers.

Tracking Implementation stays automatic alongside any executor, with its checkpoint policy preserved. Its obsolete Code Review dependency name now resolves to Atlas Review. Team Up, the manual ZERO-based Animated-Driven Frontend and manual Atlas Setup remain independent. The explicitly retired Ask, Code Grill, Design Grill, Create Agent and Code Review Verdicts remain absent; prior cleanup retirements remain in the archive receipt.

## Setup dependency maintenance

Atlas Setup is manual and prepares only the independent upstream behavioral dependencies of installed Atlas packages. `sources/composition.json` owns consumer relationships, required/optional status and loading conditions; `stacks/atlas.json` owns installation sources and skill selections. The build joins these records into Setup’s portable `references/dependencies.json`. Do not edit that generated registry or maintain a second dependency list in AGENTS.md.

Whenever adding, changing or removing a skill or an independent upstream dependency, update the applicable manifest relationship and stack selection, then run `pnpm build:skills` and `pnpm check`. This regenerates Setup automatically; stale setup output fails the package check. Dependencies maintained by Atlas and tool capabilities are excluded from upstream installation recommendations. Keep conditions specific to the path that uses a dependency. Moving an upstream skill into Atlas ownership removes it from these recommendations after regeneration.

Setup offers commands and obtains user authorization before installations. It does not install the full catalog, change profiles, or treat optional dependencies as universal requirements. Other Atlas skills still handle missing capabilities when their relevant paths are selected. CLI command syntax follows the [Skills CLI documentation](https://github.com/vercel-labs/skills#install-a-skill); installation scope and target hosts are chosen at runtime.

## Provenance and updates

`sources/composition.json` records each upstream repository, immutable commit, original path, classification, source/license hashes, supporting files, consumers and caller rulings. Preserve upstream frontmatter. Verbatim bytes remain identical; patched sources have replayable patches. Authored methods are owned by Atlas and carry no invented upstream lineage. Dependencies named by a bundled reference can still require separately installed skills.

For To Spec, To Tickets and Code Review, the pinned current upstream snapshot is a maintenance baseline. It is not a claim about the historical fork base, which was not established. Replay the recorded patch to reproduce the exact preserved fork bytes. Ticket templates and Tracking Implementation references are authored inputs. The standalone patched spec/ticket entry is its maintained method itself, packaged as `SKILL.md`; its public metadata name is included in the replayable patch.

Adopt updates deliberately: compare the candidate with the pin, inspect behavior changes and all consumers, reconcile intentional adaptations, refresh snapshots/hashes/patches together, regenerate and validate. Byte integrity proves reproducibility, not behavioral suitability. The build performs no network adoption. The deterministic upstream detector, isolated candidate preparation command and daily review-issue workflow are implemented; see [upstream updates](upstream-updates.md). The workflow is not active until published on the default branch. PE factory and CI reuse remain pending.

Supporting source trees retain relative paths and per-file hashes. Required licenses ship with each consumer. Missing redistribution permission means the source is not bundled: Bro-family operations remain independent. Animate Text is excluded. No personal installation is changed by generation.

## Runtime versus maintenance

Runtime entries describe outcomes, mode selection, dependency gaps and concrete rulings. Repository abstractions, classifications, update procedures and credits belong here and in receipts, rather than consuming the always-loaded skill body. Patch only a justified conflict or intentional user-approved adaptation. Do not silently replace a selected upstream method with an authored approximation.

The five explicit retirements are recorded in `docs/migrations/skills-v2-archive.json` under `retiredFiles`; retained archive records still verify unchanged bytes. Git history preserves retired originals. Doubt Driven Development remains independent and unchanged; its proposed harness-first patch is deferred.

Runtime relevance check: retain a sentence only when it changes reference selection, execution, a required dependency, a concrete conflict ruling or completion. Placement notes about unrelated skills and generic reporting reminders belong outside runtime entries.

Tracking is behavioral composition: activate on an explicit tracking request or resuming an existing tracked effort. It records the chosen executor’s decisions, status and evidence, reuses its checkpoint review, and preserves user acceptance. The archived AFK Implement is retained unchanged; the live preview catalog uses Tracking Implementation.

Dependency receipts distinguish behavioral skill calls from tool capabilities. Plannotator is an optional tool dependency of Tracking Implementation, not a required catalog skill install.

## Independent authored utilities

`animated-driven-frontend` replaces AFK Animated-Driven Frontend as a manually invoked engineering utility. Its three authored references preserve knowledge from the prior Narrative Systems and Immersive Pipeline material: progress synchronization, segment lifecycle, hold gates, gestures, render-anchored feedback, asset conversion/loading, upload queues, adaptive quality, shaders and real-device performance. Cinematic direction, production binders, creative greenlights and Workprint are excluded from the active package.

The engineering source is Sindhur Dutta’s [ZERO: The Engineering Behind a Defiant Interactive Narrative](https://tympanus.net/codrops/2026/07/17/zero-the-engineering-behind-a-defiant-interactive-narrative/) (Codrops, July 17, 2026). References are Atlas-authored generalizations; no article text, code or assets are bundled, and no upstream license or immutable repository pin is invented. Future specialized knowledge should earn a conditionally loaded reference rather than broaden the current package speculatively. The previous cinematic skill remains historical content under legacy, not an active catalog entry.

`team-up` replaces AFK Architect. It is model-invoked and focuses on delegation value and deliberate custom-role/model/effort selection. Configurable assignments use explicit supported controls; fixed custom-agent configurations remain authoritative. General assignment and integration checklists, fresh-context mandates, recursive-delegation restrictions, and mandatory spoken selection rationales were removed: those were not the observed failure this utility addresses. This pruning follows Writing for Agents and the supplied Claude anti-patterns, alongside the [Astra prompting guidance](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra). The old archive is historical, not a live distribution. Model behavior still needs evaluation; passing package checks does not establish prompting efficacy.

## Cleanup checkpoint

The 17 inactive source records and 62 exclusively referenced files were removed. Active sources, methods, patches, supporting trees and required licenses remain. Tests use independent fixtures for source and notice integrity rather than requiring abandoned production sources. Brainstorming Facilitator, PR Story Flow Mermaid and Structured Debugging are explicitly retired, including their legacy directories. Tracking Implementation was excluded from this work.

## Tracking artifact presentation

Tracking bundles the complete [Show Me source by Dex Horthy / HumanLayer](https://github.com/humanlayer/skills/blob/main/plugins/show-me/skills/show-me/SKILL.md) verbatim, with its frontmatter, examples and MIT notice. The pin and active consumer are registered for upstream review. Independent Show Me remains manual and independently installable.

Tracking loads Show Me when creating or updating the Implementation Record. Show Me governs artifact presentation throughout the work; Tracking defines the required information, structured state, evidence, commit policy and acceptance gate. Each relevant part can use a presentation suited to its content, without a fixed body layout. Complete findings, judgments, resolutions and evidence remain inspectable. Markdown stays the local record format; focused HTML views follow the existing secondary-representation agreement. The authored integration uses the host’s file-opening mechanism.

The original Review Guides reference retains the product and design acceptance journeys, separately from Show Me’s artifact presentation. Resume consolidates repeated policies, and the notes/ADR examples are removed while the main boundary remains. The legacy core remains the baseline; this integration changes presentation rather than its evidence or acceptance contracts.
