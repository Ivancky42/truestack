import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const ABOUT_PAGE_PATH = "/about";
export const ABOUT_PAGE_URL = `${baseUrl}${ABOUT_PAGE_PATH}`;

export const ABOUT_KEYWORDS = [
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
] as const;

export type AboutSchemaCopy = {
	webpageName: string;
	webpageDescription: string;
	inLanguage: string;
	breadcrumbHome: string;
	breadcrumbCurrent: string;
	principlesName: string;
	principlesDescription: string;
	principles: string[];
};

export function buildAboutJsonLd(copy: AboutSchemaCopy) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["WebPage", "AboutPage"],
				"@id": `${ABOUT_PAGE_URL}#webpage`,
				url: ABOUT_PAGE_URL,
				name: copy.webpageName,
				description: copy.webpageDescription,
				inLanguage: copy.inLanguage,
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
						name: copy.breadcrumbHome,
						item: baseUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: copy.breadcrumbCurrent,
						item: ABOUT_PAGE_URL,
					},
				],
			},
			{
				"@type": "ItemList",
				"@id": `${ABOUT_PAGE_URL}#principles`,
				name: copy.principlesName,
				description: copy.principlesDescription,
				itemListElement: copy.principles.map((name, index) => ({
					"@type": "ListItem",
					position: index + 1,
					name,
				})),
			},
		],
	};
}
