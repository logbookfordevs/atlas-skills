# Planted defects (hidden from contestants)

Written before any contestant ran. Skill-neutral: each is a generic interface defect that a competent design pass should catch. Pillar tags in brackets.

## Landing seed (seeds/landing/index.html)

- L1 [Color] Body/lede text #6b645a and #8a8278 on #14120f fail contrast (~3:1 and ~4.9:1 small italic); footer #4a443d ~2:1.
- L2 [Color] Brass used for logo, nav, headings, both CTAs, quote rule: the single accent is diluted.
- L3 [Color] Off-system saturated purple/pink gradients (#9b5cff, #ff4fd8) on title, badge, icons, CTA ring; pure #000 cards on warm ground.
- L4 [Type] Display 72px with line-height 1.5 and +0.04em tracking, weight 800; uppercase h4 headings with no tracking adjustment; arbitrary size ladder (10/11/13/14/15/17/19/21/72).
- L5 [Type] No text-wrap balance/pretty; "..." instead of an ellipsis; straight quotes; unbounded line length (lede and list max-width: none).
- L6 [Layout] Fixed 1180px wrapper (horizontal scroll on phones); inconsistent spacing (9/11/13/22/31/37px); hero centred with reel, features, list, quote and signup all left-aligned with different rhythms; no responsive grid.
- L7 [Layout/hierarchy] Generic three identical icon cards; signup buried with no context; ghost CTA and primary CTA the same visual weight; no section headings structure.
- L8 [A11y] Nav and CTAs are clickable spans/divs (no keyboard, no role); `*:focus {outline:none}`; images without alt; no `lang`; heading levels skip (h1 -> h4); input with placeholder as label; no landmarks (header/nav/main/footer); no viewport meta.
- L9 [A11y] Tap targets ~25px tall (CTA 6px padding, 13px text).
- L10 [States/polish] No hover/active/focus-visible states on CTAs; nested-radius mismatch (pill 8px vs input 12px vs badge 3px); heavy black shadows on a dark ground; emoji icons; double CTA visual treatment (ring + shadow).
- L11 [Copy] AI-marketing slop that contradicts the product ("AI-Powered Video", "AI Magic", "hundreds of templates" — the studio renders video from code and bans text-to-video); "Get Started"/"Learn More"/"Submit"/"Click here"; "NEW!!"; exclamation marks; Title Case headings; "Made with ❤️ and AI".
- L12 [Motion] Infinite pulsing CTA (0.9s scale 1.12); `transition: all` 1.2s back/overshoot easing on cards; hover animates `top` and `width` (layout properties); scroll fade-in translateY(80px) on every section; no prefers-reduced-motion handling; hero content hidden until JS observer fires.
- L13 [UX/direction] The page doesn't say what Creative Room is in a credible way, doesn't show the work first (reel is unlabeled, below the fold), no clear single action.

## In-app seed (seeds/app/index.html) — Piece Overview, states ready/empty/loading/error

- A1 [States] Loading: full-screen fixed spinner that covers the band, "Loading..." text, spin at 0.3s, no aria-live/aria-busy, no layout preservation (content jumps when ready).
- A2 [States/Copy] Empty: "No Data" with no explanation or next action (product principle: every room optional, chat is an alternative).
- A3 [States/Copy] Error: raw ENOENT path dump with "(undefined)", pure red #ff0000, no recovery action, no explanation, not announced.
- A4 [A11y] Rooms are clickable divs (no keyboard/role/link); icon-only band controls are emoji spans with no labels; `*:focus {outline:none}`; Ask input has placeholder only, no label.
- A5 [Color] Claims chips and status dots use saturated green/red (#19c37d, #ff3b3b) outside the brass/graphite system; red "off" chips make "not yet" read as failure; status conveyed by colour alone (dots).
- A6 [Color] Meta text #6b645a fails contrast on panel; brass used for section headings, all buttons and focus (accent diluted).
- A7 [Type] Geist Mono used for all language (DESIGN.md: mono only for data); 800-weight titles; 10–11px labels; uppercase+0.2em tracked section headings; `text-transform: capitalize` on the title; Title Case Everywhere.
- A8 [Layout] Fixed `repeat(4, 240px)` room grid (overflows narrow screens); cramped 7px gaps vs 22–30px elsewhere; nested card-in-card in rooms with same 16px radius (nested radius mismatch); asymmetric box padding 9px/17px; actions row crowded with chips and three equal-weight buttons.
- A9 [States/polish] Destructive Delete is a primary-weight red button that deletes immediately with no confirm/undo; three buttons share primary styling; hover scale(1.1) on cards and buttons; emoji icons.
- A10 [Copy] "Initiate Render Pipeline" (also outside product scope: the Desk never runs skills/renders); "Open In Finder" Title Case; "Submit"; "Type your request here..."; "In Progress" vs "Done" inconsistent.
- A11 [Motion] `transition: all .4s`; scale(1.1) hover; list items slide 200px with overshoot easing and 300ms stagger (last item lands after ~1.5s); no reduced-motion; loading->ready swap is instant with no continuity.
- A12 [UX] Primary action unclear; the screen offers a render button that contradicts PRODUCT.md (Desk never runs a skill/model).
