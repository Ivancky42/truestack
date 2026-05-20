import { truekreditFaq } from "@/lib/truekredit-faq";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUEKREDIT_PAGE_PATH = "/truekredit";
export const TRUEKREDIT_PAGE_URL = `${baseUrl}${TRUEKREDIT_PAGE_PATH}`;

export const TRUEKREDIT_METADATA = {
	title:
		"TrueKredit™ — KPKT Loan Management System | Standard & Pro for Malaysia",
	description:
		"TrueKredit™ is Truestack's loan management system for KPKT-licensed money lenders in Malaysia — borrowers, loans, Lampiran A/B1, iDEAL exports, e-KYC, CTOS, audits, and compliance. TrueKredit Pro adds borrower web/mobile apps and examiner-ready digital lending rails.",
	keywords: [
		"TrueKredit",
		"KPKT loan management system",
		"KPKT PPW software",
		"money lender Malaysia software",
		"loan management system Malaysia",
		"KPKT compliance software",
		"Lampiran A",
		"Lampiran B1",
		"iDEAL KPKT",
		"licensed money lender platform",
		"TrueKredit Pro",
		"KPKT online lending",
		"digital money lender Malaysia",
		"lending platform Malaysia",
	],
	openGraphTitle:
		"TrueKredit™ — KPKT Loan Management System | Standard & Pro",
	openGraphDescription:
		"Purpose-built KPKT loan operations — lifecycle, compliance exports, e-KYC, and TrueKredit Pro for nationwide digital lending with borrower apps and audit-ready infrastructure.",
	ogImagePath: "/truekredit/loan_application_screenshot.png",
	ogImageAlt: "TrueKredit loan management system dashboard",
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
				alternateName: ["TrueKredit Pro", "TrueKredit Standard"],
				url: TRUEKREDIT_PAGE_URL,
				applicationCategory: "BusinessApplication",
				operatingSystem: "Web, iOS, Android",
				description: TRUEKREDIT_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				offers: [
					{
						"@type": "Offer",
						name: "TrueKredit Standard",
						description:
							"Lean SaaS loan management for KPKT PPW and branch-led operations.",
					},
					{
						"@type": "Offer",
						name: "TrueKredit Pro",
						description:
							"Digital KPKT lending stack with borrower web/mobile apps, on-prem signing, and examiner-ready infrastructure.",
					},
				],
				featureList: [
					"Loan lifecycle & Books A/B",
					"Lampiran A and iDEAL CSV exports",
					"e-KYC and CTOS integrations",
					"Malaysia AWS hosting",
					"Audit trails and compliance workflows",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
			{
				"@type": "FAQPage",
				"@id": `${TRUEKREDIT_PAGE_URL}#faq`,
				mainEntity: truekreditFaq.map((item) => ({
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
