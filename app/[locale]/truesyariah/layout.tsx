import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TrueSyariahSchema } from "@/components/seo/truesyariah-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { siteName } from "@/lib/seo-defaults";
import {
	TRUESYARIAH_KEYWORDS,
	TRUESYARIAH_OG_IMAGE_PATH,
	TRUESYARIAH_PAGE_PATH,
} from "@/lib/truesyariah-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const appLocale = resolveAppLocale(locale);
	const t = await getTranslations({
		locale: appLocale,
		namespace: "TrueSyariah",
	});

	const pageMetadata: Metadata = {
		title: { absolute: t("meta.title") },
		description: t("meta.description"),
		keywords: [...TRUESYARIAH_KEYWORDS],
		alternates: { canonical: TRUESYARIAH_PAGE_PATH },
		openGraph: {
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			url: TRUESYARIAH_PAGE_PATH,
			type: "website",
			locale: "en_MY",
			siteName,
			images: [
				{
					url: TRUESYARIAH_OG_IMAGE_PATH,
					width: 1536,
					height: 1024,
					alt: t("meta.ogImageAlt"),
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			images: [TRUESYARIAH_OG_IMAGE_PATH],
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
	};

	return localizePageMetadata(
		pageMetadata,
		TRUESYARIAH_PAGE_PATH,
		appLocale,
	);
}

export default async function TrueSyariahLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const appLocale = resolveAppLocale(locale);
	setRequestLocale(appLocale);
	const t = await getTranslations({
		locale: appLocale,
		namespace: "TrueSyariah",
	});
	return (
		<>
			<TrueSyariahSchema />
			<FaqSchema
				items={
					t.raw("faq.items") as {
						question: string;
						answer: string;
					}[]
				}
			/>
			<div className="ts-page hero-under-nav bg-ts-parchment text-ts-ink">
				{children}
			</div>
		</>
	);
}
