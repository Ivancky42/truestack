import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { ABOUT_METADATA, ABOUT_PAGE_PATH } from "@/lib/about-seo";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/section-header";
import { TechnologyPartners } from "@/components/sections/technology-partners";
import { CoreInfrastructure } from "@/components/sections/core-infrastructure";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutHeroBackdrop } from "@/components/sections/about-hero-backdrop";
import { AboutFaq } from "@/components/sections/about-faq";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { AboutSchema } from "@/components/seo/about-schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Shield,
	Code2,
	Users,
	ArrowRight,
	Landmark,
	Smartphone,
	Cloud,
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

const values = [
	{
		title: "KPKT Expertise",
		description:
			"Deep understanding of Malaysia's KPKT regulatory landscape. We've helped operators navigate compliance and go digital.",
		icon: Shield,
	},
	{
		title: "Modern Tech Stack",
		description:
			"We use battle-tested technologies like Next.js, Flutter, Node.js, and PostgreSQL. Built for performance and maintainability.",
		icon: Code2,
	},
	{
		title: "End-to-End Delivery",
		description:
			"From compliance management to software development and deployment, we handle everything so you can focus on your business.",
		icon: Landmark,
	},
	{
		title: "Collaborative Approach",
		description:
			"We work closely with your team, providing regular updates and adapting to your needs throughout our engagement.",
		icon: Users,
	},
];

// const services = [
//   {
//     title: "KPKT Account Management",
//     description: "License renewals, annual submissions, and regulatory coordination.",
//     icon: ClipboardCheck,
//     href: "/services/account-management",
//     isKpkt: true,
//   },
//   {
//     title: "Digital License Conversion",
//     description: "Transform to a fully digital KPKT-licensed platform in 6 months.",
//     icon: FileCheck,
//     href: "/services/digital-license",
//     isKpkt: true,
//   },
//   {
//     title: "Custom Software Development",
//     description: "Full-stack fintech development for P2P and digital lending platforms.",
//     icon: Code2,
//     href: "/services/software-development",
//     isKpkt: false,
//   },
// ];

export default function AboutPage() {
	return (
		<>
			<AboutSchema />

			{/* Combined Hero + Who We Are */}
			<section
				data-nav-theme="dark"
				className="relative overflow-hidden border-b border-zinc-800 py-14 text-zinc-100 md:py-20 lg:py-24"
			>
				<AboutHeroBackdrop />
				<div className="relative mx-auto max-w-6xl px-6">
					<AboutHero />

					<h2 className="mt-16 text-center text-sm font-semibold uppercase tracking-wide text-zinc-500">
						Our technology
					</h2>
					<div className="mt-8 grid gap-8 md:grid-cols-3">
						<div className="rounded-xl border border-zinc-800/80 bg-zinc-900/45 p-6 shadow-lg shadow-black/20 backdrop-blur-md">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
								<Code2 className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-zinc-100">
								Our Platforms
							</h3>
							<p className="text-zinc-400">
								<strong className="font-semibold text-zinc-100">
									TrueKredit™
								</strong>{" "}
								— loan management systems, and{" "}
								<strong className="font-semibold text-zinc-100">
									Truestack Core™
								</strong>{" "}
								— shared infrastructure for e-KYC, payments,
								notifications, and compliance APIs.
							</p>
						</div>

						<div className="rounded-xl border border-zinc-800/80 bg-zinc-900/45 p-6 shadow-lg shadow-black/20 backdrop-blur-md">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
								<Smartphone className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-zinc-100">
								Web & Mobile
							</h3>
							<p className="mb-4 text-zinc-400">
								Modern interfaces and cross-platform apps built
								for performance, maintainability, and scale.
							</p>
							<div className="flex flex-wrap gap-1.5">
								{[
									"Next.js",
									"React",
									"TypeScript",
									"Tailwind CSS",
									"Flutter",
								].map((tech) => (
									<span
										key={tech}
										className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 text-xs text-zinc-400"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="rounded-xl border border-zinc-800/80 bg-zinc-900/45 p-6 shadow-lg shadow-black/20 backdrop-blur-md">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
								<Cloud className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold text-zinc-100">
								Backend & Cloud
							</h3>
							<p className="mb-4 text-zinc-400">
								Battle-tested backend and cloud infrastructure
								for reliable, audit-ready fintech applications.
							</p>
							<div className="flex flex-wrap gap-1.5">
								{[
									"Node.js",
									"Express",
									"PostgreSQL",
									"Redis",
									"AWS Malaysia",
									"Docker",
								].map((tech) => (
									<span
										key={tech}
										className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 text-xs text-zinc-400"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Core Infrastructure */}
			<CoreInfrastructure />

			{/* What We Do */}
			{/* <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="What We Do"
            subtitle="Three core services to help you succeed as a licensed money lender."
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className={`group transition-all hover:shadow-md ${
                  service.isKpkt ? "hover:border-kpkt/50" : "hover:border-primary/50"
                }`}
              >
                <CardHeader>
                  <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg ${
                    service.isKpkt ? "bg-kpkt/10" : "bg-primary/10"
                  }`}>
                    <service.icon className={`h-6 w-6 ${
                      service.isKpkt ? "text-kpkt" : "text-primary"
                    }`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className={`gap-2 px-0 hover:bg-transparent ${
                      service.isKpkt ? "hover:text-kpkt" : "hover:text-primary"
                    }`}
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

			{/* Why Truestack */}
			<section className="border-t py-20">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeader
						title="Why Truestack"
						subtitle="What sets us apart as your compliance and development partner."
						centered
					/>
					<div className="grid gap-6 md:grid-cols-2">
						{values.map((value) => (
							<Card key={value.title}>
								<CardHeader>
									<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
										<value.icon className="h-6 w-6 text-primary" />
									</div>
									<CardTitle className="text-xl">
										{value.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">
										{value.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Technology Partners */}
			<TechnologyPartners />

			<AboutFaq />

			<ConsultationCta
				heading="Ready to get started?"
				body="Whether you need help with compliance, want to go digital, or are building a new platform—book a free consultation and we'll help you map the path."
				secondary={{ href: "/services", label: "View Services" }}
			/>
		</>
	);
}
