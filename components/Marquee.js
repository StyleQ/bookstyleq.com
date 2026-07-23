import BrandLeaf from "./BrandLeaf";

const phrases = [
  "GLOWING RESIDENTS",
  "CARE THAT FAMILIES NOTICE",
  "SERVICES RESIDENTS WANT",
  "THE BEST STYLISTS",
  "TO A LONG HAPPY LIFE",
];

function Group({ ariaHidden = false }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-[26px] px-[13px]"
    >
      {phrases.map((phrase, i) => (
        <div key={`${phrase}-${i}`} className="flex items-center gap-[26px]">
          <span className="text-[13px] font-semibold tracking-[2px] whitespace-nowrap text-sq-ink">
            {phrase}
          </span>
          <BrandLeaf className="h-3 w-3 shrink-0 text-sq-coral opacity-60" />
        </div>
      ))}
    </div>
  );
}

// Infinite marquee strip. Two identical groups translate left by 50% for a
// seamless loop; the animation is disabled under prefers-reduced-motion
// (see .animate-marquee in globals.css), leaving the strip static.
export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-sq-line py-[18px]">
      <div className="flex w-max animate-marquee">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
