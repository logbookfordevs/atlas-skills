# Skill maintenance

## Ownership

| Location | Edit here for |
| --- | --- |
| `skills/<id>/` | Atlas instructions, templates and references; maintained upstream adaptations |
| `sources/composition.json` | Package registration, carried sources, consumers, dependencies and rulings |
| `sources/upstream/<source-id>/` | Pinned, untouched upstream files and license evidence |
| `sources/patches/` | Replayable differences from pinned upstream entries |
| `stacks/atlas.json` | Shared installation selection, including independent upstream skills |

The builder refreshes bundled upstream files, Setup’s dependency registry and package receipts. It preserves Atlas-owned files. Read a package’s `SOURCE-MANIFEST.json` to distinguish managed resources from local authoring; edit the composition manifest rather than generated receipts.

## Add an Atlas-authored skill

1. Create `skills/<id>/SKILL.md` and `agents/openai.yaml`. Use Writing for Agents for instructions and invocation metadata. Make `name` match the package ID; align `disable-model-invocation` with `policy.allow_implicit_invocation`.
2. Add a `workflows` record in `sources/composition.json`:

   ```json
   {
     "id": "example-skill",
     "entry": "skills/example-skill/SKILL.md",
     "agent": "skills/example-skill/agents/openai.yaml",
     "methods": [],
     "dependencies": []
   }
   ```

3. Keep local resources within the package and link them from their loading conditions. Ordinary local files are preserved automatically; `authoredReferences` can explicitly register an input and its package-relative target when needed.
4. Add the skill to Atlas’s source group in `stacks/atlas.json` when it belongs in the shared stack. Finish with [validation](#validate-and-deliver).

## Bundle an upstream source

1. Select an immutable upstream commit and the skill’s complete required file scope. Confirm redistribution permission; retain the license and applicable notices.
2. Store the pristine entry as `sources/upstream/<source-id>/source.md`, with supporting files and license alongside it. Calculate SHA-256 hashes from the saved bytes.
3. Register a `sources` record using an existing source with the same classification as the structural example. Supply:

   | Fields | Meaning |
   | --- | --- |
   | `id`, `owner`, `classification`, `adaptation` | Stable source identity and any intentional adaptation |
   | `upstream.repository`, `commit`, `path`, `licensePath`, `trackingRef` | Origin, immutable baseline and ref watched for updates |
   | `snapshot`, `sourceSha256`, `license`, `licenseSha256` | Pristine local evidence |
   | `method`, `carriedPath` | Maintained input and its destination within each consumer package |
   | `supportingFiles` | Each file’s `upstreamPath`, `snapshot`, `sourceSha256` and relative path beside the carried entry |
   | `consumers`, `rulings` | Packages using the source and intentional caller decisions |

4. For `verbatim`, set `method` to the pristine snapshot. For `patched`, put the maintained entry in `skills/<consumer>/<carriedPath>`, set `method` to that file and `patch` to `sources/patches/<source-id>.patch`, then record the patch. For a standalone patched skill, `carriedPath` is `SKILL.md` and its workflow entry is that same file.
5. Add the source ID to each consumer’s `methods` list and point the skill’s loading condition to the bundled reference. Preserve supporting paths so upstream relative links resolve. Declare `upstream.includePaths` for repository-root entries or a deliberately narrower tracked scope; other entries track their containing skill directory.

   When a standalone adaptation owns its invocation metadata, retain upstream metadata verbatim at a separate package path using `supportingFileTargets`, for example `{ "agents/openai.yaml": "references/upstream/agents/openai.yaml" }`. Keys are upstream-relative supporting paths; values are package-relative destinations. The watcher still tracks the complete selected tree. Use relocation only for files whose upstream-relative location is not required by runtime links.
6. Register any concrete conflict ruling in `rulings`, with its owning package, runtime document, source IDs and decision. Runtime guidance carries the actionable ruling; maintenance explanations stay here or in receipts.
7. Finish with validation. Only independently installable packages belong in the stack selection; bundled references need no separate installation.

## Patch an existing source

For a source already classified `patched`, edit its `method` file under `skills/`, update `adaptation` to describe the intentional change, then run:

```sh
pnpm record:patches -- <source-id>
pnpm build:skills
pnpm check
```

The source ID comes from `sources/composition.json`, and may differ from the consumer’s skill name. Recording captures the complete difference from the pinned original and verifies replay; it leaves the original intact.

To change `verbatim` into `patched`, first copy the carried entry into its maintained package location, change `classification` to `patched`, set `method` to that package file, and add the patch path and adaptation record. Edit that file and run the sequence above. Supporting files remain verbatim unless their `supportingFiles` record declares both a maintained `method` path and a replayable `patch` path. Keep their snapshots and `sourceSha256` pristine. Record intentional edits in `adaptation`, then run the same patch-recording and build sequence; each supporting patch replays against its own snapshot using `source.md` as the patch-local filename. Receipts classify each supporting file and hash its patch and carried bytes. A source with only supporting-file adaptations is `patched`, but may omit the entry `patch` and retain the pristine entry as its `method`.

Use direct relative links when absorbing sibling skill calls into a composition. Keep actual behavior conflicts in explicit rulings. Shared sources must use link destinations available at the same relative path in every consumer.

Upstream updates follow [reviewed adoption](upstream-updates.md#reviewed-adoption), including conflict and license handling. Local patch recording is not upstream adoption.

## Change dependencies or the recommended stack

A behavioral dependency record names `id`, `relationship: "behavioral"`, `required` and the loading `condition`. External dependencies need a matching skill selection in `stacks/atlas.json`; Atlas-owned dependencies resolve to registered packages. Tool capabilities use `relationship: "tool"` and are excluded from Setup’s skill-install recommendations.

Update the consumer relationship and stack selection together when a dependency changes. Rebuilding generates `skills/atlas-setup/references/dependencies.json`; edit its inputs, not that registry. An unchanged independent skill needs only its stack selection unless an Atlas package depends on it. See [stack sharing](../atlas-stack.md) for AFK import behavior.

## Remove a skill or bundled source

1. Remove its workflow or consumer-method relationship, incoming dependency calls and affected rulings. Keep `sources[].consumers` and `workflows[].methods` consistent.
2. Remove the shared stack selection if it is no longer recommended. A bundled source may remain independently recommended.
3. Delete the retired package when removing a skill. When removing a method from a retained package, keep its previous receipt until rebuilding: the builder uses that receipt to remove obsolete managed resources while preserving Atlas-owned files.
4. Delete source snapshots and patches only when no retained source record or consumer uses them and that removal is within the authorized scope. Retained `legacy/` baselines are separate from active packages.
5. Finish with validation.

## Validate and deliver

Run `pnpm build:skills`, then `pnpm check`. Inspect the diff for intended behavior changes, complete license/support trees, updated receipts and preserved Atlas-owned files. Commit maintained files, source records, patches and refreshed receipts together when delivery is authorized.

Tests cover metadata, discovery, packaging, hashes, patch replay and observable tooling behavior. Authored wording, headings and examples are not test contracts. Package validation establishes integrity; invocation and behavioral quality require a separate model trial when those claims matter.
