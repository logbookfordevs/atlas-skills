# Product

<!-- impeccable:product-schema 1 -->

> Unattended run: no question tool or answer channel was available, so every fact below is inferred from CONTEXT.md (the studio README) and the request, and is labelled **[inferred]**. None has been confirmed by the owner.

## Platform

web

## Stack

[inferred] delegated: a single static `index.html` with inline CSS/JS, Google Fonts allowed, assets from `img/`. This is the benchmark's stated constraint, not an owner answer.

## Users

[inferred] Primary: Leonardo, the studio's owner and only human decision-maker, plus the agents that arrive to work in it ("Arriving as an agent? Hi."). Secondary: people Leonardo shows the studio to (collaborators, curious peers). The README calls the repo private; there is no public customer audience on record.

## Product Purpose

[inferred] Creative Room is a workshop where short films, music videos, explainers, carousels and posters are rendered entirely from code (Canvas, shaders, Three.js, ffmpeg, headless Chrome). It holds 46 installed skills, the Desk (a local browser studio), a fixed piece layout and seven house rules. Success: a visitor understands that every frame is a function, sees the work, and knows how a piece moves from shower thought to shipped.

## Positioning

[inferred] No camera and no text-to-video: "Every frame is a function." Video is rendered from code; stills may be generated only with Leonardo's approval and a written prompt. Leonardo's brief beats any skill's defaults.

## Operating Context

[inferred] A piece moves through seven stops: shower thought, `brief.md`, the Desk, skill time, render, QA, ship it. Every piece has the same folder shape (`brief.md`, `README.md`, `src/`, `source/`, `final/`, `renders/`, `qa/`, `desk/`). The Desk has an interview, a Lobby, a catalog, and five rooms per piece (Overview, Board, Beats, Asks, Review); it writes plain files and never runs a skill or model itself. Commands: `pnpm desk:start`, `pnpm studio help`, `pnpm lint`.

## Capabilities and Constraints

[inferred] 46 skills in upstream form; two project-authored (`creative-studio`, `social-studio`). Nine creations listed (Benjamin, Claude Pop, A festa que deu ruim, Fruit Dreams, Seed, Feliz Halloween, Release 17, Um voto. Muitos caminhos., Logbook · EP1) and four experiments. Seven house rules (CONTEXT.md, House rules). Saying "freestyle" sends the Desk and rulings home; only house rules stay.

Undecided: whether the landing page is public; whether any sign-up, contact or call to action exists (none is documented; the incumbent page's email signup and "Get Started" have no backing product fact).

## Brand Commitments

[inferred] Name "Creative Room". Voice: dry, playful, self-aware ("one headless Chrome that has seen things", "46 coworkers who never take lunch", "This is a mood, not a license"). Mascot Framey, a film-frame character in a beret (README artwork, not available here). The Desk app has its own documented visual system (DESIGN.md, "The Screening Room"); it governs the Desk, not necessarily this page.

## Evidence on Hand

[inferred] Five real stills made with the studio's tools, in `img/`: `reel-1` kinetic type "PLAN" (scene 03/05, beats), `reel-2` isometric line drawing of a key grid, `reel-3` `@remotion/three` orbit of primitives, `reel-4` a painterly Monet-bridge scene with a child figure (caption "1899"), `reel-5` a "Shots per scene" bar chart. Which creation each still belongs to is not documented. Absent: testimonials, customers, metrics beyond the README's counts, pricing, public links, Framey artwork files. Do not fabricate these.

## Product Principles

1. [inferred] The code is the camera: demonstrate rendering, never imply AI video generation.
2. [inferred] Leonardo's brief outranks every default.
3. [inferred] Plain files over hidden state; chat is always a complete alternative to the Desk.
4. [inferred] Nothing ships or publishes without an explicit go.
