ScriptCard from @styleq/brand. Use via `window.StyleQ.ScriptCard` (bundle loaded from the root `_ds_bundle.js`).

One administrator-facing conversation opener per card. These are drop-in scripts pulled from buyer interviews — not headline copy. The teal left border marks them as trust/credibility content.

Variants (see `ScriptCard.html`): Monopoly, ZeroLift.

## Props

```ts
interface ScriptCardProps {
  children?: React.ReactNode;
}
```

## Examples

```jsx
export function Monopoly() {
  return (
    <ScriptCard>
      &ldquo;We know a lot of communities feel like they are at the mercy of a monopoly. You only have one option, and the vendor knows it.&rdquo;
    </ScriptCard>
  );
}
export function ZeroLift() {
  return (
    <ScriptCard>
      &ldquo;We know your main goal is an easy customer service tweak that solves problems without creating more work for you.&rdquo;
    </ScriptCard>
  );
}
```
