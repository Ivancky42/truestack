export type CaseStudyProduct = "TrueKredit" | "TrueSyariah" | "CustomSoftware";

export const PRODUCT_LABEL: Record<CaseStudyProduct, string> = {
	TrueKredit: "TrueKredit™",
	TrueSyariah: "TrueSyariah™",
	CustomSoftware: "Custom Software",
};

export interface CaseStudy {
	title: string;
	description: string;
	/** Short line for compact proof cards (homepage, product pages). */
	blurb: string;
	/** Primary product / engagement type — drives service-page filtering. */
	product: CaseStudyProduct;
	tags: string[];
	/** Card / proof link — internal case study (`/work/...`) or live site. */
	href: string;
	/** Live product URL when `href` points at an internal case study. */
	liveUrl?: string;
	/** Internal case-study slug when a long-form write-up exists. */
	slug?: string;
	logo: string;
	isComingSoon?: boolean;
	/** Pin to the top of the work page grid. */
	featured?: boolean;
	stats?: { label: string; value: string }[];
	/** Visual accent on work page grid (e.g. digital KPKT conversions). */
	accent?: "primary" | "kpkt";
}

function productStats(
	product: CaseStudyProduct,
	launch: string,
): { label: string; value: string }[] {
	return [
		{ label: "Product", value: PRODUCT_LABEL[product] },
		{ label: "Launch", value: launch },
	];
}

export const caseStudies: CaseStudy[] = [
	{
		title: "PinjoCep",
		description:
			"Fast personal loans for Malaysian borrowers — built on TrueKredit and TrueIdentity for instant e-KYC, automated approvals, and KPKT-compliant disbursement.",
		blurb:
			"Fast personal loans with instant e-KYC and KPKT-compliant disbursement.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "TrueIdentity™", "E-KYC"],
		href: "https://pinjocep.com.my",
		logo: "/logos/pinjocep-logo.png",
		stats: productStats("TrueKredit", "3 mo"),
	},
	{
		title: "Proficient Premium",
		description:
			"Premium money lending operation modernised end-to-end with TrueKredit — borrower onboarding, loan origination, and KPKT reporting on a single platform.",
		blurb:
			"Premium money lending modernised end-to-end on a single platform.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "Loan Management", "Reporting"],
		href: "https://ppsb-eloan.com.my",
		logo: "/logos/proficient-premium-logo.png",
		stats: productStats("TrueKredit", "3 mo"),
	},
	{
		title: "Andas Capital",
		description:
			"Enterprise lending platform with comprehensive loan management, automated workflows, and regulatory reporting.",
		blurb:
			"Enterprise lending with automated workflows and regulatory reporting.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "Custom Software", "Enterprise"],
		href: "https://andas.com.my",
		logo: "/logos/Andas.svg",
		stats: productStats("TrueKredit", "3 mo"),
	},
	{
		title: "CashSouk",
		description:
			"P2P lending marketplace connecting borrowers with investors. Built for scale with full compliance features.",
		blurb:
			"P2P marketplace connecting borrowers and investors — SC-ready.",
		product: "CustomSoftware",
		tags: ["TrueP2P™", "SC-Aligned", "Marketplace"],
		href: "/work/cashsouk",
		liveUrl: "https://cashsouk.com",
		slug: "cashsouk",
		featured: true,
		logo: "/logos/cashsouk_logo.png",
		stats: productStats("CustomSoftware", "9 mo"),
	},
	{
		title: "CreditXpress",
		description:
			"Transformed from traditional lending to a fully digital, KPKT-licensed nationwide platform with web and mobile apps.",
		blurb:
			"From traditional lending to a nationwide digital KPKT platform.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "Digital License", "Web + Mobile"],
		href: "https://creditxpress.com.my",
		logo: "/logos/creditxpress.png",
		stats: productStats("TrueKredit", "6 mo"),
	},
	{
		title: "ezdana",
		description:
			"Branded digital lending stack for borrower journeys and loan-book operations — onboarding, origination, and day-to-day servicing on TrueKredit Pro.",
		blurb:
			"Loan book and borrower journeys on TrueKredit™ Pro.",
		product: "TrueKredit",
		tags: ["TrueKredit™ Pro", "Loan Management", "Digital Lending"],
		href: "/work/ezdana",
		liveUrl: "https://ezdana.my",
		slug: "ezdana",
		featured: true,
		logo: "/logos/ezdana.png",
		stats: [
			{ label: "Product", value: "TrueKredit™ Pro" },
			{ label: "Launch", value: "3 mo" },
		],
	},
	{
		title: "Fundle",
		description:
			"Digital lending product built for speed and borrower self-serve — modern origination and servicing on TrueKredit for Malaysian borrowers.",
		blurb:
			"Digital lending built for speed and borrower self-serve.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "Self-serve", "Digital Lending"],
		href: "https://fundle.my",
		logo: "/logos/fundle.png",
		stats: productStats("TrueKredit", "3 mo"),
	},
	{
		title: "AI Express",
		description:
			"Digital money lending portal for Malaysian borrowers — fast applications and KPKT-compliant operations on TrueKredit.",
		blurb:
			"Digital money lending portal with fast applications and KPKT ops.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "Digital Lending", "KPKT"],
		href: "https://aiexpress.com.my",
		logo: "/logos/ai-express-logo.svg",
		stats: productStats("TrueKredit", "3 mo"),
	},
	{
		title: "Credibly",
		description:
			"Modern lending operations on a dedicated cloud platform — borrower journeys, loan servicing, and day-to-day ops on TrueKredit.",
		blurb:
			"Modern lending operations on a dedicated cloud platform.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "Loan Management", "Cloud"],
		href: "https://credibly.my",
		logo: "/logos/credibly.png",
		stats: productStats("TrueKredit", "3 mo"),
	},
	{
		title: "JomDana",
		description:
			"Digital money lending for Malaysian borrowers — applications, servicing, and day-to-day loan operations on TrueKredit.",
		blurb:
			"Digital money lending with applications and servicing on TrueKredit.",
		product: "TrueKredit",
		tags: ["TrueKredit™", "Digital Lending", "KPKT"],
		href: "https://jomdana.my",
		logo: "/logos/JomDana.png",
		stats: productStats("TrueKredit", "3 mo"),
	},
	{
		title: "LandStore",
		description:
			"Land marketplace for Malaysia — map exploration, listings, shortlists, and enquiry workflows built as custom software.",
		blurb:
			"Land marketplace with map exploration, listings, and enquiry workflows.",
		product: "CustomSoftware",
		tags: ["Custom Software", "Proptech", "Marketplace"],
		href: "/work/landstore",
		liveUrl: "https://landstore.my",
		slug: "landstore",
		featured: true,
		logo: "/logos/landstore.png",
		stats: productStats("CustomSoftware", "8 mo"),
	},
	{
		title: "EVIE Bikes",
		description:
			"European smart e-bike ecommerce brand selling across the EU — Shopify storefront, product journeys, and brand storytelling built as custom software.",
		blurb:
			"European smart e-bike brand selling in the European Union — Shopify storefront.",
		product: "CustomSoftware",
		tags: ["Custom Software", "E-commerce"],
		href: "/work/eviebikes",
		liveUrl: "https://eviebikes.com",
		slug: "eviebikes",
		featured: true,
		logo: "/logos/EVIE LOGO_FA-08.png",
		stats: [
			{ label: "Engagement", value: "Custom software" },
			{ label: "Platform", value: "Shopify" },
			{ label: "Market", value: "European Union" },
		],
	},
	{
		title: "jompinjam",
		description:
			"Syariah-compliant digital financing for everyday Malaysians — Tawarruq-based products on TrueSyariah, phone-first from apply to disbursement.",
		blurb:
			"Syariah digital financing for everyday Malaysians on TrueSyariah™.",
		product: "TrueSyariah",
		tags: ["TrueSyariah™", "Tawarruq", "Digital Financing"],
		href: "https://www.jompinjam.my/",
		logo: "/logos/jompinjam.png",
		stats: productStats("TrueSyariah", "3 mo"),
	},
	{
		title: "danakini",
		description:
			"Institutional-grade Syariah financing for individuals and enterprises — governed digital facilities on TrueSyariah with clear profit and tenure.",
		blurb:
			"Institutional-grade Syariah financing on TrueSyariah™.",
		product: "TrueSyariah",
		tags: ["TrueSyariah™", "Tawarruq", "Digital Financing"],
		href: "https://www.danakini.my",
		logo: "/logos/danakini.png",
		stats: productStats("TrueSyariah", "3 mo"),
	},
];

const FEATURED_ORDER = [
	"ezdana",
	"landstore",
	"cashsouk",
	"eviebikes",
] as const;

/** Work page: featured case studies first, then remaining stories. */
export const workCaseStudies: CaseStudy[] = (() => {
	const featured = FEATURED_ORDER.map((slug) =>
		caseStudies.find((c) => c.slug === slug),
	).filter((c): c is CaseStudy => Boolean(c));
	const featuredSlugs = new Set<string>(FEATURED_ORDER);
	const rest = caseStudies.filter(
		(c) => !c.slug || !featuredSlugs.has(c.slug),
	);
	return [...featured, ...rest];
})();

export type ProofStudy = Pick<
	CaseStudy,
	"title" | "href" | "logo" | "isComingSoon" | "blurb"
> & {
	logoWidth?: number;
};

function toProofStudy(study: CaseStudy): ProofStudy {
	return {
		title: study.title,
		href: study.href,
		logo: study.logo,
		isComingSoon: study.isComingSoon,
		blurb: study.blurb,
	};
}

const PROOF_LIMIT = 6;

/**
 * Compact proof grids for service / homepage sections.
 * Filters by product when provided; always capped at 6.
 * Uses work-page ordering (featured case studies first).
 */
export function pickProofStudies(options?: {
	product?: CaseStudyProduct;
	limit?: number;
}): ProofStudy[] {
	const limit = options?.limit ?? PROOF_LIMIT;
	const source = options?.product
		? workCaseStudies.filter((c) => c.product === options.product)
		: workCaseStudies;
	return source.slice(0, limit).map(toProofStudy);
}
