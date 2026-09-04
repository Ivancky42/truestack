import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import TrueIdentityPage from "./trueidentity-page-client";

export default async function TrueIdentityServerPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return <TrueIdentityPage />;
}
