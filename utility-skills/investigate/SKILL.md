---
name: investigate
description: "Give a short first analysis of a ticket or issue: what it asks, what the code does today and what a change would touch."
disable-model-invocation: true
---

# Investigate

Build a short first analysis of the ticket, grounded in the code as it is today.

1. Read the ticket, its comments and linked tickets. Reuse any existing diagnosis or recommendation as a lead and verify it rather than repeating it.
2. Explain the current state:
   - For a bug, use Atlas Debug's Explaining bugs method: expected versus actual, and where they split.
   - For other work, use Atlas Explain's How method on the area the ticket touches.

   Check every cited `file:line` against current code; mark each claim as verified or suspected.
3. When other code or repositories may read what changes, use Atlas Review's Impact method to say whether the change is local or needs consumer changes.
4. When the ticket carries a recommendation, say which parts hold, which do not apply, and why.

Keep the answer short: the verdict first, then the evidence. Add one visual when it explains faster than prose. When diagnoses conflict and the code cannot settle them, or acting on an unverified cause would be costly, suggest Challenge. Investigation keeps code and external records read-only.
