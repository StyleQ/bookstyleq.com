// Per-audience content for the /who-we-serve/[slug] pages. Section eyebrows and
// the four "What We Do" card titles/images/links are shared (built below); all
// prose is per-audience.

const SERVICE_CARDS = [
  { title: "Hair Styling", href: "/services/hair-styling", img: "/images/wws-hair.jpg" },
  { title: "Manicures & Nail Care", href: "/services/manicures-nail-care", img: "/images/wws-manicures.jpg" },
  { title: "Gentle Facials", href: "/services/gentle-facials", img: "/images/wws-facials.jpg" },
  { title: "Grooming", href: "/services/grooming", img: "/images/wws-grooming.jpg" },
];

const cards = (descs) =>
  SERVICE_CARDS.map((c, i) => ({ ...c, desc: descs[i] }));

export const audiences = [
  {
    slug: "assisted-living",
    name: "Assisted Living",
    hero: {
      heading: "Assisted living facilities",
      sub: "Weekly visits from vetted stylists, built around residents who are active, social, and still very much themselves, without adding anything to your team's plate.",
    },
    problem: {
      heading:
        "For residents who do most things themselves, and shouldn't have to compromise",
      sub: "Assisted living residents are active, social, and still care about how they look and feel. Too often, that gets treated as a nice-to-have instead of a real part of their care.",
      pains: [
        {
          lead: "Residents aren't getting the care they actually want:",
          desc: "Rushed visits and a rotating cast of stylists mean residents have to settle.",
        },
        {
          lead: "Image still matters, even if facilities stop treating it that way:",
          desc: "Looking and feeling like themselves isn't vanity, it's part of how they experience their own independence.",
        },
        {
          lead: 'Filed under "extra," when it\'s actually essential:',
          desc: "A good haircut or a manicure isn't a luxury add-on. For residents, it's part of what keeps them feeling like themselves.",
        },
      ],
    },
    whatWeDo: {
      heading: "Full salon services, built around residents",
      sub: "Weekly visits from vetted stylists, covering everything residents want, with the time and attention they deserve.",
      cards: cards([
        "Washes, cuts, sets, and styling that residents look forward to each week.",
        "Soothing hand massages with careful, hygienic nail trimming and polish.",
        "Calming, skin-safe facials that refresh and relax delicate skin.",
        "Shaves, beard trims, and tidy-ups that restore a sense of self.",
      ]),
    },
    anySpace: {
      heading: "We bring the salon to you, whatever your space looks like.",
      sub: "If you have a dedicated salon room, we'll use it. If you don't, we bring a fully portable setup and create one wherever works, a common area, a resident's room, wherever fits your building.",
      benefits: [
        {
          title: "One less vendor to manage",
          desc: "No scheduling, no coordinating, no supervising. It runs on its own, every week.",
        },
        {
          title: "Fewer complaints reaching your desk",
          desc: "Residents who feel cared for, and families who notice it, mean fewer calls landing on you.",
        },
        {
          title: "A visible difference during tours and reviews",
          desc: "Residents who look and feel their best reflect well on your community.",
        },
      ],
    },
    faqs: [
      {
        q: "We don't have a dedicated salon room. Can you still work with us?",
        a: "Yes. We bring a fully portable setup and can create a comfortable space wherever works, a common area, a resident's room, wherever fits your building.",
      },
      {
        q: "Our residents are fairly independent. Is this really necessary for our type of facility?",
        a: "Yes, actually more than people expect. Assisted living residents are active and social, and they notice and care about how they look. This isn't intensive care, it's the kind of attention that keeps them feeling like themselves.",
      },
      {
        q: "Can residents request specific services or stylists?",
        a: "Yes. Every visit starts with what the resident actually wants, and residents see the same vetted stylists each week, not a rotating cast of strangers.",
      },
    ],
    cta: {
      eyebrow: "FOR SENIOR LIVING COMMUNITIES",
      heading: "Give residents the salon visit they'd actually choose",
      sub: "Let's talk about your residents and build a weekly schedule that just works.",
    },
    metaDescription:
      "StyleQ brings weekly on-site salon and spa visits to assisted living communities, built around active residents, with zero lift for your staff.",
  },
  {
    slug: "skilled-nursing",
    name: "Skilled Nursing",
    hero: {
      heading: "Skilled nursing facilities",
      sub: "Gentle, unhurried salon and grooming visits brought right to the bedside, for residents who need extra care, without adding a thing to your nursing team's plate.",
    },
    problem: {
      heading:
        "For residents who can't get to a salon, and shouldn't have to go without",
      sub: "Skilled nursing residents may need more help and more patience, but looking and feeling cared for still matters deeply. Too often it's the first thing that gets skipped.",
      pains: [
        {
          lead: "Bedbound and low-mobility residents get left out:",
          desc: "When care has to come to the room, grooming and salon visits are the first thing to fall off the schedule.",
        },
        {
          lead: "Dignity slips through the cracks on busy days:",
          desc: "Uncombed hair, overgrown nails, and missed shaves are small things that quietly chip away at how a resident feels.",
        },
        {
          lead: "Families notice, and they worry:",
          desc: "When a loved one looks unkempt, families read it as a sign of the care overall, fair or not.",
        },
      ],
    },
    whatWeDo: {
      heading: "Gentle salon care, brought to the bedside",
      sub: "Regular visits from vetted stylists trained for higher-acuity residents, with the patience, hygiene, and gentleness this setting calls for.",
      cards: cards([
        "Washes, cuts, and sets done gently at the chair or bedside, at a pace that never rushes.",
        "Careful, hygienic nail and hand care, with extra attention for fragile skin.",
        "Soothing, skin-safe facials that calm and comfort sensitive skin.",
        "Shaves, beard trims, and tidy-ups that restore comfort and dignity.",
      ]),
    },
    anySpace: {
      heading: "We come to the resident, wherever they are",
      sub: "Whether it's a salon room, a common area, or right at the bedside, we bring a fully portable, sanitized setup and work around each resident's mobility and comfort.",
      benefits: [
        {
          title: "Zero lift for your nursing staff",
          desc: "No scheduling, no transporting, no supervising. We coordinate around your care routines, not through them.",
        },
        {
          title: "Survey-ready hygiene and consistency",
          desc: "Vetted stylists, sanitized tools, and the same faces each visit, so quality never becomes a compliance worry.",
        },
        {
          title: "Families see a community that cares",
          desc: "A well-groomed loved one tells families their person is truly looked after.",
        },
      ],
    },
    faqs: [
      {
        q: "Can you care for residents who are bedbound or have limited mobility?",
        a: "Yes. We bring a fully portable setup right to the room and work gently around each resident's mobility, comfort, and care plan.",
      },
      {
        q: "How do you handle hygiene and infection control?",
        a: "Every stylist follows strict sanitizing protocols with tools cleaned between residents, so you stay survey-ready and worry-free.",
      },
      {
        q: "Will this add work for our nursing team?",
        a: "No. We handle all the coordination and work around your existing routines. Your staff never has to schedule, transport, or supervise.",
      },
    ],
    cta: {
      eyebrow: "FOR SKILLED NURSING COMMUNITIES",
      heading: "Give every resident the dignity of feeling cared for",
      sub: "Let's talk about your residents and build a gentle visit schedule that works around your care.",
    },
    metaDescription:
      "StyleQ brings gentle, bedside salon and grooming visits to skilled nursing facilities, with survey-ready hygiene and zero lift for your nursing team.",
  },
  {
    slug: "independent-living",
    name: "Independent Living",
    hero: {
      heading: "Independent living communities",
      sub: "A first-class salon experience residents can walk to, run by vetted stylists they'll actually look forward to, with zero cost or coordination for your team.",
    },
    problem: {
      heading: "For residents used to the best, and unwilling to settle for less",
      sub: "Independent living residents chose your community for the lifestyle. When the on-site salon feels like an afterthought, they notice, and they'll drive across town instead.",
      pains: [
        {
          lead: "Residents leave the community for a real salon:",
          desc: "When the on-site option underwhelms, discerning residents take their business, and their loyalty, elsewhere.",
        },
        {
          lead: "A tired salon dulls your whole amenity story:",
          desc: "Prospects tour for lifestyle. An empty or dated salon room quietly undercuts everything else you show them.",
        },
        {
          lead: "Booking a good stylist shouldn't be a chore:",
          desc: "Residents want a standing appointment with someone they trust, not a rotating cast they have to chase.",
        },
      ],
    },
    whatWeDo: {
      heading: "A salon experience worthy of your community",
      sub: "Regular visits from vetted stylists who deliver a true salon experience, the kind of quality your residents would choose for themselves.",
      cards: cards([
        "Washes, cuts, color, and styling at a true salon standard, every week.",
        "Relaxing manicures and pedicures with a spa-like touch.",
        "Refreshing facials that leave residents glowing and relaxed.",
        "Sharp cuts, shaves, and beard trims for a polished, put-together look.",
      ]),
    },
    anySpace: {
      heading: "A standing appointment residents can count on",
      sub: "Whether you have a full salon suite or a flexible common space, we bring a polished setup and a consistent weekly schedule your residents can build their week around.",
      benefits: [
        {
          title: "An amenity that runs itself",
          desc: "No scheduling, no coordinating, no cost to the community. It runs on its own, every week.",
        },
        {
          title: "A standout on every tour",
          desc: "A vibrant, well-run salon becomes one more reason prospects choose you over the community down the road.",
        },
        {
          title: "Residents who stay, and rave",
          desc: "A salon they love is one more reason to stay, and to tell their friends why they did.",
        },
      ],
    },
    faqs: [
      {
        q: "Our residents are fully independent. Do they even need an on-site salon?",
        a: "That's exactly why it matters. Independent residents are discerning and want convenience and quality. A great on-site salon keeps them from leaving, and impresses prospects who tour.",
      },
      {
        q: "Can residents pay for their own services and choose what they want?",
        a: "Absolutely. Residents book and pay directly for whatever they'd like, at no cost to the community. They pick their services, their stylist, and their schedule.",
      },
      {
        q: "Can residents request specific services or stylists?",
        a: "Yes. Residents see the same vetted stylists each week and can request the services and standing appointments they prefer, just like their favorite salon back home.",
      },
    ],
    cta: {
      eyebrow: "FOR INDEPENDENT LIVING COMMUNITIES",
      heading: "Give residents a salon they'd never leave the community for",
      sub: "Let's talk about your community and set up a weekly salon your residents will love.",
    },
    metaDescription:
      "StyleQ runs a first-class on-site salon for independent living communities, a standout amenity residents love, at no cost or coordination for your team.",
  },
];

export const audienceBySlug = Object.fromEntries(
  audiences.map((a) => [a.slug, a]),
);

export const audienceSlugs = audiences.map((a) => a.slug);
