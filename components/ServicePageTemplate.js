import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BrandLeaf from "@/components/BrandLeaf";
import CtaBand from "@/components/CtaBand";
import { PAD_X, Eyebrow, PrimaryButton, OutlineButton } from "@/components/ui";

const BOOK_HREF = "/#contact";

// Sections identical across every service.
const COMFORT = {
  heading: "Wherever a resident is most comfortable, that's where we show up.",
  sub: "Every resident is different, and so is what works for them. Whether it's a trip to the salon or a visit to their room, the same care and attention comes with it.",
  items: [
    {
      label: "In-Salon",
      desc: "For residents who enjoy the routine of the salon.",
    },
    {
      label: "Bedside",
      desc: "For residents who prefer the comfort of their room, or when mobility or medical needs make that the better option. The stylist brings specialized mobile equipment directly to the resident's bedside.",
    },
  ],
};

const STEPS = {
  heading: "A visit from us is as easy as 123...",
  sub: "No setup on your end, no coordination, no supervision. Here's exactly what happens every week.",
  items: [
    {
      num: "01",
      title: "We arrive, fully set up",
      desc: "Everything needed for the salon comes with us. The stylist sets up quickly and quietly, no disruption to your day.",
    },
    {
      num: "02",
      title: "We check in with residents",
      desc: "We check in with residents who need service. We find out what they want and take the time to do it right.",
    },
    {
      num: "03",
      title: "Residents glow",
      desc: "No rushing, no assembly line. Just residents who leave feeling like themselves again, week after week.",
    },
  ],
};

const GALLERY_INTRO = {
  heading: "See the difference a real visit makes.",
  sub: "The kind of results that get noticed, by residents, by families, and by the staff who see them every day.",
};

const VETTED = {
  heading: "Vetted, trained, and here to make your life easier.",
  sub: "The kind of details you shouldn't have to chase down, handled so you never have to think about it.",
  items: [
    {
      num: "01",
      title: "Licensed, insured",
      desc: "Every stylist is state-licensed, background-checked, and covered by our liability policy, with infection-control practices that keep you survey-ready.",
    },
    {
      num: "02",
      title: "Trained for elder care",
      desc: "Gentle techniques adapted for memory care, limited mobility, and sensitive skin.",
    },
    {
      num: "03",
      title: "Zero lift for your staff",
      desc: "We handle scheduling, reminders, coordination, and billing from start to finish.",
    },
  ],
};

const sectionCls = `flex flex-col items-center gap-4 border-t border-sq-line text-center ${PAD_X} py-16 lg:py-24`;
const h2Cls =
  "max-w-[760px] font-heading text-[28px] leading-[36px] font-medium text-sq-ink sm:text-[34px] sm:leading-[42px] lg:text-[38px] lg:leading-[46px]";
const subCls = "max-w-[640px] text-[16px] leading-[26px] text-sq-muted";

function BookCta() {
  return (
    <Reveal className="pt-4">
      <PrimaryButton href={BOOK_HREF}>Book a Call</PrimaryButton>
    </Reveal>
  );
}

function NumberCard({ num, title, desc }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-3xl border border-sq-line bg-white px-8 py-9 text-left">
      <span className="font-heading text-[30px] leading-none font-medium text-sq-rose/80">
        {num}
      </span>
      <h3 className="text-[18px] font-semibold text-sq-ink">{title}</h3>
      <p className="text-[15px] leading-[24px] text-sq-muted">{desc}</p>
    </div>
  );
}

export default function ServicePageTemplate({ service }) {
  const { hero, offerings, gallery, ctaHeading } = service;

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
            className="absolute -top-6 -right-8 h-[220px] w-[220px] rotate-[18deg] text-sq-peach opacity-40"
          />
          <BrandLeaf
            aria-hidden="true"
            className="absolute -bottom-10 -left-10 h-[160px] w-[160px] -rotate-[24deg] text-sq-coral opacity-20"
          />
          <Reveal className="relative z-10 flex flex-col items-center gap-5">
            <h1 className="max-w-[800px] font-heading text-[34px] leading-[42px] font-medium text-sq-ink sm:text-[44px] sm:leading-[52px] lg:text-[52px] lg:leading-[60px]">
              {hero.heading}
            </h1>
            <p className="max-w-[640px] text-[17px] leading-[28px] text-sq-muted">
              {hero.sub}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <PrimaryButton href={BOOK_HREF}>Book a Call</PrimaryButton>
              <OutlineButton href="#offerings">
                See what&apos;s included
              </OutlineButton>
            </div>
          </Reveal>
        </section>

        {/* Offerings */}
        <section id="offerings" className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <Eyebrow>{offerings.eyebrow}</Eyebrow>
            <h2 className={h2Cls}>{offerings.heading}</h2>
            <p className={subCls}>{offerings.sub}</p>
          </Reveal>
          <div className="mt-6 grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.cards.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="flex flex-col gap-3.5 text-left"
              >
                <div className="relative h-[200px] w-full overflow-hidden rounded-[22px]">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[18px] font-semibold text-sq-ink">
                  {c.title}
                </h3>
                <p className="text-[15px] leading-[24px] text-sq-muted">
                  {c.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* Comfort */}
        <section className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <h2 className={h2Cls}>{COMFORT.heading}</h2>
            <p className={subCls}>{COMFORT.sub}</p>
          </Reveal>
          <div className="mt-4 grid w-full max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
            {COMFORT.items.map((item) => (
              <Reveal
                key={item.label}
                className="flex flex-col gap-2 rounded-3xl border border-sq-line bg-white px-8 py-8 text-left"
              >
                <span className="text-[17px] font-semibold text-sq-rose">
                  {item.label}
                </span>
                <p className="text-[15px] leading-[24px] text-sq-muted">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* How it works */}
        <section className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <h2 className={h2Cls}>{STEPS.heading}</h2>
            <p className={subCls}>{STEPS.sub}</p>
          </Reveal>
          <div className="mt-6 flex w-full flex-col gap-6 lg:flex-row">
            {STEPS.items.map((s, i) => (
              <Reveal key={s.num} delay={i * 90} className="flex flex-1">
                <NumberCard {...s} />
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* Gallery */}
        <section className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <h2 className={h2Cls}>{GALLERY_INTRO.heading}</h2>
            <p className={subCls}>{GALLERY_INTRO.sub}</p>
          </Reveal>
          <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 90}>
                <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] sm:h-[360px]">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 90vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* Vetted */}
        <section className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <h2 className={h2Cls}>{VETTED.heading}</h2>
            <p className={subCls}>{VETTED.sub}</p>
          </Reveal>
          <div className="mt-6 flex w-full flex-col gap-6 lg:flex-row">
            {VETTED.items.map((s, i) => (
              <Reveal key={s.num} delay={i * 90} className="flex flex-1">
                <NumberCard {...s} />
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* Final CTA: full-bleed band pinned flush above the footer */}
        <CtaBand
          eyebrow="FOR SENIOR LIVING COMMUNITIES"
          heading={ctaHeading}
          sub="Let's talk about your residents and build a weekly schedule that just works."
        />
      </main>
      <Footer />
    </>
  );
}
