# StyleQ Brand System — how to build with it

StyleQ is a fully managed, on-site salon & spa service for senior living
communities. The brand is a **reliability / peace-of-mind partner, not a beauty
brand**. Every screen should read calm, quiet, and unhurried, not loud or
"salon-flyer." When a layout feels busy, the fix is almost always *less color,
not a different one*.

## Setup — no provider

There is no context provider. Put the two lines on the page once, then render
from `window.StyleQ`:

```html
<link rel="stylesheet" href="styles.css">   <!-- fonts + tokens + component CSS -->
<script src="_ds_bundle.js"></script>
```

```jsx
const { Hero } = window.StyleQ;
ReactDOM.createRoot(node).render(<Hero variant="split" eyebrow="On-site salon & spa" headline="…" subhead="…" />);
```

The intended page canvas is **Cream** (`--sq-color-cream`, #FDF8F2) — roughly 80%
of every page. White is for cards and elevated surfaces on top of cream.

## Styling idiom — tokens, not utility classes

Components are **fully self-styling** via internal classes; you never write
StyleQ class names. Style *your own* layout glue with the CSS custom properties
in `tokens/brand.css`, and steer component appearance through **props**
(`variant`, `tone`, `tagTone`), never by overriding component classes.

Token vocabulary (all `--sq-*`):

- **Color:** `--sq-color-cream`, `--sq-color-ink` (headline text — the darkest StyleQ ever gets, never pure black), `--sq-color-body` (paragraph text), `--sq-color-white`, `--sq-color-hairline` (borders); accents `--sq-color-rose`, `--sq-color-plum`, `--sq-color-coral`, `--sq-color-teal`, `--sq-color-peach`.
- **Type:** `--sq-font-headline` (Fraunces — headlines ONLY), `--sq-font-body` / `--sq-font-display` (Geist — body, buttons, labels, wordmark). Scale: `--sq-text-h1|h2|h3|body|small|eyebrow`.
- **Radius:** `--sq-radius-pill`, `--sq-radius-card`, `--sq-radius-sm`.

## Non-negotiable brand rules (the design agent must follow these)

1. **Rose is the only CTA color** (`Button variant="primary"`) — every audience, every button. One clearly-primary CTA per view; pair with an `outline` secondary.
2. **Teal is a trust signal, never a button** — use it on "Licensed & insured"-type badges/eyebrows (`Eyebrow tone="teal"`), not calls to action.
3. **Coral is a small warm accent, never a fill or a headline** — resident/family surfaces only (`Testimonial`, `Eyebrow tone="coral"`). Keep it off administrator-facing pages.
4. **Plum appears once per page**, only as the closing-moment gradient band (`SocialPost variant="gradient"`, or a final CTA with `Button variant="on-gradient"`). Never a repeated background.
5. **Fraunces is headlines only**; body copy is Geist. Never Fraunces in paragraphs, never all-caps Fraunces.
6. **Two registers, one palette:** resident/family content may lean into coral warmth; administrator content (facility pages, pitch, proposals) leans on teal + plum — same palette, quieter volume.

## Where the truth lives

`styles.css` (imports `tokens/brand.css` + `_ds_bundle.css`) is the whole look.
For any component, read `components/<group>/<Name>/<Name>.prompt.md` (usage +
variants) and `<Name>.d.ts` (props). `Hero` is the flagship — default to
`variant="split"` (the resident photo does emotional work copy can't).
