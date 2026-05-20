import { buildP2PJsonLd } from "@/lib/p2p-seo";

export function P2PSchema() {
	const schema = buildP2PJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
