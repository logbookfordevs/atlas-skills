---
name: source-composition
description: Apply Atlas’s source composition, provenance and reviewed upstream-update methodology to a project.
disable-model-invocation: true
---

# Source Composition

Apply this methodology to the requested import, adaptation or composition, whether the sources are skills, code or documentation. Reuse the project's conventions and tooling; introduce only the machinery its maintenance needs justify.

## Source identity

Classify each carried source independently:

| Classification | Contract |
| --- | --- |
| **Verbatim** | Carried bytes match the pinned original exactly. |
| **Patched** (verbatim patched) | Preserve the pristine original and a replayable patch that reproduces the carried bytes exactly. Record why the adaptation exists. |
| **Derived** | Reworked from an identified source; retain provenance and explain the derivation. Update adoption requires comparing behavior and intent, rather than relying on patch replay. |
| **Authored** | Locally owned work, distinguished from carried upstream material. |

**Composition** is a separate axis: sources work together under a local entry point or integration. Keep their identities and classifications. Compose to resolve a concrete conflict, route distinct methods or bundle related capabilities; an unchanged independent package can retain its original name.

**Rulings** settle actual conflicts: identify the competing guidance, which owns the disputed behavior and when that decision applies. Put the actionable ruling where the consumer uses it; keep provenance and maintenance explanations in records.

## Provenance and ownership

Record origin, immutable revision, selected file scope, license and notices, pristine hashes, adaptations and consumers in a source manifest. Include required supporting files and preserve relative links. Public availability alone does not establish redistribution permission.

For download-only sources, record the distribution URL, acquisition date and archive hash; use manual update checks when no reliable watcher exists.

Keep pristine snapshots separate from maintained adaptations. Generate distributable copies and source receipts from those inputs, preserving locally authored files. Shared sources have one maintained input even when several portable packages carry copies. Edit inputs; regenerate outputs.

## Integrity and adoption

Separate **integrity checks** from **drift detection**:

- Integrity checks verify pristine hashes, license evidence, exact verbatim copies, patch replay, complete support trees and reproducible outputs. Run them in the project's validation and CI where available.
- Drift detection watches the selected upstream scope and license against the pin, including added, removed and moved files. Trial patches against candidate bytes in isolation. Surface failures and affected consumers for review.

Atlas's daily GitHub workflow opens or updates one review issue per changed source and saves a detection report. It detects changes; it does not adopt or merge them. Other projects can use an equivalent scheduled check.

**Reviewed adoption** pins an explicitly reviewed candidate, stages refreshed originals and adaptations, rebuilds consumers and validates before replacing maintained inputs. Reconcile license changes, missing sources, patch conflicts and derived behavior deliberately. Publish through the project's normal review process.

Hashes and clean patch replay establish integrity, not behavioral compatibility. Review the changed meaning and its effect on consumers before accepting an update.
