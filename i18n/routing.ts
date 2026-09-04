import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: ["en", "ms", "zh"],
	defaultLocale: "en",
	localePrefix: "as-needed",
	localeDetection: false,
	localeCookie: false,
});

export type AppLocale = (typeof routing.locales)[number];
