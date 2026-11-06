# Agent-to-agent adversarial dialogue: method scan

## Finding

In the current `backnotprop/pstack` skill inventory, the closest methods do **not** specify the requested genuine agent-to-agent dialogue: independent initial arguments, agents reading/challenging one another, then rebuttals or revisions. `interrogate` fans out adversaries that try to prove findings in separate worktrees, then the lead reruns each finding; it explicitly skips arena's cross-judge/pick/graft phases. This is independent adversarial review plus lead-mediated verification, not a peer exchange. `arena` has independent candidates followed by a readonly cross-judge, then a lead picks and grafts; cross-judging compares candidate outputs but does not prescribe candidates responding to one another. `swarm` aggregates worker results; `architect` delegates candidate synthesis to arena and permits an interrogate pass, again without peer rebuttal. These are distinct from dialogue even where they involve challenge, judging, or repeated review.

The bounded scan covered the current Pstack GitHub tree's skill names and full current `SKILL.md` text for `interrogate`, `arena`, `swarm`, and `architect`, the most directly relevant adversarial, multi-agent, and synthesis methods. It supports “no dialogue protocol found in the relevant methods inspected,” not a claim about every file or every way an agent could improvise dialogue.

## Tstack Council comparison

The current [tstack Council skill](https://github.com/t3dotgg/tstack/blob/main/skills/council/SKILL.md) specifies three providers producing independent responses, followed by a lead summary; after fixes, the council can be rerun until satisfied. It does not specify agents reading and rebutting each other's arguments. This is a multi-provider panel with lead-mediated synthesis and iterative review, not direct dialogue.

## Sources and version distinction

- Current maintained [Pstack repository](https://github.com/backnotprop/pstack): [Interrogate](https://github.com/backnotprop/pstack/blob/main/skills/interrogate/SKILL.md), [Arena](https://github.com/backnotprop/pstack/blob/main/skills/arena/SKILL.md), [Swarm](https://github.com/backnotprop/pstack/blob/main/skills/swarm/SKILL.md), [Architect](https://github.com/backnotprop/pstack/blob/main/skills/architect/SKILL.md). Inventory/tree: [current skills directory](https://github.com/backnotprop/pstack/tree/main/skills).
- Cursor upstream was also checked directly for [Interrogate](https://github.com/cursor/plugins/blob/main/pstack/skills/interrogate/SKILL.md), [Arena](https://github.com/cursor/plugins/blob/main/pstack/skills/arena/SKILL.md), and [Swarm](https://github.com/cursor/plugins/blob/main/pstack/skills/swarm/SKILL.md). These prescribe the same relevant coordination patterns described above, without peer rebuttal rounds. This is a comparison of those workflows, not a claim of byte equivalence with the standalone mirror. The broader Cursor skill inventory and Architect counterpart were not separately scanned.
- Atlas's older pinned Pstack adaptation is a separate snapshot and should not be treated as evidence of current upstream or current mirror behavior. This comparison uses the live `main` skill text above.
