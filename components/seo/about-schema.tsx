import { getLocale, getTranslations } from "next-intl/server";
import { ABOUT_PAGE_PATH, buildAboutJsonLd } from "@/lib/about-seo";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl } from "@/lib/seo-defaults";

const PRINCIPLE_KEYS = [
	"compliance",
	"loanBook",
	"oneTeam",
	"goLive",
] as const;

export async function AboutSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations({ locale, namespace: "About" });
	const schema = buildAboutJsonLd({
		pageUrl: absoluteLocalizedUrl(ABOUT_PAGE_PATH, locale),
		homeUrl: absoluteLocalizedUrl("/", locale),
		webpageName: t("meta.openGraphTitle"),
		webpageDescription: t("meta.description"),
		inLanguage: inLanguage[locale],
		breadcrumbHome: t("schema.breadcrumbHome"),
		breadcrumbCurrent: t("schema.breadcrumbCurrent"),
		principlesName: t("schema.principlesName"),
		principlesDescription: t("schema.principlesDescription"),
		principles: PRINCIPLE_KEYS.map((key) => t(`beliefs.items.${key}.title`)),
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
