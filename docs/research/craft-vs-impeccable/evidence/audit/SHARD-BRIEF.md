# Audit shard brief (shared by all shards)

You are one shard of a skill audit for a design-skill benchmark. Read-only everywhere except your one output file.

Reading rule (a previous attempt failed because long file dumps got truncated):
- Read each assigned file in chunks of at most 200 lines: `nl -ba FILE | sed -n '1,200p'`, then `'201,400p'`, etc., until the end. Check `wc -l FILE` first and make sure you reach the last line.
- Do not `cat` multiple files at once. Do not rely on grep alone.
- In your ledger, record for each file: line count, and "read lines 1–N (complete)".

Output: one markdown file at the path in your task, with:
1. Ledger: every assigned file, line count, read confirmation, one-line summary.
2. Rules by pillar, only for pillars your files touch: Color, Typography, Layout/hierarchy, Accessibility, States/polish, Copy, Motion, UX/direction. Each rule: concrete, checkable wording with exact numbers/thresholds/bans, then `relative/path.md:LINE`. Prefer decision-relevant rules over restating headings. 5–25 rules per touched pillar.
3. Refusals, scope limits, "ask first", routing elsewhere — with citations.
4. Process obligations (what must happen before/after edits, verification) — with citations.
5. Depth notes: 1–2 sentences per touched pillar on depth vs thinness *within your files*.

Do not read files outside your assignment except to resolve a link the assigned file depends on (note it). Never read the competing skill. Line numbers must be real. If you cannot finish a file, say exactly which lines are missing — do not claim completion.
