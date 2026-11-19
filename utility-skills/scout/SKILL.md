---
name: scout
description: "Give a short first analysis of a ticket or issue: what it asks, what the code does today and what a change would touch."
disable-model-invocation: true
---

Read the ticket, its comments and linked tickets, then tell me what's going on, checked against the code as it is today. Treat any diagnosis or recommendation already on the ticket as a lead: verify it, and say which parts hold. If it's a bug, explain it the way Atlas Debug's Explaining bugs does, expected versus actual. When a bug arrives with no lead, find the cause with Atlas Debug's diagnosis. Otherwise trace the area with Atlas Explain's How. If other code or repos read what would change, say so (Atlas Review's Impact).

Keep it short and plain: verdict first, then the evidence, in big pictures and little words. Mark what you verified versus what you suspect. Look, don't touch: a diagnosis stops at the cause, leaving the fix to whoever picks up the work. If diagnoses conflict and the code can't settle it, suggest Challenge.
