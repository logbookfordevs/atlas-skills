# Composition decision history

Historical rationale for the current stack. For maintenance procedures, use [Skill maintenance](../authoring/source-composition.md).

## Current packages

The active stack preserves atomic operations. HTML UI composes HTML Wireframe and HTML Prototype as Wireframe and Model; Matt’s Prototype stays independent upstream. Atlas To Spec and Atlas To Tickets are separate patched packages, preserving the prior adaptations and ticket templates. Review carries patched Code Review, authored Static Review and verbatim Review Animations. Craft retains Better Colors, Better Typography and Better Layout. Motion carries a narrowly patched Animate and verbatim Apple Design; Animate’s component-selection call becomes guidance to search for suitable component recommendations for the task and project. Writing for Humans carries the complete verbatim Stop Slop tree with its frontmatter, supporting references and MIT license.

Decide, Design and Specify are retired as active umbrella entries. Their prior files are recoverable from Git history. Their former unchanged independent methods remain recommended upstream; source receipts are retained only for active consumers.

Tracking Implementation stays automatic alongside any executor, with its checkpoint policy preserved. Its obsolete Code Review dependency name now resolves to Atlas Review. Team Up, the manual ZERO-based Animated-Driven Frontend and manual Atlas Setup remain independent. The explicitly retired Ask, Code Grill, Design Grill, Create Agent and Code Review Verdicts remain absent; prior cleanup retirements remain in the archive receipt.

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
