const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const ABOUT_PAGE_PATH = "/about";
export const ABOUT_PAGE_URL = `${baseUrl}${ABOUT_PAGE_PATH}`;

export const ABOUT_METADATA = {
	title: "About Truestack | Malaysian Fintech Software & Lending Technology",
	description:
		"Truestack builds purpose-built lending technology in Malaysia — TrueKredit™ loan systems, Truestack Core™ shared infrastructure, and a modern stack with Next.js, Flutter, Node.js, PostgreSQL, and AWS Malaysia for licensed money lenders and fintechs.",
	keywords: [
		"Truestack",
		"about Truestack",
		"fintech software Malaysia",
		"lending technology Malaysia",
		"TrueKredit",
		"Truestack Core",
		"KPKT fintech Malaysia",
		"licensed money lender software",
		"loan management system Malaysia",
		"e-KYC Malaysia",
		"Next.js fintech",
		"Flutter lending app",
		"AWS Malaysia fintech",
		"full-stack fintech development",
		"digital lending platform Malaysia",
	],
	openGraphTitle:
		"About Truestack | Malaysian Fintech Software & Lending Technology",
	openGraphDescription:
		"Meet Truestack — Malaysian fintech engineers behind TrueKredit™, Truestack Core™, and production-grade web, mobile, and cloud infrastructure for regulated lending.",
} as const;

export const aboutFaq = [
	{
		question: "What is Truestack?",
		answer:
			"Truestack is a Malaysian technology company that builds fintech platforms and infrastructure for licensed money lenders and fintech operators. We deliver loan management systems, shared APIs (e-KYC, payments, notifications, compliance), custom software, and KPKT-related services from our team in Malaysia.",
	},
	{
		question: "What products does Truestack build?",
		answer:
			"TrueKredit™ is our loan management system for lending operations. Truestack Core™ is shared fintech infrastructure — e-KYC, payments, notifications, compliance APIs, and reusable building blocks that accelerate new products. We also build custom P2P, digital lending, and enterprise platforms on this stack.",
	},
	{
		question: "What technology stack does Truestack use?",
		answer:
			"We use a modern, battle-tested stack: Next.js, React, TypeScript, and Tailwind CSS for web; Flutter for cross-platform mobile; Node.js, Express, PostgreSQL, and Redis on the backend; and AWS Malaysia, Docker, and DigitalOcean for cloud deployment — designed for performance, maintainability, and audit-ready fintech workloads.",
	},
	{
		question: "Who does Truestack work with?",
		answer:
			"We partner with KPKT-licensed money lenders, digital lending operators, P2P platforms, and fintech companies in Malaysia (and select regional projects) — from established lenders going digital to new operators building compliant platforms from scratch.",
	},
	{
		question: "Where is Truestack based?",
		answer:
			"Truestack is headquartered in Malaysia. Our team builds and supports production fintech systems with Malaysia data residency (AWS Malaysia) and deep familiarity with local regulatory requirements including KPKT.",
	},
] as const;

export function buildAboutJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["WebPage", "AboutPage"],
				"@id": `${ABOUT_PAGE_URL}#webpage`,
				url: ABOUT_PAGE_URL,
				name: ABOUT_METADATA.openGraphTitle,
				description: ABOUT_METADATA.description,
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${ABOUT_PAGE_URL}#breadcrumb` },
				mainEntity: { "@id": `${baseUrl}/#organization` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${ABOUT_PAGE_URL}#breadcrumb`,
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
						name: "About",
						item: ABOUT_PAGE_URL,
					},
				],
			},
			{
				"@type": "ItemList",
				"@id": `${ABOUT_PAGE_URL}#technology`,
				name: "Truestack technology",
				description:
					"Platforms, web and mobile stack, and cloud infrastructure used by Truestack.",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Platforms — TrueKredit™ and Truestack Core™",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Web & Mobile — Next.js, React, TypeScript, Tailwind CSS, Flutter",
					},
					{
						"@type": "ListItem",
						position: 3,
						name: "Backend & Cloud — Node.js, Express, PostgreSQL, Redis, AWS Malaysia, Docker",
					},
				],
			},
			{
				"@type": "FAQPage",
				"@id": `${ABOUT_PAGE_URL}#faq`,
				mainEntity: aboutFaq.map((item) => ({
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
