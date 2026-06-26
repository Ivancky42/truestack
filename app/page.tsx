import type { Metadata } from "next";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { CaseStudies } from "@/components/sections/case-studies";
// import { ComplianceSection } from "@/components/sections/compliance-section";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { InfrastructureSection } from "@/components/sections/infrastructure-section";
import { LendingPlatforms } from "@/components/sections/lending-platforms";
import { HomepageLogoCloud } from "@/components/sections/homepage-logo-cloud";

export const metadata: Metadata = {
	alternates: { canonical: "/" },
};

export default function HomePage() {
	return (
		<>
			<HomepageHero />
			<HomepageLogoCloud />
			<WhatWeDo />
			<LendingPlatforms />
			<InfrastructureSection />
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
