# Checkpoint review selection

Use Standards & Spec as the baseline for every checkpoint. Select additional Atlas Review methods when the actual change raises a question they address. Before dispatch, record each selected method, its review question and the affected scope in Complete Review Record. Read Atlas Review's entry and selected method instructions for execution.

| Change or uncertainty | Additional method | Question to make concrete for this checkpoint |
| --- | --- | --- |
| A changed user-facing screen or flow, including copy or interaction | Interface Changes | Did this diff introduce or worsen usability, accessibility, hierarchy, copy or responsive behavior? |
| Changed animation, transition or gesture behavior | Motion | Does the changed motion handle timing, interruption, physical response and reduced motion appropriately? |
| Shared contracts, persistence, permissions or widely used modules with downstream consumers | Impact | Which callers, saved data or workflows depend on the changed assumptions, and could they break? |
| A decision with substantial unresolved uncertainty whose failure would expose data, lose or corrupt it, create a hard-to-reverse migration, or commit many consumers to an expensive architectural choice | Adversarial | Which important assumption might be wrong, and what failure would ordinary review miss? |

Select on the changed behavior and a concrete review question, not file extensions or labels. A frontend tooling edit does not by itself select Interface Changes; touching a component without changing its motion does not select Motion. Several additional methods can apply when they answer distinct questions. Routine lint and typechecks stay in validation; broad Interface Audit and Motion Audit require their own requested survey scope.

For Adversarial, record both the consequence and the unresolved assumption. A local rename or easily reversed styling choice does not meet that condition merely because every change carries some uncertainty.

Use the same checkpoint identity across reviews, with scopes matched to their questions. Preserve the Standards and Spec reports separately from specialist findings. Reuse evidence where it answers the same question; do not count one review's completion as proof that another selected method ran. Report unavailable tools, inspection or independent contexts as coverage gaps under the main skill's gate policy.
