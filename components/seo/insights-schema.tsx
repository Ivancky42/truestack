import { getTranslations } from "next-intl/server";
import { legalName, siteName, siteUrl } from "@/lib/seo-defaults";

const pageUrl = `${siteUrl}/insights`;

/**
 * JSON-LD Blog schema for /insights.
 * Validate at: https://validator.schema.org/
 */
export async function InsightsSchema() {
	const t = await getTranslations("InsightsChrome");
	const schema = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"@id": `${pageUrl}#blog`,
		url: pageUrl,
		name: t("schema.name"),
		description: t("schema.description"),
		inLanguage: "en-MY",
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
