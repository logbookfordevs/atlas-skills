# Architect integration

Architect supplies design exploration and implementation against the chosen shape. It honors the task's scope: a design-only request ends with the design; implementation proceeds when authorized. A requested checkpoint pauses before implementation. Existing project verification and commit requirements take precedence over permission for temporary scaffold breakage.

## Sketches and TDD

Candidate usage, types and stub bodies live in isolated sketch artifacts under the repository's artifact convention or disposable candidate directories. When TDD is selected, keep candidate stubs outside the executable product until the design is chosen. A stub exception is not a failing-before behavior test.

Use the chosen public interface as TDD's proposed seam; previously approved seams remain approved. Follow the selected TDD method's confirmation rule for missing or changed seams, then implement one behavior slice at a time. The sketch does not authorize a bulk test suite or an entire production skeleton before red/green proof. Surface material design deviations and revise the design when repeated evidence warrants it.

## Candidate comparison and evidence

Architect requires at least two structurally distinct candidates before synthesis. Arena's generic dropout or convergence handling cannot reduce that to one: retry or produce another distinct design sequentially, and report an unresolved comparison if the requirement cannot be met. Judge design artifacts by their usage, signatures, constraints and rubric; sketch checks do not prove runtime behavior. Completed implementation needs its own actual validation.

How and Why are bundled grounding methods; load them directly without the Atlas Explain chooser. Request Interrogate only when adversarial pressure is selected; it reviews the sketch read-only and adds no automatic implementation or acceptance gate. Read the linked principle references for the selected phase. They supply contextual design criteria within the agreed scope; they do not authorize unrelated rewrites, baseline removal or publication.
