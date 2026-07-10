"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stack = ["Next.js", "React Native", "PostgreSQL", "AWS Malaysia"];

type Token = { text: string; className: string };

type CodeLine = {
	indent?: boolean;
	tokens: Token[];
};

const lines: CodeLine[] = [
	{
		tokens: [
			{ text: "export const ", className: "text-violet-400" },
			{ text: "platform", className: "text-blue-400" },
			{ text: " = ", className: "text-slate-500" },
			{ text: "{", className: "text-cyan-400" },
		],
	},
	{
		indent: true,
		tokens: [
			{ text: "products: ", className: "text-slate-400" },
			{
				text: "['TrueKredit', 'TrueSyariah', 'TrueP2P']",
				className: "text-green-400",
			},
			{ text: ",", className: "text-slate-500" },
		],
	},
	{
		indent: true,
		tokens: [
			{ text: "apis: ", className: "text-slate-400" },
			{
				text: "['TrueIdentity', 'TrueSSM', 'TruePay']",
				className: "text-green-400",
			},
			{ text: ",", className: "text-slate-500" },
		],
	},
	{
		indent: true,
		tokens: [
			{ text: "services: ", className: "text-slate-400" },
			{
				text: "['DigitalLicence', 'Compliance']",
				className: "text-green-400",
			},
			{ text: ",", className: "text-slate-500" },
		],
	},
	{
		indent: true,
		tokens: [
			{ text: "compliance: ", className: "text-slate-400" },
			{ text: "'KPKT'", className: "text-green-400" },
			{ text: ",", className: "text-slate-500" },
		],
	},
	{
		indent: true,
		tokens: [
			{ text: "region: ", className: "text-slate-400" },
			{ text: "'MY'", className: "text-green-400" },
			{ text: ",", className: "text-slate-500" },
		],
	},
	{
		indent: true,
		tokens: [
			{ text: "auditTrail: ", className: "text-slate-400" },
			{ text: "true", className: "text-cyan-400" },
			{ text: ",", className: "text-slate-500" },
		],
	},
	{
		tokens: [
			{ text: "}", className: "text-cyan-400" },
			{ text: ";", className: "text-slate-500" },
		],
	},
	{
		tokens: [
			{
				text: "// Licence → platform → live portfolio",
				className: "text-slate-500",
			},
		],
	},
];

function linePlainText(line: CodeLine) {
	return line.tokens.map((t) => t.text).join("");
}

function TypedLine({
	line,
	charCount,
	showCursor,
}: {
	line: CodeLine;
	charCount: number;
	showCursor: boolean;
}) {
	let remaining = charCount;
	const visible: { text: string; className: string }[] = [];

	for (const token of line.tokens) {
		if (remaining <= 0) break;
		const slice = token.text.slice(0, remaining);
		visible.push({ text: slice, className: token.className });
		remaining -= slice.length;
	}

	return (
		<div className={line.indent ? "pl-4" : undefined}>
			{visible.map((part, i) => (
				<span key={`${part.className}-${i}`} className={part.className}>
					{part.text}
				</span>
			))}
			{showCursor && (
				<span
					className="ml-px inline-block h-[1.05em] w-[0.55em] translate-y-[0.12em] bg-primary/90 align-baseline animate-pulse"
					aria-hidden
				/>
			)}
		</div>
	);
}

export function AboutHeroGraphic() {
	const [lineIndex, setLineIndex] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [done, setDone] = useState(false);
	const [showStack, setShowStack] = useState(false);

	useEffect(() => {
		if (done) return;

		const current = lines[lineIndex];
		if (!current) return;

		const fullLen = linePlainText(current).length;

		if (charCount < fullLen) {
			const isComment = current.tokens[0]?.text.startsWith("//");
			const delay = isComment ? 28 : 18 + (charCount % 5 === 0 ? 12 : 0);
			const id = window.setTimeout(
				() => setCharCount((c) => c + 1),
				delay,
			);
			return () => window.clearTimeout(id);
		}

		// Pause briefly at end of each line, then advance
		const pause = lineIndex === lines.length - 2 ? 420 : 220;
		const id = window.setTimeout(() => {
			if (lineIndex < lines.length - 1) {
				setLineIndex((i) => i + 1);
				setCharCount(0);
			} else {
				setDone(true);
				window.setTimeout(() => setShowStack(true), 280);
			}
		}, pause);

		return () => window.clearTimeout(id);
	}, [lineIndex, charCount, done]);

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

				<div
					className="min-h-70 space-y-1.5 p-5 text-slate-300 md:min-h-74 md:p-6"
					aria-label="Animated code sample defining the Truestack platform"
				>
					{lines.map((line, i) => {
						if (i > lineIndex) return null;
						const isActive = i === lineIndex;
						const count =
							i < lineIndex
								? linePlainText(line).length
								: done
									? linePlainText(line).length
									: charCount;
						const isCommentLine =
							line.tokens[0]?.text.startsWith("//");

						return (
							<div
								key={i}
								className={
									isCommentLine && i === lineIndex
										? "mt-3 border-t border-zinc-800 pt-3"
										: undefined
								}
							>
								<TypedLine
									line={line}
									charCount={count}
									showCursor={isActive}
								/>
							</div>
						);
					})}
				</div>

				<div className="flex min-h-11 flex-wrap gap-2 border-t border-zinc-800 bg-zinc-900/50 px-5 py-3">
					<AnimatePresence>
						{showStack &&
							stack.map((tech, i) => (
								<motion.span
									key={tech}
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.3,
										delay: i * 0.08,
									}}
									className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[11px] text-zinc-400"
								>
									{tech}
								</motion.span>
							))}
					</AnimatePresence>
				</div>
			</motion.div>
		</div>
	);
}
