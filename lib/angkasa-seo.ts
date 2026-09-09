import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const ANGKASA_PAGE_PATH = "/services/angkasa-pba";
export const ANGKASA_PAGE_URL = `${baseUrl}${ANGKASA_PAGE_PATH}`;
export const ANGKASA_CONTACT_HREF = "/contact?subject=ANGKASA%20PBA%20Code";

export const ANGKASA_KEYWORDS = [
	"ANGKASA PBA code",
	"kod PBA ANGKASA",
	"Biro Perkhidmatan Angkasa",
	"Angkatan Koperasi Kebangsaan Malaysia Berhad",
	"salary deduction Malaysia",
	"potongan gaji ANGKASA",
	"payroll deduction Malaysia",
	"public sector salary deduction",
	"ANGKASA advisory",
	"PBA code application",
] as const;

export type AngkasaSchemaCopy = {
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

export function buildAngkasaJsonLd(copy: AngkasaSchemaCopy) {
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
				about: { "@id": `${ANGKASA_PAGE_URL}#service` },
				breadcrumb: { "@id": `${copy.pageUrl}#breadcrumb` },
			},
			{
				"@type": "Service",
				"@id": `${ANGKASA_PAGE_URL}#service`,
				name: copy.serviceName,
				alternateName: copy.alternateName,
				serviceType: copy.serviceType,
				url: ANGKASA_PAGE_URL,
				description: copy.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType: copy.audienceType,
				},
				isRelatedTo: [
					{ "@id": `${baseUrl}/services/digital-license#service` },
					{ "@id": `${baseUrl}/services/account-management#service` },
				],
			},
		],
	};
}
