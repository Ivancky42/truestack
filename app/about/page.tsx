import type { Metadata } from "next";
import Image from "next/image";
import { defaultOgImage } from "@/lib/seo-defaults";
import { ABOUT_METADATA, ABOUT_PAGE_PATH } from "@/lib/about-seo";
import { TechnologyPartners } from "@/components/sections/technology-partners";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutHeroBackdrop } from "@/components/sections/about-hero-backdrop";
import { AboutOfferings } from "@/components/sections/about-offerings";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { AboutSchema } from "@/components/seo/about-schema";
import { SectionBadge } from "@/components/shared/section-badge";
import {
	Shield,
	Handshake,
	Landmark,
	Users,
} from "lucide-react";

export const metadata: Metadata = {
	title: { absolute: ABOUT_METADATA.title },
	description: ABOUT_METADATA.description,
	keywords: [...ABOUT_METADATA.keywords],
	alternates: { canonical: ABOUT_PAGE_PATH },
	openGraph: {
		title: ABOUT_METADATA.openGraphTitle,
		description: ABOUT_METADATA.openGraphDescription,
		url: ABOUT_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: ABOUT_METADATA.openGraphTitle,
		description: ABOUT_METADATA.openGraphDescription,
		images: [defaultOgImage.url],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const reasons = [
	{
		title: "Built for Malaysian regulation",
		description:
			"KPKT licensing, filings, and day-to-day compliance are part of how we design — not an afterthought bolted on after the software ships.",
		icon: Shield,
	},
	{
		title: "Production platforms, not slideware",
		description:
			"TrueKredit™, our infrastructure APIs, and the services around them are already live in the field. You inherit what works — not a prototype.",
		icon: Landmark,
	},
	{
		title: "One team across licence and build",
		description:
			"Compliance advisors and engineers sit in the same delivery. You get a single plan from digital licence to go-live — not a handoff between agencies.",
		icon: Handshake,
	},
	{
		title: "Accountable after launch",
		description:
			"We stay on for renewals, platform support, and the next release. You get continuity — not a project that ends at go-live.",
		icon: Users,
	},
];

export default function AboutPage() {
	return (
		<>
			<AboutSchema />

			<section
				data-nav-theme="dark"
				className="relative overflow-hidden border-b border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-14 text-white md:py-20 lg:py-24"
			>
				<AboutHeroBackdrop />
				<div className="relative mx-auto max-w-6xl px-6">
					<AboutHero />
				</div>
			</section>

			<AboutOfferings />

			<section className="border-t py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
						<div>
							<SectionBadge
								icon={Handshake}
								text="Why work with us"
							/>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								What you get with Truestack
							</h2>
							<p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
								Clear ownership from licence to live portfolio —
								with technology and compliance that already speak
								Malaysian fintech.
							</p>
							<div className="mt-10 grid gap-8 sm:grid-cols-2">
								{reasons.map((reason) => (
									<div key={reason.title} className="flex gap-4">
										<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
											<reason.icon
												className="h-5 w-5 text-primary"
												aria-hidden
											/>
										</span>
										<div>
											<h3 className="font-display text-lg font-semibold tracking-tight">
												{reason.title}
											</h3>
											<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
												{reason.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="relative aspect-4/5 overflow-hidden rounded-3xl border shadow-sm">
							<Image
								src="/photos/about-team-collaboration.jpg"
								alt="Truestack team collaborating in a bright Kuala Lumpur office"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
							<div
								className="absolute inset-0 bg-primary/10 mix-blend-multiply"
								aria-hidden
							/>
						</div>
					</div>
				</div>
			</section>

			<ExpertiseSection />

			<TechnologyPartners />

			<ConsultationCta
				heading="Ready to map your next move?"
				body="Whether you need a digital KPKT licence, a lending platform, or infrastructure APIs — book a free consultation and we will help you see the path clearly."
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
