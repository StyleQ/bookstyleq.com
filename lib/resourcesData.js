// Lead-magnet resources: one entry per opt-in page at /resources/[slug].
// Copy mirrors the "Optin Page Copy" doc and the Pencil opt-in frames.
//
// `file` is the PDF served from public/guides/. Drop the final PDFs there with
// exactly these filenames; the delivery email links to them.

export const resources = [
  {
    slug: "salon-vendor-audit",
    title: "The Salon Vendor Audit",
    eyebrow: "FREE GUIDE",
    noun: "audit",
    accent: "plum",
    image: "/images/resource-vendor-audit.png",
    imageAlt: "The Salon Vendor Audit, a self-check for senior living administrators",
    file: "/guides/StyleQ_Salon_Vendor_Audit.pdf",
    description:
      "A 15-statement self-check that shows what your current salon vendor is really doing for your building. In about 10 minutes, you will see where the arrangement creates extra work, puts resident satisfaction at risk, or leaves you without visibility.",
    bullets: [
      "About 10 minutes",
      "A score that shows you where the friction is",
      "No need to contact your vendor or involve your team",
    ],
    metaDescription:
      "A free 15-statement self-check for senior living administrators. See what your salon vendor is really doing for your building in about 10 minutes.",
  },
  {
    slug: "utilization-recovery-checklist",
    title: "The Salon Utilization Recovery Checklist",
    eyebrow: "FREE CHECKLIST",
    noun: "checklist",
    accent: "teal",
    image: "/images/resource-utilization-checklist.png",
    imageAlt: "The Salon Utilization Recovery Checklist for senior living administrators",
    file: "/guides/StyleQ_Salon_Utilization_Recovery_Checklist.pdf",
    description:
      "If your salon numbers have quietly dropped, this checklist walks you through exactly what to do today to bring them back. Twenty actions across five steps, each with a clear owner.",
    bullets: [
      "20 actions across five steps",
      "An owner on every item: your vendor, the stylist, or you",
      "A one-page planner for your first steps",
    ],
    metaDescription:
      "A free 20-action checklist for senior living administrators whose salon attendance has quietly dropped. Each step has a clear owner.",
  },
  {
    slug: "engagement-rate-fast-track-guide",
    title: "The Facility Engagement Rate Fast Track Guide",
    eyebrow: "FREE GUIDE",
    noun: "guide",
    accent: "rose",
    image: "/images/resource-engagement-guide.png",
    imageAlt: "The Facility Engagement Rate Fast Track Guide for senior living administrators",
    file: "/guides/StyleQ_Engagement_Fast_Track_Guide.pdf",
    description:
      "A 30-day plan to get more residents connected, without adding work to your team's plate. Learn how to measure your starting engagement rate and what one large operator did to build friendships first.",
    bullets: [
      "A simple way to find your engagement rate in 15 minutes",
      "A four-week plan with 12 actions and clear owners",
      "Ideas for making your weekly salon visit more social",
    ],
    metaDescription:
      "A free 30-day plan to get more senior living residents connected, without adding work for your team.",
  },
];

export const resourceSlugs = resources.map((r) => r.slug);

export function getResource(slug) {
  return resources.find((r) => r.slug === slug) || null;
}
