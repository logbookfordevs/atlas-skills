# Atlas website

The Guided Reading website for Logbook Atlas: an overview, 11 skill references, and a guide to the shared stack.

## Edit and build

Run from this directory:

```sh
npm ci
npm run dev
```

The application uses React, TypeScript, Vite, and React Router. Edit skill summaries in `content.json`, the shared-stack snapshot in `stack.json`, and the visual system in `src/styles/site.css`. Pages live in `src/pages/`; the persistent shell and internal navigation live in `src/components/`.

Run `npm run typecheck`, `npm test`, and `npm run build` before publishing. `npm run preview` serves the production build on port 4173. The build emits a React entry at all 13 known URLs, so direct reference links and refreshes work without depending on a host rewrite. Assets and fonts are bundled locally.

Sharing metadata uses the trusted production origin in `site.json`. The build writes canonical, Open Graph, and X card tags into every route’s initial HTML; client navigation updates the same fields. Overview and stack pages use `public/og.png`. Skill references use their own title and summary without inheriting the generic overview image. Run `npm run test:metadata` after building to check all 13 HTML entries and the image dimensions. The fields follow the [Open Graph protocol](https://ogp.me/).

Internal links use client routing. Native view transitions hold the shell steady, reveal the next reading pane, and carry a selected skill name into its heading. Keyboard navigation and reduced-motion preferences use immediate navigation; browsers without native transitions retain client routing. Theme restoration runs in the document head before the first paint.

Tests run with Node's experimental global web storage disabled so jsdom owns the browser storage. This avoids Node 26's file-backed storage shadowing jsdom's localStorage.

The stack snapshot comes from the Atlas repository's `stacks/atlas.json`. Keep those files aligned when updating the collection. Skill summaries are authored reference material; each page links to the complete skill and its source receipt.

Upstream credits are generated from the package source receipts into `upstream.json`. From the canonical `sites/atlas` directory, run `node scripts/sync-upstream.mjs ../..` after adopting or changing a source. In an isolated Sites checkout, pass the absolute Atlas repository path. The build consumes the saved snapshot; it does not need access to the parent repository. Original-reference links use the recorded commit and path. Explanatory origin text lives in `content.json`.

## Brand and assets

This surface uses Logbook's Walnut Day Chart palette and its paired Night Watch appearance, with Poppins, Literata, and IBM Plex Mono. Font licenses ship beside the stylesheet. Thelu is the approved micro toolbar master, converted to WebP without cropping, mirroring, or redesign; its origin is recorded in the adjacent JSON sidecar.

## Hosting

`.openai/hosting.json` binds this source to its existing Sites identity and declares `dist` as the static output. The publication checkout is isolated under the ignored `.sites-runtime/` directory. Use the Sites workflow to restore and publish this identity; do not register a replacement site.
