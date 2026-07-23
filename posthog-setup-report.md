# PostHog post-wizard report

The wizard has completed a full PostHog integration for the StyleQ marketing site (bookstyleq.com). PostHog is initialized client-side via `instrumentation-client.js` (Next.js 15.3+ pattern) with a reverse proxy through `/ingest` to bypass ad blockers. A shared server-side client in `lib/posthog-server.js` captures events from the two API routes. Client-side events pass `X-POSTHOG-DISTINCT-ID` and `X-POSTHOG-SESSION-ID` headers so server events are correlated with the visitor's browser session. Persons are identified on each lead-capture action using the submitted email as the distinct ID.

| Event name | Description | File |
|---|---|---|
| `book_a_call_submitted` | Visitor submits the Book a Call form with name, email, and community details. | `components/BookACall.js` |
| `brochure_requested` | Visitor submits their work email in the brochure modal to receive the PDF. | `components/BrochureModal.js` |
| `newsletter_subscribed` | Visitor submits their email via the footer newsletter form to receive the brochure. | `components/NewsletterForm.js` |
| `book_a_call_received` | Server confirms a Book a Call request was successfully processed and emailed via Resend. | `app/api/book-a-call/route.js` |
| `brochure_email_sent` | Server confirms the brochure email was successfully delivered to the visitor via Resend. | `app/api/subscribe/route.js` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/525777/dashboard/1896474)
- [Book a Call conversion funnel (wizard)](https://us.posthog.com/project/525777/insights/oYniabWA)
- [Book a Call submissions over time (wizard)](https://us.posthog.com/project/525777/insights/XspzEzbn)
- [Brochure & newsletter leads over time (wizard)](https://us.posthog.com/project/525777/insights/X7iRyRUr)
- [Total lead captures (wizard)](https://us.posthog.com/project/525777/insights/Ng6yd5DE)
- [Book a Call by preferred time (wizard)](https://us.posthog.com/project/525777/insights/f9mEVHQ4)

## Verify before merging

- [ ] Run a full production build (`pnpm build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Confirm the returning-visitor path also calls `identify` — currently `identify` is called only on fresh form submissions; a returning visitor who doesn't submit a form will remain on an anonymous distinct ID until their next conversion action.
- [ ] This project uses **Resend** for email delivery. Run `npx @posthog/wizard warehouse` to connect Resend (and any other data sources) to PostHog's data warehouse for a unified view of email delivery alongside product analytics.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
