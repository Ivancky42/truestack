"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, FileCheck, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";

const tracks = [
	{ icon: Code2, label: "Product & engineering" },
	{ icon: FileCheck, label: "Compliance & operations" },
	{ icon: Palette, label: "Design & experience" },
] as const;

export function AboutCareers() {
	return (
		<section
			id="careers"
			aria-labelledby="about-careers-heading"
			className="scroll-mt-24 bg-background pb-16 md:pb-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="grid items-center gap-10 rounded-3xl border bg-muted/30 px-7 py-10 md:px-10 md:py-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<p className="mb-3 type-eyebrow text-primary">Careers</p>
						<h2 id="about-careers-heading" className="type-h2-sm">
							We are a small team, so every hire shows.
						</h2>
						<p className="mt-4 max-w-xl type-lede text-muted-foreground">
							Engineering, design, compliance and delivery — if
							regulated financial software in Malaysia sounds more
							interesting than another dashboard, we would like to
							hear from you.
						</p>
						<Button asChild variant="outline" size="lg" className="mt-6 gap-2">
							<CtaLink href="/careers">
								See open roles
								<ArrowRight className="h-4 w-4" />
							</CtaLink>
						</Button>
					</div>
					<div className="flex flex-col gap-2.5">
						{tracks.map((track) => (
							<div
								key={track.label}
								className="flex items-center gap-3 rounded-xl border bg-card px-4 py-3.5"
							>
								<track.icon
									className="h-4 w-4 text-primary"
									aria-hidden
								/>
								<span className="text-base text-foreground/80">
									{track.label}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
