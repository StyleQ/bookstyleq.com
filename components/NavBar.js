import Link from "next/link";
import BrandLeaf from "./BrandLeaf";

const links = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "For Facilities", href: "/#facilities" },
  { label: "Contact", href: "/#contact" },
];

export default function NavBar({ solid = false }) {
  return (
    <header
      className={`flex items-center justify-between px-20 py-6 ${solid ? "bg-white" : ""}`}
    >
      <Link href="/" className="flex items-center gap-2.5">
        <BrandLeaf className="h-[26px] w-[26px] text-sq-teal" />
        <span className="font-heading text-[27px] font-semibold text-sq-ink">
          StyleQ
        </span>
      </Link>
      <nav className="flex items-center gap-9">
        {links.map(({ label, href }) => (
          <Link key={label} href={href} className="text-[15px] text-sq-ink">
            {label}
          </Link>
        ))}
      </nav>
      <Link
        href="/#contact"
        className="rounded-full bg-sq-rose px-[26px] py-[13px] text-[15px] font-medium text-white"
      >
        Book a Consultation
      </Link>
    </header>
  );
}
