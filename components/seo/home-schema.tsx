import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl, siteUrl } from "@/lib/seo-defaults";

/**
 * JSON-LD WebPage node for the homepage only (`/`, `/ms`, `/zh`). Site-wide
 * identity (WebSite, Organization) lives in the locale layout; this node
 * carries the localized title/description and links back to it.
 */
export async function HomeSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations({ locale, namespace: "Home" });
	const homeUrl = absoluteLocalizedUrl("/", locale);
	// English home is the bare origin; keep the `/#fragment` shape used by
	// the WebSite / Organization ids in the layout.
	const idBase = homeUrl === siteUrl ? `${siteUrl}/` : homeUrl;
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `${idBase}#webpage`,
		url: homeUrl,
		name: t("meta.title"),
		description: t("meta.description"),
		inLanguage: inLanguage[locale],
		isPartOf: { "@id": `${siteUrl}/#website` },
		about: { "@id": `${siteUrl}/#organization` },
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
