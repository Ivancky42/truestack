"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Cloud, Code2, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OfferingProps {
	icon: LucideIcon;
	title: string;
	description: string;
	index: number;
}

function OfferingCard({
	icon: Icon,
	title,
	description,
	index,
}: OfferingProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.08 }}
			className="h-full"
		>
			<Card className="group flex h-full flex-col border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
				<CardHeader className="gap-3">
					<motion.div
						className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15"
						whileHover={{ scale: 1.05 }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 12,
						}}
					>
						<Icon className="h-6 w-6 text-primary" />
					</motion.div>
					<CardTitle className="font-display text-lg leading-snug md:text-xl">
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-1 flex-col pt-0">
					<p className="flex-1 text-pretty text-sm text-muted-foreground sm:text-base">
						{description}
					</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}

const offerings = [
	{
		icon: Cloud,
		title: "Infrastructure as a Service",
		description:
			"e-KYC verification, payment solutions, real-time notifications, and analytics — all through a unified API platform.",
	},
	{
		icon: CreditCard,
		title: "Loan Management Systems",
		description:
			"TrueKredit™ and TrueKredit Pro — our in-house loan management systems.",
	},
	{
		icon: ClipboardCheck,
		title: "KPKT Services",
		description:
			"Digital license conversion, regulatory compliance, license management, and administrative support for your lending operations.",
	},
	{
		icon: Code2,
		title: "Software Development",
		description:
			"Tailored software solutions built from scratch to meet your unique business requirements.",
	},
];

export function WhatWeDo() {
	return (
		<section
			id="what-we-do"
			className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20"
		>
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-linear-to-b from-primary/3 via-transparent to-transparent" />
				<svg
					className="absolute inset-0 h-full w-full opacity-[0.03]"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="whatWeDoGrid"
							width={60}
							height={60}
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 60 0 L 0 0 0 60"
								fill="none"
								stroke="currentColor"
								strokeWidth={1}
							/>
						</pattern>
					</defs>
					<rect
						width="100%"
						height="100%"
						fill="url(#whatWeDoGrid)"
					/>
				</svg>
				<div
					className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-primary/5 blur-3xl opacity-35"
					aria-hidden
				/>
			</div>

			<div className="w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
				<motion.div
					className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 xl:mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
						End-to-End Fintech Solutions
					</h2>
					<p className="mx-auto mt-4 text-pretty text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl">
						Truestack is a tech-driven software and consultancy
						company providing infrastructure, platforms, and
						expertise to help Malaysian Fintechs and lenders build,
						operate, and grow their businesses.
					</p>
				</motion.div>

				{/* Services: 1 col → 2 col → 4 col */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 xl:grid-cols-4">
					{offerings.map((offering, index) => (
						<OfferingCard
							key={offering.title}
							icon={offering.icon}
							title={offering.title}
							description={offering.description}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
