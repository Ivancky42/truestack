const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const P2P_PAGE_PATH = "/services/p2p-software-development";
export const P2P_PAGE_URL = `${baseUrl}${P2P_PAGE_PATH}`;

export const P2P_DESCRIPTION =
	"P2P platform development for Malaysia — TrueP2P™ builds SC-aligned peer-to-peer financing software, conventional or Shariah, with optional RMO support.";

export const P2P_METADATA = {
	title:
		"TrueP2P™ | P2P Platform Development Malaysia | SC-Aligned",
	description: P2P_DESCRIPTION,
	keywords: [
		"TrueP2P",
		"P2P platform development Malaysia",
		"P2P software development Malaysia",
		"P2P lending platform Malaysia",
		"peer-to-peer financing platform Malaysia",
		"fintech platform development Malaysia",
		"SC Malaysia P2P platform",
		"Recognised Market Operator P2P",
		"SC RMO registration Malaysia",
		"Shariah-compliant P2P platform Malaysia",
		"Islamic P2P platform development",
		"custom P2P platform Malaysia",
		"invoice financing platform Malaysia",
		"Gharamah Ta'widh accounting",
		"Tawarruq P2P Malaysia",
		"Bursa Suq Al-Sila integration",
		"software development P2P Malaysia",
	],
	openGraphTitle:
		"TrueP2P™ | P2P Platform Development Malaysia",
	openGraphDescription:
		"SC-aligned P2P platform engineering for Malaysia — investor and issuer portals, escrow, Shariah Gharamah & Ta'widh ledgers, and optional RMO registration support.",
	ogImagePath: "/p2p/hero.png",
	ogImageAlt:
		"TrueP2P peer-to-peer financing platform — investor portal, marketplace listings, escrow, e-signing and SC Malaysia compliance modules",
} as const;

const P2P_OFFER_CATALOG = [
	{
		name: "Investor portal",
		description:
			"Branded web and mobile experiences for investor sign-up, suitability, deposits, allocations and statements.",
	},
	{
		name: "Issuer portal",
		description:
			"Self-serve onboarding, document upload, listing applications and live funding visibility for SMEs and originators.",
	},
	{
		name: "Listings & matching engine",
		description:
			"Configurable note types, Shariah-screened asset onboarding, funding caps, allocation rules, and per-investor concentration limits.",
	},
	{
		name: "Escrow & payments",
		description:
			"Trust account integration, FPX and DuitNow rails, automated disbursement and repayment reconciliation.",
	},
	{
		name: "e-KYC & accreditation",
		description:
			"MyKad, liveness, AML/CFT screening and tiered investor accreditation built into onboarding.",
	},
	{
		name: "e-Signing & contracts",
		description:
			"On-platform agreement generation, e-signing and a tamper-evident document vault.",
	},
	{
		name: "Operations & reporting",
		description:
			"Admin console plus exports tuned for SC submissions, audits, and Shariah committee reviews.",
	},
	{
		name: "Tawarruq disbursement via Bursa Suq Al-Sila'",
		description:
			"Shariah-compliant Tawarruq (commodity Murabaha) disbursement orchestrated on Bursa Malaysia's Shariah commodity trading platform.",
	},
	{
		name: "Shariah-aligned accounting (Gharamah & Ta'widh)",
		description:
			"Segregated Gharamah and Ta'widh ledgers with charity disbursement workflows for Islamic P2P platforms.",
	},
	{
		name: "SC Malaysia RMO registration preparation",
		description:
			"Consultancy alongside TrueP2P™ engineering for Recognised Market Operator approval with the Securities Commission Malaysia.",
	},
] as const;

export function buildP2PJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${P2P_PAGE_URL}#webpage`,
				url: P2P_PAGE_URL,
				name: P2P_METADATA.openGraphTitle,
				description: P2P_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${P2P_PAGE_URL}#service` },
			},
			{
				"@type": "Service",
				"@id": `${P2P_PAGE_URL}#service`,
				name: "TrueP2P™",
				alternateName: [
					"P2P Software Development Malaysia",
					"P2P Lending Platform Development Malaysia",
					"P2P platform development Malaysia",
					"Shariah-Aligned P2P Platform Development",
					"Peer-to-peer financing software Malaysia",
				],
				serviceType:
					"Custom P2P platform engineering and software development for Malaysia — conventional and Shariah-aligned",
				url: P2P_PAGE_URL,
				description: P2P_DESCRIPTION,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType:
						"Recognised Market Operators, Islamic finance operators, and fintech founders building P2P platforms in Malaysia",
				},
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "TrueP2P™ platform modules",
					itemListElement: P2P_OFFER_CATALOG.map((offer) => ({
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: offer.name,
							description: offer.description,
						},
					})),
				},
			},
		],
	};
}
