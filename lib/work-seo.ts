import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl, siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const WORK_PAGE_PATH = "/work";

export async function buildWorkJsonLd() {
	const locale = resolveAppLocale(await getLocale());
	const tCommon = await getTranslations("Common");
	const t = await getTranslations("WorkChrome");
	const tStudies = await getTranslations("WorkStudies");
	const pageUrl = absoluteLocalizedUrl(WORK_PAGE_PATH, locale);
	const homeUrl = absoluteLocalizedUrl("/", locale);

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["WebPage", "CollectionPage"],
				"@id": `${pageUrl}#webpage`,
				url: pageUrl,
				name: t("schema.name"),
				description: tStudies("meta.description"),
				inLanguage: inLanguage[locale],
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${pageUrl}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: tCommon("breadcrumbHome"),
						item: homeUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: t("nav"),
						item: pageUrl,
					},
				],
			},
		],
	};
}
