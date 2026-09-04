import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const TRUEIDENTITY_PAGE_PATH = "/trueidentity";
export const TRUEIDENTITY_PAGE_URL = `${baseUrl}${TRUEIDENTITY_PAGE_PATH}`;

export const TRUEIDENTITY_KEYWORDS = [
	"TrueIdentity",
	"e-KYC Malaysia",
	"KYC API Malaysia",
	"MyKad OCR",
	"liveness detection Malaysia",
	"biometric verification Malaysia",
	"identity verification API",
	"PDPA compliant KYC",
	"fintech KYC Malaysia",
	"loan onboarding KYC",
	"facial recognition KYC",
	"Truestack e-KYC",
] as const;

export type TrueIdentitySchemaCopy = {
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

export function buildTrueIdentityJsonLd(copy: TrueIdentitySchemaCopy) {
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
				about: { "@id": `${TRUEIDENTITY_PAGE_URL}#software` },
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
				"@id": `${TRUEIDENTITY_PAGE_URL}#software`,
				name: copy.softwareName,
				alternateName: copy.alternateName,
				url: TRUEIDENTITY_PAGE_URL,
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web API",
				description: copy.softwareDescription,
				provider: { "@id": `${baseUrl}/#organization` },
				featureList: copy.featureList,
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
