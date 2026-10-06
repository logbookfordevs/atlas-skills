---
name: atlas-setup
description: Check missing independent dependencies for installed Atlas skills and offer upstream installation commands.
disable-model-invocation: true
---

# Atlas Setup

Read [the dependency registry](references/dependencies.json). Check which listed Atlas packages and independent skills are available to the current host. Use the host’s skill inventory; consult Skills CLI’s installed-skill listing when inventory is incomplete. Distinguish an unavailable skill from one installed but disabled or inaccessible to this host.

For installed Atlas packages, collect missing dependencies and combine repeated entries. Show each upstream source, the affected skill and condition, whether it is required for that path or optional, and its installation command. Exclude dependencies of Atlas packages the user has not installed. If package discovery is unavailable, ask which Atlas skills to prepare.

Ask which missing skills the user wants. Provide the recorded Skills CLI command for each selection. Run installation only when the user authorizes it, using their chosen project or global scope and target agents; consult CLI help for supported options. Keep existing installations intact.

After an authorized installation, check availability to the intended host. Report any remaining gaps, including when a new session or activation is needed. If nothing is missing, say so without reinstalling anything.
