import { legalName, siteName, siteUrl } from "@/lib/seo-defaults";

const pageUrl = `${siteUrl}/insights`;

/**
 * JSON-LD Blog schema for /insights.
 * Validate at: https://validator.schema.org/
 */
export function InsightsSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Blog",
		"@id": `${pageUrl}#blog`,
		url: pageUrl,
		name: "Insights",
		description:
			"Practical articles from Truestack Technologies on Malaysian fintech — KPKT licensing, compliance, lending operations, Shariah financing, identity and company data checks, software delivery, and product and company updates.",
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
