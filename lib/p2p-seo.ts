import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const P2P_PAGE_PATH = "/services/p2p-software-development";
export const P2P_PAGE_URL = `${baseUrl}${P2P_PAGE_PATH}`;

export const P2P_OG_IMAGE_PATH = "/p2p/hero.png";

export const P2P_KEYWORDS = [
	"TrueP2P",
	"P2P platform development Malaysia",
	"P2P software development Malaysia",
	"P2P lending platform Malaysia",
	"peer-to-peer financing platform Malaysia",
	"fintech platform development Malaysia",
	"SC Malaysia P2P platform",
	"Recognised Market Operator P2P",
	"SC RMO registration Malaysia",
	"Shariah-compliant P2P platform Malaysia",
	"Islamic P2P platform development",
	"custom P2P platform Malaysia",
	"invoice financing platform Malaysia",
	"Gharamah Ta'widh accounting",
	"Tawarruq P2P Malaysia",
	"Tawarruq commodity disbursement",
	"software development P2P Malaysia",
] as const;

export type P2PSchemaCopy = {
	webpageName: string;
	description: string;
	inLanguage: string;
	serviceName: string;
	alternateName: string[];
	serviceType: string;
	audienceType: string;
	catalogName: string;
	offers: { name: string; description: string }[];
};

export function buildP2PJsonLd(copy: P2PSchemaCopy) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${P2P_PAGE_URL}#webpage`,
				url: P2P_PAGE_URL,
				name: copy.webpageName,
				description: copy.description,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${P2P_PAGE_URL}#service` },
			},
			{
				"@type": "Service",
				"@id": `${P2P_PAGE_URL}#service`,
				name: copy.serviceName,
				alternateName: copy.alternateName,
				serviceType: copy.serviceType,
				url: P2P_PAGE_URL,
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
					itemListElement: copy.offers.map((offer) => ({
						"@type": "Offer",
						itemOffered: {
							"@type": "Service",
							name: offer.name,
							description: offer.description,
						},
					})),
				},
			},
		],
	};
}
