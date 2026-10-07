---
name: Atlas website
description: Warm technical reading within the Logbook Atlantic Chartroom identity.
colors:
  day-bg: "#e4d8c7"
  day-surface: "#eee3d4"
  day-border: "#aa927d"
  day-ink: "#261b16"
  day-muted: "#715b4d"
  day-ocean: "#173234"
  day-navy: "#173f5f"
  lantern: "#f4efde"
  night-bg: "#211d19"
  night-surface: "#2c241f"
  night-border: "#705b49"
  night-ink: "#f3eadc"
  night-muted: "#bea78f"
  night-ocean: "#10292b"
  night-verdigris: "#69aaa4"
  night-action-hover: "#8cc5be"
  night-link-hover: "#a4d8d1"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(36px, 4vw, 56px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.035em"
  reference-title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(32px, 3.4vw, 44px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.025em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.01em"
  lead:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-.012em"
  body:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
  technical:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  focus: "3px"
  copy: "6px"
  control: "8px"
spacing:
  inline: "7px"
  compact: "16px"
  control: "22px"
  reading-inset: "24px"
  shell-inset: "36px"
  section: "44px"
  chapter: "64px"
components:
  theme-toggle:
    textColor: "{colors.day-ink}"
    rounded: "{rounded.control}"
    width: "44px"
    height: "44px"
  theme-toggle-hover:
    backgroundColor: "{colors.day-surface}"
  theme-toggle-active:
    backgroundColor: "{colors.day-ocean}"
    textColor: "{colors.lantern}"
  copy:
    textColor: "{colors.lantern}"
    rounded: "{rounded.copy}"
    padding: "8px 12px"
  copy-hover:
    backgroundColor: "{colors.lantern}"
    textColor: "{colors.day-ocean}"
  command:
    backgroundColor: "{colors.day-ocean}"
    textColor: "{colors.lantern}"
    rounded: "{rounded.control}"
    padding: "19px 16px 19px 22px"
    typography: "{typography.technical}"
  prompt:
    backgroundColor: "{colors.day-surface}"
    rounded: "{rounded.control}"
    padding: "22px 24px"
    typography: "{typography.body}"
  skill-row:
    padding: "23px 0"
  contents:
    textColor: "{colors.day-muted}"
    typography: "{typography.label}"
  text-link:
    textColor: "{colors.day-ink}"
  contents-current:
    textColor: "{colors.day-ocean}"
---

# Design System: Atlas website

## Overview

**Creative North Star: "Atlantic Chartroom"**

The Atlantic Chartroom identity lands here as warm paper, walnut ink, and restrained ocean accents. Precise sans-serif structure frames a serif reading voice; monospace preserves technical evidence. Fine rules and tonal surfaces give the page order without elevation.

This document records the React website in `sites/atlas/src/`, built with Vite and served through Sites. It is a surface implementation of the external [Logbook brand authority](/Users/leonardo/.agents/skills/logbook-branding/DESIGN.md), using Walnut Day Chart and its paired Night Watch recipe. It does not replace that authority or define the visual system of Atlas skill packages.

**Key Characteristics:**

- Warm paper and walnut ink with ocean interaction accents.
- Poppins structure, Literata reading, IBM Plex Mono evidence.
- Flat ruled rows and restrained rounded controls.
- A small approved Thelu signature and exact Logbook attribution.

## Colors

The frontmatter names the actual day/night primitives; the CSS maps them to semantic interaction roles.

### Primary

Day Ocean supplies focus, navigation emphasis, selection, and command backgrounds; Day Navy appears on the focused skip link's hover. Night Verdigris supplies links, focus, and the skip action, with its observed lighter hover colors. Lantern supplies command text and selected text in both themes. Night Ocean supplies command and selection backgrounds.

### Neutral

Day and Night Background are the page materials. Their Surface colors distinguish prompts and theme-control hover; Border separates rows and sections. Ink carries reading text, while Muted carries summaries, secondary navigation, and attribution. The control border follows Muted in each theme. Day links inherit Ink and hover to Ocean; night links use Verdigris and lighten on hover.

**The Semantic Pair Rule.** Switch the complete implemented day/night role pairing together; keep text, links, controls, focus, selection, and code legible in both appearances.

## Typography

**Display Font:** Poppins, with sans-serif fallback.  
**Body Font:** Literata, with Georgia and serif fallback.  
**Label/Mono Font:** Poppins for labels; IBM Plex Mono with monospace fallback for technical text.

The bundled font stylesheet supplies Poppins regular and semibold, Literata regular, and IBM Plex Mono regular. The hierarchy pairs measured sans-serif headings with a generous serif reading line.

### Hierarchy

- **Display:** frontmatter display role for overview titles; reference titles use the smaller reference-title role.
- **Headline / Title:** frontmatter headline and title roles for sections and skill groups. Stack-source headings use a compact Poppins semibold size (19px).
- **Lead / Body:** frontmatter lead and body roles; ordinary article prose is limited to a readable measure (68ch).
- **Label:** contents use the label role; skill names use regular Poppins (14px, line-height 1.6). Supporting controls use Poppins (11–13px).
- **Technical:** command role in the frontmatter; inline code scales with its surrounding text (.875em).

At the mobile breakpoint, the overview title becomes (44px), reference titles (32px), section headings (23px), and leads (20px). Introductory supporting paragraphs become (15px); the general body remains (16px).

**The Three Voices Rule.** Use Poppins for structure and controls, Literata for explanation, and IBM Plex Mono for commands and package identifiers.

## Layout

The centered shell has a maximum outer width (1088px) and desktop horizontal padding (36px). The reading grid uses a contents column (190px), gap (64px), and a flexible main column capped at (720px). The shell's padding means the actual main width at the shell maximum is (762px before the main cap); the cap governs the text rather than forcing a fixed column. Contents stick below the viewport top (36px).

Chapter spacing uses (64px), groups and reference sections (44px), and paragraph spacing (20px). Flat skill rows use a name column (185px), flexible summary, arrow column (18px), and gaps (22px). They have generous vertical padding rather than separate card containers.

At (820px) and below, shell padding becomes (28px), the rail (150px), and the gap (36px); skill summaries move beneath their names. At (640px) and below, the shell uses (24px) padding, navigation sits above one reading column, the sticky rail becomes static, and the secondary reference navigation is hidden. The command copy control moves below its wrapping command. Mobile contents retain text links and mark the current item with an underline.

## Elevation & Depth

There are no box shadows. Background and Surface provide subtle material separation; one-pixel borders organize chapters, reference notes, source sections, and skill rows. Commands reverse onto Ocean with Lantern text.

**The Ruled Surface Rule.** Use fine borders, spacing, and tonal paper to separate content; this surface has no box shadows.

## Shapes

Rows and source sections remain flat and square. Prompts, command blocks, and the theme control use the control radius; copy controls use the smaller copy radius. The focus outline has the focus radius. SVG arrows and control icons are stroked, unfilled, and inherit their context's text color; they are drawn paths rather than glyph characters.

## Components

### Theme and copy controls

The theme control is a transparent square target (44px), bordered with Muted, and filled with Surface on hover. Pressing it uses the selection colors. It exposes its appearance state and saves the preference when browser storage is available.

Copy controls are outlined against the reversed command surface, with a minimum target height (44px) and width (80px). Hover reverses their foreground and background. Successful copying changes the label to “Copied” and announces success; failure selects the command, changes the label to “Select text”, and announces keyboard copying. The common keyboard outline is (2px), offset (5px); copy controls use Lantern focus inside the dark command surface.

### Navigation and text links

Contents use muted Poppins labels, current-item semibold emphasis, and a fine vertical reading marker. The marker follows overview/skills reading location and uses the route's section on reference and stack pages. Its transform transition lasts (260ms), using the recorded ease-out curve. React Router keeps the header, contents navigation, footer, and appearance state mounted across pages. Pointer navigation uses a native view transition: the reading pane fades out over (140ms), and the next chapter reveals over (260ms) with a (14px) vertical offset. Returning to the collection uses a (-10px) offset. A selected skill name shares its transition with the reference heading. Keyboard navigation, reduced-motion preferences, and browsers without native view transitions use immediate client navigation. Appearance restores before the first paint. Mobile hides the marker and underlines the current label. Main contents and header controls keep targets at least (44px) high; the denser stack identifier links use their observed smaller height (28px).

Reference navigation is a second ruled list of package names. Text links pair an underline or quiet label with an inline SVG arrow and remain visibly focused from the keyboard.

### Skill rows

Each full-width row is one link, with name, muted explanation, and a small arrow. One-pixel rules separate rows. Hover underlines the name, moves it to the link-hover color, and strengthens the summary to Ink. On narrower screens, the explanation moves below the name while the arrow stays alongside it.

### Prompt and command surfaces

Prompts are gently rounded Surface blocks with a fine Border and comfortable inset. Commands are rounded Ocean blocks with Lantern monospace text and an outlined copy control. Commands wrap anywhere when needed; on mobile the button occupies its own row.

### Source sections and footer

Stack sources use a heading, original-source link, and a wrapping monospace list of skill identifiers, separated by fine rules. Atlas identifiers link to local references; independent identifiers remain readable text beside their original-source link.

Skill pages with upstream lineage include a “Built on” section before Atlas source links. A short paragraph explains the relationship, followed by flat ruled rows pairing the original reference with its author. Both use Poppins at (14px); authors use Muted. Reference links retain (44px) targets and wrap naturally on narrow screens. A quiet sentence credits an intermediary collection where the source receipt records one. Pages without recorded upstream sources omit this section.

The footer places the approved Thelu master at a small signature size (44px desktop, 36px mobile), beside “A tool from the Logbook for Devs” and “Charting the technical seas, one commit at a time.” Its muted typography and source link remain subordinate to reading content.

## Do's and Don'ts

### Do:

- **Do** preserve the implemented Walnut day/night semantic pairings.
- **Do** use the three font roles and maintain the reading measure.
- **Do** preserve visible keyboard focus, current-location semantics, and reduced-motion behavior.
- **Do** use the approved Thelu master and the exact attribution and tagline.

### Don't:

- **Don't** promote unused brand colors, handwriting, fields, chips, or cards into this surface's component vocabulary.
- **Don't** replace flat reference rows with decorative elevation when extending this reading surface.
- **Don't** let technical commands overflow the narrow reading column.
