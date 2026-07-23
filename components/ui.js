import { CircleCheck, CircleX } from "lucide-react";
import AnchorLink from "@/components/AnchorLink";
import BrandLeaf from "@/components/BrandLeaf";

// Shared horizontal padding so every section lines up on the same rails.
export const PAD_X = "px-6 md:px-12 lg:px-30";

export function EyebrowLeaf({ children, className = "text-sq-coral" }) {
  return (
    <div className="flex items-center gap-2.5">
      <BrandLeaf className={`h-4 w-4 ${className}`} />
      <span className="text-[13px] font-semibold tracking-[2.4px] text-sq-rose">
        {children}
      </span>
    </div>
  );
}

export function Eyebrow({ children, className = "text-sq-rose" }) {
  return (
    <span className={`text-[13px] font-semibold tracking-[3px] ${className}`}>
      {children}
    </span>
  );
}

export function PrimaryButton({
  href,
  external,
  icon: Icon,
  children,
  className = "",
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full bg-sq-rose px-[30px] py-[15px] text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25 ${className}`;
  const inner = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <AnchorLink href={href} className={cls}>
      {inner}
    </AnchorLink>
  );
}

export function OutlineButton({
  href,
  external,
  icon: Icon,
  children,
  className = "",
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] border-sq-peach px-[30px] py-[15px] text-[15px] font-medium text-sq-ink transition-all duration-300 hover:border-sq-rose hover:text-sq-rose ${className}`;
  const inner = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <AnchorLink href={href} className={cls}>
      {inner}
    </AnchorLink>
  );
}

export function CheckItem({ children }) {
  return (
    <div className="flex items-start gap-2.5">
      <CircleCheck className="mt-[2px] h-[18px] w-[18px] shrink-0 text-sq-rose" />
      <span className="text-[15px] leading-[22px] font-medium text-sq-ink">
        {children}
      </span>
    </div>
  );
}

export function CrossItem({ children }) {
  return (
    <div className="flex items-start gap-2.5">
      <CircleX className="mt-[2px] h-[17px] w-[17px] shrink-0 text-[#C9C2CE]" />
      <span className="text-[15px] leading-[22px] text-sq-muted">{children}</span>
    </div>
  );
}
