import type { MetadataRoute } from "next";
import { getInsightSitemapEntries } from "@/lib/insights/data";
import { LOCALES, hreflangAlternates, localizePath } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const revalidate = 3600;

const ENGLISH_ONLY_PATHS = new Set([
	"/cybersecurity",
	"/privacy",
	"/pdpa",
	"/terms",
	"/insights",
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
	if (ENGLISH_ONLY_PATHS.has(path) || path.startsWith("/insights/")) {
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
				lastModified: post.updatedAt,
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
