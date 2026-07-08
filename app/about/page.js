import Image from "next/image";
import { Leaf } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — StyleQ",
  description:
    "StyleQ began with one stylist, one grandmother, and one folding chair. Today we bring spa days to senior communities across the country.",
};

const paragraphs = [
  "Chantel Teague spent twelve years behind the chair at a busy downtown salon. When her grandmother Ruthie moved into a memory-care community, Chantel started bringing her kit along on Sunday visits — a gentle shampoo, hot rollers, a touch of blush.",
  "She noticed something the care plans never mentioned: after a wash-and-set, Ruthie sat taller, laughed easier, remembered more. Soon other residents were waiting in the hallway with their own combs. The nurses called it “the Chantel effect.”",
  "StyleQ was born from those Sundays — a team of licensed stylists and estheticians who bring the calm of a spa to the people who so often go without one. Because feeling beautiful isn’t a luxury of youth. It’s a right of every chapter.",
];

const stats = [
  { number: "120+", label: "Partner communities", color: "text-sq-plum" },
  { number: "40,000", label: "Spa days delivered", color: "text-sq-teal" },
  { number: "98%", label: "Families who’d recommend us", color: "text-sq-rose" },
];

const values = [
  {
    title: "Dignity first",
    description:
      "Every appointment moves at the resident’s pace — consent, comfort, and conversation before anything else.",
  },
  {
    title: "Gentle expertise",
    description:
      "Our stylists train in elder-specific care, from fragile hair and skin to the rhythms of memory loss.",
  },
  {
    title: "Joy that lingers",
    description:
      "A spa day shouldn’t end when we leave. We style for the week ahead — and the photos families keep.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <NavBar solid />

      {/* About Header */}
      <section className="flex flex-col items-center gap-[18px] px-30 pt-22 pb-6">
        <p className="text-[13px] font-semibold tracking-[3px] text-sq-rose">
          OUR STORY
        </p>
        <h1 className="w-[820px] max-w-full text-center font-heading text-[56px] leading-[63px] text-sq-ink">
          Beauty has a place in every chapter of life.
        </h1>
        <p className="w-[600px] max-w-full text-center text-[17px] leading-7 text-sq-muted">
          StyleQ began with one stylist, one grandmother, and one folding chair.
          Today we bring spa days to senior communities across the country.
        </p>
      </section>

      {/* About Section */}
      <section className="px-30 pt-18 pb-24">
        <div className="flex flex-row items-center gap-24">
          <div className="w-[480px] shrink-0">
            <Image
              src="/images/founder-chantel.png"
              alt="Chantel Teague, founder of StyleQ"
              width={480}
              height={600}
              className="h-[600px] w-full rounded-[240px_240px_28px_28px] object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-7">
            <div className="flex flex-row items-center gap-2.5">
              <Leaf className="h-[18px] w-[18px] text-sq-rose" />
              <p className="text-[13px] font-semibold tracking-[3px] text-sq-rose">
                HOW STYLEQ BEGAN
              </p>
            </div>
            <h2 className="w-full font-heading text-[46px] leading-[53px] text-sq-ink">
              It began with Sunday visits and a wash-and-set.
            </h2>
            <div className="flex w-full flex-col gap-[18px]">
              {paragraphs.map((text) => (
                <p key={text} className="text-[16px] leading-[27px] text-sq-muted">
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="h-[2px] w-10 shrink-0 bg-sq-coral" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-heading text-[24px] italic text-sq-ink">
                  Chantel Teague
                </p>
                <p className="text-[13px] tracking-[1px] text-sq-muted">
                  Founder, StyleQ
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <p className={`font-heading text-[30px] ${stat.color}`}>
                    {stat.number}
                  </p>
                  <p className="text-[13px] text-sq-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Band */}
      <section className="px-30 pb-24">
        <figure className="flex w-full flex-col items-center gap-[18px] rounded-[40px] bg-white px-[140px] py-18">
          <div className="font-heading text-[64px] leading-[45px] text-sq-coral">
            “
          </div>
          <blockquote className="w-full text-center font-heading text-[29px] leading-[41px] italic text-sq-ink">
            If you’ve ever watched someone catch their reflection after a fresh
            set — you know. That glow doesn’t fade when we pack up our chairs.
          </blockquote>
          <figcaption className="text-[14px] tracking-[1px] text-sq-muted">
            — CHANTEL TEAGUE, FOUNDER
          </figcaption>
        </figure>
      </section>

      {/* Values Section */}
      <section className="flex flex-col items-center gap-11 px-30 pb-26">
        <h2 className="font-heading text-[34px] text-sq-ink">
          What we practice in every chair
        </h2>
        <div className="flex w-full flex-row gap-16">
          {values.map((value) => (
            <div key={value.title} className="flex flex-1 flex-col items-start gap-3">
              <div className="h-[3px] w-9 rounded-[2px] bg-sq-coral" />
              <h3 className="font-heading text-[22px] text-sq-ink">
                {value.title}
              </h3>
              <p className="w-full text-[15px] leading-[25px] text-sq-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
