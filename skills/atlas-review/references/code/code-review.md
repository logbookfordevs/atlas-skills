---
name: code-review
description: "Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to \"review since X\"."
---

Two-axis review of the requested branch, PR, commit, or working-tree changes:

- **Standards**: does the code conform to this repo's documented coding standards?
- **Spec**: does the code faithfully implement the originating issue / spec?

Both axes run as **parallel sub-agents** so they don't pollute each other's context, then this skill aggregates their findings. Start every sub-agent with a fresh context window.

## Process

### 1. Pin the review scope

Use the scope the user or PR metadata supplies; ask only when materially different interpretations remain.

- **Branch or PR:** capture `git diff <base>...HEAD` (three-dot, so the comparison is against the merge-base) and the commits via `git log <base>..HEAD --oneline`.
- **Commit:** inspect that commit's change; resolve the intended parent for a merge commit.
- **Working tree:** include staged (`git diff --cached`), unstaged (`git diff`) and relevant untracked files (`git ls-files --others --exclude-standard`). Git diffs omit untracked files, so read their contents directly.

Record the exact comparison commands and file inventory. Before going further, confirm refs resolve and the scope is non-empty. A bad ref or empty scope should fail here, not inside two parallel sub-agents. An empty tracked diff alone does not make a working-tree scope empty.

### 2. Identify the spec source

Look for the originating spec, in this order:

1. Issue references in the commit messages (`#123`, `Closes #45`, GitLab `!67`, etc.), PR metadata, branch names, or user-provided context.
2. A path the user passed as an argument.
3. A spec under the repository's artifact convention, `docs/`, `specs/`, or `.scratch/` matching the branch name or feature.
4. Use the user's request as intent when available. If no spec or intent source is found, run Standards and report the Spec coverage gap; ask only when missing intent prevents a material judgment.

When the change implements a tracked ticket, include its tracking record and follow its source references to the originating material. The originating material is authoritative for intent; the ticket's requirements declare the slice's scope; its implementation and evidence statements are claims to substantiate against the diff, code and available evidence.

### 3. Identify the standards sources

Search the repo for every file that documents how code should be written. When `AGENTS.md`, `CLAUDE.md`, `CODING_STANDARDS.md` or `CONTRIBUTING.md` exists, it must be on the list.

On top of whatever the repo documents, the Standards axis always carries the **smell baseline** below: a fixed set of Fowler code smells (_Refactoring_, ch.3) that applies even when a repo documents nothing. Two rules bind it:

- **The repo overrides.** A documented repo standard always wins; where it endorses something the baseline would flag, suppress the smell.
- **Always a judgement call.** Each smell is a labelled heuristic ("possible Feature Envy"), never a hard violation. Like any standard here, skip anything tooling already enforces.

Each smell reads *what it is* → *how to fix*; match it against the diff:

- **Mysterious Name**: a function, variable, or type whose name doesn't reveal what it does or holds. → rename it; if no honest name comes, the design's murky.
- **Duplicated Code**: the same logic shape appears in more than one hunk or file in the change. → extract the shared shape, call it from both.
- **Feature Envy**: a method that reaches into another object's data more than its own. → move the method onto the data it envies.
- **Data Clumps**: the same few fields or params keep travelling together (a type wanting to be born). → bundle them into one type, pass that.
- **Primitive Obsession**: a primitive or string standing in for a domain concept that deserves its own type. → give the concept its own small type.
- **Repeated Switches**: the same `switch`/`if`-cascade on the same type recurs across the change. → replace with polymorphism, or one map both sites share.
- **Shotgun Surgery**: one logical change forces scattered edits across many files in the diff. → gather what changes together into one module.
- **Divergent Change**: one file or module is edited for several unrelated reasons. → split so each module changes for one reason.
- **Speculative Generality**: abstraction, parameters, or hooks added for needs the spec doesn't have. → delete it; inline back until a real need shows.
- **Message Chains**: long `a.b().c().d()` navigation the caller shouldn't depend on. → hide the walk behind one method on the first object.
- **Middle Man**: a class or function that mostly just delegates onward. → cut it, call the real target direct.
- **Refused Bequest**: a subclass or implementer that ignores or overrides most of what it inherits. → drop the inheritance, use composition.

### 4. Spawn both sub-agents in parallel

Issue both sub-agent calls together, in the foreground, and aggregate the reports they return.

Choose both reviewers with Team Up's selection policy, including its preference for a reviewer from another model family than the lead. Size each axis separately: Standards is a rule-and-smell pass, while Spec traces behavior, reconciles requirements and judges correctness, so Spec gets the stronger reviewer. Read-only access or a high effort setting alone does not make a reviewer suitable.

**Standards sub-agent prompt** should include:

- The exact comparison commands, commit list and file inventory, including relevant untracked files.
- The list of standards-source files you found in step 3, **plus the smell baseline from step 3** pasted in full (the sub-agent has no other access to it).
- The brief: "Report, per file/hunk where relevant, (a) every place the diff violates a documented standard: cite the standard (file + the rule); and (b) any baseline smell you spot: name it and quote the hunk. Check added or changed comments against the repository's comment policy. Distinguish hard violations from judgement calls: documented-standard breaches can be hard, but baseline smells are always judgement calls, and a documented repo standard overrides the baseline. Skip anything tooling enforces. Under 400 words."

**Spec sub-agent prompt** should include:

- The exact comparison commands, commit list and file inventory, including relevant untracked files.
- The path or fetched contents of the spec and, when present, the implementation ticket and its tracking record.
- The brief: "Report: (a) requirements the spec or ticket asked for that are missing or partial; (b) behaviour in the diff that wasn't asked for (scope creep); (c) requirements that look implemented but where the implementation looks wrong; (d) requirements lost or distorted between the originating material and the ticket, excluding those assigned to other tickets or deliberately outside this slice; (e) claims in `Changes and Decisions`, `Execution Evidence`, `Complete Review Record` or equivalent tracking fields that the diff, code or evidence doesn't support. Quote the spec line or tracking-record section for each finding. Under 400 words."

If no spec or other intent source exists, skip the Spec sub-agent and note this in the final report.

### 5. Aggregate

Present the two reports under `## Standards` and `## Spec` headings, verbatim or lightly cleaned. Do **not** merge or rerank findings, because the two axes are deliberately separate (see _Why two axes_).

End with a one-line summary: total findings per axis, and the worst issue _within each axis_ (if any). Don't pick a single winner across axes: that's the reranking the separation exists to prevent.

## Why two axes

A change can pass one axis and fail the other:

- Code that follows every standard but implements the wrong thing → **Standards pass, Spec fail.**
- Code that does exactly what the issue asked but breaks the project's conventions → **Spec pass, Standards fail.**

Reporting them separately stops one axis from masking the other.
