import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const TRUESSM_PAGE_PATH = "/truessm";
export const TRUESSM_PAGE_URL = `${baseUrl}${TRUESSM_PAGE_PATH}`;

export const TRUESSM_KEYWORDS = [
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
] as const;

export type TrueSsmSchemaCopy = {
	pageUrl: string;
	homeUrl: string;
	webpageName: string;
	webpageDescription: string;
	inLanguage: string;
	breadcrumbHome: string;
	breadcrumbCurrent: string;
	softwareName: string;
	alternateName: string[];
	softwareDescription: string;
	featureList: string[];
};

export function buildTrueSsmJsonLd(copy: TrueSsmSchemaCopy) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${copy.pageUrl}#webpage`,
				url: copy.pageUrl,
				name: copy.webpageName,
				description: copy.webpageDescription,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${TRUESSM_PAGE_URL}#software` },
				breadcrumb: { "@id": `${copy.pageUrl}#breadcrumb` },
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
				"@type": "SoftwareApplication",
				"@id": `${TRUESSM_PAGE_URL}#software`,
				name: copy.softwareName,
				alternateName: copy.alternateName,
				url: TRUESSM_PAGE_URL,
				applicationCategory: "DeveloperApplication",
				operatingSystem: "Web API",
				description: copy.softwareDescription,
				provider: { "@id": `${baseUrl}/#organization` },
				featureList: copy.featureList,
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
