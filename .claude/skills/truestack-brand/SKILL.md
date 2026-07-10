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

1. **Mirror the reference page.** `app/truekredit/page.tsx` is the canonical
   implementation of tone and section patterns. When unsure, open it and copy its approach.
2. **Reuse shared components** (`components/shared/`, `components/ui/`,
   `ConsultationCta`) before building anything new. New repeated pattern → extract to
   `components/shared/`.
3. **Copy is for decision makers, not developers.** Concise, friendly, benefit-first,
   second person, zero dev jargon, no hype words. Primary CTA is always
   "Book a Free Consultation".
4. **Colors:** tokens only, plus the page's sanctioned product accent
   (blue = Truestack/TrueKredit, violet = Pro, emerald = TrueSyariah, kpkt token = KPKT
   services). Never hardcode hex. Dark sections are slate-950 and must set
   `data-nav-theme="dark"`.
5. **Headings:** `font-display font-medium tracking-tight`, scale from the guide §4.
6. **Photos:** sparing, human, Malaysian-plausible, treated per guide §8, credited in
   `docs/IMAGE_CREDITS.md`.
7. **Every page change re-runs the SEO checklist** — see the `truestack-seo` skill /
   guide §9 (metadata, canonical, JSON-LD, sitemap.ts, public/llms.txt, FAQ schema).
8. **Before finishing:** walk the pre-merge checklist in guide §10, then run
   `npm run lint` and `npm run build`.
