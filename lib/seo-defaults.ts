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

/** SSM company number as published in the footer. */
export const orgRegistrationNumber = "202501058714 (1660120-X)";

export const orgEmail = "hello@truestack.my";

/** Local display format used on Contact and elsewhere. */
export const orgPhoneDisplay = "016-461 4919";

/** E.164 for schema / tel: links. */
export const orgPhoneE164 = "+60164614919";

/** WhatsApp `wa.me` number (country code, no plus). */
export const orgWhatsAppNumber = "60164614919";

export const orgLinkedInUrl =
	"https://www.linkedin.com/company/truestack-technologies/";

export const orgAddress = {
	streetAddress: "C-13-01, KL Trillion, No. 338, Jalan Tun Razak",
	addressLocality: "Kuala Lumpur",
	addressRegion: "Wilayah Persekutuan Kuala Lumpur",
	postalCode: "50400",
	addressCountry: "MY",
} as const;

/** Visible footer lines — keep in sync with `orgAddress`. */
export const orgAddressLines = [
	"C-13-01, KL Trillion",
	"No. 338, Jalan Tun Razak",
	"50400 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
] as const;

/**
 * Square mark for Organization.logo / Knowledge Panel.
 * Google requires ≥112×112px, crawlable, and suitable on a white background.
 */
export const orgLogo = {
	url: "/truestack-favicon.png",
	width: 250,
	height: 250,
} as const;

/**
 * Default Open Graph / Twitter image: site favicon (square).
 * metadataBase in root layout turns the relative path into an absolute URL.
 * Prefer twitter.card "summary" (not summary_large_image) with this asset.
 */
export const defaultOgImage = {
  url: orgLogo.url,
  width: orgLogo.width,
  height: orgLogo.height,
  alt: siteName,
} as const;
