import { publishedFaqItems } from "@/lib/i18n/faq";

export type FaqSchemaItem = {
	question: string;
	answer: string;
};

type FaqSchemaProps = {
	items: readonly FaqSchemaItem[];
};

/**
 * JSON-LD FAQPage schema. Answers must be plain text strings.
 * Validate at: https://validator.schema.org/
 */
export function FaqSchema({ items }: FaqSchemaProps) {
	const published = publishedFaqItems(items);
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
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
