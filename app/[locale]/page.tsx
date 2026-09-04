import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { homepageFaq } from "@/lib/homepage-faq";
import { pickProofStudiesByTitles } from "@/lib/case-studies-data";
import { getInsightPosts } from "@/lib/insights/data";
import type { InsightPostSummary } from "@/lib/insights/types";
import { FaqSchema } from "@/components/seo/faq-schema";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { HomepageLogoCloud } from "@/components/sections/homepage-logo-cloud";
import { HomepageSolutions } from "@/components/sections/homepage-solutions";
import { HomepageTrueKredit } from "@/components/sections/homepage-truekredit";
import { HomepageCore } from "@/components/sections/homepage-core";
import { HomepageTrust } from "@/components/sections/homepage-trust";
import { HomepageInsights } from "@/components/sections/homepage-insights";
import { SuccessStoriesProof } from "@/components/sections/success-stories-proof";
import { ConsultationCta } from "@/components/sections/consultation-cta";

const title = "KPKT Licence & Loan Management Software Malaysia";
const description =
	"Truestack gets Malaysian lenders licensed and live — conventional KPKT digital licence or upcoming Shariah digital lending, TrueKredit™ and TrueSyariah™.";

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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(pageMetadata, "/", resolveAppLocale(locale));
}

const LATEST_INSIGHTS = 6;

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
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
			<FaqSchema items={homepageFaq} />
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
				eyebrow="Selected work"
				title="See what live looks like."
				subtitle=""
				viewAllLabel="All success stories"
				columns={4}
				align="start"
			/>
			<HomepageInsights posts={latestInsights} />
			<ConsultationCta
				heading="Ready to launch or scale your lending business?"
				body="Book a free consultation. We will tell you what your licence position allows, what it would take to go digital, and what it costs — before you commit to anything."
				secondary={{
					href: "/services/digital-license",
					label: "Explore Digital Licence",
				}}
			/>
		</>
	);
}
