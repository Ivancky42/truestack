export const truesyariahFaq = [
	{
		question:
			"What is TrueSyariah™ and how does it differ from TrueKredit™?",
		answer:
			"TrueSyariah™ is Truestack's Shariah-compliant digital financing platform — purpose-built for operators pursuing the KPKT Syariah Digital Lending Licence in Malaysia. It shares the same end-to-end lending lifecycle, KPKT-aligned compliance core and dedicated AWS deployment as TrueKredit™ Pro, but the financing engine is rebuilt around Shariah contracts: Tawarruq commodity trades flow through a real Bursa Suq Al-Sila' (BSAS) integration, late charges are split into segregated Ta'widh (تعويض) and Gharamah (غرامة) ledger accounts, and every document, journal and report is shaped to satisfy a Shariah committee — not a conventional money-lender audit. If you are running a conventional KPKT money-lending licence, you want TrueKredit. If you are licensed (or applying) for Shariah-based digital lending under KPKT, you want TrueSyariah.",
	},
	{
		question:
			"Do I need a separate licence and entity to operate Shariah digital lending in Malaysia?",
		answer:
			"Yes. Under Malaysia's lending licence framework, Shariah-based money lending requires its own approval pathway and — in practice — a separate legal entity from the holder of a conventional KPKT digital lending licence. The two licences cannot share the same operating company because the Shariah entity must keep its books, late-fee accounts (Ta'widh / Gharamah), Shariah committee oversight and complaint handling fully ring-fenced from any riba-based lending activity. Truestack helps you stand up the Shariah entity, scope its KPKT submission alongside your existing group, and deploy TrueSyariah on a dedicated AWS environment that is isolated from any TrueKredit production tenancy you may already operate.",
	},
	{
		question:
			"How does Tawarruq work inside TrueSyariah, and which commodity exchange do you connect to?",
		answer:
			"Every disbursement is structured as a Tawarruq (مرابحة via commodity sale). When the customer's financing is approved, TrueSyariah books a real commodity transaction through TrueCommodity™ — our Shariah trading infrastructure — which routes the trade to Bursa Suq Al-Sila' (BSAS), the Bursa Malaysia-operated, Shariah-compliant commodity platform. The platform handles the full sequence — financier purchase, sale to customer at deferred profit, customer's onward sale to a third-party broker — and writes a tamper-evident audit log of every contract leg, time-stamped and committee-ready. The customer receives clean financing proceeds (in MYR), the operator books a deferred receivable at the agreed profit rate, and the underlying commodity contracts are archived as evidence for both KPKT and your Shariah committee.",
	},
	{
		question:
			"How are late fees handled — what is the difference between Ta'widh and Gharamah?",
		answer:
			"Shariah does not allow a financier to enrich itself from a customer's lateness, so TrueSyariah splits every late charge into two segregated accounting buckets at the journal level. Ta'widh (تعويض) is the portion that represents the operator's actual, evidenced cost of recovery — collection labour, dunning, administrative overhead — and may legitimately be retained by the financier within Shariah-approved caps. Gharamah (غرامة) is the residual penalty above that cost; it is posted to a separate ledger account and disbursed to approved charities on a documented, committee-signed schedule. The platform enforces the cap-aware accumulation rules, generates the Ta'widh/Gharamah trial balance, prepares the charity disbursement workflow and produces the audit pack your Shariah committee and KPKT will both ask for.",
	},
	{
		question:
			"Why is TrueSyariah only offered in a Pro-style dedicated deployment, not on a shared SaaS?",
		answer:
			"A Shariah operator cannot share infrastructure or databases with a conventional money lender — the books, the secret stores, the ledger of charity disbursements and the Shariah committee evidence have to live in an environment ring-fenced from any riba-based workload. For that reason TrueSyariah ships only in a dedicated configuration: an isolated AWS Malaysia account, a dedicated database and secrets vault, on-prem PKI signing, and a private set of integrations. There is no multi-tenant 'TrueSyariah SaaS' tier — every deployment is Pro-equivalent so the separation is real, not just logical.",
	},
	{
		question:
			"What does the on-premises digital signing stack look like for TrueSyariah?",
		answer:
			"TrueSyariah ships with the same on-prem digital signing stack as TrueKredit Pro — MSC Trustgate-backed PKI signing running on infrastructure you control, aligned with the Malaysian Digital Signature Act 1997. The cloud platform talks to your on-site signing server over a Cloudflare Tunnel; financing agreements, Tawarruq commodity contracts, attestation forms and discharge letters are all signed against keys that never leave your premises. Borrowers sign remotely from web or mobile; signed PDFs land back in TrueSyariah, audit-ready and Shariah-evidenced.",
	},
	{
		question:
			"How do customers apply for financing — do you provide mobile and web channels?",
		answer:
			"Yes. TrueSyariah includes the same three origination channels as TrueKredit Pro, all rebadged for Shariah financing: a counter-led walk-in flow for branch officers, a fully branded web origination portal at your own domain, and native iOS & Android mobile apps published under your brand. Customers can complete e-KYC (MyKad OCR + liveness), accept the Tawarruq commodity sale terms, sign the financing agreement digitally, and track repayments, profit splits, Ta'widh and Gharamah disclosures from any device. Push notifications cover instalment due dates and late-fee status.",
	},
	{
		question:
			"Is TrueSyariah suitable for operators who do not yet hold a KPKT Syariah licence?",
		answer:
			"Yes. Truestack covers the full journey end-to-end — Shariah-entity incorporation, KPKT submission for the Syariah digital lending licence, Shariah committee onboarding, AWS Malaysia build, UAT, penetration testing, KPKT inspection support and live operations on TrueSyariah. We are not a Shariah authority and we do not issue fatwa; we work alongside your appointed Shariah advisors and legal counsel so the platform reflects exactly the rulings they have approved.",
	},
	{
		question:
			"Which integrations and partners come pre-wired with TrueSyariah?",
		answer:
			"Out of the box: TrueIdentity™ for e-KYC (MyKad OCR, liveness, biometric match), CTOS for credit reports, TrueSSM™ for SSM company lookups via Infomina, MSC Trustgate for on-prem PKI signing, TrueCommodity™ for Bursa Suq Al-Sila' Tawarruq trades, and Malaysian payment gateways (FPX, DuitNow) for disbursement and collection. We negotiate partner pricing on your behalf and roll the integrations into a single contract so your Shariah operating company isn't stuck managing five vendors in parallel.",
	},
	{
		question:
			"How is data residency and PDPA handled for a Shariah operator?",
		answer:
			"All customer data — PII, MyKad scans, e-KYC liveness frames, signed contracts, Tawarruq commodity logs and the Ta'widh/Gharamah ledger — lives in AWS Malaysia (ap-southeast-5) with encryption at rest and in transit, daily automated backups, role-based access control and a complete, tamper-evident audit trail. The platform is engineered to PDPA Malaysia requirements (consent management, retention policies, data subject access workflows) and ships with a documented incident-response runbook and pen-test packaging suitable for a KPKT Syariah inspection.",
	},
	{
		question:
			"What does a TrueSyariah engagement look like in practice?",
		answer:
			"A typical engagement runs in four stages. (1) Licensing & entity setup: Truestack helps incorporate the Shariah operating company, drafts the KPKT Syariah digital lending licence submission, and onboards your Shariah committee. (2) Build: dedicated AWS Malaysia account stood up, TrueSyariah deployed, BSAS / Trustgate / e-KYC / payment gateways wired in, financing products and Ta'widh/Gharamah caps configured to your Shariah rulings. (3) UAT & inspection: end-to-end testing, penetration test, KPKT examiner walkthrough, Shariah committee sign-off. (4) Go-live & managed engineering: first disbursement, branded web and mobile apps in market, ongoing platform engineering and KPKT/Shariah reporting support. Talk to us early — we like to align engineering milestones with your supervisory timeline.",
	},
] as const;
