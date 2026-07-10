const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const ACCOUNT_MANAGEMENT_PAGE_PATH = "/services/account-management";
export const ACCOUNT_MANAGEMENT_PAGE_URL = `${baseUrl}${ACCOUNT_MANAGEMENT_PAGE_PATH}`;

export const ACCOUNT_MANAGEMENT_METADATA = {
	title: "KPKT Account Management | Licence Renewals & Compliance",
	description:
		"KPKT account management for licensed money lenders in Malaysia — renewals, annual filings, and CoSec/SSM coordination. Up to 50% faster approvals.",
	keywords: [
		"KPKT account management",
		"license renewals Malaysia",
		"money lender compliance",
		"annual submissions KPKT",
		"KPKT compliance services",
		"licensed money lender Malaysia",
	],
	openGraphTitle: "KPKT Account Management | Truestack",
	openGraphDescription:
		"Licence renewals, annual submissions, and regulatory coordination for Malaysian money lenders — up to 50% faster approvals.",
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
					"Money lender licence renewals Malaysia",
				],
				serviceType: "KPKT regulatory account management",
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
