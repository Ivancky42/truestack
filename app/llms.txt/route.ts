import {getInsightLlmsEntries} from "@/lib/insights/data";
import {buildLlmsTxt} from "@/lib/insights/llms-base";
import type {InsightLlmsEntry} from "@/lib/insights/types";
import {siteName, siteUrl} from "@/lib/seo-defaults";

export const dynamic = "force-static";
export const revalidate = 3600;

const INSIGHTS_INDEX_LINE = `- ${siteUrl}/insights — Insights from ${siteName}: practical articles on Malaysian fintech — KPKT licensing (Lampiran A/B1, iDEAL KPKT), compliance, lending operations, Shariah financing (Tawarruq, Ta'widh, Gharamah), identity and company data checks (TrueIdentity™ e-KYC, TrueSSM™), custom software delivery, and product and company updates.`;

function insightsSection(posts: InsightLlmsEntry[]): string {
	const lines = [
		"## Insights",
		"",
		INSIGHTS_INDEX_LINE,
		...posts.map(
			(post) =>
				`- ${siteUrl}/insights/${post.slug} — ${post.title} (${post.category}). ${post.excerpt}`,
		),
	];
	return lines.join("\n");
}

export async function GET() {
	let posts: InsightLlmsEntry[] = [];
	try {
		const entries = await getInsightLlmsEntries();
		posts = Array.isArray(entries) ? entries : [];
	} catch {
		posts = [];
	}

	const base = siteUrl.replace(/\/$/, "");
	const languagesBlock = [
		"## Languages",
		"",
		`- English (default): ${base}/`,
		`- Bahasa Malaysia: ${base}/ms/`,
		`- 中文 (Simplified Chinese): ${base}/zh/`,
		"<!-- zh summary: Phase 2b -->",
		"",
	].join("\n");

	const assembled = buildLlmsTxt(insightsSection(posts));
	const body = assembled.includes("## Main pages\n")
		? assembled.replace("## Main pages\n", `${languagesBlock}## Main pages\n`)
		: `${assembled.replace(/\s*$/, "\n\n")}${languagesBlock}`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
