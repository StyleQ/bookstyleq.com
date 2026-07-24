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
      {/* Microsoft Clarity — session recordings + heatmaps. Loaded
          afterInteractive (earlier than lazyOnload) so recordings capture
          more of each session. Project ID is public by design. */}
      <Script id="ms-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "xr9al4chul");`}
      </Script>
    </>
  );
}
