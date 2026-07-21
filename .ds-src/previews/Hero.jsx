const { Hero } = window.StyleQ;

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
