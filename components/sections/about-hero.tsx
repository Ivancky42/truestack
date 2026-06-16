"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AboutHeroGraphic } from "@/components/sections/about-hero-graphic";
import { ArrowRight, Building2, Code2, MapPin, Shield } from "lucide-react";

const statPills = [
	{ icon: MapPin, label: "Malaysia-first" },
	{ icon: Shield, label: "KPKT-native" },
	{ icon: Code2, label: "Purpose-built platforms" },
];

export function AboutHero() {
	return (
		<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Badge
					variant="outline"
					className="mb-5 gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 text-primary"
				>
					<Building2 className="h-3.5 w-3.5" />
					About Truestack
				</Badge>

				<h1 className="font-display text-4xl font-medium tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
					We build the technology behind{" "}
					<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
						Malaysia&apos;s fintech.
					</span>
				</h1>

				<p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
					Purpose-built lending platforms, end-to-end digital
					transformation, and KPKT compliance — for licensed money
					lenders and fintechs across Malaysia and beyond.
				</p>

				<div className="mt-6 flex flex-wrap gap-2">
					{statPills.map((pill) => (
						<span
							key={pill.label}
							className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm"
						>
							<pill.icon className="h-3.5 w-3.5 text-primary" />
							{pill.label}
						</span>
					))}
				</div>

				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<Button asChild size="lg" className="gap-2">
						<Link href="/services">
							View Services
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800/80 hover:text-zinc-50"
					>
						<Link href="/contact">Book a Free Consultation</Link>
					</Button>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.15 }}
			>
				<AboutHeroGraphic />
			</motion.div>
		</div>
	);
}
