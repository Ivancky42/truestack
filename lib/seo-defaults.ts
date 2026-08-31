/**
 * Canonical public origin for absolute URLs (canonical, sitemap, robots,
 * JSON-LD, og:url). Live traffic lands on www — Vercel 307s the apex there —
 * so every published URL uses www even if NEXT_PUBLIC_SITE_URL is still the apex.
 * Preview / non-production hosts (e.g. *.vercel.app) are left unchanged.
 */
const PRODUCTION_CANONICAL_ORIGIN = "https://www.truestack.my";
const PRODUCTION_HOSTS = new Set(["truestack.my", "www.truestack.my"]);

export function resolveSiteUrl(
	raw: string | undefined = process.env.NEXT_PUBLIC_SITE_URL,
): string {
	if (!raw) return PRODUCTION_CANONICAL_ORIGIN;
	try {
		const url = new URL(raw);
		if (PRODUCTION_HOSTS.has(url.hostname)) {
			return PRODUCTION_CANONICAL_ORIGIN;
		}
		return url.origin;
	} catch {
		return PRODUCTION_CANONICAL_ORIGIN;
	}
}

export const siteUrl = resolveSiteUrl();

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
	"https://www.linkedin.com/company/truestack-technologies";

export const orgCrunchbaseUrl =
	"https://www.crunchbase.com/organization/truestack-technologies-sdn-bhd";

export const orgGitHubUrl = "https://github.com/Malcan-Technologies";

/** Live Capterra product listing for TrueKredit. */
export const orgCapterraUrl =
	"https://www.capterra.com/p/10181847/TrueKredit/";

/**
 * Verified public third-party profiles for Organization.sameAs.
 * Only include live listings — do not invent unpublished directory URLs.
 */
export const orgSameAs = [
	orgCrunchbaseUrl,
	orgLinkedInUrl,
	orgGitHubUrl,
	orgCapterraUrl,
] as const;

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
 * Default Open Graph / Twitter image: 1200×630 brand lockup
 * (`public/og.png`, composited from the existing wordmark).
 * metadataBase in root layout turns the relative path into an absolute URL.
 * Pair with twitter.card "summary_large_image".
 */
export const defaultOgImage = {
	url: "/og.png",
	width: 1200,
	height: 630,
	alt: siteName,
} as const;

/** Twitter card type for the default 1200×630 OG image. */
export const defaultTwitterCard = "summary_large_image" as const;
