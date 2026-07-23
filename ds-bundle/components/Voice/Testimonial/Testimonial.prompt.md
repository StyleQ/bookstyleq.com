Testimonial from @styleq/brand. Use via `window.StyleQ.Testimonial` (bundle loaded from the root `_ds_bundle.js`).

Coral stays a small accent here — the label only — never a fill. Keep quotes short and human. Resident/family surfaces only; do not use on administrator-facing pages.

Variants (see `Testimonial.html`): Default, LookedForwardTo.

## Props

```ts
interface TestimonialProps {
  /** Small coral label above the quote. */
  label?: string;
  quote: React.ReactNode;
}
```

## Examples

```jsx
export function Default() {
  return <Testimonial quote="&ldquo;She looks like herself again — that means everything.&rdquo;" />;
}
export function LookedForwardTo() {
  return <Testimonial label="From a family" quote="&ldquo;My mother actually looks forward to salon day now.&rdquo;" />;
}
```
