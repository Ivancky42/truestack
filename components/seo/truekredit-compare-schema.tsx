import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl } from "@/lib/seo-defaults";
import {
	COMPARE_PAGE_PATH,
	buildCompareJsonLd,
} from "@/lib/truekredit-compare-seo";
import { TRUEKREDIT_PAGE_PATH } from "@/lib/truekredit-seo";

export async function TrueKreditCompareSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations("TrueKreditCompare");
	const tCommon = await getTranslations("Common");
	const schema = buildCompareJsonLd({
		pageUrl: absoluteLocalizedUrl(COMPARE_PAGE_PATH, locale),
		homeUrl: absoluteLocalizedUrl("/", locale),
		truekreditUrl: absoluteLocalizedUrl(TRUEKREDIT_PAGE_PATH, locale),
		webpageName: t("meta.title"),
		description: t("meta.description"),
		inLanguage: inLanguage[locale],
		breadcrumbHome: tCommon("breadcrumbHome"),
		breadcrumbTrueKredit: t("breadcrumb.truekredit"),
		breadcrumbCurrent: t("breadcrumb.current"),
	});

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
