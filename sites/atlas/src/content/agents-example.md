## Skills
State "I will use the X skill" whenever using a skill.
If a user-required skill is unavailable, search the configured skill roots and verify explicit aliases. Explain what is missing and request an approved fallback for dependent work. Continue independent authorized work.

## Imports
- Prefer configured absolute imports such as `@/components/...`.

## TypeScript
- Avoid `any` unless necessary or specifically requested.
- Run the repository typecheck for TypeScript changes. Fix failures introduced by the change. If an unrelated baseline or environment failure prevents a clean result, report the evidence and verification gap; do not claim a pass.

## Testing
- Add regression tests when they protect meaningful behavior. Test observable behavior; tautological tests that merely restate the implementation are harmful. Trivial copy and other low-risk changes do not require coverage.

## React
- Name compound JSX conditions before the return with domain-specific booleans. JSX conditions should contain one named boolean, optionally negated.
- For three or more mutually exclusive branches, both named `&&` branches and a local render function with early returns are acceptable. Invoke a local render function as a function from JSX. Extract a component when the rendered section has a meaningful interface or obscures the surrounding structure.
- Keep short, flat ternaries for selecting non-JSX values such as strings, classes, or numbers. Hoist nested or hard-to-scan value expressions. Move repeated condition logic into a shared helper.

## Browser Testing
- Prefer `agent-browser` over Playwright CLI when available.

## Commands
- Reuse a suitable running development server. If none exists, start one if needed for the task.

## Worktrees
- Prefer `yggtree` for worktree operations when available; consult `yggtree --help` before using for guidance.

## Tools and approach
- Outcome first: choose proven tools for the requested result. Explore suitable alternatives before building custom substitutes; implementation convenience alone does not justify lowering quality.
- Evidence: test uncertain capabilities before scaling. Reconsider approaches that miss the target, and assess outcome quality separately from technical checks.
- Decisions: for new projects, recommend the foundation and tools needed for the intended capabilities. Involve the user in materially different options; proceed with settled choices and authorized experiments.
- Continuity: preserve working project conventions unless the requested outcome warrants a change.

## Web
- Applications: React and TypeScript are required for all web applications and websites, including content sites. Prefer Tailwind when suitable.
- Artifacts: standalone reports, visualizations, and prototypes may use any suitable stack, including plain HTML, CSS, and JavaScript.

## Frontend UX Defaults
- Prefer mature primitives or registry components when they materially improve UX, accessibility, responsiveness, or interaction quality.
- Mobile is not degraded desktop; replace cramped, wrapped, clipped, or awkward controls with responsive patterns.
- Push back when implementation convenience would materially degrade the user experience.

## Code Style
- Separate logical code sections with blank lines for readability.
- Keep code comment-sparse. Use comments only to preserve enduring, non-obvious invariants or trade-offs; prefer self-explanatory code.

## Sub-agents
- When spawning sub-agents, use the `team-up` skill as the coordination policy.
- Delegation: hand work to child agents owned by the current chat through the host's available delegation tools.
- Threads: create separate top-level conversations only when the user asks for them; choose each conversation's workspace deliberately.

## Dictionary
- Quick win: a small, obvious, low-risk change. Use proportionate local validation; reserve browser automation and agent review for changes whose UX or correctness risk warrants them.
- Visualize: use an available inline HTML or visualization tool to explain something when a picture improves understanding.
- External artifact: create a standalone artifact instead of an inline render.

## General
- When explaining a concept, pair a short written explanation with an inline visualization when it improves understanding and the host supports it.
- Exercise independent judgment. Distinguish preferences from factual claims; push back with reasons and explain changes in your recommendation.
