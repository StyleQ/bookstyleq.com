Hero from @styleq/brand. Use via `window.StyleQ.Hero` (bundle loaded from the root `_ds_bundle.js`).

Three ways to frame the same message. **Default to `split`** — the resident photo does emotional work copy cannot. Use `centered` when a page must load fast or no photo exists. Save `peach` for one-off interior pages; do not make peach the default hero background or it stops feeling like a break from cream.

Variants (see `Hero.html`): Split, Centered, PeachBreak.

## Props

```ts
interface HeroProps {
  /** `centered` (cream, no photo — simplest to ship), `split` (resident photo, recommended default), `peach` (peach section break for interior/facility pages). */
  variant?: 'centered' | 'split' | 'peach';
  eyebrow?: string;
  /** Eyebrow tone; defaults to teal (coral inside `split`). */
  eyebrowTone?: 'rose' | 'teal' | 'coral';
  headline?: string;
  subhead?: string;
  primaryCta?: string;
  secondaryCta?: string;
  logo?: string;
  links?: string[];
  /** Placeholder label shown in the `split` photo panel. */
  photoLabel?: string;
}
```

## Examples

```jsx
const COPY = {
  eyebrow: 'On-site salon & spa for senior living',
  headline: 'Give every resident a spa day without asking more of your staff.',
  subhead:
    'StyleQ partners with senior living communities to bring licensed, elder care-trained stylists on site. Your residents get the spa-quality hair, nails, and grooming care they love, and your team doesn’t lift a finger.',
};

export function Split() {
  return <Hero variant="split" {...COPY} />;
}
export function Centered() {
  return <Hero variant="centered" eyebrowTone="teal" {...COPY} />;
}
export function PeachBreak() {
  return <Hero variant="peach" eyebrowTone="rose" {...COPY} />;
}
```
