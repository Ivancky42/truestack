export const truesyariahStages = [
	{
		n: "01",
		label: "Entity",
		title: "Entity & structure",
		summary:
			"A Shariah operating company incorporated separately from any conventional licence holder, with capital, directors and premises checked before anything is filed.",
		detail:
			"A Shariah operating company is incorporated separately from any conventional licence holder, because the two cannot share one entity. We check company form, paid-up capital, directors and premises before anything is filed.",
	},
	{
		n: "02",
		label: "Committee",
		title: "Committee & contracts",
		summary:
			"A Shariah advisor or committee appointed — yours, or one of our partner advisors — and your Aqad, Tawarruq sequence and fee structure taken through to written approval.",
		detail:
			"Your Shariah advisor or committee is onboarded — if you do not have one, we can introduce partner advisors who have worked with us before, which tends to move faster. We then take the Aqad, the Tawarruq sequence, the profit basis and the Ta'widh and Gharamah caps through to written approval. Starting this early is the single biggest thing that keeps an application on schedule.",
	},
	{
		n: "03",
		label: "Submission",
		title: "Licence application",
		summary:
			"The Shariah digital lending submission drafted and filed together with the approved contracts, so nothing goes back for a second look.",
		detail:
			"The Shariah digital lending submission is drafted and filed alongside your approved contracts and supporting documents, scoped against your existing group if you already hold a conventional licence, and we handle the correspondence through to approval.",
	},
	{
		n: "04",
		label: "Go-live",
		title: "Build & go-live",
		summary:
			"Dedicated AWS Malaysia build, integrations wired in, UAT and penetration testing, committee sign-off, then the first Tawarruq trades under supervision.",
		detail:
			"A dedicated AWS Malaysia account is stood up and TrueSyariah deployed, with TrueCommodity, Trustgate, e-KYC and payment gateways wired in. Then UAT, penetration testing, supervisory walkthrough and committee sign-off, before the first disbursement.",
	},
] as const;

export const truesyariahLifecycle = [
	{
		title: "Application and e-KYC",
		body: "Three channels: a counter flow for branch officers, a branded web portal on your own domain, and native iOS and Android apps. MyKad OCR, liveness and biometric match verify identity; CTOS reports and SSM lookups attach to the file as evidence.",
	},
	{
		title: "Assessment and approval",
		body: "Affordability, exposure and policy rules run against your own criteria. Approvals record the officer, the limit and the reasoning, and exceptions are logged rather than settled in a corridor.",
	},
	{
		title: "Aqad and digital signing",
		body: "The agreement generates from the contract version your committee approved and is signed against MSC Trustgate PKI keys held on your own premises, under the Digital Signature Act 1997. Customers sign remotely; the signed PDF returns to the file.",
	},
	{
		title: "Tawarruq trade, then disbursement",
		body: "A real commodity transaction books through TrueCommodity™ — financier purchase, sale to customer at deferred profit, onward sale to a broker — each leg time-stamped in a tamper-evident log. Only then do the proceeds move by FPX or DuitNow.",
	},
	{
		title: "Servicing and collections",
		body: "Instalment schedules, receipts, reminders and notices run automatically. A late payment splits into Ta'widh and Gharamah at the journal level, under the cap-aware rules your committee set, and the customer sees the split disclosed.",
	},
	{
		title: "Settlement and discharge",
		body: "Early settlement follows the basis your contract sets out rather than a conventional rebate formula, discharge letters sign the same way the Aqad did, and the file closes with its full trail intact.",
		final: true,
	},
] as const;

export const truesyariahRecordFields = [
	{
		title: "Contract version",
		body: "The Aqad in force, with its approval date",
		arabic: "عقد",
	},
	{
		title: "Commodity trade legs",
		body: "Purchase, sale, onward sale, broker reference",
		arabic: "تورق",
	},
	{
		title: "Compensation ledger",
		body: "Evidenced cost of recovery, retained within caps",
		arabic: "تعويض",
	},
	{
		title: "Penalty ledger",
		body: "Segregated, with the charity disbursement schedule",
		arabic: "غرامة",
	},
	{
		title: "Profit, never interest",
		body: "Margin from the commodity sale; there is no interest field",
		arabic: "ربا",
	},
] as const;

export const truesyariahModules = [
	{
		title: "Customer & file",
		body: "One record across facilities, holding documents, identity checks, credit reports and correspondence in the same place.",
	},
	{
		title: "Origination",
		body: "Configurable financing products, application forms, approval hierarchy and limits, with a queue your officers actually work from.",
	},
	{
		title: "Commodity trading",
		body: "TrueCommodity™ routes each Tawarruq trade to a live broker, reconciles the legs and archives the contracts as committee evidence.",
	},
	{
		title: "Schedules & profit",
		body: "Instalments generated from the deferred sale price, with restructuring, deferment and early settlement on your contracted basis.",
	},
	{
		title: "Late charge engine",
		body: "Cap-aware Ta'widh and Gharamah accumulation, posted to two ledger accounts that never combine, with the trial balance to prove it.",
	},
	{
		title: "Collections",
		body: "Ageing buckets, reminder and notice workflows, promise-to-pay tracking and officer assignment with the full contact history.",
	},
	{
		title: "Documents & signing",
		body: "Aqad, offer letters, receipts, statements, notices and discharge letters generated from live data, versioned and signed on-premises.",
	},
	{
		title: "Reporting & audit packs",
		body: "Portfolio, ageing and collection reporting for the board, and the Shariah audit pack assembled for the committee on demand.",
	},
] as const;

export const truesyariahGovernance = [
	{
		title: "Contracts held as configuration",
		body: "The Aqad your committee approved is what the system executes. Change the terms and it is a versioned change with a date and an approver, not a quiet edit.",
	},
	{
		title: "Every trade leg recorded",
		body: "Each Tawarruq disbursement stores its commodity purchase, sale and onward sale with timestamps and broker references. Sampling an old file takes seconds.",
	},
	{
		title: "Charity disbursement is tracked",
		body: "Gharamah collected, Gharamah still held, Gharamah paid out and to whom. The one number a committee always asks for, and the one nobody can find.",
	},
	{
		title: "Audit packs on demand",
		body: "A period export with the contracts in force, trades executed, charges split and exceptions raised — assembled by the system, not by your operations team.",
	},
] as const;

export const truesyariahRingfence = {
	shariah: [
		"Own legal entity and licence",
		"Own database and cloud account",
		"Tawarruq-backed disbursement only",
		"Ta'widh income, Gharamah to charity",
		"Reports to the Shariah committee",
	],
	conventional: [
		"Separate KPKT licence and entity",
		"Runs on TrueKredit™, separately",
		"Interest-bearing instruments",
		"Late charges as ordinary income",
		"Reports to the board only",
	],
} as const;

export const truesyariahTerms = [
	{
		name: "Tawarruq",
		arabic: "تورق",
		gloss: "Commodity monetisation",
		body: "A sequence of real commodity sales that puts cash in a customer's hands without a loan bearing interest. The financier buys a commodity, sells it to the customer at a deferred marked-up price, and the customer sells it on for immediate cash.",
		system:
			"Every disbursement triggers a live broker trade. The purchase, sale and onward sale are recorded with timestamps and references, so the transaction can be reconstructed years later.",
	},
	{
		name: "Ta'widh",
		arabic: "تعويض",
		gloss: "Compensation for actual loss",
		body: "A charge that compensates the financier for loss genuinely incurred because a payment was late. Because it corresponds to real loss, it may be recognised as income, subject to the caps your committee sets.",
		system:
			"Calculated against the approved rate and cap, posted to the income ledger, and shown separately on the customer's statement so the two late charges are never confused.",
	},
	{
		name: "Gharamah",
		arabic: "غرامة",
		gloss: "Penalty, not income",
		body: "A penalty intended to deter late payment rather than to compensate for loss. It cannot be recognised as income and must be channelled to charity, which is where most conventional systems quietly get it wrong.",
		system:
			"Held in a segregated ledger that never touches revenue, with collected, held and disbursed balances tracked and a record of which charity received what.",
	},
	{
		name: "Aqad",
		arabic: "عقد",
		gloss: "The contract itself",
		body: "The contract between financier and customer. In Shariah financing its wording, sequence and disclosure are what make the transaction valid — not merely a document to be signed at the end.",
		system:
			"Held as versioned configuration, not as a PDF template. The terms the committee approved are the terms the system executes, and every change carries a date and an approver.",
	},
	{
		name: "Riba",
		arabic: "ربا",
		gloss: "What the structure exists to avoid",
		body: "Interest, or any unjustified increase on a debt. Avoiding it is the reason for the commodity trade, the reason late charges split in two, and the reason the books are ring-fenced.",
		system:
			"There is no interest field. Profit comes from the commodity sale margin, which means the system cannot accidentally be configured to charge interest.",
	},
] as const;

export const truesyariahReceive = [
	{
		title: "Commodity trading",
		body: "Live broker routing for each Tawarruq disbursement, with the trade legs reconciled and stored against the financing record.",
	},
	{
		title: "Identity & signing",
		body: "MyKad e-KYC with liveness and biometric match, and digital signing under the Digital Signature Act with on-premises keys.",
	},
	{
		title: "Customer apps",
		body: "Web and native iOS and Android origination under your own brand, with the Aqad presented in the language your customer reads.",
	},
	{
		title: "Payments & collections",
		body: "FPX and DuitNow disbursement and collection, recurring mandates, and reconciliation that posts to the right ledger automatically.",
	},
	{
		title: "Credit & company data",
		body: "CTOS reports and SSM company lookups held in the customer file, so due diligence is evidenced rather than remembered.",
	},
	{
		title: "Dedicated infrastructure",
		body: "Your own AWS account, database and secrets in Malaysia. Nothing shared with another operator, Shariah or otherwise.",
	},
] as const;
