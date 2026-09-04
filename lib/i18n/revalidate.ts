import { revalidatePath } from "next/cache";
import { LOCALES, localizePath } from "@/lib/i18n/config";

export function revalidateAllLocales(
	path: string,
	type?: "layout" | "page",
): void {
	for (const locale of LOCALES) {
		revalidatePath(localizePath(path, locale), type);
	}
}
