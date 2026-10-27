---
name: mobile-native
description: Diagnose mobile web browser behavior: viewport and keyboard overlap, tap feedback, scroll ownership and browser or PWA chrome.
---

# Mobile Web

Match the reported symptom, apply the relevant platform fix within the requested scope, and distinguish code inspection from device verification. This reference concerns mobile web behavior; React Native is outside its scope. Preserve accepted project identity and platform affordances unless the actual interaction warrants changing them.

## Existing domain owners

Consult the relevant bundled method rather than establish competing defaults:

| Need | Owner |
| --- | --- |
| Input sizing and useful text selection | [Type](../type/index.md) |
| Input modes, autocomplete, zoom and accessible activation | [Accessibility](../accessibility/index.md) |
| Safe areas, responsive sizing and native scrolling layouts | [Layout](../layout/index.md) |
| Scroll containment and control surfaces | [UI Polish](../ui/index.md) |
| Hover gating, press feedback and custom gesture physics | [Motion ownership](../motion-ownership.md) |

Keep content selectable. Suppress selection or the native long-press callout only where it demonstrably interferes with a custom gesture; copying a button label is not by itself a defect. A review request remains read-only toward product code.

## Symptom guide

| Symptom | Inspect |
| --- | --- |
| Hover appearance sticks after a tap | Capability-gated hover in Animate; preserve touch press feedback |
| Browser tap highlight conflicts with custom feedback | Tap feedback below |
| Browser toolbar hides or shifts content | Dynamic versus stable viewport below |
| Keyboard hides a field or action | Layout versus visual viewport below |
| Input focus zooms the page | Type's input-size rule; keep zoom available |
| A tap feels slow | Immediate visual feedback and native activation below |
| Inner scrolling moves the page or triggers refresh | Scroll ownership below |
| Controls overlap the notch or home indicator | Layout's safe-area rules |
| A carousel fights page scrolling | Gesture axes below |
| Browser or PWA chrome disagrees with the theme | Browser chrome below |

## Tap feedback and activation

Use native activation events and immediate visual feedback such as `:active`. A `pointerdown` handler may show feedback; committing an ordinary action on press removes the user's normal opportunity to cancel by moving away before release. Retain keyboard activation and cancellation behavior. See [Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html).

A browser tap highlight is feedback. Remove it only when it conflicts with deliberate, visible replacement feedback; scope the change to the affected controls:

```css
.custom-feedback-control {
  -webkit-tap-highlight-color: transparent;
}
```

When a measured tap delay remains with a correct `width=device-width` viewport, consider `touch-action: manipulation` on the affected control. It preserves panning and pinch zoom while disabling double-tap zoom there. Avoid blanket gesture changes merely because the page targets mobile.

## Dynamic versus stable viewport

Use `100dvh` for an app surface that should track browser-toolbar changes. Use `100svh` for a hero or first screen that should remain stable as browser chrome collapses. Preserve document flow and scrolling; choose a minimum, maximum or fixed height according to the actual layout. Keep a `vh` fallback only when the project's browser support requires it.

The software keyboard is a separate concern. It can shrink the **visual viewport** without resizing the **layout viewport**, so `dvh` alone does not guarantee keyboard clearance. Check the target browser with the keyboard open, including fixed headers, bottom actions and the focused input. Prefer a layout that can scroll the focused content into view.

Where supported, `interactive-widget=resizes-content` opts into resizing the layout viewport for the keyboard. Preserve the existing viewport settings when adding it and verify the behavior in the supported browsers. If the product needs explicit keyboard-aware positioning, evaluate the browser's Visual Viewport or VirtualKeyboard APIs and their support rather than assume a universal CSS fix. See [Chrome's viewport behavior](https://developer.chrome.com/blog/viewport-resize-behavior).

## Scroll ownership

Use `overscroll-behavior: contain` on an inner scroller when reaching its edge should not scroll the page behind it. Preserve native document scrolling and pull-to-refresh where they are useful. Root-level `overscroll-behavior: none` is an app-shell decision for a demonstrated conflict, such as a canvas or custom sheet gesture, not a site-wide reset.

For native scrolling carousels, prefer scroll snapping and browser physics. For custom gestures, `touch-action` names what the browser keeps:

| Custom gesture owns | Browser may keep |
| --- | --- |
| Horizontal dragging | `pan-y pinch-zoom` |
| Vertical dragging | `pan-x pinch-zoom` |

Use `touch-action: none` only where the custom surface truly owns the relevant gestures and accessible alternatives remain available. Handle pointer cancellation when the browser takes over a gesture. Do not block page scrolling through a blanket `touchmove` listener.

## Browser chrome and installed PWAs

Match browser chrome to the actual page surface, usually the header background, rather than automatically use the brand accent. For an OS-following theme, supported browsers can select scheme-specific tags:

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a">
```

Use project colors. If the app's theme overrides the OS, update the active theme-color metadata to follow the app. Declare only color schemes the interface actually supports. For an installed PWA, reconcile manifest `theme_color` and `background_color` with the launch experience. Platform-specific status-bar settings have their own supported values and behavior; they are not interchangeable with theme colors.

Preserve the existing framework's metadata mechanism. Diagnose unwanted landscape text inflation before applying `text-size-adjust`; avoid global resets by habit.

## Device verification and handoff

Desktop emulation is useful for layout but incomplete for browser chrome, keyboard, touch behavior and installed PWA presentation. Check a supported physical phone, with the keyboard open and in landscape; include standalone mode when the product targets it. Use Safari Web Inspector or Chrome remote debugging when available. A simulator or CPU-throttled desktop is a partial substitute, not proof of every phone behavior.

Report briefly:

- The symptom, its cause and the declarations changed or proposed.
- What was observed on a device versus inferred from code or emulation.
- What still needs a phone, including the affected browser or PWA context.

Missing device access is a verification gap. It does not turn an unobserved fix into a verified one.
