import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { CareersHero } from "@/components/sections/careers-hero";
import { CareersJobs } from "@/components/sections/careers-jobs";
import { CareersCulture } from "@/components/sections/careers-culture";
import { CareersProcess } from "@/components/sections/careers-process";
import { CareersFaq } from "@/components/sections/careers-faq";
import { CareersCta } from "@/components/sections/careers-cta";
import { CareersSchema } from "@/components/seo/careers-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { jobRoles } from "@/lib/careers-data";
import { CAREERS_KEYWORDS, CAREERS_PAGE_PATH } from "@/lib/careers-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({ locale: resolved, namespace: "Careers" });
	const pageMetadata: Metadata = {
		title: { absolute: t("meta.title") },
		description: t("meta.description"),
		keywords: [...CAREERS_KEYWORDS],
		alternates: { canonical: CAREERS_PAGE_PATH },
		openGraph: {
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			url: CAREERS_PAGE_PATH,
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
	return localizePageMetadata(pageMetadata, CAREERS_PAGE_PATH, resolved);
}

export default async function CareersPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("Careers");
	const faqItems = t.raw("faq.items") as {
		question: string;
		answer: string;
	}[];
	return (
		<>
			<CareersSchema />
			<FaqSchema items={faqItems} />

			<PageMessages namespaces={["Careers"]}>
				<CareersHero />
				<CareersJobs roles={jobRoles} />
				<CareersCulture />
				<CareersProcess />
				<CareersFaq />
				<CareersCta />
			</PageMessages>
		</>
	);
}
