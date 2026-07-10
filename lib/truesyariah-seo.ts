const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUESYARIAH_PAGE_PATH = "/truesyariah";
export const TRUESYARIAH_PAGE_URL = `${baseUrl}${TRUESYARIAH_PAGE_PATH}`;

export const TRUESYARIAH_METADATA = {
	title: "TrueSyariah™ | Shariah Lending Platform Malaysia",
	description:
		"Shariah lending platform for Malaysia — TrueSyariah™ with Tawarruq via Bursa Suq Al-Sila', Ta'widh & Gharamah ledgers, on-prem signing, and dedicated AWS.",
	keywords: [
		"TrueSyariah",
		"Shariah lending platform Malaysia",
		"Shariah digital lending licence Malaysia",
		"Shariah digital lending license Malaysia",
		"Islamic lending software Malaysia",
		"Islamic loan management system Malaysia",
		"Shariah-compliant lending platform Malaysia",
		"Islamic digital lending Malaysia",
		"lesen pinjaman digital syariah",
		"Tawarruq financing platform",
		"Bursa Suq Al-Sila",
		"BSAS Tawarruq integration",
		"Ta'widh Gharamah accounting",
		"Syariah loan management system",
		"Shariah money lender Malaysia software",
		"fintech platform Malaysia Shariah",
		"digital Islamic finance Malaysia",
		"licensed Shariah money lender platform",
	],
	openGraphTitle:
		"TrueSyariah™ | Shariah Lending Platform Malaysia",
	openGraphDescription:
		"Shariah-compliant digital lending platform for Malaysia — Tawarruq via Bursa Suq Al-Sila', Ta'widh & Gharamah ledgers, on-prem signing, e-KYC, and dedicated AWS.",
	ogImagePath: "/truesyariah/hero.png",
	ogImageAlt:
		"TrueSyariah Shariah-compliant digital lending platform — Tawarruq, Ta'widh and Gharamah modules",
} as const;

export function buildTrueSyariahJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${TRUESYARIAH_PAGE_URL}#webpage`,
				url: TRUESYARIAH_PAGE_URL,
				name: TRUESYARIAH_METADATA.openGraphTitle,
				description: TRUESYARIAH_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${TRUESYARIAH_PAGE_URL}#software` },
				breadcrumb: { "@id": `${TRUESYARIAH_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${TRUESYARIAH_PAGE_URL}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: baseUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "TrueSyariah™",
						item: TRUESYARIAH_PAGE_URL,
					},
				],
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${TRUESYARIAH_PAGE_URL}#software`,
				name: "TrueSyariah™",
				alternateName: [
					"TrueSyariah",
					"Shariah Digital Lending Platform",
					"Shariah lending platform Malaysia",
					"Islamic loan management system Malaysia",
					"Shariah Digital Lending Malaysia",
				],
				url: TRUESYARIAH_PAGE_URL,
				applicationCategory: "BusinessApplication",
				applicationSubCategory: "Shariah Digital Lending Platform",
				operatingSystem: "Web, iOS, Android",
				description: TRUESYARIAH_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				offers: {
					"@type": "Offer",
					name: "TrueSyariah Dedicated Deployment",
					description:
						"Dedicated AWS Malaysia deployment for Shariah digital lending — Tawarruq commodity trading via Bursa Suq Al-Sila', Ta'widh / Gharamah segregated ledgers, on-prem PKI signing, e-KYC, web & native mobile origination.",
				},
				featureList: [
					"Tawarruq commodity financing via Bursa Suq Al-Sila'",
					"Segregated Ta'widh and Gharamah late-fee ledgers",
					"Charity disbursement workflow for Gharamah",
					"On-premises Trustgate PKI digital signing",
					"e-KYC with MyKad OCR, liveness and biometric match",
					"Branded web and native iOS & Android customer apps",
					"Dedicated AWS Malaysia account, database and secrets",
					"Shariah digital lending regulatory compliance",
					"Shariah committee audit pack and reporting",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
