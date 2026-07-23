import { notFound } from "next/navigation";
import WhoWeServeTemplate from "@/components/WhoWeServeTemplate";
import { audienceBySlug, audienceSlugs } from "@/lib/whoWeServeData";

export function generateStaticParams() {
  return audienceSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const audience = audienceBySlug[slug];
  if (!audience) return {};
  return {
    title: `On-Site Salon for ${audience.name} Communities`,
    description: audience.metaDescription,
    alternates: { canonical: `/who-we-serve/${slug}` },
  };
}

export default async function WhoWeServePage({ params }) {
  const { slug } = await params;
  const audience = audienceBySlug[slug];
  if (!audience) notFound();
  return <WhoWeServeTemplate audience={audience} />;
}
