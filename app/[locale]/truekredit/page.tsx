import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import TrueKreditPage from "./truekredit-page-client";

export default async function TrueKreditServerPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<PageMessages namespaces={["TrueKredit"]}>
			<TrueKreditPage />
		</PageMessages>
	);
}
