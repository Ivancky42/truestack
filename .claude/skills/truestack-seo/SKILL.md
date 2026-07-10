---
name: truestack-seo
description: SEO and AI-search (GEO) checklist for truestack.my. Use whenever a page is added, removed, renamed, or its copy/structure meaningfully changes — and for any request mentioning SEO, metadata, Open Graph, JSON-LD/schema, sitemap, llms.txt, redirects, or "how do we rank / show up in ChatGPT".
---

# Truestack SEO & AI-SEO skill

This is a marketing site: search engines and AI assistants are the top of the funnel.
Full rules live in [docs/BRAND_GUIDE.md](../../../docs/BRAND_GUIDE.md) §9; background in
[SEO.md](../../../SEO.md).

## On every page add/change, verify all of:

1. `metadata` export: unique title ≤ 60 chars, description 140–160 chars with the primary
   keyword, `alternates: { canonical: "/path" }`.
2. Open Graph image present (inherits `lib/seo-defaults.ts` `defaultOgImage` or `app/og/route.tsx`).
3. JSON-LD component in `components/seo/` rendered by the page — Service/Product schema,
   `FAQPage` whenever the page has an FAQ, BreadcrumbList for nested pages.
4. Route listed in `app/sitemap.ts` with priority/changeFrequency.
5. `public/llms.txt` line added/updated — keep it factual and dense with entity names
   (TrueKredit™, KPKT, Lampiran A/B1…). This file is what AI assistants quote.
6. FAQ answers are self-contained 2–4 sentence facts an AI can lift verbatim.
7. One `<h1>`, ordered headings, descriptive link text, `alt` on content images.
8. Cross-links to sibling products/services in body or `ConsultationCta` `extraLinks`.
9. Moved URL → 301 redirect in `next.config.ts` + sitemap + llms.txt in the same commit.
10. Malaysian long-tail keywords placed naturally in h1/h2/lead (e.g. "KPKT digital
    licence", "licensed money lender software Malaysia") — never stuffed.

## Verification

After changes: `npm run build`, then check the built page's `<head>` (title, description,
canonical, og:*) and validate any new JSON-LD shape against schema.org expectations.
