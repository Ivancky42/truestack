import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl, siteUrl } from "@/lib/seo-defaults";
import type { WorkCaseStudyDetail } from "@/lib/work-case-studies";

export async function WorkCaseStudySchema({
	study,
}: {
	study: WorkCaseStudyDetail;
}) {
	const locale = resolveAppLocale(await getLocale());
	const tCommon = await getTranslations("Common");
	const t = await getTranslations("WorkChrome");
	const pageUrl = absoluteLocalizedUrl(`/work/${study.slug}`, locale);
	const workUrl = absoluteLocalizedUrl("/work", locale);
	const homeUrl = absoluteLocalizedUrl("/", locale);

	const schema = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${pageUrl}#webpage`,
				url: pageUrl,
				name: study.seo.title,
				description: study.seo.description,
				inLanguage: inLanguage[locale],
				isPartOf: { "@id": `${siteUrl}/#website` },
				about: { "@id": `${siteUrl}/#organization` },
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
						item: workUrl,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: study.client,
						item: pageUrl,
					},
				],
			},
			{
				"@type": "Article",
				"@id": `${pageUrl}#article`,
				headline: study.headline,
				description: study.lead,
				inLanguage: inLanguage[locale],
				author: { "@id": `${siteUrl}/#organization` },
				publisher: { "@id": `${siteUrl}/#organization` },
				mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
				about: study.client,
			},
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
