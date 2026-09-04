#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const messagesDir = join(root, "messages");
const SOURCE = "en";
const TARGETS = ["ms", "zh"];
const META_KEY = /\.meta\.(title|description)$/;

function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function flatten(obj, prefix = "") {
	/** @type {Record<string, unknown>} */
	const out = {};
	for (const [key, value] of Object.entries(obj)) {
		if (key === "_status") continue;
		const path = prefix ? `${prefix}.${key}` : key;
		if (isPlainObject(value)) {
			Object.assign(out, flatten(value, path));
		} else {
			out[path] = value;
		}
	}
	return out;
}

function loadLocale(locale) {
	const dir = join(messagesDir, locale);
	if (!existsSync(dir)) return null;
	/** @type {Record<string, unknown>} */
	const merged = {};
	for (const file of readdirSync(dir)
		.filter((name) => name.endsWith(".json"))
		.sort()) {
		const parsed = JSON.parse(readFileSync(join(dir, file), "utf8"));
		if (isPlainObject(parsed)) {
			Object.assign(merged, parsed);
		}
	}
	return flatten(merged);
}

function placeholders(value) {
	const set = new Set();
	if (typeof value !== "string") return set;
	for (const match of value.matchAll(/\{(\w+)\}/g)) {
		set.add(match[1]);
	}
	return set;
}

function samePlaceholders(a, b) {
	const left = placeholders(a);
	const right = placeholders(b);
	if (left.size !== right.size) return false;
	for (const name of left) {
		if (!right.has(name)) return false;
	}
	return true;
}

function codePointLength(value) {
	return [...value].length;
}

/**
 * @param {string} locale
 * @param {string} key
 * @param {unknown} value
 * @returns {string | null}
 */
function metaLengthError(locale, key, value) {
	if (typeof value !== "string" || !META_KEY.test(key)) return null;
	const kind = key.endsWith(".title") ? "title" : "description";
	const length = locale === "zh" ? codePointLength(value) : value.length;
	if (locale === "zh") {
		if (kind === "title" && length > 30) {
			return `${locale} ${key} is ${length} code points (max 30)`;
		}
		if (kind === "description" && (length < 70 || length > 90)) {
			return `${locale} ${key} is ${length} code points (must be 70–90)`;
		}
		return null;
	}
	if (kind === "title" && length > 60) {
		return `${locale} ${key} is ${length} chars (max 60)`;
	}
	if (kind === "description" && (length < 140 || length > 160)) {
		return `${locale} ${key} is ${length} chars (must be 140–160)`;
	}
	return null;
}

const source = loadLocale(SOURCE);
if (!source) {
	console.error(`i18n-check: missing source locale directory messages/${SOURCE}`);
	process.exit(1);
}

/** @type {string[]} */
const errors = [];
/** @type {string[]} */
const warnings = [];

// English metadata is pre-existing, reviewed copy: report length drift as a
// warning only. Translated locales (ms/zh) are new and are held to the limits.
for (const [key, value] of Object.entries(source)) {
	const issue = metaLengthError(SOURCE, key, value);
	if (issue) warnings.push(issue);
}

for (const locale of TARGETS) {
	const target = loadLocale(locale);
	if (!target) {
		console.log(`i18n-check: skip missing locale messages/${locale}`);
		continue;
	}

	const sourceKeys = new Set(Object.keys(source));
	const targetKeys = new Set(Object.keys(target));

	for (const key of sourceKeys) {
		if (!targetKeys.has(key)) {
			errors.push(`${locale}: missing key ${key}`);
			continue;
		}
		const sourceValue = source[key];
		const targetValue = target[key];
		if (typeof targetValue === "string" && targetValue.trim() === "") {
			warnings.push(`${locale}: empty string ${key}`);
		}
		if (!samePlaceholders(sourceValue, targetValue)) {
			errors.push(`${locale}: placeholder mismatch ${key}`);
		}
		const issue = metaLengthError(locale, key, targetValue);
		if (issue) errors.push(issue);
	}

	for (const key of targetKeys) {
		if (!sourceKeys.has(key)) {
			warnings.push(`${locale}: extra key ${key}`);
		}
	}
}

for (const warning of warnings) {
	console.warn(`warning: ${warning}`);
}
for (const error of errors) {
	console.error(`error: ${error}`);
}

if (errors.length > 0) {
	console.error(
		`i18n-check: ${errors.length} error(s), ${warnings.length} warning(s)`,
	);
	process.exit(1);
}

console.log(
	`i18n-check: ${Object.keys(source).length} en keys ok, ${warnings.length} warning(s)`,
);
