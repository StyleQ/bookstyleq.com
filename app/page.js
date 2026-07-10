import Image from "next/image";
import {
  CalendarCheck,
  CalendarHeart,
  Flower,
  HandHeart,
  HeartHandshake,
  PackageOpen,
  Phone,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Wallet,
} from "lucide-react";
import AnchorLink from "@/components/AnchorLink";
import BrandLeaf from "@/components/BrandLeaf";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import NewsletterForm from "@/components/NewsletterForm";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
import Strands from "@/components/Strands";
import Threads from "@/components/Threads";

function Eyebrow({ children, leafClassName = "text-sq-coral" }) {
  return (
    <div className="flex items-center gap-2.5">
      <BrandLeaf className={`h-4 w-4 ${leafClassName}`} />
      <span className="text-[13px] font-semibold tracking-[2.4px] text-sq-rose">
        {children}
      </span>
    </div>
  );
}

const services = [
  {
    Icon: Scissors,
    title: "Hair Styling",
    desc: "Washes, cuts, sets, and styling that residents look forward to each week.",
  },
  {
    Icon: HandHeart,
    title: "Manicures & Nail Care",
    desc: "Soothing hand massages with careful, hygienic nail trimming and polish.",
  },
  {
    Icon: Flower,
    title: "Gentle Facials",
    desc: "Calming, skin-safe facials that refresh and relax delicate skin.",
  },
  {
    Icon: Sparkles,
    title: "Grooming",
    desc: "Shaves, beard trims, and tidy-ups that restore a sense of self.",
  },
];

const steps = [
  {
    num: "01",
    Icon: CalendarHeart,
    title: "Pick your rhythm",
    desc: "Choose a cadence that fits your community: weekly, biweekly, or for special occasions. We slot right into your activity calendar.",
  },
  {
    num: "02",
    Icon: PackageOpen,
    title: "We arrive with everything",
    desc: "Chairs, warm towels, gentle products, and friendly stylists. No setup needed from your staff.",
  },
  {
    num: "03",
    Icon: Smile,
    title: "Residents glow, families notice",
    desc: "Fresh styles, soft hands, and lifted spirits. It’s the kind of change families mention on their very next visit.",
  },
];

const whyTiles = [
  {
    Icon: ShieldCheck,
    title: "Licensed, insured, survey-ready",
    desc: "Every stylist is state-licensed, background-checked, and covered by our liability policy, with infection-control practices that keep you survey-ready.",
  },
  {
    Icon: HeartHandshake,
    title: "Trained for elder care",
    desc: "Gentle techniques adapted for memory care, limited mobility, and sensitive skin.",
  },
  {
    Icon: CalendarCheck,
    title: "Zero lift for your staff",
    desc: "We handle scheduling, reminders, coordination, and resident and family billing from start to finish.",
  },
  {
    Icon: Wallet,
    title: "No cost to your community",
    desc: "Residents and families are billed directly for the services they choose. Your budget and your ledger stay untouched.",
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

function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-10 overflow-x-clip px-6 pt-10 pb-16 md:px-12 lg:flex-row lg:gap-18 lg:px-20 lg:pt-14 lg:pb-22">
      <Parallax
        speed={0.1}
        className="absolute bottom-4 left-7 hidden lg:block"
        aria-hidden="true"
      >
        <BrandLeaf className="h-21 w-21 rotate-[-18deg] text-sq-peach opacity-55" />
      </Parallax>
      <Parallax
        speed={0.17}
        className="absolute bottom-13 left-31 hidden lg:block"
        aria-hidden="true"
      >
        <BrandLeaf className="h-13 w-13 rotate-30 text-sq-coral opacity-35" />
      </Parallax>
      <div className="relative flex w-full flex-1 flex-col items-start gap-6 lg:gap-7">
        <div className="animate-fade-up">
          <Eyebrow>ON-SITE SALON &amp; SPA FOR SENIOR LIVING</Eyebrow>
        </div>
        <h1
          className="animate-fade-up font-heading text-[34px] leading-10 font-medium text-sq-ink sm:text-[42px] sm:leading-12 lg:text-[58px] lg:leading-16.25"
          style={{ animationDelay: "0.08s" }}
        >
          Give every resident a spa day, without asking more of your staff
        </h1>
        <p
          className="animate-fade-up text-[16px] leading-[26px] text-sq-muted lg:text-[17px] lg:leading-[28px]"
          style={{ animationDelay: "0.16s" }}
        >
          StyleQ is a fully managed on-site salon and spa for senior living
          communities. We bring licensed, elder-care-trained stylists and handle
          everything, from scheduling to family billing. Your residents get the
          care they love, your staff does nothing, and it costs your community
          nothing.
        </p>
        <div
          className="animate-fade-up flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: "0.24s" }}
        >
          <AnchorLink
            href="/#contact"
            className="rounded-full bg-sq-rose px-8 py-4 text-center text-[16px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25 lg:px-[34px] lg:py-[17px]"
          >
            Get the Brochure
          </AnchorLink>
          <AnchorLink
            href="/#services"
            className="rounded-full border-[1.5px] border-sq-peach px-8 py-4 text-center text-[16px] font-medium text-sq-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-sq-rose hover:text-sq-rose lg:px-[34px] lg:py-[17px]"
          >
            Explore Services
          </AnchorLink>
        </div>
        <p
          className="animate-fade-up text-[14px] text-sq-muted"
          style={{ animationDelay: "0.32s" }}
        >
          Built for assisted living and memory care communities
        </p>
      </div>
      <div className="group relative h-[360px] w-full max-w-[420px] shrink-0 overflow-hidden rounded-tl-[120px] rounded-tr-[28px] rounded-br-[120px] rounded-bl-[28px] sm:h-[460px] sm:max-w-[500px] lg:h-[600px] lg:w-[560px] lg:max-w-none lg:rounded-tl-[200px] lg:rounded-tr-[40px] lg:rounded-br-[200px] lg:rounded-bl-[40px]">
        <Image
          src="/images/hero-spa.png"
          alt="A StyleQ stylist giving a resident a gentle salon treatment"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 560px"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="flex flex-col gap-10 px-6 pt-16 pb-4 md:px-12 lg:gap-14 lg:px-20 lg:pt-24 lg:pb-8"
    >
      <Reveal className="flex flex-col items-center gap-4">
        <Eyebrow>OUR SERVICES</Eyebrow>
        <h2 className="text-center font-heading text-[30px] font-medium text-sq-ink sm:text-[36px] lg:text-[42px]">
          Care your residents will look forward to
        </h2>
        <p className="w-full max-w-[620px] text-center text-[16px] leading-[26px] text-sq-muted">
          Every visit is unhurried and gentle, led by licensed, insured
          professionals and adapted to each resident&apos;s comfort, mobility,
          and mood.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {services.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 90} className="flex">
            <div className="group flex w-full flex-col items-center gap-[18px] rounded-tl-[80px] rounded-3xl bg-white px-7 py-9 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sq-plum/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sq-peach-soft transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-[22px] w-[22px] text-sq-teal opacity-70" />
              </div>
              <h3 className="font-heading text-[22px] font-medium text-sq-ink">
                {title}
              </h3>
              <p className="text-center text-[14.5px] leading-[23px] text-sq-muted">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ForFacilities() {
  return (
    <section
      id="facilities"
      className="flex flex-col gap-10 px-6 pt-4 pb-16 md:px-12 lg:flex-row lg:gap-20 lg:px-20 lg:pb-26 lg:pt-8"
    >
      <Reveal className="flex w-full flex-col items-start gap-6 lg:w-[460px] lg:shrink-0">
        <Eyebrow>FOR FACILITIES</Eyebrow>
        <h2 className="font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[47px]">
          Salon days, handled from start to finish
        </h2>
        <p className="text-[16px] leading-[26px] text-sq-muted">
          StyleQ runs recurring salon days on-site at your community, at no cost
          to you. We bring the scheduling, supplies, and licensed, insured,
          elder-care-trained stylists, and we bill residents and families
          directly. Your activity calendar simply gains its most popular event.
        </p>
        <AnchorLink
          href="/#contact"
          className="rounded-full bg-sq-rose px-[30px] py-[15px] text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25"
        >
          Get the Brochure
        </AnchorLink>
      </Reveal>
      <div className="flex w-full flex-1 flex-col gap-5">
        {steps.map(({ num, Icon, title, desc }, i) => (
          <Reveal key={num} delay={i * 90} className="flex">
            <div className="group flex w-full items-center gap-4 rounded-3xl bg-white px-5 py-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sq-plum/5 sm:gap-6 sm:px-8 sm:py-7">
              <div className="font-heading text-[34px] font-medium italic text-sq-coral">
                {num}
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <h3 className="font-heading text-[21px] font-medium text-sq-ink">
                  {title}
                </h3>
                <p className="text-[14.5px] leading-[22px] text-sq-muted">
                  {desc}
                </p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sq-peach-soft transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-sq-teal opacity-70" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyStyleQ() {
  return (
    <section className="flex flex-col gap-10 px-6 pt-16 pb-4 md:px-12 lg:flex-row lg:items-center lg:gap-20 lg:px-30 lg:pt-26 lg:pb-8">
      <Reveal className="flex w-full flex-col items-start gap-6 lg:w-[440px] lg:shrink-0">
        <span className="text-[13px] font-semibold tracking-[3px] text-sq-rose">
          A PARTNER YOU CAN TRUST
        </span>
        <h2 className="font-heading text-[30px] leading-[38px] text-sq-ink sm:text-[36px] sm:leading-[44px] lg:text-[40px] lg:leading-[47px]">
          We make radiant residents the easiest part of your calendar.
        </h2>
        <p className="text-[16px] leading-[27px] text-sq-muted">
          From memory care to assisted living, our stylists slot gently into
          your community’s rhythm: vetted, insured, and beloved by residents
          from the very first visit.
        </p>
        <div className="flex items-center gap-3.5 pt-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              src="/images/chantel.jpeg"
              alt="Chantel Teague, founder of StyleQ"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold text-sq-ink">
              Founded by Chantel Teague
            </span>
          </div>
        </div>
      </Reveal>
      <div className="grid w-full flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {whyTiles.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 80} className="flex">
            <div className="group flex w-full flex-col items-start gap-3.5 rounded-3xl bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sq-plum/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sq-peach-soft transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-sq-rose" />
              </div>
              <h3 className="text-[16px] font-semibold text-sq-ink">{title}</h3>
              <p className="text-[14px] leading-[22px] text-sq-muted">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="flex flex-col items-center gap-10 px-6 pb-16 pt-4 md:px-12 lg:gap-14 lg:px-30 lg:pb-[110px] lg:pt-4">
      <Reveal className="flex w-full max-w-[640px] flex-col items-center gap-3.5">
        <span className="text-[13px] font-semibold tracking-[3px] text-sq-teal">
          KIND WORDS
        </span>
        <h2 className="text-center font-heading text-[30px] leading-[38px] text-sq-ink sm:text-[34px] sm:leading-[42px] lg:text-[40px] lg:leading-[48px]">
          Trusted by care teams and the people they care for
        </h2>
      </Reveal>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
        {testimonials.map(({ quote, initials, name, role, color, avatarBg }, i) => (
          <Reveal key={name} delay={i * 90} className="flex">
            <div className="flex w-full flex-col items-start gap-6 rounded-3xl border border-sq-line bg-white p-9 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-sq-plum/5">
              <div className={`font-heading text-[52px] leading-[36px] ${color}`}>
                “
              </div>
              <p className="text-[15px] leading-[25px] text-sq-ink">{quote}</p>
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
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section
      id="contact"
      className="px-6 pb-16 md:px-12 lg:px-30 lg:pb-[110px]"
    >
      <Reveal className="relative flex flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-linear-[68deg,#74508F_14.6%,#C65B89_85.4%] px-6 py-14 sm:px-12 lg:rounded-[44px] lg:px-30 lg:py-22">
        <Parallax
          speed={0.14}
          className="absolute -top-24 -left-32 h-[260px] w-[260px]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-[35deg]">
            <path d="M60 0c35 30 35 85 0 120-35-35-35-90 0-120z" fill="#FFFFFF14" />
          </svg>
        </Parallax>
        <Parallax
          speed={0.09}
          className="absolute top-[120px] right-[-100px] h-[300px] w-[300px]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" className="h-full w-full rotate-[140deg]">
            <path d="M60 0c35 30 35 85 0 120-35-35-35-90 0-120z" fill="#FFFFFF12" />
          </svg>
        </Parallax>
        <span className="relative text-[13px] font-semibold tracking-[3px] text-sq-peach">
          SEE HOW STYLEQ WORKS
        </span>
        <h2 className="relative w-full max-w-[760px] text-center font-heading text-[30px] leading-[38px] text-white sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[51px]">
          Everything you need to bring it to your team
        </h2>
        <p className="relative w-full max-w-[560px] text-center text-[16px] leading-[26px] text-white/80">
          Get our brochure: the services we offer, our licensing and insurance,
          how resident and family billing works, and how a risk-free pilot runs.
          No cost to your community, ever.
        </p>
        <div className="relative flex w-full justify-center pt-4">
          <NewsletterForm />
        </div>
        <p className="relative pt-2 text-center text-[14px] text-white/70">
          Prefer to talk first?{" "}
          <a
            href="mailto:chantel@bookstyleq.com"
            className="font-semibold text-white underline-offset-4 transition hover:underline"
          >
            chantel@bookstyleq.com
          </a>{" "}
          <span className="text-white/40">·</span>{" "}
          <a
            href="tel:+12623452127"
            className="inline-flex items-center gap-1.5 font-semibold text-white underline-offset-4 transition hover:underline"
          >
            <Phone className="h-3.5 w-3.5" />
            (262) 345-2127
          </a>
        </p>
      </Reveal>
    </section>
  );
}

function ThreadsDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[250px] w-full overflow-hidden opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)]"
    >
      <Threads
        color={[0.776, 0.357, 0.537]}
        amplitude={1.7}
        distance={0.5}
      />
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

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <ThreadsDivider />
        <ForFacilities />
        <WhyStyleQ />
        <StrandsDivider />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
