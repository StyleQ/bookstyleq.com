# StyleQ Knowledge Base

The company-wide source of truth for anyone (or any tool) working on StyleQ — Operations, Product/Engineering, and Marketing. Keep these docs canonical: when reality changes, update the doc, don't fork the knowledge into a chat thread.

## Index

- **[ICP: The Facility Buyer](./icp-facility-buyer.md)** — who we sell to, the buying committee, pain triggers, payment flow, negative filters, and per-domain implications. Start here.
- **[Analytics & Measurement](./analytics.md)** — the three-tool measurement stack (Vercel Analytics, PostHog, Microsoft Clarity), what each provides, and every decision/trade-off behind it.
- **Marketing brief** → [`../.agents/product-marketing.md`](../.agents/product-marketing.md) — the marketing interpretation of the ICP (voice, positioning, objections). Auto-loaded by the copywriting / marketing-psychology / seo-audit skills.

## How this is wired into the tooling

- `CLAUDE.md` (repo root) points every AI session here and lists the non-negotiable guardrails.
- `.agents/product-marketing.md` is read automatically by the installed marketing skills before they write anything.

## ⚠️ Privacy — how customer names are kept out of this public repo

This repo (`github.com/StyleQ/bookstyleq.com`) is **public**. So the knowledge is split:

- **`icp-facility-buyer.md` (this folder) — anonymized, safe to commit.** No personal names, facility names, or vendor names. This is the shareable source of truth.
- **`docs/private/icp-research-raw.md` — the raw attributed quotes with real names.** This folder is **git-ignored** (`/docs/private/` in `.gitignore`), so it is never committed to the public repo. It currently lives only on your machine.

**Do not remove `/docs/private/` from `.gitignore`, and do not paste named quotes into any tracked file.**

### Recommended long-term home for the raw research
The git-ignored folder is *containment*, not a durable store (no team sharing, no backup). Move `docs/private/icp-research-raw.md` into a **private repo** (e.g. `StyleQ/ops-knowledge`) or a **private Notion/Drive**, then link to it from here. Nothing in `docs/` is imported by the Next.js app, so none of it ships to the live site regardless — but tracked files do enter public git history.
