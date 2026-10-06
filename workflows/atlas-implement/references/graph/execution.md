# Graph Execution

Read and follow [Implement Spec](implement-spec.md).

Graph needs the spec, associated tickets and a usable issue-tracker contract, plus TDD and Code Review. Resolve its `code-review` call to the installed `afk-code-review` skill. Record the integration branch’s initial commit before implementation and run the final integration review against that base. Follow the host’s skill and delegation mechanisms for the reference’s Skill-tool and subagent steps. If tracking access or delegation is unavailable, explain the specific gap; agree another approach rather than pretending the graph process ran.

Use repository worktree conventions, preferring Yggtree when available. Establish each worker’s base from the integration branch before editing; preserve unrelated changes and choose a clean checkout rather than resetting dirty work. Assign ticket/file ownership and share spec, record and commit pointers instead of duplicating their content. Give workers the requested methods and their applicable task context. A merge advances the integration branch only after the worker’s relevant checks pass.

An integration branch or ticket is not permission to publish. Use already-authorized PR and remote actions where the tracker requires them; resolve any remaining publication authority before those actions. Keep local execution progressing where possible. Clean up only worktrees created for this run after their useful work is preserved.
