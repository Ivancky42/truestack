import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import {
	DEFAULT_LOCALE,
	hreflangAlternates,
	localizePath,
	ogAlternateLocales,
	ogLocale,
} from "@/lib/i18n/config";
import { siteUrl } from "@/lib/seo-defaults";

function normalizePath(path: string): string {
	if (path === "" || path === "/") return "/";
	return path.startsWith("/") ? path : `/${path}`;
}

/** Absolute URL for a (possibly locale-prefixed) site path. */
export function absoluteUrl(path: string): string {
	const normalized = normalizePath(path);
	return normalized === "/" ? siteUrl : `${siteUrl}${normalized}`;
}

export function buildAlternates(
	path: string,
	locale: AppLocale,
): NonNullable<Metadata["alternates"]> {
	const normalized = normalizePath(path);
	return {
		canonical: localizePath(normalized, locale),
		languages: hreflangAlternates(normalized),
	};
}

export function englishOnlyMetadata(
	path: string,
	locale: AppLocale,
): Partial<Metadata> {
	const canonical = normalizePath(path);
	if (locale === DEFAULT_LOCALE) {
		return { alternates: { canonical } };
	}
	return {
		alternates: { canonical },
		robots: { index: false, follow: true },
	};
}

export function ogLocaleFor(locale: AppLocale): string {
	return ogLocale[locale];
}

export function ogLocaleAlternatesFor(locale: AppLocale): string[] {
	return ogAlternateLocales(locale);
}

/** Spread an existing metadata object and apply locale alternates + og:locale. */
export function localizePageMetadata(
	metadata: Metadata,
	path: string,
	locale: AppLocale,
	mode: "localized" | "english-only" = "localized",
): Metadata {
	const extra =
		mode === "english-only"
			? englishOnlyMetadata(path, locale)
			: { alternates: buildAlternates(path, locale) };
	// og:url must match the canonical: the locale-prefixed URL on translated
	// pages, the English URL on English-only surfaces.
	const ogUrl =
		mode === "english-only"
			? absoluteUrl(path)
			: absoluteUrl(localizePath(normalizePath(path), locale));

	return {
		...metadata,
		...extra,
		openGraph: {
			...metadata.openGraph,
			url: ogUrl,
			locale: ogLocaleFor(locale),
			// Localized pages advertise sibling locales. English-only surfaces
			// stay on a single og:locale — their /ms and /zh URLs are noindex.
			...(mode === "localized"
				? { alternateLocale: ogLocaleAlternatesFor(locale) }
				: {}),
		},
	};
}
