import {
  AlertTriangle,
  Ban,
  CircleCheck,
  Clock,
  Droplets,
  Eye,
  HandHeart,
  Heart,
  LifeBuoy,
  Lock,
  Mail,
  MessageCircle,
  Scale,
  Scissors,
  ShieldCheck,
  Smile,
} from "lucide-react";
import BrandLeaf from "@/components/BrandLeaf";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Stylist Code of Conduct",
  description:
    "The standard for how StyleQ appointments are delivered, so every resident feels seen, safe, respected, and cared for.",
};

const standard = [
  { Icon: Eye, label: "Seen" },
  { Icon: ShieldCheck, label: "Safe" },
  { Icon: Heart, label: "Respected" },
  { Icon: HandHeart, label: "Cared for" },
];

// Each item is a string (bullet), or { label, scripts } for example lines,
// or { label, subitems } for a nested list.
const sections = [
  {
    Icon: Clock,
    title: "Before you start",
    items: [
      "Give yourself enough time to arrive, set up, and start on time. Aim for 10 to 15 minutes early.",
      "Look the part. Clean, professional, and simple. Calm energy.",
      "Check in with staff if needed. Mobility, dementia considerations, sensitivities, contraindications.",
      "Keep your setup neat. No clutter.",
    ],
  },
  {
    Icon: Smile,
    title: "Greeting the resident",
    items: [
      {
        label: "Warm greeting. Ask permission.",
        scripts: [
          "Hi [Name], I’m [Stylist] with StyleQ. Is now still a good time for your service",
        ],
      },
      "Share the plan calmly in one or two sentences before you touch hair, hands, or face.",
      {
        label: "Ask simple preference questions.",
        scripts: [
          "Would you like it shorter today or keep it the same",
          "Want quiet while I work or would you like to chat",
        ],
      },
    ],
  },
  {
    Icon: Scissors,
    title: "During the service",
    items: [
      "Slow down. Match the resident’s pace.",
      "Keep your voice low and steady.",
      "No baby talk. No jokes about age, health, or appearance.",
      "Avoid sensitive topics unless the resident brings it up.",
      { label: "Offer choices.", scripts: ["Would you like"] },
      {
        label: "Narrate changes before you do them.",
        scripts: ["I’m going to tilt your chair back a little"],
      },
      {
        label: "If a resident is anxious or confused",
        subitems: [
          "Keep it simple",
          "One step at a time",
          "Ask staff for support if needed",
          "Repeating communication is common",
        ],
      },
    ],
  },
  {
    Icon: Lock,
    title: "Dignity and privacy",
    items: [
      "Ask before touch, especially around face and head.",
      "Keep clothing covered. Cape and towel placed well.",
      "No resident gossip. Ever.",
      "Keep resident information private.",
    ],
  },
  {
    Icon: Droplets,
    title: "Safety and sanitation",
    items: [
      "Wash or sanitize hands before and after each resident.",
      "Disinfect tools between residents. Follow state board rules.",
      "Confirm allergies and sensitivities when relevant.",
      "Waxing or skin services. If anything feels risky, do not proceed. Flag it to Chantel.",
    ],
  },
  {
    Icon: AlertTriangle,
    title: "Delays, discomfort, changes",
    items: [
      "Running behind. Tell the StyleQ or facility contact right away. Keep it calm and respectful with the resident.",
      "If a resident says it hurts or looks uncomfortable. Stop. Adjust. Ask permission to continue.",
      "If someone asks for something outside the pilot. Acknowledge it and send it to Chantel. Do not promise add ons.",
    ],
  },
  {
    Icon: CircleCheck,
    title: "Closing",
    items: [
      {
        label: "Show the result. Invite a small adjustment.",
        scripts: ["How does that feel. Anything you want tweaked"],
      },
      {
        label: "Keep compliments respectful and grounded.",
        scripts: ["That shape looks great on you"],
      },
      "Direct next steps to Chantel or staff if scheduling is not set.",
    ],
  },
];

const nonNegotiables = [
  "No rushing",
  "No disrespectful comments about a resident’s hair, body, or health",
  "No discrimination, harassment, bullying",
  "No working under the influence",
  "No pricing or billing conversations unless Chantel tells you to for that event",
  "No photos or names shared without written permission and facility approval when required",
  "No soliciting residents or families for non StyleQ work",
];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5">
      <BrandLeaf className="h-4 w-4 text-sq-coral" />
      <span className="text-[13px] font-semibold tracking-[2.4px] text-sq-rose">
        {children}
      </span>
    </div>
  );
}

function IconCircle({ Icon }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sq-peach-soft">
      <Icon className="h-5 w-5 text-sq-teal opacity-80" />
    </div>
  );
}

function Dot() {
  return (
    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sq-coral" />
  );
}

function Script({ children }) {
  return (
    <p className="flex items-start gap-2 rounded-2xl bg-sq-peach-soft px-4 py-2.5 text-[14px] leading-6 text-sq-plum italic">
      <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
      <span>{children}</span>
    </p>
  );
}

function Item({ item }) {
  if (typeof item === "string") {
    return (
      <li className="flex items-start gap-3">
        <Dot />
        <span className="text-[15px] leading-7 text-sq-ink/85">{item}</span>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3">
      <Dot />
      <div className="flex flex-1 flex-col gap-2.5">
        <span className="text-[15px] leading-7 text-sq-ink/85">
          {item.label}
        </span>
        {item.scripts?.map((s) => <Script key={s}>{s}</Script>)}
        {item.subitems && (
          <ul className="flex flex-col gap-2">
            {item.subitems.map((s) => (
              <li key={s} className="flex items-start gap-2.5">
                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-sq-muted/60" />
                <span className="text-[14.5px] leading-6 text-sq-muted">{s}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function StylistCodeOfConduct() {
  return (
    <main className="overflow-hidden">
      <NavBar solid />

      {/* Header */}
      <section className="px-6 pt-14 pb-8 md:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow>FOR STYLEQ STYLISTS</Eyebrow>
          <h1 className="font-heading text-[44px] leading-[1.1] font-medium text-sq-ink md:text-[56px]">
            Stylist Code of Conduct
          </h1>
          <p className="max-w-xl text-[17px] leading-8 text-sq-muted">
            When you take a StyleQ appointment you represent our brand. The goal
            is simple. Residents feel calm, cared for, and respected every single
            appointment.
          </p>
        </div>
      </section>

      {/* Independent contractor note */}
      <section className="mt-8 bg-white px-6 pt-12 pb-6">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex items-start gap-4 rounded-3xl border border-sq-line bg-sq-cream p-6 md:p-7">
            <IconCircle Icon={Scale} />
            <div>
              <h2 className="font-heading text-[20px] font-medium text-sq-ink">
                Independent contractor note
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-sq-muted">
                This is not an employment policy. It is the standard for how
                StyleQ appointments are delivered. You run your own business. You
                are responsible for your license, insurance, taxes, tools, and
                supplies.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The StyleQ standard */}
      <section className="bg-white px-6 py-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <Eyebrow>THE STYLEQ STANDARD</Eyebrow>
            <h2 className="font-heading text-[30px] font-medium text-sq-ink">
              Every resident should feel
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {standard.map(({ Icon, label }, i) => (
              <Reveal key={label} delay={i * 80} className="flex">
                <div className="flex w-full flex-col items-center gap-3 rounded-3xl border border-sq-line bg-sq-cream px-4 py-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sq-peach-soft">
                    <Icon className="h-[22px] w-[22px] text-sq-rose" />
                  </div>
                  <span className="font-heading text-[19px] text-sq-ink">
                    {label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white px-6 pt-4 pb-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          {sections.map(({ Icon, title, items }, i) => (
            <Reveal key={title} delay={Math.min(i, 2) * 60}>
              <article className="rounded-3xl border border-sq-line bg-sq-cream p-7 md:p-8">
                <header className="flex items-center gap-3.5">
                  <IconCircle Icon={Icon} />
                  <h2 className="font-heading text-[24px] font-medium text-sq-ink">
                    {title}
                  </h2>
                </header>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {items.map((item, j) => (
                    <Item key={typeof item === "string" ? item : item.label + j} item={item} />
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Non-negotiables */}
      <section className="bg-white px-6 pb-10">
        <Reveal className="mx-auto max-w-3xl">
          <article className="rounded-3xl border border-sq-rose/25 bg-sq-cream p-7 md:p-8">
            <header className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sq-rose/10">
                <Ban className="h-5 w-5 text-sq-rose" />
              </div>
              <h2 className="font-heading text-[24px] font-medium text-sq-ink">
                Non-negotiables on StyleQ appointments
              </h2>
            </header>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {nonNegotiables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-2xl bg-white px-4 py-3"
                >
                  <Ban className="mt-0.5 h-4 w-4 shrink-0 text-sq-rose" />
                  <span className="text-[14.5px] leading-6 text-sq-ink/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </section>

      {/* Escalation */}
      <section className="bg-white px-6 pt-2 pb-20">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 overflow-hidden rounded-[36px] bg-linear-[68deg,#74508F_14.6%,#C65B89_85.4%] px-8 py-12 text-center md:px-16">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
            <LifeBuoy className="h-6 w-6 text-white" />
          </div>
          <h2 className="font-heading text-[28px] font-medium text-white md:text-[32px]">
            Escalation
          </h2>
          <p className="max-w-xl text-[16px] leading-7 text-white/85">
            If anything feels unsafe or unclear, pause and contact Chantel or
            facility staff right away. Report any mishaps, concerns, or incidents
            directly to Chantel.
          </p>
          <a
            href="mailto:Chantel@bookstyleq.com"
            className="mt-1 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-sq-plum shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
          >
            <Mail className="h-4 w-4" />
            Chantel@bookstyleq.com
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
