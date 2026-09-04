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
		`- ${siteUrl}/ms/insights — Same Insights index with Bahasa Malaysia chrome. Article bodies stay English; post slugs match the English URLs.`,
		`- ${siteUrl}/zh/insights — Same Insights index with Simplified Chinese chrome. Article bodies stay English; post slugs match the English URLs.`,
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
		"Truestack Technologies（品牌 Truestack）是吉隆坡的金融科技与房屋及地方政府部 (KPKT) 服务公司，协助马来西亚持牌放贷公司申请与管理放贷牌照（含线上放贷 / e-Lending），并提供 TrueKredit™ 贷款管理系统、TrueSyariah™ 伊斯兰教法数字放贷平台、TrueP2P™（按马来西亚证券监督委员会 SC / 认可市场运营商 RMO 要求构建）、TrueIdentity™ e-KYC 与 TrueSSM™ 公司查询。咨询免费、无义务。中文站点：https://www.truestack.my/zh/",
		"",
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
