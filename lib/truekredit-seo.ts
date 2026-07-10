const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUEKREDIT_PAGE_PATH = "/truekredit";
export const TRUEKREDIT_PAGE_URL = `${baseUrl}${TRUEKREDIT_PAGE_PATH}`;

export const TRUEKREDIT_METADATA = {
	title:
		"TrueKredit™ | Money Lender Software & Loan Platform Malaysia",
	description:
		"Money lender software for Malaysia — TrueKredit™ is the KPKT loan management platform for licensed lenders. Branch Standard or nationwide Pro apps.",
	keywords: [
		"TrueKredit",
		"money lender software Malaysia",
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
		"Lampiran B1",
		"iDEAL KPKT",
		"TrueKredit Pro",
		"TrueKredit Standard",
		"KPKT online lending",
		"digital money lender Malaysia",
		"loan book software Malaysia",
	],
	openGraphTitle:
		"TrueKredit™ | Money Lender Software & Loan Platform Malaysia",
	openGraphDescription:
		"KPKT loan management platform for Malaysian money lenders — applications to repayment, compliance docs, e-KYC. Pro adds nationwide apps and digital licence readiness.",
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
					"KPKT loan management system Malaysia",
					"Money lender software Malaysia",
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
					"Lampiran A and iDeaL CSV exports",
					"e-KYC and TrueSSM™ integrations",
					"Secure cloud hosting in Malaysia",
					"Audit trails and KPKT compliance workflows",
					"Pro: customer website, phone apps, digital signing",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
