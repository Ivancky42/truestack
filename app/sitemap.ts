import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { getInsightSitemapEntries } from "@/lib/insights/data";
import { LOCALES, hreflangAlternates, localizePath } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

/**
 * Insights URLs are not hardcoded and not allowlisted. This file asks Sanity
 * for every published `insightPost` (`slug` set, `publishedAt` <= now) via
 * `getInsightSitemapEntries`, then emits en (unprefixed) + /ms + /zh + /ru.
 * Legal pages stay in ENGLISH_ONLY_PATHS (no locale variants).
 *
 * Next.js metadata-route sitemaps are cached by default. `revalidate = 3600`
 * did not refresh production `/sitemap.xml` after Jadual published (Vercel HIT
 * from 15 Sep, 100 URLs). `dynamic` + `connection()` force request-time
 * generation so future posts appear without a redeploy.
 */
export const dynamic = "force-dynamic";

/** Last change to the Insights index chrome itself (route + InsightsChrome messages). */
const INSIGHTS_INDEX_LAST_MODIFIED = "2026-09-21";

const ENGLISH_ONLY_PATHS = new Set([
	"/cybersecurity",
	"/privacy",
	"/pdpa",
	"/terms",
]);

function absoluteUrl(path: string): string {
	if (path === "/") return baseUrl;
	return `${baseUrl}${path}`;
}

function languageAlternates(path: string): Record<string, string> {
	return hreflangAlternates(path, absoluteUrl);
}

function localizedEntries(
	path: string,
	meta: Pick<
		MetadataRoute.Sitemap[number],
		"lastModified" | "changeFrequency" | "priority"
	>,
): MetadataRoute.Sitemap {
	if (ENGLISH_ONLY_PATHS.has(path)) {
		return [
			{
				url: absoluteUrl(path),
				...meta,
			},
		];
	}

	return LOCALES.map((locale) => ({
		url: absoluteUrl(localizePath(path, locale)),
		...meta,
		alternates: {
			languages: languageAlternates(path),
		},
	}));
}

function sitemapDate(value: string | Date | undefined): Date {
	if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
	if (typeof value === "string") {
		const parsed = new Date(value);
		if (!Number.isNaN(parsed.getTime())) return parsed;
	}
	return new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Request-time API: opt this metadata route out of the default static cache.
	await connection();

	// `lastModified` is the date the page's own content last changed (route,
	// its messages namespace, its data file) — not the request time. Google
	// ignores lastmod site-wide when every URL claims "now". Bump the date in
	// the same commit that changes a page's content.
	const staticPaths: Array<{
		path: string;
		lastModified: string;
		changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
		priority: number;
	}> = [
		{ path: "/", lastModified: "2026-09-25", changeFrequency: "weekly", priority: 1 },
		{ path: "/about", lastModified: "2026-09-05", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/contact", lastModified: "2026-09-05", changeFrequency: "monthly", priority: 0.9 },
		{
			path: "/services/account-management",
			lastModified: "2026-09-14",
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			path: "/services/angkasa-pba",
			lastModified: "2026-09-21",
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			path: "/services/digital-license",
			lastModified: "2026-09-21",
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			path: "/services/software-development",
			lastModified: "2026-09-05",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			path: "/services/p2p-software-development",
			lastModified: "2026-09-05",
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{ path: "/trueidentity", lastModified: "2026-09-22", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/truessm", lastModified: "2026-09-22", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/truekredit", lastModified: "2026-09-25", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/truesyariah", lastModified: "2026-09-22", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/work", lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/ezdana", lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/landstore", lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/cashsouk", lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/eviebikes", lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/careers", lastModified: "2026-09-12", changeFrequency: "weekly", priority: 0.8 },
		{ path: "/cybersecurity", lastModified: "2026-09-22", changeFrequency: "yearly", priority: 0.3 },
		{ path: "/privacy", lastModified: "2026-09-22", changeFrequency: "yearly", priority: 0.3 },
		{ path: "/pdpa", lastModified: "2026-09-22", changeFrequency: "yearly", priority: 0.3 },
		{ path: "/terms", lastModified: "2026-09-22", changeFrequency: "yearly", priority: 0.3 },
	];

	const staticEntries = staticPaths.flatMap(
		({ path, lastModified, changeFrequency, priority }) =>
			localizedEntries(path, {
				lastModified: sitemapDate(lastModified),
				changeFrequency,
				priority,
			}),
	);

	let postEntries: MetadataRoute.Sitemap = [];
	// The index changes when a post is published or edited.
	let insightsIndexModified = sitemapDate(INSIGHTS_INDEX_LAST_MODIFIED);
	try {
		const posts = await getInsightSitemapEntries();
		postEntries = (Array.isArray(posts) ? posts : []).flatMap((post) => {
			const lastModified = sitemapDate(post.updatedAt);
			if (lastModified > insightsIndexModified) {
				insightsIndexModified = lastModified;
			}
			return localizedEntries(`/insights/${post.slug}`, {
				lastModified,
				changeFrequency: "monthly",
				priority: 0.7,
			});
		});
	} catch {
		postEntries = [];
	}

	return [
		...staticEntries,
		...localizedEntries("/insights", {
			lastModified: insightsIndexModified,
			changeFrequency: "weekly",
			priority: 0.8,
		}),
		...postEntries,
	];
}
