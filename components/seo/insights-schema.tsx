import { getLocale } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { legalName, siteName, siteUrl } from "@/lib/seo-defaults";

const pageUrl = `${siteUrl}/insights`;

/**
 * JSON-LD Blog schema for /insights.
 * Validate at: https://validator.schema.org/
 */
export async function InsightsSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"@id": `${pageUrl}#blog`,
		url: pageUrl,
		name: "Insights",
		description:
			"Notes from Truestack Technologies on Malaysian fintech — KPKT licensing, lending, Shariah financing, compliance and the software we build around them.",
		inLanguage: inLanguage[resolveAppLocale(await getLocale())],
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
