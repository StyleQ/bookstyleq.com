# design-sync NOTES — StyleQ Brand System

## What this sync is

This is an **off-script** sync. The "design system" is a single-file HTML brand
guide (`~/Downloads/styleq-brand-guide.html`), not a code repo with a build. The
converter (`.ds-sync/package-build.mjs`) does NOT apply here — the bundle is
hand-authored from source under `.ds-src/`:

- `.ds-src/tokens.css` — brand tokens (`--sq-*`)
- `.ds-src/components.css` — component CSS, ported from the brand guide, `sq-`-prefixed
- `.ds-src/components.jsx` — 8 React components (render against global `window.React`, no imports)
- `.ds-src/previews/<Name>.jsx` — story cells per component (render from `window.StyleQ`)
- `.ds-src/build.mjs` — the converter: vendors React, bundles components + previews with esbuild, and emits the full `ds-bundle/` layout (`.d.ts`, `.prompt.md`, `.html` cards, `styles.css`, `tokens/`, `README.md`, `@ds-bundle` header)

Project: **StyleQ Brand System** — https://claude.ai/design/p/333cf28b-cfa2-41df-b7fa-bb315bb6b061

## How to rebuild

```sh
# esbuild lives in .ds-sync/node_modules; symlinked into .ds-src for ESM resolution
mkdir -p .ds-src/node_modules && ln -sfn ../../.ds-sync/node_modules/esbuild .ds-src/node_modules/esbuild
ln -sfn ../../.ds-sync/node_modules/@esbuild .ds-src/node_modules/@esbuild
node .ds-src/build.mjs   # → ds-bundle/
```

On a fresh clone: `(cd .ds-sync && npm i esbuild)` first (the `.ds-sync` install and the `.ds-src/node_modules` symlinks are gitignored).

## Decisions / gotchas

- **Fonts are remote.** Geist + Fraunces load via a Google Fonts `@import` at the top of `styles.css` (`[FONT_REMOTE]`-equivalent). Nothing ships in `fonts/`. The brand guide itself loaded them the same way.
- **No `_ds_sync.json` anchor emitted.** Off-script build has no honest render-hash recipe, so every re-sync re-verifies from scratch (correct, just not incremental).
- **Button/Eyebrow merge an incoming `className`** rather than letting `...rest` clobber the computed classes — an early bug rendered the NavBar CTA unstyled. Keep the `className` param explicit if you add more class-taking components.
- **Render check** used the local Google Chrome (`--headless=new --screenshot`), not Playwright — avoids the ~200MB browser download. All 8 components verified visually; all graded good.
- **Component set (8):** Button (Actions), Eyebrow (Foundation), NavBar (Navigation), Hero + AudienceCard (Marketing), Testimonial + ScriptCard (Voice), SocialPost (Social).

## Re-sync risks (watch-list)

- The brand guide is an **external file in ~/Downloads**, not in the repo. If it changes, this bundle won't know — re-extract manually. Consider copying it into the repo (e.g. `docs/brand-guide.html`) so future syncs have a tracked source.
- Tokens/guardrails live in two places now: `.design-sync/conventions.md` (the README header) and the brand guide. If brand rules change, update both.
- Story order in cards follows esbuild's export order (roughly alphabetical), not source order — `Hero` shows Centered/PeachBreak/Split, not Split-first. Cosmetic only.
