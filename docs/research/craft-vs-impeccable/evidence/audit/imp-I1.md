# Impeccable shard I1

## Ledger

Counts are logical lines; SKILL.md has 87 newline characters and 88 numbered lines (no final newline).

- SKILL.md — 88 lines; read lines 1–88 (complete). Entry, setup, mode and command routing.
- reference/craft-floor.md — 44 lines; read lines 1–44 (complete). Mechanical floor and default-pattern refusals.
- reference/new-work.md — 154 lines; read lines 1–154 (complete). Direction, build, review and documentation workflow.
- reference/shape.md — 59 lines; read lines 1–59 (complete). Discovery and confirmed design brief.
- reference/routing.md — 24 lines; read lines 1–24 (complete). Context-aware command selection.
- reference/craft.md — 5 lines; read lines 1–5 (complete). Deprecated alias.
- reference/operate.md — 61 lines; read lines 1–61 (complete). Product UI and reading guidance.
- reference/mode-operate.md — 21 lines; read lines 1–21 (complete). Working-screen direction and comps.
- reference/mode-persuade.md — 19 lines; read lines 1–19 (complete). Marketing/showcase direction and comps.
- reference/mode-read.md — 21 lines; read lines 1–21 (complete). Reading-surface direction and comps.
- reference/init.md — 131 lines; read lines 1–131 (complete). Product truth interview and setup.
- scripts/command-metadata.json — 98 lines; read lines 1–98 (complete). Command descriptions and triggers.
- scripts/VERSION — 1 line; read line 1 (complete). Binary version 0.1.18.

## Rules by pillar

### Color
- Body and placeholder contrast at least 4.5:1; large text at least 3:1. reference/craft-floor.md:9
- On colored surfaces tint secondary text from the surface hue or foreground, never gray. reference/craft-floor.md:9
- Choose restrained, committed (one saturated color covers 30–60%), full palette (3–4 roles), or drenched strategy before choosing colors. reference/new-work.md:65
- Select light or dark from the user's physical scene and ambient light, not category. reference/new-work.md:65
- In product UI standardize semantic state colors and reserve accent for primary actions, selection and state indicators. reference/operate.md:22
- On Operate screens use palette for shell, state, data series and selection; one gray screen with an accent is not the intended result. reference/mode-operate.md:7

### Typography
- Set body prose to 65–75ch, display to at most 6rem and tracking no tighter than -0.04em; test actual copy at each breakpoint. reference/craft-floor.md:12
- Product interfaces typically use a fixed rem scale with ratio 1.125–1.2, rather than fluid headings. reference/operate.md:14
- Product tables may be 120ch or wider; prose still needs a readable measure. reference/operate.md:16
- Read-mode web comps use about 60–75 characters per line and body text near 16px. reference/mode-read.md:15
- Reserve monospace for code, parameters, data or small labels, not running text or default headings. reference/mode-read.md:15
- On own-world pages do not use a system display face as the display voice; source and self-host a fitting face. reference/craft-floor.md:39

### Layout and hierarchy
- Put more space above headings than below and separate groups more generously than items within groups. reference/craft-floor.md:11
- Do not use an eyebrow above a heading; this is an absolute ban even if a brief requests one. reference/craft-floor.md:27
- Avoid same-size icon-heading-text cards as page structure and never nest cards. reference/craft-floor.md:25
- Make product responsiveness structural, such as collapsing sidebars and adapting tables or columns. reference/operate.md:28
- Read surfaces keep a calm reading column and familiar reading order and navigation; the world owns the surrounding frame. reference/mode-read.md:7
- Preserve first-viewport composition across desktop widths 1280–1600; capture 1440px desktop and 390px mobile for comp-led gates. reference/new-work.md:118

### Accessibility
- Verify contrast at 4.5:1 for body and placeholder, 3:1 for large text. reference/craft-floor.md:9
- Check keyboard focus along with working controls and responsive composition. reference/craft-floor.md:14
- Preserve semantics and accessibility during implementation. reference/new-work.md:134
- Check reachable focus, error, empty and overlong states for overlap and clipping at target sizes. reference/new-work.md:138
- Read text must retain contrast against its ground and readable measure, without visual performance behind it. reference/mode-read.md:7

### States and polish
- Include hover, disabled, loading, error and empty states, real content and working controls. reference/craft-floor.md:14
- Interactive product components need default, hover, focus, active, disabled, loading and error states. reference/operate.md:32
- Use skeletons for content loading and empty states that teach the interface. reference/operate.md:34
- Let overlays escape clipping ancestors via dialog, popover, fixed positioning or a portal. reference/operate.md:37
- Theme selection, caret, scrollbars, focus rings, underline offset and tabular numerals to the palette. reference/craft-floor.md:15
- Inspect the actual interactive states and fix overlaps and clipping in batched render rounds. reference/new-work.md:138

### Copy
- Controls name their action; errors name both the problem and recovery. reference/craft-floor.md:16
- Ask before replacing factual copy or adding claims during refinement. SKILL.md:28
- Do not invent customers, prices, benchmarks, endpoints or capabilities; synthetic demonstrations must be labeled. reference/new-work.md:59
- Use real title, opening, section names and a representative difficult example in Read comps, not filler. reference/mode-read.md:17
- Persuade openings make the offer intelligible, show a working primary action and demonstrate product-specific proof. reference/mode-persuade.md:9

### Motion
- Author one orchestrated moment rather than identical entrances on every section; use exponential ease-out from an already-visible default. reference/craft-floor.md:13
- Keep costly effects bounded and content visible by default. reference/new-work.md:132
- Most product transitions should last 150–250ms. reference/operate.md:41
- Product motion communicates state, feedback, loading or reveal, not decoration. reference/operate.md:42
- Do not orchestrate product page-load sequences that delay the task. reference/operate.md:43

### UX and direction
- Select mode per surface: Persuade for decisions, Operate for tasks, Read for comprehension, Experience for the work itself. SKILL.md:36
- Inherit coherent existing identity; a missing DESIGN.md alone does not establish greenfield. reference/new-work.md:12
- Local additions inherit their surface's visual world; do not run an identity exercise for them. reference/new-work.md:16
- Operate worlds contribute type, palette, density and one signature move, while familiar platform navigation and controls remain. reference/mode-operate.md:7
- Experience surfaces put the work itself in the first viewport; Persuade surfaces put the actual category action there. reference/mode-persuade.md:9
- A first viewport should demonstrate the mechanism at meaningful scale rather than merely convey mood. reference/new-work.md:126

## Refusals, limits and routing

- Brief-pinned aesthetics win; refinement preserves identity and behavior, whereas redesign replaces the visual world while retaining product truth. SKILL.md:27
- Never use hate or militarist symbols as ornament; factual documentary content remains. SKILL.md:29
- No-argument invocation presents a context-aware menu and never automatically executes a command. SKILL.md:74; reference/routing.md:11
- Shape asks for explicit confirmation and stops without code or a direction contract. reference/shape.md:55
- Init asks about product truth, not aesthetics, and does not silently overwrite existing context. reference/init.md:15; reference/init.md:41
- Never repair stale context as a design-task side effect except a finding marked auto. SKILL.md:88
- Ask before durable DESIGN.md changes on local extensions. reference/new-work.md:33
- Do not fabricate commercial or factual claims. reference/new-work.md:59

## Process obligations

- Run context once per session, load the applicable playbook and inspect target and incumbent visual evidence; read craft-floor immediately before UI editing. SKILL.md:19
- On launcher failure send the specified separate notice before the next tool call and read existing context directly. SKILL.md:23
- Before implementation ask two or three relevant questions or compact confirmation, unless facts are settled; surface purpose still needs confirmation. reference/new-work.md:20
- For a new or replacement world run concept-seed before artifact code, present directions and obtain choice as specified. reference/new-work.md:48
- Record and re-read six direction-contract blocks and seed reference in the surface brief before building; keep contract out of browser-delivered artifacts. reference/new-work.md:75; reference/new-work.md:77; reference/new-work.md:87
- Comp-led work proceeds through measured spec, plates, hero, sections, motion and responsive gates; plates require user review before page code. reference/new-work.md:105; reference/new-work.md:113
- Batch screenshot inspection at shipped sizes and all reachable interactive states; fix, then confirm in one final round. reference/new-work.md:138
- Validate captures before handing them off; run detector once on changed web targets when hookless, skipping native. reference/new-work.md:140; reference/new-work.md:142
- Send the prescribed evidence to a fresh finish reviewer, act on its disposition, and document the shipped world afterward. reference/new-work.md:144; reference/new-work.md:146; reference/new-work.md:152
- Comp-led final disposition must be recorded; later edits invalidate the capture and require rechecking. reference/new-work.md:154

## Depth notes

- Color: concrete contrast, palette proportions and semantic use are specified; detailed color selection is contextual.
- Typography: numeric measures and product-mode scale are explicit; face selection is directed by mode and subject.
- Layout/hierarchy: strong mode distinctions and comp fidelity gates; fewer general-purpose grid dimensions.
- Accessibility: contrast and keyboard checks are explicit, but these files defer broader technical auditing to its command.
- States/polish: state inventories, overlays and rendered checks are substantial; detailed behavior depends on the task.
- Copy: action, recovery and factual integrity are clear; voice-specific writing guidance is limited.
- Motion: timing and purpose are explicit for Operate, while other modes emphasize authored orchestration.
- UX/direction: exceptionally deep on authority, mode, concept selection, comp-led execution and finish gates.
