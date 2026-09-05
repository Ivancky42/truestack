---
name: truestack-i18n
description: How to add or change truestack.my copy so English, Bahasa Malaysia, Simplified Chinese, and Russian ship together. Use BEFORE writing or editing any reader-facing text, metadata, FAQ, JSON-LD strings, or a new marketing page — and whenever the user asks to change copy, rewrite a section, add a page, or "translate".
---

# Truestack i18n skill

Do this automatically. Do not wait for the user to ask for translations.

Full contract, glossary, and Mandarin SEO table: [docs/I18N.md](../../../docs/I18N.md).

## Copy change (existing page)

1. Edit the English key in `messages/en/<namespace>.json`.
2. In the same change, update the same key in `messages/ms/<namespace>.json`, `messages/zh/<namespace>.json`, and `messages/ru/<namespace>.json`. Keep the key path and array length identical.
3. If you add a key, add it in all four files. If you delete a key, delete it in all four.
4. `t.rich` / ICU `{name}` placeholders must match across locales.
5. Internal links in body copy use `[[label|/path]]` — translate the label, never the href.

## New page / new namespace

1. Create `messages/{en,ms,zh,ru}/<file>.json` with the same keys. English `_status: source`; ms/zh/ru `_status: ai-draft`.
2. Import English in `lib/i18n/messages.tsx` (`EnMessages` intersection **and** `englishMessages` merge).
3. Import the same file in `messages/ms/index.ts`, `messages/zh/index.ts`, and `messages/ru/index.ts` and pass it to `namespaces(...)`.
4. Load with `getTranslations("Ns")` and `<PageMessages namespaces={["Ns"]}>` (always include `Common` — a nested provider replaces parent messages).
5. Metadata from `<Ns>.meta.*` via `localizePageMetadata(metadata, path, locale)` — default **localized**, not `english-only`.
6. JSON-LD: `absoluteLocalizedUrl` + `inLanguage[locale]`. Shared `#organization` / `#website` stay on the English origin.
7. Add the path to `app/sitemap.ts` as a normal localized route (not `ENGLISH_ONLY_PATHS`).
8. Structure in TS (slugs, hrefs, icons, image `src`); text in messages. See `lib/work-case-studies.ts` + `messages/*/workStudies.json`.

## Tone

- Formal Malaysian BM, second person **anda** (not Indonesian, not *kau*).
- Simplified Chinese, business **您**, full-width punctuation.
- Formal Russian, second person **вы** (never *ты*). Do not use «ростовщик» for money lender.
- Never translate: TrueKredit™, TrueSyariah™, TrueP2P™, TrueIdentity™, TrueSSM™, KPKT, MyKad, Tawarruq, Ta'widh, Gharamah, Shopify, client names. Use the glossary in `docs/I18N.md` — do not invent a second term.
- No hype words. zh titles: primary keyword in the first 10 code points, ≤ 30; descriptions 70–90. en/ms/ru titles ≤ 60; descriptions 140–160.

## English-only (do not extract)

Insights article bodies, legal pages (privacy/terms/PDPA/cybersecurity), product mock-UI labels, office address. Those stay English under `/ms`, `/zh`, and `/ru` with `englishOnlyMetadata` + `ENGLISH_ONLY_PATHS`.

## Checks

`pnpm i18n:check`, then `pnpm lint` and `pnpm build`. Spot-check `/path`, `/ms/path`, `/zh/path`, `/ru/path` (title, canonical, hreflang, body not leftover English).
