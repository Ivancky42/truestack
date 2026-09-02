import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const DIGITAL_LICENSE_PAGE_PATH = "/services/digital-license";
export const DIGITAL_LICENSE_PAGE_URL = `${baseUrl}${DIGITAL_LICENSE_PAGE_PATH}`;

export const DIGITAL_LICENSE_METADATA = {
	title: "Online Money Lending Licence Malaysia | Truestack",
	description:
		"KPKT digital licence Malaysia — conventional PPW (e-Lending) or upcoming Shariah digital lending. Licensing, kebenaran tambahan, TrueKredit™ Pro.",
	keywords: [
		"pemberian pinjaman wang dalam talian",
		"e-Lending",
		"urus niaga secara dalam talian",
		"kebenaran tambahan",
		"online money lending licence",
		"Online Moneylenders Guidelines",
		"KPKT Online Money Lending Licence",
		"KPKT digital licence Malaysia",
		"KPKT digital license Malaysia",
		"digital KPKT license",
		"KPKT digital license conversion",
		"KPKT digital lending license",
		"KPKT license consultancy Malaysia",
		"digital lending platform Malaysia",
		"money lender platform Malaysia",
		"lending software Malaysia",
		"TrueKredit Pro",
		"digital money lender Malaysia",
		"online lending platform Malaysia",
		"KPKT PPW to digital",
		"nationwide money lending Malaysia",
		"fintech platform development Malaysia",
		"Shariah digital licence Malaysia",
		"Shariah digital lending licence KPKT",
		"lesen pinjaman digital syariah",
		"TrueSyariah",
	],
	openGraphTitle: "Online Money Lending Licence Malaysia | Truestack",
	openGraphDescription:
		"End-to-end KPKT digital licence — conventional PPW e-Lending or the upcoming Shariah path. Licensing, kebenaran tambahan, TrueKredit™ Pro or TrueSyariah™.",
} as const;

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
			},
			{
				"@type": "Service",
				"@id": `${DIGITAL_LICENSE_PAGE_URL}#service`,
				name: "Online Money Lending Licence (e-Lending)",
				alternateName: [
					"pemberian pinjaman wang dalam talian",
					"e-Lending",
					"urus niaga secara dalam talian",
					"kebenaran tambahan",
					"KPKT Online Money Lending Licence Malaysia",
					"KPKT Digital Licence Malaysia",
					"KPKT Digital License Conversion",
					"Digital money lender platform Malaysia",
				],
				serviceType:
					"KPKT Online Money Lending Licence conversion — e-Lending, kebenaran tambahan, and TrueKredit Pro",
				url: DIGITAL_LICENSE_PAGE_URL,
				description: DIGITAL_LICENSE_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType:
						"KPKT-licensed money lenders and digital lending operators in Malaysia",
				},
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "KPKT digital licence paths",
					itemListElement: [
						{
							"@type": "Offer",
							name: "Conventional digital licence (PPW / e-Lending)",
							description:
								"Kebenaran tambahan for pemberian pinjaman wang dalam talian on an existing lesen PPW, with TrueKredit™ Pro.",
							url: DIGITAL_LICENSE_PAGE_URL,
						},
						{
							"@type": "Offer",
							name: "Shariah digital lending licence",
							description:
								"Upcoming KPKT Shariah digital lending path — separate entity, committee and TrueSyariah™ platform.",
							url: `${baseUrl}/truesyariah`,
						},
					],
				},
			},
			{
				"@type": "Service",
				"@id": `${baseUrl}/truesyariah#licence-path`,
				name: "Shariah Digital Lending Licence",
				url: `${baseUrl}/truesyariah`,
				serviceType:
					"KPKT Shariah digital lending licence and TrueSyariah platform",
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				isRelatedTo: { "@id": `${DIGITAL_LICENSE_PAGE_URL}#service` },
			},
		],
	};
}
