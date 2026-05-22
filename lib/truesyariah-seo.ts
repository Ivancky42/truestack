import { truesyariahFaq } from "@/lib/truesyariah-faq";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUESYARIAH_PAGE_PATH = "/truesyariah";
export const TRUESYARIAH_PAGE_URL = `${baseUrl}${TRUESYARIAH_PAGE_PATH}`;

export const TRUESYARIAH_METADATA = {
	title:
		"TrueSyariah™ — KPKT Syariah Digital Lending Platform | Tawarruq, Ta'widh & Gharamah for Malaysia",
	description:
		"TrueSyariah™ is Truestack's Shariah-compliant digital financing platform for the KPKT Syariah Digital Lending Licence in Malaysia — Tawarruq commodity trades via Bursa Suq Al-Sila', segregated Ta'widh and Gharamah ledgers, on-prem digital signing, e-KYC, native mobile apps, and a dedicated AWS deployment ring-fenced from conventional lending.",
	keywords: [
		"TrueSyariah",
		"KPKT Syariah digital lending licence",
		"KPKT Syariah digital lending license",
		"KPKT Shariah digital lending Malaysia",
		"lesen pinjaman digital syariah KPKT",
		"Shariah-compliant lending platform Malaysia",
		"Islamic digital lending Malaysia",
		"Tawarruq financing platform",
		"Bursa Suq Al-Sila",
		"BSAS Tawarruq integration",
		"Ta'widh Gharamah accounting",
		"Tawidh Gharamah ledger",
		"Islamic loan management system Malaysia",
		"Syariah loan management system",
		"Shariah money lender Malaysia software",
		"KPKT Akta Pemberi Pinjam Wang Syariah",
		"on-prem digital signing Trustgate Syariah",
		"PKI digital signing Malaysia Islamic finance",
		"e-KYC Shariah lender Malaysia",
		"Islamic fintech platform Malaysia",
		"digital Islamic finance Malaysia",
		"licensed Shariah money lender platform",
		"riba-free digital lending Malaysia",
	],
	openGraphTitle:
		"TrueSyariah™ — KPKT Syariah Digital Lending Platform for Malaysia",
	openGraphDescription:
		"Shariah-compliant digital lending stack — Tawarruq via Bursa Suq Al-Sila', segregated Ta'widh & Gharamah ledgers, on-prem signing, e-KYC, mobile apps, and a dedicated AWS deployment for the KPKT Syariah Digital Lending Licence.",
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
					"KPKT Syariah Digital Lending Platform",
					"Shariah Digital Lending Malaysia",
				],
				url: TRUESYARIAH_PAGE_URL,
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web, iOS, Android",
				description: TRUESYARIAH_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				offers: {
					"@type": "Offer",
					name: "TrueSyariah Dedicated Deployment",
					description:
						"Dedicated AWS Malaysia deployment for the KPKT Syariah Digital Lending Licence — Tawarruq commodity trading via Bursa Suq Al-Sila', Ta'widh / Gharamah segregated ledgers, on-prem PKI signing, e-KYC, web & native mobile origination.",
				},
				featureList: [
					"Tawarruq commodity financing via Bursa Suq Al-Sila'",
					"Segregated Ta'widh and Gharamah late-fee ledgers",
					"Charity disbursement workflow for Gharamah",
					"On-premises Trustgate PKI digital signing",
					"e-KYC with MyKad OCR, liveness and biometric match",
					"Branded web and native iOS & Android customer apps",
					"Dedicated AWS Malaysia account, database and secrets",
					"KPKT Syariah Digital Lending Licence-aligned compliance",
					"Shariah committee audit pack and reporting",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
			{
				"@type": "FAQPage",
				"@id": `${TRUESYARIAH_PAGE_URL}#faq`,
				mainEntity: truesyariahFaq.map((item) => ({
					"@type": "Question",
					name: item.question,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.answer,
					},
				})),
			},
		],
	};
}
