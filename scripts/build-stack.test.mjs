import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { buildStack } from "./build-stack.mjs";

const item = (id, source) => ({ id, source, args: ["--skill", id, "--global"] });

test("stack groups explicit selections by their original source without installation flags", () => {
  const stack = buildStack({ items: [item("alpha", "author/one"), item("beta", "author/two"), item("gamma", "author/one")] });
  assert.deepEqual(stack.sources, [
    { name: "author/one", source: "author/one", skills: ["alpha", "gamma"] },
    { name: "author/two", source: "author/two", skills: ["beta"] },
  ]);
  assert.throws(() => buildStack({ items: [{ id: "missing", source: "author/one", args: ["--global"] }] }), /Missing explicit selection/);
  assert.throws(() => buildStack({ items: [item("alpha", "author/one"), item("alpha", "author/two")] }), /Duplicate catalog skill/);
});

test("published stack selection matches the maintained registry", () => {
  const catalog = JSON.parse(readFileSync(new URL("../afk/catalog/skills.json", import.meta.url), "utf8"));
  const manifest = JSON.parse(readFileSync(new URL("../stacks/atlas.json", import.meta.url), "utf8"));
  assert.deepEqual(manifest, buildStack(catalog));
});
