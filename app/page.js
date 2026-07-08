import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
} from "lucide-react";
import BrandLeaf from "@/components/BrandLeaf";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

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
    desc: "Choose a cadence that fits your community — weekly, biweekly, or for special occasions. We slot right into your activity calendar.",
  },
  {
    num: "02",
    Icon: PackageOpen,
    title: "We arrive with everything",
    desc: "Chairs, warm towels, gentle products, and friendly stylists — no setup needed from your staff.",
  },
  {
    num: "03",
    Icon: Smile,
    title: "Residents glow, families notice",
    desc: "Fresh styles, soft hands, and lifted spirits — the kind of change families mention on their very next visit.",
  },
];

const whyTiles = [
  {
    Icon: ShieldCheck,
    title: "Licensed & fully insured",
    desc: "Every stylist is state-licensed, background-checked, and covered by our liability policy.",
  },
  {
    Icon: HeartHandshake,
    title: "Trained for elder care",
    desc: "Gentle techniques adapted for memory care, limited mobility, and sensitive skin.",
  },
  {
    Icon: CalendarCheck,
    title: "Zero lift for your staff",
    desc: "We handle scheduling, reminders, and family billing from start to finish.",
  },
  {
    Icon: Sparkles,
    title: "We bring the spa to you",
    desc: "Chairs, warm towels, and gentle products arrive with us. No setup, no plumbing.",
  },
];

const testimonials = [
  {
    quote:
      "“StyleQ afternoons are the highlight of our activity calendar. Residents line up early — hair done, nails polished, spirits lifted for days.”",
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
    <section className="relative flex items-center gap-18 overflow-hidden px-20 pt-14 pb-22">
      <BrandLeaf className="absolute bottom-4 left-7 h-[84px] w-[84px] -rotate-[18deg] text-sq-peach opacity-55" />
      <BrandLeaf className="absolute bottom-13 left-31 h-[52px] w-[52px] rotate-[30deg] text-sq-coral opacity-35" />
      <div className="relative flex flex-1 flex-col items-start gap-7">
        <Eyebrow>ON-SITE SALON &amp; SPA FOR SENIOR LIVING</Eyebrow>
        <h1 className="font-heading text-[58px] leading-[65px] font-medium text-sq-ink">
          Give every resident a spa day — without asking more of your staff
        </h1>
        <p className="text-[17px] leading-[28px] text-sq-muted">
          StyleQ partners with senior living communities to bring licensed,
          elder-care-trained stylists on-site. Your residents get the
          spa-quality hair, nail, and grooming care they love — and your team
          doesn&apos;t lift a finger.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="rounded-full bg-sq-rose px-[34px] py-[17px] text-[16px] font-medium text-white"
          >
            Book a Consultation
          </Link>
          <Link
            href="/#services"
            className="rounded-full border-[1.5px] border-sq-peach px-[34px] py-[17px] text-[16px] font-medium text-sq-ink"
          >
            Explore Services
          </Link>
        </div>
        <p className="text-[14px] text-sq-muted">
          Trusted by 40+ executive directors and their communities
        </p>
      </div>
      <div className="relative h-[600px] w-[560px] shrink-0 overflow-hidden rounded-tl-[200px] rounded-tr-[40px] rounded-br-[200px] rounded-bl-[40px]">
        <Image
          src="/images/hero-spa.png"
          alt="A StyleQ stylist giving a resident a gentle salon treatment"
          fill
          priority
          sizes="560px"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="flex flex-col gap-14 px-20 py-24">
      <div className="flex flex-col items-center gap-4">
        <Eyebrow>OUR SERVICES</Eyebrow>
        <h2 className="font-heading text-[42px] font-medium text-sq-ink">
          Care your residents will look forward to
        </h2>
        <p className="w-[620px] text-center text-[16px] leading-[26px] text-sq-muted">
          Every visit is unhurried and gentle — led by licensed, insured
          professionals and adapted to each resident&apos;s comfort, mobility,
          and mood.
        </p>
      </div>
      <div className="flex gap-7">
        {services.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-1 flex-col items-center gap-[18px] rounded-tl-[80px] rounded-3xl bg-white px-7 py-9"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sq-peach-soft">
              <Icon className="h-[22px] w-[22px] text-sq-teal opacity-70" />
            </div>
            <h3 className="font-heading text-[22px] font-medium text-sq-ink">
              {title}
            </h3>
            <p className="text-center text-[14.5px] leading-[23px] text-sq-muted">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ForFacilities() {
  return (
    <section id="facilities" className="flex gap-20 px-20 py-26">
      <div className="flex w-[460px] shrink-0 flex-col items-start gap-6">
        <Eyebrow>FOR FACILITIES</Eyebrow>
        <h2 className="font-heading text-[40px] leading-[47px] font-medium text-sq-ink">
          Salon days, handled from start to finish
        </h2>
        <p className="text-[16px] leading-[26px] text-sq-muted">
          StyleQ runs recurring salon days on-site at your community. We bring
          the scheduling, supplies, and insured, elder-care-trained stylists —
          your activity calendar simply gains its most popular event.
        </p>
        <Link
          href="/#contact"
          className="rounded-full bg-sq-rose px-[30px] py-[15px] text-[15px] font-medium text-white"
        >
          Partner with StyleQ
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        {steps.map(({ num, Icon, title, desc }) => (
          <div
            key={num}
            className="flex items-center gap-6 rounded-3xl bg-white px-8 py-7"
          >
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
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sq-peach-soft">
              <Icon className="h-5 w-5 text-sq-teal opacity-70" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyStyleQ() {
  return (
    <section className="flex items-center gap-20 px-30 py-26">
      <div className="flex w-[440px] shrink-0 flex-col items-start gap-6">
        <span className="text-[13px] font-semibold tracking-[3px] text-sq-rose">
          A PARTNER YOU CAN TRUST
        </span>
        <h2 className="font-heading text-[40px] leading-[47px] text-sq-ink">
          We make radiant residents the easiest part of your calendar.
        </h2>
        <p className="text-[16px] leading-[27px] text-sq-muted">
          From memory care to independent living, our stylists slot gently into
          your community’s rhythm — vetted, insured, and beloved by residents
          from the very first visit.
        </p>
        <div className="flex items-center gap-3.5 pt-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              src="/images/founder-chantel.png"
              alt="Chantel Teague, founder of StyleQ"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold text-sq-ink">
              Founded by veteran stylist Chantel Teague
            </span>
            <Link
              href="/about"
              className="flex items-center gap-1.5 text-[14px] font-semibold text-sq-rose"
            >
              Read our story
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-6">
        {[whyTiles.slice(0, 2), whyTiles.slice(2)].map((row, i) => (
          <div key={i} className="flex gap-6">
            {row.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-1 flex-col items-start gap-3.5 rounded-3xl bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sq-peach-soft">
                  <Icon className="h-5 w-5 text-sq-rose" />
                </div>
                <h3 className="text-[16px] font-semibold text-sq-ink">
                  {title}
                </h3>
                <p className="text-[14px] leading-[22px] text-sq-muted">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="flex flex-col items-center gap-14 px-30 py-[110px]">
      <div className="flex w-[640px] flex-col items-center gap-3.5">
        <span className="text-[13px] font-semibold tracking-[3px] text-sq-teal">
          KIND WORDS
        </span>
        <h2 className="text-center font-heading text-[40px] leading-[48px] text-sq-ink">
          Trusted by care teams — and the people they care for
        </h2>
      </div>
      <div className="flex w-full gap-7">
        {testimonials.map(({ quote, initials, name, role, color, avatarBg }) => (
          <div
            key={name}
            className="flex flex-1 flex-col items-start gap-6 rounded-3xl border border-sq-line bg-white p-9"
          >
            <div
              className={`font-heading text-[52px] leading-[36px] ${color}`}
            >
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
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="contact" className="px-30 pb-[110px]">
      <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-[44px] bg-linear-[68deg,#74508F_14.6%,#C65B89_85.4%] px-30 py-22">
        <svg
          viewBox="0 0 120 120"
          className="absolute -top-24 -left-32 h-[260px] w-[260px] -rotate-[35deg]"
          aria-hidden="true"
        >
          <path
            d="M60 0c35 30 35 85 0 120-35-35-35-90 0-120z"
            fill="#FFFFFF14"
          />
        </svg>
        <svg
          viewBox="0 0 120 120"
          className="absolute top-[120px] right-[-100px] h-[300px] w-[300px] rotate-[140deg]"
          aria-hidden="true"
        >
          <path
            d="M60 0c35 30 35 85 0 120-35-35-35-90 0-120z"
            fill="#FFFFFF12"
          />
        </svg>
        <span className="relative text-[13px] font-semibold tracking-[3px] text-sq-peach">
          FOR SENIOR LIVING COMMUNITIES
        </span>
        <h2 className="relative w-[760px] text-center font-heading text-[44px] leading-[51px] text-white">
          Bring the calm of a spa to your community
        </h2>
        <p className="relative w-[560px] text-center text-[16px] leading-[26px] text-white/80">
          We arrive with everything — chairs, warm towels, gentle products, and
          stylists who love this work. You simply pick a day.
        </p>
        <div className="relative flex items-center gap-4 pt-4">
          <a
            href="mailto:hello@styleq.care"
            className="flex items-center gap-2 rounded-full bg-white px-9 py-[18px] text-[15px] font-semibold text-sq-plum"
          >
            Book a Consultation
          </a>
          <a
            href="tel:+15550147788"
            className="flex items-center gap-2 rounded-full border-[1.5px] border-white/55 px-9 py-[18px] text-[15px] font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            (555) 014-7788
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <ForFacilities />
        <WhyStyleQ />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
