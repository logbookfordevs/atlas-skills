import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { setupDependencies } from './setup-dependencies.mjs';

export const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const json = value => `${JSON.stringify(value, null, 2)}\n`;

function filesIn(directory, prefix = '') {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const name = join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Package symlink is not portable: ${name}`);
    return entry.isDirectory() ? filesIn(join(directory, entry.name), name) : [name];
  });
}

export function composeSkills(root = repositoryRoot) {
  const read = path => {
    const location = resolve(root, path);
    if (!location.startsWith(`${resolve(root)}${sep}`)) throw new Error(`Input escapes repository: ${path}`);
    return readFileSync(location);
  };
  const composition = JSON.parse(read('sources/composition.json'));
  if (composition.version !== 1) throw new Error('Unsupported composition version');
  const sources = new Map();
  for (const source of composition.sources) {
    if (sources.has(source.id)) throw new Error(`Duplicate source: ${source.id}`);
    if (!/^[a-z0-9-]+$/.test(source.id) || !/^[a-f0-9]{40}$/.test(source.upstream.commit)) throw new Error(`Invalid source identity: ${source.id}`);
    if (sha256(read(source.snapshot)) !== source.sourceSha256) throw new Error(`Snapshot integrity failure: ${source.id}`);
    if (sha256(read(source.license)) !== source.licenseSha256) throw new Error(`License integrity failure: ${source.id}`);
    if (!['verbatim', 'patched', 'derived'].includes(source.classification)) throw new Error(`Invalid classification: ${source.id}`);
    if (!source.adaptation) throw new Error(`Missing adaptation record: ${source.id}`);
    const method = read(source.method);
    if (source.classification === 'verbatim' && !method.equals(read(source.snapshot))) throw new Error(`Verbatim mismatch: ${source.id}`);
    if (source.classification === 'patched') {
      const temporary = mkdtempSync(join(tmpdir(), 'atlas-patch-'));
      try {
        writeFileSync(join(temporary, 'source.md'), read(source.snapshot));
        execFileSync('git', ['apply', '--no-index', '-'], { cwd: temporary, input: read(source.patch), stdio: ['pipe', 'pipe', 'pipe'] });
        if (!method.equals(readFileSync(join(temporary, 'source.md')))) throw new Error(`Patch replay mismatch: ${source.id}`);
      } finally { rmSync(temporary, { recursive: true, force: true }); }
    }
    sources.set(source.id, source);
  }
  const rulingIds = new Set();
  for (const ruling of composition.rulings ?? []) {
    if (rulingIds.has(ruling.id) || !composition.workflows.some(workflow => workflow.id === ruling.owner)) throw new Error(`Invalid ruling: ${ruling.id}`);
    rulingIds.add(ruling.id);
    read(ruling.document);
    if (!ruling.sources.every(id => sources.has(id))) throw new Error(`Unknown ruling source: ${ruling.id}`);
  }
  for (const source of sources.values()) {
    if (!(source.rulings ?? []).every(id => rulingIds.has(id))) throw new Error(`Unknown source ruling: ${source.id}`);
  }
  const packages = new Map();
  const portablePath = path => {
    if (typeof path !== 'string' || path.startsWith('/') || path.includes('\\') || path.split('/').some(part => !part || part === '.' || part === '..')) throw new Error(`Invalid package path: ${path}`);
    return path;
  };
  for (const workflow of composition.workflows) {
    if (!/^[a-z][a-z0-9-]+$/.test(workflow.id) || packages.has(workflow.id)) throw new Error(`Invalid workflow: ${workflow.id}`);
    const output = new Map([['SKILL.md', read(workflow.entry)], ['agents/openai.yaml', read(workflow.agent)]]);
    const put = (path, bytes) => {
      portablePath(path);
      if (output.has(path)) throw new Error(`Duplicate package path: ${path}`);
      output.set(path, bytes);
    };
    const authoredReferences = (workflow.authoredReferences ?? []).map(reference => {
      put(reference.target, read(reference.input));
      return { ...reference, classification: 'atlas-authored', carriedSha256: sha256(read(reference.input)) };
    });
    const generatedReferences = (workflow.generatedReferences ?? []).map(reference => {
      if (reference.generator !== 'setup-dependencies') throw new Error(`Unknown reference generator: ${reference.generator}`);
      const bytes = Buffer.from(json(setupDependencies(composition, JSON.parse(read('stacks/atlas.json')))));
      put(reference.target, bytes);
      return { ...reference, inputs: ['sources/composition.json', 'stacks/atlas.json'], carriedSha256: sha256(bytes) };
    });
    const receipts = workflow.methods.map(id => {
      const source = sources.get(id);
      if (!source || !source.consumers.includes(workflow.id)) throw new Error(`Undeclared consumer: ${workflow.id}/${id}`);
      const target = source.carriedPath ?? `references/${id}.md`;
      const licenseTarget = `licenses/${id}.txt`;
      if (target === 'SKILL.md') {
        if (!output.get(target).equals(read(source.method))) throw new Error(`Entry source mismatch: ${id}`);
      } else put(target, read(source.method));
      put(licenseTarget, read(source.license));
      for (const [relativePath, carriedPath] of Object.entries(source.supportingFileTargets ?? {})) {
        portablePath(relativePath);
        portablePath(carriedPath);
      }
      const supportingFiles = (source.supportingFiles ?? []).map(file => {
        portablePath(file.relativePath);
        const bytes = read(file.snapshot);
        if (sha256(bytes) !== file.sourceSha256) throw new Error(`Supporting file integrity failure: ${id}/${file.relativePath}`);
        const carriedPath = source.supportingFileTargets?.[file.relativePath] ?? join(dirname(target), file.relativePath);
        put(carriedPath, bytes);
        return { upstreamPath: file.upstreamPath, classification: 'verbatim', sourceSha256: file.sourceSha256, carriedPath, carriedSha256: sha256(bytes) };
      });
      const notices = (source.notices ?? []).map(notice => {
        const bytes = read(notice.input);
        if (sha256(bytes) !== notice.sha256) throw new Error(`Notice integrity failure: ${id}/${notice.input}`);
        portablePath(notice.target);
        if (output.has(notice.target)) {
          if (!output.get(notice.target).equals(bytes)) throw new Error(`Conflicting notice: ${notice.target}`);
        } else put(notice.target, bytes);
        return { carriedPath: notice.target, carriedSha256: sha256(bytes) };
      });
      return { id, owner: source.owner, classification: source.classification, upstream: source.upstream,
        supportingFiles, notices, ...(source.selection ? { selection: source.selection } : {}), sourceSha256: source.sourceSha256, carriedPath: target, carriedSha256: sha256(read(source.method)),
        licensePath: licenseTarget, licenseSha256: source.licenseSha256, adaptation: source.adaptation,
        ...(source.licenseSpdx ? { licenseSpdx: source.licenseSpdx } : {}),
        ...(source.adoptedAt ? { adoptedAt: source.adoptedAt } : {}),
        rulings: source.rulings ?? [],
        ...(source.patch ? { patch: source.patch, patchSha256: sha256(read(source.patch)) } : {}) };
    });
    const managedFiles = [...new Set([
      ...receipts.flatMap(source => [source.carriedPath, source.licensePath, ...source.supportingFiles.map(file => file.carriedPath), ...source.notices.map(file => file.carriedPath)]),
      ...generatedReferences.map(reference => reference.target),
    ])];
    const directory = join(root, 'skills', workflow.id);
    const receiptPath = join(directory, 'SOURCE-MANIFEST.json');
    const previous = existsSync(receiptPath) ? JSON.parse(readFileSync(receiptPath)) : {};
    const previousManaged = new Set(previous.managedFiles ?? [
      ...(previous.sources ?? []).flatMap(source => [source.carriedPath, source.licensePath, ...(source.supportingFiles ?? []).map(file => file.carriedPath), ...(source.notices ?? []).map(file => file.carriedPath)]),
      ...(previous.generatedReferences ?? []).map(reference => reference.target),
    ]);
    if (existsSync(receiptPath)) {
      for (const path of managedFiles) {
        if (!previousManaged.has(path) && existsSync(join(directory, path)) && !readFileSync(join(directory, path)).equals(output.get(path))) throw new Error(`Upstream resource conflicts with Atlas-owned file: ${workflow.id}/${path}`);
      }
    }
    for (const path of filesIn(directory)) {
      if (path !== 'SOURCE-MANIFEST.json' && !output.has(path) && !previousManaged.has(path)) put(path, readFileSync(join(directory, path)));
    }
    output.set('SOURCE-MANIFEST.json', Buffer.from(json({ version: 1, workflow: workflow.id, generated: true, managedFiles,
      authoredInputs: [workflow.entry, workflow.agent, ...(workflow.authoredReferences ?? []).map(reference => reference.input)], authoredReferences, ...(generatedReferences.length ? { generatedReferences } : {}), dependencies: workflow.dependencies, sources: receipts,
      rulings: (composition.rulings ?? []).filter(ruling => ruling.owner === workflow.id),
      files: Object.fromEntries([...output].map(([path, bytes]) => [path, sha256(bytes)])) })));
    packages.set(workflow.id, output);
  }
  for (const source of sources.values()) {
    for (const consumer of source.consumers) {
      if (!composition.workflows.some(workflow => workflow.id === consumer && workflow.methods.includes(source.id))) throw new Error(`Stale consumer: ${source.id}/${consumer}`);
    }
  }
  return packages;
}

export function buildSkills(root = repositoryRoot, { check = false } = {}) {
  const mismatches = [];
  for (const [id, output] of composeSkills(root)) {
    const directory = join(root, 'skills', id);
    for (const [path, bytes] of output) {
      const target = join(directory, path);
      if (check) {
        if (!existsSync(target) || !readFileSync(target).equals(bytes)) mismatches.push(relative(root, target));
      } else if (!existsSync(target) || !readFileSync(target).equals(bytes)) {
        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, bytes);
      }
    }
    for (const path of filesIn(directory)) {
      if (!output.has(path)) {
        if (check) mismatches.push(`Obsolete managed file: ${id}/${path}`);
        else rmSync(join(directory, path));
      }
    }
  }
  if (mismatches.length) throw new Error(`Generated packages differ; refresh package receipts with pnpm build:skills:\n${mismatches.join('\n')}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  buildSkills(repositoryRoot, { check: process.argv.includes('--check') });
  process.stdout.write('Atlas skill packages verified.\n');
}
