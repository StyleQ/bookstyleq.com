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
              [<a href="#california-residents" className="link">California Privacy Rights</a>] for more information.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={2} className="font-medium text-xl mb-2">Information We Collect and How We Collect It</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              We collect information from and about users of our App:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                Directly from you when you provide it to us.
              </li>
              <li>
                Automatically when you use the App.
              </li>
            </ul>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">Information You Provide to Us</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              When you download, register with, or use this App, we may ask you provide information:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                By which you may be personally identified, such as name, postal address, e-mail address,
                telephone number, ANY OTHER INFORMATION THE APP COLLECTS THAT IS DEFINED AS PERSONAL OR PERSONALLY
                IDENTIFIABLE INFORMATION UNDER AN APPLICABLE LAW, or any other identifier by which you may
                be contacted online or offline (“<strong>personal information</strong>”).
              </li>
              <li>
                That is about you but individually does not identify you, such as personal descriptions, hobbies,
                interests, zip codes, and financial information.
              </li>
            </ul>
            <Text>
              This information includes:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                Information that you provide by filling in forms in the App. This includes information provided
                at the time of registering to use the App, subscribing to our service, posting material, or
                requesting further services. We may also ask you for information when you enter a contest or
                promotion sponsored by us, and when you report a problem with the App.
              </li>
              <li>
                Records and copies of your correspondence (including email addresses and phone numbers), if you
                contact us.
              </li>
              <li>
                Your responses to surveys that we might ask you to complete for research purposes.
              </li>
              <li>
                Details of transactions you carry out through the App and of the fulfillment of your orders.
                You may be required to provide financial information before placing an order through the App.
              </li>
              <li>
                Your search queries on the App.
              </li>
              <li>
                Digital images and images of your likeness that you provide at the time of registering to use the App,
                subscribing to our service, posting material, or requesting further services.
              </li>
            </ul>
            <Text>
              You also may provide information for publication or display (“<strong>posted</strong>”) on public areas
              of the App, or transmitted to other users of the App or third parties (collectively, “<strong>User
              Contributions</strong>”). Your User Contributions are posted on and transmitted to others at your own
              risk. Please be aware that no security measures are perfect or impenetrable. Additionally, we cannot
              control the actions of third parties with whom you may choose to share your User Contributions. Therefore,
              we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">
            Automatic Information Collection and Tracking
          </Heading>
          <div className="flex flex-col gap-4">
            <Text>
              When you download, access, and use the App, it may use technology to automatically collect:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                <strong>Usage Details</strong>. When you access and use the App, we may automatically collect certain
                details of your access to and use of the App, including traffic data, location data, logs, and other
                communication data and the resources that you access and use on or through the App.
              </li>
              <li>
                <strong>Device Information</strong>. We may collect information about your mobile device and internet
                connection, including the device&apos;s unique device identifier, IP address, operating system, browser
                type, mobile network information, and the device&apos;s telephone number.
              </li>
              <li>
                <strong>Stored Information and Files</strong>. The App also may access metadata and other information
                associated with other files stored on your device. This may include, for example, photographs, audio
                and video clips, personal contacts, and address book information.
              </li>
              <li>
                <strong>Location Information</strong>. This App collects real-time information about the location of
                your device.
              </li>
            </ul>
            <Text>
              If you do not want us to collect this information do not download the App or delete it from your device.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">Information Collection and Tracking Technologies</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              The technologies we use for automatic information collection may include:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                <strong>Cookies (or mobile cookies)</strong>. A cookie is a small file placed on your smartphone. It may
                be possible to refuse to accept mobile cookies by activating the appropriate setting on your smartphone.
                However, if you select this setting you may be unable to access certain parts of our App.
              </li>
              <li>
                <strong>Web Beacons</strong>. Pages of the App and our e-mails may contain small electronic files known
                as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those pages or opened an email and for other
                related app statistics (for example, recording the popularity of certain app content and verifying
                system and server integrity).
              </li>
            </ul>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">Third-Party Information Collection</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              When you use the App or its content, certain third parties may use automatic information collection
              technologies to collect information about you or your device. These third parties may include:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                Advertisers, ad networks, and ad servers.
              </li>
              <li>
                Analytics companies.
              </li>
              <li>
                Your mobile device manufacturer.
              </li>
              <li>
                Your mobile service provider.
              </li>
            </ul>
            <Text>
              These third parties may use tracking technologies to collect information about you when you use this
              app. The information they collect may be associated with your personal information or they may collect
              information, including personal information, about your online activities over time and across different
              websites, apps, and other online services websites. They may use this information to provide you with
              interest-based (behavioral) advertising or other targeted content.
            </Text>
            <Text>
              We do not control these third parties&apos; tracking technologies or how they may be used. If you have
              any questions about an advertisement or other targeted content, you should contact the responsible
              provider directly.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">How We Use Your Information</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              We use information that we collect about you or that you provide to us, including any personal
              information:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                Provide you with the App and its contents, and any other information, products or services that you
                request from us.
              </li>
              <li>
                Fulfill any other purpose for which you provide it.
              </li>
              <li>
                Give you notices about your account/subscription, including expiration and renewal notices.
              </li>
              <li>
                Carry out our obligations and enforce our rights arising from any contracts entered into between you
                and us, including for billing and collection.
              </li>
              <li>
                Notify you when App updates are available, and of changes to any products or services we offer or
                provide though it.
              </li>
            </ul>
            <Text>
              The usage information we collect helps us to improve our App and to deliver a better and more
              personalized experience by enabling us to:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                Estimate our audience size and usage patterns.
              </li>
              <li>
                Store information about your preferences, allowing us to customize our App according to your individual
                interests.
              </li>
              <li>
                Speed up your searches.
              </li>
              <li>
                Recognize you when you use the App.
              </li>
            </ul>
            <Text>
              We use location information we collect to provide you with the App and its contents, and any other
              information, products or services that you request from us.
            </Text>
            <Text>
              We may also use your information to contact you about our own and third-parties&apos; goods and services
              that may be of interest to you.
            </Text>
            <Text>
              We may use the information we collect to display advertisements to our advertisers&apos; target
              audiences. Even though we do not disclose your personal information for these purposes without your
              consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you
              meet its target criteria.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">Disclosure of Your Information</Heading>
          <div className="flex flex-col gap-4">
            <Text>
              We may disclose aggregated information about our users, and information that does not identify any
              individual, without restriction.
            </Text>
            <Text>
              In addition, we may disclose personal information that we collect or you provide:
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                To our subsidiaries and affiliates.
              </li>
              <li>
                To contractors, service providers, and other third parties we use to support our business, and who are
                bound by contractual obligations to keep personal information confidential and use it only for the
                purposes for which we disclose it to them.
              </li>
              <li>
                To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of StyleQ LLC&apos;s assets, whether as a going
                concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held
                by StyleQ LLC about our App users is among the assets transferred.
              </li>
              <li>
                To third parties to market their products or services to you if you have not opted out of these
                disclosures. We contractually require these third parties to keep personal information confidential and
                use it only for the purposes for which we disclose it to them.
              </li>
              <li>
                To fulfill the purpose for which you provide it. For example, if you give us an email address to use
                the &quot;email a Client/Stylist&quot; feature of our App, we will transmit the contents of that email and your
                email address to the recipients. Additionally, if you schedule an appointment with a Client/Stylist, we
                will transmit your name and the nature of the appointment to the selected recipeint.
              </li>
              <li>
                For any other purpose disclosed by us when you provide the information.
              </li>
              <li>
                With your consent.
              </li>
              <li>
                To comply with any court order, law, or legal process, including to respond to any government or
                regulatory request.
              </li>
              <li>
                To enforce our rights arising from any contracts entered into between you and us, including the App
                EULA, <a href="/legal/terms" className="link">terms and conditions</a>, and for billing and collection.
              </li>
              <li>
                If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
                StyleQ LLC, our customers or others. This includes exchanging information with other companies and
                organizations for the purposes of fraud protection and credit risk reduction.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <Heading level={3} className="font-medium text-lg mb-2">
            Your Choices About Our Collection, Use, and Disclosure of Your Information
          </Heading>
          <div className="flex flex-col gap-4">
            <Text>
              We strive to provide you with choices regarding the personal information you provide to us. This section
              describes mechanisms we provide for you to control certain uses and disclosures of over your information.
            </Text>
            <ul className="list-disc list-inside flex flex-col gap-3">
              <li>
                <strong>Tracking Technologies.</strong> You can set your browser to refuse all or some browser cookies,
                or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some
                parts of this App may then be inaccessible or not function properly.
              </li>
              <li>
                <strong>Location Information.</strong> You can choose whether or not to allow the App to collect and
                use real-time information about your device&apos;s location through the device&apos;s privacy settings. If you
                block the use of location information, some parts of this App may then be inaccessible or not function
                properly.
              </li>
            </ul>
            <Text>
              We do not control third parties&apos; collection or use of your information to serve interest-based
              advertising. However, these third parties may provide you with ways to choose not to have your information
              collected or used in this way. You can opt out of receiving targeted ads from members of the Network
              Advertising Initiative (&quot;NAI&quot;) on the NAI&apos;s website.
            </Text>
            <Text>
              California residents may have additional personal information rights and choices. Please see
              <a href="#california-residents" className="link"> Your California Privacy Rights</a> for more information.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">
            Accessing and Correcting Your Personal Information
          </Heading>
          <div className="flex flex-col gap-4">
            <Text>
              You can review and change your personal information by logging into the App and visiting your account
              profile page.
            </Text>
            <Text>
              You may also send us an email at <a href="mailto:support@bookstyleq.com" className="link">support@bookstylq.com</a> to
              request access to, correct or delete any personal information that you have provided to us. We cannot
              delete your personal information except by also deleting your user account. We may not accommodate a
              request to change information if we believe the change would violate any law or legal requirement or
              cause the information to be incorrect.
            </Text>
            <Text>
              If you delete your User Contributions from the App, copies of your User Contributions may remain viewable
              in cached and archived pages, or might have been copied or stored by other App users. Proper access and
              use of information provided on the App, including User Contributions, is governed by our
              <a href="/legal/terms" className="link"> terms of use</a>.
            </Text>
            <Text>
              California residents may have additional personal information rights and choices. Please see
              <a href="#california-residents" className="link"> Your California Privacy Rights</a> for more information.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2" id="california-residents">
            California Privacy Rights
          </Heading>
          <div className="flex flex-col gap-4">
            <Text>
              If you are a California resident, California law may provide you with additional rights regarding our use
              of your personal information. To learn more about your California privacy rights, visit
              <a href="https://oag.ca.gov/privacy/ccpa" className="link"> https://oag.ca.gov/privacy/ccpa</a>.
            </Text>
            <Text>
              <strong>California&apos;s &quot;Shine the Light&quot; law (Civil Code Section § 1798.83)</strong> permits users of
              our App that are California residents to request certain information regarding our disclosure of personal
              information to third parties for their direct marketing purposes. To make such a request, please send an
              email to <a href="mailto:support@bookstyleq.com" className="link">support@bookstyleq.com</a>.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">
            Data Security
          </Heading>
          <div className="flex flex-col gap-4">
            <Text>
              We have implemented measures designed to secure your personal information from accidental loss and from
              unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our
              secure servers behind firewalls. Any payment transactions and other sensitive information will be
              encrypted using SSL technology.
            </Text>
            <Text>
              The safety and security of your information also depends on you. Where we have given you (or where you
              have chosen) a password for access to certain parts of our App, you are responsible for keeping this
              password confidential. We ask you not to share your password with anyone. We urge you to be careful
              about giving out information in public areas of the App like message boards. The information you share
              in public areas may be viewed by any user of the App.
            </Text>
            <Text>
              Unfortunately, the transmission of information via the internet and mobile platforms is not completely
              secure. Although we do our best to protect your personal information, we cannot guarantee the security
              of your personal information transmitted through our App. Any transmission of personal information is at
              your own risk. We are not responsible for circumvention of any privacy settings or security measures we
              provide.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2" id="changes-to-policy">
            Changes to Our Privacy Policy
          </Heading>
          <div className="flex flex-col gap-4">
            <Text>
              We may update our privacy policy from time to time. If we make material changes to how we treat our
              users&apos; personal information, we will post the new privacy policy on this page with a notice that the
              privacy policy has been updated and notify you by email to the primary email address specified in your
              account and/or through a notice on the App home screen. The date the privacy policy was last revised is
              identified at the top of the page. You are responsible for ensuring we have an up-to-date active and
              deliverable email address for you, and for periodically visiting our App and this privacy policy to
              check for any changes.
            </Text>
          </div>
        </section>
        <section className="border-b border-gray-200 py-8">
          <Heading level={3} className="font-medium text-lg mb-2">
            Contact Information
          </Heading>
          <div className="flex flex-col gap-4">
            <Text>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </Text>
            <Text>
              <strong>StyleQ LLC</strong> <br />
              <a href="mailto:support@bookstyleq.com" className="link">support@bookstyleq.com</a><br />
              4816 N 27th St<br />
              Milwaukee, WI 53218<br />
            </Text>
          </div>
          <div className="mt-6">
            <Text className="sm">
              To register a complaint or concern about our privacy practices, please contact us at
              <a href="mailto:support@bookstyleq.com" className="link"> support@bookstyleq.com</a>.
            </Text>
          </div>
        </section>
      </div>
    </article>
  )
}
