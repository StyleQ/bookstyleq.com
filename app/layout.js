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

export const metadata = {
  title: "StyleQ — On-Site Salon & Spa for Senior Living",
  description:
    "StyleQ partners with senior living communities to bring licensed, elder-care-trained stylists on-site. Spa-quality hair, nail, and grooming care, delivered with dignity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
