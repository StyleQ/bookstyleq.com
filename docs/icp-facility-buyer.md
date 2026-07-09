# ICP: The Facility Buyer — Company-Wide Source of Truth

> **Status:** Canonical. This is the single source of truth for who we sell to and why.
> **Owners:** Operations (CRM & qualification), Product/Engineering (app architecture), Marketing (positioning & copy).
> **Derived from:** Primary research interviews. **Raw attributed quotes with names are kept privately** in `docs/private/` (git-ignored — see [`README.md`](./README.md)). This public doc is anonymized.
> **Related:** For emotional tone, vocabulary, and clinical evidence, see the **Language Bank** (external doc — _link TBD, not yet provided_).

---

## 0. The one-paragraph summary

StyleQ sells a **fully managed, on-site salon and spa service** to senior living communities. The buyer is a **Campus Administrator / Executive Director** who is stretched thin, burned by monopoly incumbent salon vendors, and terrified of anything that creates work, staff pushback, or a regulatory complaint. We win by being a **reliability and peace-of-mind partner** — not a "beauty brand" — that removes work from their plate, requires **zero lift** from their staff, and **does not cost the facility anything** (we bill residents/families directly). We enter through **low-risk pilots** in the most captive unit (Assisted Living / Memory Care), not through a big contract ask.

---

## 1. Firmographics — the "Good Soil"

| Attribute | Target |
|---|---|
| **Total residents** | 200+ (strong baseline) |
| **Resident mix** | Solid base of **Assisted Living (AL)** and **Memory Care (MC)** — the captive market |
| **Service volume** | Enough demand for a stylist to see **4–15 clients/day without rushing** |
| **Occupancy** | High occupancy, **fully staffed** building |
| **Leadership** | Involved, communicative administrator; low management turnover |
| **Incumbent status** | Locked into a poor-service corporate/monopoly salon vendor = **high-priority target** |

---

## 2. The Buyer & the Buying Committee

- **Economic decision maker:** Campus Administrator / Executive Director.
- **Internal champions:** Community leaders and **nursing staff** who hear day-to-day resident/family feedback and manage invoices.
- **Core evaluation filter (memorize this):** _"Does this create work or solve problems?"_ — every touchpoint (copy, demo, dashboard) must instantly prove we **solve** and **remove** work.

---

## 3. Pain Intensity & Trigger Events

- **Incumbent vendor fatigue:** locked into corporate/monopoly vendors who rush appointments, give generic results (residents report walking out looking nothing like themselves), and offer poor customer service.
- **Operational burnout:** administrators don't want to manage vendor logistics or field family complaints.
- **Regulatory fear:** any service-quality inconsistency becomes a **regulatory/survey perception risk**. Fear of onboarding anything that could generate complaints.
- **Reputation dynamics:** word-of-mouth is ruthless. One bad stylist experience can poison an entire account.
- **Trigger events (the strike zone):**
  - Contract renewal windows — typically a 3-year initial term → subsequent 1-year renewals, with a **60-day notice** window.
  - Sudden **stylist turnover** at the incumbent.

---

## 4. Budget Authority & Payment Flow

- **The facility does NOT pay us.** This is load-bearing. Revenue comes from the **resident or family**, or an **institutional payer** (e.g. a religious order or similar sponsoring organization) — not the facility's ledger.
- **Billing must be flexible:** group-billing institutional populations via monthly invoice **and** independent residents paying point-of-sale, simultaneously.
- **Entry strategy — the Trojan Horse / phased pilot:** start in the **most acute/captive unit** (AL spa room, MC) to build proof, *then* expand and displace the incumbent contract. For smaller homes loyal to an existing hairdresser, pitch **supplemental** services (e.g. pedicures) to get a foot in the door without threatening the incumbent.

---

## 5. Negative Filters — the "Bad Soil" (who to disqualify)

- **Demographic shift:** facilities transitioning away from AL/MC to **Independent Living only** (kills the captive market — one stylist reported losing her entire income when a property dropped assisted living).
- **Uninvolved leadership / high management turnover:** if leadership doesn't communicate, the partnership fails.
- **Staffing crises:** understaffed buildings can't support the coordination mobile service needs.
- **Exclusivity conflicts:** small rural homes fiercely loyal to a single local hairdresser who see new vendors as a threat.
- **Rigid operations:** facilities dictating unrealistic rushed schedules (e.g. forcing 4 hours for 20 haircuts).

---

## 6. Implications by Domain

### 6a. Go-To-Market / Operations (CRM & qualification)
- Build CRM filters on the firmographics in §1 and negative filters in §5.
- **Track contract renewal dates**; the 60-day notice window is the conversion strike zone.
- Prioritize facilities locked into poor-service corporate/monopoly salon incumbents.
- Qualify on staffing + leadership involvement as hard gates.
- See the **`lead-qualification` skill** (`.claude/skills/lead-qualification/`) to score an individual facility against this doc.

### 6b. Product / Engineering (app architecture)
- **Zero-lift for facility staff:** the software must automate coordination (resident movement, scheduling). Never depend on nurses to do extra work — they are too understaffed.
- **Lightweight facility dashboard:** if the administrator has to do data entry, they abandon it.
- **Quality pacing hard-coded into booking logic:** stylists cannot be overbooked. No 4–5 hour blocks crammed with too many residents.
- **Multi-payer payment gateway:** bill families directly, handle institutional accounts, generate facility-friendly invoices — all bypassing the facility ledger.
- **Immediate feedback loops** (ratings/reviews) to catch a poor experience before it spreads through the facility rumor mill.

### 6c. Marketing (positioning & copy)
> The marketing interpretation of this ICP lives in [`.agents/product-marketing.md`](../.agents/product-marketing.md), which the copywriting / marketing-psychology / seo-audit skills read automatically. Keep the two in sync.
- **Do not pitch a "beauty brand." Pitch a "reliability brand"** — compliance, dignity, consistency, outsourced peace of mind.
- Hero copy must immediately prove we **remove work** and **boost family satisfaction without adding staff workload**.
- Proactively answer the two biggest fears: **Cost** (facility doesn't pay) and **Compliance** (survey readiness, infection control).
- **CTA = risk-free pilot / supplemental services**, not "sign a contract."

---

## Appendix

Raw, attributed interview quotes (with real names of interviewees and facilities) are **not** stored in this public repo. They live in `docs/private/icp-research-raw.md`, which is git-ignored. See [`README.md`](./README.md) for the privacy policy and where to keep them long-term.
