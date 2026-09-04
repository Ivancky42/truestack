import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import { publishedFaqItems } from "@/lib/i18n/faq";
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
import enWorkStudies from "@/messages/en/workStudies.json";
import msMessages from "@/messages/ms";
import zhMessages from "@/messages/zh";

/**
 * Every English namespace file, one per namespace. Adding a namespace =
 * add the JSON file under messages/{en,ms,zh}, import the English file here
 * (types flow from it), and add the ms/zh files to messages/ms/index.ts and
 * messages/zh/index.ts.
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
		typeof enWorkStudies &
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

function stripFileStatus(mod: object): Record<string, unknown> {
	const { _status: _fileStatus, ...rest } = mod as Record<string, unknown>;
	void _fileStatus;
	return rest;
}

const englishMessages: Record<string, unknown> = {
	...stripFileStatus(enAbout),
	...stripFileStatus(enAccountManagement),
	...stripFileStatus(enBanner),
	...stripFileStatus(enCareers),
	...stripFileStatus(enCommon),
	...stripFileStatus(enContact),
	...stripFileStatus(enDigitalLicense),
	...stripFileStatus(enFooter),
	...stripFileStatus(enHeader),
	...stripFileStatus(enHome),
	...stripFileStatus(enInsightsChrome),
	...stripFileStatus(enLegalChrome),
	...stripFileStatus(enNotFound),
	...stripFileStatus(enP2P),
	...stripFileStatus(enSoftwareDevelopment),
	...stripFileStatus(enTrueIdentity),
	...stripFileStatus(enTrueKredit),
	...stripFileStatus(enTrueSSM),
	...stripFileStatus(enTrueSyariah),
	...stripFileStatus(enWorkChrome),
	...stripFileStatus(enWorkStudies),
};

const localeOverlay: Record<string, Record<string, unknown>> = {
	ms: msMessages,
	zh: zhMessages,
};

function stripTodoFaqItems(value: unknown): unknown {
	if (Array.isArray(value)) {
		const looksLikeFaq = value.every(
			(item) =>
				isPlainObject(item) &&
				typeof item.question === "string" &&
				typeof item.answer === "string",
		);
		if (looksLikeFaq) {
			return publishedFaqItems(
				value as { question: string; answer: string }[],
			);
		}
		return value.map(stripTodoFaqItems);
	}
	if (isPlainObject(value)) {
		const next: Record<string, unknown> = {};
		for (const [key, child] of Object.entries(value)) {
			next[key] = stripTodoFaqItems(child);
		}
		return next;
	}
	return value;
}

const messagesCache = new Map<string, AbstractIntlMessages>();

export async function loadMessages(
	locale: string,
): Promise<AbstractIntlMessages> {
	const cached = messagesCache.get(locale);
	if (cached) return cached;

	const overlay = localeOverlay[locale];
	const merged = overlay
		? deepMerge(englishMessages, overlay)
		: englishMessages;
	const result = stripTodoFaqItems(merged) as AbstractIntlMessages;
	messagesCache.set(locale, result);
	return result;
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
