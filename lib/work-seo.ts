const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const WORK_PAGE_PATH = "/work";
export const WORK_PAGE_URL = `${baseUrl}${WORK_PAGE_PATH}`;

export const WORK_METADATA = {
	title: "Work | Live Lending & Fintech Platforms in Malaysia",
	description:
		"See live Truestack work in Malaysia — digital KPKT conversions, enterprise loan management, and regulated fintech platforms from licence to go-live.",
	keywords: [
		"Truestack success stories",
		"Truestack work",
		"fintech projects Malaysia",
		"KPKT success stories",
		"KPKT digital license",
		"digital lending software Malaysia",
		"P2P lending platform Malaysia",
	],
	openGraphTitle: "Work | Truestack Success Stories",
	openGraphDescription:
		"Selected work from Truestack — digital KPKT conversions, enterprise lending systems, and regulated fintech platforms delivered end to end.",
} as const;

export function buildWorkJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["WebPage", "CollectionPage"],
				"@id": `${WORK_PAGE_URL}#webpage`,
				url: WORK_PAGE_URL,
				name: WORK_METADATA.openGraphTitle,
				description: WORK_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${WORK_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${WORK_PAGE_URL}#breadcrumb`,
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
						name: "Work",
						item: WORK_PAGE_URL,
					},
				],
			},
		],
	};
}
