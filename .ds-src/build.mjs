// Hand-authored converter for the StyleQ brand guide → claude.ai/design bundle.
// Produces the same output layout package-build.mjs would, from a single-file
// HTML brand guide (no repo build to run). Reuses esbuild for the three JS
// artifacts (_vendor/react.js, _ds_bundle.js, _preview/*.js).
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const OUT = join(ROOT, 'ds-bundle');
const NM = join(ROOT, 'node_modules');
const GLOBAL = 'StyleQ';
const PKG = '@styleq/brand';
const VERSION = '1.0.0';

const FONTS_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,600&display=swap');";

// ---- component metadata (groups, jsdoc, props body, prompt doc) ------------
const REACT_NODE = '  children?: React.ReactNode;';
const COMPONENTS = [
  {
    name: 'Button', group: 'Actions',
    jsdoc: 'Universal call-to-action button. Rose is the only CTA color for every audience.',
    props:
      "  /** Visual style. `primary` (rose) is the universal CTA for every audience; `outline` is the quiet secondary; `teal` is reserved for trust contexts (rarely a button); `on-gradient` is the white button used ONLY inside the once-per-page plum closing band. */\n" +
      "  variant?: 'primary' | 'outline' | 'teal' | 'on-gradient';\n" +
      "  /** `sm` is the compact size used in nav bars and hero headers. */\n" +
      "  size?: 'md' | 'sm';\n" +
      "  children?: React.ReactNode;\n" +
      "  onClick?: React.MouseEventHandler<HTMLButtonElement>;\n" +
      "  type?: 'button' | 'submit' | 'reset';",
    doc: 'Rose (`primary`) is the universal CTA color for residents, families, and facilities alike. Use exactly one primary button per view; pair it with an `outline` secondary. Never use `teal` on a button meant for families or residents — teal is a trust-signal color. `on-gradient` (white) is only for the plum closing band.',
  },
  {
    name: 'Eyebrow', group: 'Foundation',
    jsdoc: 'Small uppercase section label; tone follows audience.',
    props:
      "  /** rose (default, on-page labels), teal (trust / facility-facing), coral (warm / resident-facing). */\n" +
      "  tone?: 'rose' | 'teal' | 'coral';\n" +
      "  /** Adds a tinted rounded background, as used on hero eyebrows. */\n" +
      "  pill?: boolean;\n" +
      REACT_NODE,
    doc: 'The eyebrow is Geist 600, 11px, uppercase, tracked. Pick tone by audience: teal reads clinical/trust-forward for facility pages, coral reads warm for resident/family pages, rose is the neutral default. Set `pill` for the tinted-background version used above hero headlines.',
  },
  {
    name: 'NavBar', group: 'Navigation',
    jsdoc: 'Sticky top navigation: wordmark, links, and a single rose CTA.',
    props:
      "  /** Wordmark text (Geist 700). */\n  logo?: string;\n" +
      "  links?: Array<{ label: string; active?: boolean; soon?: boolean }>;\n" +
      "  /** CTA button label (always rose). */\n  cta?: string;\n" +
      "  onCta?: React.MouseEventHandler<HTMLButtonElement>;",
    doc: 'The site header. Exactly one CTA, always rose. Mark the current page with `active`; mark not-yet-shipped items with `soon` (dimmed, non-interactive).',
  },
  {
    name: 'Hero', group: 'Marketing',
    jsdoc: 'Marketing hero with three layouts; copy stays identical across all three.',
    props:
      "  /** `centered` (cream, no photo — simplest to ship), `split` (resident photo, recommended default), `peach` (peach section break for interior/facility pages). */\n" +
      "  variant?: 'centered' | 'split' | 'peach';\n" +
      "  eyebrow?: string;\n" +
      "  /** Eyebrow tone; defaults to teal (coral inside `split`). */\n  eyebrowTone?: 'rose' | 'teal' | 'coral';\n" +
      "  headline?: string;\n  subhead?: string;\n" +
      "  primaryCta?: string;\n  secondaryCta?: string;\n" +
      "  logo?: string;\n  links?: string[];\n" +
      "  /** Placeholder label shown in the `split` photo panel. */\n  photoLabel?: string;",
    doc: 'Three ways to frame the same message. **Default to `split`** — the resident photo does emotional work copy cannot. Use `centered` when a page must load fast or no photo exists. Save `peach` for one-off interior pages; do not make peach the default hero background or it stops feeling like a break from cream.',
  },
  {
    name: 'AudienceCard', group: 'Marketing',
    jsdoc: 'Audience persona card: name, register tag, core framing, say/avoid lists, and a sample line.',
    props:
      "  name: string;\n  /** Register label, e.g. \"Reliability register\". */\n  tag?: string;\n" +
      "  tagTone?: 'teal' | 'coral' | 'rose';\n" +
      "  /** The core framing paragraph. */\n  core?: string;\n" +
      "  /** Phrases to use with this audience (green checks). */\n  say?: string[];\n" +
      "  /** Phrases to avoid (coral crosses). */\n  avoid?: string[];\n" +
      "  /** A sample line in this audience's voice (Fraunces italic). */\n  sample?: string;",
    doc: 'Used on positioning and voice pages. Administrator = reliability register (teal tag); residents/families = warmth register (coral tag). The say/avoid lists keep the two voices from bleeding into each other.',
  },
  {
    name: 'Testimonial', group: 'Voice',
    jsdoc: 'Warm resident/family testimonial: a coral "Kind Words" label over a short quote.',
    props:
      "  /** Small coral label above the quote. */\n  label?: string;\n" +
      "  quote: React.ReactNode;",
    doc: 'Coral stays a small accent here — the label only — never a fill. Keep quotes short and human. Resident/family surfaces only; do not use on administrator-facing pages.',
  },
  {
    name: 'ScriptCard', group: 'Voice',
    jsdoc: 'Sales-call credibility script in a teal-bordered card, in the buyer\'s own language.',
    props: REACT_NODE,
    doc: 'One administrator-facing conversation opener per card. These are drop-in scripts pulled from buyer interviews — not headline copy. The teal left border marks them as trust/credibility content.',
  },
  {
    name: 'SocialPost', group: 'Social',
    jsdoc: 'Square social post for administrator feeds (LinkedIn / Facebook).',
    props:
      "  /** `dark` / `gradient` for pain-point and closing posts; `light` for plainly-stated solutions; `teal` for zero-lift proof. */\n" +
      "  variant?: 'dark' | 'light' | 'teal' | 'gradient';\n" +
      "  tag?: string;\n" +
      "  /** Tag color: 'teal' | 'coral' | 'cream' | 'ink', or any CSS color. */\n  tagTone?: string;\n" +
      "  headline?: React.ReactNode;\n  sub?: React.ReactNode;\n" +
      "  /** Oversized rose figure (e.g. \"60\"). */\n  stat?: React.ReactNode;\n" +
      "  footer?: string;\n  logo?: string;",
    doc: 'Built for administrator feeds — the reliability register. No coral backgrounds; coral appears only as a small tag. Alternate a dark pain-point post, a light solution post, and a proof/stat post; close every 4–5 cycle with a `gradient` CTA post so it lands.',
  },
];

const OVERRIDES = { Hero: { cardMode: 'column' } };

// ---- helpers ---------------------------------------------------------------
const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sha12 = (buf) => createHash('sha256').update(buf).digest('hex').slice(0, 12);

// ---- 1. clean output dir ---------------------------------------------------
if (existsSync(OUT)) {
  for (const e of readdirSync(OUT)) rmSync(join(OUT, e), { recursive: true, force: true });
}
mkdirSync(join(OUT, '_vendor'), { recursive: true });
mkdirSync(join(OUT, '_preview'), { recursive: true });
mkdirSync(join(OUT, 'tokens'), { recursive: true });

// ---- 2. vendor React (mirror lib/emit.mjs vendorReact esbuild branch) ------
const noClobber =
  ';window.React=window.React||window.__dsReact;' +
  'window.ReactDOM=window.ReactDOM||window.__dsReactDOM;' +
  'try{delete window.__dsReact;delete window.__dsReactDOM;}catch(e){}';
await build({
  stdin: {
    contents:
      'window.__dsReact=require("react");' +
      'window.__dsReactDOM=require("react-dom");' +
      'try{Object.assign(window.__dsReactDOM,require("react-dom/client"))}catch(e){}',
    resolveDir: NM,
  },
  bundle: true, format: 'iife', outfile: join(OUT, '_vendor', 'react.js'),
  platform: 'browser',
  define: { 'process.env.NODE_ENV': '"development"' },
  logLevel: 'error', footer: { js: noClobber },
});
writeFileSync(join(OUT, '_vendor', 'react-dom.js'), '/* merged into react.js */');
console.error('  vendored React 19 → _vendor/react.js');

// ---- 3. component bundle → _ds_bundle.js (IIFE at window.StyleQ) -----------
await build({
  entryPoints: [join(HERE, 'components.jsx')],
  bundle: true, format: 'iife', globalName: GLOBAL,
  outfile: join(OUT, '_ds_bundle.js'),
  platform: 'browser', target: 'es2020', jsx: 'transform',
  jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment',
  define: { 'process.env.NODE_ENV': '"development"' },
  footer: { js: `window.${GLOBAL}=${GLOBAL};` },
  logLevel: 'warning', minify: false,
});
console.error('  bundled components → _ds_bundle.js');

// ---- 4. styles + tokens + component css ------------------------------------
cpSync(join(HERE, 'components.css'), join(OUT, '_ds_bundle.css'));
cpSync(join(HERE, 'tokens.css'), join(OUT, 'tokens', 'brand.css'));
writeFileSync(
  join(OUT, 'styles.css'),
  `/* StyleQ Brand System — single stylesheet entry. Link this one file.\n` +
  `   Rendered designs receive only this file's @import closure. */\n` +
  FONTS_IMPORT + '\n' +
  "@import url('./tokens/brand.css');\n" +
  "@import url('./_ds_bundle.css');\n",
);
console.error('  wrote styles.css, tokens/brand.css, _ds_bundle.css');

// ---- 5. preview modules → _preview/<Name>.js (IIFE at window.__dsPreview) --
for (const c of COMPONENTS) {
  const src = join(HERE, 'previews', `${c.name}.jsx`);
  await build({
    entryPoints: [src],
    bundle: true, format: 'iife', globalName: 'window.__dsPreview',
    outfile: join(OUT, '_preview', `${c.name}.js`),
    platform: 'browser', target: 'es2020', jsx: 'transform',
    jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment',
    logLevel: 'warning', minify: false,
  });
}
console.error(`  bundled ${COMPONENTS.length} preview modules → _preview/`);

// ---- 6. per-component dir: .jsx / .d.ts / .prompt.md / .html ---------------
function previewHtml(group, name, card) {
  const viewportAttr = card.viewport ? ` viewport="${escapeHtml(card.viewport)}"` : '';
  const MODE = card.cardMode === 'column' ? 'column' : 'grid';
  return `<!-- @dsCard group="${escapeHtml(group)}"${viewportAttr} -->
<!doctype html>
<html><head><meta charset="utf-8">
  <link rel="stylesheet" href="../../../styles.css">
  <link rel="stylesheet" href="../../../_ds_bundle.css">
  <style>
    body{margin:0;padding:24px;background:#fff}
    .ds-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;align-items:start}
    .ds-grid.ds-col{grid-template-columns:1fr}
    .ds-cell{border:1px solid #e5e7eb;border-radius:8px;padding:12px;min-width:0;overflow:hidden;transform:translateZ(0)}
    .ds-cell>h4{margin:0 0 8px;font:600 12px system-ui;color:#6b7280;text-transform:uppercase;letter-spacing:.04em}
    .ds-single{transform:translateZ(0)}
  </style>
</head><body>
  <div class="ds-grid" id="g"></div>
  <script src="../../../_vendor/react.js"></script>
  <script src="../../../_vendor/react-dom.js"></script>
  <script src="../../../_ds_bundle.js"></script>
  <script src="../../../_preview/${name}.js"></script>
  <script>
    var h=React.createElement, g=document.getElementById('g');
    var E=[]; for (var k in (window.__dsPreview||{})) {
      if (typeof window.__dsPreview[k]==='function' && /^[A-Z]/.test(k)) E.push(k);
    }
    window.__dsCells=E.slice();
    var q=null; try{q=new URLSearchParams(location.search).get('story')}catch(e){}
    var MODE=${JSON.stringify(MODE)};
    if(MODE==='column'){ g.className+=' ds-col'; }
    function mount(id,key){try{ReactDOM.createRoot(document.getElementById(id)).render(h(window.__dsPreview[key]))}catch(e){document.getElementById(id).textContent='⚠ '+(e&&e.message||e)}}
    var pick=null;
    if(q){for(var j=0;j<E.length;j++){if(E[j]===q||E[j].toLowerCase()===q.toLowerCase()){pick=E[j];break}}}
    if(q&&!pick){g.textContent='⚠ no export named '+q}
    else if(pick){
      var s=document.createElement('div'); s.className='ds-single'; s.id='r0';
      g.parentNode.replaceChild(s,g); mount('r0',pick);
    } else {
      for(var i=0;i<E.length;i++){
        var cell=document.createElement('section'); cell.className='ds-cell';
        cell.innerHTML='<h4>'+E[i]+'</h4><div id="r'+i+'"></div>'; g.appendChild(cell);
        mount('r'+i,E[i]);
      }
      if(E.length===0){g.textContent='⚠ no PascalCase exports in _preview/${name}.js'}
    }
  </script>
</body></html>
`;
}

function storyExports(name) {
  // parse export names from the preview source (order preserved)
  const src = readFileSync(join(HERE, 'previews', `${name}.jsx`), 'utf8');
  return [...src.matchAll(/export function (\w+)/g)].map((m) => m[1]);
}

for (const c of COMPONENTS) {
  const dir = join(OUT, 'components', c.group, c.name);
  mkdirSync(dir, { recursive: true });

  writeFileSync(
    join(dir, `${c.name}.jsx`),
    `// Re-export of ${PKG}@${VERSION} ${c.name}. Implementation is in the root _ds_bundle.js (window.${GLOBAL}).\n` +
      `Object.assign(window, { ${c.name}: window.${GLOBAL}.${c.name} });\n`,
  );

  const dts =
    `import * as React from 'react';\n\n` +
    `/**\n * ${c.name} — from ${PKG}@${VERSION}.\n */\n` +
    `export interface ${c.name}Props {\n${c.props}\n}\n\n` +
    `export declare const ${c.name}: React.ComponentType<${c.name}Props>;\n`;
  writeFileSync(join(dir, `${c.name}.d.ts`), dts);

  const stories = storyExports(c.name);
  const head = `${c.name} from ${PKG}. Use via \`window.${GLOBAL}.${c.name}\` (bundle loaded from the root \`_ds_bundle.js\`).\n`;
  const exampleSrc = readFileSync(join(HERE, 'previews', `${c.name}.jsx`), 'utf8')
    .replace(/^const \{[^}]*\} = window\.StyleQ;\n\n?/, '')
    .replace(/```/g, '');
  const prompt =
    head + '\n' + c.doc + '\n\n' +
    `Variants (see \`${c.name}.html\`): ${stories.join(', ')}.\n\n` +
    `## Props\n\n\`\`\`ts\ninterface ${c.name}Props {\n${c.props}\n}\n\`\`\`\n\n` +
    `## Examples\n\n\`\`\`jsx\n${exampleSrc.trim()}\n\`\`\`\n`;
  writeFileSync(join(dir, `${c.name}.prompt.md`), prompt);

  const ov = OVERRIDES[c.name] ?? {};
  const card = ov.cardMode === 'column' ? { cardMode: 'column', viewport: '900x700' } : {};
  writeFileSync(join(dir, `${c.name}.html`), previewHtml(c.group, c.name, card));
}
console.error(`  emitted ${COMPONENTS.length} component dirs`);

// ---- 7. README (conventions header prepended) ------------------------------
const conventionsPath = join(ROOT, '.design-sync', 'conventions.md');
const header = existsSync(conventionsPath) ? readFileSync(conventionsPath, 'utf8').trimEnd() + '\n\n' : '';
const byGroup = new Map();
for (const c of COMPONENTS) {
  if (!byGroup.has(c.group)) byGroup.set(c.group, []);
  byGroup.get(c.group).push(c);
}
const index = [...byGroup.entries()]
  .map(([g, cs]) => `### ${g}\n${cs.map((c) => `- \`${c.name}\` — ${c.jsdoc}`).join('\n')}`)
  .join('\n\n');
const readme = `${header}# ${GLOBAL} (${PKG}@${VERSION})

The StyleQ brand system, extracted from the StyleQ Brand Guide. All ${COMPONENTS.length}
components are real React components rendered from the single bundle at
\`window.${GLOBAL}\`.

## Where things are

- \`_ds_bundle.js\` — the whole-DS bundle at the project root; loads every component to \`window.${GLOBAL}\`. First line is a \`/* @ds-bundle: … */\` metadata header.
- \`styles.css\` — the single stylesheet entry. It \`@import\`s the brand fonts (Geist + Fraunces, from Google Fonts), the tokens, and the component styles (\`_ds_bundle.css\`). Link this one file.
- \`tokens/brand.css\` — the brand color, type, and radius custom properties (\`--sq-*\`).
- \`components/<group>/<Name>/\` — \`<Name>.prompt.md\` (usage + variants), \`<Name>.d.ts\` (types), \`<Name>.html\` (variant grid).

## Loading

\`\`\`html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
\`\`\`

Components are then at \`window.${GLOBAL}.*\`:

\`\`\`jsx
const { Hero } = window.${GLOBAL};
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Hero variant="split" headline="…" subhead="…" />);
\`\`\`

## Components

${index}
`;
writeFileSync(join(OUT, 'README.md'), readme);
console.error('  wrote README.md' + (header ? ' (with conventions header)' : ' (no conventions header yet)'));

// ---- 8. stamp @ds-bundle header + recompile sentinel -----------------------
const sourceHashes = {};
for (const c of COMPONENTS) {
  const base = `components/${c.group}/${c.name}/${c.name}`;
  for (const ext of ['.jsx', '.d.ts', '.prompt.md']) {
    const rel = base + ext;
    sourceHashes[rel] = sha12(readFileSync(join(OUT, rel)));
  }
}
const meta = {
  namespace: GLOBAL,
  components: COMPONENTS.map((c) => ({ name: c.name, sourcePath: `components/${c.group}/${c.name}/${c.name}.jsx` })),
  sourceHashes,
  inlinedExternals: [],
  builtBy: 'cc-design-sync',
};
const bundleJs = join(OUT, '_ds_bundle.js');
const body = readFileSync(bundleJs, 'utf8');
writeFileSync(bundleJs, `/* @ds-bundle: ${JSON.stringify(meta).replace(/\*\//g, '*\\/')} */\n` + body);
writeFileSync(join(OUT, '_ds_needs_recompile'), JSON.stringify({ by: 'design-sync-cli' }));
console.error(`\n✓ built ${COMPONENTS.length} components → ${OUT}`);
