import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const ACCOUNT_MANAGEMENT_PAGE_PATH = "/services/account-management";
export const ACCOUNT_MANAGEMENT_PAGE_URL = `${baseUrl}${ACCOUNT_MANAGEMENT_PAGE_PATH}`;

export const ACCOUNT_MANAGEMENT_METADATA = {
	title: "KPKT Account Management | Licence Renewals & Compliance",
	description:
		"KPKT account management for licensed money lenders in Malaysia — pembaharuan lesen PPW / KK, permit iklan, and annual filings. Up to 50% faster approvals.",
	keywords: [
		"KPKT account management",
		"pembaharuan lesen PPW",
		"pembaharuan lesen KK",
		"permit iklan",
		"license renewals Malaysia",
		"money lender compliance",
		"annual submissions KPKT",
		"KPKT compliance services",
		"licensed money lender Malaysia",
	],
	openGraphTitle: "KPKT Account Management | Pembaharuan Lesen PPW",
	openGraphDescription:
		"KPKT account management — pembaharuan lesen PPW / KK and permit iklan, plus annual B/B1 filings and CoSec/SSM work. Up to 50% faster approvals.",
} as const;

export function buildAccountManagementJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${ACCOUNT_MANAGEMENT_PAGE_URL}#webpage`,
				url: ACCOUNT_MANAGEMENT_PAGE_URL,
				name: ACCOUNT_MANAGEMENT_METADATA.openGraphTitle,
				description: ACCOUNT_MANAGEMENT_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${ACCOUNT_MANAGEMENT_PAGE_URL}#service` },
			},
			{
				"@type": "Service",
				"@id": `${ACCOUNT_MANAGEMENT_PAGE_URL}#service`,
				name: "KPKT Account Management",
				alternateName: [
					"KPKT compliance management",
					"pembaharuan lesen PPW / KK",
					"permit iklan",
					"Money lender licence renewals Malaysia",
				],
				serviceType:
					"KPKT account management — pembaharuan lesen PPW / KK and permit iklan",
				url: ACCOUNT_MANAGEMENT_PAGE_URL,
				description: ACCOUNT_MANAGEMENT_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType: "KPKT-licensed money lenders",
				},
			},
		],
	};
}
