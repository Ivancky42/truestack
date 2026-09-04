import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const DIGITAL_LICENSE_PAGE_PATH = "/services/digital-license";
export const DIGITAL_LICENSE_PAGE_URL = `${baseUrl}${DIGITAL_LICENSE_PAGE_PATH}`;

export const DIGITAL_LICENSE_KEYWORDS = [
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
] as const;

export type DigitalLicenseSchemaCopy = {
	pageUrl: string;
	homeUrl: string;
	webpageName: string;
	description: string;
	inLanguage: string;
	serviceName: string;
	alternateName: string[];
	serviceType: string;
	audienceType: string;
	catalogName: string;
	conventionalOfferName: string;
	conventionalOfferDescription: string;
	shariahOfferName: string;
	shariahOfferDescription: string;
	relatedServiceName: string;
	relatedServiceType: string;
};

export function buildDigitalLicenseJsonLd(copy: DigitalLicenseSchemaCopy) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${copy.pageUrl}#webpage`,
				url: copy.pageUrl,
				name: copy.webpageName,
				description: copy.description,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${DIGITAL_LICENSE_PAGE_URL}#service` },
			},
			{
				"@type": "Service",
				"@id": `${DIGITAL_LICENSE_PAGE_URL}#service`,
				name: copy.serviceName,
				alternateName: copy.alternateName,
				serviceType: copy.serviceType,
				url: DIGITAL_LICENSE_PAGE_URL,
				description: copy.description,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				audience: {
					"@type": "BusinessAudience",
					audienceType: copy.audienceType,
				},
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: copy.catalogName,
					itemListElement: [
						{
							"@type": "Offer",
							name: copy.conventionalOfferName,
							description: copy.conventionalOfferDescription,
							url: DIGITAL_LICENSE_PAGE_URL,
						},
						{
							"@type": "Offer",
							name: copy.shariahOfferName,
							description: copy.shariahOfferDescription,
							url: `${baseUrl}/truesyariah`,
						},
					],
				},
			},
			{
				"@type": "Service",
				"@id": `${baseUrl}/truesyariah#licence-path`,
				name: copy.relatedServiceName,
				url: `${baseUrl}/truesyariah`,
				serviceType: copy.relatedServiceType,
				provider: { "@id": `${baseUrl}/#organization` },
				areaServed: { "@type": "Country", name: "Malaysia" },
				isRelatedTo: { "@id": `${DIGITAL_LICENSE_PAGE_URL}#service` },
			},
		],
	};
}
