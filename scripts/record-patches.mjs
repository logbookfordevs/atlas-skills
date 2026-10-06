import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { repositoryRoot, sha256 } from './build-skills.mjs';

export function recordPatches(root = repositoryRoot, sourceId) {
  const manifest = JSON.parse(readFileSync(join(root, 'sources/composition.json')));
  const sources = manifest.sources.filter(source => source.classification === 'patched' && (!sourceId || source.id === sourceId));
  if (!sources.length) throw new Error(`No patched source selected: ${sourceId ?? 'all'}`);
  const writes = [];
  for (const source of sources) {
    const original = readFileSync(join(root, source.snapshot));
    if (sha256(original) !== source.sourceSha256) throw new Error(`Snapshot integrity failure: ${source.id}`);
    const temporary = mkdtempSync(join(tmpdir(), 'atlas-record-patch-'));
    try {
      mkdirSync(join(temporary, 'old')); mkdirSync(join(temporary, 'new'));
      writeFileSync(join(temporary, 'old/source.md'), original);
      writeFileSync(join(temporary, 'new/source.md'), readFileSync(join(root, source.method)));
      let diff;
      try { diff = execFileSync('git', ['diff', '--no-index', '--no-ext-diff', '--no-color', '--', 'old/source.md', 'new/source.md'], { cwd: temporary, encoding: 'utf8' }); }
      catch (error) { if (error.status !== 1) throw error; diff = error.stdout; }
      if (!diff) throw new Error(`Source matches upstream; register it as verbatim: ${source.id}`);
      diff = diff.replaceAll('a/old/source.md', 'a/source.md').replaceAll('b/new/source.md', 'b/source.md');
      writeFileSync(join(temporary, 'source.md'), original);
      execFileSync('git', ['apply', '--no-index', '-'], { cwd: temporary, input: diff });
      if (!readFileSync(join(temporary, 'source.md')).equals(readFileSync(join(root, source.method)))) throw new Error(`Patch replay mismatch: ${source.id}`);
      writes.push([source.patch, diff]);
    } finally { rmSync(temporary, { recursive: true, force: true }); }
  }
  for (const [path, diff] of writes) { mkdirSync(dirname(join(root, path)), { recursive: true }); writeFileSync(join(root, path), diff); }
  return sources.map(source => source.id);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.stdout.write(`Recorded patches: ${recordPatches(repositoryRoot, process.argv.slice(2).find(argument => argument !== '--')).join(', ')}\n`);
}
