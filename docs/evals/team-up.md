# Team Up selection evaluation

The model preferences were supplied by Leonardo on 2026-10-09 alongside two intelligence-index charts. The charts do not provide enough cost, latency or benchmark-method detail to establish a measured Pareto frontier. The ladders encode his preferred defaults, including the visual/UI branch in the mixed-provider case. Runtime orders live only in [Model preferences](../../skills/team-up/references/model-preferences.md).

These are observable acceptance cases, not completed model trials. Record the harness, available model-and-effort pairs, assignment, selected pair and actual result when running a trial.

| Case | Expected behavior |
| --- | --- |
| Bounded assignment with GPT models only | Use the GPT column and choose its earliest suitable supported pair. |
| Claude models only, including a remotely hosted harness | Use the Claude column based on model family. |
| GPT and Claude available for general work | Use the mixed column. |
| Visual/UI assignment at the mixed column's sixth step | Prefer Sonnet 5.5 medium when available; otherwise use GPT-6.1 Sol low if supported and suitable. |
| A listed model or effort is unavailable | Skip the unsupported pair, preserving the remaining order. |
| Only other providers or unlisted models are available | Assess advertised options directly using the lowest-cost reliable fit. |
| Consequential assignment with substantial uncertainty | Choose a suitable later starting point without executing every earlier step. |
| Result misses acceptance criteria because of a reasoning gap | Escalate to the next available suitable pair and retain useful findings. |
| Missing input or failed tool | Resolve the input or tool issue directly. |
| First result meets acceptance criteria | Finish without further escalation. |
| Suitable custom role fixes its model or effort | Preserve those fixed settings. |
| User explicitly requests a supported model or effort | Honor the request ahead of the ladder. |
| User explicitly requests an unsupported model or effort | Explain the limitation and resolve the alternative before dispatch. |
| Display name has no confirmed harness identifier or alias | Resolve the identifier before dispatch rather than inventing one. |

Package checks verify metadata, local references and generated integrity. They do not establish model-selection quality or comparative benchmark performance.
