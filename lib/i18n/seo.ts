import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import {
	DEFAULT_LOCALE,
	ZH_HREFLANG_CN,
	localizePath,
	ogLocale,
} from "@/lib/i18n/config";

function normalizePath(path: string): string {
	if (path === "" || path === "/") return "/";
	return path.startsWith("/") ? path : `/${path}`;
}

export function buildAlternates(
	path: string,
	locale: AppLocale,
): NonNullable<Metadata["alternates"]> {
	const normalized = normalizePath(path);
	const enPath = normalized;
	const msPath = localizePath(normalized, "ms");
	const zhPath = localizePath(normalized, "zh");

	return {
		canonical: localizePath(normalized, locale),
		languages: {
			"en-MY": enPath,
			"ms-MY": msPath,
			"zh-Hans": zhPath,
			[ZH_HREFLANG_CN]: zhPath,
			"x-default": enPath,
		},
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

	return {
		...metadata,
		...extra,
		openGraph: {
			...metadata.openGraph,
			locale: ogLocaleFor(locale),
		},
	};
}
