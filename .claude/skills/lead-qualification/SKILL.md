---
name: lead-qualification
description: Qualify a prospective senior living facility as a StyleQ sales lead using the "Good Soil vs Bad Soil" ICP model. Use when someone wants to qualify, score, triage, or prioritize a facility/community/account, evaluate whether a lead fits our ICP, or decide whether to pursue outreach. Triggers on "qualify this facility", "is this a good lead", "score this community", "should we go after", "does this fit our ICP", "Good Soil / Bad Soil", "rank these facilities", or when given a facility's attributes (resident count, care mix, incumbent vendor, renewal date, staffing).
---

# Lead Qualification (Facility Buyer)

Score a senior living facility against StyleQ's Ideal Customer Profile and return a clear verdict, the signals behind it, the renewal timing, and the recommended entry play.

## Source of truth

The criteria below are a scoring lens over [`docs/icp-facility-buyer.md`](../../../docs/icp-facility-buyer.md). **Read that doc first** — if it and this skill ever disagree, the doc wins, and this skill should be updated to match. Do not invent criteria that aren't grounded in it.

## Inputs to gather

Ask only for what's missing; qualify with whatever is provided and mark unknowns explicitly (don't silently assume).

- **Total residents** and **care mix** (Assisted Living / Memory Care / Independent Living / Skilled Nursing shares)
- **Occupancy & staffing** (fully staffed? understaffed? high turnover?)
- **Leadership** (administrator involved/communicative? management turnover?)
- **Incumbent salon vendor** (corporate/monopoly? service quality? loyal in-house hairdresser?)
- **Contract status** (renewal date, notice window)
- **Demographic trajectory** (stable AL/MC vs. shifting toward IL-only)

## Scoring model

Weigh **positive fit signals (Good Soil, §1)** against **disqualifiers (Bad Soil, §5)**.

**Positive fit signals** (each present = stronger lead):
1. 200+ total residents
2. Solid Assisted Living **and/or** Memory Care base (the captive market)
3. Volume supports a stylist seeing ~4–15 clients/day without rushing
4. High occupancy, fully staffed
5. Involved, communicative leadership; low turnover
6. Locked into a poor-service corporate/monopoly incumbent (displacement opportunity)

**Disqualifiers** (any strong one present = do not pursue now, regardless of positives):
- Transitioning to **Independent Living only** (captive market disappears)
- Uninvolved leadership / high management turnover
- Understaffed / staffing crisis (coordination will collapse)
- Small home fiercely loyal to a single local hairdresser who'd see us as a threat
- Rigid, unrealistic scheduling demands (e.g. 4 hrs for 20 haircuts)

**Verdict:**
- **Qualified** — meets the 200+/captive-mix baseline, adequately staffed with involved leadership, and no strong disqualifier.
- **Disqualified** — any strong disqualifier is present.
- **Needs info** — a load-bearing input (resident count, care mix, staffing, or leadership) is unknown.

## Timing: the renewal strike zone

If the facility is under an incumbent contract, flag where it sits relative to the **60-day notice window** before renewal — that window is our conversion opening. Surface: current term, renewal date, and days until the notice deadline. "Locked in with no near-term window" is a nurture lead, not a now lead.

## Recommended entry play

Match to the situation (see §4 of the doc):
- **Captive AL/MC + poor incumbent** → phased pilot in the most acute/captive unit to build proof, then expand and displace.
- **Smaller home with a loyal in-house hairdresser** → Trojan Horse: pitch **supplemental** services (e.g. pedicures) alongside the existing hairdresser, don't threaten them.
- **Locked contract, good fit** → nurture; set a reminder ~90 days before the notice deadline.

## Reminders for every pitch angle you suggest

- The facility **does not pay** — we bill residents/families directly. Never frame a cost to the facility.
- Sell **reliability / peace of mind / zero-lift / compliance**, not "beauty."

## Output format

```
Facility: <name or label>
Verdict: Qualified | Disqualified | Needs info
Fit: <n>/6 positive signals · <n> disqualifier(s)

✅ Positive signals: <bulleted>
⛔ Disqualifiers: <bulleted, or "none">
❓ Missing info: <bulleted, or "none">

⏱ Renewal strike zone: <term, renewal date, days to 60-day notice — or "unknown / no incumbent">
🎯 Recommended entry play: <pilot unit | supplemental foot-in-door | nurture> — <one line why>
Next step: <the single most useful action for Ops>
```

Keep it tight. If several facilities are given, produce one block each, then a ranked shortlist (Qualified + nearest renewal window first).
