const identifier = /^[a-z][a-z0-9-]+$/;

export function setupDependencies(composition, catalog) {
  const packages = new Set(composition.workflows.map(workflow => workflow.id));
  const items = new Map(catalog.items.map(item => [item.id, item]));
  const dependencies = new Map();
  const repository = source => source.split('#')[0].replace(/\/$/, '');
  for (const workflow of composition.workflows) {
    for (const dependency of workflow.dependencies ?? []) {
      if (dependency.relationship !== 'behavioral' || packages.has(dependency.id)) continue;
      const item = items.get(dependency.id);
      if (!item) throw new Error(`Missing dependency catalog entry: ${workflow.id}/${dependency.id}`);
      if (repository(item.source) === repository(catalog.defaultSource)) continue;
      if (!identifier.test(dependency.id) || typeof dependency.required !== 'boolean' || !dependency.condition?.trim()) {
        throw new Error(`Invalid setup dependency: ${workflow.id}/${dependency.id}`);
      }
      if (!/^https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(?:#[a-zA-Z0-9_./-]+)?$/.test(item.source)) {
        throw new Error(`Unsupported setup source: ${dependency.id}`);
      }
      const selectors = item.args.flatMap((argument, index) => argument === '--skill' ? [item.args[index + 1]] : []);
      if (selectors.length !== 1 || !identifier.test(selectors[0])) throw new Error(`Invalid setup skill selector: ${dependency.id}`);
      const entry = dependencies.get(dependency.id) ?? {
        id: dependency.id, source: item.source, skill: selectors[0],
        command: `npx skills add ${item.source} --skill ${selectors[0]}`, consumers: [],
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
