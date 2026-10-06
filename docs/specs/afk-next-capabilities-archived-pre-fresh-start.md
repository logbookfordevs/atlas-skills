# Logbook Atlas: proposal 3.3 — PE maintenance foundation and scoped umbrellas

Date: 2026-10-06.
Status: six selected umbrellas, independent Tracking Implementation and Writing for Humans are implemented locally. Catalog registrations and five explicit retirements are applied. Changes are uncommitted and unpublished; personal installations are unchanged. PE factory/CI adoption remains a separate pending foundation task.

## Foundation

Adapt Product Engineering’s repository maintenance machinery for Atlas: factory/packaging, provenance manifest, source classification, pristine snapshots and patches, upstream drift detection, CI and maintenance documentation. Atlas’s skills and workflow choices remain its own. Preserve existing Atlas history and source evidence while selecting the concrete migration procedure; do not assume a GitHub fork, repository reset or publication has happened.

Retain PE attribution, Apache license and NOTICE where applicable, along with each carried source’s applicable license. The previously inspected PE snapshot was Apache 2.0; its unused local selection evidence was removed in cleanup. Several carried upstream sources are MIT. Open source does not mean every file has one license or that private course material may be redistributed.

## Umbrella contract

An umbrella is a scoped router and conflict-resolution layer over related operations. It exposes useful choices that are difficult to remember individually and loads only the relevant methods. One entry’s discovery description can replace competing descriptions only when the underlying public entries are also deliberately managed; bundling alone does not guarantee reduced context use.

Methods may be alternatives, complementary or sequential. Preserve source contracts; define transitions and necessary rulings without adding a universal merging framework. Authored methods are ordinary Atlas-owned implementation. Source composition carries upstream methods locally; behavioral composition resolves independently available capabilities.

Unmentioned skills remain independent by default. Only explicitly selected members are absorbed; explicit deletion or rename decisions still apply. Independent primitives may be called behaviorally by an umbrella without being absorbed.

## Latest roster

### Decide — Keep · manual umbrella

Source composition: Grill Me, Grill with Docs, Wayfinder and To Questionnaire. Select the relevant decision flow, combine or transition only where useful.

Grilling and Domain Modeling remain independent reusable primitives. Codebase Design remains reusable across decision and implementation work. Design Grill is explicitly selected for deletion; retain only useful visual-commitment guidance in Design.

### Design — Keep · automatic umbrella

Source composition: HTML Wireframe, HTML Prototype, Prototype and Design Artifact. Route the requested design artifact or experiment.

Impeccable remains independent. Keep supporting source trees and reviewed adaptations. Craft and Motion are now separate specialist umbrellas; Design may hand off production work to them.

### Specify — Keep · umbrella

Compose the existing AFK To Spec and AFK To Tickets forks of Matt Pocock’s skills.

These are verbatim patched sources: preserve Leonardo’s existing intentional adaptations and formalize their upstream maintenance. This supersedes the earlier separate-only Plan decision; public modes are Spec and Tickets.

### Implementation — independent execution and tracking

No Implement umbrella. Install Implement Spec from Matt Pocock’s upstream and Source Driven Development from Addy Osmani’s upstream. Preserve their methods; consider deliberate patches only if future usage warrants them. Unused Atlas snapshots were removed in cleanup; the independent upstream catalog entries remain.

Tracking Implementation is an Atlas-authored independent skill, automatically selected when the user requests durable implementation tracking or resumes a tracked effort. It maintains progress, evidence, review acceptance and recovery alongside whichever executor is selected. The executor owns coding, scheduling and validation. Tracking reuses existing validation and checkpoint review evidence. It retains the authored commit policy: implementation-owned changes are committed before automated review, with a pre-commit user-review exception for small or judgment-sensitive changes. Intermediate green atomic checkpoints remain conditional on their usefulness. Ordinary implementation requests do not activate tracking by themselves.

The former AFK Implement catalog entry is replaced by Tracking Implementation; its legacy source remains unchanged. No personal installation or source replacement occurred.

### Review — Keep · umbrella

Existing AFK Code Review as a verbatim patched Matt Pocock source; Atlas-authored Static Review; Review Animations as an upstream source.

Doubt Driven Development is excluded for now. Static Review is an authored mode, not an upstream reference. Code Review Verdicts is explicitly selected for deletion. Preserve existing Code Review patches.

### Clarify — Deferred; operations remain independent

Bro, Facts, Readback, Recap and Teach stay independent. No Clarify umbrella is being built. This supersedes the earlier trial decision; Bro source redistribution permission is unavailable.

### Craft — Keep · separate umbrella

Source composition: Better Colors, Better Typography and Better Layout. Route production interface color, text and spatial-layout work. Craft is separate from implementation execution; implementation can use it behaviorally when the task needs its expertise.

Preserve original source trees, provenance and licenses. Exact public mode names and invocation policy remain to be agreed. Do not add other PE craft selections implicitly.

### Motion — Keep · separate umbrella

Selected methods: Animate and Apple Design. Route animation construction and physical interaction. Motion is separate from implementation execution and can complement implementation work.

Hand Drawn Canvas Animation remains independent and outside this process. Preserve Animate and Apple Design upstream bytes and supporting resources. Animate Text is removed from the roster and catalog at the user’s request; personal installations are unchanged. Invocation policy and public mode names remain to be agreed.

### Writing — No new Write umbrella

Writing for Agents remains independent and unchanged. Keep Writing for Humans as the existing operation, preserving its current behavior, and compose Stop Slop verbatim with its complete runtime reference tree.

Stop Slop belongs to Writing for Humans, not Writing for Agents. Preserve the upstream skill frontmatter, all three supporting references and MIT license unchanged. Record its immutable pin, hashes and Writing for Humans consumer. This supersedes the earlier locally maintained prose-cleanup adaptation; use the standard deliberate update contract for this source. The standalone Stop Slop catalog entry remains independent unless its retirement is explicitly selected.

### Diagnose — No umbrella

Keep the diagnosis operation independently available.

No one-member Diagnose wrapper.

### Research — No umbrella

Keep Research independently available.

Investigate stays removed. Do not delete Research.

### Coordinate — No umbrella

AFK Architect is now Team Up, an automatic independent coordination utility. Clean Room and Handoff remain independent. Orchestrator is library-specific.

Create Agent is selected for deletion in the implementation plan; not deleted by this spec update. The new Architect name is Team Up. No Coordinate absorption.

### Configure — No umbrella for now

No Configure umbrella selected in this pass.

AFK CLI, Profile Use, Compass, Plannotator Guide and Wizard have no new disposition here.

### Other operations — Not reviewed in this pass

Verify, Document Behavior and remaining operations remain independent where they exist; unimplemented candidates are not created by this default.

Earlier proposals remain historical context. Resolve unreviewed entries explicitly before implementation or catalog cutover.

## Upstream and adaptation contract

- **Verbatim:** preserve the complete selected source tree and frontmatter. Record upstream repository, path, immutable revision, hashes, licensing and consumers.
- **Verbatim patched:** retain a pristine source and replayable intentional patches, with reasons and affected rulings. Existing Matt forks keep their current adaptations. A clean patch replay does not prove unchanged behavior.
- **Derived:** explicitly document retained and changed ideas; never relabel a rewritten method as a verbatim patched source.
- **Atlas-authored:** maintain canonical authored content independently of legacy archives. Inspiration does not create a byte-sync claim.

The future sync mechanism detects changes or removals, prepares a reviewable proposal and identifies affected patches, supporting files, dependencies, rulings and consumers. Adoption reviews behavior even when no local patch exists. Do not silently overwrite chosen behavior or installed skills. Preserve the accepted pin until reviewed adoption, then regenerate and validate affected packages. The PE machinery migration is authorized as the next foundation work, but has not been performed by this checkpoint.

## Implementation boundaries and open decisions

The selected umbrella roster is Decide, Design, Specify, Review, Craft and Motion. Clarify is deferred; the Implement umbrella is replaced by independent execution methods plus Tracking Implementation. The five explicit retirements are applied. Architect is renamed to Team Up. Doubt Driven Development’s proposed harness-first patch remains deferred. Writing for Humans composes Stop Slop verbatim; no Write umbrella is introduced.

## Local implementation checkpoint

Six umbrella packages are generated: atlas-decide, atlas-design, atlas-specify, atlas-review, atlas-craft and atlas-motion. Tracking Implementation is a separate automatic authored package. Writing for Humans includes the complete verbatim Stop Slop runtime tree and its provenance. No watcher is currently deployed. Clarify is deferred. AFK Ask, Code Grill, Design Grill, Create Agent and Code Review Verdicts are retired from the catalog and legacy trees; original bytes remain in Git history. Other independent skill trees remain unchanged.

Source Driven Development is verbatim; Doubt Driven Development remains independent and unchanged. Its harness-first review patch is deferred. Animate Text is removed from the Atlas roster and catalog. AFK Architect is replaced by Team Up.

All 19 repository checks pass, including source integrity, patch replay, package regeneration, metadata, portability and retained archive hashes. These checks do not demonstrate live model routing or successful execution of the upstream workflows.

## Utility and cleanup update

Animated-Driven Frontend drops AFK and becomes an automatic ZERO-based engineering utility. Its active package contains interaction systems, rendering pipeline and frontend constraints; cinematic workflow and production gates are removed. The historical original remains in legacy.

Team Up replaces AFK Architect as an automatic lightweight coordination skill, with deliberate role, model and reasoning-effort choices and preference for fitting available custom agents. Original archives are retained for these renames.

Brainstorming Facilitator, PR Story Flow Mermaid and Structured Debugging are deleted, including legacy trees. Cleanup removes 17 unused source records and 62 exclusive files, while retaining the 18 actively bundled sources and five required patches. Tracking Implementation is unchanged by this update.
