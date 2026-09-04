import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { pickProofStudiesByTitles } from "@/lib/case-studies-data";
import { getInsightPosts } from "@/lib/insights/data";
import type { InsightPostSummary } from "@/lib/insights/types";
import { FaqSchema } from "@/components/seo/faq-schema";
import { HomeSchema } from "@/components/seo/home-schema";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { HomepageLogoCloud } from "@/components/sections/homepage-logo-cloud";
import { HomepageSolutions } from "@/components/sections/homepage-solutions";
import { HomepageTrueKredit } from "@/components/sections/homepage-truekredit";
import { HomepageCore } from "@/components/sections/homepage-core";
import { HomepageTrust } from "@/components/sections/homepage-trust";
import { HomepageInsights } from "@/components/sections/homepage-insights";
import { SuccessStoriesProof } from "@/components/sections/success-stories-proof";
import { ConsultationCta } from "@/components/sections/consultation-cta";

const LATEST_INSIGHTS = 6;

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({ locale: resolved, namespace: "Home" });
	const title = t("meta.title");
	const description = t("meta.description");

	const pageMetadata: Metadata = {
		title: {
			absolute: `${title} | Truestack`,
		},
		description,
		alternates: { canonical: "/" },
		openGraph: {
			title: `${title} | Truestack`,
			description,
			url: "/",
			type: "website",
			locale: "en_MY",
			siteName,
			images: [defaultOgImage],
		},
		twitter: {
			card: defaultTwitterCard,
			title: `${title} | Truestack`,
			description,
			images: [defaultOgImage.url],
		},
	};

	return localizePageMetadata(pageMetadata, "/", resolved);
}

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("Home");
	const faq = t.raw("faq.items") as { question: string; answer: string }[];
	let latestInsights: InsightPostSummary[] = [];
	try {
		const posts = await getInsightPosts();
		latestInsights = (Array.isArray(posts) ? posts : []).slice(
			0,
			LATEST_INSIGHTS,
		);
	} catch {
		latestInsights = [];
	}

	return (
		<>
			<HomeSchema />
			<FaqSchema items={faq} />
			<PageMessages namespaces={["Home", "WorkStudies"]}>
				<HomepageHero />
				<HomepageLogoCloud />
				<HomepageSolutions />
				<HomepageTrueKredit />
				<HomepageCore />
				<HomepageTrust />
				<SuccessStoriesProof
					id="work"
					studies={pickProofStudiesByTitles([
						"ezdana",
						"CashSouk",
						"PinjoCep",
						"Proficient Premium",
					])}
					eyebrow={t("work.eyebrow")}
					title={t("work.title")}
					subtitle=""
					viewAllLabel={t("work.viewAll")}
					columns={4}
					align="start"
				/>
				<HomepageInsights posts={latestInsights} />
				<ConsultationCta
					heading={t("cta.heading")}
					body={t("cta.body")}
					secondary={{
						href: "/services/digital-license",
						label: t("cta.secondary"),
					}}
				/>
			</PageMessages>
		</>
	);
}
