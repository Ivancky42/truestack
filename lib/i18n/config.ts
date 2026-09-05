import type { AppLocale } from "@/i18n/routing";

export const LOCALES = ["en", "ms", "zh", "ru"] as const satisfies readonly AppLocale[];
export const DEFAULT_LOCALE: AppLocale = "en";

export const label: Record<AppLocale, string> = {
	en: "English",
	ms: "Bahasa Malaysia",
	zh: "中文",
	ru: "Русский",
};

export const shortLabel: Record<AppLocale, string> = {
	en: "EN",
	ms: "BM",
	zh: "中文",
	ru: "RU",
};

export const htmlLang: Record<AppLocale, string> = {
	en: "en",
	ms: "ms",
	zh: "zh-CN",
	ru: "ru",
};

export const hreflang: Record<AppLocale, string> = {
	en: "en",
	ms: "ms",
	zh: "zh-Hans",
	ru: "ru",
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
		[hreflang.ru]: toUrl(localizePath(path, "ru")),
		"x-default": en,
	};
}

export const ogLocale: Record<AppLocale, string> = {
	en: "en_MY",
	ms: "ms_MY",
	zh: "zh_CN",
	ru: "ru_RU",
};

/** `og:locale:alternate` values for every locale except the current page. */
export function ogAlternateLocales(locale: AppLocale): string[] {
	return LOCALES.filter((item) => item !== locale).map((item) => ogLocale[item]);
}

export const inLanguage: Record<AppLocale, string> = {
	en: "en-MY",
	ms: "ms-MY",
	zh: "zh-CN",
	ru: "ru-RU",
};

/**
 * schema.org `availableLanguage` for Organization / WebSite / ContactPoint.
 * BCP-47 codes sit on `alternateName` so validators accept both a human name
 * and `en` / `ms` / `zh-CN` / `ru`.
 */
export const availableLanguages = [
	{ "@type": "Language" as const, name: "English", alternateName: "en" },
	{ "@type": "Language" as const, name: "Malay", alternateName: "ms" },
	{ "@type": "Language" as const, name: "Chinese", alternateName: "zh-CN" },
	{ "@type": "Language" as const, name: "Russian", alternateName: "ru" },
] as const;

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

