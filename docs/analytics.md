# Analytics & Measurement — Source of Truth

> **Status:** Canonical. This is the single source of truth for how we measure the site and why we chose the tools we did.
> **Owners:** Product/Engineering (implementation), Marketing (insights & funnels).
> **Scope:** The marketing site only (`bookstyleq.com`). The resident/family App has its own separate analytics story and is out of scope here.
> **Related:** [`README.md`](./README.md), [`icp-facility-buyer.md`](./icp-facility-buyer.md), and `CLAUDE.md` (repo root).

---

## 0. The one-paragraph summary

We run **three complementary, zero-cost analytics tools**, each answering a different question. **Vercel Analytics** gives a no-config traffic baseline. **PostHog** is the primary tool: it measures **lead generation** (funnels, events, conversion, attribution) and ties an inquiry back to the path that produced it. **Microsoft Clarity** shows the **human behavior** behind the numbers (session recordings, heatmaps, friction). The whole stack costs **$0** and is designed to stay that way on Vercel's free plan. The goal is not "traffic for its own sake" but understanding **whether the site turns visitors into pilot conversations** and **why it does or doesn't**.

---

## 1. The stack at a glance

| Tool | Layer | The question it answers | Cost | Status |
|---|---|---|---|---|
| **Vercel Analytics** | Baseline traffic | "How many visitors, from where, on what pages?" | Free (Hobby) | ✅ Live |
| **PostHog** | Quantitative / lead-gen | "How many convert, through what funnel, from what source?" | Free tier (1M events/mo) | ✅ Live |
| **Microsoft Clarity** | Qualitative / behavior | "*Why* do people convert or drop off?" | Free (unlimited) | ✅ Live |

They are additive, not redundant. Vercel counts, PostHog explains *what converts*, Clarity explains *why*.

---

## 2. Why three tools instead of one

No single free tool covers all three layers well:

- A pure privacy-analytics counter (Vercel, Cloudflare) gives traffic but **no funnels, no session-level insight**.
- A product-analytics tool (PostHog) gives funnels and events but its session replay/heatmaps are secondary to a dedicated tool.
- A behavior tool (Clarity) shows recordings and heatmaps but **won't compute conversion rates or attribution**.

For a lead-gen marketing site, the important question is *"is this driving pilot inquiries, and where do we lose people?"* That needs both a quantitative funnel (PostHog) and qualitative observation (Clarity). Vercel Analytics stays because it's already wired in and free, and it's a useful sanity-check baseline that requires zero maintenance.

---

## 3. What each tool provides

### 3.1 Vercel Analytics (baseline)

- **What it gives:** page views, visitors, top pages, referrers, country-level geo, and Core Web Vitals (real-user performance).
- **What it does NOT give:** city-level geo, custom events, funnels, session recordings, or per-visitor attribution. (This gap is exactly why we added PostHog.)
- **How it's wired:** `@vercel/analytics` mounted as `<Analytics />` in `app/layout.js`. Zero config, no keys.
- **Use it for:** a quick, trustworthy "is traffic up or down, and is the site fast?" glance.

### 3.2 PostHog (primary — quantitative & lead-gen)

- **What it gives:** custom events, **funnels**, conversion rates, referrer/UTM attribution, **city-level** geo, paths, and per-person history. It can also do session replay and heatmaps, but we use Clarity for that.
- **Lead attribution:** on any form submit we call `identify(email)`, so a lead's full journey (which pages, which CTA) is tied to the email that inquired. Server-side events are correlated to the same browser session via `X-POSTHOG-DISTINCT-ID` / `X-POSTHOG-SESSION-ID` headers.
- **Events instrumented:**

  | Event | Fires when | Where |
  |---|---|---|
  | `book_a_call_submitted` | Book a Call form submitted (client) | `components/BookACall.js` |
  | `brochure_requested` | Brochure modal email submitted (client) | `components/BrochureModal.js` |
  | `newsletter_subscribed` | Footer newsletter email submitted (client) | `components/NewsletterForm.js` |
  | `book_a_call_received` | Server confirms the call request emailed via Resend | `app/api/book-a-call/route.js` |
  | `brochure_email_sent` | Server confirms the brochure email delivered via Resend | `app/api/subscribe/route.js` |

  Autocapture is on (via `defaults: "2026-01-30"`), so generic clicks/pageviews are recorded too; a CTA-click funnel step can be built from autocaptured data without new code.
- **The headline metric:** the funnel `$pageview → CTA click → book_a_call_submitted`. That number *is* the site's lead-gen impact.
- **Use it for:** measuring conversion, comparing traffic sources, and answering "did that change move inquiries?"

### 3.3 Microsoft Clarity (qualitative — behavior)

- **What it gives:** **session recordings** (watch a real visit), **heatmaps** (scroll depth, click/tap density), and automatic **rage-click / dead-click / excessive-scroll** friction detection. 100% free, no event cap.
- **What it does NOT give:** conversion math or funnels. It's for observation, not measurement.
- **Use it for:** understanding *why* PostHog shows a drop-off, e.g. watching a facility administrator hesitate at the phone field on the Book a Call form and leave.
- **How it's wired:** an inline tracking snippet in `components/Scripts.js` via `next/script` with `strategy="afterInteractive"` (loaded earlier than the chat widget's `lazyOnload` so recordings capture more of each session). The Clarity **project ID (`xr9al4chul`)** is hardcoded there — it's public by design (it ships in the client either way), matching the existing hardcoded LeadConnector widget ID. No env var, so nothing extra to set on Vercel.

---

## 4. Decisions & trade-offs

| Decision | Choice | Rationale |
|---|---|---|
| **Primary analytics tool** | PostHog | Best free funnels + attribution; generous 1M events/mo tier; easy Next.js App Router integration. |
| **Persistence / privacy mode** | **Cookie-based** + a privacy-policy disclosure (no blocking consent banner) | Best cross-session lead attribution; appropriate for a mostly-US B2B audience. Cookieless (`persistence: 'memory'`) was considered but rejected — it weakens returning-visitor accuracy and cross-session stitching, and since we `identify` leads by email anyway, going cookieless would not have removed the privacy obligation. |
| **Ad-blocker resilience** | Reverse proxy through `/ingest` (Next.js rewrite in `next.config.mjs`) | PostHog's own domains are commonly blocked; proxying through our domain preserves data capture. |
| **Hosting region** | US (`https://us.i.posthog.com`) | Audience and company are US-based. |
| **GA4** | Rejected | Heavier, more privacy-invasive (needs a consent banner), and weaker funnel UX for a small site. |
| **Cloudflare Web Analytics** | Rejected | Free and privacy-clean but too thin — no funnels, no events, no city geo. |
| **Plausible / Fathom** | Rejected | Privacy-first and pleasant, but paid (~$9/mo). Off the table at $0 unless self-hosted. |
| **Behavior tool** | Microsoft Clarity | The only genuinely free, unlimited session-replay + heatmap tool. |

---

## 5. Implementation notes

- **PostHog client init:** `instrumentation-client.js` (Next.js 15.3+ pattern — no provider component needed). Automatic SPA pageviews via `defaults: "2026-01-30"`.
- **PostHog server client:** `lib/posthog-server.js` (`posthog-node`, immediate flush for serverless).
- **Reverse proxy:** the three `/ingest/*` rewrites in `next.config.mjs`.
- **Environment variables** (both are `NEXT_PUBLIC_*`, so publishable and **inlined at build time**):
  - `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` (the `phc_...` project token)
  - `NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`
  - Local values live in `.env.local` (git-ignored); the same must be set on **Vercel → Production**. Because `NEXT_PUBLIC_*` is build-time inlined, **any change to these requires a redeploy** — a running deployment will not pick up new values.
- **⚠️ Host gotcha:** the site redirects apex → `www`, so **all real PostHog traffic appears under `www.bookstyleq.com`**. The apex (`bookstyleq.com`) shows essentially no events (the redirect happens before the page loads). When building insights, do not filter by the apex host — use `www` or no host filter.

---

## 6. Privacy posture

- We identify leads by the email they voluntarily submit. Both PostHog and Clarity set first-party cookies, and Clarity records session interactions (mouse, clicks, scroll).
- **⚠️ Privacy-policy disclosure is PENDING.** The current `app/privacy/page.js` is scoped to the **App**, not this marketing website, so it does not yet cover website analytics (PostHog + Clarity). A website-specific disclosure is being handled by the **legal team** and is not yet in the policy. Engineering should not add analytics language to the privacy page without legal sign-off.
- Analytics traffic is first-party (proxied through our domain) and US-hosted. We do **not** sell analytics data or use it for third-party advertising.
- Visitors can opt out via browser cookie settings / global privacy controls; deletion requests go to `legal@bookstyleq.com`.

---

## 7. How to use them together (the workflow)

1. **Vercel Analytics** — weekly glance: traffic direction and site speed.
2. **PostHog** — the funnel `$pageview → CTA click → book_a_call_submitted`. When a step leaks, note *which* step.
3. **Microsoft Clarity** — filter recordings/heatmaps to the leaking page/step and *watch* what actually happens.
4. Fix, then confirm the funnel moves in PostHog.

The loop is: **PostHog tells you where you're losing people; Clarity tells you why; Vercel keeps you honest on overall traffic and performance.**
