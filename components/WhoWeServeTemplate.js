import Image from "next/image";
import Link from "next/link";
import { CircleX, Sparkles, ShieldCheck, Heart } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BrandLeaf from "@/components/BrandLeaf";
import HeroLeafCluster from "@/components/HeroLeafCluster";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import { PAD_X, Eyebrow, PrimaryButton, OutlineButton } from "@/components/ui";

const BOOK_HREF = "/book-a-call";
const BENEFIT_ICONS = [Sparkles, ShieldCheck, Heart];

const sectionCls = `flex flex-col items-center gap-4 border-t border-sq-line text-center ${PAD_X} py-16 lg:py-24`;
const h2Cls =
  "max-w-[820px] font-heading text-[28px] leading-[36px] font-medium text-sq-ink sm:text-[34px] sm:leading-[42px] lg:text-[38px] lg:leading-[46px]";
const subCls = "max-w-[680px] text-[16px] leading-[26px] text-sq-muted";

function BookCta() {
  return (
    <Reveal className="pt-4">
      <PrimaryButton href={BOOK_HREF}>Book a Call</PrimaryButton>
    </Reveal>
  );
}

export default function WhoWeServeTemplate({ audience }) {
  const { hero, problem, whatWeDo, anySpace, faqs, cta } = audience;

  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section
          className={`relative flex flex-col items-center gap-5 overflow-hidden bg-sq-hero-cream text-center ${PAD_X} py-20 lg:py-28`}
        >
          <BrandLeaf
            aria-hidden="true"
            className="absolute -top-6 -left-10 h-[160px] w-[160px] -rotate-[24deg] text-sq-peach opacity-30"
          />
          <HeroLeafCluster className="hidden lg:block" />
          <Reveal className="relative z-10 flex flex-col items-center gap-5">
            <Eyebrow>WHO WE SERVE</Eyebrow>
            <h1 className="max-w-[820px] font-heading text-[34px] leading-[42px] font-medium text-sq-ink sm:text-[44px] sm:leading-[52px] lg:text-[52px] lg:leading-[60px]">
              {hero.heading}
            </h1>
            <p className="max-w-[680px] text-[17px] leading-[28px] text-sq-muted">
              {hero.sub}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <PrimaryButton href={BOOK_HREF}>Book a Call</PrimaryButton>
              <OutlineButton href="#what-we-do">Learn More</OutlineButton>
            </div>
          </Reveal>
        </section>

        {/* Problem */}
        <section className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <Eyebrow>THE PROBLEM</Eyebrow>
            <h2 className={h2Cls}>{problem.heading}</h2>
            <p className={subCls}>{problem.sub}</p>
          </Reveal>
          <div className="mt-4 flex w-full max-w-[860px] flex-col gap-4">
            {problem.pains.map((p, i) => (
              <Reveal
                key={p.lead}
                delay={i * 80}
                className="flex items-start gap-4 rounded-2xl border border-sq-line bg-white px-7 py-5 text-left"
              >
                <CircleX className="mt-1 h-5 w-5 shrink-0 text-sq-coral" />
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] font-semibold text-sq-ink">
                    {p.lead}
                  </span>
                  <p className="text-[15px] leading-[24px] text-sq-muted">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* What We Do */}
        <section id="what-we-do" className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2 className={h2Cls}>{whatWeDo.heading}</h2>
            <p className={subCls}>{whatWeDo.sub}</p>
          </Reveal>
          <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.cards.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="flex flex-col items-center gap-3.5 rounded-[24px] bg-white px-4 pt-4 pb-6 shadow-sm shadow-sq-plum/[0.03]"
              >
                <div className="relative h-[180px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-[21px] font-medium text-sq-ink">
                  {c.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-sq-muted">
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="mt-auto rounded-full border-[1.5px] border-sq-peach px-6 py-[9px] text-[14px] font-medium text-sq-ink transition-colors hover:border-sq-rose hover:text-sq-rose"
                >
                  Learn More
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Any Space */}
        <section className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <h2 className={h2Cls}>{anySpace.heading}</h2>
            <p className={subCls}>{anySpace.sub}</p>
          </Reveal>
          <div className="mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {anySpace.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return (
                <Reveal
                  key={b.title}
                  delay={i * 90}
                  className="flex flex-col gap-3.5 rounded-[24px] bg-linear-[145deg,#74508F_10%,#C65B89_95%] px-8 py-9 text-left"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="text-[15px] leading-[24px] text-white/85">
                    {b.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
          <BookCta />
        </section>

        {/* FAQ */}
        <section className={sectionCls}>
          <Reveal>
            <h2 className={h2Cls}>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="flex w-full justify-center">
            <FaqAccordion items={faqs} />
          </Reveal>
        </section>

        {/* Final CTA: full-bleed band pinned flush above the footer */}
        <CtaBand eyebrow={cta.eyebrow} heading={cta.heading} sub={cta.sub} />
      </main>
      <Footer />
    </>
  );
}
