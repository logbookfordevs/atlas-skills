# Team Up model preferences

Maintain the runtime policy in `skills/team-up/references/selection.md` and the preference table in `skills/team-up/references/model-preferences.md`. Build packages after editing: the same authored inputs are bundled into Team Up, Engineering Principles and Snap Out of It. Keep dataset provenance and refresh methodology here rather than in runtime instructions.

## Coding cost/intelligence baseline, 2026-11-09

Use the [user-selected Slopalytics view](https://slopalytics.com/?frontier=true&hide-reasoning=none,max,xhigh&models=gpt-6-astra,gpt-6-1-sol,gpt-6-1-terra,gpt-6-luna,claude-opus-5-5,claude-fable-5-1,gemini-4-argon,muse-wonder-full,claude-sonnet-5-5,claude-haiku-5-5&code=true): cost versus intelligence with `code=true`, `frontier=true`, and `hide-reasoning=none,max,xhigh`. The selected model families are GPT-6 Astra, GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Luna, Claude Opus 5.5, Claude Fable 5.1, Gemini 4 Argon, Muse Wonder Full, Claude Sonnet 5.5 and Claude Haiku 5.5. The retained measured variants have low, medium or high effort. Sonnet is included; do not use the site's different default model selection.

The source was the dataset embedded in Slopalytics’ deployed [index-sOLjKtqM.js](https://slopalytics.com/assets/index-sOLjKtqM.js), read on 2026-11-09. The dataset reports `fetchedAt: 2026-10-28T03:10:06.510Z`, contains 715 total variants and identifies Artificial Analysis as its source. This is the served snapshot, not a claim that measurements are current to the review date.

## Projection

Use each selected variant's `code` metrics, not its top-level general Intelligence Index metrics. The deployed view describes Code only as Terminal-Bench 4.0 and FrontierCode 2.0, equally weighted. Exclude the user's named effort levels and rows without measured coding cost or intelligence. Sort by ascending cost, breaking cost ties by descending intelligence; retain each strict new intelligence maximum. This matches the deployed site's Pareto selector. Use exact values for dominance; round only for presentation.

- GPT column: recompute within the selected OpenAI models.
- Claude column: recompute within the selected Anthropic models, including Sonnet.
- Mixed column: compute across all the user's selected families. Fable, Gemini and Muse contribute no surviving frontier point in this served filtered snapshot.

Family columns are conditional frontiers, not the same as the global frontier. Preserve the user's subject and review-independence preferences separately. Cost means benchmark USD per task, not subscription charges or observed repository-task cost. Sonnet and Opus variants are labelled “with fallback” in the benchmark; a host's same-named effort setting is not proof of the same configuration. Skip unsupported settings rather than inventing aliases or effort mappings.

## Resulting changes

Terra low, medium and high enter all relevant ladders. Luna high remains on the coding frontier, even though the broader general-index frontier would drop it. Sol low is dominated by Terra medium; Sol medium is dominated by Terra high. The latter score difference is tiny (39.2424 versus 39.2230), without uncertainty estimates in this dataset; the exact selector excludes Sol medium, but this is not proof of a meaningful capability difference on real tasks. Both remain eligible as supported alternatives when a frontier choice is unavailable or task evidence favors them.

Within Claude, Haiku high dominates Sonnet medium and Opus low; Sonnet high and Opus medium/high survive. In Mixed, Haiku medium is dominated by Terra low, and Sonnet high and Opus medium are dominated by GPT choices. Their family-column inclusion preserves the user's Claude preference for appropriate assignments. Astra high extends the measured coding frontier beyond Sol high. Opus 5.6 has no entry in this served dataset, so it is removed from the benchmark-based table without implying anything about availability elsewhere.

## Refresh

Inspect the deployed dataset, URL selections and frontier selector together. Preserve Code only, the selected families and effort exclusions. Keep the served dataset date distinct from the review date. Cross-check newly added model identity against the benchmark's primary source when needed. Rebuild and validate all consumers after editing the authored inputs. The frontier is a cost/coding-performance heuristic, not a universal capability ranking or an instruction to traverse every row. For other domains, preserve family fit and task-specific judgment.
