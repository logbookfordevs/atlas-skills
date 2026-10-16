# Model preferences

Use these default model-and-effort preferences for configurable teammates. After selecting a family through the [selection policy](selection.md), use its column even when both families are available. Use the mixed column when no family is favored. The families describe models, not their hosting or orchestration tool.

## Optional subject preferences

Enable these personal preferences only when the user adopts them in the conversation or applicable project/user instructions, for example, “Use Team Up's subject preferences.” They apply across Delegation, Arena and Swarm; they are not a model-capability ranking.

| Subject | Meaning | Preferred family |
| --- | --- | --- |
| Correctness and robustness | Security, regressions, resilience and failure handling | GPT |
| Experience design | UI, UX, visual design, animation and interaction | Claude |
| Architecture | System structure, major technical planning and consequential design choices | Claude |

Use these preferences for specialist evaluation and design/planning assignments. Leave ordinary implementation, research, debugging, documentation and mechanical work to normal selection judgment. Evaluation includes reviews, audits and second opinions; weigh independence from the leading agent's family alongside the subject preference. Prefer a suitable available alternative when the favored family is unavailable, and briefly explain departures. Explicit model requests and fixed custom-agent settings retain precedence.

## Model and effort ladders

Each row is a distinct pair. Read the selected column from top to bottom, skipping unavailable models and unsupported effort levels. An empty cell ends that column.

| Order | GPT family | Claude family | Mixed |
| --- | --- | --- | --- |
| 1 | GPT-6 Luna / low | Haiku 5.5 / low | GPT-6 Luna / low |
| 2 | GPT-6 Luna / medium | Haiku 5.5 / medium | GPT-6 Luna / medium |
| 3 | GPT-6 Luna / high | Haiku 5.5 / high | GPT-6 Luna / high |
| 4 | GPT-6.1 Sol / low | Sonnet 5.5 / medium | Haiku 5.5 / medium |
| 5 | GPT-6.1 Sol / medium | Opus 5.5 / low | Haiku 5.5 / high |
| 6 | GPT-6.1 Sol / high | Sonnet 5.5 / high | GPT-6.1 Sol / low |
| 7 | | Opus 5.5 / medium | GPT-6.1 Sol / medium |
| 8 | | Opus 5.5 / high | GPT-6.1 Sol / high |
| 9 | | | Opus 5.5 / medium |
| 10 | | | Opus 5.6 / high |

Treat the orders as selection heuristics. Effort labels are provider-specific controls; the table supplies neither equivalent reasoning budgets nor measured cost, latency or task-success guarantees. Prefer task-specific results when they conflict with a default ordering.
