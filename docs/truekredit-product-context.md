# TrueKredit — product context

This document summarizes **TrueKredit™** and **TrueKredit™ Pro** for marketing and product alignment. Sources: sales deck bundled as `TrueKredit.zip` (HTML pitch deck `TrueKredit Pitch Deck.html`) and the [truestack_kredit](https://github.com/Malcan-Technologies/truestack_kredit) monorepo README (engineering / delivery model).

> **Note:** The PDF export (`TrueKredit.pdf`) is image-based — text was sourced from the deck HTML in the ZIP instead.

## Positioning

- **Headline narrative:** Run the entire lending business from **one integrated platform**, built for **Malaysian KPKT-licensed money lenders** (and aligned fintech operators).
- **Problem:** Operators often stitch **many vendors** (e-KYC, signing, CTOS, SSM, payments, docs, mobile, email) → multiple contracts, long integration timelines, manual compliance gaps.
- **Solution:** **One platform**, **pre-integrated** partners where it matters, **KPKT / PPW–aligned** design, **live in weeks** (pitch positioning), not bespoke integration projects.

## Two editions

### TrueKredit™ (TrueStack-hosted SaaS)

- **Pitch deck label:** Multi-tenant **TrueStack-hosted SaaS** (`kredit.truestack.my` pattern).
- **Engineering README:** **Pooled** multi-tenant admin + API, **shared database** with strict **tenant isolation**; origination, servicing, billing, compliance for many lenders on one deployment.

Use when: you want predictable subscription SaaS on TrueStack’s cloud (Malaysia region).

### TrueKredit™ Pro (dedicated deployment)

- **Pitch deck:** Everything in TrueKredit™ **plus** digital origination, signing, borrower apps — on **your own dedicated AWS environment**; pitched for **KPKT Online Money Lending Licence** alignment.
- **Engineering README:** **Dedicated stack per licensed client**: `admin_pro`, `backend_pro`, **per-client** borrower web and mobile (`borrower_pro/*`, `borrower_pro_mobile/*`); **isolated AWS account**, DB, secrets; semver-tagged releases; optional **on-prem Signing Gateway** + **Trustgate (MTSA)**; **Cloudflare Tunnel** patterns for cloud ↔ on‑prem signing.

Use when: you need **isolation**, **borrower-facing web/mobile**, **on-prem PKI signing**, pinned releases, and **pentest/compliance packaging** pitched in the deck (e.g. pen test deliverable).

## Core platform capabilities (pitch deck → both editions where applicable)

1. **Borrower & loan management** — enquiry through approval, disbursement, collections; counter and/or online workflows.
2. **Book A / Book B** — regulated book separation; audit-ready framing.
3. **Auto schedules — Jadual J & K** — repayment schedules computed and generated **KPKT-aligned**, “to the sen”.
4. **e-KYC** — MyKad OCR + **liveness** / biometric framing (commercially **TrueIdentity™** style in product).
5. **Late fees, arrears & default** — automated workflows, escalation, correspondence.
6. **CTOS & SSM** — credit / company intelligence **within the workflow** (deck: Infomina for SSM).
7. **Auto document generation** — agreements, schedules, Lampiran/iDEAL class outputs, arrears/default letters.
8. **RBAC** — role-based controls for directors, officers, admins.

Additional items called out consistently on the SaaS-facing site and repo (where applicable):

- **TrueSight™** — cross-lender borrower intelligence on the pooled SaaS narrative (privacy-preserving aggregates).
- **Payment gateway**, **notifications** (email / WhatsApp in deck comparison row), audit trail, Malaysian **AWS residency**, **automated backups**, **iDEAL-compatible export** wording in deck (**iDeaL** spelling in deck HTML).

## Compliance & audit narrative

- Lampiran **A** auto-produced per approval path (deck).
- **iDeaL**-style submission export framing.
- Timestamped audit trail (“who did what, when”).
- Late fees computation emphasised as regulator-aligned.
- Arrears-to-default workflow automated.
- **Malaysia AWS** residency + daily backups messaging.

## TrueKredit Pro — exclusive themes (pitch + repo)

| Theme | Pitch deck | Repo / engineering detail |
|--------|------------|---------------------------|
| Digital signing | On-prem **Trustgate** server; Malaysian **Digital Signature Act** framing | **Signing Gateway**, MTSA images, MSC Trustgate, CA-backed signing |
| Borrower portal | Fully branded web; apply 24/7 | Next.js **`borrower_pro/<client>`** |
| Mobile | Native **iOS & Android** incl. onboarding, signing, tracking | Expo **React Native** `borrower_pro_mobile` |
| Marketing site | Brand front-door for leads | Per-client deployments / branding |
| Security package | Pentest deliverable cited in comparison | `docs/pro_client_pentest_access.md`, included pentest narrative |

**Suggested signing journey (marketing):**

1. Agreement generated from approved terms.
2. Borrower receives link (email / app).
3. Trustgate-signed document stored — legally binding / audit-ready.

## Integration story (commercial)

Partners called out together: **CTOS**, **Trustgate**, **Infomina**, **e-KYC**, **payment gateway**.

Pitch benefits:

- **No separate integration fees** to TrueKredit vs lining up vendors yourself.
- **Aggregated negotiation** positioning on gateway / e‑KYC economics.
- **Single vendor relationship** through TrueStack for SaaS operators.

*(Exact commercial terms are sales artifacts — engineering implements integrations per tenant / Pro client YAML + secrets.)*

## “Zero → licensed → lending” (services bridge)

Partnership storyline (not purely software SKU):

1. Licence acquisition paths (applications, renewals, liaison).
2. Compliance & consultancy / KPKT account management framing.
3. **Digital licence conversion** — incumbent physical licences → compliant digital infra.
4. **TrueKredit live** — training, first disbursement.

Links naturally to **`/services/digital-license`** style pages on TrueStack marketing.

## TrueKredit vs TrueKredit Pro — comparison matrix (pitch deck table)

Shared **core**:

- Loan lifecycle, Book A/B, e-KYC, CTOS, SSM (Infomina), Lampiran/Jadual/auto docs compliance pack, notifications (deck: email/WhatsApp), payment gateway integration, audit + KPKT reporting, AU **Malaysia residency**, walk-in counter path, backups, **iDeaL** export.

**Pro-only (deck):**

- Digital signing (**on‑prem Trustgate**).
- **Borrower web** origination portal.
- Borrower mobile **iOS + Android**.
- **Branded marketing** website line item.
- **Penetration testing / compliance report** framing.

## Canonical links

- **Product monorepo:** [github.com/Malcan-Technologies/truestack_kredit](https://github.com/Malcan-Technologies/truestack_kredit)
- **Pitch deck artifact:** unpack `TrueKredit.zip` → open `TrueKredit Pitch Deck.html` in browser for full slide copy.

## Copy consistency notes for the website

1. Prefer **edition labels**: “TrueKredit” (SaaS) vs **“TrueKredit Pro”** (dedicated) so visitors immediately see **two lanes**.
2. **Pro is not “more features only”** — it is **deployment + borrower channels + signing architecture** differentiated for digital licence workloads.
3. Where engineering disagrees subtly with slides (e.g. “self-hosted” vs **isolated AWS on client account managed by Terraform**), use **neutral phrasing**: “Dedicated environment on AWS (Malaysia), isolated from other lenders.”

---

## Source: `TrueKredit.zip`

Archive is a **standalone HTML/React pitch deck**, not application source code. Typical contents:

| File | Role |
|------|------|
| `TrueKredit Pitch Deck.html` | Interactive deck (`<deck-stage>`, slides as `<section>`) |
| `TrueKredit Pitch Deck-print.html` | Print-oriented variant |
| `deck-stage.js` | Slide stage navigation |
| `tweaks-panel.jsx` | Dev overlay (accent colour, watermark, slide numbers) |
| `assets/truestack-logo-*.svg` / `.png` | Logos |

Open `TrueKredit Pitch Deck.html` in a browser for the authoritative visual and wording.

---

## Slide-by-slide (from deck HTML — May 2026)

Titles and core lines only; verbatim marketing copy lives in the HTML.

1. **Cover** — “Run your entire lending business from one platform.” Sub: TrueKredit™ & TrueKredit™ Pro — integrated LMS for Malaysian licensed money lenders. Pills: KPKT licensed lenders, Fintech operators, Malaysia.
2. **The problem** — “Lending shouldn't be this complicated.” Pain of many tools, integrations, contracts, manual compliance. Listed pains: vendor contracts; months before go-live; manual compliance risk. Diagram motif: fragmented vendors (e-KYC, signing, CTOS, SSM, payment, docs, mobile, email).
3. **The answer** — “One platform. Everything integrated. Fully KPKT-compliant.” Pillars: pre-integrated partners (CTOS · Trustgate · Infomina · e-KYC · payment gateway); live in weeks / no integration-project framing; KPKT PPW compliant by design.
4. **Core features** (eight tiles) — See “Core platform capabilities” above (borrower & loan mgmt through RBAC).
5. **Compliance** — “Auditors get what they need. Instantly.” Bullets: Lampiran A auto; iDeaL export; audit trail; late fees to the sen; arrears-default workflow; backups + MY residency.
6. **Intro Pro** — “TrueKredit™ Pro — for lenders who go further.” Sub: everything in TrueKredit™ plus digital origination, signing, borrower apps — **dedicated AWS**. Badges: all of TrueKredit™ on **your AWS**; **100% KPKT Online Money Lending License** framing. Four spotlight cards:
   - On-premise digital signing (Trustgate; your keys/control)
   - Borrower web origination (branded 24/7)
   - Mobile iOS/Android (native; e-KYC, e-sign, tracking)
   - Branded marketing website
7. **Pro: signing** — “Loan agreements, signed digitally. On your own server.” Trustgate legal framing; Digital Signature Act; remote signing steps (generate → link → signed/stored compliant).
8. **Pro: origination** — “Borrowers come to you — 24/7.” Branded web + native apps + marketing site bullets.
9. **Comparison table** — See next section for full capability rows from the deck.
10. **Zero to license** — “We take you from zero to licensed and lending.” Timeline claim: **3–6 months**. Steps: licence acquisition (& renewals liaison); compliance & consultancy; digital licence conversion; TrueKredit live / first disbursement.
11. **Integration advantage** — “Integrations included. We negotiate better rates for you.” Partner strip: CTOS, Trustgate, Infomina, e-KYC, Payment Gateway. Columns: no integration fees; better partner rates; one vendor/contract (SaaS angle).
12. **About TrueStack** — “We don't just resell software — we build it.” Tenets: Speed, Quality (bank-grade MY AWS audit-ready), Satisfaction (beyond go-live). “Beyond TrueKredit” strip: TrueIdentity™, digital signing stack, loan origination web/mobile, P2P platforms.
13. **CTA** — “Ready to consolidate your stack?” + truestack.my, hello@truestack.my, Book a Demo.

---

## TrueKredit™ vs TrueKredit™ Pro — full capability rows (deck table)

Deck column subtitles: **TrueKredit™ — Truestack-hosted SaaS** | **TrueKredit™ Pro — Self-hosted on dedicated AWS**

**Core platform** (deck marks both ✓):

- Loan lifecycle management  
- Book A / Book B management  
- e-KYC — MyKad OCR, liveness, biometric match  
- CTOS reports — built in  
- SSM reports via Infomina — built in  
- Auto document generation — Lampiran A, Jadual J & K, default letters, compliance  
- Auto emails & WhatsApp notifications  
- Payment gateway integration  
- Audit trail & KPKT-compliant reporting  
- AWS Malaysia data residency  
- iDeaL system export for KPKT submissions  
- Walk-in borrower origination (counter / branch)  
- Daily automated backups  

**Pro exclusive** (SaaS “—”, Pro ✓ in deck):

- Digital signing — on-prem Trustgate server  
- Borrower web origination portal  
- Borrower mobile app — iOS & Android  
- Branded marketing website  
- Pen test report and security compliance  

---

## Engineering monorepo (README) — lanes & apps

| Lane | Purpose | Primary apps |
|------|---------|----------------|
| **SaaS** | Pooled MT; shared DB; tenant isolation | `apps/admin`, `apps/backend` |
| **Pro** | Dedicated per client | `apps/admin_pro`, `apps/backend_pro`, `apps/borrower_pro/<client>` |
| **Mobile (Pro)** | Native borrower apps | `apps/borrower_pro_mobile/<client>` |

Design principle (README): **share code, not production runtime** — SaaS one deployment; each Pro client isolated infra, same codebase.

**Pro product areas (abbrev. from README):**

- **Staff admin:** dashboard/KPIs, borrower CRM, origination pipeline (Book A/B, L1/L2, counter-offer), attestation (Google Meet/Calendar), on-prem signing (Jadual J/K automation, CA, witness flows), servicing/collections, product & compliance (**iDeal** CSV, Lampiran A PDF), comms, tools, governance RBAC/logs.  
- **Borrower web:** auth & 2FA/passkeys, wizard & multi-profile corp, applications & docs, servicing & payments & early settlement, attestation/scheduling, on-prem PKI signing path, notices & legal PDPA banners.  
- **Infra / security:** AWS Malaysia, on-prem signing + Cloudflare Tunnel, encryption, backups, pentest runbook (`docs/pro_client_pentest_access.md`), integrations **MSC Trustgate**, **TrueIdentity**, workspace email, transactional email.

---

## Contact / company lines (deck CTA footer)

Use only if you intentionally mirror sales collateral:

- **Email:** hello@truestack.my  
- **Company:** Truestack Technologies Sdn. Bhd.  
- **Address (deck):** Lot C-13-3, KL Trillion, No 338 Jalan Tun Razak, 50400 Kuala Lumpur  
- **Reg (deck):** 202501058714 (1660120-X)

---

## Future website rework — ideas parked for review *(not implemented)*

Potential structure after you approve:

- Lead with dual product (SaaS vs Pro); hero copy aligned with **slide 1** / cover.
- Dedicated **challenge → answer → integration strip** before deep feature grids.
- **TrueKredit Pro** block (gold/dark motif as in deck) + **comparison table** responsive card/table.
- Services bridge to **`/services/digital-license`** for “zero to licence” positioning.
- **Pricing:** label current table explicitly as SaaS subscription; separate “Pro — contact / bespoke” path.
- Optionally sync hero **constellation chips** with deck’s eight core tiles vs current twelve-item marketing mix.

`app/truekredit/page.tsx` is **restored** to its pre-edit state; iterate from this markdown when you are ready to implement.
