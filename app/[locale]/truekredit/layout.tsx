import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TrueKreditSchema } from "@/components/seo/truekredit-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { truekreditFaq } from "@/lib/truekredit-faq";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { siteName } from "@/lib/seo-defaults";
import {
	TRUEKREDIT_METADATA,
	TRUEKREDIT_PAGE_PATH,
} from "@/lib/truekredit-seo";

const pageMetadata: Metadata = {
	title: { absolute: TRUEKREDIT_METADATA.title },
	description: TRUEKREDIT_METADATA.description,
	keywords: [...TRUEKREDIT_METADATA.keywords],
	alternates: { canonical: TRUEKREDIT_PAGE_PATH },
	openGraph: {
		title: TRUEKREDIT_METADATA.openGraphTitle,
		description: TRUEKREDIT_METADATA.openGraphDescription,
		url: TRUEKREDIT_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [
			{
				url: TRUEKREDIT_METADATA.ogImagePath,
				width: 1536,
				height: 1024,
				alt: TRUEKREDIT_METADATA.ogImageAlt,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: TRUEKREDIT_METADATA.openGraphTitle,
		description: TRUEKREDIT_METADATA.openGraphDescription,
		images: [TRUEKREDIT_METADATA.ogImagePath],
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(
		pageMetadata,
		TRUEKREDIT_PAGE_PATH,
		resolveAppLocale(locale),
	);
}

export default async function TrueKreditLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<TrueKreditSchema />
			<FaqSchema items={truekreditFaq} />
			{children}
		</>
	);
}
