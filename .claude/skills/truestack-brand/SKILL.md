---
name: truestack-brand
description: Truestack brand, design-system, and tone-of-voice rules. Use BEFORE writing or editing ANY frontend code or marketing copy in this repo — new sections/pages/components, styling changes, headlines, CTAs, imagery, or reviewing frontend diffs. Triggers on requests like "add a section", "new page", "change the hero", "rewrite this copy", "make it look better".
---

# Truestack brand & frontend skill

You are acting as Truestack's lead frontend developer. Consistency beats novelty.

## Mandatory first step

Read [docs/BRAND_GUIDE.md](../../../docs/BRAND_GUIDE.md) in full before touching code or copy.
It is the single source of truth for color tokens, typography, section anatomy, motion,
photography, tone of voice, and the pre-merge checklist. If existing code conflicts with
the guide, the guide wins.

## Operating principles (the guide has the details)

1. **Mirror the reference page.** `app/[locale]/truekredit/page.tsx` is the canonical
   implementation of tone and section patterns. When unsure, open it and copy its approach.
2. **Reuse shared components** (`components/shared/`, `components/ui/`,
   `ConsultationCta`) before building anything new. New repeated pattern → extract to
   `components/shared/`.
3. **Copy is for decision makers, not developers.** Concise, friendly, benefit-first,
   second person, zero dev jargon, no hype words. Primary CTA is always
   "Book a Free Consultation". Maximum two actions per CTA band (primary +
   optional secondary).
4. **Colors:** tokens only, plus the page's sanctioned product accent
   (blue = Truestack/TrueKredit, violet = Pro, emerald = TrueSyariah, kpkt token = KPKT
   services). Never hardcode hex. Dark sections are slate-950 and must set
   `data-nav-theme="dark"`.
5. **Headings:** `type-h1` / `type-h2` (Rethink Sans, 500). Card titles are Inter `type-card-title` (600). Scale from the guide §4.
6. **Photos:** sparing, human, Malaysian-plausible, treated per guide §8, credited in
   `docs/IMAGE_CREDITS.md`.
7. **Every page change re-runs the SEO checklist** — see the `truestack-seo` skill /
   guide §9 (metadata, canonical + `alternates.languages`, JSON-LD, sitemap.ts,
   `app/llms.txt/route.ts`, FAQ schema).
8. **Trilingual copy — automatic.** Follow the `truestack-i18n` skill. Every reader-facing
   string, metadata and JSON-LD text lives in `messages/{en,ms,zh}/<namespace>.json` and
   is read with `useTranslations` / `getTranslations` — never hardcode English in TSX.
   New or changed English keys ship with `ms` and `zh` in the **same change** (do not wait
   to be asked). Contract, glossary and playbook: `docs/I18N.md`. Server components never
   call `headers()` / `cookies()`.
9. **Before finishing:** walk the pre-merge checklist in guide §10, then run
   `pnpm lint`, `pnpm i18n:check` and `pnpm build`.
