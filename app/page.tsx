import type { Metadata } from "next";
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
			/>
		</>
	);
}
