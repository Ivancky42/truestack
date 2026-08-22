import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const DIGITAL_LICENSE_PAGE_PATH = "/services/digital-license";
export const DIGITAL_LICENSE_PAGE_URL = `${baseUrl}${DIGITAL_LICENSE_PAGE_PATH}`;

export const DIGITAL_LICENSE_METADATA = {
	title: "Online Money Lending Licence | e-Lending KPKT",
	description:
		"Pemberian pinjaman wang dalam talian (e-Lending / urus niaga secara dalam talian). Kebenaran tambahan for existing PPW; online money lending licence.",
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
	],
	openGraphTitle: "Online Money Lending Licence | e-Lending KPKT",
	openGraphDescription:
		"Kebenaran tambahan for existing PPW — pemberian pinjaman wang dalam talian (e-Lending) per Online Moneylenders Guidelines. Digital KPKT licence.",
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
					"Online money lending licence (e-Lending) and kebenaran tambahan for existing PPW",
				url: DIGITAL_LICENSE_PAGE_URL,
				description: DIGITAL_LICENSE_METADATA.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType:
						"KPKT-licensed money lenders and digital lending operators in Malaysia",
				},
			},
		],
	};
}
