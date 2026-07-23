Button from @styleq/brand. Use via `window.StyleQ.Button` (bundle loaded from the root `_ds_bundle.js`).

Rose (`primary`) is the universal CTA color for residents, families, and facilities alike. Use exactly one primary button per view; pair it with an `outline` secondary. Never use `teal` on a button meant for families or residents — teal is a trust-signal color. `on-gradient` (white) is only for the plum closing band.

Variants (see `Button.html`): Primary, Outline, Teal, OnGradient, PrimaryAndSecondary.

## Props

```ts
interface ButtonProps {
  /** Visual style. `primary` (rose) is the universal CTA for every audience; `outline` is the quiet secondary; `teal` is reserved for trust contexts (rarely a button); `on-gradient` is the white button used ONLY inside the once-per-page plum closing band. */
  variant?: 'primary' | 'outline' | 'teal' | 'on-gradient';
  /** `sm` is the compact size used in nav bars and hero headers. */
  size?: 'md' | 'sm';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}
```

## Examples

```jsx
export function Primary() {
  return <Button variant="primary">Book a Consultation</Button>;
}
export function Outline() {
  return <Button variant="outline">Explore Services</Button>;
}
export function Teal() {
  return <Button variant="teal">Partner with StyleQ</Button>;
}
export function OnGradient() {
  return (
    <div style={{ background: 'linear-gradient(120deg,#74508F,#C65B89)', padding: 30, borderRadius: 12, display: 'inline-block' }}>
      <Button variant="on-gradient">Book a Consultation</Button>
    </div>
  );
}
export function PrimaryAndSecondary() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button variant="primary">Book a Consultation</Button>
      <Button variant="outline">Explore Services</Button>
    </div>
  );
}
```
