import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const TRUEKREDIT_PAGE_PATH = "/truekredit";
export const TRUEKREDIT_PAGE_URL = `${baseUrl}${TRUEKREDIT_PAGE_PATH}`;

export const TRUEKREDIT_METADATA = {
	title: "TrueKredit™ | Money Lending Management System",
	description:
		"Money lending management system for KPKT-licensed money lenders. Borrowers, schedules, Lampiran A/B/B1, Jadual J & K and iDEAL KPKT paperwork in one platform.",
	keywords: [
		"TrueKredit",
		"money lending management system",
		"money lender software Malaysia",
		"loan management for KPKT-licensed money lenders",
		"loan management system Malaysia",
		"lending platform Malaysia",
		"KPKT loan management system",
		"KPKT software Malaysia",
		"KPKT PPW software",
		"licensed money lender platform",
		"digital lending platform Malaysia",
		"fintech lending software Malaysia",
		"money lender Malaysia software",
		"KPKT compliance software",
		"Lampiran A",
		"Lampiran B",
		"Lampiran B1",
		"iDEAL KPKT",
		"sistem iDEAL",
		"Jadual J",
		"Jadual K",
		"Schedule J",
		"Schedule K",
		"TrueKredit Pro",
		"TrueKredit Standard",
		"KPKT online lending",
		"digital money lender Malaysia",
		"loan book software Malaysia",
	],
	openGraphTitle: "TrueKredit™ | Money Lender Software Malaysia",
	openGraphDescription:
		"Money lender software Malaysia / money lending management system. iDEAL KPKT (sistem iDEAL), Lampiran A, B, B1, Jadual J & K (Schedule J & K).",
	ogImagePath: "/truekredit/hero.png",
	ogImageAlt:
		"TrueKredit KPKT-aligned loan management platform — applications, signing, dashboards and compliance modules",
} as const;

export function buildTrueKreditJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${TRUEKREDIT_PAGE_URL}#webpage`,
				url: TRUEKREDIT_PAGE_URL,
				name: TRUEKREDIT_METADATA.openGraphTitle,
				description: TRUEKREDIT_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${TRUEKREDIT_PAGE_URL}#software` },
				breadcrumb: { "@id": `${TRUEKREDIT_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${TRUEKREDIT_PAGE_URL}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: baseUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "TrueKredit™",
						item: TRUEKREDIT_PAGE_URL,
					},
				],
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${TRUEKREDIT_PAGE_URL}#software`,
				name: "TrueKredit™",
				alternateName: [
					"TrueKredit Pro",
					"TrueKredit Standard",
					"Money lending management system",
					"Money lender software Malaysia",
					"KPKT loan management system Malaysia",
					"sistem iDEAL",
					"Digital lending platform Malaysia",
				],
				url: TRUEKREDIT_PAGE_URL,
				applicationCategory: "BusinessApplication",
				applicationSubCategory: "Loan Management System",
				operatingSystem: "Web, iOS, Android",
				description: TRUEKREDIT_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				offers: [
					{
						"@type": "Offer",
						name: "TrueKredit Standard",
						description:
							"Loan management software for KPKT PPW and branch-led money lenders in Malaysia, with customer data on your own secure cloud.",
					},
					{
						"@type": "Offer",
						name: "TrueKredit Pro",
						description:
							"Nationwide digital lending platform for Malaysia — customer website, mobile apps, digital signing, and KPKT Online licence readiness.",
					},
				],
				featureList: [
					"Loan journey from application to repayment",
					"Refinance, top-up and reschedule on the same loan file",
					"Lampiran A, B1 and iDEAL KPKT (sistem iDEAL) exports",
					"Jadual J & Jadual K (Schedule J & K) loan agreements",
					"e-KYC and TrueSSM™ integrations",
					"Secure cloud hosting in Malaysia",
					"Audit trails and KPKT compliance workflows",
					"Loan workflow options configured to how your office already works",
					"Pro: customer website, phone apps, digital signing",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
