import Image from "next/image";
import { CircleCheck, CircleX, Mail, Phone } from "lucide-react";
import AnchorLink from "@/components/AnchorLink";
import BrandLeaf from "@/components/BrandLeaf";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import InkBloom from "@/components/InkBloom";
import Marquee from "@/components/Marquee";
import NavBar from "@/components/NavBar";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import SmoothScroll from "@/components/SmoothScroll";
import Strands from "@/components/Strands";
import Threads from "@/components/Threads";

const BOOK_HREF = "/#contact";
const BROCHURE_HREF = "/brochure.pdf";
const PHONE_HREF = "tel:+14142061690";

// Shared horizontal padding so every section lines up on the same rails.
const PAD_X = "px-6 md:px-12 lg:px-30";

/* ---------- small building blocks ---------- */

function EyebrowLeaf({ children, className = "text-sq-coral" }) {
  return (
    <div className="flex items-center gap-2.5">
      <BrandLeaf className={`h-4 w-4 ${className}`} />
      <span className="text-[13px] font-semibold tracking-[2.4px] text-sq-rose">
        {children}
      </span>
    </div>
  );
}

function Eyebrow({ children, className = "text-sq-rose" }) {
  return (
    <span className={`text-[13px] font-semibold tracking-[3px] ${className}`}>
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  external,
  icon: Icon,
  children,
  className = "",
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full bg-sq-rose px-[30px] py-[15px] text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25 ${className}`;
  const inner = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <AnchorLink href={href} className={cls}>
      {inner}
    </AnchorLink>
  );
}

function OutlineButton({
  href,
  external,
  icon: Icon,
  children,
  className = "",
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-sq-peach px-[30px] py-[15px] text-[15px] font-medium text-sq-ink transition-all duration-300 hover:border-sq-rose hover:text-sq-rose ${className}`;
  const inner = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <AnchorLink href={href} className={cls}>
      {inner}
    </AnchorLink>
  );
}

function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-2.5">
      <CircleCheck className="mt-[2px] h-[18px] w-[18px] shrink-0 text-sq-rose" />
      <span className="text-[15px] leading-[22px] font-medium text-sq-ink">
        {children}
      </span>
    </div>
  );
}

function CrossItem({ children }) {
  return (
    <div className="flex items-start gap-2.5">
      <CircleX className="mt-[2px] h-[17px] w-[17px] shrink-0 text-[#C9C2CE]" />
      <span className="text-[15px] leading-[22px] text-sq-muted">
        {children}
      </span>
    </div>
  );
}

/* ---------- content data ---------- */

const problems = [
  {
    title: "A vendor monopoly has your community in a chokehold",
    desc: "You're locked into whoever was assigned to your building, with no real alternative. Quality drops, utilization drops, and there's nothing you can do about it, because you're not big enough for them to care.",
  },
  {
    title: "Rushed care that shows up on your residents",
    desc: "Wet hair that shouldn't be. Hair left on their clothes. Residents rushed through like an assembly line. It didn't happen because of you, but it happened on your watch.",
  },
  {
    title: "Billing that's built for their convenience, not yours",
    desc: "No itemizing by resident. Everything lumped together, every single month. One more accounting headache that shouldn't exist.",
  },
];

const features = [
  {
    id: "services",
    reverse: false,
    image: "/images/generated-1784589744598.png",
    alt: "A StyleQ stylist styling a resident's hair on a salon day",
    heading: "Salon days, handled start to finish",
    para: "You don't schedule it, staff it, or manage it. Vetted stylists show up every week and run the day. You just walk by and it's done.",
    checks: [
      "Hair Styling",
      "Manicures & Nail Care",
      "Gentle Facials",
      "Grooming",
    ],
    buttons: [
      { label: "Book a Call", href: BOOK_HREF, variant: "primary" },
      { label: "Our Services", href: "/#services", variant: "outline" },
    ],
  },
  {
    id: "radiant",
    reverse: true,
    image: "/images/generated-1784746115985.png",
    alt: "A resident smiling after a StyleQ salon visit",
    heading: "We make radiant residents the easiest part of your calendar",
    para: "No rushing, no assembly line. Just someone who actually listens to what a resident wants, and takes the time to get it right.",
    checks: [
      "Services built around what residents want",
      "Licensed, insured stylists",
      "Trained for elder care",
      "Care that gets noticed, by residents and by their families",
    ],
    buttons: [
      { label: "Book a Call", href: BOOK_HREF, variant: "primary" },
      { label: "Our Stylists", href: BOOK_HREF, variant: "outline" },
    ],
  },
  {
    id: "billing",
    reverse: false,
    image: "/images/generated-1784746160431.png",
    alt: "A stylist reviewing simple, flexible billing with a resident",
    heading: "Billing that bends to how you actually run things",
    para: "Bulk billing, per-resident billing, resident self-pay, whatever fits how your facility operates. You're only billed for the services residents actually receive.",
    checks: [
      "No cost to you to set up",
      "Flexible billing structure",
      "Easy to adjust as your facility's needs change",
    ],
    buttons: [{ label: "Book a Call", href: BOOK_HREF, variant: "primary" }],
  },
];

const steps = [
  {
    num: "01",
    title: "Pick your rhythm",
    desc: "Choose a cadence that fits your community: weekly, biweekly, or for special occasions. We slot right into your activity calendar.",
  },
  {
    num: "02",
    title: "We arrive with everything",
    desc: "Chairs, warm towels, gentle products, and friendly stylists. No setup needed from your staff.",
  },
  {
    num: "03",
    title: "Residents glow",
    desc: "Fresh styles, soft hands, and lifted spirits. It's the kind of change families mention on their very next visit.",
  },
];

const vendorPoints = [
  "Typically assigned to you",
  "Rushed visits, inconsistent quality",
  "One rigid billing structure for everyone",
  "Multi-year contracts upfront with no proof of quality",
  "You're stuck if it's not working",
];

const styleqPoints = [
  "Vetted and insured stylists",
  "Unhurried service",
  "Trained for elder care",
  "Flexible billing",
  "Responsive and proactive",
  "Start small before opening to all residents",
  "Flexible contracts",
];

const partners = [
  { src: "/images/logo-bgv.png", alt: "BGV", w: 214, h: 300, cls: "h-[50px]" },
  {
    src: "/images/logo-mketech-v2.png",
    alt: "MKE Tech Hub Coalition",
    w: 1146,
    h: 300,
    cls: "h-[34px]",
  },
  {
    src: "/images/logo-wedc.png",
    alt: "Wisconsin Economic Development Corporation",
    w: 1213,
    h: 300,
    cls: "h-[34px]",
  },
  {
    src: "/images/logo-gbeta.png",
    alt: "gBETA",
    w: 1020,
    h: 300,
    cls: "h-[34px]",
  },
  {
    src: "/images/logo-sxsw.png",
    alt: "SXSW",
    w: 1304,
    h: 300,
    cls: "h-[28px]",
  },
];

const testimonials = [
  {
    quote:
      "“StyleQ afternoons are the highlight of our activity calendar. Residents line up early, hair done, nails polished, spirits lifted for days.”",
    initials: "DW",
    name: "Dana Whitfield",
    role: "Activity Director, Maplewood Senior Living",
    color: "text-sq-teal",
    avatarBg: "bg-[#EAF3F3]",
  },
  {
    quote:
      "“Mom gets her hair set every other Friday, just like she did for fifty years. When I visit, she’s glowing. I can’t put a price on that.”",
    initials: "RA",
    name: "Renee Alvarez",
    role: "Daughter of a resident",
    color: "text-sq-coral",
    avatarBg: "bg-[#FDEEEA]",
  },
  {
    quote:
      "“They treat me like a lady, not a task on a chart. It’s my little spa day, and I have never once missed it.”",
    initials: "MH",
    name: "Margaret “Peggy” Holloway",
    role: "Resident, age 87",
    color: "text-sq-plum",
    avatarBg: "bg-[#F1EBF6]",
  },
];

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-12 overflow-x-clip px-6 pt-8 pb-14 md:px-12 lg:flex-row lg:gap-18 lg:px-20 lg:pt-12 lg:pb-20">
      <Parallax
        speed={0.1}
        className="absolute bottom-6 left-7 hidden lg:block"
        aria-hidden="true"
      >
        <BrandLeaf className="h-21 w-21 rotate-[-18deg] text-sq-peach opacity-55" />
      </Parallax>
      <Parallax
        speed={0.17}
        className="absolute bottom-14 left-31 hidden lg:block"
        aria-hidden="true"
      >
        <BrandLeaf className="h-13 w-13 rotate-30 text-sq-coral opacity-35" />
      </Parallax>

      <div className="relative z-10 flex w-full flex-1 flex-col items-start gap-7">
        <div className="animate-fade-up">
          <EyebrowLeaf>ON-SITE SALON &amp; SPA FOR SENIOR LIVING</EyebrowLeaf>
        </div>
        <h1
          className="animate-fade-up font-heading text-[34px] leading-10 font-medium text-sq-ink sm:text-[42px] sm:leading-12 lg:text-[58px] lg:leading-16.25"
          style={{ animationDelay: "0.08s" }}
        >
          One less thing on your salon room&apos;s to-do list.
        </h1>
        <p
          className="animate-fade-up text-[16px] leading-[26px] text-sq-muted lg:text-[17px] lg:leading-[28px]"
          style={{ animationDelay: "0.16s" }}
        >
          We bring vetted stylists to your facility every week for hair, nails,
          and massage. No scheduling, no supervising, no new complaints landing
          on your desk. Just happier residents.
        </p>
        <div
          className="animate-fade-up flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: "0.24s" }}
        >
          <AnchorLink
            href={BOOK_HREF}
            className="rounded-full bg-sq-rose px-8 py-4 text-center text-[16px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25"
          >
            Book a Call
          </AnchorLink>
          <AnchorLink
            href="/#how-it-works"
            className="rounded-full border-[1.5px] border-sq-peach px-8 py-4 text-center text-[16px] font-medium text-sq-ink transition-all duration-300 hover:border-sq-rose hover:text-sq-rose"
          >
            Learn More
          </AnchorLink>
        </div>
      </div>

      <div className="group relative h-[360px] w-full max-w-[420px] shrink-0 overflow-hidden rounded-tl-[120px] rounded-tr-[28px] rounded-br-[120px] rounded-bl-[28px] sm:h-[460px] sm:max-w-[500px] md:h-96 md:w-[400px] xl:h-[600px] xl:w-[600px] lg:max-w-none lg:rounded-tl-[200px] lg:rounded-tr-[40px] lg:rounded-br-[200px] lg:rounded-bl-[40px]">
        <Image
          src="/images/hero-salon.png"
          alt="A StyleQ stylist giving a resident a gentle salon treatment"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 560px"
          className="scale-x-[-1] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-x-[-1.05] group-hover:scale-y-105 motion-reduce:transform-none"
        />
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className={`${PAD_X} pt-2 pb-14`}>
      <Reveal className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 lg:justify-end">
        {partners.map(({ src, alt, w, h, cls }) => (
          <Image
            key={alt}
            src={src}
            alt={alt}
            width={w}
            height={h}
            className={`${cls} w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`}
          />
        ))}
      </Reveal>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      className={`relative flex flex-col justify-center overflow-hidden ${PAD_X} py-20 lg:py-36`}
    >
      {/* Darker-cream panel with a WebGL ink bloom on top, densest at the
          top-right and feathered into the page cream toward the bottom-left. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 -z-0 h-[560px] w-[min(1080px,88%)] [mask-image:radial-gradient(130%_120%_at_100%_8%,black_36%,transparent_82%)]"
      >
        <div className="absolute inset-0 bg-sq-hero-cream" />
        <InkBloom className="absolute inset-0" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <h2 className="max-w-[760px] font-heading text-[28px] leading-[36px] font-medium text-sq-ink sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[48px]">
            Why your salon room isn&apos;t working the way it should
          </h2>
          <p className="max-w-[620px] text-[16px] leading-[26px] text-sq-muted">
            It&apos;s not your fault, and it&apos;s not out of options.
            Here&apos;s what&apos;s actually going wrong.
          </p>
        </Reveal>
        <div className="mt-8 grid w-full grid-cols-1 gap-7 text-left lg:grid-cols-3">
          {problems.map(({ title, desc }, i) => (
            <Reveal key={title} delay={i * 90} className="flex">
              <div className="flex w-full flex-col gap-3.5 rounded-3xl bg-white px-[30px] py-8 shadow-sm shadow-sq-plum/[0.03]">
                <h3 className="text-[18px] leading-[24px] font-semibold text-sq-ink">
                  {title}
                </h3>
                <p className="text-[15px] leading-[25px] text-sq-muted">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  id,
  reverse,
  image,
  alt,
  heading,
  para,
  checks,
  buttons,
}) {
  return (
    <section
      id={id}
      className={`relative flex items-center overflow-hidden ${PAD_X} py-16 lg:py-32`}
    >
      {/* Cream panel sitting behind the copy, ending at the center of the image. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 hidden h-[520px] -translate-y-1/2 bg-sq-hero-cream lg:block ${
          reverse
            ? "right-0 left-[350px]"
            : "right-[350px] left-0"
        }`}
      />
      <div
        className={`relative z-10 flex w-full flex-col gap-10 lg:gap-20 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <Reveal className="flex flex-1 flex-col items-start gap-[22px]">
          <h2 className="font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[36px] sm:leading-[43px]">
            {heading}
          </h2>
          <p className="text-[16px] leading-[27px] text-sq-muted">{para}</p>
          <div className="flex flex-col gap-3 py-1.5">
            {checks.map((c) => (
              <CheckItem key={c}>{c}</CheckItem>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {buttons.map(({ label, href, variant }) =>
              variant === "primary" ? (
                <PrimaryButton key={label} href={href}>
                  {label}
                </PrimaryButton>
              ) : (
                <OutlineButton key={label} href={href}>
                  {label}
                </OutlineButton>
              ),
            )}
          </div>
        </Reveal>
        <Reveal className="w-full shrink-0 lg:w-[460px]">
          <div className="relative h-[340px] w-full overflow-hidden rounded-tl-[120px] rounded-tr-[32px] rounded-br-[120px] rounded-bl-[32px] sm:h-[420px]">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ThreadsDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[250px] w-full overflow-hidden opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)]"
    >
      <Threads color={[0.776, 0.357, 0.537]} amplitude={1.7} distance={0.5} />
    </div>
  );
}

function StrandsDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[220px] w-full max-w-[1100px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
    >
      <Strands
        colors={["#C65B89", "#74508F", "#F6D4AC"]}
        count={3}
        speed={0.3}
        amplitude={1}
        thickness={0.6}
        glow={1.1}
        taper={3.5}
        intensity={0.35}
        saturation={0.75}
        opacity={0.5}
        scale={4.6}
      />
    </div>
  );
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={`flex flex-col items-center gap-10 ${PAD_X} py-20 lg:py-24`}
    >
      <Reveal className="flex flex-col items-center gap-4 text-center">
        <Eyebrow>HOW IT WORKS</Eyebrow>
        <h2 className="max-w-[720px] font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[48px]">
          Three steps to a salon room that runs itself.
        </h2>
        <p className="max-w-[720px] text-[16px] leading-[26px] text-sq-muted">
          No new systems, no staff to manage, no training for your team. We
          handle it end to end, so residents get cared for and it never touches
          your to-do list.
        </p>
      </Reveal>
      <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-3">
        {steps.map(({ num, title, desc }, i) => (
          <Reveal key={num} delay={i * 90} className="flex">
            <div className="flex w-full flex-col gap-3 rounded-3xl bg-white px-[30px] py-8 shadow-sm shadow-sq-plum/[0.03]">
              <div className="font-heading text-[34px] font-medium text-sq-coral italic">
                {num}
              </div>
              <h3 className="font-heading text-[22px] font-medium text-sq-ink">
                {title}
              </h3>
              <p className="text-[15px] leading-[24px] text-sq-muted">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <PrimaryButton href={BOOK_HREF} className="px-8 py-4">
          Get in touch
        </PrimaryButton>
      </Reveal>
    </section>
  );
}

function Difference() {
  return (
    <section
      id="difference"
      className={`flex flex-col items-center gap-11 ${PAD_X} py-20 lg:py-24`}
    >
      <Reveal className="flex flex-col items-center gap-4 text-center">
        <Eyebrow>HOW WE&apos;RE DIFFERENT</Eyebrow>
        <h2 className="max-w-[860px] font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[48px]">
          We&apos;re not just a mobile salon. We&apos;re the partner that
          actually listens.
        </h2>
        <p className="max-w-[720px] text-[16px] leading-[26px] text-sq-muted">
          Keep your salon room. We bring the vetted stylist, the schedule, and
          the flexibility your current vendor never offered.
        </p>
      </Reveal>

      <div className="relative flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-0">
        {/* Typical vendors: skewed and scaled back so it reads as the option
            left behind, with the StyleQ card overlapping in front of it. */}
        <Reveal className="relative z-0 flex w-full flex-col gap-[18px] rounded-[28px] border border-sq-line bg-white px-9 py-10 shadow-sm lg:w-[380px] lg:shrink-0 lg:-rotate-[3deg] lg:scale-[0.93] xl:w-[430px]">
          <span className="text-[14px] font-semibold tracking-[2px] text-sq-muted">
            TYPICAL SALON VENDORS
          </span>
          <h3 className="font-heading text-[22px] font-medium text-sq-ink">
            One provider, no options
          </h3>
          <div className="flex flex-col gap-3 pt-1">
            {vendorPoints.map((p) => (
              <CrossItem key={p}>{p}</CrossItem>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative z-10 w-full shrink-0 overflow-hidden rounded-[28px] border border-[#F1DBDF] bg-linear-[57deg,#FDEBD9_15%,#F8DCE7_85%] px-10 py-13 shadow-[0_34px_70px_-16px_#C65B8945] lg:-ml-12 lg:w-[520px] xl:-ml-14 xl:w-[580px]">
          <BrandLeaf
            aria-hidden="true"
            className="absolute -top-12 -right-12 h-[250px] w-[250px] rotate-[25deg] text-sq-rose opacity-[0.09]"
          />
          <div className="relative z-10 flex flex-col gap-[18px]">
            <Image
              src="/images/styleq-logo.png"
              alt="StyleQ"
              width={500}
              height={165}
              className="h-[33px] w-auto self-start"
            />
            <h3 className="font-heading text-[22px] font-medium text-sq-ink">
              The partner built around your residents
            </h3>
            <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
              {styleqPoints.map((p) => (
                <CheckItem key={p}>{p}</CheckItem>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <PrimaryButton href={BOOK_HREF} className="px-8 py-4">
          Book a Call
        </PrimaryButton>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`flex flex-col items-center gap-14 ${PAD_X} py-20 lg:py-24`}
    >
      <Reveal className="flex w-full max-w-[640px] flex-col items-center gap-3.5 text-center">
        <Eyebrow className="text-sq-teal">KIND WORDS</Eyebrow>
        <h2 className="font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[48px]">
          Trusted by care teams and people they care for
        </h2>
      </Reveal>
      <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        {testimonials.map(
          ({ quote, initials, name, role, color, avatarBg }, i) => (
            <Reveal key={name} delay={i * 90} className="flex">
              <div className="flex w-full flex-col items-start gap-6 rounded-3xl border border-sq-line bg-white p-9 transition duration-300 hover:border-transparent hover:shadow-xl hover:shadow-sq-plum/5">
                <div
                  className={`font-heading text-[52px] leading-[36px] ${color}`}
                >
                  “
                </div>
                <p className="text-[15px] leading-[25px] text-sq-ink">
                  {quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${avatarBg}`}
                  >
                    <span className={`text-[14px] font-semibold ${color}`}>
                      {initials}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-semibold text-sq-ink">
                      {name}
                    </span>
                    <span className="text-[13px] text-sq-muted">{role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section
      id="faq"
      className={`flex flex-col items-center gap-10 ${PAD_X} py-20 lg:py-24`}
    >
      <Reveal>
        <h2 className="text-center font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[36px] lg:text-[40px]">
          Frequently Asked Questions
        </h2>
      </Reveal>
      <Reveal className="flex w-full justify-center">
        <FaqAccordion />
      </Reveal>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="contact" className={`${PAD_X} pb-24 lg:pb-28`}>
      <Reveal className="relative flex flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-linear-[68deg,#74508F_15%,#C65B89_85%] px-6 py-16 text-center sm:px-12 lg:rounded-[44px] lg:px-30 lg:py-22">
        <Parallax
          speed={0.14}
          className="absolute -top-24 -left-32 h-[260px] w-[260px]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-[35deg]">
            <path
              d="M60 0c35 30 35 85 0 120-35-35-35-90 0-120z"
              fill="#FFFFFF14"
            />
          </svg>
        </Parallax>
        <Parallax
          speed={0.09}
          className="absolute top-[120px] right-[-100px] h-[300px] w-[300px]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" className="h-full w-full rotate-[140deg]">
            <path
              d="M60 0c35 30 35 85 0 120-35-35-35-90 0-120z"
              fill="#FFFFFF12"
            />
          </svg>
        </Parallax>

        <Eyebrow className="relative z-10 text-sq-peach">
          READY WHEN YOU ARE
        </Eyebrow>
        <h2 className="relative z-10 max-w-[760px] font-heading text-[30px] leading-[38px] font-medium text-white sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[51px]">
          Your salon room shouldn&apos;t be one more thing you worry about.
        </h2>
        <p className="relative z-10 max-w-[620px] text-[16px] leading-[26px] text-white/80">
          Book a call or download the brochure: the services we offer, our
          licensing and insurance, how billing works, and how a risk-free pilot
          begins. No cost to your community, ever.
        </p>
        <div className="relative z-10 flex flex-col items-center gap-4 pt-4 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-[18px] text-[15px] font-semibold text-sq-plum shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
          >
            <Phone className="h-4 w-4" />
            Book a Call
          </a>
          <a
            href={BROCHURE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-white/55 px-9 py-[18px] text-[15px] font-semibold text-white transition-all duration-300 hover:border-white"
          >
            <Mail className="h-4 w-4" />
            Get our brochure
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <NavBar />
      <main>
        <Hero />
        <Partners />
        <Marquee />
        <ProblemSection />
        {features.map((f) => (
          <FeatureBlock key={f.id} {...f} />
        ))}
        <ThreadsDivider />
        <HowItWorks />
        <Difference />
        <StrandsDivider />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
