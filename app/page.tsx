import type { Metadata } from "next";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { P2PPromo } from "@/components/sections/p2p-promo";
import { CaseStudies } from "@/components/sections/case-studies";
// import { ComplianceSection } from "@/components/sections/compliance-section";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { InfrastructureSection } from "@/components/sections/infrastructure-section";
import { TrueKreditPromo } from "@/components/sections/truekredit-promo";
import { TrueSyariahPromo } from "@/components/sections/truesyariah-promo";
import LogoCloud1 from "@/components/logo-cloud-1";

export const metadata: Metadata = {
	alternates: { canonical: "/" },
};

export default function HomePage() {
	return (
		<>
			<HomepageHero />
			<LogoCloud1
				variant="clients"
				showCategories={false}
				compact
				layout="marquee"
			/>
			<WhatWeDo />
			<TrueKreditPromo />
			<TrueSyariahPromo />
			<InfrastructureSection />
			<P2PPromo />
			<ExpertiseSection />
			{/* <ComplianceSection /> */}
			<CaseStudies showAndMoreCard />
			<ConsultationCta
				heading="Ready to launch or scale your lending business?"
				body="Book a free consultation and we'll show you how to launch or scale with compliant, modern technology—KPKT licensing, account management, and lending software."
				secondary={{ href: "/services", label: "Explore Services" }}
			/>
		</>
	);
}
