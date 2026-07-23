// Per-service content for the /services/[slug] pages. The Comfort, How-it-works,
// Gallery-intro, Vetted, and CTA-boilerplate sections are identical across all
// services and live in components/ServicePageTemplate.js; only the parts below
// change per service.

export const services = [
  {
    slug: "hair-styling",
    name: "Hair Styling",
    hero: {
      heading: "Hair care that actually feels like care.",
      sub: "Washes, cuts, sets, and styling that residents look forward to each week. Delivered by a vetted stylist who takes the time to get it right.",
    },
    offerings: {
      eyebrow: "ABOUT HAIR SERVICES",
      heading: "Everything a great hair day requires",
      sub: "Every weekly visit can include washes, cuts, sets, and styling, whatever a resident needs that day, delivered with the same care and attention every time.",
      cards: [
        {
          title: "Washes",
          desc: "A slow, thorough wash with warm water and a gentle touch, often the most relaxing part of the visit.",
          img: "/images/svc-hair-1.jpg",
        },
        {
          title: "Cuts",
          desc: "A haircut so tailored to your residents that they won't stop looking in the mirror.",
          img: "/images/svc-hair-2.jpg",
        },
        {
          title: "Sets",
          desc: "A classic set, and rollers, for residents who know exactly how they like their hair.",
          img: "/images/svc-hair-3.jpg",
        },
        {
          title: "Styling",
          desc: "A little extra styling for residents wanting to impress or express themselves.",
          img: "/images/svc-hair-4.jpg",
        },
      ],
    },
    gallery: [
      "/images/svc-hair-5.jpg",
      "/images/svc-hair-6.jpg",
      "/images/svc-hair-7.jpg",
    ],
    ctaHeading: "Hair care that your residents actually look forward to",
    metaDescription:
      "On-site hair styling for senior living: washes, cuts, sets, and styling from vetted, elder-care-trained stylists. Zero lift for your staff.",
  },
  {
    slug: "manicures-nail-care",
    name: "Manicures & Nail Care",
    hero: {
      heading: "Hands that feel looked after, not rushed.",
      sub: "Soothing hand massages with careful, hygienic nail trimming and polish. Delivered by a vetted stylist who takes the time to get it right.",
    },
    offerings: {
      eyebrow: "ABOUT NAIL CARE",
      heading: "Everything a good manicure should be",
      sub: "Every visit can include a hand massage, careful trimming and shaping, polish, and a quick nail health check, whatever a resident needs that day.",
      cards: [
        {
          title: "Hand Massage",
          desc: "A warm, unhurried hand and wrist massage that eases stiff joints and simply feels good.",
          img: "/images/svc-manicures-1.jpg",
        },
        {
          title: "Nail Trimming & Shaping",
          desc: "Careful, hygienic trimming and shaping, done gently and at the resident's pace.",
          img: "/images/svc-manicures-2.jpg",
        },
        {
          title: "Polish",
          desc: "A fresh coat in the color they love, or a clean buff for a natural, tidy finish.",
          img: "/images/svc-manicures-3.jpg",
        },
        {
          title: "Nail Health Checks",
          desc: "A gentle look for anything that needs attention, so small issues get caught early.",
          img: "/images/svc-manicures-4.jpg",
        },
      ],
    },
    gallery: [
      "/images/svc-manicures-5.jpg",
      "/images/svc-manicures-6.jpg",
      "/images/svc-manicures-7.jpg",
    ],
    ctaHeading: "Nail care that your residents actually look forward to",
    metaDescription:
      "On-site manicures and nail care for senior living: soothing hand massage, hygienic trimming, and polish from vetted, elder-care-trained stylists.",
  },
  {
    slug: "gentle-facials",
    name: "Gentle Facials",
    hero: {
      heading: "Facials gentle enough for the most delicate skin.",
      sub: "Calming, skin-safe facials that refresh and relax delicate skin. Delivered by a vetted stylist who takes the time to get it right.",
    },
    offerings: {
      eyebrow: "ABOUT FACIALS",
      heading: "Everything a calming facial should be",
      sub: "Every visit can include a gentle cleanse, light exfoliation, a soothing massage, and a finishing touch, all chosen for sensitive, mature skin.",
      cards: [
        {
          title: "Cleansing",
          desc: "A soft, thorough cleanse that removes the day without stripping delicate skin.",
          img: "/images/svc-facials-1.jpg",
        },
        {
          title: "Gentle Exfoliation",
          desc: "A mild exfoliation that brightens and refreshes, never harsh or abrasive.",
          img: "/images/svc-facials-2.jpg",
        },
        {
          title: "Massage & Moisture",
          desc: "A relaxing facial massage followed by rich, skin-safe moisture.",
          img: "/images/svc-facials-3.jpg",
        },
        {
          title: "Finishing Touches",
          desc: "A light finish that leaves residents feeling refreshed and cared for.",
          img: "/images/svc-facials-4.jpg",
        },
      ],
    },
    gallery: [
      "/images/svc-facials-5.jpg",
      "/images/svc-facials-6.jpg",
      "/images/svc-facials-7.jpg",
    ],
    ctaHeading: "Facials that your residents actually look forward to",
    metaDescription:
      "On-site gentle facials for senior living: calming, skin-safe cleansing, exfoliation, and moisture from vetted, elder-care-trained stylists.",
  },
  {
    slug: "grooming",
    name: "Grooming",
    hero: {
      heading: "Grooming that restores a sense of self.",
      sub: "Shaves, beard trims, and tidy-ups that restore a sense of self. Delivered by a vetted stylist who takes the time to get it right.",
    },
    offerings: {
      eyebrow: "ABOUT GROOMING",
      heading: "Everything a good grooming visit should be",
      sub: "Every visit can include a hot towel shave, a beard trim, a tidy-up cut, and brow or ear care, whatever a resident needs that day.",
      cards: [
        {
          title: "Hot Towel Shaves",
          desc: "A warm, close, comfortable shave that feels like a proper barbershop visit.",
          img: "/images/svc-grooming-1.jpg",
        },
        {
          title: "Beard Trims",
          desc: "Shaping and trimming that keeps beards neat and residents feeling sharp.",
          img: "/images/svc-grooming-2.jpg",
        },
        {
          title: "Haircuts & Tidy-ups",
          desc: "A clean cut or a quick tidy-up between visits, done to their liking.",
          img: "/images/svc-grooming-3.jpg",
        },
        {
          title: "Brow & Ear Care",
          desc: "Careful trimming of brows and ears, the small details that make a difference.",
          img: "/images/svc-grooming-4.jpg",
        },
      ],
    },
    gallery: [
      "/images/svc-grooming-5.jpg",
      "/images/svc-grooming-6.jpg",
      "/images/svc-grooming-7.jpg",
    ],
    ctaHeading: "Grooming that your residents actually look forward to",
    metaDescription:
      "On-site grooming for senior living: hot towel shaves, beard trims, and tidy-ups from vetted, elder-care-trained stylists. Zero lift for your staff.",
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);

export const serviceSlugs = services.map((s) => s.slug);
