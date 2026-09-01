import type { Metadata } from "next";
import {
	defaultOgImage,
	defaultTwitterCard,
	siteName,
} from "@/lib/seo-defaults";
import { InsightsPageContent } from "@/components/sections/insights-page-content";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { InsightsSchema } from "@/components/seo/insights-schema";
import { getInsightPosts } from "@/lib/insights/data";
import { insightsFaq } from "@/lib/insights/faq";
import type { InsightPostSummary } from "@/lib/insights/types";

const INSIGHTS_PATH = "/insights";

const INSIGHTS_TITLE = "Insights: Fintech, Software & Compliance in Malaysia";
const INSIGHTS_DESCRIPTION =
	"Practical perspectives from the Truestack team — KPKT licensing, compliance, lending, identity checks, software delivery and product updates in Malaysia.";

export const metadata: Metadata = {
	title: INSIGHTS_TITLE,
	description: INSIGHTS_DESCRIPTION,
	keywords: [
		"Malaysian fintech insights",
		"KPKT licensing insights",
		"money lender compliance Malaysia",
		"lending operations Malaysia",
		"fintech software development Malaysia",
		"e-KYC and SSM checks Malaysia",
		"Shariah financing Malaysia",
	],
	alternates: { canonical: INSIGHTS_PATH },
	openGraph: {
		title: INSIGHTS_TITLE,
		description: INSIGHTS_DESCRIPTION,
		url: INSIGHTS_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: INSIGHTS_TITLE,
		description: INSIGHTS_DESCRIPTION,
		images: [defaultOgImage.url],
	},
};

export const revalidate = 3600;

export default async function InsightsPage() {
	let posts: InsightPostSummary[] = [];
	let loadFailed = false;
	try {
		const entries = await getInsightPosts();
		posts = Array.isArray(entries) ? entries : [];
	} catch {
		loadFailed = true;
	}

	return (
		<>
			<InsightsSchema />
			<FaqSchema items={insightsFaq} />
			<BreadcrumbSchema
				items={[
					{ name: "Home", path: "/" },
					{ name: "Insights", path: "/insights" },
				]}
			/>
			<InsightsPageContent posts={posts} loadFailed={loadFailed} />
		</>
	);
}
