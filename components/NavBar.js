import Link from "next/link";
import AnchorLink from "./AnchorLink";
import BrandLeaf from "./BrandLeaf";

const links = [
  { label: "Services", href: "/#services" },
  { label: "For Facilities", href: "/#facilities" },
  { label: "Contact", href: "/#contact" },
];

export default function NavBar({ solid = false }) {
  return (
    <header
      className={`flex items-center justify-between px-20 py-6 ${solid ? "bg-white" : ""}`}
    >
      <Link
        href="/"
        className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
      >
        <BrandLeaf className="h-[26px] w-[26px] text-sq-teal transition-transform duration-300 group-hover:-rotate-6" />
        <span className="font-heading text-[27px] font-semibold text-sq-ink">
          StyleQ
        </span>
      </Link>
      <nav className="flex items-center gap-9">
        {links.map(({ label, href }) => (
          <AnchorLink
            key={label}
            href={href}
            className="text-[15px] text-sq-ink transition-colors hover:text-sq-rose"
          >
            {label}
          </AnchorLink>
        ))}
      </nav>
      <AnchorLink
        href="/#contact"
        className="rounded-full bg-sq-rose px-[26px] py-[13px] text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sq-rose/90 hover:shadow-md hover:shadow-sq-rose/25"
      >
        Get the Brochure
      </AnchorLink>
    </header>
  );
}
