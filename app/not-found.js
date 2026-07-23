import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BrandLeaf from "@/components/BrandLeaf";
import HeroLeafCluster from "@/components/HeroLeafCluster";
import { PAD_X, Eyebrow, PrimaryButton, OutlineButton } from "@/components/ui";

export const metadata = {
  title: "Page Not Found",
};

const quickLinks = [
  { label: "Our Services", href: "/services/hair-styling" },
  { label: "Who We Serve", href: "/who-we-serve/assisted-living" },
  { label: "Meet our Stylists", href: "/meet-our-stylists" },
];

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        <section
          className={`relative flex min-h-[72vh] flex-col items-center justify-center gap-6 overflow-hidden bg-sq-hero-cream text-center ${PAD_X} py-24`}
        >
          <BrandLeaf
            aria-hidden="true"
            className="absolute -top-6 -left-10 h-[160px] w-[160px] -rotate-[24deg] text-sq-peach opacity-30"
          />
          <HeroLeafCluster className="hidden lg:block" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <Eyebrow>PAGE NOT FOUND</Eyebrow>
            <span className="bg-linear-[68deg,#74508F_10%,#C65B89_85%] bg-clip-text font-heading text-[100px] leading-none font-medium text-transparent sm:text-[128px]">
              404
            </span>
            <div className="flex flex-col items-center gap-4">
              <h1 className="max-w-[620px] font-heading text-[30px] leading-[38px] font-medium text-sq-ink sm:text-[38px] sm:leading-[46px]">
                We couldn&apos;t find that page
              </h1>
              <p className="max-w-[520px] text-[16px] leading-[26px] text-sq-muted">
                The page you&apos;re looking for may have moved, or it never
                existed. Let&apos;s get you back to something useful.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
              <PrimaryButton href="/">Back to home</PrimaryButton>
              <OutlineButton href="/book-a-call">Book a Call</OutlineButton>
            </div>

            <div className="flex flex-col items-center gap-3 pt-6">
              <span className="text-[13px] font-semibold tracking-[2px] text-sq-muted">
                OR HEAD STRAIGHT TO
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[15px] font-medium text-sq-rose transition-colors hover:text-sq-plum"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
