# NOTES: Creative Room landing page, new visual direction

Outcome: **declined to build. `index.html` is unchanged.** Atlas Craft refines an existing interface. It has no method for creating a new visual direction, and it says that a new direction needs its own decision. That decision could not be asked for here, so I stopped before building and recorded the question below.

## (a) Skill files read

Atlas Craft (`/Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-craft/`):
- `SKILL.md`
- `references/ownership.md`
- `references/motion-ownership.md`
- `references/color/index.md`
- `references/type/index.md`
- `references/type/choosing-fonts.md`
- `references/layout/index.md`
- A grep over `references/` for direction, identity, brand and personality, to check whether any domain has a method for choosing a direction. None does. The hits were palette generation from an existing brand colour, and icon and RTL direction.

Atlas Motion (`/Users/leonardo/Codes/projects/logbook-atlas/skills/atlas-motion/`):
- `SKILL.md`
- `references/ownership.md`

Project inputs: `CONTEXT.md`, `DESIGN.md`, `index.html`. I listed `img/` but did not open the files, because nothing was built.

## (b) What I did and which rules drove it

1. **Checked scope.** The skill's trigger is "refining an existing interface's color, typography, layout, accessibility, polish or copy" (`atlas-craft/SKILL.md`, frontmatter `description`, line 3). The request asks for the opposite: "a fresh look with a point of view, not a tidy-up of this one."
2. **Applied the direction rule.** "Preserve accepted identity and project foundations; a new design direction needs its own decision." (`atlas-craft/SKILL.md`, body, line 22). `references/ownership.md` line 7 repeats it: "Preserve accepted project identity and use its tokens." The project has an accepted identity: `DESIGN.md`, "The Screening Room" (warm graphite, one brass accent, velvet band, samples carry the colour). The current landing page already borrows those tokens (`#14120f`, `#2a1418`, `#caa565`). A new direction would either replace that identity on the marketing surface or extend it, and that choice is the decision the rule reserves.
3. **Looked for a method I could follow instead of asking.** None exists:
   - Color builds and audits ramps once a hue exists. It starts from "the brand color" (`color/palette-generation.md`, "Start from the brand color"). It also says palette values "are a design decision. Change them only when asked" (`color/index.md` line 55). It never chooses a palette concept.
   - Type: "Never propose a new typeface, paid or free, unless the task asks for a type change" (`type/index.md` line 19). It also says a commercial face "is a brand decision" (`type/choosing-fonts.md`, "Fallback stacks for a type change"). There is no method for picking a typeface that carries a point of view.
   - Layout covers grouping, alignment and adaptivity. There is no art direction (`layout/index.md` lines 11–13).
   - The benchmark constraints forbid substituting general design knowledge for a missing method. Inventing a concept would do exactly that.
4. **Asking.** "Ask only when ambiguity changes the method" (`atlas-craft/SKILL.md` line 8). Here it changes the outcome itself, so the right step is to ask. This run cannot ask, so the questions are recorded below.

## (c) Declined, deferred or routed elsewhere

- **Declined: building a new direction and overwriting `index.html`.** Reason: `atlas-craft/SKILL.md` line 22, plus no direction method in any Craft domain (see b.3).
- **Declined: a tidy-up inside the existing identity.** Craft could do this, but the user explicitly rejected "a tidy-up of this one". Doing it anyway would ignore an explicit choice ("honoring an explicit choice", `atlas-craft/SKILL.md` line 8).
- **Routed: a whole-page audit** goes to Atlas Review's Interface mode. Rules: `atlas-craft/SKILL.md` line 26, "Whole-interface audits and change reviews belong to Atlas Review", and `references/ownership.md` line 5. I did not run one. The inputs below are limited to what a future build would need.
- **Deferred: motion.** Atlas Motion's Animate mode is construction. "Construction requires the user's requested implementation scope" (`atlas-motion/references/ownership.md` line 5). Motion choices depend on the direction, and project motion tokens must be preserved (`atlas-motion/SKILL.md`, "Preserve project motion tokens and accepted visual identity"). Once a direction exists, Animate and Opportunities apply. Note that the current page's `pulse` CTA animation and its overshooting `cubic-bezier(.68,-0.55,.27,1.55)` entrances conflict with the Desk's projector ease, `cubic-bezier(0.16, 1, 0.3, 1)`, in `DESIGN.md`.
- **Out of scope: long marketing copy.** Substantial prose belongs to Writing for Humans (`atlas-craft/SKILL.md` line 26). The current hero copy ("AI-Powered Video") also contradicts house rule 1 in `CONTEXT.md` ("No text-to-video"). Any direction needs new copy.

### Unasked questions for the user
1. **Which identity should the landing page carry?**
   - Extend the Desk's "Screening Room" system (`DESIGN.md`) to the public face.
   - Build a separate marketing identity, for example one drawn from the README's voice (Framey the film-frame mascot, riso and hand-drawn strokes, "Be weird").
   - Something else that you name.
2. **What does "point of view" mean to you?** Is there a reference, a mood or a creation (Seed's three-ink riso, Halloween, Claude Pop) the page should take after?
3. **Is a type change in scope?** A different display face is a brand decision (`type/choosing-fonts.md`).
4. **Who is the page for?** `CONTEXT.md` calls this a private repo. Is the page public marketing, a portfolio, or an internal front door? That decides whether a signup or CTA exists at all.

## Inputs a future build should carry

These are not an audit. Ratios were computed from the declared hex pairs. None was measured in a browser.
- Hero subtitle `#6b645a` on `#14120f`: **3.20:1**. Card text `#6b645a` on `#000`: **3.60:1**. Footer `#4a443d` on `#14120f`: **1.95:1**. All three fall below 4.5:1 for body text, and whether a pair must pass is Accessibility's call (`color/index.md` line 15). The `.how` list `#8a8278` on `#14120f` computes to 4.94:1.
- `*:focus { outline: none; }` removes keyboard focus. Navigation and CTAs are `<span>`/`<div>` elements with `onclick`, and reel images have no `alt`. These are Accessibility-domain items.
- Fixed `width: 1180px`, no viewport meta and no `lang`. The Layout and Type domains cover these.

## (d) Verification and gaps

- `index.html` was not modified, so there was nothing to render or verify in a browser. I did not run `agent-browser`.
- The contrast ratios above come from the declared token pairs only. Per `color/index.md` line 89, the rendered pairs are **Not verified**.
- Gap: Atlas Craft and Atlas Motion together have no method for creating a visual direction (concept, mood, reference gathering, brand typography or palette selection). A direction-creation skill, or a direction the user supplies, is needed before Craft can build and refine the page.
