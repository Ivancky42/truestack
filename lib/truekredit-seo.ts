import { truekreditFaq } from "@/lib/truekredit-faq";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUEKREDIT_PAGE_PATH = "/truekredit";
export const TRUEKREDIT_PAGE_URL = `${baseUrl}${TRUEKREDIT_PAGE_PATH}`;

export const TRUEKREDIT_METADATA = {
	title:
		"TrueKredit™ — KPKT Loan Management System | Standard & Pro for Malaysia",
	description:
		"TrueKredit™ is Truestack's loan management system for KPKT-licensed money lenders in Malaysia. Standard helps your branch team run the full loan book with customer data kept separate on your own secure cloud. TrueKredit Pro adds customer website, mobile apps and digital signing for nationwide lending — your data stays with you.",
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
		"TrueKredit Standard",
		"KPKT online lending",
		"digital money lender Malaysia",
		"lending platform Malaysia",
	],
	openGraphTitle:
		"TrueKredit™ — KPKT Loan Management System | Standard & Pro",
	openGraphDescription:
		"KPKT loan operations for Malaysian money lenders — from application to repayment, compliance documents, e-KYC. TrueKredit Pro adds nationwide customer apps and digital licence readiness.",
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
							"Loan management for KPKT PPW and branch-led operations, with customer data kept separate on your own secure cloud in Malaysia.",
					},
					{
						"@type": "Offer",
						name: "TrueKredit Pro",
						description:
							"Extends Standard with customer website and mobile apps, digital signing, and KPKT Online licence readiness — same system, your data stays.",
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
