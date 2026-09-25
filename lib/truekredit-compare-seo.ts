import { siteUrl } from "@/lib/seo-defaults";
import { TRUEKREDIT_PAGE_URL } from "@/lib/truekredit-seo";

const baseUrl = siteUrl;

/** Buyer's checklist comparing loan management systems, answered for TrueKredit. */
export const COMPARE_PAGE_PATH = "/compare/loan-management-systems";

export const COMPARE_KEYWORDS = [
	"money lending management system Malaysia",
	"LMS Malaysia money lending",
	"best LMS Malaysia money lending",
	"KPKT online money lending software",
	"TrueKredit vs Arkmind",
	"loan management system comparison Malaysia",
	"KPKT loan management system",
] as const;

/** Row keys of the checklist table (copy in `TrueKreditCompare.checklist.rows.*`). */
export const COMPARE_ROWS = [
	"paperwork",
	"licence",
	"data",
	"changes",
	"checks",
	"controls",
	"fit",
	"growth",
	"licensing",
] as const;

export type CompareSchemaCopy = {
	pageUrl: string;
	homeUrl: string;
	truekreditUrl: string;
	webpageName: string;
	description: string;
	inLanguage: string;
	breadcrumbHome: string;
	breadcrumbTrueKredit: string;
	breadcrumbCurrent: string;
};

export function buildCompareJsonLd(copy: CompareSchemaCopy) {
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
				about: { "@id": `${TRUEKREDIT_PAGE_URL}#software` },
				breadcrumb: { "@id": `${copy.pageUrl}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${copy.pageUrl}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: copy.breadcrumbHome,
						item: copy.homeUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: copy.breadcrumbTrueKredit,
						item: copy.truekreditUrl,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: copy.breadcrumbCurrent,
						item: copy.pageUrl,
					},
				],
			},
		],
	};
}
