import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AnchorLink from "@/components/AnchorLink";
import CtaBand from "@/components/CtaBand";
import { PAD_X, Eyebrow } from "@/components/ui";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description:
    "Notes on running a dependable on-site salon program for senior living communities: vendor management, compliance, and resident care.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function PostCard({ post, delay }) {
  return (
    <Reveal delay={delay}>
      <AnchorLink
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-sm shadow-sq-plum/[0.03] transition-shadow duration-300 hover:shadow-lg hover:shadow-sq-plum/[0.08]"
      >
        {post.coverImage && (
          <div className="relative h-55 w-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-3 px-7 py-7 text-left">
          <span className="text-[13px] font-semibold tracking-[1.5px] text-sq-rose">
            {post.category.toUpperCase()}
          </span>
          <h3 className="font-heading text-[21px] leading-[28px] font-medium text-sq-ink">
            {post.title}
          </h3>
          <p className="text-[15px] leading-[24px] text-sq-muted">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center gap-2 pt-3 text-[13px] text-sq-muted">
            <span>{formatDate(post.publishedAt)}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </AnchorLink>
    </Reveal>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section
          className={`flex flex-col items-center gap-4 bg-sq-hero-cream text-center ${PAD_X} py-20 lg:py-24`}
        >
          <Reveal className="flex flex-col items-center gap-4">
            <Eyebrow>FROM STYLEQ</Eyebrow>
            <h1 className="max-w-[760px] font-heading text-[34px] leading-[42px] font-medium text-sq-ink sm:text-[44px] sm:leading-[52px]">
              Notes on running a calmer salon program
            </h1>
            <p className="max-w-[600px] text-[17px] leading-[28px] text-sq-muted">
              Practical reading for administrators and community leaders on
              vendor management, compliance, and keeping residents looking
              forward to their appointments.
            </p>
          </Reveal>
        </section>

        {/* Post grid */}
        <section className={`border-t border-sq-line ${PAD_X} py-16 lg:py-20`}>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} delay={i * 80} />
            ))}
          </div>
        </section>

        <CtaBand
          eyebrow="FOR SENIOR LIVING COMMUNITIES"
          heading="Want this handled before your next renewal window?"
          sub="Let's talk about a risk-free pilot in one unit. No cost to your facility, no lift for your staff."
        />
      </main>
      <Footer />
    </>
  );
}
