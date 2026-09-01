"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type InsightPostErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
	unstable_retry?: () => void;
};

export default function InsightPostError({
	error,
	reset,
	unstable_retry,
}: InsightPostErrorProps) {
	const retry = unstable_retry ?? reset;

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="bg-background py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl rounded-3xl border bg-card p-8 shadow-sm md:p-12">
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
						Temporarily unavailable
					</p>
					<h1 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
						This insight is not available right now.
					</h1>
					<p className="mt-4 text-base text-muted-foreground md:text-lg">
						Try again in a moment, or go back to Insights.
					</p>
					<div className="mt-7 flex flex-col gap-3 sm:flex-row">
						<Button size="lg" onClick={() => retry()}>
							Try again
						</Button>
						<Button asChild variant="outline" size="lg" className="gap-2">
							<Link href="/insights">
								Back to Insights
								<ArrowRight className="h-4 w-4" aria-hidden />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
