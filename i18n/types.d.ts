import type { AppLocale } from "./routing";
import type { EnMessages } from "@/lib/i18n/messages";

declare module "next-intl" {
	interface AppConfig {
		Locale: AppLocale;
		Messages: EnMessages;
	}
}
