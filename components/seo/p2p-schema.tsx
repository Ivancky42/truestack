import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { P2P_PAGE_PATH, buildP2PJsonLd } from "@/lib/p2p-seo";
import { absoluteLocalizedUrl } from "@/lib/seo-defaults";

const OFFER_KEYS = [
	"investor",
	"issuer",
	"listings",
	"escrow",
	"ekyc",
	"esign",
	"ops",
	"tawarruq",
	"shariahAccounting",
	"rmo",
] as const;

export async function P2PSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations("P2P");
	const schema = buildP2PJsonLd({
		pageUrl: absoluteLocalizedUrl(P2P_PAGE_PATH, locale),
		homeUrl: absoluteLocalizedUrl("/", locale),
		webpageName: t("meta.openGraphTitle"),
		description: t("meta.description"),
		inLanguage: inLanguage[locale],
		serviceName: t("schema.serviceName"),
		alternateName: t.raw("schema.alternateName") as string[],
		serviceType: t("schema.serviceType"),
		audienceType: t("schema.audienceType"),
		catalogName: t("schema.catalogName"),
		offers: OFFER_KEYS.map((key) => ({
			name: t(`schema.offers.${key}.name`),
			description: t(`schema.offers.${key}.description`),
		})),
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
