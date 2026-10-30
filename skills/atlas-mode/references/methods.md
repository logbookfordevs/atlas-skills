# Atlas methods

Use this guide with Atlas Mode’s selection rule to distinguish methods by their outcomes and the uncertainty they address. Read the selected skill's entry and method references before applying it; this guide exposes choices that may be hidden behind its description.

## Understand and plan

| Skill | Methods and selection |
| --- | --- |
| `atlas-explain` | **How:** trace mechanics, runtime flow and responsibility. **Why:** investigate historical decisions and constraints. **Teach:** build conversational understanding. **Interface:** explain how a live page, visual effect or screenshot was built when requested, distinguishing observation from reconstruction. **Catch Up:** on request, summarize this chat’s changes and pending decisions from current evidence. Preserve its chooser when the mode remains unspecified. |
| `atlas-grill` | **Grilling:** challenge assumptions and resolve unclear choices. **With Docs:** retain the answers as documentation when that outcome is explicitly requested. |
| `atlas-wayfinder` | For an effort whose unresolved decisions exceed one session, create or resume a decision map and resolve its next useful frontier. Keep decision planning distinct from executable implementation tickets. |
| `atlas-to-spec` | Synthesize settled discussion into a specification when work needs an agreed behavior contract; use existing context rather than restarting an interview. |
| `atlas-to-tickets` | Turn a spec, plan or conversation into vertical implementation slices with blocking relationships when the work needs executable units. |

## Build and refine

| Skill | Methods and selection |
| --- | --- |
| `atlas-debug` | Diagnose bugs and performance regressions through a tight reproduction loop. Load Statechart when checking state transitions, retries or concurrency materially helps investigation or human understanding, or when explicitly requested; retain real-code reproduction and verification. |
| `atlas-implement` | **Architect:** resolve interfaces, ownership, types and module shape before implementation when the design warrants exploration. **TDD:** prove behavior test-first through a meaningful seam. **Source-Driven:** establish version-sensitive framework, library or API facts. Combine the methods that address the task's actual needs. |
| `html-ui` | **Wireframe:** answer hierarchy, layout and flow questions at low fidelity. **Model:** make an agreed interface concrete as a polished interactive artifact. |
| `atlas-craft` | **Color:** palette, tokens and contrast. **Type:** fonts, scale and wrapping. **Layout:** grouping, spacing and adaptivity. **Accessibility:** semantics, keyboard paths, focus and forms. **UI Polish:** surfaces, elevation, icons and optical details. **Copy:** labels, errors, empty states and localization. **States:** on request, prepare a real component’s existing states with fixtures and a switcher; setup leaves product visuals unchanged. Mobile browser quirks use Craft’s conditional **Mobile Web** reference, not another mode. Preserve the accepted visual identity. |
| `atlas-motion` | **Opportunities:** find worthwhile motion and reject unnecessary animation, read-only. **Animate:** build transitions and animations. **Fluid:** direct manipulation, momentum and interruptible springs. **Performance:** diagnose frame drops and rendering cost; fixes require authorization. |
| `atlas-figures` (optional) | Choose a visual treatment for a figure or technical illustration. **Hairline:** restrained interactive line art; Create or adopt a supplied SVG. **Anatomy:** detailed physical mechanisms explaining a concept. **Engraved Figures:** monochrome scientific plates and charts. **Teardown:** evidence-led technical and exploded views. **ISO-GLOW:** glowing line art or solid-lit Lumen objects. **Colorfigures:** colourful hand-inked mechanisms. Follow Figures’ full-menu chooser; a recommendation does not select a treatment. Teardown uses installed Craft for its design domains. |
| `animated-driven-frontend` | **Interaction systems:** shared progress, seeking and synchronized sequences. **Rendering pipeline:** WebGL, assets, shaders and device performance. **Frontend constraints:** runtime ownership, loading, accessibility and failure behavior. Use for demanding motion engineering alongside the relevant design method. |
| `writing-for-humans` | Create, revise or critique prose while preserving meaning and voice. Select **reader progression**, **articles and newsletters**, **technical writing**, or **visual explanations** for the relevant genre and reader need; apply its bundled **Unslop** guidance. A fresh-reader proxy remains request-only. Agent instructions use the independent `writing-for-agents` skill. |

## Check the result

Select checks from the task and material uncertainty; Tracking does not select verification for you.

| Skill | Methods and selection |
| --- | --- |
| `atlas-review` | **Standards & Spec:** assess standards and originating intent. **Adversarial:** challenge blind spots with independent reviewers. **Impact:** trace downstream consequences. **Static:** run and judge scoped lint/typechecks. **Interface Changes:** identify introduced or regressed interface problems in a diff. **Interface Audit:** assess an existing screen or flow. **Motion:** review animation. **Motion Audit:** survey existing animation and prepare improvement plans. Select the review question rather than adding every review method. |
| `atlas-verify` | **Run · Feature:** verify implemented behavior against the change and conversation. **Run · QA list:** execute an existing QA list in full or scope it to a named change, with recorded evidence. **UI Stress:** exercise realistic worst-case content and states in an isolated harness. **Performance:** assess a benchmark, speedup or regression. Verification alone does not authorize product fixes or creating reusable assets. |

## Build and maintain verification

| Skill | Methods and selection |
| --- | --- |
| `atlas-verifiers` | **Create:** build a reusable app-driving verifier and feature map. **Maintain:** refresh that verifier against source and live behavior. **Statechart:** check a state model and explain paths that break its rules. **Formal Create:** build reusable property checks with a suitable model checker or code-level verifier. **Formal Maintain:** bring those checks back in sync with changed code. Select from the requested outcome and project context; explain and recommend options when the user describes only a problem, and obtain a choice when approaches imply materially different work. This manual skill can be selected within Atlas Mode; ordinary QA stays in Atlas Verify. |

## Coordinate and improve the work

| Skill | Methods and selection |
| --- | --- |
| `team-up` | **Delegation:** choose useful assignments, roles, models and effort when delegation is authorized. **Arena:** compare competing complete candidates and synthesize a result. **Swarm:** partition coverage or race approaches and consolidate evidence. Select Arena or Swarm deliberately when the outcome warrants it. |
| `tracking-implementation` | Start, maintain or resume the durable Implementation Record when tracking is requested or already active. **Audit Trail:** add Show Me Your Work's append-only decision provenance and reconciliation only when requested or already selected. |
| `atlas-retro` | **Diagnose:** inspect relevant session friction and propose improvements; use when recurring failures or workflow problems warrant reflection, keeping the scope to the selected conversation. **Enforce:** implement prevention for explicitly authorized recurring mistakes. A correction alone does not authorize prevention edits. |
