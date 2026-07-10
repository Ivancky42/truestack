"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Award,
	Building2,
	Check,
	ChevronRight,
	FileCheck,
	Globe,
	Handshake,
	Headphones,
	Layers,
	ShieldCheck,
	Smartphone,
	X,
} from "lucide-react";
import { DigitalLicenseHero } from "@/components/sections/digital-license-hero";
import { DigitalLicenseFaq } from "@/components/sections/digital-license-faq";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { SuccessStoriesProof } from "@/components/sections/success-stories-proof";
import { pickProofStudies } from "@/lib/case-studies-data";
import { Button } from "@/components/ui/button";

const journeySteps = [
	{
		step: "1",
		title: "Provisional licence",
		desc: "We map your operating model, prepare the dossier, and walk into the KPKT presentation with you.",
		weeks: "Weeks 1–2",
	},
	{
		step: "2",
		title: "Build on TrueKredit™ Pro",
		desc: "Branded web and mobile apps, signing under your control, and your own secure cloud in Malaysia — set up for you.",
		weeks: "Weeks 3–8",
		highlight: true,
	},
	{
		step: "3",
		title: "Test & review pack",
		desc: "Hands-on testing with your team, an independent security review, and a complete pack ready for KPKT.",
		weeks: "Weeks 9–10",
	},
	{
		step: "4",
		title: "Approval & go-live",
		desc: "We sit with you through final inspection and stay on for your first nationwide disbursements.",
		weeks: "Weeks 11–12",
	},
];

export function DigitalLicensePageContent() {
	return (
		<>
			<DigitalLicenseHero />

			{/* Story: today vs after */}
			<section id="story" className="border-t bg-background py-14 md:py-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
							Why go digital
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
							One branch is a ceiling.{" "}
							<span className="text-muted-foreground">
								A digital licence is the unlock.
							</span>
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							Traditional licences keep you local. A KPKT Online
							Money Lending Licence lets you serve customers
							nationwide — if the licence path and the platform
							are handled properly.
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg sm:p-8">
							<div
								className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"
								aria-hidden
							/>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300 ring-1 ring-red-500/30">
								<X className="h-3.5 w-3.5" />
								Today
							</span>
							<h3 className="mt-5 font-display text-xl font-medium tracking-tight md:text-2xl">
								Local reach. Unclear path.
							</h3>
							<ul className="mt-6 space-y-3.5">
								{[
									{
										icon: Building2,
										title: "Limited to your branch area",
										desc: "Customers outside your locality stay out of reach.",
									},
									{
										icon: FileCheck,
										title: "Licence process feels opaque",
										desc: "What KPKT expects — and when — is hard to navigate alone.",
									},
									{
										icon: Layers,
										title: "Build risk on top of compliance risk",
										desc: "Wrong platform choices can stall approval or force a rebuild.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/15">
											<item.icon className="h-4 w-4 text-red-300" />
										</div>
										<div>
											<p className="text-sm font-semibold text-white">
												{item.title}
											</p>
											<p className="mt-0.5 text-sm leading-snug text-slate-400">
												{item.desc}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/8 via-background to-cyan-500/5 p-6 shadow-lg sm:p-8">
							<div
								className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
								aria-hidden
							/>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
								<Check className="h-3.5 w-3.5" />
								With TrueStack
							</span>
							<h3 className="mt-5 font-display text-xl font-medium tracking-tight md:text-2xl">
								Nationwide. Licensed. Live.
							</h3>
							<p className="mt-3 text-sm text-muted-foreground md:text-[15px]">
								One team takes you from traditional licence to
								digital approval — on a platform built for KPKT
								online lending.
							</p>
							<ul className="mt-6 space-y-3.5">
								{[
									{
										icon: Globe,
										title: "Serve all of Malaysia",
										desc: "Borrowers apply, verify, and repay on your branded web and apps.",
									},
									{
										icon: Handshake,
										title: "We run the licence journey with you",
										desc: "Strategy, dossier, presentation, review, and final approval support.",
									},
									{
										icon: Award,
										title: "Live on TrueKredit™ Pro",
										desc: "The same lending system KPKT-licensed operators already trust — ready for digital review.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="flex gap-3 rounded-xl border border-primary/15 bg-background/80 p-3.5 shadow-sm"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
											<item.icon className="h-4 w-4 text-primary" />
										</div>
										<div>
											<p className="text-sm font-semibold text-foreground">
												{item.title}
											</p>
											<p className="mt-0.5 text-sm leading-snug text-muted-foreground">
												{item.desc}
											</p>
										</div>
									</li>
								))}
							</ul>
							<div className="mt-6">
								<Link
									href="/truekredit"
									className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
								>
									Explore TrueKredit™
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* What you get — three outcomes */}
			<section
				id="what-you-get"
				className="border-t bg-muted/30 py-14 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
							What you&apos;re buying
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							Licence. Platform. Go-live.
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							Not a software handoff — a full-service path to
							nationwide digital lending.
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-5 md:grid-cols-3"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						{[
							{
								icon: FileCheck,
								title: "The licence",
								desc: "Licensing strategy, provisional dossier, KPKT presentation support, and final approval accompaniment.",
							},
							{
								icon: Smartphone,
								title: "The platform",
								desc: (
									<>
										A branded{" "}
										<Link
											href="/truekredit#compare"
											className="font-medium text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
										>
											TrueKredit™ Pro
										</Link>{" "}
										deployment — web, mobile apps, and
										signing under your control, on your own
										secure cloud in Malaysia.
									</>
								),
							},
							{
								icon: Headphones,
								title: "Go-live & after",
								desc: "Testing, review prep, first disbursements, and ongoing KPKT compliance support after you launch.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border bg-card p-6 shadow-sm"
							>
								<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
									<item.icon className="h-5 w-5 text-primary" />
								</div>
								<h3 className="font-display text-xl font-semibold tracking-tight">
									{item.title}
								</h3>
								<p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
									{item.desc}
								</p>
							</div>
						))}
					</motion.div>

					<p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
						One team. One contract. You focus on lending — we handle
						the rest.
					</p>
				</div>
			</section>

			{/* Journey */}
			<section
				id="journey"
				className="scroll-mt-20 border-t bg-background py-14 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
								About three months
							</p>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								From kickoff to nationwide lending.
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								A proven playbook — every step run with you in
								the room. Timelines depend on your readiness and
								KPKT scheduling.
							</p>
							<div className="relative mt-6 aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
								<Image
									src="/photos/digital-license-advisory-documents.jpg"
									alt="Two people reviewing licensing documents across a meeting table"
									fill
									sizes="(max-width: 1024px) 100vw, 45vw"
									className="object-cover"
								/>
							</div>
							<div className="mt-6 flex flex-wrap gap-3">
								<Button asChild size="lg" className="gap-2">
									<Link href="/contact?subject=Digital%20KPKT%20Licence">
										Talk to our licensing team
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="gap-2"
								>
									<Link href="/truekredit">
										See TrueKredit™ Pro
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>

						<ol className="space-y-2.5">
							{journeySteps.map((s) => (
								<li
									key={s.step}
									className={`flex gap-4 rounded-xl border bg-card p-4 ${
										s.highlight
											? "border-primary/35 bg-primary/5"
											: ""
									}`}
								>
									<div
										className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
											s.highlight
												? "bg-primary text-primary-foreground"
												: "bg-muted text-foreground"
										}`}
									>
										{s.step}
									</div>
									<div className="min-w-0 flex-1">
										<div className="flex flex-wrap items-center gap-2">
											<p
												className={`font-medium ${
													s.highlight
														? "text-primary"
														: ""
												}`}
											>
												{s.title}
											</p>
											<span className="text-xs text-muted-foreground">
												{s.weeks}
											</span>
										</div>
										<p className="mt-0.5 text-sm text-muted-foreground">
											{s.desc}
										</p>
									</div>
								</li>
							))}
						</ol>
					</motion.div>
				</div>
			</section>

			{/* Built on TrueKredit Pro — bridge */}
			<section
				id="truekredit-pro"
				className="scroll-mt-20 border-t bg-muted/30 py-14 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<SectionBadge
								icon={Award}
								text="Built on TrueKredit™ Pro"
							/>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								The platform KPKT expects — already built.
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Your digital licence runs on{" "}
								<strong className="font-medium text-foreground">
									TrueKredit™ Pro
								</strong>
								: the same loan book your team will trust every
								day, plus nationwide borrower channels and
								signing under your control.
							</p>
							<ul className="mt-6 space-y-3">
								{[
									{
										icon: Globe,
										title: "Nationwide customer channels",
										desc: "Branded website and iPhone & Android apps — applications land in one approval queue.",
									},
									{
										icon: ShieldCheck,
										title: "Signing under your control",
										desc: "Legally binding signatures stay on your premises — as digital licensing requires.",
									},
									{
										icon: Building2,
										title: "Your cloud. Kept in Malaysia.",
										desc: "Loan data stays with you and is never mixed with other lenders.",
									},
								].map((item) => (
									<li key={item.title} className="flex gap-3">
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
											<item.icon className="h-4 w-4 text-primary" />
										</div>
										<div>
											<p className="text-sm font-semibold">
												{item.title}
											</p>
											<p className="text-sm text-muted-foreground">
												{item.desc}
											</p>
										</div>
									</li>
								))}
							</ul>
							<div className="mt-7 flex flex-wrap gap-3">
								<Button asChild className="gap-2">
									<Link href="/truekredit">
										Explore TrueKredit™
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									className="gap-2"
								>
									<Link href="/truekredit#compare">
										Standard vs Pro
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>

						<div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
							<p className="text-xs font-semibold uppercase tracking-widest text-primary">
								What Pro unlocks
							</p>
							<ul className="mt-4 space-y-3">
								{[
									"Branded customer website",
									"iPhone & Android apps",
									"Digital signing on your premises",
									"Live & video attestation",
									"Support for KPKT online licence reviews",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-2.5"
									>
										<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
										<span className="text-sm text-foreground">
											{item}
										</span>
									</li>
								))}
							</ul>
							<p className="mt-5 border-t pt-4 text-sm text-muted-foreground">
								Already on TrueKredit Standard? Upgrade to Pro
								without moving your loan book.{" "}
								<Link
									href="/truekredit#compare"
									className="font-medium text-primary hover:underline"
								>
									See the comparison
								</Link>
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Trust — one dark section */}
			<section
				id="trust"
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-14 text-white md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<SectionBadge
								icon={ShieldCheck}
								text="Built for KPKT review"
								className="[&>svg]:text-primary [&>span]:text-primary"
							/>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								Ready when examiners ask.
							</h2>
							<p className="mt-4 text-lg text-slate-400">
								Digital licensing is as much about control and
								traceability as it is about apps. Your platform
								is set up so answers are ready — not scrambled
								together.
							</p>
						</motion.div>

						<motion.ul
							className="space-y-3"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.08 }}
						>
							{[
								{
									title: "Your data stays with you",
									desc: "Hosted on your own secure cloud in Malaysia — never mixed with other lenders.",
								},
								{
									title: "Signing stays on your premises",
									desc: "Borrowers sign from web or phone; the signing control stays under your roof.",
								},
								{
									title: "Audit trail every day",
									desc: "Who did what, when — ready for your team and for KPKT.",
								},
							].map((item) => (
								<li
									key={item.title}
									className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
								>
									<p className="font-medium text-white">
										{item.title}
									</p>
									<p className="mt-1 text-sm text-slate-400">
										{item.desc}
									</p>
								</li>
							))}
						</motion.ul>
					</div>
				</div>
			</section>

			{/* Proof */}
			<SuccessStoriesProof
				id="success-stories"
				studies={pickProofStudies({ product: "TrueKredit", limit: 6 })}
				title="Lenders we've taken digital."
				subtitle="Real KPKT-licensed lenders launched on TrueKredit™ Pro — licensed, built, and approved with our team."
				columns={3}
			/>

			<DigitalLicenseFaq />

			<ConsultationCta
				accent="kpkt"
				eyebrow="Full-service KPKT digital licensing"
				heading="Ready to go nationwide?"
				body="Book a free consultation. We'll map your route to a KPKT digital licence — and the TrueKredit™ Pro platform that gets you there."
				primary={{
					href: "/contact?subject=Digital%20KPKT%20Licence",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: "/truekredit",
					label: "Explore TrueKredit™",
				}}
				extraLinks={[
					{
						href: "/truekredit#compare",
						label: "Compare Standard vs Pro",
					},
					{
						href: "/truekredit#zero-to-license",
						label: "See the Pro journey on TrueKredit",
					},
				]}
			/>
		</>
	);
}
