# The QA list

A markdown file the user keeps in the repo: the things they want checked, re-run on
demand. It stays in the repo; nothing else this skill produces does.

## Finding it

1. Use a list explicitly named by the user. Otherwise follow the repository's existing
   QA-list convention. Look in `.product/` for a markdown file whose name says what it is: `qa-list.md`,
   `qa.md`, `checks.md`, `release-checklist.md`, `verify.md`. One match is the list.
   Several matches: ask which.
2. No match: read the current Implementation Record or directly relevant project
   documentation for an existing QA-list reference. Use that path.
3. Still nothing: ask one question — where the list is, or whether to seed one — and
   retain the chosen path in the active Implementation Record when tracking is in use.

When the repo has no established convention, suggest `.product/qa-list.md`.

## Reading the list

No required format. Each list item or heading is one check.

- A nested bullet is detail for its parent check, not a separate check.
- A heading with bullets under it groups checks; the heading is context, the bullets
  are the checks. A heading with no bullets is itself a check.
- A trailing hint — `(browser)`, `— code`, `(always flag)` — is honored. "Always
  flag" means the item reports `flag` whenever the condition is true, regardless of
  whether anything else passed.
- Terse items ("Bun not naively upgraded") are interpreted from the repo: find what
  pins the version, confirm it is unchanged since the last tag, cite the line.
- Rich items (a 29-entry release list mixing browser behavior, install-path
  divergence, prompt-cache preservation, supply-chain version checks, doc staleness)
  are run in full; in a selective run the change set decides, never the length.

Item ids in the report are slugs of the check titles (`bun-version`,
`toolbar-buttons-present`), stable across runs so reports line up release to release.

## Choosing entries in a selective run

Read the change set (files, routes, scripts, dependencies, docs touched) and keep an
entry when any of it can affect what the entry checks. Rules:

- Entries marked "always flag" run in every selective run.
- An entry whose area is untouched is `not-run`, with the reason in its `summary`:
  "no change under `install/`", "dependencies unchanged since v0.17.5".
- Unsure whether an entry is affected: run it.
- The report's `selection_basis` names what was read: `diff main...HEAD, 14 files`,
  `v0.17.5..HEAD`.

## Seeding a list

Only when the user asks. Draft it from repo evidence — routes and pages, install and
build scripts, the package manager and runtime pins, CI steps, the README's claims —
as a flat list of checks with one line each. Write it to `.product/qa-list.md`, then
hand it to the user to prune.
