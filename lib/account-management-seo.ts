import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const ACCOUNT_MANAGEMENT_PAGE_PATH = "/services/account-management";
export const ACCOUNT_MANAGEMENT_PAGE_URL = `${baseUrl}${ACCOUNT_MANAGEMENT_PAGE_PATH}`;

export const ACCOUNT_MANAGEMENT_KEYWORDS = [
	"KPKT account management",
	"pembaharuan lesen PPW",
	"pembaharuan lesen KK",
	"permit iklan",
	"license renewals Malaysia",
	"money lender compliance",
	"annual submissions KPKT",
	"KPKT compliance services",
	"licensed money lender Malaysia",
] as const;

export type AccountManagementSchemaCopy = {
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

export function buildAccountManagementJsonLd(copy: AccountManagementSchemaCopy) {
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
				about: { "@id": `${ACCOUNT_MANAGEMENT_PAGE_URL}#service` },
			},
			{
				"@type": "Service",
				"@id": `${ACCOUNT_MANAGEMENT_PAGE_URL}#service`,
				name: copy.serviceName,
				alternateName: copy.alternateName,
				serviceType: copy.serviceType,
				url: ACCOUNT_MANAGEMENT_PAGE_URL,
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
