---
name: atlas-mode
description: "Use Atlas methods for the current task, selecting the workflow that fits the work."
disable-model-invocation: true
---

# Atlas Mode

Use Atlas as the workflow entry point for this task and its follow-ups until the user changes direction or exits the mode. Honor the requested outcome, scope and explicit method choices.

If invoked without a task, ask what the user wants to work on. Otherwise select the applicable routes below, briefly name the selected skills and methods, then read and follow their installed instructions before doing the work. Select again when the task changes; load only the methods needed for the next work.

| Work in front of you | Route |
| --- | --- |
| Challenge a plan or clarify unresolved choices | `atlas-grill` |
| Turn settled requirements into a specification | `atlas-to-spec` |
| Slice a specification into executable tickets | `atlas-to-tickets` |
| Design implementation structure, build test-first, or resolve version-sensitive API choices | `atlas-implement`; select Architect, TDD or Source-Driven as applicable |
| Explain mechanics, investigate rationale or teach | `atlas-explain`; retain its mode chooser |
| Explore an interface through a wireframe or interactive model | `html-ui` |
| Refine an established interface | `atlas-craft` |
| Build motion or identify useful animation opportunities | `atlas-motion` |
| Assess code, interfaces, motion or downstream impact | `atlas-review` |
| Prove behavior, run QA, maintain project verifiers or assess performance evidence | `atlas-verify`, when the conversation calls for that work |
| Write substantial prose or technical documentation | `writing-for-humans` |
| Delegate authorized work | `team-up` |
| Track implementation or resume an existing implementation record | `tracking-implementation`, when requested |

These are routes, not mandatory phases. Continue a settled implementation directly; routine changes use normal project validation when no specialized method applies. Review and verification are selected from the conversation and task needs, independently of Tracking. Each selected skill owns its procedure, evidence and acceptance rules.

Keep explicit-only choices explicit: With Docs, Audit Trail and other opt-in methods retain their existing triggers. For manually invoked companions such as `atlas-wayfinder`, `atlas-retro`, `atlas-setup` or `animated-driven-frontend`, suggest the relevant invocation when useful and let the user select it. Entering Atlas Mode alone does not activate those companions or authorize tracking, delegation, product fixes during a review, installation or publication.

Resolve skills through the host's installed skill catalog. If a selected route is unavailable, name the missing skill and its effect; continue independent work and offer a targeted installation or an ordinary-workflow fallback. Obtain the user's choice before replacing a requested method. Independent companion skills remain usable when explicitly selected or required by a loaded method.
