import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateStack } from './check-stack.mjs';

const fixture = () => ({ version: 1, id: 'atlas', name: 'Atlas', sources: [{ name: 'Atlas', source: 'https://github.com/logbookfordevs/atlas-skills', skills: ['example'] }] });
test('stack rejects missing owned packages, duplicate selections and invalid identifiers', () => {
  assert.throws(() => validateStack(fixture(), () => false), /Missing Atlas package/);
  const stack = fixture();
  stack.sources[0].skills.push('example');
  assert.throws(() => validateStack(stack), /Duplicate stack selection/);
  stack.sources[0].skills = ['invalid;command'];
  assert.throws(() => validateStack(stack), /Invalid stack skill/);
});
