# StyleQ — bookstyleq.com

Marketing website for StyleQ: a fully managed, on-site salon & spa service for senior living communities. Next.js (App Router) + Tailwind CSS v4.

## Source of truth

Company knowledge lives in [`docs/`](docs/README.md). **Read it before doing Ops, Product, or Marketing work.**

- Who we sell to and why: [`docs/icp-facility-buyer.md`](docs/icp-facility-buyer.md)
- Marketing voice & positioning: [`.agents/product-marketing.md`](.agents/product-marketing.md) — auto-loaded by the `copywriting`, `marketing-psychology`, and `seo-audit` skills.

## Non-negotiable guardrails (never violate in copy or product)

1. **The facility does NOT pay us.** We bill residents/families directly. Never imply the facility pays or takes on cost.
2. **We are a reliability / peace-of-mind partner, not a "beauty brand."** Lead with calm operations, consistency, compliance, and dignity.
3. **Zero lift for facility staff.** Never require nurses or administrators to do coordination, data entry, or scheduling work.
4. **Sell the pilot, not the contract.** CTAs lean toward a risk-free pilot or supplemental services, not "sign a contract."

## Conventions

- No em dashes in site copy (use commas, colons, or periods).
- Respect `prefers-reduced-motion` for all animations (see `components/Reveal.js` and `app/globals.css`).
