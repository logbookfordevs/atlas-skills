---
name: principle-fix-root-causes
description: "Apply when debugging. Trace each symptom to its root cause and fix it there; reproduce first, ask why until you reach it, resist nil-check guards that silence crashes."
disable-model-invocation: true
---

# Fix Root Causes

When debugging, do not fix symptoms. Trace every problem to its root cause and fix it there.

**Why:** Symptom fixes accumulate. Each workaround makes the system harder to reason about, and the real bug remains. Root-cause fixes are slower upfront but reduce total debugging time.

**Pattern:**
- Reproduce first
- Ask "why" until you hit the root cause
- Fix the cause rather than hiding a broken invariant; retain guards that enforce actual boundary or safety requirements
- Investigate complex workarounds; preserve enduring invariant or external-contract comments when the constraint cannot be encoded safely
- Check for the pattern, not just the instance (search for the same pattern and repair instances within the authorized scope)
- When stuck, instrument. Don't guess (add logging, read the actual error)
- If the deciding fact took a deep dig to find, propose the cheap, always-on signal that would have shown it at first look

**Restart bugs: suspect state before code**

When something "fails after restart," suspect stale persistent state first: config files, caches, lock files, serialized state. If clearing a state file restores behavior, prioritize state validation as the fix.
