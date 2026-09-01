import type { NextConfig } from "next";

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
		];
	},
};

export default nextConfig;
