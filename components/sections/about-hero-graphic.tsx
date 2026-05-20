"use client";

import { motion } from "framer-motion";

const stack = ["Next.js", "Flutter", "PostgreSQL", "AWS Malaysia"];

export function AboutHeroGraphic() {
	return (
		<div className="relative w-full">
			<div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />

			<motion.div
				className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 font-mono text-sm shadow-2xl shadow-black/40"
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
					<div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
					<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
					<div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
					<span className="ml-1 text-xs text-zinc-500">
						truestack.platform.ts
					</span>
				</div>

				<div className="space-y-1.5 p-5 text-slate-300 md:p-6">
					<div>
						<span className="text-purple-400">export const</span>{" "}
						<span className="text-blue-400">platform</span>{" "}
						<span className="text-slate-500">=</span>{" "}
						<span className="text-orange-400">{`{`}</span>
					</div>
					<div className="pl-4">
						<span className="text-slate-400">products:</span>{" "}
						<span className="text-green-400">
							[&apos;TrueKredit&apos;, &apos;TruestackCore&apos;]
						</span>
						<span className="text-slate-500">,</span>
					</div>
					<div className="pl-4">
						<span className="text-slate-400">compliance:</span>{" "}
						<span className="text-green-400">&apos;KPKT&apos;</span>
						<span className="text-slate-500">,</span>
					</div>
					<div className="pl-4">
						<span className="text-slate-400">region:</span>{" "}
						<span className="text-green-400">&apos;MY&apos;</span>
						<span className="text-slate-500">,</span>
					</div>
					<div className="pl-4">
						<span className="text-slate-400">auditTrail:</span>{" "}
						<span className="text-cyan-400">true</span>
						<span className="text-slate-500">,</span>
					</div>
					<div className="pl-4">
						<span className="text-slate-400">hosting:</span>{" "}
						<span className="text-green-400">
							&apos;AWS Malaysia&apos;
						</span>
						<span className="text-slate-500">,</span>
					</div>
					<div>
						<span className="text-orange-400">{`}`}</span>
						<span className="text-slate-500">;</span>
					</div>
					<div className="mt-3 border-t border-zinc-800 pt-3">
						<span className="text-slate-500">
							{`// Licensed lenders · Digital · Compliance`}
						</span>
					</div>
				</div>

				<div className="flex flex-wrap gap-2 border-t border-zinc-800 bg-zinc-900/50 px-5 py-3">
					{stack.map((tech) => (
						<span
							key={tech}
							className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[11px] text-zinc-400"
						>
							{tech}
						</span>
					))}
				</div>
			</motion.div>
		</div>
	);
}
