import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import enAbout from "@/messages/en/about.json";
import enAccountManagement from "@/messages/en/accountManagement.json";
import enBanner from "@/messages/en/banner.json";
import enCareers from "@/messages/en/careers.json";
import enCommon from "@/messages/en/common.json";
import enContact from "@/messages/en/contact.json";
import enDigitalLicense from "@/messages/en/digitalLicense.json";
import enFooter from "@/messages/en/footer.json";
import enHeader from "@/messages/en/header.json";
import enHome from "@/messages/en/home.json";
import enInsightsChrome from "@/messages/en/insightsChrome.json";
import enLegalChrome from "@/messages/en/legalChrome.json";
import enNotFound from "@/messages/en/notFound.json";
import enP2P from "@/messages/en/p2p.json";
import enSoftwareDevelopment from "@/messages/en/softwareDevelopment.json";
import enTrueIdentity from "@/messages/en/trueidentity.json";
import enTrueKredit from "@/messages/en/truekredit.json";
import enTrueSSM from "@/messages/en/truessm.json";
import enTrueSyariah from "@/messages/en/truesyariah.json";
import enWorkChrome from "@/messages/en/workChrome.json";

/**
 * Every English namespace file, one per namespace. Adding a namespace =
 * add the JSON file under messages/en and import it here (types flow from it).
 */
export type EnMessages = Omit<
	typeof enCommon &
		typeof enNotFound &
		typeof enHeader &
		typeof enFooter &
		typeof enBanner &
		typeof enHome &
		typeof enTrueKredit &
		typeof enTrueSyariah &
		typeof enTrueIdentity &
		typeof enTrueSSM &
		typeof enDigitalLicense &
		typeof enAccountManagement &
		typeof enSoftwareDevelopment &
		typeof enP2P &
		typeof enAbout &
		typeof enContact &
		typeof enCareers &
		typeof enInsightsChrome &
		typeof enWorkChrome &
		typeof enLegalChrome,
	"_status"
>;

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge<T extends Record<string, unknown>>(
	base: T,
	overlay: Record<string, unknown>,
): T {
	const result: Record<string, unknown> = { ...base };
	for (const [key, value] of Object.entries(overlay)) {
		const current = result[key];
		if (isPlainObject(current) && isPlainObject(value)) {
			result[key] = deepMerge(current, value);
		} else {
			result[key] = value;
		}
	}
	return result as T;
}

function loadLocaleDirectory(locale: string): Record<string, unknown> {
	const dir = join(process.cwd(), "messages", locale);
	if (!existsSync(dir)) {
		return {};
	}

	const messages: Record<string, unknown> = {};
	for (const file of readdirSync(dir)) {
		if (!file.endsWith(".json")) continue;
		const parsed: unknown = JSON.parse(
			readFileSync(join(dir, file), "utf8"),
		);
		if (isPlainObject(parsed)) {
			const { _status: _fileStatus, ...rest } = parsed;
			void _fileStatus;
			Object.assign(messages, rest);
		}
	}
	return messages;
}

export async function loadMessages(
	locale: string,
): Promise<AbstractIntlMessages> {
	const english = loadLocaleDirectory("en");
	if (locale === "en") {
		return english as AbstractIntlMessages;
	}
	const overlay = loadLocaleDirectory(locale);
	return deepMerge(english, overlay) as AbstractIntlMessages;
}

/**
 * Accepts the typed `EnMessages` shape (which contains string arrays read via
 * `t.raw`) as well as the loose `AbstractIntlMessages`; returns the loose shape
 * expected by `NextIntlClientProvider`.
 */
export function pickMessages(
	messages: Record<string, unknown>,
	...namespaces: string[]
): AbstractIntlMessages {
	const picked: Record<string, unknown> = {};
	for (const namespace of namespaces) {
		const value = messages[namespace];
		if (value != null) {
			picked[namespace] = value;
		}
	}
	return picked as AbstractIntlMessages;
}

export async function PageMessages({
	namespaces,
	children,
}: {
	namespaces: string[];
	children: ReactNode;
}) {
	const messages = await getMessages();
	return (
		<NextIntlClientProvider
			messages={pickMessages(messages, "Common", ...namespaces)}
		>
			{children}
		</NextIntlClientProvider>
	);
}
