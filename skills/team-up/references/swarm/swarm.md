---
name: swarm
description: "Fan out N parallel workers, drain them, and return one report. Use for /swarm, 'swarm this', or parallel coverage, races, gauntlets, and exploration."
disable-model-invocation: true
---

# Swarm

Coordinate N workers through the available host. They may cover separate slices, race the same brief, or mix both. The parent waits, aggregates, and returns one report.

## Start

Track the phases with the host's available planning mechanism before launching work.

1. Frame
2. Fan out
3. Aggregate
4. Report

## Phase A: Frame

1. State the done predicate and the artifact or report the swarm must return.
2. Choose the shape. Partition into slices, race N workers on identical briefs, or mix both. For a race or mixed shape, declare `first pass`, `rank all`, or `best-of` before spawning.
3. Set N from the user or derive it from the shape. N is total workers, not the host concurrency limit. Schedule in bounded waves when needed.
4. Choose worker roles, models and effort through the shared [selection policy](../selection.md), loading that reference directly rather than re-entering Team Up's mode router. For a model race, name each arm's actual model up front.
5. Give each worker its own writable output when it writes. When workers verify or measure commits, each brief names the exact SHAs. A measurement brief also names the method (sample count, what one sample is, order). The worker records both in its result. If the target includes uncommitted work, identify its scoped patch and additions as well; a commit ID alone does not describe that checkpoint.

## Phase B: Fan out

Use the host's available delegation tools and current execution environment. Schedule within its capacity, preserving each worker's independent output location. Another execution destination requires the user's applicable authorization and available capabilities; the workflow does not require publishing a branch. Without delegation, execute the same briefs sequentially and disclose the lack of parallel execution and isolated reviewer contexts.

Every brief stands alone. Include the goal, permitted writes or read-only boundary, exact slice or race arm, how to verify, and what to report. Keep shared app/data access isolated or under one owner; read-only coverage does not authorize fixes. Reports use `PASS`, `ISSUES`, or `BLOCKED` with evidence. A worker that can prove a defect reports `ISSUES` and lists every issue it can prove, not only the first.

If a worker drops out, proceed with N-1 and note it.

## Phase C: Aggregate

Read the terminal results. Drop a result that does not record the SHAs and method its brief names, and respawn that worker once. After a second miss, record a gap. A gap does not count as a pass. For coverage, every required slice needs a result. For a race, apply the selection rule declared up front. Use first pass, rank all, or best-of. Verify that the selected result meets the done predicate against its actual artifacts and evidence, not only a worker's PASS label. Do not paste raw worker dumps.

Keep a compact result table, one-line evidenced issues, and explicit gaps or dropouts. After a winner is established, finish or stop the other workers through available host controls and account for their outputs and cleanup; a first-pass winner does not leave workers running unaccounted for.

## Phase D: Report

Return one consolidated in-chat report with a result table, issue one-liners, gaps or dropouts, and the race rule when used.
