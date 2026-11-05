# Explaining bugs

Explain the bug through **expected versus actual behavior**, using the diagnosis evidence already collected. Investigate only what is missing for the explanation. An explanation request does not authorize repairs.

Establish the expected behavior from the agreed requirements, tests or user intent, and the actual behavior from a reproduction, trace or source evidence. State uncertainty where either is unresolved. Keep a suspected cause visibly separate from a demonstrated cause.

Use a small Mermaid flowchart or sequence diagram to show both paths with matching names and a clear point of divergence. Label events and effects in the user's domain language. Include only the actors, values and transitions needed to explain the failure; for a simple value mismatch, a short before/after comparison may be clearer than a graph.

Render diagrams to SVG with the `pele` npm library, following its [API](https://pele.run/api). Use a scratch installation outside the product repository when needed. Keep the Mermaid source beside the SVG so it can be revised. Inspect the rendered result for legibility, cropping and whether the divergence is clear, then show it inline when the host supports it or provide a file link. If rendering is unavailable, report that gap and give the written comparison without substituting ASCII art.

Pair the visual with a short explanation of the trigger, the difference and its consequence. Connect a supported cause to the divergence. If a repair is proposed or already applied, distinguish its intended effect from behavior actually rechecked against the original symptom. The diagram explains the evidence; rendering it supplies no additional proof.
