/* StyleQ Brand System — presentational React components.
 * Rendered against the global React (window.React); no imports.
 * Styling is entirely class-based (see _ds_bundle.css + tokens). */

const cx = (...xs) => xs.filter(Boolean).join(' ');

/** Universal call-to-action button. Rose is the only CTA color for every
 * audience; outline is the quiet secondary; teal is reserved for trust
 * contexts (rarely a button); on-gradient is the white button used only
 * inside the once-per-page plum closing band. */
export function Button({ variant = 'primary', size = 'md', children, onClick, type = 'button', className, ...rest }) {
  return React.createElement(
    'button',
    {
      type,
      onClick,
      className: cx('sq-btn', `sq-btn--${variant}`, size === 'sm' && 'sq-btn--sm', className),
      ...rest,
    },
    children,
  );
}

/** Small uppercase section label. Tone follows audience: rose (default,
 * on-page labels), teal (trust / facility-facing), coral (warm /
 * resident-facing). `pill` gives it a tinted rounded background, as used on
 * hero eyebrows. */
export function Eyebrow({ tone = 'rose', pill = false, children, className, ...rest }) {
  return React.createElement(
    'span',
    { className: cx('sq-eyebrow', `sq-eyebrow--${tone}`, pill && 'sq-eyebrow--pill', className), ...rest },
    children,
  );
}

/** Sticky top navigation bar: wordmark, links, and a single rose CTA. */
export function NavBar({ logo = 'StyleQ', links = [], cta = 'Book a Consultation', onCta }) {
  return React.createElement(
    'nav',
    { className: 'sq-nav' },
    React.createElement('span', { className: 'sq-nav__logo' }, logo),
    React.createElement(
      'div',
      { className: 'sq-nav__links' },
      links.map((l, i) =>
        React.createElement(
          'a',
          {
            key: i,
            className: cx('sq-nav__link', l.active && 'sq-nav__link--active', l.soon && 'sq-nav__link--soon'),
          },
          l.label,
        ),
      ),
      React.createElement(Button, { size: 'sm', variant: 'primary', className: 'sq-nav__cta', onClick: onCta }, cta),
    ),
  );
}

function HeroBody({ eyebrow, eyebrowTone = 'teal', headline, subhead, primaryCta = 'Book a Consultation', secondaryCta = 'Explore Services', logo = 'StyleQ', links, showNavLinks }) {
  return React.createElement(
    'div',
    { className: 'sq-hero__inner' },
    React.createElement(
      'div',
      { className: 'sq-hero__nav' },
      React.createElement('span', { className: 'sq-hero__logo' }, logo),
      showNavLinks
        ? React.createElement(
            'div',
            { className: 'sq-hero__navlinks' },
            (links ?? ['Services', 'For Facilities', 'Contact']).map((l, i) => React.createElement('span', { key: i }, l)),
          )
        : null,
      React.createElement(Button, { size: 'sm', variant: 'primary' }, primaryCta),
    ),
    eyebrow ? React.createElement('div', { className: 'sq-hero__eyebrow' }, React.createElement(Eyebrow, { tone: eyebrowTone, pill: true }, eyebrow)) : null,
    React.createElement('h1', { className: 'sq-hero__h1' }, headline),
    React.createElement('p', { className: 'sq-hero__sub' }, subhead),
    React.createElement(
      'div',
      { className: 'sq-hero__ctas' },
      React.createElement(Button, { variant: 'primary' }, primaryCta),
      React.createElement(Button, { variant: 'outline' }, secondaryCta),
    ),
  );
}

/** Marketing hero. Three layouts, identical copy: `centered` (cream, no
 * photo — simplest to ship), `split` (resident photo, the recommended
 * default), `peach` (peach section break for interior/facility pages). */
export function Hero({ variant = 'split', photoLabel = 'Resident photography here', ...body }) {
  if (variant === 'split') {
    return React.createElement(
      'div',
      { className: 'sq-hero' },
      React.createElement(
        'div',
        { className: 'sq-hero__split' },
        React.createElement('div', { style: { background: 'var(--sq-color-cream)' } }, React.createElement(HeroBody, { ...body, eyebrowTone: body.eyebrowTone ?? 'coral', showNavLinks: false })),
        React.createElement('div', { className: 'sq-hero__photo' }, photoLabel),
      ),
    );
  }
  return React.createElement(
    'div',
    { className: cx('sq-hero', `sq-hero--${variant}`) },
    React.createElement(HeroBody, { ...body, showNavLinks: true }),
  );
}

const TAG_TONES = {
  teal: { background: 'rgba(87,151,153,.15)', color: '#579799' },
  coral: { background: 'rgba(246,130,130,.15)', color: '#F68282' },
  rose: { background: 'rgba(198,91,137,.12)', color: '#C65B89' },
};

/** Audience persona card: name, register tag, the core framing, a say/avoid
 * list, and a sample line in the voice. Used on positioning and voice pages. */
export function AudienceCard({ name, tag, tagTone = 'teal', core, say = [], avoid = [], sample }) {
  return React.createElement(
    'div',
    { className: 'sq-audience' },
    React.createElement(
      'div',
      { className: 'sq-audience__top' },
      React.createElement('div', { className: 'sq-audience__name' }, name),
      tag ? React.createElement('span', { className: 'sq-audience__tag', style: TAG_TONES[tagTone] ?? TAG_TONES.teal }, tag) : null,
    ),
    core ? React.createElement('p', { className: 'sq-audience__core' }, core) : null,
    React.createElement(
      'div',
      { className: 'sq-audience__cols' },
      React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'sq-audience__collabel' }, 'Say'),
        React.createElement('ul', { className: 'sq-audience__list sq-audience__list--say' }, say.map((s, i) => React.createElement('li', { key: i }, s))),
      ),
      React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'sq-audience__collabel' }, 'Avoid'),
        React.createElement('ul', { className: 'sq-audience__list sq-audience__list--avoid' }, avoid.map((s, i) => React.createElement('li', { key: i }, s))),
      ),
    ),
    sample ? React.createElement('p', { className: 'sq-audience__sample' }, sample) : null,
  );
}

/** Warm resident/family testimonial: a coral "Kind Words" label over a short
 * quote. Coral stays a small accent here, never a fill. */
export function Testimonial({ label = 'Kind Words', quote }) {
  return React.createElement(
    'div',
    { className: 'sq-testimonial' },
    React.createElement('span', { className: 'sq-testimonial__label' }, label),
    React.createElement('span', { className: 'sq-testimonial__quote' }, quote),
  );
}

/** Sales-call credibility script: a teal-bordered card holding one
 * administrator-facing conversation opener, in the buyer's own language. */
export function ScriptCard({ children }) {
  return React.createElement('div', { className: 'sq-script' }, children);
}

const POST_TAG_TONES = {
  teal: '#579799',
  coral: '#F68282',
  cream: 'var(--sq-color-cream)',
  ink: 'var(--sq-color-ink)',
};

/** Square social post for administrator feeds (LinkedIn / Facebook).
 * Variants: `dark` and `gradient` for pain-point / closing posts, `light`
 * for plain-stated solutions, `teal` for zero-lift proof, plus an optional
 * oversized `stat` figure. Coral only ever appears as a small tag, never a
 * background. */
export function SocialPost({ variant = 'dark', tag, tagTone, headline, sub, stat, footer = 'bookstyleq.com', logo = 'StyleQ' }) {
  const tagColor = tagTone ? POST_TAG_TONES[tagTone] ?? tagTone : undefined;
  return React.createElement(
    'div',
    { className: cx('sq-post', `sq-post--${variant}`) },
    React.createElement('div', { className: 'sq-post__logo' }, logo),
    React.createElement(
      'div',
      { className: 'sq-post__body' },
      tag ? React.createElement('div', { className: 'sq-post__tag', style: tagColor ? { color: tagColor } : undefined }, tag) : null,
      stat != null ? React.createElement('div', { className: 'sq-post__stat' }, stat) : null,
      headline ? React.createElement('div', { className: 'sq-post__headline' }, headline) : null,
      sub ? React.createElement('div', { className: 'sq-post__sub' }, sub) : null,
    ),
    React.createElement('div', { className: 'sq-post__footer' }, footer),
  );
}
