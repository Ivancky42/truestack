import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const CONTACT_PAGE_PATH = "/contact";
export const CONTACT_PAGE_URL = `${baseUrl}${CONTACT_PAGE_PATH}`;

export const CONTACT_KEYWORDS = [
	"free consultation Truestack",
	"free KPKT consultation Malaysia",
	"fintech consulting Malaysia",
	"KPKT services inquiry",
	"money lender software quote",
] as const;

export type ContactSchemaCopy = {
	webpageName: string;
	webpageDescription: string;
	inLanguage: string;
	breadcrumbHome: string;
	breadcrumbCurrent: string;
	serviceName: string;
	serviceType: string;
	serviceDescription: string;
	offerName: string;
	offerDescription: string;
};

export function buildContactJsonLd(copy: ContactSchemaCopy) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ContactPage",
				"@id": `${CONTACT_PAGE_URL}#webpage`,
				url: CONTACT_PAGE_URL,
				name: copy.webpageName,
				description: copy.webpageDescription,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${CONTACT_PAGE_URL}#breadcrumb` },
				mainEntity: { "@id": `${CONTACT_PAGE_URL}#consultation` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${CONTACT_PAGE_URL}#breadcrumb`,
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
						item: CONTACT_PAGE_URL,
					},
				],
			},
			{
				"@type": "Service",
				"@id": `${CONTACT_PAGE_URL}#consultation`,
				name: copy.serviceName,
				serviceType: copy.serviceType,
				description: copy.serviceDescription,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				url: CONTACT_PAGE_URL,
				offers: {
					"@type": "Offer",
					name: copy.offerName,
					description: copy.offerDescription,
					price: "0",
					priceCurrency: "MYR",
					availability: "https://schema.org/InStock",
					url: CONTACT_PAGE_URL,
				},
			},
		],
	};
}
