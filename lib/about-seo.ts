import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const ABOUT_PAGE_PATH = "/about";
export const ABOUT_PAGE_URL = `${baseUrl}${ABOUT_PAGE_PATH}`;

export const ABOUT_METADATA = {
	title: "About Truestack | Lending Platforms & KPKT Malaysia",
	description:
		"Truestack builds lending platforms and KPKT compliance for Malaysian lenders. Founded 2025 in KL. 11 lenders live, over RM 200 million disbursed a year.",
	keywords: [
		"Truestack",
		"about Truestack",
		"Truestack Technologies Sdn Bhd",
		"fintech software Malaysia",
		"lending technology Malaysia",
		"TrueKredit",
		"TrueSyariah",
		"TrueP2P",
		"KPKT digital licence",
		"KPKT fintech Malaysia",
		"licensed money lender software",
		"loan management system Malaysia",
		"KL Trillion",
		"Kuala Lumpur fintech",
	],
	openGraphTitle:
		"About Truestack | Lending Platforms & KPKT Malaysia",
	openGraphDescription:
		"Meet Truestack — founded 2025 in Kuala Lumpur. Lending platforms and KPKT compliance under one contract. 11 lenders live, over RM 200 million disbursed a year.",
} as const;

export function buildAboutJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["WebPage", "AboutPage"],
				"@id": `${ABOUT_PAGE_URL}#webpage`,
				url: ABOUT_PAGE_URL,
				name: ABOUT_METADATA.openGraphTitle,
				description: ABOUT_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${ABOUT_PAGE_URL}#breadcrumb` },
				mainEntity: { "@id": `${baseUrl}/#organization` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${ABOUT_PAGE_URL}#breadcrumb`,
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
						name: "About",
						item: ABOUT_PAGE_URL,
					},
				],
			},
			{
				"@type": "ItemList",
				"@id": `${ABOUT_PAGE_URL}#principles`,
				name: "Truestack operating principles",
				description:
					"Four things Truestack does not compromise on when building lending platforms and handling KPKT compliance.",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Compliance is a design constraint, not a feature",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Your loan book is yours",
					},
					{
						"@type": "ListItem",
						position: 3,
						name: "One team, or it is not accountable",
					},
					{
						"@type": "ListItem",
						position: 4,
						name: "Go-live is the beginning",
					},
				],
			},
		],
	};
}
