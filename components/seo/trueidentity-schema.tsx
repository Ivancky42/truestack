import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { buildTrueIdentityJsonLd } from "@/lib/trueidentity-seo";

export async function TrueIdentitySchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations({ locale, namespace: "TrueIdentity" });
	const schema = buildTrueIdentityJsonLd({
		webpageName: t("meta.openGraphTitle"),
		webpageDescription: t("meta.description"),
		inLanguage: inLanguage[locale],
		breadcrumbHome: t("schema.breadcrumbHome"),
		breadcrumbCurrent: t("schema.breadcrumbCurrent"),
		softwareName: t("schema.softwareName"),
		alternateName: t.raw("schema.alternateName") as string[],
		softwareDescription: t("meta.description"),
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
