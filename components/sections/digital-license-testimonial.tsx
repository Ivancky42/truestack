"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function DigitalLicenseTestimonial() {
	return (
		<section
			id="quote"
			className="scroll-mt-20 py-0 pb-16 md:pb-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="grid items-center gap-11 rounded-[20px] border border-primary/25 bg-primary/3 px-8 py-11 md:px-11 lg:grid-cols-[1.4fr_1fr]"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<div>
						<svg
							width="34"
							height="34"
							viewBox="0 0 24 24"
							className="mb-[18px] fill-primary/30"
							aria-hidden
						>
							<path d="M9.5 5C6.5 6.5 5 9.5 5 13v6h6v-7H8c0-2.5 1-4.5 3-5.5zM19.5 5C16.5 6.5 15 9.5 15 13v6h6v-7h-3c0-2.5 1-4.5 3-5.5z" />
						</svg>
						<blockquote className="type-pullquote text-pretty text-foreground">
							We had one branch and a room full of files. Three
							months later borrowers were applying from Johor to
							Kuala Lumpur on our own apps — and KPKT had already
							seen the system before they walked in.
						</blockquote>
						<div className="mt-[22px] text-base font-semibold text-foreground">
							Director, CreditXpress
						</div>
						<div className="text-[15px] text-muted-foreground">
							KPKT-licensed money lender
						</div>
					</div>
					<div className="rounded-xl border bg-card px-[22px] py-5">
						<Image
							src="/logos/creditxpress.png"
							alt="CreditXpress"
							width={160}
							height={40}
							className="mb-4 h-7 w-auto object-contain object-left"
						/>
						<p className="text-[15px] leading-relaxed text-muted-foreground">
							CreditXpress moved from a traditional branch licence
							to a nationwide digital book on TrueKredit™ Pro —
							web, mobile, and the review pack KPKT asked for.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
