import { useLocale } from "next-intl";
import { inLanguage as inLanguageFor, resolveAppLocale } from "@/lib/i18n/config";
import { publishedFaqItems } from "@/lib/i18n/faq";

export type FaqSchemaItem = {
	question: string;
	answer: string;
};

type FaqSchemaProps = {
	items: readonly FaqSchemaItem[];
	/**
	 * BCP-47 language of the FAQ text. Defaults to the current locale; pass
	 * `inLanguage.en` on English-only surfaces rendered under /ms, /zh or /ru.
	 */
	inLanguage?: string;
};

/**
 * JSON-LD FAQPage schema. Answers must be plain text strings.
 * Validate at: https://validator.schema.org/
 */
export function FaqSchema({ items, inLanguage }: FaqSchemaProps) {
	const locale = resolveAppLocale(useLocale());
	const published = publishedFaqItems(items);
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		inLanguage: inLanguage ?? inLanguageFor[locale],
		mainEntity: published.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
