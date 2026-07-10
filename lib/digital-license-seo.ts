const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const DIGITAL_LICENSE_PAGE_PATH = "/services/digital-license";
export const DIGITAL_LICENSE_PAGE_URL = `${baseUrl}${DIGITAL_LICENSE_PAGE_PATH}`;

export const DIGITAL_LICENSE_METADATA = {
	title: "KPKT Digital Licence Malaysia | TrueKredit™ Pro Platform",
	description:
		"KPKT digital licence conversion in Malaysia — licensing advisory plus TrueKredit™ Pro lending platform, review prep, and go-live in about three months.",
	keywords: [
		"KPKT digital licence Malaysia",
		"KPKT digital license Malaysia",
		"digital KPKT license",
		"KPKT digital license conversion",
		"KPKT digital lending license",
		"KPKT Online Money Lending Licence",
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
	openGraphTitle:
		"KPKT Digital Licence Malaysia | TrueKredit™ Pro Platform",
	openGraphDescription:
		"End-to-end KPKT Online Money Lending Licence in Malaysia — advisory, TrueKredit™ Pro lending platform, review prep, and go-live in about three months.",
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
				name: "Digital KPKT License Conversion",
				alternateName: [
					"KPKT Digital License Conversion",
					"KPKT Digital Lending Licence",
					"KPKT Online Money Lending Licence Malaysia",
					"Digital money lender platform Malaysia",
				],
				serviceType:
					"KPKT digital money lending licence conversion and lending platform deployment",
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
