"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Check,
	ChevronRight,
	Layers,
	Plug,
	ShieldCheck,
	Smartphone,
	X,
} from "lucide-react";
import { SoftwareDevelopmentHero } from "@/components/sections/software-development-hero";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { SuccessStoriesProof } from "@/components/sections/success-stories-proof";
import { pickProofStudies } from "@/lib/case-studies-data";
import { Button } from "@/components/ui/button";
import LogoCloud1 from "@/components/logo-cloud-1";

const buildAreas = [
	{
		icon: Smartphone,
		title: "Web & mobile products",
		desc: "Customer apps, portals, and branded experiences — designed, built, and shipped under your name.",
	},
	{
		icon: Layers,
		title: "Platforms & internal tools",
		desc: "Ops dashboards, workflows, and the systems your team runs on every day.",
	},
	{
		icon: Plug,
		title: "Integrations & APIs",
		desc: "Connect payments, identity, messaging, and the services your product depends on.",
	},
	{
		icon: ShieldCheck,
		title: "Secure, production-ready builds",
		desc: "Solid foundations — access control, reliability, and a clear trail of who did what.",
	},
];

const journeySteps = [
	{
		step: "1",
		title: "Discover",
		desc: "We map your idea, users, and constraints — then agree what to build first.",
	},
	{
		step: "2",
		title: "Design & build",
		desc: "Product UI, APIs, and integrations — shipped in clear milestones you can review.",
		highlight: true,
	},
	{
		step: "3",
		title: "Launch",
		desc: "Go live on secure infrastructure — with the controls your business needs.",
	},
	{
		step: "4",
		title: "Grow with you",
		desc: "Support, iterations, and new modules as your business moves — not a one-off handoff.",
	},
];

export function SoftwareDevelopmentPageContent() {
	return (
		<>
			<SoftwareDevelopmentHero />

			{/* Story */}
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
							Why custom
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
							Off-the-shelf only goes so far.{" "}
							<span className="text-muted-foreground">
								Your edge needs software that fits.
							</span>
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							When your product or operating model doesn&apos;t
							match a template, you need a team that can turn the
							brief into something live — and stay with you after
							launch.
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
								The usual path
							</span>
							<h3 className="mt-5 font-display text-xl font-medium tracking-tight md:text-2xl">
								Ideas stall. Vendors fragment.
							</h3>
							<ul className="mt-6 space-y-3.5">
								{[
									{
										title: "Generic tools force workarounds",
										desc: "Your process bends to the software — not the other way around.",
									},
									{
										title: "Too many hands in the build",
										desc: "Design here, code there, ops somewhere else — gaps show up late.",
									},
									{
										title: "Domain knowledge missing",
										desc: "Vendors ship features without understanding how your business actually works.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="rounded-xl border border-white/10 bg-white/5 p-3.5"
									>
										<p className="text-sm font-semibold text-white">
											{item.title}
										</p>
										<p className="mt-0.5 text-sm leading-snug text-slate-400">
											{item.desc}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/8 via-background to-violet-500/5 p-6 shadow-lg sm:p-8">
							<div
								className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
								aria-hidden
							/>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
								<Check className="h-3.5 w-3.5" />
								With TrueStack
							</span>
							<h3 className="mt-5 font-display text-xl font-medium tracking-tight md:text-2xl">
								One team. Idea to live product.
							</h3>
							<p className="mt-3 text-sm text-muted-foreground md:text-[15px]">
								We sit with you from the brief through launch —
								product and engineering in the same room.
							</p>
							<ul className="mt-6 space-y-3.5">
								{[
									{
										title: "Built around how you operate",
										desc: "Your workflows, your brand, your constraints — not a forced template.",
									},
									{
										title: "Ship in clear milestones",
										desc: "You see progress early, decide what matters next, and stay in control.",
									},
									{
										title: "One team through go-live",
										desc: "Design, build, and launch without stitching vendors together yourself.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="rounded-xl border border-primary/15 bg-background/80 p-3.5 shadow-sm"
									>
										<p className="text-sm font-semibold text-foreground">
											{item.title}
										</p>
										<p className="mt-0.5 text-sm leading-snug text-muted-foreground">
											{item.desc}
										</p>
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				</div>
			</section>

			{/* What we build */}
			<section
				id="what-we-build"
				className="scroll-mt-20 border-t bg-muted/30 py-14 md:py-20"
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
							What we build
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							Products that ship.
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							From customer-facing products to the tools your
							team runs on — if you can dream it, we can build it.
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-5 sm:grid-cols-2"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						{buildAreas.map((item) => (
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
						Need something outside this list? Tell us the dream —
						we&apos;ll tell you how we&apos;d build it.
					</p>
				</div>
			</section>

			{/* How we work */}
			<section
				id="how-we-work"
				className="scroll-mt-20 border-t bg-background py-14 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
								How we work
							</p>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								From brief to live — without the fog.
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								A clear path so decision-makers always know
								where the build stands, what ships next, and
								what it takes to go live.
							</p>
							<div className="mt-6 flex flex-wrap gap-3">
								<Button asChild size="lg" className="gap-2">
									<Link href="/contact?subject=Custom%20Software">
										Start a conversation
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="gap-2"
								>
									<Link href="/work">
										See our work
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
									<div>
										<p
											className={`font-medium ${
												s.highlight ? "text-primary" : ""
											}`}
										>
											{s.title}
										</p>
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

			{/* Trust */}
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
								text="Built to last"
								className="[&>svg]:text-primary [&>span]:text-primary"
							/>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								Secure by default. Ready for production.
							</h2>
							<p className="mt-4 text-lg text-slate-400">
								Every build gets solid foundations — so you
								launch with confidence, not with shortcuts that
								catch up later.
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
									title: "Solid product foundations",
									desc: "Clear architecture, secure access, and a trail of who did what — built in from the start.",
								},
								{
									title: "Reliable infrastructure",
									desc: "Hosted and operated so your product stays up — with room to grow.",
								},
								{
									title: "Support after launch",
									desc: "We stay on for iterations, fixes, and the next module — not a one-off handoff.",
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
				id="proof"
				studies={pickProofStudies({
					product: "CustomSoftware",
					limit: 6,
				})}
				title="Products we've taken live."
				subtitle="A selection of platforms shipped with our team — from first build to go-live."
				columns={3}
			/>

			<div className="border-t bg-muted/30 pb-14 md:pb-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<LogoCloud1 className="py-0" />
				</div>
			</div>

			<p className="mx-auto max-w-2xl px-6 pb-2 text-center text-sm text-muted-foreground">
				Looking for lending or marketplace platforms? See{" "}
				<Link
					href="/truekredit"
					className="font-medium text-primary hover:underline"
				>
					TrueKredit™
				</Link>
				{" · "}
				<Link
					href="/services/p2p-software-development"
					className="font-medium text-primary hover:underline"
				>
					TrueP2P™
				</Link>
			</p>

			<ConsultationCta
				heading="Ready to build what you've been dreaming of?"
				body="Book a free consultation. Tell us the product you need — we'll map how we'd design, build, and launch it."
				primary={{
					href: "/contact?subject=Custom%20Software",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: "/work",
					label: "See our work",
				}}
			/>
		</>
	);
}
