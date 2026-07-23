import Reveal from "@/components/Reveal";
import AnchorLink from "@/components/AnchorLink";
import { PAD_X, Eyebrow } from "@/components/ui";

// Full-bleed gradient CTA band pinned flush above the footer on sub-pages.
// Owns all the styling; callers pass only the copy.
export default function CtaBand({
  eyebrow,
  heading,
  sub,
  buttonLabel = "Book a Call",
  href = "/#contact",
}) {
  return (
    <section className="bg-linear-[68deg,#74508F_15%,#C65B89_85%]">
      <Reveal
        className={`flex flex-col items-center gap-6 ${PAD_X} py-14 text-center lg:h-[220px] lg:flex-row lg:gap-14 lg:py-0 lg:text-left`}
      >
        <div className="flex flex-col items-center gap-3 lg:flex-1 lg:items-start">
          <Eyebrow className="text-sq-peach">{eyebrow}</Eyebrow>
          <h2 className="max-w-[900px] font-heading text-[28px] leading-[36px] font-medium text-white sm:text-[34px] sm:leading-[42px]">
            {heading}
          </h2>
          <p className="max-w-[720px] text-[16px] leading-[26px] text-white/85">
            {sub}
          </p>
        </div>
        <AnchorLink
          href={href}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-[30px] py-[15px] text-[15px] font-medium text-sq-rose shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
        >
          {buttonLabel}
        </AnchorLink>
      </Reveal>
    </section>
  );
}
