import { buildAccountManagementJsonLd } from "@/lib/account-management-seo";

export function AccountManagementSchema() {
	const schema = buildAccountManagementJsonLd();

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
