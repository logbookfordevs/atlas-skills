# Model preferences

- **Family fit:** GPT for correctness and robustness; Claude for experience design and architecture. Apply subject preferences to specialist evaluation and design/planning; ordinary execution uses task fit.
- **Independence:** for reviews, audits and second opinions, prefer a suitable reviewer from another family than the lead. This does not add a seat by itself. A lower-tier family outside the ladders, such as Gemini Flash, can fill an added independence seat (a second judge or council member) beside a capable reviewer; disclose its tier.
- **Cost frontier:** within the chosen family, prefer the least expensive suitable pair from the table; use Mixed when no family is favored. These are model families, independent of harness.
- **Other options:** for an unlisted family or an empty supported ladder, assess the lowest-cost reliable available alternative.

## Model and effort ladders

Ordered by coding-benchmark cost per task along the cost/intelligence Pareto frontier, limited to low, medium and high effort. Pick a suitable starting point; the rows are choices, not mandatory review rounds.

| Order | GPT family | Claude family | Mixed |
| --- | --- | --- | --- |
| 1 | GPT-6 Luna / low | Haiku 5.5 / low | GPT-6 Luna / low |
| 2 | GPT-6 Luna / medium | Haiku 5.5 / medium | GPT-6 Luna / medium |
| 3 | GPT-6 Luna / high | Haiku 5.5 / high | Haiku 5.5 / low |
| 4 | GPT-6.1 Terra / low | Sonnet 5.5 / high | GPT-6 Luna / high |
| 5 | GPT-6.1 Terra / medium | Opus 5.5 / medium | GPT-6.1 Terra / low |
| 6 | GPT-6.1 Terra / high | Opus 5.5 / high | Haiku 5.5 / high |
| 7 | GPT-6.1 Sol / high |  | GPT-6.1 Terra / medium |
| 8 | GPT-6 Astra / high |  | GPT-6.1 Terra / high |
| 9 |  |  | GPT-6.1 Sol / high |
| 10 |  |  | Opus 5.5 / high |
| 11 |  |  | GPT-6 Astra / high |

This is the Code only cost/intelligence frontier; non-reasoning, max and xhigh are excluded. The benchmark is a selection heuristic, not a task-success guarantee. Claude Sonnet and Opus variants were benchmarked “with fallback”; do not assume the host reproduces that configuration or equate unsupported effort labels.
