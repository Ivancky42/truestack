/**
 * Canonical site origin for absolute URLs in JSON-LD and similar.
 */
export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

/**
 * Preferred Google sitename (`og:site_name` + WebSite schema `name`).
 * Distinct from the short brand used in title templates ("Truestack").
 * @see https://developers.google.com/search/docs/appearance/site-names
 */
export const siteName = "Truestack Technologies";

/** Short brand used in `<title>` templates and as a sitename fallback. */
export const siteNameShort = "Truestack";

/**
 * Ordered sitename fallbacks for WebSite.alternateName.
 * Google requires the domain in all-lowercase as the last-resort option.
 */
export const siteNameAlternates = [siteNameShort, "truestack.my"] as const;

export const legalName = "Truestack Technologies Sdn. Bhd.";

/**
 * Default Open Graph / Twitter image: site favicon (square).
 * metadataBase in root layout turns the relative path into an absolute URL.
 * Prefer twitter.card "summary" (not summary_large_image) with this asset.
 */
export const defaultOgImage = {
  url: "/truestack-favicon.png",
  width: 250,
  height: 250,
  alt: siteName,
} as const;
