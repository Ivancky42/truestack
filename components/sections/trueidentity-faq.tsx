import { trueidentityFaq } from "@/lib/trueidentity-seo";

export function TrueIdentityFaq() {
	return (
		<section
			aria-labelledby="trueidentity-faq-heading"
			className="border-t bg-muted/30 py-12 md:py-14"
		>
			<div className="mx-auto max-w-6xl px-6">
				<h2
					id="trueidentity-faq-heading"
					className="font-display text-3xl font-medium tracking-tight md:text-4xl"
				>
					Frequently asked questions
				</h2>
				<p className="mt-1 text-sm text-muted-foreground md:text-base">
					e-KYC capabilities, compliance, integrations, and pricing
					for TrueIdentity™ in Malaysia.
				</p>

				<dl className="mt-8 divide-y rounded-xl border bg-background">
					{trueidentityFaq.map((item) => (
						<div key={item.question} className="px-5 py-5 md:px-6">
							<dt className="text-base font-semibold">
								{item.question}
							</dt>
							<dd className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
								{item.answer}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
