const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const TRUESSM_PAGE_PATH = "/truessm";
export const TRUESSM_PAGE_URL = `${baseUrl}${TRUESSM_PAGE_PATH}`;

export const TRUESSM_METADATA = {
	title: "TrueSSM™ — Malaysian SSM Registry API | ROC, ROB, LLP & Documents",
	description:
		"TrueSSM™ is Truestack's REST API for Malaysian SSM registry data — free entity search, ROC/ROB/LLP profiles, officers, shareholders, charges, and scanned documents. Transparent RM pricing, idempotent pulls, built for lenders and KYB automation.",
	keywords: [
		"TrueSSM",
		"SSM API Malaysia",
		"Malaysian company registry API",
		"ROC company profile API",
		"ROB business profile API",
		"LLP profile API",
		"SSM company search API",
		"KYB Malaysia API",
		"company officers API Malaysia",
		"SSM scanned documents API",
		"Infomina SSM integration",
		"Truestack SSM API",
		"entity verification Malaysia",
	],
	openGraphTitle:
		"TrueSSM™ — Malaysian SSM Registry API | ROC, ROB, LLP & Documents",
	openGraphDescription:
		"Programmatic SSM access for fintechs and lenders — entity search, profiles, particulars, scanned filings, RM billing, and idempotent REST pulls.",
} as const;

export const truessmFaq = [
	{
		question: "What is TrueSSM™?",
		answer:
			"TrueSSM™ is Truestack's REST API for Malaysian Companies Commission (SSM) registry data. Integrate one API to search entities, pull ROC/ROB/LLP profiles, retrieve officers, shareholders, charges, and download scanned documents — with transparent RM pricing per operation.",
	},
	{
		question: "What registry data can I pull with TrueSSM™?",
		answer:
			"TrueSSM supports free entity search, company profiles (ROC), business profiles (ROB), LLP profiles, particulars of officers, share capital, shareholders, registered address, company secretary, charges, audit firm details, and scanned document list/image endpoints.",
	},
	{
		question: "How does TrueSSM™ pricing work?",
		answer:
			"Entity search validation is free when no match is found. Billable operations are priced transparently in Malaysian Ringgit per delivered pull — for example company profiles around RM 15.40. Failed validations and most no-data responses are not charged. Custom tiers are available for high volume.",
	},
	{
		question: "What is idempotent billing on TrueSSM™?",
		answer:
			"Send an Idempotency-Key header on pull requests so safe retries do not double-bill. If the same key already produced a delivered result, you receive the cached outcome without a second charge — important for automated underwriting and onboarding pipelines.",
	},
	{
		question: "Who uses TrueSSM™?",
		answer:
			"Lenders, underwriters, fintech onboarding teams, and compliance functions use TrueSSM to verify corporate borrowers and counterparties — pulling officers, share capital, charges, and filings in seconds instead of manual SSM portal work.",
	},
	{
		question: "How does TrueSSM™ relate to TrueKredit™ and TrueIdentity™?",
		answer:
			"TrueSSM uses a separate API key from TrueIdentity and integrates into Truestack lending stacks — including TrueKredit™ workflows that already wire Infomina/SSM checks for Malaysian KPKT and enterprise loan operations.",
	},
] as const;

export function buildTrueSsmJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${TRUESSM_PAGE_URL}#webpage`,
				url: TRUESSM_PAGE_URL,
				name: TRUESSM_METADATA.openGraphTitle,
				description: TRUESSM_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${TRUESSM_PAGE_URL}#software` },
				breadcrumb: { "@id": `${TRUESSM_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${TRUESSM_PAGE_URL}#breadcrumb`,
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
						name: "TrueSSM™",
						item: TRUESSM_PAGE_URL,
					},
				],
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${TRUESSM_PAGE_URL}#software`,
				name: "TrueSSM™",
				alternateName: [
					"TrueSSM Registry API",
					"Truestack SSM API",
					"Malaysian registry API",
				],
				url: TRUESSM_PAGE_URL,
				applicationCategory: "DeveloperApplication",
				operatingSystem: "Web API",
				description: TRUESSM_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				featureList: [
					"Free entity search validation",
					"ROC company profiles",
					"ROB business profiles",
					"LLP profiles",
					"Officers and shareholders",
					"Scanned SSM documents",
					"Idempotent REST pulls",
					"RM-transparent pricing",
				],
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
			{
				"@type": "FAQPage",
				"@id": `${TRUESSM_PAGE_URL}#faq`,
				mainEntity: truessmFaq.map((item) => ({
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
