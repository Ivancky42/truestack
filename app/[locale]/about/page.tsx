import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import {
	defaultOgImage,
	defaultTwitterCard,
	siteName,
} from "@/lib/seo-defaults";
import { ABOUT_KEYWORDS, ABOUT_PAGE_PATH } from "@/lib/about-seo";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { AboutBeliefs } from "@/components/sections/about-beliefs";
import { AboutHowWeWork } from "@/components/sections/about-how-we-work";
import { AboutOffice } from "@/components/sections/about-office";
import { AboutCareers } from "@/components/sections/about-careers";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { AboutSchema } from "@/components/seo/about-schema";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({ locale: resolved, namespace: "About" });
	const pageMetadata: Metadata = {
		title: { absolute: t("meta.title") },
		description: t("meta.description"),
		keywords: [...ABOUT_KEYWORDS],
		alternates: { canonical: ABOUT_PAGE_PATH },
		openGraph: {
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			url: ABOUT_PAGE_PATH,
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
	};
	return localizePageMetadata(pageMetadata, ABOUT_PAGE_PATH, resolved);
}

export default async function AboutPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("About");
	const tCommon = await getTranslations("Common");
	return (
		<>
			<AboutSchema />

			<PageMessages namespaces={["About"]}>
				<AboutHero />
				<AboutStory />
				<AboutBeliefs />
				<AboutHowWeWork />
				<AboutOffice />
				<AboutCareers />

				<ConsultationCta
					heading={t("cta.heading")}
					body={t("cta.body")}
					primary={{
						href: "/contact?subject=About",
						label: tCommon("bookConsultation"),
					}}
					secondary={{
						href: "/work",
						label: t("cta.secondary"),
					}}
				/>
			</PageMessages>
		</>
	);
}
