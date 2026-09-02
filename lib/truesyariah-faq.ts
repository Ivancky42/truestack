export const truesyariahFaq = [
	{
		question: "What licence do I actually need?",
		answer:
			"Shariah-based money lending in Malaysia has its own approval pathway and, in practice, requires a separate legal entity from any conventional digital lending licence holder. You will also need a Shariah committee or advisor appointed and your financing contracts approved before you lend. Truestack scopes the Shariah digital lending application alongside your existing group if you already hold a conventional licence.",
	},
	{
		question: "Can I run Shariah and conventional lending in one company?",
		answer:
			"No. The two licences cannot sit in the same operating company. The Shariah entity must keep its books, Ta'widh and Gharamah accounts, committee oversight and complaint handling fully ring-fenced from any riba-based lending, on separate infrastructure. We set both up if you are running the two side by side — TrueSyariah™ on one entity, TrueKredit™ on the other.",
	},
	{
		question: "Do you provide the Shariah advisor?",
		answer:
			"Not as an authority — we do not issue fatwa, and the appointment is yours. We can introduce partner Shariah advisors we have worked with before, which usually makes the process smoother because they already know how the platform evidences their rulings. The contracts and caps in TrueSyariah always follow what your appointed advisor has approved in writing.",
	},
	{
		question: "Is there a cheaper shared version of TrueSyariah?",
		answer:
			"There is not, deliberately. A Shariah book cannot share infrastructure with conventional lending, so every TrueSyariah deployment is dedicated: an isolated AWS Malaysia account, its own database, its own secrets vault, and on-premises PKI signing. Separation is the architecture, not a filter on a query.",
	},
	{
		question: "How is TrueSyariah different from TrueKredit?",
		answer:
			"TrueKredit™ is the conventional loan management system for KPKT-licensed money lenders. TrueSyariah shares the same lifecycle, compliance core and dedicated deployment, but the financing engine is rebuilt around Shariah contracts: commodity trades instead of loans, two segregated late-charge ledgers, and documents shaped for a Shariah committee rather than a conventional audit. If you hold a conventional money-lending licence, you want TrueKredit. If you are licensed — or applying — for Shariah digital lending, you want TrueSyariah.",
	},
	{
		question: "How does Tawarruq work inside TrueSyariah?",
		answer:
			"Tawarruq is a sequence of real commodity sales that delivers financing proceeds without interest. Every disbursement books a commodity transaction through TrueCommodity™: financier purchase, sale to the customer at deferred profit, and the customer's onward sale to a broker. Each leg is time-stamped in a tamper-evident log. The customer receives clean MYR proceeds; the operator books a deferred receivable at the agreed profit rate.",
	},
	{
		question: "What is the difference between Ta'widh and Gharamah?",
		answer:
			"Ta'widh (تعويض) is the portion of a late charge representing the operator's actual, evidenced cost of recovery, and may be retained within Shariah-approved caps. Gharamah (غرامة) is the residual penalty above that cost; it is posted to a separate ledger and disbursed to approved charities on a documented, committee-signed schedule. TrueSyariah splits every late payment at the journal level so the two never combine.",
	},
	{
		question: "How do customers apply for financing?",
		answer:
			"TrueSyariah includes three origination channels: a counter flow for branch officers, a branded web portal on your own domain, and native iOS and Android apps published under your brand. Customers complete e-KYC (MyKad OCR and liveness), accept the Tawarruq commodity sale, sign the Aqad digitally, and track repayments, profit and Ta'widh / Gharamah disclosures from any device.",
	},
	{
		question: "Which integrations come with TrueSyariah?",
		answer:
			"Out of the box: TrueCommodity™ for Tawarruq trades, TrueIdentity™ for MyKad e-KYC, MSC Trustgate for on-premises PKI signing, CTOS for credit reports, TrueSSM™ for SSM company lookups, and FPX and DuitNow for disbursement and collection. They roll into a single Truestack contract, so your Shariah operating company is not managing five vendors in parallel.",
	},
] as const;
