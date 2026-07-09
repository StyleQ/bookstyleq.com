import LegalDoc from "@/components/LegalDoc";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of bookstyleq.com and StyleQ's website services.",
};

const sections = [
  {
    heading: "About StyleQ",
    paragraphs: [
      "StyleQ provides fully managed, on-site salon and spa services for senior living communities. This website is informational and lets you request our brochure and updates.",
    ],
  },
  {
    heading: "Use of the site",
    paragraphs: [
      "You agree to use the site lawfully and not to disrupt it, misuse it, or attempt to access it in unauthorized ways.",
    ],
  },
  {
    heading: "Newsletter and communications",
    paragraphs: [
      "If you provide your email, you consent to receive the brochure and occasional updates. You can unsubscribe at any time.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The content, branding, and materials on this site are owned by StyleQ or its licensors and may not be copied or used without permission.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "The site may link to third-party websites or services. We are not responsible for their content or practices.",
    ],
  },
  {
    heading: "Disclaimers",
    paragraphs: [
      'The site is provided "as is" without warranties of any kind. We do not guarantee that it will be uninterrupted or error free.',
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, StyleQ is not liable for any indirect or incidental damages arising from your use of the site.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. Continued use of the site means you accept the updated terms.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the State of Wisconsin, without regard to conflict of law principles.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="TERMS"
      title="Terms of Service"
      updated="July 8, 2026"
      intro="These terms govern your use of bookstyleq.com. By using the site, you agree to them. If you do not agree, please do not use the site."
      sections={sections}
    />
  );
}
