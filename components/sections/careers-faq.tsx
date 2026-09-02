"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { careersFaq } from "@/lib/careers-faq";

const ABOUT_FAQ_QUESTION = "What does Truestack actually build?";

export function CareersFaq() {
	return (
		<section
			id="faq"
			aria-labelledby="careers-faq-heading"
			className="scroll-mt-24 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid items-start gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 type-eyebrow text-primary">
							Questions
						</p>
						<h2 id="careers-faq-heading" className="type-h2">
							Before you apply.
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							Anything we have missed, just email and ask. Better
							now than after an interview.
						</p>
					</motion.div>

					<dl className="border-t">
						{careersFaq.map((item, index) => (
							<motion.div
								key={item.question}
								className="border-b py-5"
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.45,
									delay: index * 0.05,
								}}
							>
								<dt className="type-subhead">{item.question}</dt>
								<dd className="mt-1.5 text-base leading-relaxed text-muted-foreground">
									{item.question === ABOUT_FAQ_QUESTION ? (
										<>
											Lending platforms, identity and
											payment checks, and custom software
											for Malaysian lenders and fintechs
											— plus the KPKT compliance work that
											goes with it. Products include
											TrueKredit™, TrueSyariah™, TrueP2P™
											and TrueIdentity™.{" "}
											<Link
												href="/about"
												className="font-medium text-primary underline-offset-4 hover:underline"
											>
												More about us
											</Link>
											.
										</>
									) : (
										item.answer
									)}
								</dd>
							</motion.div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
