import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = "https://bookstyleq.com";
const siteDescription =
  "StyleQ partners with senior living communities to bring licensed, elder-care-trained stylists on-site. Spa-quality hair, nail, and grooming care, delivered with dignity.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "On-Site Salon & Spa for Senior Living | StyleQ",
    template: "%s | StyleQ",
  },
  description: siteDescription,
  applicationName: "StyleQ",
  keywords: [
    "on-site salon for senior living",
    "mobile hair stylist for nursing homes",
    "senior living spa services",
    "elder care grooming",
    "assisted living beauty services",
    "memory care hair styling",
  ],
  authors: [{ name: "StyleQ" }],
  creator: "StyleQ",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "StyleQ",
    title: "On-Site Salon & Spa for Senior Living | StyleQ",
    description: siteDescription,
    images: [
      {
        url: "/images/hero-spa.png",
        width: 1120,
        height: 1200,
        alt: "A StyleQ stylist giving a resident a gentle salon treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Site Salon & Spa for Senior Living | StyleQ",
    description: siteDescription,
    images: ["/images/hero-spa.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "StyleQ",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/images/hero-spa.png`,
  email: "chantel@bookstyleq.com",
  telephone: "+1-262-345-2127",
  areaServed: "US",
  priceRange: "$$",
  slogan: "Beauty in every chapter.",
  founder: {
    "@type": "Person",
    name: "Chantel Teague",
  },
  makesOffer: [
    "Hair Styling",
    "Manicures & Nail Care",
    "Gentle Facials",
    "Grooming",
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
