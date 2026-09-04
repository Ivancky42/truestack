import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { TrueSsmSchema } from "@/components/seo/truessm-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { TRUESSM_KEYWORDS, TRUESSM_PAGE_PATH } from "@/lib/truessm-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({ locale: resolved, namespace: "TrueSSM" });
	const pageMetadata: Metadata = {
		title: { absolute: t("meta.title") },
		description: t("meta.description"),
		keywords: [...TRUESSM_KEYWORDS],
		alternates: { canonical: TRUESSM_PAGE_PATH },
		openGraph: {
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			url: TRUESSM_PAGE_PATH,
			type: "website",
			locale: "en_MY",
			siteName,
			images: [{ ...defaultOgImage, alt: t("meta.ogImageAlt") }],
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
	};
	return localizePageMetadata(pageMetadata, TRUESSM_PAGE_PATH, resolved);
}

export default async function TrueSsmLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	setRequestLocale(resolved);
	const t = await getTranslations({ locale: resolved, namespace: "TrueSSM" });
	return (
		<>
			<TrueSsmSchema />
			<FaqSchema
				items={t.raw("faq.items") as { question: string; answer: string }[]}
			/>
			{children}
		</>
	);
}
