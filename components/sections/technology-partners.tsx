"use client";

import { motion } from "framer-motion";
import { Handshake, Users } from "lucide-react";
import { SectionBadge } from "@/components/shared/section-badge";
import { AdaptiveLogoImage } from "@/components/logo-cloud-image";
import { homepagePartners } from "@/components/logo-cloud-1";

const capabilities = [
	{
		title: "Product & engineering",
		detail: "Architects, full-stack, mobile, and cloud — one delivery team.",
	},
	{
		title: "Compliance & operations",
		detail: "Licensing, filings, and go-live support alongside the build.",
	},
	{
		title: "Design & experience",
		detail: "Interfaces your borrowers and staff will actually use.",
	},
];

const logoVariants = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35 },
	},
};

export function TechnologyPartners() {
	return (
		<section
			aria-labelledby="partners-heading"
			className="border-t bg-muted/30 py-16 md:py-24"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<SectionBadge
						icon={Handshake}
						text="Team & partners"
						className="justify-center"
					/>
					<h2
						id="partners-heading"
						className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
					>
						Your team, plus the rails Malaysia already runs on
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						In-house specialists for the work that is uniquely
						yours — and trusted partners for identity, payments,
						credit, and cloud where it makes sense to plug in.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					<motion.div
						className="rounded-2xl border bg-background p-7 md:p-8"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45 }}
					>
						<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
							<Users className="h-5 w-5 text-primary" aria-hidden />
						</div>
						<p className="text-sm font-medium text-primary">
							In-house
						</p>
						<h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
							The people on your engagement
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
							You work with the same specialists from first
							workshop through launch — not a rotating bench of
							contractors.
						</p>
						<ul className="mt-6 space-y-4">
							{capabilities.map((item) => (
								<li key={item.title} className="flex gap-3">
									<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
									<div>
										<p className="text-sm font-semibold text-foreground">
											{item.title}
										</p>
										<p className="mt-0.5 text-sm text-muted-foreground">
											{item.detail}
										</p>
									</div>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						className="rounded-2xl border bg-background p-7 md:p-8"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45, delay: 0.08 }}
					>
						<p className="text-sm font-medium text-primary">
							Partners
						</p>
						<h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
							Infrastructure you can trust
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
							Compliance, cloud, and lending rails — integrated
							through partners already proven in Malaysian
							fintech.
						</p>

						<div className="relative mt-8 flex flex-1 items-center">
							<div
								className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-primary/5 via-transparent to-primary/5"
								aria-hidden
							/>
							<motion.div
								className="relative flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-8 px-2 py-6 sm:gap-x-12 sm:gap-y-10"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								transition={{ staggerChildren: 0.06 }}
							>
								{homepagePartners.map((partner) => (
									<motion.div
										key={partner.name}
										className="group flex items-center justify-center"
										variants={logoVariants}
									>
										<AdaptiveLogoImage
											src={partner.logo}
											alt={partner.name}
											displaySize="default"
											color
										/>
									</motion.div>
								))}
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
