import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, posix, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { replayPatch } from './source-patches.mjs';
import { buildSkills, repositoryRoot, sha256 } from './build-skills.mjs';

const json = value => `${JSON.stringify(value, null, 2)}\n`;
const portable = value => {
  if (typeof value !== 'string' || value.startsWith('/') || value.split('/').some(part => !part || part === '.' || part === '..') || value.includes('\\')) throw new Error(`Unsafe source path: ${value}`);
  return value;
};
const repository = value => {
  if (!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+(?:\.git)?$/.test(value)) throw new Error(`Unsupported upstream repository: ${value}`);
  return value.replace(/\.git$/, '');
};

export function fetchRevision(url, ref, temporary) {
  repository(url);
  if (!/^[\w./-]+$/.test(ref) || ref.startsWith('-')) throw new Error('Unsafe upstream revision');
  const directory = mkdtempSync(join(temporary, 'git-'));
  const git = args => execFileSync('git', ['--git-dir', directory, ...args], { maxBuffer: 64 * 1024 * 1024, timeout: 120000 });
  execFileSync('git', ['init', '--bare', directory], { stdio: 'pipe' });
  git(['fetch', '--depth=1', '--no-tags', url, ref]);
  const commit = git(['rev-parse', 'FETCH_HEAD']).toString().trim();
  const entries = git(['ls-tree', '-rz', '--full-tree', commit]).toString().split('\0').filter(Boolean);
  const files = new Map();
  for (const entry of entries) {
    const match = entry.match(/^(\d+) (\w+) ([a-f0-9]+)\t(.+)$/s);
    if (!match) throw new Error('Unsupported upstream tree entry');
    portable(match[4]);
    // Load only selected paths later; avoid reading unrelated repository blobs.
    files.set(match[4], () => {
      if (match[2] !== 'blob' || !['100644', '100755'].includes(match[1])) throw new Error(`Unsupported selected upstream mode: ${match[4]}`);
      return git(['cat-file', 'blob', match[3]]);
    });
  }
  return { commit, files };
}

export function inspectSource(source, revision, root = repositoryRoot) {
  if (!/^[a-f0-9]{40}$/.test(revision.commit)) throw new Error('Invalid candidate commit');
  const main = portable(source.upstream.path);
  const base = posix.dirname(main);
  const licensePath = portable(source.upstream.licensePath ?? 'LICENSE');
  const read = name => {
    const value = revision.files.get(name);
    if (!value) throw new Error(`Missing upstream file: ${name}`);
    return typeof value === 'function' ? value() : value;
  };
  const scope = source.upstream.includePaths ?? (base === '.' ? [main, ...new Set((source.supportingFiles ?? []).map(file => file.relativePath.split('/')[0]))] : [base]);
  scope.forEach(portable);
  const within = name => scope.some(prefix => name === prefix || name.startsWith(`${prefix}/`));
  const snapshot = read(main);
  const license = read(licensePath);
  const files = [...revision.files.keys()].filter(name => within(name) && name !== main && name !== licensePath).sort().map(upstreamPath => {
    const relativePath = base === '.' ? upstreamPath : posix.relative(base, upstreamPath);
    portable(relativePath);
    return { relativePath, upstreamPath, bytes: read(upstreamPath) };
  });
  const previous = new Map((source.supportingFiles ?? []).map(file => [file.relativePath, file.sourceSha256]));
  const changed = [];
  if (sha256(snapshot) !== source.sourceSha256) changed.push(main);
  if (sha256(license) !== source.licenseSha256) changed.push(licensePath);
  for (const file of files) {
    if (sha256(file.bytes) !== previous.get(file.relativePath)) changed.push(file.upstreamPath);
    previous.delete(file.relativePath);
  }
  for (const name of previous.keys()) changed.push(`removed: ${base === '.' ? name : `${base}/${name}`}`);
  let method = snapshot;
  let conflict;
  if (changed.length && source.classification === 'patched') {
    try {
      method = source.patch ? replayPatch(snapshot, readFileSync(join(root, portable(source.patch)))) : snapshot;
      for (const previous of source.supportingFiles ?? []) {
        if (!previous.patch) continue;
        const file = files.find(file => file.relativePath === previous.relativePath);
        if (!file) throw new Error(`Patched supporting file removed: ${previous.relativePath}`);
        file.method = replayPatch(file.bytes, readFileSync(join(root, portable(previous.patch))));
      }
    } catch { conflict = 'The maintained patch does not apply to the candidate. Reconcile it before adoption.'; }
  }
  const licenseChanged = sha256(license) !== source.licenseSha256;
  const status = !changed.length ? 'unchanged' : conflict ? 'conflict' : licenseChanged ? 'license-review' : source.classification === 'derived' ? 'derivation-review' : revision.commit === source.upstream.commit ? 'baseline-review' : 'ready-for-review';
  return { id: source.id, status, pinned: source.upstream.commit, candidate: revision.commit, changed, licenseChanged, ...(conflict ? { conflict } : {}), consumers: source.consumers, rulings: source.rulings ?? [], snapshot, method, license, files };
}

function reportOf(result, source) {
  const { snapshot: _snapshot, method: _method, license: _license, files: _files, ...report } = result;
  void _snapshot; void _method; void _license; void _files;
  return { ...report, classification: source.classification, repository: source.upstream.repository,
    compare: `${repository(source.upstream.repository)}/compare/${report.pinned}...${report.candidate}` };
}

export function issueBody(report) {
  return `<!-- atlas-upstream:${report.id} -->\n\nUpstream changes are available for **${report.id}** (${report.classification}).\n\n- Status: ${report.status}\n- Reviewed pin: ${report.pinned}\n- Candidate: ${report.candidate}\n- Consumers: ${report.consumers.join(', ') || 'No active consumers'}\n- Rulings to review: ${report.rulings.join(', ') || 'None recorded'}\n\n[Compare upstream revisions](${report.compare})\n\nChanged selected files:\n${report.changed.map(name => `- ${name}`).join('\n')}\n\n${report.conflict ?? 'Review behavior, license changes and consumers before adopting. Patch replay is a mechanical check, not behavioral approval.'}\n\nPrepare the reviewed revision locally:\n\n\`pnpm upstream:prepare --source ${report.id} --revision ${report.candidate}\`\n\nThe watcher does not adopt changes, publish packages or merge updates.\n`;
}

export function publishIssue(report, gh, temporary) {
  const title = `chore(upstream): review ${report.id} update`;
  const marker = `<!-- atlas-upstream:${report.id} -->`;
  const issues = JSON.parse(gh(['issue', 'list', '--state', 'open', '--limit', '1000', '--json', 'number,body']));
  const existing = issues.find(issue => issue.body?.includes(marker));
  const body = issueBody(report);
  if (existing?.body === body) return 'unchanged';
  const bodyFile = join(temporary, `${report.id}-issue.md`);
  writeFileSync(bodyFile, body);
  gh(existing ? ['issue', 'edit', String(existing.number), '--title', title, '--body-file', bodyFile] : ['issue', 'create', '--title', title, '--body-file', bodyFile]);
  return existing ? 'updated' : 'created';
}

export function prepareUpdate(root, source, candidate, manifest) {
  if (!['ready-for-review', 'baseline-review'].includes(candidate.status)) throw new Error(`Candidate cannot be prepared automatically: ${candidate.status}`);
  buildSkills(root, { check: true });
  const stage = mkdtempSync(join(tmpdir(), 'atlas-candidate-'));
  try {
    for (const directory of ['sources', 'skills', 'stacks']) cpSync(join(root, directory), join(stage, directory), { recursive: true });
    const next = structuredClone(manifest);
    const record = next.sources.find(record => record.id === source.id);
    const writes = new Map();
    const put = (name, bytes) => {
      portable(name);
      const target = resolve(stage, name);
      if (!target.startsWith(`${resolve(stage)}${sep}`)) throw new Error('Candidate escapes staging directory');
      mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, bytes); writes.set(name, bytes);
    };
    put(record.snapshot, candidate.snapshot); put(record.license, candidate.license);
    if (record.classification === 'patched') put(record.method, candidate.method);
    record.upstream.commit = candidate.candidate;
    record.sourceSha256 = sha256(candidate.snapshot); record.licenseSha256 = sha256(candidate.license);
    record.adoptedAt = new Date().toISOString().slice(0, 10);
    record.supportingFiles = candidate.files.map(file => {
      const snapshot = `sources/upstream/${record.id}/supporting/${file.relativePath}`;
      put(snapshot, file.bytes);
      const previous = (source.supportingFiles ?? []).find(previous => previous.relativePath === file.relativePath);
      const adaptation = previous?.patch ? { method: previous.method, patch: previous.patch } : {};
      if (previous?.patch) {
        if (!file.method) throw new Error(`Missing replayed supporting method: ${file.relativePath}`);
        put(previous.method, file.method);
      }
      return { snapshot, relativePath: file.relativePath, upstreamPath: file.upstreamPath, sourceSha256: sha256(file.bytes), ...adaptation };
    });
    put('sources/composition.json', Buffer.from(json(next)));
    buildSkills(stage); buildSkills(stage, { check: true });
    // Apply only after the complete candidate passes package validation in isolation.
    for (const [name, bytes] of writes) {
      const target = join(root, name); mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, bytes);
    }
    // Remove only resources retired by the validated candidate.
    for (const consumer of source.consumers) {
      const previous = JSON.parse(readFileSync(join(root, 'skills', consumer, 'SOURCE-MANIFEST.json')));
      const prepared = JSON.parse(readFileSync(join(stage, 'skills', consumer, 'SOURCE-MANIFEST.json')));
      for (const path of Object.keys(previous.files)) {
        if (!(path in prepared.files)) rmSync(join(root, 'skills', consumer, path), { force: true });
      }
      cpSync(join(stage, 'skills', consumer), join(root, 'skills', consumer), { recursive: true });
    }
  } finally { rmSync(stage, { recursive: true, force: true }); }
}

export async function run(args = process.argv.slice(2)) {
  const option = name => args[args.indexOf(name) + 1];
  const prepare = args.includes('--prepare');
  const sourceId = args.includes('--source') ? option('--source') : undefined;
  const revision = args.includes('--revision') ? option('--revision') : undefined;
  if (prepare && (!sourceId || !/^[a-f0-9]{40}$/.test(revision ?? ''))) throw new Error('Prepare requires --source and an explicitly reviewed --revision commit');
  if (prepare && args.includes('--issues')) throw new Error('Prepare and issue publication are separate operations');
  const manifest = JSON.parse(readFileSync(join(repositoryRoot, 'sources/composition.json')));
  const sources = manifest.sources.filter(source => source.consumers.length && (!sourceId || source.id === sourceId));
  if (sourceId && !sources.length) throw new Error('Unknown active source');
  const temporary = mkdtempSync(join(tmpdir(), 'atlas-upstream-'));
  const cache = new Map(), reports = [];
  try {
    for (const source of sources) {
      const ref = revision ?? source.upstream.trackingRef ?? 'HEAD';
      const key = `${source.upstream.repository}#${ref}`;
      try {
        if (!cache.has(key)) cache.set(key, fetchRevision(source.upstream.repository, ref, temporary));
        const candidate = inspectSource(source, cache.get(key));
        const report = reportOf(candidate, source); reports.push(report);
        if (prepare) prepareUpdate(repositoryRoot, source, candidate, manifest);
        else if (args.includes('--issues') && candidate.status !== 'unchanged') {
          publishIssue(report, arguments_ => execFileSync('gh', arguments_, { cwd: repositoryRoot, encoding: 'utf8' }), temporary);
        }
      } catch (error) {
        reports.push({ id: source.id, status: 'error', error: error.message });
        if (prepare) throw error;
      }
    }
    const output = json({ version: 1, reports });
    if (args.includes('--output')) writeFileSync(resolve(option('--output')), output);
    process.stdout.write(output);
    if (reports.some(report => report.status === 'error')) process.exitCode = 1;
  } finally { rmSync(temporary, { recursive: true, force: true }); }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await run();
