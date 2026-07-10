const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUEIDENTITY_PAGE_PATH = "/trueidentity";
export const TRUEIDENTITY_PAGE_URL = `${baseUrl}${TRUEIDENTITY_PAGE_PATH}`;

export const TRUEIDENTITY_METADATA = {
	title: "TrueIdentity™ — e-KYC & Identity Verification API for Malaysia",
	description:
		"TrueIdentity™ e-KYC API for Malaysia — MyKad OCR, liveness, biometrics, PDPA-aligned processing, and Malaysia-hosted infrastructure for lenders.",
	keywords: [
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
	],
	openGraphTitle:
		"TrueIdentity™ — e-KYC & Identity Verification API for Malaysia",
	openGraphDescription:
		"Programmatic e-KYC for Malaysian fintechs and lenders — MyKad OCR, liveness, biometrics, audit trails, and data residency in Malaysia.",
} as const;

export function buildTrueIdentityJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${TRUEIDENTITY_PAGE_URL}#webpage`,
				url: TRUEIDENTITY_PAGE_URL,
				name: TRUEIDENTITY_METADATA.openGraphTitle,
				description: TRUEIDENTITY_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${TRUEIDENTITY_PAGE_URL}#software` },
				breadcrumb: { "@id": `${TRUEIDENTITY_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${TRUEIDENTITY_PAGE_URL}#breadcrumb`,
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
						name: "TrueIdentity™",
						item: TRUEIDENTITY_PAGE_URL,
					},
				],
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${TRUEIDENTITY_PAGE_URL}#software`,
				name: "TrueIdentity™",
				alternateName: ["TrueIdentity e-KYC", "Truestack e-KYC API"],
				url: TRUEIDENTITY_PAGE_URL,
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web API",
				description: TRUEIDENTITY_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				featureList: [
					"MyKad OCR extraction",
					"Liveness detection",
					"Facial biometric matching",
					"Fraud detection",
					"Audit trail logging",
					"PDPA-aligned processing",
					"Malaysia data residency",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
