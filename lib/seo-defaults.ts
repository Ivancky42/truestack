/**
 * Canonical site origin for absolute URLs in JSON-LD and similar.
 */
export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

/**
 * Default Open Graph / Twitter image: generated at /og (see app/og/route.tsx).
 * metadataBase in root layout turns relative /og into an absolute URL.
 */
export const defaultOgImage = {
  url: "/og",
  width: 1200,
  height: 630,
  alt: "Truestack — KPKT services and fintech software for Malaysia",
} as const;
