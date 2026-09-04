import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { PageMessages } from "@/lib/i18n/messages";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { SoftwareDevelopmentSchema } from "@/components/seo/software-development-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { SoftwareDevelopmentPageContent } from "@/components/sections/software-development-page-content";
import {
	SOFTWARE_DEVELOPMENT_KEYWORDS,
	SOFTWARE_DEVELOPMENT_PAGE_PATH,
} from "@/lib/software-development-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({
		locale: resolved,
		namespace: "SoftwareDevelopment",
	});
	return localizePageMetadata(
		{
			title: { absolute: t("meta.title") },
			description: t("meta.description"),
			keywords: [...SOFTWARE_DEVELOPMENT_KEYWORDS],
			alternates: { canonical: SOFTWARE_DEVELOPMENT_PAGE_PATH },
			openGraph: {
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				url: SOFTWARE_DEVELOPMENT_PAGE_PATH,
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
		},
		SOFTWARE_DEVELOPMENT_PAGE_PATH,
		resolved,
	);
}

export default async function SoftwareDevelopmentPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("SoftwareDevelopment");
	const tCommon = await getTranslations("Common");
	const faqItems = t.raw("faq.items") as {
		question: string;
		answer: string;
	}[];
	return (
		<>
			<SoftwareDevelopmentSchema />
			<FaqSchema items={faqItems} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{
						name: t("breadcrumb.current"),
						path: SOFTWARE_DEVELOPMENT_PAGE_PATH,
					},
				]}
			/>
			<PageMessages namespaces={["SoftwareDevelopment"]}>
				<SoftwareDevelopmentPageContent />
			</PageMessages>
		</>
	);
}
