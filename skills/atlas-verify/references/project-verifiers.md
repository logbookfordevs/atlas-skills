# Project verifiers

A project-local verifier owns app-specific launch, doctor, driving, feature-map and cleanup knowledge. Keep it usable directly, without a copied Atlas report engine. Select Create or Maintain when reusable assets are the requested outcome; a Run can use existing recipes without modifying them.

## Scope and live sessions

Create and Maintain write only the selected verifier directory. Startup failures in product code are reported to the implementation executor. Disposable scaffolding is limited to verification-owned state and has explicit cleanup. Real messages, purchases or other external effects require the task's authorization; use isolated test data and environments within that scope.

One coordinator owns driving and cleanup for a shared app instance. Parallel source readers are read-only; parallel drivers need isolated instances and data. Follow the verifier's doctor/reset rules, tear down what the run started, and confirm evidence survives cleanup.

## Coverage and reporting

Record the checked revision, feature IDs, attempted entry points, prerequisites, commands, results and evidence paths. Create proves one mapped feature end to end and labels the remaining seeded coverage unproved. Maintain accounts for every mapped feature with source and live coverage, including concrete unreachable prerequisites. Its `clean`, `changed` and `blocked` outcomes describe maintenance, separately from the app's behavior verdicts.

When a Run uses a feature map, derive report items from the requested behaviors and entry points. Preserve stable IDs where valid; list mapped IDs and any ID translation in the report notes. Prerequisites and Gotchas are context, not automatically QA entries. A path unavailable because of an unmet prerequisite is `skipped` with the attempted route and reason; observed broken behavior is `fail`. An alternative entry point does not prove the unavailable one.

Keep the existing report schema: `mode` remains `feature` or `list`. Use feature mode for one verdict, list mode for independently failing behaviors, and retain every selected QA-list entry according to Run's selection rules. Lifecycle outcomes stay in accompanying notes, outside invented schema fields.

Reuse actual captures when rendering requested Run proof; browser evidence still meets the Run capture contract. CLI, service and native-desktop recipes keep their actual commands and artifacts: native interaction is not browser coverage. Code checks may link command/transcript evidence; unsupported media remains separately linked with the coverage limitation stated.
