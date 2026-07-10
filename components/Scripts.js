import Script from "next/script";

// Third-party vendor scripts live here so the root layout stays focused on the
// document shell. Add or remove a vendor by editing this one file, and default
// each non-critical script to `lazyOnload` so it never blocks render.
export default function Scripts() {
  return (
    <>
      {/* LeadConnector (GoHighLevel) chat widget. */}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a2e07b107e0e2e0e1b16c88"
        strategy="lazyOnload"
      />
    </>
  );
}
