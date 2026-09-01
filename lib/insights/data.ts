import {cache} from "react";
import {sanityClient} from "@/lib/insights/client";
import {insightsTag} from "@/lib/insights/config";
import {
	INSIGHT_LLMS_QUERY,
	INSIGHT_POST_QUERY,
	INSIGHT_POSTS_QUERY,
	INSIGHT_SITEMAP_QUERY,
	INSIGHT_SLUGS_QUERY,
} from "@/lib/insights/queries";
import type {
	InsightLlmsEntry,
	InsightPost,
	InsightPostSummary,
	InsightSitemapEntry,
	RelatedProduct,
} from "@/lib/insights/types";

export {imageUrl} from "@/lib/insights/client";

const RELATED_PRODUCTS: Record<string, RelatedProduct> = {
	truekredit: {
		title: "TrueKredit™",
		href: "/truekredit",
		description:
			"Keep borrowers, repayments and KPKT reporting under control in one loan management system.",
	},
	truesyariah: {
		title: "TrueSyariah™",
		href: "/truesyariah",
		description:
			"Run Tawarruq financing with separate Ta'widh and Gharamah records built into every account.",
	},
	truep2p: {
		title: "TrueP2P™",
		href: "/services/p2p-software-development",
		description:
			"Build an SC-aligned P2P financing platform for your investors and issuers.",
	},
	digitalLicense: {
		title: "KPKT digital licence",
		href: "/services/digital-license",
		description:
			"Move from a branch licence to online money lending with one team from application to launch.",
	},
	accountManagement: {
		title: "KPKT account management",
		href: "/services/account-management",
		description:
			"Stay ahead of licence renewals, permit iklan applications and annual submissions.",
	},
	trueidentity: {
		title: "TrueIdentity™",
		href: "/trueidentity",
		description:
			"Verify customers with MyKad checks, liveness and biometrics hosted in Malaysia.",
	},
	truessm: {
		title: "TrueSSM™",
		href: "/truessm",
		description:
			"Retrieve Malaysian company and business records inside your existing workflow.",
	},
};

type SummaryRecord = Omit<InsightPostSummary, "estimatedReadingMinutes"> & {
	bodyTextLength?: number;
};

type PostRecord = Omit<
	InsightPost,
	"estimatedReadingMinutes" | "relatedProducts"
> & {
	bodyTextLength?: number;
	relatedProductKeys?: string[];
};

const fetchOptions = {
	next: {
		tags: [insightsTag],
		revalidate: 3600,
	},
};

function readingMinutes(bodyTextLength = 0) {
	return Math.max(1, Math.ceil(bodyTextLength / 1000));
}

function normalizeSummary(post: SummaryRecord): InsightPostSummary {
	const {bodyTextLength, ...summary} = post;
	return {
		...summary,
		estimatedReadingMinutes: readingMinutes(bodyTextLength),
	};
}

export async function getInsightPosts(): Promise<InsightPostSummary[]> {
	const posts = await sanityClient.fetch<SummaryRecord[]>(
		INSIGHT_POSTS_QUERY,
		{},
		fetchOptions,
	);
	return (Array.isArray(posts) ? posts : []).map(normalizeSummary);
}

export const getInsightPost = cache(
	async (slug: string): Promise<InsightPost | null> => {
		const post = await sanityClient.fetch<PostRecord | null>(
			INSIGHT_POST_QUERY,
			{slug},
			fetchOptions,
		);
		if (!post) return null;

		const {bodyTextLength, relatedProductKeys, ...content} = post;
		return {
			...content,
			estimatedReadingMinutes: readingMinutes(bodyTextLength),
			relatedProducts: (relatedProductKeys ?? [])
				.map((key) => RELATED_PRODUCTS[key])
				.filter((item): item is RelatedProduct => Boolean(item)),
		};
	},
);

export async function getInsightPostSlugs(): Promise<string[]> {
	const slugs = await sanityClient.fetch<string[]>(
		INSIGHT_SLUGS_QUERY,
		{},
		fetchOptions,
	);
	return (Array.isArray(slugs) ? slugs : []).filter(
		(slug): slug is string => typeof slug === "string" && slug.length > 0,
	);
}

export async function getInsightSitemapEntries(): Promise<
	InsightSitemapEntry[]
> {
	const entries = await sanityClient.fetch<InsightSitemapEntry[]>(
		INSIGHT_SITEMAP_QUERY,
		{},
		fetchOptions,
	);
	return Array.isArray(entries) ? entries : [];
}

export async function getInsightLlmsEntries(): Promise<InsightLlmsEntry[]> {
	const entries = await sanityClient.fetch<InsightLlmsEntry[]>(
		INSIGHT_LLMS_QUERY,
		{},
		fetchOptions,
	);
	return Array.isArray(entries) ? entries : [];
}
