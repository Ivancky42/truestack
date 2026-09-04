import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { buildSoftwareDevelopmentJsonLd } from "@/lib/software-development-seo";

export async function SoftwareDevelopmentSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations("SoftwareDevelopment");
	const schema = buildSoftwareDevelopmentJsonLd({
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
