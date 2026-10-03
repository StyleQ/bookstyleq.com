import { serviceSlugs } from "@/lib/servicesData";
import { audienceSlugs } from "@/lib/whoWeServeData";
import { getPostSlugs } from "@/lib/blog";

const siteUrl = "https://www.bookstyleq.com";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/book-a-call`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...audienceSlugs.map((slug) => ({
      url: `${siteUrl}/who-we-serve/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/meet-our-stylists`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...getPostSlugs().map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
    {
      url: `${siteUrl}/stylist-code-of-conduct`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
