import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl } from "@/lib/seo-defaults";
import {
	TRUEKREDIT_PAGE_PATH,
	buildTrueKreditJsonLd,
} from "@/lib/truekredit-seo";

export async function TrueKreditSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations({ locale, namespace: "TrueKredit" });
	const tCommon = await getTranslations({ locale, namespace: "Common" });
	const schema = buildTrueKreditJsonLd({
		pageUrl: absoluteLocalizedUrl(TRUEKREDIT_PAGE_PATH, locale),
		homeUrl: absoluteLocalizedUrl("/", locale),
		webpageName: t("meta.openGraphTitle"),
		description: t("meta.description"),
		inLanguage: inLanguage[locale],
		breadcrumbHome: tCommon("breadcrumbHome"),
		productName: t("schema.productName"),
		alternateNames: t.raw("schema.alternateNames") as string[],
		offers: t.raw("schema.offers") as {
			name: string;
			description: string;
		}[],
		featureList: t.raw("schema.featureList") as string[],
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
