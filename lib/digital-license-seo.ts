const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const DIGITAL_LICENSE_PAGE_PATH = "/services/digital-license";
export const DIGITAL_LICENSE_PAGE_URL = `${baseUrl}${DIGITAL_LICENSE_PAGE_PATH}`;

export const DIGITAL_LICENSE_METADATA = {
	title:
		"KPKT Digital Licence | Nationwide Lending on TrueKredit™ Pro — ~3 Months",
	description:
		"Go from a traditional KPKT licence to nationwide digital lending. TrueStack handles licensing, TrueKredit™ Pro, review prep, and go-live — about three months.",
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
		"KPKT Digital Licence | Nationwide on TrueKredit™ Pro",
	openGraphDescription:
		"End-to-end KPKT Online Money Lending Licence — advisory, TrueKredit™ Pro, review prep, and go-live in about three months.",
} as const;

export const digitalLicenseFaq = [
	{
		question: "What is a KPKT digital licence?",
		answer:
			"It is approval for a KPKT-licensed money lender to operate fully online — serving customers nationwide through web and mobile apps, with the controls examiners expect. TrueStack guides the licensing path, documentation, platform build, and KPKT review with your team.",
	},
	{
		question: "How long does it take?",
		answer:
			"Most operators target about three months from kickoff to go-live — provisional licence prep, TrueKredit™ Pro setup, testing, security review, KPKT review, and final approval. Timelines depend on your readiness and KPKT scheduling.",
	},
	{
		question: "What is TrueKredit™ Pro?",
		answer:
			"TrueKredit™ Pro is our lending platform built for KPKT online / digital money lending — branded borrower web and apps, signing under your control, your own secure cloud in Malaysia, and the audit trail examiners look for. It is the platform we deploy for digital licence conversions. Learn more on the TrueKredit page.",
	},
	{
		question: "What does TrueStack handle end-to-end?",
		answer:
			"Licensing strategy and advisory, provisional dossier and KPKT presentation support, TrueKredit™ Pro build (branded web, mobile, signing), testing and security review coordination, KPKT review pack preparation, and support through approval and go-live — so you are not stitching consultants and vendors yourself.",
	},
	{
		question: "Who is this for?",
		answer:
			"Established KPKT money lenders ready to go digital — operators with traditional or PPW footprints who want nationwide reach and a platform auditors can follow. We also support groups planning their first digital lending entity with a clear KPKT pathway.",
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
