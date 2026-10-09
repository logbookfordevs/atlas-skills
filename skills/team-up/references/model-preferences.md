# Model preferences

Use these default model-and-effort preferences for configurable teammates. Choose one column from the providers the harness exposes. “Claude only” means the Haiku, Sonnet and Opus family; hosting location does not determine the column.

Each row is a distinct pair. Read the selected column from top to bottom, skipping unavailable models and unsupported effort levels. An empty cell ends that column.

| Order | GPT only | Claude only | GPT and Claude |
| --- | --- | --- | --- |
| 1 | GPT-6 Luna / low | Haiku 5.5 / low | GPT-6 Luna / low |
| 2 | GPT-6 Luna / medium | Haiku 5.5 / medium | GPT-6 Luna / medium |
| 3 | GPT-6 Luna / high | Haiku 5.5 / high | GPT-6 Luna / high |
| 4 | GPT-6.1 Sol / low | Sonnet 5.5 / medium | Haiku 5.5 / medium |
| 5 | GPT-6.1 Sol / medium | Opus 5.5 / low | Haiku 5.5 / high |
| 6 | GPT-6.1 Sol / high | Sonnet 5.5 / high | GPT-6.1 Sol / low; for visual/UI work, prefer Sonnet 5.5 / medium when available |
| 7 | | Opus 5.5 / medium | GPT-6.1 Sol / medium |
| 8 | | Opus 5.5 / high | GPT-6.1 Sol / high |
| 9 | | | Opus 5.5 / medium |
| 10 | | | Opus 5.6 / high |

Treat the orders as selection heuristics. Effort labels are provider-specific controls; the table supplies neither equivalent reasoning budgets nor measured cost, latency or task-success guarantees. Prefer task-specific results when they conflict with a default ordering.
