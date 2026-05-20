const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUEIDENTITY_PAGE_PATH = "/trueidentity";
export const TRUEIDENTITY_PAGE_URL = `${baseUrl}${TRUEIDENTITY_PAGE_PATH}`;

export const TRUEIDENTITY_METADATA = {
	title: "TrueIdentity™ — e-KYC & Identity Verification API for Malaysia",
	description:
		"TrueIdentity™ is Truestack's e-KYC API for Malaysian businesses — MyKad OCR, liveness detection, facial biometric matching, fraud checks, PDPA-compliant processing, and Malaysia-hosted infrastructure. Verify customers in minutes via REST API.",
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

export const trueidentityFaq = [
	{
		question: "What is TrueIdentity™?",
		answer:
			"TrueIdentity™ is Truestack's e-KYC and identity verification API for Malaysia. Businesses integrate a single REST endpoint to run MyKad OCR, liveness detection, facial biometric matching, and fraud checks — with PDPA-aligned handling and audit trails.",
	},
	{
		question: "Who uses TrueIdentity™?",
		answer:
			"Banks, licensed money lenders, fintechs, digital platforms, and telcos use TrueIdentity for loan applications, account opening, seller verification, SIM registration, and any workflow that requires fast, compliant identity verification in Malaysia.",
	},
	{
		question: "What verification capabilities are included?",
		answer:
			"TrueIdentity covers MyKad OCR extraction, liveness detection, facial biometric matching, real-time verification results, fraud detection signals, and audit trail logging — designed as one unified API rather than stitching multiple vendors.",
	},
	{
		question: "Is TrueIdentity™ PDPA compliant and hosted in Malaysia?",
		answer:
			"Yes. The platform is built for Malaysian regulatory expectations — PDPA-compliant processing, encryption in transit and at rest, and data residency in Malaysia with bank-grade security practices suitable for regulated financial services.",
	},
	{
		question: "How does TrueIdentity™ integrate with other Truestack products?",
		answer:
			"TrueIdentity is part of Truestack Core™ infrastructure and connects natively to TrueKredit™ loan onboarding, custom fintech builds, and TrueSSM™ KYB workflows — so lending and registry checks can sit in one Truestack stack.",
	},
	{
		question: "How is TrueIdentity™ priced?",
		answer:
			"TrueIdentity uses pay-per-verification pricing that scales with your volume — no large minimum commitments. Contact Truestack for a demo and pricing aligned to your expected verification throughput.",
	},
] as const;

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
			{
				"@type": "FAQPage",
				"@id": `${TRUEIDENTITY_PAGE_URL}#faq`,
				mainEntity: trueidentityFaq.map((item) => ({
					"@type": "Question",
					name: item.question,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.answer,
					},
				})),
			},
		],
	};
}
