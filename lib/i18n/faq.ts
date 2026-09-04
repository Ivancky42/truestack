export type FaqItem = {
	question: string;
	answer: string;
};

/** Draft answers that must never render or enter FAQPage JSON-LD. */
export function isTodoFaqAnswer(answer: string): boolean {
	return answer.trimStart().startsWith("TODO(ivan)");
}

export function publishedFaqItems<T extends { answer: string }>(
	items: readonly T[],
): T[] {
	return items.filter((item) => !isTodoFaqAnswer(item.answer));
}
