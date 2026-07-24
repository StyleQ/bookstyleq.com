import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import AnchorLink from "./AnchorLink";

const columns = [
  {
    title: "Our Services",
    items: [
      { label: "Hair Styling", href: "/services/hair-styling" },
      { label: "Manicures & Nail Care", href: "/services/manicures-nail-care" },
      { label: "Gentle Facials", href: "/services/gentle-facials" },
      { label: "Grooming", href: "/services/grooming" },
    ],
  },
  {
    title: "Who We Serve",
    items: [
      { label: "Assisted Living Facilities", href: "/who-we-serve/assisted-living" },
      { label: "Skilled Nursing Facilities", href: "/who-we-serve/skilled-nursing" },
      { label: "Independent Living Facilities", href: "/who-we-serve/independent-living" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "/#faq" },
      { label: "Guides", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Join our stylist network", href: "https://apply.bookstyleq.com/stylist" },
      { label: "Careers", href: "/#contact" },
      { label: "Partnerships", href: "/#contact" },
    ],
  },
];

const socials = [
  { label: "Instagram", Icon: InstagramIcon, link: "https://www.instagram.com/intostyleq/" },
  { label: "Facebook", Icon: FacebookIcon, link: "https://www.facebook.com/BookStyleQ" },
  { label: "LinkedIn", Icon: LinkedinIcon, link: "https://www.linkedin.com/company/styleq" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-11 bg-sq-peach-soft px-6 pt-16 pb-11 md:px-12 lg:px-30 lg:pt-19">
      {/* Link columns */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-10">
        {columns.map(({ title, items }) => (
          <div key={title} className="flex flex-col gap-4">
            <div className="text-[16px] font-semibold text-sq-ink">{title}</div>
            {items.map(({ label, href }) => (
              <AnchorLink
                key={label}
                href={href}
                className="text-[15px] text-sq-muted transition-colors hover:text-sq-rose"
              >
                {label}
              </AnchorLink>
            ))}
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-[#E7D8C6]" />

      {/* Brand + contact */}
      <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between md:gap-16">
        <div className="flex max-w-[400px] flex-col items-start gap-[18px]">
          <Image
            src="/images/styleq-logo.png"
            alt="StyleQ"
            width={500}
            height={165}
            className="h-[38px] w-auto"
          />
          <p className="text-[14px] leading-[22px] text-sq-muted">
            Fully managed on-site salon and spa for senior living communities. We
            bring licensed, elder care trained stylists and handle everything,
            from scheduling to billing.
          </p>
          <div className="flex gap-3 pt-1">
            {socials.map(({ label, Icon, link }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#E7D8C6] bg-white transition-all duration-300 hover:border-sq-rose hover:shadow-sm"
              >
                <Icon className="h-4 w-4 text-sq-plum transition-colors group-hover:text-sq-rose" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5 md:items-end">
          <a
            href="mailto:hello@bookstyleq.com"
            className="group flex items-center gap-2.5 text-[15px] text-sq-ink"
          >
            <Mail className="h-4 w-4 text-sq-rose" />
            <span className="transition-colors group-hover:text-sq-rose">
              hello@bookstyleq.com
            </span>
          </a>
          <a
            href="tel:+14142061690"
            className="group flex items-center gap-2.5 text-[15px] text-sq-ink"
          >
            <Phone className="h-4 w-4 text-sq-rose" />
            <span className="transition-colors group-hover:text-sq-rose">
              (414) 206-1690
            </span>
          </a>
          <div className="flex items-start gap-2.5 text-[15px] text-sq-ink md:text-right">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sq-rose" />
            <div className="flex flex-col md:items-end">
              <span>6969 N Port Washington Rd, STE 150B</span>
              <span>Glendale, WI 53217</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-[#E7D8C6]" />

      {/* Bottom bar */}
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[13px] text-sq-muted">
          © 2026 StyleQ. Beauty in every chapter.
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-sq-muted">
          <Link
            href="/stylist-code-of-conduct"
            className="transition-colors hover:text-sq-rose"
          >
            Stylist Code of Conduct
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-sq-rose">
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
