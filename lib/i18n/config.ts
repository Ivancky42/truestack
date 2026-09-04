import type { AppLocale } from "@/i18n/routing";

export const LOCALES = ["en", "ms", "zh"] as const satisfies readonly AppLocale[];
export const DEFAULT_LOCALE: AppLocale = "en";

export const label: Record<AppLocale, string> = {
	en: "English",
	ms: "Bahasa Malaysia",
	zh: "中文",
};

export const shortLabel: Record<AppLocale, string> = {
	en: "EN",
	ms: "BM",
	zh: "中文",
};

export const htmlLang: Record<AppLocale, string> = {
	en: "en",
	ms: "ms",
	zh: "zh-CN",
};

export const hreflang: Record<AppLocale, string> = {
	en: "en",
	ms: "ms",
	zh: "zh-Hans",
};

/** Extra hreflang emitted for Chinese pages (Baidu / mainland China). */
export const ZH_HREFLANG_CN = "zh-CN";

/**
 * The full hreflang set for an indexable path, keyed by hreflang value.
 * `x-default` points at English. Used by both page metadata and the sitemap so
 * the two never drift.
 */
export function hreflangAlternates(
	path: string,
	toUrl: (path: string) => string = (p) => p,
): Record<string, string> {
	const en = toUrl(localizePath(path, "en"));
	const zh = toUrl(localizePath(path, "zh"));
	return {
		[hreflang.en]: en,
		[hreflang.ms]: toUrl(localizePath(path, "ms")),
		[hreflang.zh]: zh,
		[ZH_HREFLANG_CN]: zh,
		"x-default": en,
	};
}

export const ogLocale: Record<AppLocale, string> = {
	en: "en_MY",
	ms: "ms_MY",
	zh: "zh_CN",
};

export const inLanguage: Record<AppLocale, string> = {
	en: "en-MY",
	ms: "ms-MY",
	zh: "zh-CN",
};

export const LOCALE_COOKIE = "ts_locale";
export const LOCALE_HINT_COOKIE = "ts_locale_hint";

export function isAppLocale(value: string): value is AppLocale {
	return (LOCALES as readonly string[]).includes(value);
}

export function resolveAppLocale(value: string): AppLocale {
	return isAppLocale(value) ? value : DEFAULT_LOCALE;
}

export function localizePath(path: string, locale: AppLocale): string {
	const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
	if (locale === DEFAULT_LOCALE) {
		return normalized;
	}
	if (normalized === "/") {
		return `/${locale}`;
	}
	return `/${locale}${normalized}`;
}

