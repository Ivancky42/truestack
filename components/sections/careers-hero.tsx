"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/sections/hero";

export function CareersHero() {
	return (
		<section className="hero-under-nav relative overflow-hidden">
			<GridPattern />
			<div className="relative mx-auto max-w-6xl px-6 py-14 md:py-16 lg:py-20">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<nav
						aria-label="Breadcrumb"
						className="mb-5 flex items-center gap-2 text-sm text-muted-foreground"
					>
						<Link href="/about" className="hover:text-foreground">
							Company
						</Link>
						<span className="text-border" aria-hidden>
							/
						</span>
						<span className="font-medium text-foreground">
							Careers
						</span>
					</nav>

					<h1 className="max-w-[20em] type-h1 text-pretty">
						Build the systems{" "}
						<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
							Malaysian credit runs on.
						</span>
					</h1>

					<p className="mt-6 max-w-[34em] type-lede-hero text-pretty text-muted-foreground">
						We build the software lenders and fintechs here use
						every day. It handles real money and real borrowers, so
						the work is never abstract — and you always know whether
						it worked.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
