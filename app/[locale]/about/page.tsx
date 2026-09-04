import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import {
	defaultOgImage,
	defaultTwitterCard,
	siteName,
} from "@/lib/seo-defaults";
import { ABOUT_METADATA, ABOUT_PAGE_PATH } from "@/lib/about-seo";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { AboutBeliefs } from "@/components/sections/about-beliefs";
import { AboutHowWeWork } from "@/components/sections/about-how-we-work";
import { AboutOffice } from "@/components/sections/about-office";
import { AboutCareers } from "@/components/sections/about-careers";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { AboutSchema } from "@/components/seo/about-schema";

const pageMetadata: Metadata = {
	title: { absolute: ABOUT_METADATA.title },
	description: ABOUT_METADATA.description,
	keywords: [...ABOUT_METADATA.keywords],
	alternates: { canonical: ABOUT_PAGE_PATH },
	openGraph: {
		title: ABOUT_METADATA.openGraphTitle,
		description: ABOUT_METADATA.openGraphDescription,
		url: ABOUT_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: ABOUT_METADATA.openGraphTitle,
		description: ABOUT_METADATA.openGraphDescription,
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
	return localizePageMetadata(pageMetadata, ABOUT_PAGE_PATH, resolveAppLocale(locale));
}

export default async function AboutPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<AboutSchema />

			<AboutHero />
			<AboutStory />
			<AboutBeliefs />
			<AboutHowWeWork />
			<AboutOffice />
			<AboutCareers />

			<ConsultationCta
				heading="Tell us what you're building."
				body="A licence, a lending platform, a P2P marketplace, or an integration you would rather not build twice. Book a free consultation and we will tell you honestly what it takes."
				primary={{
					href: "/contact?subject=About",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: "/work",
					label: "See our work",
				}}
			/>
		</>
	);
}
