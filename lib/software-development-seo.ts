import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const SOFTWARE_DEVELOPMENT_PAGE_PATH = "/services/software-development";
export const SOFTWARE_DEVELOPMENT_PAGE_URL = `${baseUrl}${SOFTWARE_DEVELOPMENT_PAGE_PATH}`;

export const SOFTWARE_DEVELOPMENT_KEYWORDS = [
	"custom software development Malaysia",
	"web and mobile app development Malaysia",
	"custom software Malaysia",
	"software development company Malaysia",
	"bespoke software development",
	"product development Malaysia",
	"fintech software development Malaysia",
] as const;

export type SoftwareDevelopmentSchemaCopy = {
	pageUrl: string;
	homeUrl: string;
	webpageName: string;
	description: string;
	inLanguage: string;
	serviceName: string;
	alternateName: string[];
	serviceType: string;
	audienceType: string;
};

export function buildSoftwareDevelopmentJsonLd(
	copy: SoftwareDevelopmentSchemaCopy,
) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${copy.pageUrl}#webpage`,
				url: copy.pageUrl,
				name: copy.webpageName,
				description: copy.description,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${SOFTWARE_DEVELOPMENT_PAGE_URL}#service` },
			},
			{
				"@type": "Service",
				"@id": `${SOFTWARE_DEVELOPMENT_PAGE_URL}#service`,
				name: copy.serviceName,
				alternateName: copy.alternateName,
				serviceType: copy.serviceType,
				url: SOFTWARE_DEVELOPMENT_PAGE_URL,
				description: copy.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType: copy.audienceType,
				},
			},
		],
	};
}
