import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
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
import type { InsightPostSummary } from "@/lib/insights/types";

const INSIGHTS_PATH = "/insights";

const INSIGHTS_TITLE = "Insights: Fintech, Software & Compliance in Malaysia";
const INSIGHTS_DESCRIPTION =
	"Notes from the Truestack team on KPKT licensing, lending and software work in Malaysia — the questions we keep answering for owners and compliance teams.";

const pageMetadata: Metadata = {
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(pageMetadata, INSIGHTS_PATH, resolveAppLocale(locale), "english-only");
}

export const revalidate = 3600;

export default async function InsightsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("InsightsChrome");
	const tCommon = await getTranslations("Common");
	const faq = t.raw("faq.items") as { question: string; answer: string }[];
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
			<FaqSchema items={faq} inLanguage={inLanguage.en} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{ name: t("nav"), path: "/insights" },
				]}
			/>
			<PageMessages namespaces={["InsightsChrome"]}>
				<InsightsPageContent posts={posts} loadFailed={loadFailed} />
			</PageMessages>
		</>
	);
}
