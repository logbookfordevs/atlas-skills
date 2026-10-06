# Upstream updates

Atlas carries its authored skills, intentional patches and selected sources inside compositions. Unchanged independent skills are recommended from their original installation sources in `stacks/atlas.json`. Carrying a source and offering an independent upstream installation are separate decisions.

`sources/composition.json` owns the update contract. Each carried source records its upstream repository, immutable revision, entry path, license path, selected file scope, local snapshots, hashes, maintained method, optional replayable patch and consuming packages. Adding an active consumer puts the source in the same watcher pipeline whether it is verbatim or verbatim patched. Sources with no active consumers remain historical evidence and are skipped.

## Detection

Run `pnpm upstream:check` for a read-only report. `--source <id>` limits the check; `--output <path>` writes a machine-readable report. The script fetches the tracked ref once per repository/ref, compares the selected source tree and license with the recorded hashes, and tries existing patches against the candidate entry in isolation. It detects added and removed supporting files, not just the entry file. Repository-root skills should declare `upstream.includePaths` explicitly; other entries default to their containing skill directory. Supporting resources retain upstream-relative paths.

The daily GitHub workflow runs this detector with `--issues`. It creates one open review issue per changed source and updates that issue when the candidate changes. Unchanged issue bodies cause no additional write. It records the candidate revision, affected consumers, rulings, file changes and patch conflicts. Fetch failures fail the run and appear in its downloadable report. Missing or moved upstream paths require explicit maintainer reconciliation; the watcher does not guess a replacement. The workflow does not run on pull requests, adopt updates, or merge changes.

The workflow becomes scheduled only after it is published on the repository's default branch. Local code and passing tests do not activate it. GitHub Issues and Actions must be enabled. The workflow uses repository issue-write permission; no personal token is required.

## Reviewed adoption

After reviewing the issue's diff and behavior impact, run:

```sh
pnpm upstream:prepare --source <id> --revision <reviewed-40-character-commit>
pnpm check
```

Preparation requires an explicit immutable candidate revision and a clean package-validation result for the current maintained inputs. A same-revision `baseline-review` means the previous receipt omitted selected supporting files; review that gap rather than mistake it for an upstream change. It stages snapshots, full selected support trees, checksums, the replayed maintained method and regenerated packages in isolation. Only a complete package-validation pass allows it to update the local inputs and affected packages. Removed generated resources disappear from the affected package; old unreferenced evidence remains on disk. It makes no commits, pushes, issues or PRs.

License changes, patch conflicts and derived-method changes require manual reconciliation rather than automatic preparation. Adopt a new license only after checking its redistribution terms; update the pin, hashes and licensed bytes together. Derived methods must be reviewed against their derivation. For patched methods, reconcile the maintained method and regenerate its patch against the new pristine snapshot. Then build and check the affected consumers before opening an ordinary review PR.

Verbatim sources must match their snapshots. Patched sources must reproduce their maintained bytes through patch replay. Switching from verbatim to patched means recording a maintained method and replayable patch in the same source record; the watcher needs no new code. Authored skills have no invented upstream pin.

The detector is deterministic; behavior review remains a maintainer or agent task. Clean patch replay and passing package checks do not prove that changed instructions fit Atlas's workflow. Adoption remains deliberate.

## Current scope

This first implementation creates review issues, not automatic update PRs. The preparation command makes a reviewed update concrete locally; a maintainer can open a PR after inspecting it. Automated draft PR generation can later use that same preparation mechanism without changing source identity or patch handling.

The recommended external stack is not mirrored or updated by this watcher. Its installation registry remains separate from the carried-source maintenance contract. The website and installer discussed during fresh-start review are not implemented here.

Atlas-owned instructions and resources live directly in `skills/` and survive preparation. Edit patched method files there and run `pnpm record:patches -- <source-id>` before rebuilding. Preparation stages `skills/`, `sources/` and `stacks/`, and refuses new upstream resources that conflict with Atlas-owned files.
