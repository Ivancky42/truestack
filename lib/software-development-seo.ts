const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const SOFTWARE_DEVELOPMENT_PAGE_PATH = "/services/software-development";
export const SOFTWARE_DEVELOPMENT_PAGE_URL = `${baseUrl}${SOFTWARE_DEVELOPMENT_PAGE_PATH}`;

export const SOFTWARE_DEVELOPMENT_METADATA = {
	title: "Custom Software Development | Web, Mobile & Platforms",
	description:
		"Custom software from brief to go-live — web apps, mobile products, platforms, and internal tools for Malaysian businesses. Book a free consultation.",
	keywords: [
		"custom software development Malaysia",
		"web and mobile app development Malaysia",
		"custom software Malaysia",
		"software development company Malaysia",
		"bespoke software development",
		"product development Malaysia",
		"fintech software development Malaysia",
	],
	openGraphTitle: "Custom Software Development | Truestack",
	openGraphDescription:
		"Custom software from brief to go-live — web apps, mobile products, platforms, and internal tools for Malaysian businesses.",
} as const;

export function buildSoftwareDevelopmentJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${SOFTWARE_DEVELOPMENT_PAGE_URL}#webpage`,
				url: SOFTWARE_DEVELOPMENT_PAGE_URL,
				name: SOFTWARE_DEVELOPMENT_METADATA.openGraphTitle,
				description: SOFTWARE_DEVELOPMENT_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${SOFTWARE_DEVELOPMENT_PAGE_URL}#service` },
			},
			{
				"@type": "Service",
				"@id": `${SOFTWARE_DEVELOPMENT_PAGE_URL}#service`,
				name: "Custom Software Development",
				alternateName: [
					"Bespoke software development Malaysia",
					"Custom fintech software development",
				],
				serviceType: "Custom software design and development",
				url: SOFTWARE_DEVELOPMENT_PAGE_URL,
				description: SOFTWARE_DEVELOPMENT_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType:
						"Malaysian businesses and fintech operators needing custom software",
				},
			},
		],
	};
}
