# Interaction Systems

Read for synchronized sequences, scroll choreography, progress gestures, deep links, or replay.

## One spine

Choose the authority that best matches the class of work:

- **Semantic state** for UI choreography: a reducer or state machine owns named states and transitions.
- **Timeline time** for a bounded authored sequence: one timeline owns ordering and labels.
- **Normalized progress** for a long scrubbed experience: input updates a target; the render loop eases the current value toward it.

All dependent systems read from the authority. Avoid separate timers for DOM, WebGL, sound, and loading; drift between clocks breaks causality.

Keep native scroll for ordinary document navigation. A virtual progress spine earns its complexity only when scenes, loading, shaders, overlays, and gates must share an exact authored position. When virtualizing:

- map wheel, touch, keyboard, and assistive controls into one input adapter;
- expose a skip or simplified path;
- restore position intentionally across navigation and reload;
- pause on hidden tabs and recover without a jump;
- preserve selectable content, focus order, history, and a useful document structure;
- reduce smoothing or switch to discrete beats for reduced motion.

## Segment contract

Give each segment a local `0..1` range and explicit lifecycle. A representative contract is:

```ts
interface MotionSegment<Context> {
  span: number;
  enter(context: Context): void | Promise<void>;
  scrub(context: Context, progress: number): void;
  update?(context: Context, time: number, delta: number): void;
  teardown(context: Context): void;
}
```

- `enter` acquires resources and creates owned objects.
- `scrub` is deterministic for any local progress value.
- `update` supplies bounded idle motion that is not progress-derived.
- `teardown` disposes owned resources and transfers only explicit shared state.

Map global progress into exactly one active local range. Keep persistent elements—camera, renderer, navigation, shared audio bus—above segment ownership.

### Deterministic seeking

Jumping forward must reproduce the state reached by natural traversal. Either:

1. replay preceding lifecycle boundaries in fast deterministic mode, or
2. restore a complete checkpoint whose version matches the segment graph.

Never teleport into a segment that assumes earlier side effects. Test direct entry to every public deep link and debug jump target.

## Gates as progress primitives

A gate pauses or redirects the spine while a separate normalized interaction value moves from `0..1`. Share the mechanism; customize its interpretation.

```ts
interface ProgressGate<Context> {
  revealAt: number;
  duration: number;
  onProgress(context: Context, progress: number): void;
  onCommit(context: Context): void;
  onCancel?(context: Context): void;
}
```

The mechanism owns pointer capture, keyboard parity, cancellation, blur, reduced-motion behavior, and threshold logic. The visual owner owns color, geometry, camera, sound, copy, and the consequence.

Design all five moments:

1. **Invitation** — the affordance becomes discoverable.
2. **Contact** — input is acknowledged immediately.
3. **Accumulation** — progress remains legible and interruptible.
4. **Commit** — a sharp causal event rewards completion.
5. **Release** — control returns without a stuck state.

Tune the commit by contrast. A deliberate buildup followed by a short visual snap often feels stronger than uniformly smooth timing. Measure the rendered result; milliseconds alone do not describe the feel.

## Semantic gesture recognition

For expressive input, recognize the meaning with a small set of invariant features. A closed-loop gesture might combine:

- accumulated signed turn, proving the path winds around a center;
- radial variation, rejecting highly irregular scribbles;
- endpoint distance relative to average radius, proving closure.

Normalize thresholds by viewport, input type, and path scale. Show live feedback before acceptance, tolerate human variation, and provide an equivalent button or key action. Gesture recognition is a gate, not a biometric test.

## Render-anchored synchronization

Tie feedback to the event the user perceives:

- Schedule critical sound from the first frame that visibly contains the impact.
- Trigger haptics from the committed state transition.
- Derive captions, overlays, and WebGL effects from the same progress value.
- Use animation events, render-loop acknowledgements, or audio clock scheduling where precision matters.

A wall-clock timeout is acceptable for ambient or approximate cues. It is weak for an impact whose first render can be delayed by shader compilation, asset upload, or a slow frame.

## Interruption model

Specify behavior for reversal, rapid repeated input, focus loss, resize, route change, and reduced-motion changes. Prefer one of three policies per transition:

- **Reversible** — progress follows input backward without residue.
- **Completing** — after a commit threshold, finish once and ignore duplicates.
- **Cancelable** — return to a named stable state and release resources.

Implicit mixtures produce stuck gates and double-fired effects.

## Acceptance matrix

For every segment and gate, verify:

- natural forward and backward traversal;
- direct entry and replay;
- pointer, touch, and keyboard paths;
- cancellation and rapid re-entry;
- resize and orientation change;
- background then foreground recovery;
- slow loading and missing optional media;
- reduced motion and muted sound;
- lowest fidelity tier;
- semantic content without the rendered world.
