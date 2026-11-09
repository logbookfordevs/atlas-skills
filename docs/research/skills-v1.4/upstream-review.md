# Skills v1.4 upstream review

Reviewed 2026-11-09 on `feat/skills-v1.4` against main, including the four sources newly registered for Implement and Challenge.

## Issue and automation inventory

GitHub reported no open issues and no open PRs at the start of this pass. The recent upstream review issues were already closed. The latest scheduled/manual automation completed successfully: [Review upstream skill updates](https://github.com/logbookfordevs/atlas-skills/actions/runs/42666619949). No issue was closed or relabelled merely to manufacture a clean backlog.

## Source decisions

The fresh `pnpm upstream:check` inspected all 77 active source records. All 75 Git-tracked sources had unchanged selected entry, support and license bytes. There was no new candidate content to adopt or decline. Keep their current immutable baselines and maintained adaptations; a newer repository commit alone is not a skill update. This includes Implement Spec, Interrogate, Council and Doubt-Driven Development.

Two download-based creative sources remain outside automatic Git detection. Their status is manual-download, not unchanged; their author distributions were not independently refreshed in this automation review. Keep the recorded archives and fingerprints, without claiming current remote equality.

| Source | Result | Decision / checked revision |
| --- | --- | --- |
| `html-wireframe` | Unchanged selected files | Keep adaptation; `5ce160a3e76dc1c0f9301f8a1903704ec607636a` |
| `html-prototype` | Unchanged selected files | Keep adaptation; `5ce160a3e76dc1c0f9301f8a1903704ec607636a` |
| `animate` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `apple-design` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `better-layout` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `better-typography` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `better-colors` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `to-spec` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `to-tickets` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `code-review` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `review-animations` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `show-me` | Unchanged selected files | Keep adaptation; `4d69d20f6e9b57b4fcf0d501ccfb1be961f0f329` |
| `better-accessibility` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `better-ui` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `better-writing` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `better-interface` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `interface-review` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `improve-animations` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `find-animation-opportunities` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `pe-verify` | Unchanged selected files | Keep adaptation; `0642a58496d4dfa1de9688a82c29dfa34d24370a` |
| `tdd` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `source-driven-development` | Unchanged selected files | Keep adaptation; `301b02b12bff98e4688e6984af6556802322bbde` |
| `grilling` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `domain-modeling` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `grill-with-docs` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `wayfinder-local-tracker` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `wayfinder` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `pstack-create-verification-skill` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-maintain-verification-skill` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-benchmark-checklist` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-blast-radius` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-how` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-why` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-teach` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-unslop` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-architect` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-arena` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-boundary-discipline` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-encode-lessons-in-structure` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-exhaust-the-design-space` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-fix-root-causes` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-foundational-thinking` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-guard-the-context-window` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-laziness-protocol` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-make-operations-idempotent` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-minimize-reader-load` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-outcome-oriented-execution` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-prove-it-works` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-redesign-from-first-principles` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-separate-before-serializing-shared-state` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-principle-subtract-before-you-add` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-swarm` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-technical-writing` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-show-me-your-work` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `matt-retro` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `pstack-correct` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `animation-performance` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `break-ui` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `mobile-native` | Unchanged selected files | Keep adaptation; `715c1807e08c497cfd1dc4feb450a2a3300ef2a9` |
| `explain-interface` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `state-machine` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `hairline-create` | Unchanged selected files | Keep adaptation; `37d2e78dcb333ab30c3338e28ed4a690364ea014` |
| `hairline-adopt` | Unchanged selected files | Keep adaptation; `37d2e78dcb333ab30c3338e28ed4a690364ea014` |
| `anatomy` | Unchanged selected files | Keep adaptation; `1482e8469b0a9e0d8cc18ea2740a01423d29ae80` |
| `engraved-figures` | Unchanged selected files | Keep adaptation; `b28c329ab529e4eba38a731556e8b1e5aed52dbd` |
| `teardown` | Unchanged selected files | Keep adaptation; `659cc4e5b6df90cfe1f306f5ae1c83fa549e075c` |
| `iso-glow` | Manual download | Keep recorded archive; [author distribution](https://isoglow.dev/) not refreshed |
| `colorfigures` | Manual download | Keep recorded archive; [author distribution](https://april-zhu.com/colorfigures) not refreshed |
| `pstack-ketchup` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-bro` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-create-formal-verification-skill` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `pstack-maintain-formal-verification-skill` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `diagnosing-bugs` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `implement-spec` | Unchanged selected files | Keep adaptation; `4ae2317ddb22b046e26455e4f9c9b3aaaf62212d` |
| `pstack-interrogate` | Unchanged selected files | Keep adaptation; `4161d4ef5051574e825ffe70e2f43a2e49e4b3db` |
| `tstack-council` | Unchanged selected files | Keep adaptation; `1085050f3baed1ac724caa4a8166145fb2ac88af` |
| `doubt-driven-development` | Unchanged selected files | Keep adaptation; `301b02b12bff98e4688e6984af6556802322bbde` |

## Release review fixes

- Setup previously omitted dependencies on Atlas-owned packages, assuming Core was installed. Include these edges for Core, creative and utility consumers, preserving required/optional conditions and filtering against installed packages at runtime. This fixes independent Implement installation as well as Atlas Mode discovery of optional utilities.
- All Tickets opened a draft integration PR but did not explicitly transition it to ready after shared review and CI. The coordinator now marks it ready before reporting merge readiness, while preserving drafts requested by the user and never merging automatically. The original supplied Implement entry stays intact apart from its previously agreed reference rename and All Tickets handoff.
- Include Atlas Debug and Atlas Verifiers explicitly in the Core CLI catalog, rather than leaving their discoverable entries under General.

Validation and final PR status are recorded in the PR; this report captures source-review decisions rather than claiming that a branch has been merged or the website deployed.
