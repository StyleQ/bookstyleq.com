import { Heading, Text } from "@/components/typography"

export default function Privacy() {
  return (
    <article>
      <Heading level={1} className="text-2xl mb-8">Privacy Policy</Heading>
      <time dateTime="2023-06-20" className="mb-4 block">
        Last Modified: June 20, 2023
      </time>
      <div className="pb-16">
        <section className="border-b border-gray-200 py-8">
          <Heading level={2} className="font-medium text-xl mb-2">Introduction</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              StyleQ, LLC (”<strong>Company</strong>” or “<strong>We</strong>”) respect your privacy and are committed
              to protecting it through our compliance with this policy. This policy describes:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                The types of information that we may collect from you when you purchase, download, install, register
                with, access, and/or use the StyleQ application (the “<strong>App</strong>”).
              </li>
              <li>
                Our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </li>
            </ul>
            <Text>
              This policy applies only to information we collect in this App, in email, text, and other electronic
              communications sent through or in connection with this App.
            </Text>
            <Text>
              This policy DOES NOT apply to information that:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                We collect offline or on any other Company apps or websites, including websites you may access through
                this App.
              </li>
              <li>
                You provide to or is collected by any third party.
              </li>
            </ul>
            <Text>
              Our websites and apps, and these other third parties may have their own privacy policies, which we
              encourage you to read before providing information on or through them.
            </Text>
            <Text>
              Please read this policy carefully to understand our policies and practices regarding your information
              and how we will treat it. If you do not agree with our policies and practices, do not download, register
              with, or use this App. By downloading, registering with, or using this App, you agree to this privacy
              policy. This policy may change from time to time
              (see <a href="#changes-to-policy" className="link">Changes to Our Privacy Policy</a>). Your continued use
              of this App after we revise this policy means you accept those changes, so please check the policy
              periodically for updates.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={2} className="font-medium text-xl mb-2">Children Under the Age of 16</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              The App is not intended for children under 16 years of age, and we do not knowingly collect
              personal information from children under 16. If we learn we have collected or received personal
              information from a child under 16 without verification of parental consent, we will delete that
              information. If you believe we might have any information from or about a child under 16, please
              contact us at <a href="mailto:support@bookstyleq.com" className="link">support@bookstyleq.com</a>.
            </Text>
            <Text>
              California residents under 16 years of age may have additional rights regarding the collection
              and sale of their personal information. Please see
              [<a href="#california-rights" className="link">California Privacy Rights</a>] for more information.
            </Text>
          </div>
        </section>
      </div>
    </article>
  )
}
