---
name: atlas-figures
description: "Build explanatory figures, interactive objects or illustrated charts in a chosen treatment, or explore seven options."
disable-model-invocation: true
---

# Atlas Figures

When the request or conversation already selects a treatment, read its method and proceed directly. When no treatment is selected, present the full menu below with a short description of each option. Recommend suitable treatments from the user's subject, medium and intended use, explaining the fit, then wait for their choice before loading a method or building a figure. Selection belongs to the user.

| Treatment | Character | Read after selection |
| --- | --- | --- |
| Hairline | Restrained isometric line art; one geometric idea responds to the pointer. | [Create](references/hairline-create/hairline-create.md); for a supplied SVG, start with [Adopt](references/hairline-adopt/hairline-adopt.md) |
| Anatomy | Detailed physical mechanisms that explain technical ideas through moving parts and a shared model. | [Anatomy](references/anatomy/anatomy.md) |
| Engraved Figures | Monochrome scientific plates, wireframes, stippled charts and research posters. | [Engraved Figures](references/engraved-figures/engraved-figures.md) |
| Teardown | Evidence-led technical illustrations, coherent views and exploded assemblies of objects or conceptual layers. | [Teardown](references/teardown/teardown.md) |
| ISO-GLOW | Glowing isometric line art, interactive 3D objects, or solid-lit Lumen illustrations. | [ISO-GLOW](references/iso-glow/iso-glow.md) |
| Colorfigures | Colourful, hand-inked objects with working mechanisms, rotation and see-through views. | [Colorfigures](references/colorfigures/colorfigures.md) |
| Minicharts | Hand-drawn charts where subject objects carry the data, with values drawn to scale and touchable parts. | [Minicharts](references/minicharts/minicharts.md) |

Follow the selected method and its conditional references. Its folder is the method's base directory for assets, scripts and examples; resolve `<skill folder>` there. Keep its visual grammar and engine together. Selecting several treatments means separate variants, unless the user requests a blend. A recommendation alone does not select a treatment.
