import Image from "next/image";
import { CircleCheck } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BrandLeaf from "@/components/BrandLeaf";
import HeroLeafCluster from "@/components/HeroLeafCluster";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import { PAD_X, Eyebrow, PrimaryButton, OutlineButton } from "@/components/ui";

const BOOK_HREF = "/book-a-call";

const VET = [
  {
    title: "Licensed and verified",
    desc: "Every stylist holds a valid, active license, verified before they're ever placed with a facility.",
  },
  {
    title: "Background-checked",
    desc: "A full background check is required for every stylist, no exceptions, before they ever step into your community.",
  },
  {
    title: "Fully insured",
    desc: "Every stylist is covered under our liability policy, so your facility isn't carrying that risk.",
  },
  {
    title: "Experience-tested",
    desc: "Beyond credentials, every stylist is evaluated on actual skill and technique before joining the team.",
  },
];

const TRAINED = [
  {
    title: "Memory care",
    desc: "Trained to move at a resident's pace, stay calm through confusion or resistance, and know when to pause or adjust.",
    img: "/images/stylist-memory-care.png",
  },
  {
    title: "Limited mobility",
    desc: "Comfortable working around wheelchairs, limited range of motion, and residents who need extra support getting settled.",
    img: "/images/stylist-limited-mobility.png",
  },
  {
    title: "Sensitive skin",
    desc: "Gentle techniques suited for thinner, more delicate skin.",
    img: "/images/stylist-sensitive-skin.png",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "“StyleQ afternoons are the highlight of our activity calendar. Residents line up early, hair done, nails polished, spirits lifted for days.”",
    name: "Dana Whitfield",
    role: "Activity Director, Maplewood Senior Living",
    avatar: "/images/avatar-dana.jpg",
    markColor: "text-sq-teal",
  },
  {
    quote:
      "“Mom gets her hair set every other Friday, just like she did for fifty years. When I visit, she's glowing. I can't put a price on that.”",
    name: "Renee Alvarez",
    role: "Daughter of a resident",
    avatar: "/images/avatar-renee.jpg",
    markColor: "text-sq-coral",
  },
  {
    quote:
      "“They treat me like a lady, not a task on a chart. It's my little spa day, and I have never once missed it.”",
    name: "Margaret Holloway",
    role: "Resident, age 87",
    avatar: "/images/avatar-margaret.jpg",
    markColor: "text-sq-plum",
  },
];

const FAQS = [
  {
    q: "What happens if our regular stylist is sick or unavailable?",
    a: "We send a qualified backup stylist so your residents' visit never gets skipped. You're never left without coverage.",
  },
  {
    q: "How are stylists matched to our facility?",
    a: "We match based on your residents' needs, whether that's memory care experience, mobility considerations, or specific services, so the right stylist is in your building from day one.",
  },
  {
    q: "What if a resident doesn't connect with their stylist?",
    a: "We'll make a change. The goal is a stylist your residents actually feel comfortable with, not just whoever's on the schedule.",
  },
  {
    q: "Do stylists work independently, or is someone supervising them?",
    a: "Every stylist is trained and vetted to work independently, but they're supported by our team if anything comes up during a visit.",
  },
];

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

export default function MeetOurStylists() {
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
            <Eyebrow>MEET OUR STYLISTS</Eyebrow>
            <h1 className="max-w-[900px] font-heading text-[34px] leading-[42px] font-medium text-sq-ink sm:text-[44px] sm:leading-[52px] lg:text-[52px] lg:leading-[60px]">
              Vetted, trained, and genuinely good at this
            </h1>
            <p className="max-w-[780px] text-[17px] leading-[28px] text-sq-muted">
              Every stylist we bring into your community is licensed,
              background-checked, and trained specifically to work with seniors,
              so you never have to wonder who&apos;s in the room with your
              residents.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <PrimaryButton href={BOOK_HREF}>Book a Call</PrimaryButton>
              <OutlineButton href="#how-we-vet">Learn More</OutlineButton>
            </div>
          </Reveal>
        </section>

        {/* How We Vet */}
        <section id="how-we-vet" className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <Eyebrow>HOW WE VET OUR STYLISTS</Eyebrow>
            <h2 className={h2Cls}>
              Every stylist clears the bar before they ever meet a resident
            </h2>
            <p className={subCls}>
              We don&apos;t compromise on who we bring into your community.
            </p>
          </Reveal>
          <div className="mt-4 flex w-full max-w-[820px] flex-col gap-4">
            {VET.map((item) => (
              <Reveal
                key={item.title}
                className="flex items-start gap-3 rounded-[18px] border border-sq-line bg-white px-[26px] py-5 text-left"
              >
                <CircleCheck className="mt-[2px] h-5 w-5 shrink-0 text-sq-teal" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[16px] font-semibold text-sq-ink">
                    {item.title}
                  </span>
                  <p className="text-[15px] leading-[23px] text-sq-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* Trained for senior care */}
        <section className={sectionCls}>
          <Reveal className="flex flex-col items-center gap-4">
            <Eyebrow>TRAINED FOR SENIOR CARE</Eyebrow>
            <h2 className={h2Cls}>Great with hair, even better with people</h2>
            <p className={subCls}>
              Our stylists are trained for senior care because they actually want
              to be here, working with residents who need a little extra patience
              and a lot of heart.
            </p>
          </Reveal>
          <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {TRAINED.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="flex flex-col items-center gap-4 rounded-[24px] bg-white px-4 pt-4 pb-6 shadow-sm shadow-sq-plum/[0.03]"
              >
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 380px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-[22px] font-medium text-sq-ink">
                  {c.title}
                </h3>
                <p className="text-[14px] leading-[22px] text-sq-muted">
                  {c.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* Testimonials */}
        <section className={sectionCls}>
          <Reveal>
            <h2 className={h2Cls}>What families and residents say</h2>
          </Reveal>
          <div className="mt-6 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 90}
                className="flex flex-col gap-5 rounded-[24px] border border-sq-line bg-white p-8 text-left lg:p-9"
              >
                <span
                  className={`font-heading text-[52px] leading-[0.5] ${t.markColor}`}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="flex-1 text-[15px] leading-[26px] text-sq-ink">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-sq-ink">
                      {t.name}
                    </span>
                    <span className="text-[13px] text-sq-muted">{t.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <BookCta />
        </section>

        {/* FAQ */}
        <section className={sectionCls}>
          <Reveal>
            <h2 className={h2Cls}>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal className="flex w-full justify-center">
            <FaqAccordion items={FAQS} />
          </Reveal>
        </section>

        {/* CTA */}
        <CtaBand
          eyebrow="FOR SENIOR LIVING COMMUNITIES"
          heading="Meet the standard your residents deserve"
          sub="Let's talk about your community, and we'll match you with stylists who fit your residents' needs."
        />
      </main>
      <Footer />
    </>
  );
}
