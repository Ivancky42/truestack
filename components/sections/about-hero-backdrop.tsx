"use client";

import { motion } from "framer-motion";

export function AboutHeroBackdrop() {
	return (
		<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
			{/* Base — same slate → indigo → slate wash as careers / success stories */}
			<div className="absolute inset-0 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950" />

			{/* Soft blue / indigo orbs */}
			<div className="absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
			<div className="absolute -bottom-32 left-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-3xl" />

			{/* Subtle animated depth (kept quiet so the section still reads dark) */}
			<motion.div
				className="absolute -left-1/4 top-1/4 h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-blue-500/10 blur-3xl"
				animate={{
					x: [0, 40, 0],
					y: [0, -30, 0],
					scale: [1, 1.08, 1],
					opacity: [0.35, 0.55, 0.35],
				}}
				transition={{
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute -right-1/4 bottom-0 h-[min(85vw,480px)] w-[min(85vw,480px)] rounded-full bg-indigo-500/10 blur-3xl"
				animate={{
					x: [0, -35, 0],
					y: [0, 25, 0],
					scale: [1.05, 1, 1.05],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<svg
				className="absolute inset-0 h-full w-full opacity-[0.04]"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden
			>
				<defs>
					<pattern
						id="about-hero-grid"
						width="56"
						height="56"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 56 0 L 0 0 0 56"
							fill="none"
							stroke="white"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect
					width="100%"
					height="100%"
					fill="url(#about-hero-grid)"
				/>
			</svg>
		</div>
	);
}
