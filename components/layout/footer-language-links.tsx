"use client";

import NextLink from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import {
	ENGLISH_ONLY_PATHS,
	hreflang,
	htmlLang,
	isAppLocale,
	label,
	localizePath,
	LOCALE_COOKIE,
	LOCALE_HINT_COOKIE,
	LOCALES,
} from "@/lib/i18n/config";
import { setCookie } from "@/lib/i18n/cookies";
import { cn } from "@/lib/utils";

const LOCALE_MAX_AGE = 31_536_000;
const HINT_MAX_AGE = 2_592_000;

/**
 * Plain `<a href hreflang>` links to the current page in every locale.
 * The header switcher is a button menu that is not in the server HTML, so
 * without these links crawlers only find `/ms`, `/zh` and `/ru` through
 * hreflang and the sitemap. Rendered in the footer on every page.
 * Hrefs are built with `localizePath` (English unprefixed): next-intl's Link
 * with an explicit `locale` would emit `/en/...`, which only redirects.
 * English-only surfaces (legal pages) have no translations, so no links.
 */
export function FooterLanguageLinks({ ariaLabel }: { ariaLabel: string }) {
	const raw = useLocale();
	const current = isAppLocale(raw) ? raw : "en";
	const pathname = usePathname();

	if (ENGLISH_ONLY_PATHS.has(pathname)) return null;

	return (
		<nav aria-label={ariaLabel}>
			<ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
				{LOCALES.map((loc) => (
					<li key={loc}>
						<NextLink
							href={localizePath(pathname, loc)}
							hrefLang={hreflang[loc]}
							lang={htmlLang[loc]}
							aria-current={loc === current ? "true" : undefined}
							onClick={() => {
								setCookie(LOCALE_COOKIE, loc, LOCALE_MAX_AGE);
								setCookie(LOCALE_HINT_COOKIE, "dismissed", HINT_MAX_AGE);
							}}
							className={cn(
								"transition-colors hover:text-primary",
								loc === current
									? "font-medium text-foreground"
									: "text-muted-foreground",
							)}
						>
							{label[loc]}
						</NextLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
