import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { SoftwareDevelopmentSchema } from "@/components/seo/software-development-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { SoftwareDevelopmentPageContent } from "@/components/sections/software-development-page-content";
import { softwareDevelopmentFaq } from "@/lib/software-development-faq";
import {
	SOFTWARE_DEVELOPMENT_METADATA,
	SOFTWARE_DEVELOPMENT_PAGE_PATH,
} from "@/lib/software-development-seo";

const pageMetadata: Metadata = {
	title: { absolute: SOFTWARE_DEVELOPMENT_METADATA.title },
	description: SOFTWARE_DEVELOPMENT_METADATA.description,
	keywords: [...SOFTWARE_DEVELOPMENT_METADATA.keywords],
	alternates: { canonical: SOFTWARE_DEVELOPMENT_PAGE_PATH },
	openGraph: {
		title: SOFTWARE_DEVELOPMENT_METADATA.openGraphTitle,
		description: SOFTWARE_DEVELOPMENT_METADATA.openGraphDescription,
		url: SOFTWARE_DEVELOPMENT_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: SOFTWARE_DEVELOPMENT_METADATA.openGraphTitle,
		description: SOFTWARE_DEVELOPMENT_METADATA.openGraphDescription,
		images: [defaultOgImage.url],
	},
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(pageMetadata, SOFTWARE_DEVELOPMENT_PAGE_PATH, resolveAppLocale(locale));
}

export default async function SoftwareDevelopmentPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<SoftwareDevelopmentSchema />
			<FaqSchema items={softwareDevelopmentFaq} />
			<BreadcrumbSchema
				items={[
					{ name: "Home", path: "/" },
					{
						name: "Custom Software Development",
						path: SOFTWARE_DEVELOPMENT_PAGE_PATH,
					},
				]}
			/>
			<SoftwareDevelopmentPageContent />
		</>
	);
}
