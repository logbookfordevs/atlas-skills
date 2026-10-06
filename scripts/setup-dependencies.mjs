const identifier = /^[a-z][a-z0-9-]+$/;

export function setupDependencies(composition, stack) {
  const packages = new Set(composition.workflows.map(workflow => workflow.id));
  const items = new Map();
  for (const group of stack.sources) {
    for (const skill of group.skills) {
      if (items.has(skill)) throw new Error(`Ambiguous setup skill: ${skill}`);
      items.set(skill, { source: group.source, skill });
    }
  }
  const dependencies = new Map();
  for (const workflow of composition.workflows) {
    for (const dependency of workflow.dependencies ?? []) {
      if (dependency.relationship !== 'behavioral' || packages.has(dependency.id)) continue;
      const item = items.get(dependency.id);
      if (!item) throw new Error(`Missing dependency stack selection: ${workflow.id}/${dependency.id}`);
      if (!identifier.test(dependency.id) || typeof dependency.required !== 'boolean' || !dependency.condition?.trim()) {
        throw new Error(`Invalid setup dependency: ${workflow.id}/${dependency.id}`);
      }
      if (!/^https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(?:#[a-zA-Z0-9_./-]+)?$/.test(item.source)) {
        throw new Error(`Unsupported setup source: ${dependency.id}`);
      }
      if (!identifier.test(item.skill)) throw new Error(`Invalid setup skill selector: ${dependency.id}`);
      const entry = dependencies.get(dependency.id) ?? {
        id: dependency.id, source: item.source, skill: item.skill,
        command: `npx skills add ${item.source} --skill ${item.skill}`, consumers: [],
      };
      entry.consumers.push({ skill: workflow.id, required: dependency.required, condition: dependency.condition });
      dependencies.set(dependency.id, entry);
    }
  }
  return {
    version: 1,
    packages: [...packages].filter(id => id !== 'atlas-setup').sort(),
    dependencies: [...dependencies.values()].sort((a, b) => a.id.localeCompare(b.id)),
  };
}
