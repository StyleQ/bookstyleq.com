import BrandLeaf from "@/components/BrandLeaf";

// The Pencil hero's "Corner Art": three overlapping leaves in brand colors plus
// two dots, tucked into the bottom-right of the hero. Coordinates mirror the
// design's 340x260 art frame (top-left origin). Pencil rotates counter-clockwise
// around the top-left corner, so we pair `origin-top-left` with negated degrees.
export default function HeroLeafCluster({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 bottom-0 h-[260px] w-[340px] ${className}`}
    >
      <BrandLeaf className="absolute top-[28px] left-[80px] h-[150px] w-[150px] origin-top-left -rotate-[25deg] text-sq-peach opacity-50" />
      <BrandLeaf className="absolute top-[84px] left-[176px] h-[100px] w-[100px] origin-top-left rotate-[20deg] text-sq-teal opacity-20" />
      <BrandLeaf className="absolute top-[134px] left-[54px] h-[72px] w-[72px] origin-top-left -rotate-[60deg] text-sq-coral opacity-[0.22]" />
      <span className="absolute top-[54px] left-[252px] h-4 w-4 rounded-full bg-sq-peach opacity-[0.55]" />
      <span className="absolute top-[96px] left-[34px] h-2.5 w-2.5 rounded-full bg-sq-rose opacity-30" />
    </div>
  );
}
