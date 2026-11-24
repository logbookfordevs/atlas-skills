---
name: scout
description: "Give a short first analysis of a ticket or issue: what it asks, what the code does today and what a change would touch."
disable-model-invocation: true
---

Read the ticket, comments and any history you can reach, then show me what's going on with big pictures and little words. Use your own taste, avoid lazy design. When you do use prose/detail: be concise/terse, and avoid jargon. Treat any diagnosis or recommendation already on the ticket as a lead: verify it, and say which parts hold. When a bug arrives with no lead, find the cause with `diagnosing-bugs`. Otherwise trace the area with `atlas-explain` How.

Tell me if it's ready to tackle or needs refinement. Mention any gap as an open question, blocking or not. If the clinical picture is incomplete, diagnoses conflict, and the code can't settle it, suggest Challenge.