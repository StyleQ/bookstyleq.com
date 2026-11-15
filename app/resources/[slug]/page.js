import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ResourceOptIn from "@/components/ResourceOptIn";
import { getResource, resourceSlugs } from "@/lib/resourcesData";

export function generateStaticParams() {
  return resourceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.metaDescription,
    alternates: { canonical: `/resources/${resource.slug}` },
  };
}

// Mirrors the "Opt-in Page" frames in Pencil: standard nav and footer around
// a single offer card.
export default async function ResourceOptInPage({ params }) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <>
      <NavBar />
      <main className="px-4 pt-8 pb-16 sm:px-8 lg:px-30 lg:pt-14 lg:pb-25">
        <ResourceOptIn resource={resource} />
      </main>
      <Footer />
    </>
  );
}
