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

	const staticPaths: Array<{
		path: string;
		changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
		priority: number;
	}> = [
		{ path: "/", changeFrequency: "weekly", priority: 1 },
		{ path: "/about", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/contact", changeFrequency: "monthly", priority: 0.9 },
		{
			path: "/services/account-management",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			path: "/services/angkasa-pba",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			path: "/services/digital-license",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			path: "/services/software-development",
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			path: "/services/p2p-software-development",
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{ path: "/trueidentity", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/truessm", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/truekredit", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/truesyariah", changeFrequency: "monthly", priority: 0.9 },
		{ path: "/work", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/ezdana", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/landstore", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/cashsouk", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/work/eviebikes", changeFrequency: "monthly", priority: 0.7 },
		{ path: "/careers", changeFrequency: "weekly", priority: 0.8 },
		{ path: "/cybersecurity", changeFrequency: "yearly", priority: 0.3 },
		{ path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
		{ path: "/pdpa", changeFrequency: "yearly", priority: 0.3 },
		{ path: "/terms", changeFrequency: "yearly", priority: 0.3 },
	];

	const lastModified = new Date();
	const staticEntries = staticPaths.flatMap(({ path, changeFrequency, priority }) =>
		localizedEntries(path, { lastModified, changeFrequency, priority }),
	);

	let postEntries: MetadataRoute.Sitemap = [];
	try {
		const posts = await getInsightSitemapEntries();
		postEntries = (Array.isArray(posts) ? posts : []).flatMap((post) =>
			localizedEntries(`/insights/${post.slug}`, {
				lastModified: sitemapDate(post.updatedAt),
				changeFrequency: "monthly",
				priority: 0.7,
			}),
		);
	} catch {
		postEntries = [];
	}

	return [
		...staticEntries,
		...localizedEntries("/insights", {
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		}),
		...postEntries,
	];
}
