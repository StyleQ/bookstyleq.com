SocialPost from @styleq/brand. Use via `window.StyleQ.SocialPost` (bundle loaded from the root `_ds_bundle.js`).

Built for administrator feeds — the reliability register. No coral backgrounds; coral appears only as a small tag. Alternate a dark pain-point post, a light solution post, and a proof/stat post; close every 4–5 cycle with a `gradient` CTA post so it lands.

Variants (see `SocialPost.html`): DarkPainPoint, LightSolution, TealProof, StatCard, GradientClose.

## Props

```ts
interface SocialPostProps {
  /** `dark` / `gradient` for pain-point and closing posts; `light` for plainly-stated solutions; `teal` for zero-lift proof. */
  variant?: 'dark' | 'light' | 'teal' | 'gradient';
  tag?: string;
  /** Tag color: 'teal' | 'coral' | 'cream' | 'ink', or any CSS color. */
  tagTone?: string;
  headline?: React.ReactNode;
  sub?: React.ReactNode;
  /** Oversized rose figure (e.g. "60"). */
  stat?: React.ReactNode;
  footer?: string;
  logo?: string;
}
```

## Examples

```jsx
export function DarkPainPoint() {
  return (
    <SocialPost
      variant="dark"
      tag="The Chokehold Problem"
      tagTone="teal"
      headline="&ldquo;You have one option, and you’re at their mercy.&rdquo;"
      sub="Sound familiar? There’s a better way to run salon days."
    />
  );
}
export function LightSolution() {
  return (
    <SocialPost
      variant="light"
      tag="The Only Filter That Matters"
      tagTone="teal"
      headline="Does this create work — or solve problems?"
    />
  );
}
export function TealProof() {
  return (
    <SocialPost
      variant="teal"
      tag="Zero Lift For Your Team"
      headline="We handle scheduling, supplies, and every stylist relationship — your staff doesn’t lift a finger."
    />
  );
}
export function StatCard() {
  return (
    <SocialPost
      variant="light"
      stat="60"
      sub="days notice is your window. We’ll help you plan your pilot before it opens."
    />
  );
}
export function GradientClose() {
  return (
    <SocialPost
      variant="gradient"
      tag="Start Small, See Fast"
      headline="Pilot in your most acute unit. No contract required to start."
      footer="Book a Consultation → bookstyleq.com"
    />
  );
}
```
