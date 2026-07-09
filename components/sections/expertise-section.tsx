"use client";

import { motion } from "framer-motion";
import {
	Code2,
	Cog,
	Handshake,
	Shield,
	type LucideIcon,
} from "lucide-react";
import { SectionBadge } from "@/components/shared/section-badge";

type ExpertiseItem = {
	icon: LucideIcon;
	title: string;
	description: string;
};

const expertiseItems: ExpertiseItem[] = [
	{
		icon: Shield,
		title: "KPKT & regulatory fluency",
		description:
			"We design around how Malaysian licensing and filings actually work — so your platform and your compliance path stay aligned from day one.",
	},
	{
		icon: Code2,
		title: "Full-stack delivery",
		description:
			"Web, mobile, APIs, and cloud — built by one team that already ships lending systems in production, not a patchwork of freelancers.",
	},
	{
		icon: Cog,
		title: "From brief to go-live",
		description:
			"Requirements, build, security review, and launch support sit in the same engagement. You get a clear plan, not a handoff mid-project.",
	},
	{
		icon: Handshake,
		title: "Still here after launch",
		description:
			"Renewals, releases, and the next feature stay with the people who built it. You keep continuity when the real work of operating begins.",
	},
];

const techCategories = [
	{
		label: "Web",
		items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
	},
	{
		label: "Mobile",
		items: ["React Native", "iOS", "Android"],
	},
	{
		label: "Backend",
		items: ["Node.js", "PostgreSQL", "Redis", "Express"],
	},
	{
		label: "Cloud",
		items: ["AWS Malaysia", "Docker", "DigitalOcean"],
	},
];

function GridPattern() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
			<svg
				className="absolute inset-0 h-full w-full opacity-[0.03]"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="expertise-grid"
						width="60"
						height="60"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 60 0 L 0 0 0 60"
							fill="none"
							stroke="white"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#expertise-grid)" />
			</svg>
			<div
				className="absolute inset-0 opacity-[0.15]"
				style={{
					background:
						"radial-gradient(ellipse at center top, rgba(37, 99, 235, 0.3) 0%, transparent 70%)",
				}}
			/>
			<motion.div
				className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-600/10 to-blue-400/10 blur-3xl"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.2, 0.35, 0.2],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
}

export function ExpertiseSection() {
	return (
		<section
			data-nav-theme="dark"
			aria-labelledby="expertise-heading"
			className="relative overflow-hidden bg-slate-950 py-16 md:py-24"
		>
			<GridPattern />
			<div className="relative mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-12 grid gap-6 md:grid-cols-2 md:items-end md:gap-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<SectionBadge
							icon={Cog}
							text="How we work"
							className="mb-4 [&_span]:text-blue-400 [&_svg]:text-blue-400"
						/>
						<h2
							id="expertise-heading"
							className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl"
						>
							Expertise that shows up in your delivery
						</h2>
					</div>
					<p className="text-base text-slate-400 md:text-lg">
						You get a team that already understands Malaysian
						lending — regulation, product, and engineering in one
						room — so you spend less time translating between
						vendors.
					</p>
				</motion.div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
					{expertiseItems.map((item, index) => (
						<motion.div
							key={item.title}
							className="group flex flex-col"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.45, delay: index * 0.08 }}
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
								<item.icon
									className="h-5 w-5 text-blue-400"
									aria-hidden
								/>
							</div>
							<h3 className="mb-2 font-display text-lg font-semibold text-white">
								{item.title}
							</h3>
							<p className="text-sm leading-relaxed text-slate-400">
								{item.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="mb-5 md:flex md:items-end md:justify-between md:gap-8">
						<div>
							<h3 className="font-display text-lg font-semibold text-white md:text-xl">
								What we ship on
							</h3>
							<p className="mt-1 text-sm text-slate-400">
								A modern stack chosen for maintainability,
								auditability, and Malaysia data residency —
								not novelty.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
						{techCategories.map((category) => (
							<div key={category.label}>
								<div className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
									{category.label}
								</div>
								<div className="flex flex-wrap gap-1.5">
									{category.items.map((item) => (
										<span
											key={item}
											className="inline-block rounded-md bg-slate-800/60 px-2 py-0.5 text-sm text-slate-300"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
