import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
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
import { careersFaq } from "@/lib/careers-faq";
import { jobRoles } from "@/lib/careers-data";
import { CAREERS_METADATA, CAREERS_PAGE_PATH } from "@/lib/careers-seo";

const pageMetadata: Metadata = {
	title: { absolute: CAREERS_METADATA.title },
	description: CAREERS_METADATA.description,
	keywords: [...CAREERS_METADATA.keywords],
	alternates: { canonical: CAREERS_PAGE_PATH },
	openGraph: {
		title: CAREERS_METADATA.openGraphTitle,
		description: CAREERS_METADATA.openGraphDescription,
		url: CAREERS_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: CAREERS_METADATA.openGraphTitle,
		description: CAREERS_METADATA.openGraphDescription,
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
	return localizePageMetadata(pageMetadata, CAREERS_PAGE_PATH, resolveAppLocale(locale));
}

export default async function CareersPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<CareersSchema />
			<FaqSchema items={careersFaq} />

			<CareersHero />
			<CareersJobs roles={jobRoles} />
			<CareersCulture />
			<CareersProcess />
			<CareersFaq />
			<CareersCta />
		</>
	);
}
