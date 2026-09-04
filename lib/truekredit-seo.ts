import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const TRUEKREDIT_PAGE_PATH = "/truekredit";
export const TRUEKREDIT_PAGE_URL = `${baseUrl}${TRUEKREDIT_PAGE_PATH}`;

export const TRUEKREDIT_KEYWORDS = [
	"TrueKredit",
	"money lending management system",
	"money lender software Malaysia",
	"loan management for KPKT-licensed money lenders",
	"loan management system Malaysia",
	"lending platform Malaysia",
	"KPKT loan management system",
	"KPKT software Malaysia",
	"KPKT PPW software",
	"licensed money lender platform",
	"digital lending platform Malaysia",
	"fintech lending software Malaysia",
	"money lender Malaysia software",
	"KPKT compliance software",
	"Lampiran A",
	"Lampiran B",
	"Lampiran B1",
	"iDEAL KPKT",
	"sistem iDEAL",
	"Jadual J",
	"Jadual K",
	"Schedule J",
	"Schedule K",
	"TrueKredit Pro",
	"TrueKredit Standard",
	"KPKT online lending",
	"digital money lender Malaysia",
	"loan book software Malaysia",
] as const;

export const TRUEKREDIT_OG_IMAGE_PATH = "/truekredit/hero.png";

export type TrueKreditSchemaCopy = {
	webpageName: string;
	description: string;
	inLanguage: string;
	breadcrumbHome: string;
	productName: string;
	alternateNames: string[];
	offers: { name: string; description: string }[];
	featureList: string[];
};

export function buildTrueKreditJsonLd(copy: TrueKreditSchemaCopy) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${TRUEKREDIT_PAGE_URL}#webpage`,
				url: TRUEKREDIT_PAGE_URL,
				name: copy.webpageName,
				description: copy.description,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${TRUEKREDIT_PAGE_URL}#software` },
				breadcrumb: { "@id": `${TRUEKREDIT_PAGE_URL}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${TRUEKREDIT_PAGE_URL}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: copy.breadcrumbHome,
						item: baseUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: copy.productName,
						item: TRUEKREDIT_PAGE_URL,
					},
				],
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${TRUEKREDIT_PAGE_URL}#software`,
				name: copy.productName,
				alternateName: copy.alternateNames,
				url: TRUEKREDIT_PAGE_URL,
				applicationCategory: "BusinessApplication",
				applicationSubCategory: "Loan Management System",
				operatingSystem: "Web, iOS, Android",
				description: copy.description,
				provider: { "@id": `${baseUrl}/#organization` },
				offers: copy.offers.map((offer) => ({
					"@type": "Offer",
					name: offer.name,
					description: offer.description,
				})),
				featureList: copy.featureList,
				areaServed: { "@type": "Country", name: "Malaysia" },
			},
		],
	};
}
