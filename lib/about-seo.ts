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
	pageUrl: string;
	homeUrl: string;
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
				"@id": `${copy.pageUrl}#webpage`,
				url: copy.pageUrl,
				name: copy.webpageName,
				description: copy.webpageDescription,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${copy.pageUrl}#breadcrumb` },
				mainEntity: { "@id": `${baseUrl}/#organization` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${copy.pageUrl}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: copy.breadcrumbHome,
						item: copy.homeUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: copy.breadcrumbCurrent,
						item: copy.pageUrl,
					},
				],
			},
			{
				"@type": "ItemList",
				"@id": `${copy.pageUrl}#principles`,
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
