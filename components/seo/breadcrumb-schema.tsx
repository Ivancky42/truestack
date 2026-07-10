import { siteUrl } from "@/lib/seo-defaults";

export type BreadcrumbSchemaItem = {
	name: string;
	/** Path starting with `/`, or absolute URL */
	path: string;
};

type BreadcrumbSchemaProps = {
	items: readonly BreadcrumbSchemaItem[];
};

function toAbsoluteUrl(path: string): string {
	if (path.startsWith("http://") || path.startsWith("https://")) {
		return path;
	}
	const normalized = path.startsWith("/") ? path : `/${path}`;
	return `${siteUrl}${normalized === "/" ? "" : normalized}`;
}

/**
 * JSON-LD BreadcrumbList schema with absolute item URLs.
 * Validate at: https://validator.schema.org/
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: toAbsoluteUrl(item.path),
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
