AudienceCard from @styleq/brand. Use via `window.StyleQ.AudienceCard` (bundle loaded from the root `_ds_bundle.js`).

Used on positioning and voice pages. Administrator = reliability register (teal tag); residents/families = warmth register (coral tag). The say/avoid lists keep the two voices from bleeding into each other.

Variants (see `AudienceCard.html`): Administrator, ResidentFamily.

## Props

```ts
interface AudienceCardProps {
  name: string;
  /** Register label, e.g. "Reliability register". */
  tag?: string;
  tagTone?: 'teal' | 'coral' | 'rose';
  /** The core framing paragraph. */
  core?: string;
  /** Phrases to use with this audience (green checks). */
  say?: string[];
  /** Phrases to avoid (coral crosses). */
  avoid?: string[];
  /** A sample line in this audience's voice (Fraunces italic). */
  sample?: string;
}
```

## Examples

```jsx
export function Administrator() {
  return (
    <AudienceCard
      name="The Administrator"
      tag="Reliability register"
      tagTone="teal"
      core="The economic buyer. Judges every vendor by one filter: does this create work or solve problems? Speak to calm operations, zero lift for staff, and a risk-free pilot."
      say={['Zero lift for your team', 'Does this solve problems?', 'Start with a pilot', 'Separate invoicing']}
      avoid={['Beauty brand language', 'Coral / consumer warmth', 'Long-term contract first', 'More work for nurses']}
      sample="We aren’t here to create more work for your billing department."
    />
  );
}

export function ResidentFamily() {
  return (
    <AudienceCard
      name="Residents & Families"
      tag="Warmth register"
      tagTone="coral"
      core="The emotional audience. They want to feel seen and cared for. Lead with dignity and the quiet relief of someone looking like themselves again."
      say={['She looks like herself again', 'Spa-quality care on site', 'Unhurried and gentle', 'Trained for senior care']}
      avoid={['Clinical / vendor tone', 'Rushed “assembly line”', 'Teal on a CTA button', 'Pressure to commit']}
      sample="She looks like herself again — that means everything."
    />
  );
}
```
