import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import TrueSsmPage from "./truessm-page-client";

export default async function TrueSsmServerPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<PageMessages namespaces={["TrueSSM"]}>
			<TrueSsmPage />
		</PageMessages>
	);
}
