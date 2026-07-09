import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

const columns = [
  {
    title: "SERVICES",
    items: [
      "Hair styling",
      "Manicures & nails",
      "Gentle facials",
      "Grooming & barbering",
    ],
  },
  {
    title: "COMPANY",
    items: ["For facilities", "Careers", "Journal"],
  },
  {
    title: "CONTACT",
    items: ["chantel@bookstyleq.com", "(262) 345-2127", "Serving Wisconsin and more."],
  },
];

const socials = [
  { label: "Instagram", Icon: InstagramIcon, link: "https://www.instagram.com/intostyleq/" },
  { label: "Facebook", Icon: FacebookIcon, link: "https://www.facebook.com/BookStyleQ" },
  { label: "LinkedIn", Icon: LinkedinIcon, link: "https://www.linkedin.com/company/styleq" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 bg-sq-peach-soft px-30 pt-18 pb-10">
      <div className="flex w-full gap-20">
        <div className="flex w-[360px] shrink-0 flex-col gap-4">
          <Link href="/" className="font-heading text-[30px] font-semibold">
            <span className="text-sq-ink">Style</span>
            <span className="text-sq-rose">Q</span>
          </Link>
          <p className="text-[14px] leading-[22px] text-sq-muted">
            Spa-quality beauty and grooming services, delivered with dignity to
            senior living communities.
          </p>
          <div className="flex gap-3">
            {socials.map(({ label, Icon, link }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                className="group flex h-[38px] w-[38px] items-center justify-center rounded-full border border-sq-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sq-rose hover:shadow-sm"
              >
                <Icon className="h-4 w-4 text-sq-plum transition-colors group-hover:text-sq-rose" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1" />
        {columns.map(({ title, items }) => (
          <div key={title} className="flex w-[180px] shrink-0 flex-col gap-3.5">
            <div className="text-[13px] font-semibold tracking-[2px] text-sq-ink">
              {title}
            </div>
            {items.map((item) => (
              <div key={item} className="text-[14px] text-sq-muted">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="h-px w-full bg-sq-line" />
      <div className="flex w-full items-center justify-between">
        <div className="text-[13px] text-sq-muted">
          © 2026 StyleQ. Beauty in every chapter.
        </div>
        <div className="flex gap-6 text-[13px] text-sq-muted">
          <Link
            href="/stylist-code-of-conduct"
            className="transition-colors hover:text-sq-rose"
          >
            Stylist Code of Conduct
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-sq-rose"
          >
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-sq-rose">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
