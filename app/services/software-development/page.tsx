import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { SoftwareDevelopmentPageContent } from "@/components/sections/software-development-page-content";

export const metadata: Metadata = {
	title: "Custom Software Development | If You Can Dream It, We Can Build It",
	description:
		"Custom software from first sketch to go-live — web apps, mobile products, platforms, and internal tools. If you can dream it, we can build it.",
	keywords: [
		"custom software development Malaysia",
		"web and mobile app development Malaysia",
		"custom software Malaysia",
		"software development company Malaysia",
		"bespoke software development",
		"product development Malaysia",
	],
	alternates: { canonical: "/services/software-development" },
	openGraph: {
		title: "Custom Software Development | Truestack",
		description:
			"If you can dream it, we can build it. Custom software from first sketch to go-live.",
		url: "/services/software-development",
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "Custom Software Development | Truestack",
		description:
			"If you can dream it, we can build it. Custom software from first sketch to go-live.",
		images: [defaultOgImage.url],
	},
};

export default function SoftwareDevelopmentPage() {
	return <SoftwareDevelopmentPageContent />;
}
