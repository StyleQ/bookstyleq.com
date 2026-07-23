NavBar from @styleq/brand. Use via `window.StyleQ.NavBar` (bundle loaded from the root `_ds_bundle.js`).

The site header. Exactly one CTA, always rose. Mark the current page with `active`; mark not-yet-shipped items with `soon` (dimmed, non-interactive).

Variants (see `NavBar.html`): Default.

## Props

```ts
interface NavBarProps {
  /** Wordmark text (Geist 700). */
  logo?: string;
  links?: Array<{ label: string; active?: boolean; soon?: boolean }>;
  /** CTA button label (always rose). */
  cta?: string;
  onCta?: React.MouseEventHandler<HTMLButtonElement>;
}
```

## Examples

```jsx
export function Default() {
  return (
    <NavBar
      links={[
        { label: 'Services', active: true },
        { label: 'For Facilities' },
        { label: 'Contact' },
      ]}
    />
  );
}
```
