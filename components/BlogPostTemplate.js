import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BrandLeaf from "@/components/BrandLeaf";
import HeroLeafCluster from "@/components/HeroLeafCluster";
import CtaBand from "@/components/CtaBand";
import { PAD_X } from "@/components/ui";

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostTemplate({ post }) {
  const {
    title,
    category,
    author,
    publishedAt,
    readTime,
    coverImage,
    coverAlt,
    contentHtml,
  } = post;

  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section
          className={`relative flex flex-col items-center gap-5 overflow-hidden bg-sq-hero-cream text-center ${PAD_X} py-20 lg:py-24`}
        >
          <BrandLeaf
            aria-hidden="true"
            className="absolute -top-6 -left-10 h-[160px] w-[160px] -rotate-[24deg] text-sq-peach opacity-30"
          />
          <HeroLeafCluster className="hidden lg:block" />
          <Reveal className="relative z-10 flex flex-col items-center gap-5">
            <span className="rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold tracking-[1.5px] text-sq-rose">
              {category.toUpperCase()}
            </span>
            <h1 className="max-w-[760px] font-heading text-[32px] leading-[40px] font-medium text-sq-ink sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px]">
              {title}
            </h1>
            {author && (
              <div className="flex items-center gap-3 pt-1">
                {
                  author.avatar && (
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  )
                }
                <div className={`flex flex-col ${author.avatar ? "items-start text-left" : "text-center"}`}>
                  {
                    author.name && (
                      <span className="text-[14px] font-semibold text-sq-ink">
                        {author.name}
                      </span>
                    )
                  }
                  <span className="text-[13px] text-sq-muted">
                    {formatDate(publishedAt)} &middot; {readTime}
                  </span>
                </div>
              </div>
            )}
          </Reveal>
        </section>

        {/* Cover image */}
        {
          coverImage && (
            <section className={`border-t border-sq-line ${PAD_X} py-4 lg:py-8`}>
              <Reveal>
                <div className="relative mx-auto h-60 w-full max-w-250 overflow-hidden rounded-[28px] sm:h-110 lg:h-130">
                  <Image
                    src={coverImage}
                    alt={coverAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </section>
          )
        }

        {/* Body */}
        <article className={`${PAD_X} pt-4 lg:pt-8 pb-8 lg:pb-16`}>
          <div
            className="blog-content mx-auto max-w-170"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        <CtaBand
          eyebrow="FOR SENIOR LIVING COMMUNITIES"
          heading="Thinking about your next renewal window?"
          sub="Let's talk about a risk-free pilot in one unit, no disruption to your current vendor, no cost to your facility."
        />
      </main>
      <Footer />
    </>
  );
}
