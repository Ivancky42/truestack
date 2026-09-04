import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { PageMessages } from "@/lib/i18n/messages";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import {
	DIGITAL_LICENSE_KEYWORDS,
	DIGITAL_LICENSE_PAGE_PATH,
} from "@/lib/digital-license-seo";
import { DigitalLicenseSchema } from "@/components/seo/digital-license-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { DigitalLicensePageContent } from "@/components/sections/digital-license-page-content";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({
		locale: resolved,
		namespace: "DigitalLicense",
	});
	return localizePageMetadata(
		{
			title: { absolute: t("meta.title") },
			description: t("meta.description"),
			keywords: [...DIGITAL_LICENSE_KEYWORDS],
			alternates: { canonical: DIGITAL_LICENSE_PAGE_PATH },
			openGraph: {
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				url: DIGITAL_LICENSE_PAGE_PATH,
				type: "website",
				locale: "en_MY",
				siteName,
				images: [defaultOgImage],
			},
			twitter: {
				card: defaultTwitterCard,
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				images: [defaultOgImage.url],
			},
			robots: {
				index: true,
				follow: true,
				googleBot: {
					index: true,
					follow: true,
					"max-image-preview": "large",
					"max-snippet": -1,
				},
			},
		},
		DIGITAL_LICENSE_PAGE_PATH,
		resolved,
	);
}

export default async function DigitalLicensePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("DigitalLicense");
	const tCommon = await getTranslations("Common");
	const faqItems = t.raw("faq.items") as {
		question: string;
		answer: string;
	}[];
	return (
		<>
			<DigitalLicenseSchema />
			<FaqSchema items={faqItems} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{
						name: t("breadcrumb.current"),
						path: DIGITAL_LICENSE_PAGE_PATH,
					},
				]}
			/>
			<PageMessages namespaces={["DigitalLicense"]}>
				<DigitalLicensePageContent />
			</PageMessages>
		</>
	);
}
