# Tracking Implementation evaluation cases

Live model trials are pending. Package checks verify automatic metadata and authored-reference portability, not these outcomes.

| Request | Expected behavior |
| --- | --- |
| Implement this spec’s graph | Use upstream Implement Spec; tracking is not implied. |
| Implement this graph and track it | Upstream executor plus Tracking Implementation; one authoritative tracking home. |
| Track this implementation using another executor | Preserve the executor’s method and record its actual status and evidence. |
| Resume this tracked work | Recover baseline, dirty paths, blockers, review evidence and continuation from the record. |
| Executor already reviewed the checkpoint | Record that review rather than run a duplicate. |
| Start tracking after edits | Recover a supported baseline or mark it unknown. |
| Automated review is clean | Await explicit user acceptance before marking done. |
| Validated checkpoint is ready for automated review | Commit implementation-owned changes first; preserve unrelated work and untracked local records. |
| Small or judgment-sensitive change needs user inspection | Use the pre-commit user-review exception. |
| Review produces warranted fixes | Validate and commit fixes before awaiting acceptance. |
