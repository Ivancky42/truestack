const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const DIGITAL_LICENSE_PAGE_PATH = "/services/digital-license";
export const DIGITAL_LICENSE_PAGE_URL = `${baseUrl}${DIGITAL_LICENSE_PAGE_PATH}`;

export const DIGITAL_LICENSE_METADATA = {
	title:
		"Digital KPKT License Conversion | End-to-End on TrueKredit™ Pro — ~3 Months",
	description:
		"Truestack runs your full KPKT digital lending licence journey — licensing strategy, provisional licence prep, TrueKredit™ Pro on AWS Malaysia, UAT, pen-test, KPKT review, and approval. Go from PPW to nationwide digital money lending in about three months.",
	keywords: [
		"digital KPKT license",
		"KPKT digital license conversion",
		"KPKT digital lending license",
		"KPKT license consultancy Malaysia",
		"TrueKredit Pro",
		"digital money lender Malaysia",
		"online lending platform Malaysia",
		"KPKT PPW to digital",
		"fully digital money lender",
		"KPKT provisional licence",
		"nationwide money lending Malaysia",
	],
	openGraphTitle:
		"Digital KPKT License Conversion | End-to-End on TrueKredit™ Pro",
	openGraphDescription:
		"Full-service digital KPKT licence — consultancy, TrueKredit™ Pro build on dedicated AWS Malaysia, borrower web and mobile apps, KPKT review prep, and approval in ~3 months.",
} as const;

export const digitalLicenseFaq = [
	{
		question: "What is KPKT digital license conversion?",
		answer:
			"Digital license conversion is the process for a KPKT-licensed money lender (often PPW / offline) to obtain approval to operate as a fully digital lender — serving customers nationwide via web and mobile apps with examiner-ready controls. Truestack guides the licensing strategy, documentation, platform build, and KPKT review alongside your team.",
	},
	{
		question: "How long does the digital KPKT licence process take?",
		answer:
			"With Truestack's end-to-end programme, most operators target go-live in about three months from kickoff — covering provisional licence preparation, TrueKredit™ Pro deployment on AWS Malaysia, UAT, independent penetration testing, KPKT review, and final approval. Timelines depend on your readiness and KPKT scheduling.",
	},
	{
		question: "What is TrueKredit™ Pro and why is it used for digital licensing?",
		answer:
			"TrueKredit™ Pro is our edition built for KPKT online / digital money lending — borrower web and native apps, marketing sites, on-prem Trustgate digital signing, dedicated AWS tenancy, examiner-ready dossiers, and the separation auditors expect between digital and branch-led flows. It is the platform we deploy for digital licence conversions.",
	},
	{
		question: "What does Truestack handle end-to-end?",
		answer:
			"We cover licensing strategy and advisory, provisional licence dossier and KPKT presentation support, TrueKredit™ Pro build (branded web, mobile, signing, integrations), UAT and third-party pen-test coordination, KPKT review pack preparation, and support through approval and go-live — so you are not stitching consultants, vendors, and engineers separately.",
	},
	{
		question: "Who is the digital KPKT licence service for?",
		answer:
			"Established KPKT money lenders ready to go digital — operators with PPW or traditional footprints who want nationwide reach, compliant borrower self-serve, and a production platform auditors can follow. We also support groups planning their first digital lending entity with a clear KPKT pathway.",
	},
] as const;

export function buildDigitalLicenseJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${DIGITAL_LICENSE_PAGE_URL}#webpage`,
				url: DIGITAL_LICENSE_PAGE_URL,
				name: DIGITAL_LICENSE_METADATA.openGraphTitle,
				description: DIGITAL_LICENSE_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${DIGITAL_LICENSE_PAGE_URL}#service` },
				breadcrumb: { "@id": `${DIGITAL_LICENSE_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${DIGITAL_LICENSE_PAGE_URL}#breadcrumb`,
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
						name: "Services",
						item: `${baseUrl}/services`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: "Digital KPKT License",
						item: DIGITAL_LICENSE_PAGE_URL,
					},
				],
			},
			{
				"@type": "Service",
				"@id": `${DIGITAL_LICENSE_PAGE_URL}#service`,
				name: "Digital KPKT License Conversion",
				alternateName: [
					"KPKT Digital License Conversion",
					"KPKT Digital Lending Licence",
				],
				serviceType: "KPKT digital money lending licence conversion",
				url: DIGITAL_LICENSE_PAGE_URL,
				description: DIGITAL_LICENSE_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType: "KPKT-licensed money lenders",
				},
			},
			{
				"@type": "FAQPage",
				"@id": `${DIGITAL_LICENSE_PAGE_URL}#faq`,
				mainEntity: digitalLicenseFaq.map((item) => ({
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
