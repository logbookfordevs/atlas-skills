---
name: atlas-mode
description: "Work in Atlas Mode: apply the collection's skills and inner methods throughout the task."
disable-model-invocation: true
---

# Atlas Mode

Work in Atlas Mode for this task and its follow-ups until the user exits it. Take responsibility for choosing and applying the Atlas methods the work needs. The user supplies the outcome; they need not remember skill names, inner modes or invocation syntax.

## Working in the mode

1. Establish the outcome from the conversation and inspect the relevant project context. If invoked without a task, ask what the user wants to work on.
2. Read [Methods](references/methods.md), identify the applicable skills and inner methods, and briefly state the working approach. Resolve selected skills through the host's installed catalog, read their entry instructions and selected references, and perform the work. A recommendation to invoke another skill is not completion of this step.
3. Reconsider the methods at meaningful transitions: an unresolved design decision, implementation ready for checks, material uncertainty in behavior, or recurring session friction. Apply the next relevant method within the task's scope; continue until the requested outcome and selected methods' completion conditions are met. Carry explicit choices and active records into follow-ups rather than restarting the workflow.
4. Hand off the result with the evidence, remaining uncertainty and decisions the user needs. Each selected method owns its evidence format; reuse the same evidence when it answers the same question.

A manually invoked skill remains manual outside Atlas Mode. Inside this explicitly requested mode, select and read its instructions directly when the task calls for it, including Wayfinder, To Spec, To Tickets, Writing for Humans, Retro and Animated-Driven Frontend. Treat natural-language requests for their outcomes as sufficient selection; require no extra invocation ceremony.

Select complementary methods where they address different needs. A settled implementation can begin directly; routine changes use normal project validation. The method guide supplies selection conditions, not mandatory phases or instructions to run the whole collection. Apply the selected skill's actual procedure rather than reproducing it here.

## Scope and choices

Explicit user choices take precedence over inferred selections. Preserve method-level opt-ins: With Docs, Tracking, Audit Trail and Retro Enforce require their requested outcomes in the conversation or an existing active selection. Retain Atlas Explain's chooser when the explanation mode remains unspecified. Atlas Mode's activation alone does not request those outcomes.

Keep the task's authority through transitions: a review stays read-only toward product code and Retro Diagnose stays advisory. Honor existing approval for concrete work without asking again. Follow the selected method's rules for external writes, acceptance and publication.

If a needed skill is unavailable, identify it and the affected work. Continue independent work. Offer targeted installation or a clearly identified fallback, obtaining the user's choice before replacing an explicitly requested method. Use independent companion skills when the task or selected method needs them; Atlas Mode is a working preference, not an exclusivity rule.

Atlas Setup stays outside this mode and requires a separate user request.
