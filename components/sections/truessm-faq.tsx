"use client";

import { useTranslations } from "next-intl";

export function TrueSsmFaq() {
	const t = useTranslations("TrueSSM");
	const items = t.raw("faq.items") as { question: string; answer: string }[];

	return (
		<section
			aria-labelledby="truessm-faq-heading"
			className="border-t bg-muted/30 py-12 md:py-14"
		>
			<div className="mx-auto max-w-6xl px-6">
				<h2
					id="truessm-faq-heading"
					className="type-h2"
				>
					{t("faq.title")}
				</h2>
				<p className="mt-1 text-sm text-muted-foreground md:text-base">
					{t("faq.body")}
				</p>

				<dl className="mt-8 divide-y rounded-xl border bg-background">
					{items.map((item) => (
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
