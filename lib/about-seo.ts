const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const ABOUT_PAGE_PATH = "/about";
export const ABOUT_PAGE_URL = `${baseUrl}${ABOUT_PAGE_PATH}`;

export const ABOUT_METADATA = {
	title: "About Truestack | Malaysian Fintech Platforms, APIs & KPKT Services",
	description:
		"Truestack helps Malaysian licensed money lenders and fintechs go from licence to live portfolio — TrueKredit™ lending platforms, infrastructure APIs (e-KYC, SSM, payments), and KPKT digital licence & compliance services from one accountable team.",
	keywords: [
		"Truestack",
		"about Truestack",
		"fintech software Malaysia",
		"lending technology Malaysia",
		"TrueKredit",
		"TrueIdentity",
		"TrueSSM",
		"KPKT digital licence",
		"KPKT fintech Malaysia",
		"licensed money lender software",
		"loan management system Malaysia",
		"e-KYC Malaysia",
		"digital lending platform Malaysia",
		"fintech infrastructure Malaysia",
	],
	openGraphTitle:
		"About Truestack | Malaysian Fintech Platforms, APIs & KPKT Services",
	openGraphDescription:
		"Meet Truestack — the partner behind compliant digital lending in Malaysia. Platforms, infrastructure APIs, and KPKT services that work as one.",
} as const;

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
				"@id": `${ABOUT_PAGE_URL}#offerings`,
				name: "Truestack offerings",
				description:
					"Lending platforms, fintech infrastructure APIs, and professional services for Malaysian operators.",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Lending platforms — TrueKredit™, TrueSyariah™, TrueP2P™",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Fintech infrastructure — TrueIdentity™, TrueSSM™, TruePay™, TrueScore™",
					},
					{
						"@type": "ListItem",
						position: 3,
						name: "Professional services — Digital KPKT licence, account management, custom software",
					},
				],
			},
		],
	};
}
