import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { repositoryRoot, sha256 } from './build-skills.mjs';
import { createPatch } from './source-patches.mjs';

export function recordPatches(root = repositoryRoot, sourceId) {
  const manifest = JSON.parse(readFileSync(join(root, 'sources/composition.json')));
  const sources = manifest.sources.filter(source => source.classification === 'patched' && (!sourceId || source.id === sourceId));
  if (!sources.length) throw new Error(`No patched source selected: ${sourceId ?? 'all'}`);
  const writes = [];
  for (const source of sources) {
    const files = [...(source.patch ? [source] : []), ...(source.supportingFiles ?? []).filter(file => file.method || file.patch)];
    if (!files.length) throw new Error(`Missing patch registration: ${source.id}`);
    for (const file of files) {
      if (!file.method || !file.patch) throw new Error(`Incomplete patch registration: ${source.id}`);
      const snapshot = readFileSync(join(root, file.snapshot));
      if (sha256(snapshot) !== file.sourceSha256) throw new Error(`Snapshot integrity failure: ${source.id}/${file.relativePath ?? 'entry'}`);
      writes.push([file.patch, createPatch(snapshot, readFileSync(join(root, file.method)))]);
    }
  }
  for (const [path, diff] of writes) { mkdirSync(dirname(join(root, path)), { recursive: true }); writeFileSync(join(root, path), diff); }
  return sources.map(source => source.id);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.stdout.write(`Recorded patches: ${recordPatches(repositoryRoot, process.argv.slice(2).find(argument => argument !== '--')).join(', ')}\n`);
}
