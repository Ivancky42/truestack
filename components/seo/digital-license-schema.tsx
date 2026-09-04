import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { buildDigitalLicenseJsonLd } from "@/lib/digital-license-seo";

export async function DigitalLicenseSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations("DigitalLicense");
	const schema = buildDigitalLicenseJsonLd({
		webpageName: t("meta.openGraphTitle"),
		description: t("meta.description"),
		inLanguage: inLanguage[locale],
		serviceName: t("schema.serviceName"),
		alternateName: t.raw("schema.alternateName") as string[],
		serviceType: t("schema.serviceType"),
		audienceType: t("schema.audienceType"),
		catalogName: t("schema.catalogName"),
		conventionalOfferName: t("schema.conventionalOfferName"),
		conventionalOfferDescription: t("schema.conventionalOfferDescription"),
		shariahOfferName: t("schema.shariahOfferName"),
		shariahOfferDescription: t("schema.shariahOfferDescription"),
		relatedServiceName: t("schema.relatedServiceName"),
		relatedServiceType: t("schema.relatedServiceType"),
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
