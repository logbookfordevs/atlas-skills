# Reality Check scenario trials

Date: 2026-11-05. Harness: T3 Code, leading agent GPT-6.1 Sol, two fresh Claude Haiku 5.5 / medium reviewer tasks through `claudeAgent`. The bounded advisory assignment used the shared selection policy's cross-family preference and an early suitable Claude pair. No parent history was supplied. Each task instructed the reviewer to use only the supplied scenario and brief, with no tools, repository reads, edits or delegation. The task results report completion; this note does not independently audit tool-use logs.

The user's eventual workspace solution was withheld. These are two sequential development trials, not controlled comparative evidence or a reliability benchmark. Neither trial establishes discovery through the skill description; the reviewer brief was supplied explicitly. The current conversational brief was revised after these trials and has not had a model trial.

## Acceptance criteria set before dispatch

- Questions inherited organizing principle instead of only reducing folders.
- Suggests a creation as a cohesive unit for source and related assets/outputs.
- Treats audience labels as conventions unless a real constraint requires them.
- Preserves code versioning and keeping large media out of Git; Drive media availability.
- Keeps advice proportionate and ends a simpler proposal with an approach-directed joke.

Finding the user's exact folder names was not a criterion. A useful alternative still needs to address the scattered creation contents without inventing requirements.

## Scenario supplied to both reviewers

I have a creative-room project. apps/desk is the interface I run to help with my creations. Creation code and handlers go in creations/. Experiments go in experiment/. There is also reference/ and media/. Under media/ I have personal/ and logbook-for-devs/. media/ is ignored by Git and automatically synced by Drive; source code lives in GitHub. Agent rules require every creation to go in creations/, every experiment in experiment/, and final renders under the appropriate personal/ or logbook-for-devs/ media directory. A creation's code, renders and generated material end up spread across creations/, media/ and .cache/. Managing that spread and those placement rules is becoming cumbersome. I want a simpler approach while keeping my desk/tooling usable, code versioned, and large media available through Drive.

## Trial 1

Provider: claudeAgent. Model: claude-haiku-5-5. Effort: medium. Task: `node:delegated-task:command%3Amcp%3A7ffefc16-91c0-40fe-96d0-99a67a255824%3Adelegate-task%3A6fb109db-d07b-479d-9c69-9e868e33185f`.

[Reviewer result](t3-thread://v2/d731bdc9-cb47-4583-af93-f19119191b2b/thread:delegated-task:command%3Amcp%3A7ffefc16-91c0-40fe-96d0-99a67a255824%3Adelegate-task%3A6fb109db-d07b-479d-9c69-9e868e33185f)

### Brief

Question the problem framing and organizing principle. Distinguish actual requirements from inherited conventions, and consider whether a different boundary makes the complexity disappear. Identify unnecessary complexity, speculative requirements, and the simplest sufficient solution. Return a brief recommendation explaining what to keep, drop or defer and the tradeoffs. When the current approach is best, endorse it plainly. When recommending a simpler solution, end with one short, playful jab at the overengineering: “We brought a forklift to move a sandwich.” Vary the joke to fit the problem; target the approach, not the person. Keep the review advisory; leave implementation to the leading agent.

### Response

## Reality Check: Creation storage

**Verdict: simplify.** The complexity comes from organizing by artifact type and placement, not by creation. Each creation is split across three roots, and each root has its own rule.

### What's real and what's inherited

- **Real:** Code is versioned in Git. Large media lives outside Git and syncs through Drive. The desk has to find a creation's code and outputs.
- **Inherited:** The `creations/` vs `experiment/` split, the `personal/` vs `logbook-for-devs/` split under `media/`, and a rule that decides where each file goes. These are placement conventions, not requirements. Nothing in the scenario says the desk or Drive needs them.
- **Unclear:** What `.cache/` holds. If it holds only regenerable output, it's fine. If it holds final renders or things you'd miss, it's the real bug.

### The boundary that removes the complexity

Organize by **creation**, not by type. Use three kinds of storage, each with one job:

1. **Source (Git):** `creations/<slug>/` holds the code, handlers, and a small `manifest.json`. The manifest records `status` (experiment or creation), `audience` (personal or logbook-for-devs), and the media path.
2. **Large outputs (Drive):** `media/<audience>/<slug>/` holds renders. The desk resolves the path from the manifest, so no agent picks a location by hand.
3. **Derived (disposable):** `.cache/` holds only things you can regenerate. If losing a file would cost more than re-running it, it moves to one of the first two.

### Keep, drop, defer

- **Keep:** One folder per creation, git for code, Drive for media, the `audience` split (only if the two really sync or share differently).
- **Drop:** The separate `experiment/` tree. Make experiment a `status` field. Promoting an experiment then changes one field, not a folder.
- **Drop:** Hand-chosen placement rules. Replace them with one sentence: "A creation lives in `creations/<slug>/`; its outputs go to the path in its manifest."
- **Defer:** Symlinks from `creations/` into `media/`. Drive sync clients handle symlinks inconsistently, so verify that before relying on them. A manifest pointer gets the same result with less risk. Also defer any indexer or migration tooling beyond a one-off move script.

### Tradeoffs

- You lose type-based browsing (all experiments in one folder). The desk's index replaces it.
- Manifest and disk can drift. Have the desk fail loudly on a missing path, rather than letting agents guess.
- Moving existing files is a one-time cost, and it's cheaper than keeping three placement rules in sync.

We brought a customs office to sort a box of crayons.

### Assessment

Partial. The reviewer identified artifact type and audience as inherited conventions, described creation as the organizing unit, preserved Git/Drive needs and ended with a suitable joke. Its concrete design retained separate source/output trees and introduced a manifest with a drift cost. It did not independently propose a self-contained creation workspace.

## Trial 2

Same provider, model, effort and scenario; a new reviewer context received only the revised brief. It received neither the first response nor the desired solution.

Task: `node:delegated-task:command%3Amcp%3A7ffefc16-91c0-40fe-96d0-99a67a255824%3Adelegate-task%3Abb7dbd20-4276-46aa-b759-dbf440c3c2a4`.

[Reviewer result](t3-thread://v2/d731bdc9-cb47-4583-af93-f19119191b2b/thread:delegated-task:command%3Amcp%3A7ffefc16-91c0-40fe-96d0-99a67a255824%3Adelegate-task%3Abb7dbd20-4276-46aa-b759-dbf440c3c2a4)

### Revised brief

Question the problem framing and organizing principle. Distinguish actual requirements from inherited conventions, and consider whether a different boundary makes the complexity disappear. Check whether the constraints actually require the existing boundaries. Identify unnecessary complexity, speculative requirements, and the simplest sufficient solution. Account for complexity your recommendation introduces; prefer removing coordination over replacing it with new machinery. Return a brief recommendation explaining what to keep, drop or defer and the tradeoffs. When the current approach is best, endorse it plainly. When recommending a simpler solution, end with one short, playful jab at the overengineering: “We brought a forklift to move a sandwich.” Vary the joke to fit the problem; target the approach, not the person. Keep the review advisory; leave implementation to the leading agent.

### Response

## Reality Check: advisory recommendation

**Verdict:** Simplify. The Git/Drive split is a real boundary, but the three-place placement rules are inherited bookkeeping. Organize by creation, not by artifact type.

### What the constraints actually require

- **Code in Git, large media outside Git.** `media/` is gitignored and Drive-synced, so renders can't live in the repo's versioned tree. This boundary is real.
- **Desk as the single entry point.** Keep it working, but it only needs to know where a creation's code and media are. It doesn't need the placement rules.
- **Everything else is convention.** The creations/ vs experiment/ split, the personal/ vs logbook-for-devs/ split, and `.cache/` as a third destination are not stated requirements. They are the source of the spread.

### The complexity to remove

A creation is one unit, but its pieces are spread across three trees because the organizing principle is "what kind of file is this." Each new file type adds another rule to remember.

### Recommended approach

1. **Keep:** one folder per creation under `creations/<id>/` for code, versioned in Git. Give each creation a stable ID.
2. **Keep:** large outputs (renders, generated material) under `media/<id>/`, Drive-synced, keyed by the same ID. This is still two trees, but it is one rule and one key instead of three destinations.
3. **Add:** a small `creation.json` in `creations/<id>/` with the ID, title, status, and media path. The desk reads this one file to find everything. Use it instead of hard-coded paths.
4. **Drop:** `.cache/` as a destination for creation output. If the material is regenerable, treat it as disposable scratch and don't document it as a location. If it is expensive to regenerate, it is output and belongs under `media/<id>/`.
5. **Defer:** a separate `experiment/` tree. Model "experiment" as `status: experiment` in the manifest, and promote by changing the field, not by moving files. Keep a separate tree only if the desk or tooling must behave differently for experiments.
6. **Defer:** the personal/ vs logbook-for-devs/ split. Keep it only if Drive sharing or publishing actually differs between them. If it does, make it a field in the manifest, not a directory level.

### Tradeoffs

- **Still two trees.** You can't remove the Git/Drive boundary, so renders always sit outside the repo. The gain is one key and one rule, not zero locations.
- **Migration cost.** Moving existing creations and updating the agent rules is a one-time cost. Do it in one pass, and record the old-to-new mapping.
- **Don't put renders inside the repo folder and rely on gitignore plus Drive.** Drive would then sync the whole repo, including dependencies and build output, and symlinks into Drive are fragile on macOS. Keep the explicit `media/<id>/` path.
- **Manifest drift.** The `creation.json` must stay accurate, or the desk will point at the wrong files. A validator in the desk is cheap insurance.

### Bottom line

Keep Git for code and Drive for media, but key everything by creation ID and drop the per-type placement rules. Experiments and the personal/logbook split can stay as manifest fields until a real behavioral difference justifies a directory.

We brought a forklift to move a sandwich.

### Assessment

Partial again. The reviewer questioned the experiment and audience directories and preserved storage/versioning requirements, but kept two trees and added a manifest plus a proposed validator. It asserted that keeping media out of Git forces renders outside the repository folder. That conflates version-control inclusion with filesystem location; the scenario does not establish that constraint. Its Drive and symlink assertions were not verified and are not accepted here as facts.

The added self-check did not demonstrate the desired improvement in this run. Both responses were also longer than the requested brief recommendation. A subsequent brief asked for unverified constraints to be flagged as questions and added a 200-word limit. User feedback then requested a casual voice like `$bro`, rather than a structured report. The current brief replaces the keep/drop/defer rubric and word limit with one or two short, plain-language paragraphs, without headings or checklists. The leading agent preserves that voice when presenting the result. These changes remain behaviorally untested. No further reviewer tasks were run.

## Limits and follow-up

This scenario supports a narrow claim: the reviewers recognized a flawed organizing principle, but neither produced the user's eventual self-contained workspace design. The leading agent must assess the recommendation's own coordination costs and unsupported constraints. A later evaluation should include a case where existing complexity is justified, and independent scenarios rather than repeatedly tuning on this example. Packaging checks validate portability and invocation metadata, not reviewer judgment.

