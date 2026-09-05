import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl, legalName, siteName, siteUrl } from "@/lib/seo-defaults";

const INSIGHTS_PATH = "/insights";

/**
 * JSON-LD Blog schema for /insights (and locale variants).
 * `@id` stays on the English collection so locale pages share one Blog entity.
 * Validate at: https://validator.schema.org/
 */
export async function InsightsSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations("InsightsChrome");
	const pageUrl = absoluteLocalizedUrl(INSIGHTS_PATH, locale);
	const schema = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"@id": `${siteUrl}${INSIGHTS_PATH}#blog`,
		url: pageUrl,
		name: t("schema.name"),
		description: t("schema.description"),
		inLanguage: inLanguage[locale],
		publisher: {
			"@type": "Organization",
			"@id": `${siteUrl}/#organization`,
			name: siteName,
			legalName,
		},
		isPartOf: { "@id": `${siteUrl}/#website` },
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
