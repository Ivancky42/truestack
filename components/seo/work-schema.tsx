import { buildWorkJsonLd } from "@/lib/work-seo";

export function WorkSchema() {
	const schema = buildWorkJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
