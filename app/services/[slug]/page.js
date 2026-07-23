import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { serviceBySlug, serviceSlugs } from "@/lib/servicesData";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) return {};
  return {
    title: `${service.name} for Senior Living`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
