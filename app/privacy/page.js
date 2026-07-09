import LegalDoc from "@/components/LegalDoc";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How StyleQ collects, uses, and protects the information you share through bookstyleq.com.",
};

const sections = [
  {
    heading: "Information we collect",
    paragraphs: [
      "When you request our brochure or sign up for updates, we collect the email address you provide.",
      "We may also collect basic, non-identifying usage data, such as pages visited and general device information, to understand how the site is used.",
    ],
  },
  {
    heading: "How we use your information",
    bullets: [
      "To send you the StyleQ brochure you requested.",
      "To send occasional updates about our services, which you can opt out of at any time.",
      "To operate, maintain, and improve our website.",
    ],
  },
  {
    heading: "How we share information",
    paragraphs: [
      "We do not sell your personal information. We share it only with service providers who help us operate, such as our email delivery provider, and only as needed to provide these services.",
      "We may disclose information if required by law.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "We may use cookies or similar technologies to keep the site working and to measure general traffic. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "Your choices",
    bullets: [
      "Unsubscribe from emails using the link in any message, or by contacting us.",
      "Request access to, correction of, or deletion of your information by emailing us.",
    ],
  },
  {
    heading: "Data retention",
    paragraphs: [
      "We keep your information for as long as needed to provide these services and for legitimate business or legal purposes, then delete it.",
    ],
  },
  {
    heading: "Children's privacy",
    paragraphs: [
      "Our website is intended for adults. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. When we do, we will revise the date at the top of this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="PRIVACY"
      title="Privacy Policy"
      updated="July 8, 2026"
      intro="StyleQ respects your privacy. This policy explains what information we collect through bookstyleq.com, how we use it, and the choices you have."
      sections={sections}
    />
  );
}
