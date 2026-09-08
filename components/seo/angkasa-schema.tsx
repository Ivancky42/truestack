import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import {
	ANGKASA_PAGE_PATH,
	buildAngkasaJsonLd,
} from "@/lib/angkasa-seo";
import { absoluteLocalizedUrl } from "@/lib/seo-defaults";

export async function AngkasaSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations("Angkasa");
	const schema = buildAngkasaJsonLd({
		pageUrl: absoluteLocalizedUrl(ANGKASA_PAGE_PATH, locale),
		homeUrl: absoluteLocalizedUrl("/", locale),
		webpageName: t("meta.openGraphTitle"),
		description: t("meta.description"),
		inLanguage: inLanguage[locale],
		serviceName: t("schema.serviceName"),
		alternateName: t.raw("schema.alternateName") as string[],
		serviceType: t("schema.serviceType"),
		audienceType: t("schema.audienceType"),
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
