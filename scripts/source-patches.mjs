import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export function replayPatch(original, patch) {
  const temporary = mkdtempSync(join(tmpdir(), 'atlas-replay-'));
  try {
    writeFileSync(join(temporary, 'source.md'), original);
    execFileSync('git', ['apply', '--no-index', '-'], { cwd: temporary, input: patch, stdio: ['pipe', 'pipe', 'pipe'] });
    return readFileSync(join(temporary, 'source.md'));
  } finally { rmSync(temporary, { recursive: true, force: true }); }
}

export function createPatch(original, maintained) {
  const temporary = mkdtempSync(join(tmpdir(), 'atlas-record-'));
  try {
    writeFileSync(join(temporary, 'old.md'), original);
    writeFileSync(join(temporary, 'new.md'), maintained);
    let diff;
    try { diff = execFileSync('git', ['diff', '--no-index', '--no-ext-diff', '--no-color', '--', 'old.md', 'new.md'], { cwd: temporary, encoding: 'utf8' }); }
    catch (error) { if (error.status !== 1) throw error; diff = error.stdout; }
    if (!diff) throw new Error('Maintained file matches upstream; remove its patch registration.');
    diff = diff.replaceAll('a/old.md', 'a/source.md').replaceAll('b/new.md', 'b/source.md');
    if (!replayPatch(original, diff).equals(maintained)) throw new Error('Patch replay mismatch');
    return diff;
  } finally { rmSync(temporary, { recursive: true, force: true }); }
}
