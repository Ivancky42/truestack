import type { Metadata } from "next";
import Image from "next/image";
import { defaultOgImage } from "@/lib/seo-defaults";
import { CareersHero } from "@/components/sections/careers-hero";
import { CareersCta } from "@/components/sections/careers-cta";
import { CareersJobs } from "@/components/sections/careers-jobs";
import { CareersFaq } from "@/components/sections/careers-faq";
import { CareersSchema } from "@/components/seo/careers-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { careersFaq } from "@/lib/careers-faq";
import { howToApply, jobRoles } from "@/lib/careers-data";
import { CAREERS_METADATA, CAREERS_PAGE_PATH } from "@/lib/careers-seo";
import { Target, Clock, Gem, BookOpen, Briefcase } from "lucide-react";

export const metadata: Metadata = {
	title: { absolute: CAREERS_METADATA.title },
	description: CAREERS_METADATA.description,
	keywords: [...CAREERS_METADATA.keywords],
	alternates: { canonical: CAREERS_PAGE_PATH },
	openGraph: {
		title: CAREERS_METADATA.openGraphTitle,
		description: CAREERS_METADATA.openGraphDescription,
		url: CAREERS_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: CAREERS_METADATA.openGraphTitle,
		description: CAREERS_METADATA.openGraphDescription,
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

const workingPrinciples = [
	{
		icon: Target,
		title: "Ownership",
		description: "Own your work end to end.",
	},
	{
		icon: Clock,
		title: "Async-First",
		description: "Deep work, clear docs.",
	},
	{ icon: Gem, title: "Quality", description: "Craft over quick fixes." },
	{
		icon: BookOpen,
		title: "Learning",
		description: "Grow and share knowledge.",
	},
];

const whyJoin = [
	"Real-world products with direct business impact",
	"Growing team across engineering, sales & ops",
	"Exposure to fintech and digital transformation",
	"Room to grow as the company scales",
];

const hiringSteps = [
	{
		step: "01",
		title: "Intro call",
		detail: "30 min · background & role fit",
	},
	{
		step: "02",
		title: "Role discussion",
		detail: "45–60 min · skills & experience",
	},
	{ step: "03", title: "Practical task", detail: "Optional · case study" },
	{ step: "04", title: "Offer", detail: "Final chat & onboarding" },
];

export default function CareersPage() {
	const openCount = jobRoles.filter((r) => r.open).length;

	return (
		<>
			<CareersSchema />
			<FaqSchema items={careersFaq} />

			<CareersHero openCount={openCount} />

			{/* Roles */}
			<section
				id="open-roles"
				data-nav-theme="dark"
				className="relative scroll-mt-20 overflow-hidden border-t border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-12 text-white md:py-14"
			>
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
					<div className="absolute -bottom-32 left-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-3xl" />
					<svg
						className="absolute inset-0 h-full w-full opacity-[0.04]"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden
					>
						<defs>
							<pattern
								id="careers-roles-grid"
								width="56"
								height="56"
								patternUnits="userSpaceOnUse"
							>
								<path
									d="M 56 0 L 0 0 0 56"
									fill="none"
									stroke="white"
									strokeWidth="1"
								/>
							</pattern>
						</defs>
						<rect
							width="100%"
							height="100%"
							fill="url(#careers-roles-grid)"
						/>
					</svg>
				</div>

				<div className="relative mx-auto max-w-6xl px-6">
					<div className="mb-8">
						<div className="mb-3 inline-flex items-center gap-2">
							<Briefcase className="h-4 w-4 text-blue-400" />
							<span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
								Join the team
							</span>
						</div>
						<h2 className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
							Roles
						</h2>
						<p className="mt-1 max-w-2xl text-sm text-slate-400 md:text-base">
							Truestack is hiring in Kuala Lumpur, Malaysia —{" "}
							{openCount} open positions across sales, operations,
							client success, and engineering. On-site business
							roles and hybrid software roles available. Browse
							open and closed listings below.
						</p>
					</div>

					<CareersJobs roles={jobRoles} variant="dark" />
				</div>
			</section>

			{/* Culture + Process */}
			<section className="border-t bg-muted/30 py-12 md:py-14">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
						<div>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								Life at Truestack
							</h2>
							<p className="mt-1 text-sm text-muted-foreground md:text-base">
								How we work, what you can expect, and our hiring
								process.
							</p>
						</div>
						<div className="relative aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
							<Image
								src="/photos/careers-office-culture.jpg"
								alt="Colleagues collaborating at shared desks in the Truestack Kuala Lumpur office"
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

					<div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
						{workingPrinciples.map((p) => (
							<div
								key={p.title}
								className="flex items-start gap-3 rounded-xl border bg-background p-4"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
									<p.icon className="h-4 w-4 text-primary" />
								</div>
								<div>
									<p className="text-sm font-semibold">
										{p.title}
									</p>
									<p className="mt-0.5 text-xs text-muted-foreground">
										{p.description}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="mt-6 grid gap-4 md:grid-cols-2">
						<div className="rounded-xl border bg-background p-5">
							<h3 className="text-sm font-semibold">
								Why join us
							</h3>
							<ul className="mt-3 space-y-2">
								{whyJoin.map((item) => (
									<li
										key={item}
										className="flex items-start gap-2 text-sm text-muted-foreground"
									>
										<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-xl border bg-background p-5">
							<h3 className="text-sm font-semibold">
								Hiring process
							</h3>
							<ol className="mt-3 space-y-3">
								{hiringSteps.map((step) => (
									<li
										key={step.step}
										className="flex items-start gap-3"
									>
										<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
											{step.step}
										</span>
										<div>
											<p className="text-sm font-medium">
												{step.title}
											</p>
											<p className="text-xs text-muted-foreground">
												{step.detail}
											</p>
										</div>
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>

			<CareersFaq />
			<CareersCta howToApply={howToApply} />
		</>
	);
}
