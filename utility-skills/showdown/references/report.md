# Report

The report is a fighting game you can audit: health bars, rounds and K.O. stamps carry the energy, and every round still shows its evidence, rationale and winner. When it is fun but unverifiable, it has failed.

Build it from the bundled template: [`assets/report-template.html`](../assets/report-template.html) is the arcade-cabinet house style, and [`scripts/build-report.py`](../scripts/build-report.py) fills it from the showdown's data. Scores, winners, damage, ship picks, plant coverage and citations are copied from the JSON, never retyped; you write only the prose and choose the evidence. The template stages two contenders, P1 and P2. With more contenders, run pairwise bouts and give each pair its own report.

## Showdown folder

```text
<showdown>/
├── showdown.json                  the card: prose, contenders, stages, rounds, evidence choices
├── map.json                       the sealed label map (see Judging)
├── rulings.json                   the rule judge's output
├── verdicts/verdict-<stage>-<judge>.json
└── shots/ …                       captures referenced by showdown.json
```

Run `python3 scripts/build-report.py <showdown> [out.html]`. It embeds fonts and screenshots as data URIs (downscaling with Pillow or `sips` when available) and fails on any unfilled placeholder.

## `showdown.json`

Inline prose accepts backtick code, double-asterisk bold and ordinary Markdown links.

| Field | Content |
| --- | --- |
| `title`, `description`, `event`, `lede`, `footer` | Page title, meta description, the line above the versus title, the intro paragraph and the closing note |
| `contenders` | Exactly two, in P1/P2 order: `id` (matches map and rulings), `name`, optional `short`, `color` and `deep` (bar and shadow tones), and `facts` as `[label, text]` rows: version, lineage with bundled sources named by their true origin, scope |
| `judges` | Display label per judge id, with model family |
| `stages` | `id`, `name`, and `split`: bullets on what changed on this stage and which rule decided it |
| `rounds` | In order: `key` (matches verdicts and rulings), `title`, `question`, optional `ko` line for a decisive moment |
| `headline` | Result-up-front bullets, one per stage, plus a pointer to the caveats |
| `methodIntro`, `pipeline`, `taskRationale` | Tale of the tape; `pipeline` defaults to the six Showdown steps |
| `stageShots` | Seed screenshots with planted-defect counts in their captions |
| `evidence` | Per round key: `shots` (`src`, `caption`, `alt`, owning `contender`), `facts` with `file:line` pointers, optional `metrics` rows (`label` plus one value per contender id, written seed → output) |
| `refusalProbes` | Per probe: `id`, `title`, `request`, `walkover` (contender id or omitted for no contest), `result`, and `entries` per contender id with `status` (`declined` or `built`), `note`, `quote` and `shots` |
| `refusalSummary`, `caveats`, `evidence_locker`, `evidenceIntro` | Closing sections; `caveats` and `evidence_locker` are groups of `title` + `items` |

Health starts at 100 and each round deals `(10 − the contender's mean blind score across judge × stage cells) × damageFactor` (default 3). A high-confidence win stamps `K.O.`, any other win `WIN`, a draw `DRAW`; a refusal probe stamps `W/O`.

## Sections the template renders

1. HUD: sticky health bars that drain as each round scrolls into view, and a round counter.
2. Title card per contender, and the result up front: tallies computed from the rulings and verdicts, then the headline bullets.
3. Tale of the tape: pipeline, why these tasks, and the stages.
4. One section per round: evidence, judge rationale with each contender's cited rules, instruction depth and the variance note, then the stamp, per-stage split and damage.
5. Refusal probes as bonus stages outside the tally.
6. Final scorecard: remaining health, rounds × stages × combined × confidence × depth, and plant coverage per judge.
7. Stage split, where each refuses to fight, caveats, evidence locker.

Caveats always cover: sample size per cell; who wrote the seeds and plants; home advantage (context files in one contender's format); the non-interactive penalty on ask-first contenders; stand-ins rather than the real product; judge leniency and how splits were resolved; model families of contenders, judges and auditors; how far the blinding held; the weighting; checks that never ran.

## Style

The template's look is the default. When the subject calls for a different costume and `html-ui` is installed, restyle the template's tokens and faces with its Artifact mode while keeping the sections above. A contender never designs the report about its own fight. Bundled fonts are under the SIL Open Font License (`licenses/`).

## Verify and deliver

Verify in a browser: zero axe violations, no horizontal overflow at 390px, reduced motion leaves the bars static and the stamps visible, the screenshot dialog opens and closes from the keyboard, and every evidence link resolves.

Deliver a local HTML file under the repository's research convention (for example `docs/research/<slug>/index.html`, evidence alongside) or in a scratch folder outside a repository, uncommitted unless the user asks.

Publishing makes the page public, so it waits for the user's explicit request and follows the publisher's own consent rules. For a single-file publisher such as `tot`, publish a copy: turn evidence links into plain paths, and lower `imageWidth` and `imageQuality` in `showdown.json` until the page fits the host's limit (`tot` rejected about 1.6 MB and accepted about 960 KB).
