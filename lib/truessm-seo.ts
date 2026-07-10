const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUESSM_PAGE_PATH = "/truessm";
export const TRUESSM_PAGE_URL = `${baseUrl}${TRUESSM_PAGE_PATH}`;

export const TRUESSM_METADATA = {
	title: "TrueSSM™ — Malaysian SSM Registry API | ROC, ROB, LLP & Documents",
	description:
		"TrueSSM™ SSM registry API for Malaysia — entity search, ROC/ROB/LLP profiles, officers, shareholders, and scanned documents with RM pricing.",
	keywords: [
		"TrueSSM",
		"SSM API Malaysia",
		"Malaysian company registry API",
		"ROC company profile API",
		"ROB business profile API",
		"LLP profile API",
		"SSM company search API",
		"KYB Malaysia API",
		"company officers API Malaysia",
		"SSM scanned documents API",
		"Infomina SSM integration",
		"Truestack SSM API",
		"entity verification Malaysia",
	],
	openGraphTitle:
		"TrueSSM™ — Malaysian SSM Registry API | ROC, ROB, LLP & Documents",
	openGraphDescription:
		"Programmatic SSM access for fintechs and lenders — entity search, profiles, particulars, scanned filings, RM billing, and idempotent REST pulls.",
} as const;

export function buildTrueSsmJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${TRUESSM_PAGE_URL}#webpage`,
				url: TRUESSM_PAGE_URL,
				name: TRUESSM_METADATA.openGraphTitle,
				description: TRUESSM_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${TRUESSM_PAGE_URL}#software` },
				breadcrumb: { "@id": `${TRUESSM_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${TRUESSM_PAGE_URL}#breadcrumb`,
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
						name: "TrueSSM™",
						item: TRUESSM_PAGE_URL,
					},
				],
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${TRUESSM_PAGE_URL}#software`,
				name: "TrueSSM™",
				alternateName: [
					"TrueSSM Registry API",
					"Truestack SSM API",
					"Malaysian registry API",
				],
				url: TRUESSM_PAGE_URL,
				applicationCategory: "DeveloperApplication",
				operatingSystem: "Web API",
				description: TRUESSM_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				featureList: [
					"Free entity search validation",
					"ROC company profiles",
					"ROB business profiles",
					"LLP profiles",
					"Officers and shareholders",
					"Scanned SSM documents",
					"Idempotent REST pulls",
					"RM-transparent pricing",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
