export interface CaseStudy {
	title: string;
	description: string;
	quote?: string;
	tags: string[];
	href: string;
	logo: string;
	isComingSoon?: boolean;
	stats?: { label: string; value: string }[];
	/** Visual accent on work page grid (e.g. digital KPKT conversions). */
	accent?: "primary" | "kpkt";
}

export const caseStudies: CaseStudy[] = [
	{
		title: "PinjoCep",
		description:
			"Fast personal loans for Malaysian borrowers — built on TrueKredit and TrueIdentity for instant e-KYC, automated approvals, and KPKT-compliant disbursement.",
		quote: "TrueStack got us KPKT-licensed and live in 3 months. The TrueKredit and TrueIdentity stack just works out of the box.",
		tags: ["TrueKredit™", "TrueIdentity™", "E-KYC"],
		href: "https://pinjocep.com.my",
		logo: "/logos/pinjocep-logo.png",
		stats: [
			{ label: "Time to Launch", value: "3 mo" },
			{ label: "Platform", value: "TrueKredit™" },
		],
	},
	{
		title: "Proficient Premium",
		description:
			"Premium money lending operation modernised end-to-end with TrueKredit — borrower onboarding, loan origination, and KPKT reporting on a single platform.",
		quote:
			"Implementation was completely stress-free — TrueStack handled everything end-to-end, from KPKT licensing to a fully live platform in 3 months. We just focused on our borrowers.",
		tags: ["TrueKredit™", "Loan Management", "Reporting"],
		href: "https://ppsb-eloan.com.my",
		logo: "/logos/proficient-premium-logo.png",
		stats: [
			{ label: "Time to Launch", value: "3 mo" },
			{ label: "Platform", value: "TrueKredit™" },
		],
	},
	{
		title: "Andas Capital",
		description:
			"Enterprise lending platform with comprehensive loan management, automated workflows, and regulatory reporting.",
		quote: "The fastest turnaround we've seen. From kickoff to live platform in just 3 months.",
		tags: ["TrueKredit™", "Custom Software", "Enterprise"],
		href: "https://andas.com.my",
		logo: "/logos/Andas.svg",
		stats: [
			{ label: "Time to Launch", value: "3 mo" },
			{ label: "Platform", value: "TrueKredit™" },
		],
	},
	{
		title: "CashSouk",
		description:
			"P2P lending marketplace connecting borrowers with investors. Built for scale with full compliance features.",
		tags: ["TrueP2P™", "SC Licensed", "Marketplace"],
		href: "https://cashsouk.com",
		isComingSoon: true,
		logo: "/logos/cashsouk_logo.png",
		stats: [
			{ label: "Platform", value: "TrueP2P™" },
			{ label: "Regulator", value: "SC Malaysia" },
		],
	},
	{
		title: "CreditXpress",
		description:
			"Transformed from traditional lending to a fully digital, KPKT-licensed nationwide platform with web and mobile apps.",
		quote: "TrueStack transformed our entire operation. We went from paper-based to fully digital in under 6 months.",
		tags: ["TrueKredit™", "Digital License", "Web + Mobile"],
		href: "https://creditxpress.com.my",
		logo: "/logos/creditxpress.svg",
		stats: [
			{ label: "Time to Launch", value: "6 mo" },
			{ label: "Platform", value: "TrueKredit™" },
		],
		accent: "kpkt",
	},
];

/** Work page: digital conversion story first, then remaining homepage stories. */
export const workCaseStudies: CaseStudy[] = [
	...caseStudies.filter((c) => c.title === "CreditXpress"),
	...caseStudies.filter((c) => c.title !== "CreditXpress"),
];
