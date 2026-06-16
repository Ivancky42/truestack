const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const CONTACT_PAGE_PATH = "/contact";
export const CONTACT_PAGE_URL = `${baseUrl}${CONTACT_PAGE_PATH}`;

export function buildContactJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ContactPage",
				"@id": `${CONTACT_PAGE_URL}#webpage`,
				url: CONTACT_PAGE_URL,
				name: "Book a Free Consultation - Truestack",
				description:
					"Book a free consultation with Truestack for KPKT licensing, compliance, and fintech software development in Malaysia.",
				inLanguage: "en-MY",
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${CONTACT_PAGE_URL}#breadcrumb` },
				mainEntity: { "@id": `${CONTACT_PAGE_URL}#consultation` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${CONTACT_PAGE_URL}#breadcrumb`,
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
						name: "Contact",
						item: CONTACT_PAGE_URL,
					},
				],
			},
			{
				"@type": "Service",
				"@id": `${CONTACT_PAGE_URL}#consultation`,
				name: "Free Consultation",
				serviceType: "Fintech & KPKT licensing consultation",
				description:
					"A free, no-obligation consultation covering KPKT account management, digital license conversion, lending software, and custom fintech development for licensed money lenders and fintech operators in Malaysia.",
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				url: CONTACT_PAGE_URL,
				offers: {
					"@type": "Offer",
					name: "Free Consultation",
					description:
						"Initial consultation to scope your KPKT licensing, compliance, or fintech software needs — free of charge.",
					price: "0",
					priceCurrency: "MYR",
					availability: "https://schema.org/InStock",
					url: CONTACT_PAGE_URL,
				},
			},
		],
	};
}
