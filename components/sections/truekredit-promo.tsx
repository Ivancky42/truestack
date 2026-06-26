"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
	"KPKT audit-ready — auto Jadual J & K, Lampiran A & iDEAL CSV export",
	"Loan scheduling, repayment tracking & collections",
	"Borrower, document capture & approval workflows",
	"Optional borrower web, mobile apps & on-prem e-signing (TrueKredit Pro)",
];

export function TrueKreditPanel() {
	return (
		<motion.div
			className="grid items-center gap-8 rounded-2xl border bg-background p-6 md:p-8 lg:grid-cols-2"
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.4 }}
		>
			{/* Visual — dark chrome to match the admin dashboard */}
			<div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-lg">
				<div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-3">
					<div className="flex gap-1.5">
						<div className="h-3 w-3 rounded-full bg-red-500/80" />
						<div className="h-3 w-3 rounded-full bg-yellow-500/80" />
						<div className="h-3 w-3 rounded-full bg-green-500/80" />
					</div>
					<div className="ml-4 flex-1 rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
						app.truekredit.my
					</div>
				</div>
				<Image
					src="/truekredit/dashboard_screenshot.png"
					alt="TrueKredit loan management system dashboard for Malaysian money lenders"
					width={600}
					height={400}
					className="w-full"
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col justify-center gap-4">
				<div>
					<h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
						TrueKredit™
					</h3>
					<p className="mt-2 text-muted-foreground">
						Custom loan management software for Malaysian
						KPKT-licensed money lenders, built on our proven TrueKredit
						engine — audit-ready and tailored to how you lend, with
						optional borrower apps and on-prem digital signing in
						TrueKredit Pro.
					</p>
				</div>
				<ul className="space-y-2">
					{features.map((feature) => (
						<li
							key={feature}
							className="flex items-start gap-2.5 text-sm text-muted-foreground"
						>
							<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<div className="mt-1 flex flex-wrap gap-3">
					<Button asChild className="gap-2">
						<Link href="/truekredit">
							Explore TrueKredit
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
					<Button asChild variant="outline">
						<Link href="/truekredit#pro">See TrueKredit Pro</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
