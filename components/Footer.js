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
    items: ["Our story", "For facilities", "Careers", "Journal"],
  },
  {
    title: "CONTACT",
    items: ["hello@styleq.care", "(555) 014-7788", "Serving 12 states"],
  },
];

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
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
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-sq-line bg-white"
              >
                <Icon className="h-4 w-4 text-sq-plum" />
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
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
