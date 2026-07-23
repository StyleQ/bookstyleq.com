import Image from "next/image";
import Link from "next/link";
import BrandLeaf from "@/components/BrandLeaf";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Our Story",
  description:
    "StyleQ began with a stylist Chantel Teague could not find, and with a grandmother whose facility had a salon and no one to staff it.",
};

const storyBeforeQuote = [
  "Chantel Teague started StyleQ out of her own misfortune. She was living in an area without much diversity, and she could not find a hair stylist who knew how to care for her hair. As a Black woman with curly hair and brown skin, she found the salons nearest to her simply were not able to accommodate her.",
  "She was also busy. She worked a full-time job and she was a cheerleader, and being presentable was part of that work. Keeping it up was hard. She could not walk into the local salon and ask for a blowout. She had to plan ahead, carefully, around her hair. It struck her as strange that everything else could be ordered on demand, from pizza to books. Why not hair services?",
  "That was how it started. The purpose came from somewhere deeper. Chantel has always been drawn to work with a greater purpose, and to serving the people who spend their lives serving others.",
  "She was a caregiver for her grandmother. In the senior facility where her grandmother lived, the quality of care was so poor that Chantel watched it drain the life from her. Small things helped. Her hair done. Her nails cared for. The comfort of a human touch, and someone to talk with, lifted her spirits. Her grandmother passed away in that place. The facility had a salon. It simply had no one to staff it.",
  "Later, when Chantel asked herself who she could serve and how she could do something meaningful, she came back to that room. If someone had been in that salon, perhaps her grandmother would have been more comfortable. Perhaps she would have held on a little longer. It is a large what if. But if she could keep it from happening to someone else, she was going to try.",
  "The more she researched, the larger the problem became. She went on to care for two vulnerable adults with severe mental disabilities, and she saw that this was not only about the elderly. Disabled adults go unseen and unkempt for weeks, sometimes years, because taking them out to a salon is not convenient, and because salons are rarely set up for vulnerable people. The need does not go away, and neither does the pleasure of being cared for. We all grow hair and nails, whether or not we meet anyone’s standard of beauty.",
  "Chantel knows every side of this. She has looked for help and not found it. She has lost someone she loved. She has been the caregiver.",
  "Her years in the beauty industry, her work in marketing, and the daily practice of building a business taught her the rest. Today she is solving the problem she once lived, bringing light to it, and making room for others who want to do good in their own communities.",
];

const storyAfterQuote = [
  "She is grateful to do this work, and she would not trade it for anything.",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <NavBar solid />

      {/* Header */}
      <section className="px-6 pt-14 pb-8 md:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2.5">
            <BrandLeaf className="h-4 w-4 text-sq-coral" />
            <span className="text-[13px] font-semibold tracking-[2.4px] text-sq-rose">
              OUR STORY
            </span>
          </div>
          <h1 className="font-heading text-[40px] leading-[1.1] font-medium text-sq-ink md:text-[54px]">
            Why StyleQ exists
          </h1>
          <p className="max-w-xl text-[17px] leading-8 text-sq-muted">
            StyleQ began with a stylist Chantel Teague could not find, and with
            a grandmother whose facility had a salon and no one to staff it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mt-8 bg-white px-6 py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {/* Portrait, floated so the story wraps around it */}
            <figure
              className="mx-auto mb-6 w-52 sm:float-left sm:mx-0 sm:mr-5 sm:mb-2 sm:w-48"
              style={{ shapeOutside: "inset(0 round 100px 12px 100px 12px)" }}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-tl-[90px] rounded-tr-[22px] rounded-br-[90px] rounded-bl-[22px] ring-4 ring-sq-peach-soft">
                <Image
                  src="/images/chantel@2x.jpg"
                  alt="Chantel Teague, founder of StyleQ"
                  fill
                  priority
                  sizes="192px"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="flex flex-col gap-1 pt-1">
              <h2 className="font-heading text-[26px] font-medium text-sq-ink sm:text-[28px] mt-4">
                Chantel Teague
              </h2>
              <span className="text-[12px] font-semibold tracking-[2px] text-sq-rose">
                FOUNDER, STYLEQ
              </span>
            </div>

            {storyBeforeQuote.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[16px] leading-8 text-sq-ink/85"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <figure className="mt-12 clear-both flex flex-col items-center gap-5 rounded-[32px] bg-sq-peach-soft px-7 py-10 text-center md:px-14">
            <BrandLeaf className="h-6 w-6 text-sq-coral" />
            <blockquote className="font-heading text-[22px] leading-[36px] italic text-sq-plum md:text-[26px] md:leading-[42px]">
              StyleQ is like a lighthouse, and the stylists are the light. They
              shine, and they are excellent at what they do. Our nature is
              supportive. We match stylists with the clients who need them most,
              so they can focus on what they do best.
            </blockquote>
            <figcaption className="text-[13px] tracking-[1px] text-sq-muted">
              CHANTEL TEAGUE, FOUNDER
            </figcaption>
          </figure>

          <div className="mt-12 flex flex-col gap-6">
            {storyAfterQuote.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[16px] leading-8 text-sq-ink/85"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA banner */}
      <section className="bg-linear-[68deg,#74508F_14.6%,#C65B89_85.4%] px-6 py-10 md:px-12 md:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:gap-10 md:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-semibold tracking-[3px] text-sq-peach">
              FOR SENIOR LIVING COMMUNITIES
            </span>
            <h2 className="font-heading text-[26px] leading-[1.2] font-medium text-white md:text-[30px]">
              Bring StyleQ to your community
            </h2>
            <p className="text-[15px] leading-7 text-white/85">
              See how a salon day runs, how billing works, and how a risk-free
              pilot begins.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-sq-plum shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/10"
          >
            Get the Brochure
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
