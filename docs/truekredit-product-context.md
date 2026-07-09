# TrueKredit — product context (from codebase)

**Purpose:** Durable marketing/product understanding for `/truekredit` and related copy.  
**Primary source:** [`/Users/ivan/Documents/truestack_kredit`](file:///Users/ivan/Documents/truestack_kredit) (engineering monorepo).  
**Commercial brochure:** PPW LMS summary (`docs/generate_truekredit_ppw_summary.py` in that repo).  
**Last researched:** Jul 2026.

> Prefer this document over older “multi-tenant SaaS” pitch language. Standard is **self-hosted on the client’s AWS account**.

---

## 1. One-line positioning

**TrueKredit** helps Malaysian **KPKT-licensed money lenders** run the full loan book from one admin platform — origination through repayments, compliance documents, and audit — deployed on **the lender’s own AWS account**. **Standard** is the branch/PPW admin LMS. **Pro** extends the same deployment with borrower web/mobile, attestation, and on-prem Trustgate signing for nationwide / Online-licence readiness.

---

## 2. Apps (what exists)

| App | Path | Audience | Role |
|-----|------|----------|------|
| **admin_pro** | `apps/admin_pro` | Lender staff | Main ops console |
| **backend_pro** | `apps/backend_pro` | API | Business logic, PDFs, schedules, notifications, integrations |
| **borrower_pro** | `apps/borrower_pro/<Client>` | Borrowers | Branded web portal (Pro) |
| **borrower_pro_mobile** | `apps/borrower_pro_mobile/<Client>` | Borrowers | Native iOS/Android (Pro) |
| **signing-gateway** | `apps/signing-gateway` | On-prem | PKI bridge to MSC Trustgate MTSA |
| **admin** / **backend** | `apps/admin`, `apps/backend` | Legacy | Multi-tenant SaaS — **being retired** (`docs/unification_plan.md`) |

**Deployment:** One isolated AWS account per client (`config/clients/*.yaml`). Demo auto-deploys from `main`; production clients pin semver.

**Live / configured clients (examples):** demo-client, pinjocep, danacredit, credibly, ezdana, fundle, ai-express, proficient-premium.

---

## 3. Module model (Standard vs Pro vs add-ons)

Runtime (`docs/module_enablement.md`, `packages/shared/src/modules.ts`):

```
effectiveModules = licensedModules ∩ deployCeiling ∩ infraReady
```

Clients **cannot** self-toggle modules. TrueStack ops controls entitlements.

### Core (every license)

| Key | Label | What lenders get |
|-----|-------|------------------|
| `origination` | Loan origination | Borrowers, applications, L1/L2, products, docs, agreements, disbursement prep |
| `repayments` | Loan servicing & payments | Schedules, record payment, lifecycle, early settlement |

Rich borrower profiles and payment verify live **inside** these cores — not separate keys.

### Optional admin add-ons

| Key | Label | Intent |
|-----|-------|--------|
| `lead_gen` | Sales leads | Leads queue → convert to borrower |
| `referral_agents` | Referral agents & commission | Agent directories, attribution, commission |
| `collections_ops` | Collections & LPS | Dashboard, calendar, PTP, contra/top-up/reschedule, escalation |

### Optional online (Pro-shaped)

| Key | Requires | Intent |
|-----|----------|--------|
| `borrower_portal` | Borrower ECS | Web/mobile self-serve |
| `attestation` | `borrower_portal` | Live / video attestation (Meet/Calendar) |
| `signing` | Signing stack | Trustgate digital signing |
| `gateway_payments` | Gkash | Borrower online repayments |

### Deploy presets (ceiling templates)

| Preset | Shape |
|--------|--------|
| `standard_core` | origination + repayments; no borrower app / signing |
| `admin_only_deploy` | core + lead_gen, referral_agents, collections_ops |
| `pro_full` | core + online modules (+ optional admin add-ons) |

**Marketing shorthand:**

| Edition | Decision-maker story |
|---------|----------------------|
| **Standard** | Branch/counter LMS on **your AWS** — walk-in origination, servicing, KPKT docs |
| **Pro** | Same deployment + nationwide borrower channels, attestation, on-prem signing |
| **Add-ons** | Collections ops; Lead gen / Referral (commercial brochure; see §8 for build status) |

**Site rule:** No public prices. Consultation CTAs only.

---

## 4. Capability inventory (decision-maker English)

### 4.1 Built today — core admin

**Borrower profiles**

- Individual & corporate borrowers; directors / company members
- Rich profile: employment, family/spouse, commitments/DSR, nationality, marital status, notes, documents
- Registration channel: admin (**PHYSICAL**) vs portal (**ONLINE**); profile claim/link on same IC
- Activity timeline on the borrower file

**Origination (L1 / L2)**

- Product catalogue: Jadual J / K, interest models, fees, term limits, required doc categories
- Application wizard; guarantors & references
- L1 field visits with photos; L2 director packs / export; reject / amend / counter-offer
- CTOS/CBM: **document upload slots** today — **no automated bureau API pull** yet

**Agreement & disbursement**

- Generate Jadual J/K agreement PDF; guarantor agreement
- Walk-in path: print / upload signed agreement + LHDN stamp + proof of disbursement
- Pro path: attestation → e-KYC → Trustgate signing (borrower / admin / witness) → disburse
- Agreement date drives schedule; legal/stamping fees; net disbursement

**Schedules & repayments**

- Sen-accurate amortising schedules; spillover allocation (late → interest → principal)
- Admin record payment + bank slip; early settlement quote/confirm
- Borrower manual payment → Payment Approvals queue (when portal on)
- Loan completion + discharge letter

**Arrears / default (under repayments today)**

- Late fees, arrears period, default-ready, mark default
- Auto **arrears** and **default notice** letters (regenerate with cooldown)

**Compliance**

- Lampiran A PDF (per loan + bulk ZIP by year)
- KPKT iDeaL CSV export
- Overdue/NPL / collection summary style reports
- Exports audit-logged

**Audit & RBAC**

- Admin Logs — tamper-resistant across applications, loans, borrowers, signing, team, compliance
- Entity timelines on borrower / application / loan
- Default roles include Owner, Super Admin, Credit L1, Approval L2, Finance, Attestor, Collections, Compliance, Auditor, etc. + custom roles (`packages/shared/src/rbac.ts`)

**Risk signals**

- Application affordability risk score (DSR, commitments, exposure) — built
- Borrower payment-performance badges (Good / Watch / High Risk / Defaulted)
- **TrueSight™ AI** — commercial / coming-soon narrative; not a shipped AI product in-repo

### 4.2 Auto documents & email (TrueSend / Resend)

| Document | Typical trigger | Emailed? |
|----------|-----------------|----------|
| Loan agreement (Jadual J/K) | Generate on demand | No (signing flow delivers signed copy later) |
| Guarantor agreement | On demand | No |
| Repayment schedule | On disburse | No |
| **Payment receipt PDF** | Payment recorded | **Yes** (`payment_receipt`) |
| **Arrears letter** | Enter arrears / regen | **Yes** (`arrears_notice`) |
| **Default letter** | Mark default / regen | **Yes** (`default_notice`) |
| **Discharge letter** | Completed / early settled | **Yes** (`loan_completed`) |
| Lampiran A | On-demand download | No |
| iDeaL CSV | Compliance export | No |
| **Signed agreement PDF** | Full digital signing | **Yes** (`signed_agreement_ready`, etc.) |

Also automated: payment reminders, late notices, application status, attestation reminders, KYC/signing milestones, disbursement confirmation. Per-event toggles in notification catalog (`apps/backend_pro/src/modules/notifications/catalog.ts`).

WhatsApp: config hooks exist; **not** a primary channel in the catalog.

### 4.3 Integrations

| Integration | Status |
|-------------|--------|
| **TrueIdentity™ e-KYC** | Built (MyKad OCR, liveness, webhook on borrower) |
| **TrueSSM™** | Built (company registry pull; billable per use) |
| **MSC Trustgate / MTSA** | Built (on-prem signing-gateway) |
| **Google Meet / Calendar** | Built (attestation) |
| **Gkash** | Built under `gateway_payments` |
| **CTOS / CBM** | Upload categories only — no live pull |
| **Resend (TrueSend)** | Built transactional email |

### 4.4 Pro online surfaces

- Branded borrower web + native apps: apply, KYC, track loan, pay, sign
- Digital attestation (live / scheduled video)
- On-prem PKI signing
- Online payments when Gkash licensed + configured

### 4.5 Add-ons — commercial story vs build status

| Capability | Brochure / module key | Codebase reality (Jul 2026) |
|------------|----------------------|-----------------------------|
| **Collections ops** | Dashboard, calendar, PTP, LPS (contra/top-up/reschedule), escalation | Module key + RBAC permissions exist; **dedicated collections dashboard / PTP / LPS UI largely planned** (`docs/collections_lps_servicing_plan.md`). Arrears/default **letters and late-fee servicing are built** under repayments. |
| **Lead gen** | Sales leads queue → convert to borrower | Module key exists; **no full Leads queue UI/API** yet. Partial bridge: borrower `leadDisposition*` fields. Spec in `docs/client_origination_collections_plan.md`. |
| **Referral agents** | Agents, attribution, commission | Planned; **not implemented** as product surface. |

---

## 5. End-to-end workflows

### Counter / Standard (admin-only)

```
Create borrower → Application (docs, field visits) → L1 → L2
  → Generate / upload agreement + stamp → Disburse → ACTIVE schedule
  → Record payments → (arrears letters) → Default → Complete / discharge
```

LMS-only path can skip attestation/signing and go **PENDING_DISBURSEMENT** after L2 approve.

### Online / Pro

Same L1/L2 queues after borrower submits (`loanChannel = ONLINE`), plus:

```
Attestation → e-KYC → Signing certificate → Borrower / admin / witness sign → Disburse
```

### Collections / LPS (planned add-on)

Collection officer submits contra / top-up / reschedule → LPS approval queue → may spawn new application or schedule change. **Design docs exist; full UI not shipped.**

---

## 6. Standard vs Pro (marketing matrix)

**Shared (both):**

- Loan lifecycle, products, L1/L2, risk scoring signals
- Rich borrower profiles
- Schedules, repayments, early settlement, arrears/default letters
- Auto docs + email receipts / notices
- KPKT exports (Lampiran, iDeaL)
- Analytics, RBAC, full audit trail
- **Client’s own AWS account · Malaysia residency · isolated book**
- Walk-in / counter origination
- Pre-wired integrations (usage-based)

**Pro unlocks:**

- Branded borrower web portal
- Native iOS & Android apps
- On-prem Trustgate digital signing
- Digital attestation (live & video)
- Online payments (Gkash), when licensed
- KPKT Online / pen-test packaging narrative

**Do not** describe Standard as multi-tenant SaaS or TrueStack-hosted SaaS on the marketing site.

---

## 7. Marketing site implications (`/truekredit`)

### Current structure (post-rework)

Hero → problem/editions → **device feature scroll** → connected modules carousel → origination channels → AWS trust block → Pro upgrade → compare → integrations → licence bridge → FAQ → CTA.

### Feature scroll guidance

- Tone: **decision makers** — outcomes, not developer jargon.
- Structure: **full lending lifecycle order** (lead → profile → approve → docs/email → service → collect → audit → Pro nationwide).
- Visuals: **large laptop** as section focus (admin pseudo-UI); phone only for Pro borrower app. Responsive: stacked on mobile with device still prominent.
- **Do not** put AWS isolation in the feature scroll — dedicated infrastructure section covers it.
- Market **Collections** and **Lead gen** as available (brochure / commercial story).
- Modules carousel = **integrations that amplify the lifecycle** (e-KYC, TrueSSM, CTOS, TrueSend, TrueSight soon, Pro attestation/signing). Keep existing illustrations.
- Origination = **entry channels into the same loan file**. Keep existing illustrations.
- Soften TrueSight to **coming soon**; no guaranteed default-rate claims.
- **No public pricing.**

---

## 8. Gaps & ambiguities (engineering)

| Topic | Notes |
|-------|--------|
| Lead gen / referral UI | Keys only; full CRM not shipped |
| Collections ops / LPS UI | Planned; letters + late fees exist under repayments |
| Finance maker/checker disbursement | Planned; not confirmed in schema |
| Payment voucher PDF | Planned in client workflow docs |
| Book A / Book B | Mentioned in README; no clear code definition found |
| CTOS live pull | Upload only |
| TrueScore / TrueSight AI | Commercial / coming soon |
| Standard public price | Brochure has figures; **site keeps prices off** |
| WhatsApp as primary channel | Not in notification catalog |

---

## 9. Key evidence paths (kredit monorepo)

| Topic | Path |
|-------|------|
| Overview | `README.md` |
| Modules | `docs/module_enablement.md`, `packages/shared/src/modules.ts` |
| Client workflow / gaps | `docs/client_origination_collections_plan.md` |
| Collections / LPS design | `docs/collections_lps_servicing_plan.md` |
| Unification / retire SaaS | `docs/unification_plan.md` |
| Commercial | `docs/truekredit_business_plan.md` |
| Pro user docs | `docs/user-guide-pro/` |
| Documents | `docs/user-guide-pro/loans/loan-documents-reports.md` |
| Email catalog | `apps/backend_pro/src/modules/notifications/catalog.ts` |
| PDFs | `apps/backend_pro/src/lib/pdfService.ts`, `letterService.ts` |
| RBAC | `packages/shared/src/rbac.ts` |
| Client config | `config/clients/*.yaml` |
| PPW brochure generator | `docs/generate_truekredit_ppw_summary.py` |

---

## 10. Contact framing (sales collateral)

- **Email:** hello@truestack.my  
- **Company:** Truestack Technologies Sdn. Bhd.  
- Site CTAs: Book consultation — not `kredit.truestack.my` SaaS signup.
