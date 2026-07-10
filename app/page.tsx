import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { HomepageHero } from "@/components/sections/homepage-hero";
// import { ComplianceSection } from "@/components/sections/compliance-section";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { InfrastructureSection } from "@/components/sections/infrastructure-section";
import { LendingPlatforms } from "@/components/sections/lending-platforms";
import { HomepageServices } from "@/components/sections/homepage-services";
import { HomepageLogoCloud } from "@/components/sections/homepage-logo-cloud";
import { SuccessStoriesProof } from "@/components/sections/success-stories-proof";
import { pickProofStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = {
	title: {
		absolute: "Truestack — KPKT Services & Fintech Software for Malaysia",
	},
	description:
		"KPKT digital licence, account management, and lending software for Malaysian money lenders — TrueKredit™, TrueSyariah™, TrueP2P™. Book a free consultation.",
	alternates: { canonical: "/" },
	openGraph: {
		title: "Truestack — KPKT Services & Fintech Software for Malaysia",
		description:
			"KPKT digital licence, account management, and lending software for Malaysian money lenders — TrueKredit™, TrueSyariah™, TrueP2P™. Book a free consultation.",
		url: "/",
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "Truestack — KPKT Services & Fintech Software for Malaysia",
		description:
			"KPKT digital licence, account management, and lending software for Malaysian money lenders — TrueKredit™, TrueSyariah™, TrueP2P™. Book a free consultation.",
		images: [defaultOgImage.url],
	},
};

export default function HomePage() {
	return (
		<>
			<HomepageHero />
			<HomepageLogoCloud />
			<WhatWeDo />
			<LendingPlatforms />
			<InfrastructureSection />
			<HomepageServices />
			{/* <ComplianceSection /> */}
			<SuccessStoriesProof
				studies={pickProofStudies({ limit: 6 })}
				title="See what live looks like."
				subtitle="Lenders and fintechs we've taken from build to go-live — so you can see the outcome before you commit."
				columns={3}
			/>
			<ConsultationCta
				heading="Ready to launch or scale your lending business?"
				body="Book a free consultation and we'll show you how to launch or scale with compliant, modern technology—KPKT licensing, account management, and lending software."
				secondary={{
					href: "/services/digital-license",
					label: "Explore Digital License",
				}}
				extraLinks={[
					{ href: "/truekredit", label: "TrueKredit™" },
					{ href: "/truesyariah", label: "TrueSyariah™" },
					{
						href: "/services/p2p-software-development",
						label: "TrueP2P™",
					},
				]}
			/>
		</>
	);
}
