import { useLocale } from "next-intl";
import type { AppLocale } from "@/i18n/routing";
import { localizePath, resolveAppLocale } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/seo-defaults";

export type BreadcrumbSchemaItem = {
	name: string;
	/** Unprefixed site path starting with `/`, or absolute URL */
	path: string;
};

type BreadcrumbSchemaProps = {
	items: readonly BreadcrumbSchemaItem[];
	/**
	 * Locale used to prefix item paths. Defaults to the current locale so the
	 * breadcrumb URLs match the page's canonical (`/ms/...`, `/zh/...`). Pass
	 * `"en"` on English-only surfaces whose canonical is the English URL.
	 */
	locale?: AppLocale;
};

function toAbsoluteUrl(path: string): string {
	if (path.startsWith("http://") || path.startsWith("https://")) {
		return path;
	}
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${siteUrl}${normalized === "/" ? "" : normalized}`;
}

/**
 * JSON-LD BreadcrumbList schema with absolute, locale-prefixed item URLs.
 * Validate at: https://validator.schema.org/
 */
export function BreadcrumbSchema({ items, locale }: BreadcrumbSchemaProps) {
	const current = resolveAppLocale(useLocale());
	const target = locale ?? current;
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: toAbsoluteUrl(
				/^https?:\/\//.test(item.path)
					? item.path
					: localizePath(item.path, target),
			),
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
