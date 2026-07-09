import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { WorkPageContent } from "@/components/sections/work-page-content";

export const metadata: Metadata = {
	title: "Work",
	description:
		"See live Truestack work in Malaysia — digital KPKT licence conversions, enterprise loan management, and regulated fintech platforms taken from licence to go-live.",
	keywords: [
		"Truestack success stories",
		"Truestack work",
		"fintech projects Malaysia",
		"KPKT success stories",
		"KPKT digital license",
		"digital lending software Malaysia",
		"P2P lending platform Malaysia",
		"CreditXpress",
		"Andas Capital",
		"money lending platform",
	],
	alternates: { canonical: "/work" },
	openGraph: {
		title: "Work - Truestack",
		description:
			"Selected work from Truestack in Malaysia — digital KPKT conversions, enterprise lending systems, and regulated fintech platforms delivered end to end.",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "Work - Truestack",
		description:
			"Selected work from Truestack in Malaysia — digital KPKT conversions, enterprise lending systems, and regulated fintech platforms delivered end to end.",
		images: [defaultOgImage.url],
	},
};

export default function WorkPage() {
	return <WorkPageContent />;
}
