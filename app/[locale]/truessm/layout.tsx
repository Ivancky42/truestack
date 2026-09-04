import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { TrueSsmSchema } from "@/components/seo/truessm-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { truessmFaq } from "@/lib/truessm-faq";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { TRUESSM_METADATA, TRUESSM_PAGE_PATH } from "@/lib/truessm-seo";

const pageMetadata: Metadata = {
	title: { absolute: TRUESSM_METADATA.title },
	description: TRUESSM_METADATA.description,
	keywords: [...TRUESSM_METADATA.keywords],
	alternates: { canonical: TRUESSM_PAGE_PATH },
	openGraph: {
		title: TRUESSM_METADATA.openGraphTitle,
		description: TRUESSM_METADATA.openGraphDescription,
		url: TRUESSM_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: TRUESSM_METADATA.openGraphTitle,
		description: TRUESSM_METADATA.openGraphDescription,
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(
		pageMetadata,
		TRUESSM_PAGE_PATH,
		resolveAppLocale(locale),
	);
}

export default async function TrueSsmLayout({
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
			<TrueSsmSchema />
			<FaqSchema items={truessmFaq} />
			{children}
		</>
	);
}
