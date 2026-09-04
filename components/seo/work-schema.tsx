import { buildWorkJsonLd } from "@/lib/work-seo";

export async function WorkSchema() {
	const schema = await buildWorkJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
