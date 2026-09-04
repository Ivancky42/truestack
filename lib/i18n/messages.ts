import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createElement, type ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import enCommon from "@/messages/en/common.json";
import enNotFound from "@/messages/en/notFound.json";

export type EnMessages = typeof enCommon & typeof enNotFound;

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
			Object.assign(messages, parsed);
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

export function pickMessages(
	messages: AbstractIntlMessages,
	...namespaces: string[]
): AbstractIntlMessages {
	const picked: AbstractIntlMessages = {};
	for (const namespace of namespaces) {
		const value = messages[namespace];
		if (value != null) {
			picked[namespace] = value;
		}
	}
	return picked;
}

export async function PageMessages({
	namespaces,
	children,
}: {
	namespaces: string[];
	children: ReactNode;
}) {
	const messages = await getMessages();
	return createElement(NextIntlClientProvider, {
		messages: pickMessages(messages, "Common", ...namespaces),
		children,
	});
}
