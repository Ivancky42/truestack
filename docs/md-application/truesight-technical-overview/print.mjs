import pkg from "../../presentations/Truekredit Loan Management Brochure-2/_pw/node_modules/playwright-core/index.js";
const { chromium } = pkg;
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(dir, "index.html");
const outPath = path.join(dir, "TrueSight-Technical-Overview.pdf");

const browser = await chromium.launch();
const page = await browser.newPage({
	viewport: { width: 794, height: 1123 },
	deviceScaleFactor: 2,
});

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

await page.pdf({
	path: outPath,
	width: "210mm",
	height: "297mm",
	printBackground: true,
	preferCSSPageSize: true,
	margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await browser.close();
console.log(`Wrote ${outPath}`);
