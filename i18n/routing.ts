import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ms", "zh"],
	defaultLocale: "en",
	localePrefix: "as-needed",
	localeDetection: false,
	localeCookie: false,
	// hreflang is emitted per page in <head> (lib/i18n/seo.ts) and in the
	// sitemap. next-intl's Link header would advertise a different key set and
	// list /ms + /zh alternates for English-only (noindex) surfaces.
	alternateLinks: false,
});

export type AppLocale = (typeof routing.locales)[number];
