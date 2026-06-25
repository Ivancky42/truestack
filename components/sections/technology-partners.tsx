"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { AdaptiveLogoImage } from "@/components/logo-cloud-image";
import { homepagePartners } from "@/components/logo-cloud-1";

const teamRoles = [
	"Full-Stack Web Developers",
	"Backend Engineers",
	"Database Specialists",
	"Cloud & DevOps Engineers",
	"UX/UI Designers",
	"Technical Architects",
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
		<section className="border-t bg-muted/30 py-20">
			<div className="mx-auto max-w-6xl px-6">
				<SectionHeader
					title="In-house Expertise Meets World-class Partnerships"
					subtitle="A specialist team backed by the partners that power compliant lending in Malaysia."
					centered
				/>

				<div className="grid gap-8 lg:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Card className="h-full">
							<CardContent className="p-8">
								<div className="mb-6 flex items-center gap-4">
									<Image
										src="/truestack-logo-transparent.png"
										alt="Truestack"
										width={160}
										height={40}
										className="h-10 w-auto"
										style={{ width: "auto" }}
									/>
								</div>
								<p className="mb-2 text-sm font-medium text-primary">
									In-House Expertise
								</p>
								<p className="mb-6 text-muted-foreground">
									Our core team brings deep technical expertise across the
									full stack, from system architecture to user experience
									design.
								</p>
								<ul className="space-y-3">
									{teamRoles.map((role) => (
										<li
											key={role}
											className="flex items-center gap-3 text-sm"
										>
											<div className="h-2 w-2 rounded-full bg-primary" />
											<span className="text-foreground">{role}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Card className="h-full overflow-hidden">
							<CardContent className="flex h-full flex-col p-8">
								<p className="mb-2 text-sm font-medium text-primary">
									Our Partners
								</p>
								<p className="mb-8 text-muted-foreground">
									Trusted across compliance, cloud &amp; lending rails.
								</p>

								<div className="relative flex flex-1 items-center">
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
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
