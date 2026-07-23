Eyebrow from @styleq/brand. Use via `window.StyleQ.Eyebrow` (bundle loaded from the root `_ds_bundle.js`).

The eyebrow is Geist 600, 11px, uppercase, tracked. Pick tone by audience: teal reads clinical/trust-forward for facility pages, coral reads warm for resident/family pages, rose is the neutral default. Set `pill` for the tinted-background version used above hero headlines.

Variants (see `Eyebrow.html`): Rose, Teal, Coral, PillTeal, PillCoral.

## Props

```ts
interface EyebrowProps {
  /** rose (default, on-page labels), teal (trust / facility-facing), coral (warm / resident-facing). */
  tone?: 'rose' | 'teal' | 'coral';
  /** Adds a tinted rounded background, as used on hero eyebrows. */
  pill?: boolean;
  children?: React.ReactNode;
}
```

## Examples

```jsx
export function Rose() {
  return <Eyebrow tone="rose">Brand identity</Eyebrow>;
}
export function Teal() {
  return <Eyebrow tone="teal">Licensed &amp; insured</Eyebrow>;
}
export function Coral() {
  return <Eyebrow tone="coral">Kind words</Eyebrow>;
}
export function PillTeal() {
  return <Eyebrow tone="teal" pill>On-site salon &amp; spa for senior living</Eyebrow>;
}
export function PillCoral() {
  return <Eyebrow tone="coral" pill>On-site salon &amp; spa for senior living</Eyebrow>;
}
```
