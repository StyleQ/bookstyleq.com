import {
  ArrowRight,
  BookOpen,
  Check,
  ClipboardCheck,
  ListChecks,
  Newspaper,
  Users,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AnchorLink from "@/components/AnchorLink";
import BrandLeaf from "@/components/BrandLeaf";
import HeroLeafCluster from "@/components/HeroLeafCluster";
import CtaBand from "@/components/CtaBand";
import { PAD_X, Eyebrow } from "@/components/ui";
import { getAllPosts } from "@/lib/blog";
import { resources } from "@/lib/resourcesData";

export const metadata = {
  title: "Resources Hub",
  description:
    "Free guides, checklists, and articles for senior living administrators on salon vendors, resident engagement, and keeping appointments full.",
  alternates: { canonical: "/resources" },
};

// Per-accent classes spelled out in full so Tailwind can see them.
const ACCENTS = {
  plum: {
    badge: "bg-sq-plum-soft",
    icon: "text-sq-plum",
    check: "text-sq-plum",
    Icon: ClipboardCheck,
  },
  teal: {
    badge: "bg-sq-teal-soft",
    icon: "text-sq-teal",
    check: "text-sq-teal",
    Icon: ListChecks,
  },
  rose: {
    badge: "bg-sq-rose-soft",
    icon: "text-sq-rose",
    check: "text-sq-rose",
    Icon: Users,
  },
};

const CATEGORY_STYLES = [
  { text: "text-sq-rose", chip: "bg-sq-rose-soft" },
  { text: "text-sq-teal", chip: "bg-sq-teal-soft" },
];

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function GuideCard({ resource, delay }) {
  const a = ACCENTS[resource.accent];
  return (
    <Reveal delay={delay} className="h-full">
      <AnchorLink
        href={`/resources/${resource.slug}`}
        className="group flex h-full flex-col gap-4 rounded-[24px] bg-white p-8 shadow-sm shadow-sq-plum/[0.03] transition-shadow duration-300 hover:shadow-lg hover:shadow-sq-plum/[0.08]"
      >
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${a.badge}`}
        >
          <a.Icon className={`h-[22px] w-[22px] ${a.icon}`} />
        </span>
        <h3 className="font-heading text-[21px] leading-[28px] font-medium text-sq-ink">
          {resource.title}
        </h3>
        <p className="text-[14.5px] leading-[23px] text-sq-muted">
          {resource.description}
        </p>
        <ul className="flex flex-col gap-2.5 pt-1">
          {resource.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <Check className={`mt-[3px] h-4 w-4 shrink-0 ${a.check}`} />
              <span className="text-[13.5px] leading-[20px] text-sq-ink-soft">
                {b}
              </span>
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-sq-rose px-6 py-3 text-[14.5px] font-medium text-white shadow-sm transition-all duration-300 group-hover:bg-sq-rose/90 group-hover:shadow-lg group-hover:shadow-sq-rose/25">
          Get instant access
          <ArrowRight className="h-4 w-4" />
        </span>
      </AnchorLink>
    </Reveal>
  );
}

function PostCard({ post, style, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <AnchorLink
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col gap-3.5 rounded-[24px] bg-white p-8 shadow-sm shadow-sq-plum/[0.03] transition-shadow duration-300 hover:shadow-lg hover:shadow-sq-plum/[0.08]"
      >
        <span
          className={`self-start rounded-full px-3 py-1 text-[12px] font-semibold ${style.chip} ${style.text}`}
        >
          {post.category}
        </span>
        <h3 className="font-heading text-[22px] leading-[29px] font-medium text-sq-ink">
          {post.title}
        </h3>
        <p className="text-[14.5px] leading-[23px] text-sq-muted">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-2 text-[13px] text-sq-ink-soft">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="text-sq-muted">&middot;</span>
          <span>{post.author?.name}</span>
        </div>
      </AnchorLink>
    </Reveal>
  );
}

export default function ResourcesPage() {
  const posts = getAllPosts();
  const topPosts = posts.slice(0, 2);

  return (
    <>
      <NavBar />
      <main>
        {/* Hero + Top Articles. The card is top-aligned and pulled in from the
            right rail (187px, per the design) and the leaf art is nudged
            off-canvas, so the card only grazes the art's upper corner. */}
        <section
          className="relative flex flex-col gap-10 overflow-hidden bg-sq-hero-cream px-6 py-16 md:px-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:pt-14 lg:pr-[187px] lg:pb-[123px] lg:pl-30"
        >
          <HeroLeafCluster className="hidden lg:-right-8 lg:-bottom-[52px] lg:block" />
          <Reveal className="relative z-10 flex max-w-[600px] flex-col gap-5 lg:pt-[27px]">
            <Eyebrow>RESOURCES</Eyebrow>
            <h1 className="font-heading text-[38px] leading-[46px] font-medium text-sq-ink sm:text-[46px] sm:leading-[54px] lg:text-[54px] lg:leading-[62px]">
              Resources Hub
            </h1>
            <p className="text-[17px] leading-[28px] text-sq-muted">
              Looking for actionable ideas? Inspiration? Guidance? You&apos;ve
              come to the right place.
            </p>
          </Reveal>

          {topPosts.length > 0 && (
            <Reveal
              delay={120}
              className="relative z-10 w-full overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(59,50,64,0.10)] lg:w-[460px] lg:shrink-0"
            >
              <div className="h-1.5 w-full bg-sq-peach" />
              <div className="flex flex-col gap-4 p-7">
                <div className="flex items-center gap-2.5">
                  <Newspaper className="h-5 w-5 text-sq-rose" />
                  <h2 className="font-heading text-[21px] font-medium text-sq-ink">
                    Top Articles
                  </h2>
                </div>
                {topPosts.map((post, i) => (
                  <div key={post.slug} className="flex flex-col gap-4">
                    <div className="h-px w-full bg-sq-line" />
                    <AnchorLink
                      href={`/blog/${post.slug}`}
                      className="group flex items-center justify-between gap-4"
                    >
                      <div className="flex flex-col gap-1.5">
                        <span
                          className={`text-[11px] font-semibold tracking-[1.5px] ${CATEGORY_STYLES[i % 2].text}`}
                        >
                          {post.category.toUpperCase()}
                        </span>
                        <span className="text-[15px] leading-[22px] text-sq-ink transition-colors group-hover:text-sq-rose">
                          {post.title}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-sq-muted transition-colors group-hover:text-sq-rose" />
                    </AnchorLink>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </section>

        {/* Free guides */}
        <section className={`flex flex-col gap-12 ${PAD_X} py-16 lg:py-20`}>
          <Reveal className="flex max-w-[760px] flex-col gap-3.5">
            <span className="text-[13px] font-semibold tracking-[3px] text-sq-plum">
              ACTIONABLE INSIGHTS
            </span>
            <h2 className="font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[36px] sm:leading-[44px]">
              Free guides you can use before your next stand-up
            </h2>
            <p className="text-[16px] leading-[26px] text-sq-muted">
              Short, practical tools built from what we see inside senior living
              communities. No vendor calls, no homework for your team.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {resources.map((r, i) => (
              <GuideCard key={r.slug} resource={r} delay={i * 80} />
            ))}
          </div>
        </section>

        {/* From the blog */}
        <section
          className={`flex flex-col gap-12 bg-sq-peach-soft ${PAD_X} py-16 lg:py-20`}
        >
          <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3.5">
              <span className="text-[13px] font-semibold tracking-[3px] text-sq-amber">
                FROM THE BLOG
              </span>
              <h2 className="font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[36px] sm:leading-[44px]">
                What we are seeing inside senior living
              </h2>
            </div>
            <AnchorLink
              href="/blog"
              className="group inline-flex items-center gap-2 text-[14.5px] font-medium text-sq-ink transition-colors hover:text-sq-rose"
            >
              Browse all articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </AnchorLink>
          </Reveal>
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {topPosts.map((post, i) => (
              <PostCard
                key={post.slug}
                post={post}
                style={CATEGORY_STYLES[i % 2]}
                delay={i * 80}
              />
            ))}
            <Reveal delay={160} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-[24px] bg-sq-plum p-8">
                <BookOpen className="h-7 w-7 text-sq-peach" />
                <h3 className="font-heading text-[24px] leading-[31px] font-medium text-white">
                  Every article, in one place
                </h3>
                <p className="text-[14.5px] leading-[23px] text-white/80">
                  Operations, resident experience, and what good vendor
                  partnership actually looks like.
                </p>
                <AnchorLink
                  href="/blog"
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-[14.5px] font-medium text-sq-plum shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                >
                  Visit the blog
                  <ArrowRight className="h-4 w-4" />
                </AnchorLink>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBand
          eyebrow="FOR SENIOR LIVING COMMUNITIES"
          heading="Ready to see what a managed salon day feels like?"
          sub="Book a short call and we'll walk through your current setup, no pressure and no contract talk."
        />
      </main>
      <Footer />
    </>
  );
}
