/**
 * Canonical site origin for absolute URLs in JSON-LD and similar.
 */
export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

/**
 * Default Open Graph / Twitter image: site favicon (square).
 * metadataBase in root layout turns the relative path into an absolute URL.
 * Prefer twitter.card "summary" (not summary_large_image) with this asset.
 */
export const defaultOgImage = {
  url: "/truestack-favicon.png",
  width: 250,
  height: 250,
  alt: "Truestack",
} as const;
