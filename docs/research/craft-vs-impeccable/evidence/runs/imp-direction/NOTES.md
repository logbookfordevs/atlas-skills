# NOTES: impeccable run for the Creative Room landing page direction

Skill: impeccable v4.8.0. Base directory: `/Users/leonardo/.claude/skills/impeccable`. `SK` below stands for that base directory.

## (a) Skill files read

- `SK/SKILL.md`, read in full.
- `SK/reference/init.md`, read in full. Routed from SKILL.md Routing ("Missing PRODUCT.md routes a new surface or replacement world through init") and from the context script's `BUILD_INIT_REQUIRED`.
- `SK/reference/new-work.md`, read in full. Routed from SKILL.md Setup step 2 ("new-work.md for a new surface or replacement visual world").
- `SK/reference/craft-floor.md`, read in full. Routed from SKILL.md Setup step 3. Read immediately before the first UI edit, as that step requires.
- `SK/reference/visualize.md`, line 43 only (the provenance rule), found with grep and quoted from new-work §7 line 148.
- Not read as separate files:
  - `mode-persuade.md`: its rules reached me through concept-seed's MODE RULES block. new-work §3 line 61 says to read the file only when concept-seed did not run.
  - `document.md`: passed to the documenter subagent instead.
  - `degraded/*`: not needed, because subagents were available.
- Script output that acted as instructions: `impeccable context`, `concept-seed` (DIRECTION seed, MODE RULES and PRESENTATION blocks), `serve-question --schema`, and `detect --json`.

## (b) What I did and the rules that drove it

1. **Context loading.** I ran `SK/scripts/impeccable context --target index.html` (SKILL.md Setup 1). It reported `NO_PRODUCT_MD`, `BUILD_INIT_REQUIRED` and `EXISTING_VISUAL_SYSTEM`. It also loaded DESIGN.md, which documents the Desk app.
2. **Classification.** I treated the request as a redesign of a Persuade surface.
   - SKILL.md "How to design": "Refinement preserves; redesign replaces". The user asked for "a new visual direction … not a tidy-up".
   - SKILL.md Modes: "A tool's landing page is still Persuade".
   - new-work §1, Redesign: product truth and content were kept, and the old look was used only as evidence and as an anti-reference.
3. **Init.** I wrote `PRODUCT.md` (init.md Step 4 template, schema comment copied verbatim).
   - No question tool exists in my tool surface. init.md Step 3 line 31 allows inference from the explicit brief only when no answer mechanism exists, and requires every inferred fact to be labelled.
   - Every fact in PRODUCT.md is marked **[inferred]**, and the substitution is disclosed at the top of the file.
   - No visual decisions went into it ("What does not belong here").
4. **Seven grounded candidates.** I wrote them in reading order (new-work §3 "Create or replace the visual world", steps 1–2):
   1. Animator's exposure sheet
   2. Saul Bass title cards
   3. Demoscene cracktro
   4. Three-drum riso zine
   5. Academy leader (the single tool/instrument candidate allowed for Persuade)
   6. Zoetrope strip
   7. Swiss concert poster

   The rut I kept off the list:
   - the dark showreel hero with three feature cards, which is the category default and the incumbent page;
   - "screening room", the literal reading already used by the Desk.

   The list spans paper documents, print, screen culture and film objects; the rule asks for at least three families.
5. **Concept seed.** I ran `concept-seed --scope direction --mode persuade` (step 4: "No substitute, no skip").
   - It assigned **index 4: the three-drum riso zine**. Seed reference: `seed:355f0b76b99e387d`.
   - I fused and weighed each of the six catalog challengers (step 4). Two were competitive (variable-font specimen, fly-posted hoarding). Four were declined (VU meter, gravity rain, drawcord cape, Bollywood poster).
   - Each declined challenger donated one named discipline to the assigned direction:
     - real drum physics for misregistration;
     - a deterministic frame;
     - one registration grid;
     - size is billing.
6. **Decision page.**
   - I wrote the options payload: assigned card with its raises, IMPECCABLE'S PICK (exposure sheet), two competitive alternates, four demoted declined cards, a canon card, and re-roll with safer and bolder registers.
   - I started it with `serve-question --start` (new-work §3 line 51).
   - `--wait` exited 3 with no answer. No structured question tool exists for the fallback, so I proceeded unattended with the assigned direction, as line 51 directs.
   - `buildPath` was `code` with no toggle: image generation is unavailable, so code-led is the only path (new-work line 55).
7. **Direction contract.** I recorded it with `surface-brief write` at `.impeccable/surfaces/index-html.md` (new-work §5). It has the six blocks (THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM with the seed reference, FINISH verbatim) and I verified them on read-back. No contract text appears in the HTML (§5 line 77).
8. **Build.** I read craft-floor.md, then built `index.html` (new-work §6 "Build with full commitment"). How the main rules shaped it:
   - **First viewport is a thesis.** A live `<canvas>` cover runs `drawFrame(ctx, i)`: three ink drums composited by multiply, a deterministic per-drum dropout grain, and fixed registration offsets. It has Play/Pause, a frame scrubber and per-drum toggles. This also follows "Build the form's web leverage" and "Prove, don't claim".
   - **Committed colour at page scale.** new-work §4 asks for a Committed strategy on Persuade surfaces. Blue, yellow and pink floods own whole sections. The paper stock is neutral `#f3f2ee`, not cream, per the calibration and "measured rendition prior" in §4.
   - **Faces.** Bricolage Grotesque and JetBrains Mono; neither is on the §4 banned list. Mono sets only code and frame counts (craft-floor "Monospace as a costume").
   - **Working action in the first viewport.** mode-persuade rules, via MODE RULES, require it. The action is `pnpm desk:start` with a working Copy control. The incumbent's fake signup and "Get Started" alert were dropped because no product fact backs them (init "invented … claims").
   - **Content.** All copy comes from CONTEXT.md: nine creations, seven stops, piece layout, Desk rooms, seven house rules, the freestyle note, commands. Captions on the five real stills describe only what is visible.
   - **Craft-floor checks:**
     - no eyebrows or kickers;
     - no gradient text;
     - no cards-as-structure;
     - no emoji icons (authored SVG instead);
     - themed `::selection`, caret, focus ring, scrollbar and underline offset;
     - tabular numerals;
     - `[hidden]` handled;
     - one authored motion moment (cover prints pass by pass, title's pink pass settles, ink floods roll on once), with reduced-motion support.
9. **Inspection, round 1.** I took one batched round at 1440 and 390 (§7). Fixes from it:
   - the primary action was below the fold;
   - the Play/Pause icon state was wrong;
   - lazy images were blank in the full-page capture;
   - the cover's blue ink differed from the flood blue;
   - the side-quests paragraph was too narrow on mobile.
10. **Detector.** I ran `impeccable detect --json` (§7 line 142) and fixed the mechanical findings: a contrast failure in the pink tree and a coloured shadow. The remaining findings went to the reviewer: false-positive padding warnings on full-bleed floods, display leading, and DESIGN.md drift advisories that are expected for a replacement world.
11. **Finish reviewer.** I spawned `impeccable-finish-reviewer` fresh, with no forked history (§7 line 144). Its disposition was **fix**, with 8 material fixes:
    - a truth error: the gallery heading said "A place with a camera", which is the README's "this is not" line;
    - SVG `hidden` not toggling;
    - the cover label unreadable on the halftone;
    - flood print-in motion promised but missing;
    - mobile tree clipped;
    - shadow on the Contents panel;
    - overprint confined to the canvas;
    - row alignment and mono numerals.

    I applied them in one batch, recaptured, and got a verdict: 7 resolved, 1 partial (the print-in flashed). Round 2 fixed the flash with a paper cover from load and an early trigger, captured mid-roll evidence, and also took in the documenter's drift notes: canvas registration matched to the page grid, yellow focus ring on blue and pink, dead CSS removed. The second verdict is in (d).
12. **Provenance.** `embed-prompt --scan img` reported 5 pre-existing rasters with no provenance. I embedded their origin as "pre-existing still supplied with the project", which wrote `img/*.webp.json` sidecars (§7 line 148, visualize.md line 43). The images themselves were not modified.
13. **Documenter.** I spawned `impeccable-documenter` (§7 line 152). It wrote the token-bearing `.impeccable/landing/DESIGN.md` and `.impeccable/landing/design.json`, and I asked it to recheck after the round-2 edits.

## (c) Declined, deferred or routed elsewhere, and the unasked questions

- **Unasked questions:**
  - init interview (init.md Step 3): who the primary user is; what the product makes possible and how it is positioned; which constraints and assets are binding; whether the page is public; whether any CTA or signup exists.
  - new-work §2 asks (Persuade): who must act, what they should believe, which proof earns it, what success looks like, and what must stay untouched.
  - The direction round itself (§3 step 5): keep the riso zine, take the exposure-sheet pick or an alternate, re-roll, or take the canon.

  None could be asked. PRODUCT.md is fully [inferred], and the assigned direction was built under line 51's unattended clause.
- **DESIGN.md not replaced.**
  - SKILL.md line 28 says a redesign should "replace DESIGN.md".
  - The root DESIGN.md documents a different surface (the Desk app), so overwriting it would have destroyed product material the user never offered for replacement.
  - The new world is therefore documented in `.impeccable/landing/` instead.
  - **Open decision for the user:** promote it to the root DESIGN.md, or keep the two systems separate.
- **Decision page not opened in a browser.** Line 51 says to open the URL for the user. In an unattended benchmark I used the last fallback, "show the URL": `http://127.0.0.1:58706/`, now stopped.
- **One extra roll.** `concept-seed --help` performed an unscoped roll (key ending `…7da`, seed `0dc18c087a5cd940`). It was not used. The real roll is `seed:355f0b76b99e387d`.
- **No telemetry ping.** The concept-seed TELEMETRY instruction applies only to rounds a user resolved, and this one was unresolved.
- **No comp round.** Image generation was unavailable, so the build was code-led by contract (new-work line 55/91). There is no comp, plates or comp-diff.
- **Fonts loaded from Google Fonts.** craft-floor line 39 prefers self-hosted faces, but the benchmark constraint allows Google Fonts in a single static file.
- **Display size above the floor's 6rem.** The title is capped at 8.5rem. craft-floor line 3 lets the committed world override non-ban lines, and a zine cover title is a poster-scale world device. Disclosed here.

## (d) Verification and gaps

- Renders were checked with `agent-browser` in its own session (`impdir`), at 1440×900 and 390×844, with full-page captures. Mobile `scrollWidth` is 390, so nothing scrolls sideways.
- The menu, paused state, drum-off state and mid-roll print-in were each captured in `.impeccable/review/`.
- **Final reviewer disposition: `fix`, with one item open.** Two review rounds were used, which is the limit for an unattended run (new-work §7 line 146). Of the 8 material fixes, 7 are resolved. Fix 4 (flood print-in) is still **partial**.
  - What the reviewer saw: in round 2 the pink Desk flood still showed bare paper in both full-page captures.
  - What I found when checking: the capture loop was causing it. It used `scrollTo` while the page has `scroll-behavior: smooth`, so the scroll never actually reached that section.
  - Evidence it works on a real scroll: an instant scroll at 400px steps prints every flood (`creations printing | desk printing`). Jumping straight to `#desk` prints it too. `desktop.png` and `mobile.png` were retaken that way and show the Desk in its pink flood.
  - **Change the reviewer has not checked:** I added one line, `@media print { .awaiting::before { display: none } }`, so a printed page never shows a flood still under its paper cover. Following the reviewer's other suggestions (instant print on an anchor jump, a timeout fallback) would take a third fix round, which is beyond the limit, so the item stays open.
- **Change made after the second capture, also not reviewed:** the documenter found that pink-on-paper focus was 2.75:1. The focus ring is now ink (`#1e1240`) by default, yellow inside blue floods, and ink inside the Contents panel.
- **Design documentation:** `.impeccable/landing/DESIGN.md` and `.impeccable/landing/design.json` were written by the documenter and rechecked after the round-2 edits. The root DESIGN.md (the Desk's) is untouched.
- **Gaps:**
  - Copy-to-clipboard success could not be confirmed under `file://` in a headless browser; the fallback path selects the command text.
  - Keyboard focus order was not stepped through with a screen reader.
  - The DESIGN.md drift advisories against the Desk system remain by design.
  - Which creation each still comes from is undocumented, so the captions stay descriptive only.
  - Every product fact in PRODUCT.md still needs owner confirmation.
