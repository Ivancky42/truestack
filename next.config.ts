import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const DEFAULT_SANITY_PROJECT_ID = "ms6n63j9";
const DEFAULT_SANITY_DATASET = "production";

/** Allow only Sanity-safe path segments so env values cannot widen the image allowlist. */
function sanityPathSegment(value: string | undefined, fallback: string) {
	return value && /^[a-z0-9][a-z0-9_-]*$/i.test(value) ? value : fallback;
}

const sanityProjectId = sanityPathSegment(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	DEFAULT_SANITY_PROJECT_ID,
);
const sanityDataset = sanityPathSegment(
	process.env.NEXT_PUBLIC_SANITY_DATASET,
	DEFAULT_SANITY_DATASET,
);

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: `/images/${sanityProjectId}/${sanityDataset}/**`,
			},
		],
	},
	async redirects() {
		return [
			// Apex → www must be permanent (308) so link equity consolidates.
			// Vercel project-domain redirects default to 307 and win if still
			// set; keep www as the assigned production host and 308 here.
			{
				source: "/",
				has: [{ type: "host", value: "truestack.my" }],
				destination: "https://www.truestack.my/",
				permanent: true,
			},
			{
				source: "/:path*",
				has: [{ type: "host", value: "truestack.my" }],
				destination: "https://www.truestack.my/:path*",
				permanent: true,
			},
			{
				source: "/services",
				destination: "/services/digital-license",
				permanent: true,
			},
			// Legacy/audit short URLs — live page is /services/digital-license
			{
				source: "/digital-license",
				destination: "/services/digital-license",
				permanent: true,
			},
			{
				source: "/digital-licence",
				destination: "/services/digital-license",
				permanent: true,
			},
			{
				source: "/:locale(ms|zh|ru)/services",
				destination: "/:locale/services/digital-license",
				permanent: true,
			},
			{
				source: "/:locale(ms|zh|ru)/digital-license",
				destination: "/:locale/services/digital-license",
				permanent: true,
			},
			{
				source: "/:locale(ms|zh|ru)/digital-licence",
				destination: "/:locale/services/digital-license",
				permanent: true,
			},
		];
	},
};

export default withNextIntl(nextConfig);
