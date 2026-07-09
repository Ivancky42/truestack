"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

type TrueKreditHeroVisualProps = {
	/** Prefer mount animation on the product hero; use in-view on homepage cards. */
	animateOnMount?: boolean;
	className?: string;
};

/** Brochure-inspired hero: laptop admin + phone borrower, soft and modern. */
export function TrueKreditHeroVisual({
	animateOnMount = false,
	className,
}: TrueKreditHeroVisualProps) {
	return (
		<motion.div
			className={`relative mx-auto w-full max-w-[560px] ${className ?? ""}`}
			initial={{ opacity: 0, scale: 0.96 }}
			{...(animateOnMount
				? { animate: { opacity: 1, scale: 1 } }
				: {
						whileInView: { opacity: 1, scale: 1 },
						viewport: { once: true, margin: "-40px" },
					})}
			transition={{ duration: 0.7, delay: animateOnMount ? 0.15 : 0.1 }}
		>
			<div className="relative aspect-square overflow-hidden rounded-[2rem] border border-sky-200/60 bg-linear-to-br from-sky-50 via-white to-indigo-50/80 shadow-[0_24px_80px_-24px_rgba(37,99,235,0.35)]">
				<div
					className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-sky-300/25 blur-3xl"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute -right-10 bottom-16 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute left-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl"
					aria-hidden
				/>

				<svg
					className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden
				>
					<defs>
						<pattern
							id="tk-hero-grid"
							width="28"
							height="28"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 28 0 L 0 0 0 28"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#tk-hero-grid)" />
				</svg>

				{/* Laptop — admin dashboard */}
				<motion.div
					className="absolute left-[6%] top-[22%] z-10 w-[78%] sm:left-[8%] sm:w-[74%]"
					animate={{ y: [0, -4, 0] }}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<div className="overflow-hidden rounded-t-xl border border-slate-300/90 bg-slate-800 shadow-2xl shadow-slate-900/25 ring-1 ring-black/5">
						<div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-3 py-2">
							<div className="flex gap-1.5">
								<span className="h-2 w-2 rounded-full bg-red-400/80" />
								<span className="h-2 w-2 rounded-full bg-amber-400/80" />
								<span className="h-2 w-2 rounded-full bg-emerald-400/80" />
							</div>
							<div className="ml-2 flex-1 rounded-md bg-slate-800 px-2 py-0.5 text-center text-[9px] text-slate-400">
								admin.truekredit
							</div>
						</div>
						<div className="relative aspect-16/10 bg-slate-100">
							<Image
								src="/truekredit/dashboard_screenshot.png"
								alt="TrueKredit admin dashboard — portfolio overview for Malaysian money lenders"
								fill
								priority
								sizes="(min-width: 1024px) 420px, 70vw"
								className="object-cover object-top"
							/>
						</div>
					</div>
					<div className="relative mx-auto h-2.5 w-[102%] max-w-none -translate-x-[1%] rounded-b-xl bg-slate-300">
						<div className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-b-md bg-slate-400/50" />
					</div>
					<div className="mx-auto h-1.5 w-[112%] max-w-none -translate-x-[5.5%] rounded-b-2xl bg-slate-200" />
				</motion.div>

				{/* Phone — Pro borrower app */}
				<motion.div
					className="absolute bottom-[8%] right-[4%] z-20 w-[38%] max-w-[150px] sm:right-[6%] sm:w-[36%] sm:max-w-[168px]"
					animate={{ y: [0, -8, 0] }}
					transition={{
						duration: 5.2,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 0.4,
					}}
				>
					<div className="relative overflow-hidden rounded-[1.35rem] bg-slate-900 p-[5px] shadow-2xl shadow-violet-950/35 ring-1 ring-slate-700/80">
						<div
							className="absolute -left-[2px] top-[18%] h-5 w-[2px] rounded-l-sm bg-slate-700"
							aria-hidden
						/>
						<div
							className="absolute -right-[2px] top-[24%] h-8 w-[2px] rounded-r-sm bg-slate-700"
							aria-hidden
						/>

						<div className="relative overflow-hidden rounded-[1.1rem] bg-white">
							<div className="relative flex h-7 items-end justify-between px-3 pb-0.5">
								<span className="text-[8px] font-semibold tabular-nums text-slate-900">
									9:41
								</span>
								<div className="absolute left-1/2 top-1.5 h-3 w-12 -translate-x-1/2 rounded-full bg-slate-950" />
								<div className="h-2 w-4 rounded-sm bg-slate-900/80" />
							</div>

							<div className="px-2.5 pb-2.5 pt-1">
								<div className="flex items-center justify-between gap-2">
									<div className="min-w-0">
										<p className="text-[8px] text-slate-400">
											Good morning
										</p>
										<p className="truncate text-[11px] font-semibold text-slate-900">
											Ahmad Hisham
										</p>
									</div>
									<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100">
										<Smartphone className="h-3 w-3 text-violet-700" />
									</div>
								</div>

								<div className="mt-2.5 rounded-xl bg-linear-to-br from-violet-600 to-indigo-600 p-2.5 text-white shadow-md shadow-violet-600/25">
									<p className="text-[8px] opacity-80">
										Outstanding
									</p>
									<p className="mt-0.5 text-[15px] font-semibold leading-none tracking-tight">
										RM 8,750
									</p>
									<p className="mt-1 text-[7px] opacity-80">
										Next due 15 Mar · RM 1,250
									</p>
									<div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/20">
										<div className="h-full w-[62%] rounded-full bg-white" />
									</div>
								</div>

								<div className="mt-2 grid grid-cols-2 gap-1.5">
									{[
										{ label: "Pay now", sub: "DuitNow" },
										{ label: "Sign", sub: "Agreement" },
									].map((a) => (
										<div
											key={a.label}
											className="rounded-lg border border-slate-100 bg-slate-50 px-1.5 py-1.5"
										>
											<p className="text-[8px] font-semibold text-slate-800">
												{a.label}
											</p>
											<p className="text-[7px] text-slate-500">
												{a.sub}
											</p>
										</div>
									))}
								</div>
							</div>

							<div className="flex justify-center pb-1.5">
								<div className="h-0.5 w-10 rounded-full bg-slate-900/90" />
							</div>
						</div>
					</div>
				</motion.div>

				<div
					className="pointer-events-none absolute bottom-[6%] left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-full bg-slate-400/20 blur-xl"
					aria-hidden
				/>
			</div>
		</motion.div>
	);
}
