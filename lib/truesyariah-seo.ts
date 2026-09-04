import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const TRUESYARIAH_PAGE_PATH = "/truesyariah";
export const TRUESYARIAH_PAGE_URL = `${baseUrl}${TRUESYARIAH_PAGE_PATH}`;

export const TRUESYARIAH_KEYWORDS = [
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
	"Tawarruq commodity financing",
	"Islamic commodity Murabaha platform",
	"Ta'widh Gharamah accounting",
	"Syariah loan management system",
	"Shariah money lender Malaysia software",
	"fintech platform Malaysia Shariah",
	"digital Islamic finance Malaysia",
	"licensed Shariah money lender platform",
] as const;

export const TRUESYARIAH_OG_IMAGE_PATH = "/truesyariah/hero.png";

export type TrueSyariahSchemaCopy = {
	webpageName: string;
	description: string;
	inLanguage: string;
	breadcrumbHome: string;
	productName: string;
	alternateNames: string[];
	offer: { name: string; description: string };
	featureList: string[];
};

export function buildTrueSyariahJsonLd(copy: TrueSyariahSchemaCopy) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${TRUESYARIAH_PAGE_URL}#webpage`,
				url: TRUESYARIAH_PAGE_URL,
				name: copy.webpageName,
				description: copy.description,
				inLanguage: copy.inLanguage,
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
						name: copy.breadcrumbHome,
						item: baseUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: copy.productName,
						item: TRUESYARIAH_PAGE_URL,
					},
				],
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${TRUESYARIAH_PAGE_URL}#software`,
				name: copy.productName,
				alternateName: copy.alternateNames,
				url: TRUESYARIAH_PAGE_URL,
				applicationCategory: "BusinessApplication",
				applicationSubCategory: "Shariah Digital Lending Platform",
				operatingSystem: "Web, iOS, Android",
				description: copy.description,
				provider: { "@id": `${baseUrl}/#organization` },
				offers: {
					"@type": "Offer",
					name: copy.offer.name,
					description: copy.offer.description,
				},
				featureList: copy.featureList,
				areaServed: { "@type": "Country", name: "Malaysia" },
				isRelatedTo: {
					"@id": `${baseUrl}/services/digital-license#service`,
				},
			},
		],
	};
}
