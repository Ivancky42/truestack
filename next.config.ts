import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
