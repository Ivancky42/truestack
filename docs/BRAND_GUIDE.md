# Truestack Brand & Frontend Guide

**The single source of truth for anyone (human or AI agent) touching this site.**
Read this before writing copy, building a section, or creating a page. When code on the
site conflicts with this guide, the guide wins — fix the code.

- Repo: pure frontend marketing site (Next.js App Router, Tailwind v4, shadcn/ui, framer-motion, lucide-react).
- Related docs: [SEO.md](../SEO.md) (SEO background), [docs/truekredit-product-context.md](./truekredit-product-context.md) (product facts).
- Reference implementation: **`app/truekredit/page.tsx`** — when unsure how a section, tone, or pattern should feel, mirror that page.

---

## 1. Who we are and who we talk to

Truestack is a Malaysian fintech company: KPKT licensing services and lending software
(TrueKredit™, TrueSyariah™, TrueP2P™, TrueIdentity™, TrueSSM™, Truestack Core™).

**Audience: decision makers, not developers.** Owners and directors of licensed money
lenders, compliance managers, founders going for a KPKT digital licence. They care about:
staying compliant, not losing track of the loan book, growing without risk, and keeping
their data safe. They do not care about our stack.

Exception: TrueIdentity, TrueSSM and Truestack Core are developer-facing API products —
technical detail is welcome there, but the framing still leads with the business outcome.

---

## 2. Tone of voice

**Concise, friendly, confident. Written for a busy business owner.**
The TrueKredit page (`app/truekredit/page.tsx`) is the canonical tone reference.

### Rules

1. **Benefit-first headlines, short declaratives, end with a period.**
   - ✅ "Run your entire lending book from one platform."
   - ✅ "Lending is messy. Keeping it under control shouldn't be."
   - ❌ "A Comprehensive Loan Management Solution"
2. **Second person, always.** "Your team", "your loan book", "your data stays with you."
3. **Plain English. Zero developer jargon on marketing pages.**
   Banned in customer-facing copy: API, SDK, microservices, PostgreSQL, Redis, backend,
   endpoint, deployment, infrastructure-as-…, "unified platform architecture".
   Translate instead: "API integration" → "checks that happen inside the same system".
   (Allowed on TrueIdentity/TrueSSM pages and the tech-stack/partner strips.)
4. **Name Malaysian realities precisely.** KPKT, MyKad, Lampiran A/B1, CTOS, SSM,
   Bursa Suq Al-Sila', Ta'widh, Gharamah. Specificity builds trust; our buyers know
   these terms better than we do.
5. **No hype words.** Banned: revolutionary, cutting-edge, world-class, seamless,
   next-generation, best-in-class, robust, leverage, empower. Prove it with a specific
   instead: "audit-ready every day", "your data never mixed with other lenders".
6. **Short sentences. Em-dash rhythm is our signature.**
   "Borrowers, schedules, repayments and KPKT paperwork — one system your whole team trusts."
7. **Answer the fear, not the feature.** Every section should map to a worry the buyer
   already has (audits, errors, growth, data safety). Pain → relief structure
   (see the "Lending is messy" section) is our strongest pattern.
8. **Spelling: Malaysian/British English in copy** — "licence" (noun), "organisation",
   "enquiry". **URLs keep American spelling** (`/services/digital-license`) — never change
   existing slugs.
9. **Trademark: first prominent mention of a product per page gets ™** (TrueKredit™),
   then plain. Product names are always CamelCase, never spaced.
10. **CTAs:** primary is always **"Book a Free Consultation"** → `/contact?subject=<Product>`.
    Secondary CTAs are specific and low-pressure: "Standard vs Pro", "See how it works".
    Never "Learn More" or "Get Started" alone.

---

## 3. Color system

All neutrals and the primary brand color come from CSS tokens in `app/globals.css`.
**Never hardcode hex values in JSX.** Exceptions: third-party logo marks (e.g. AWS
`#FF9900`) and `app/og/route.tsx` (inline styles required there).

### Tokens (use these class names)

| Use | Class |
|---|---|
| Page background / text | `bg-background` / `text-foreground` |
| Secondary text | `text-muted-foreground` |
| Tinted section background | `bg-muted/30` (or `/20`) |
| Borders | `border` (token), `border-primary/20` for accent |
| Cards | `bg-card`, `rounded-2xl`/`rounded-3xl`, `border`, `shadow-sm` |
| Brand blue | `text-primary`, `bg-primary/10`, gradient `from-primary-start to-primary-end` |
| KPKT accent | `bg-kpkt`, `text-kpkt` |

### Product accent ramps (sanctioned raw Tailwind colors)

Each product line owns one accent. Do not invent new ones.

| Context | Accent | Gradient |
|---|---|---|
| Truestack / TrueKredit Standard | `primary` (blue) | `from-primary-start to-primary-end` |
| TrueKredit **Pro** | `violet-600/700` (chips: `bg-violet-500/10 text-violet-700`) | `from-indigo-600 to-violet-600` |
| TrueSyariah | `emerald-600/700` | `from-emerald-600 to-teal-600` |
| KPKT services | `kpkt` token | `from-kpkt to-cyan-600` |
| Pain / problem panels | `red-300/500` on dark only | — |
| "Soon" / caution | `amber-600/700` | — |

These map to `ConsultationCta`'s `accent` prop (`brand | truekredit | truesyariah | kpkt`)
— use that prop, don't rebuild CTA bands.

### Dark sections

Trust/infrastructure sections use an inverted panel: `bg-slate-950 text-white`,
body copy `text-slate-400`, hairlines `border-slate-800`, and **must** set
`data-nav-theme="dark"` so the header adapts. Slate (not gray/zinc/neutral) is the only
dark neutral family.

Any other raw Tailwind color in marketing UI is a violation. Inside *product UI mockups*
(fake app screens in `*-visuals.tsx` / `*-mocks.tsx`), realistic UI colors (green status
dots, syntax-highlight colors) are allowed — mockups depict software, not our brand.

---

## 4. Typography

Fonts are wired in `app/layout.tsx`: **Rethink Sans** (`font-display`) for headings,
**Inter** (`font-sans`) for body, **Geist Mono** (`font-mono`) for code/technical only.
Body base is 17px.

| Level | Classes |
|---|---|
| Hero h1 (product pages) | `font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl` |
| Section h2 | `font-display text-3xl font-medium tracking-tight md:text-4xl` |
| Card/panel h3 | `font-display text-xl font-medium tracking-tight md:text-2xl` |
| Eyebrow (above h2) | `text-xs font-semibold uppercase tracking-widest text-primary` (or accent) |
| Lead / subtitle | `text-base text-muted-foreground md:text-lg` (heroes: `text-lg md:text-xl`) |
| Card body | `text-sm` or `text-[15px] leading-relaxed text-muted-foreground` |

Rules:
- Every h1/h2/h3 display heading uses `font-display font-medium tracking-tight`. No bold headings.
- One `<h1>` per page. Never skip heading levels.
- Gradient text (`bg-clip-text`) is for **one phrase in a hero h1 only**, using the
  page's accent gradient.
- The muted-second-sentence heading trick is on-brand:
  `Lending is messy. <span class="text-muted-foreground">Keeping it under control shouldn't be.</span>`

---

## 5. Section anatomy & layout

Every marketing section follows this skeleton:

```tsx
<section id="…" className="border-t bg-background py-16 md:py-20">   {/* or bg-muted/30 */}
  <div className="mx-auto max-w-6xl px-6">                           {/* or px-5 sm:px-6 lg:px-8 */}
    {/* centered intro */}
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Eyebrow</p>
      <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">…</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">…</p>
    </motion.div>
    {/* content grid */}
  </div>
</section>
```

- Alternate `bg-background` and `bg-muted/30` between adjacent sections; separate with `border-t`.
- Container is always `max-w-6xl`; prose blocks cap at `max-w-3xl`/`max-w-2xl`.
- Cards: `rounded-2xl`/`rounded-3xl border bg-card shadow-sm`, hover
  `hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md` (accent border matches section accent).
- Icon chips: `flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10` +
  `h-4 w-4 text-primary` lucide icon.
- Every page ends with `<ConsultationCta accent="…">` — never a bespoke CTA band.
- Reuse before building: `SectionBadge`, `SectionHeader`, `ConsultationCta`, `CtaLink`,
  `FeatureCarousel`, `CaseStudyCard`, shadcn `ui/*`. New shared pattern → `components/shared/`.

## 6. Motion

- framer-motion only. Scroll reveal: `initial={{ opacity: 0, y: 16–20 }}`,
  `whileInView`, `viewport={{ once: true, margin: "-50px" }}`, `duration: 0.5`,
  stagger siblings with `delay: 0.08–0.1`. Heroes animate on mount (`animate`, `duration: 0.6`).
- Motion is subtle and vertical. No spinning, no bouncing, no parallax.
- Decorative loops (blur orbs, marquees) must respect `prefers-reduced-motion`
  (see `.logo-marquee-*` in globals.css).

## 7. Iconography & illustration

- **lucide-react only.** No emoji in UI, no other icon sets.
- Product features are illustrated with **built UI mockups** (see `module-visuals.tsx`,
  `truekredit-feature-mocks.tsx`) — never generic illustrations or 3D clip art.
- Decorative backgrounds: the SVG grid pattern + blurred gradient orb (see `GridPattern`
  in truekredit page) at ≤ 0.05 opacity. Mark all decorative elements `aria-hidden`.

---

## 8. Photography (stock images)

Photos make the site human — **used sparingly and only where a human belongs in the story.**

### Where photos belong
- **About / Careers** — workplace, team-scale credibility.
- **Contact / consultation CTAs** — a person you'd actually talk to.
- **Success stories / case studies** — real client context.
- **Service pages (advisory services)** — e.g. digital-licence consulting: a meeting, a counter.

### Where photos are banned
- Product feature sections — those stay as UI mockups (our product *is* the visual).
- Heroes of product pages (TrueKredit, TrueSyariah, TrueP2P, TrueIdentity, TrueSSM).
- Anywhere a photo would be the *third* photo on the page. Max ~2 photo moments per page.

### Selection rules
- Southeast-Asian / Malaysian-plausible people and settings. A Kuala Lumpur office, a
  shopfront counter, Malaysian streetscape — not a Manhattan boardroom.
- Candid working moments. **Banned clichés:** handshakes, pointing at whiteboards,
  thumbs-up, headset customer support women, stacks of coins, gavel + money.
- Natural light, warm but not orange; must sit comfortably next to our blue primary.
- License: Unsplash / Pexels (or purchased). Record every file in `docs/IMAGE_CREDITS.md`
  (file → photographer → source URL → license).

### Treatment (so photos look like *our* photos)
- Store in `public/photos/`, kebab-case names (`about-team-office.jpg`).
- Always `next/image` with meaningful `alt`, explicit `sizes`, container-driven crop.
- Container: `rounded-3xl border overflow-hidden shadow-sm` — same card language as UI.
- Optional brand wash for cohesion: overlay `bg-primary/10 mix-blend-multiply` or a
  `from-slate-950/40 to-transparent` gradient when text sits on the photo.
- Never full-bleed screen-width photos; photos live inside the `max-w-6xl` grid,
  usually as one column of a 2-col layout or an aspect-ratio card (`aspect-[4/3]`, `aspect-[5/4]`).

---

## 9. SEO & AI-search (GEO) — every page, every time

This is a marketing site: **search and AI assistants are the top of our funnel.**
Any new page or meaningful copy change must complete this checklist:

1. **Metadata export** — unique `title` (≤ 60 chars, template appends "- Truestack"),
   `description` 140–160 chars written like ad copy with the primary keyword, and
   `alternates: { canonical: "/path" }`.
2. **Open Graph** — inherit `defaultOgImage` or use `app/og/route.tsx`; don't ship a page
   with no OG image.
3. **JSON-LD** — add/extend a schema component in `components/seo/` (Service, Product,
   `FAQPage` whenever the page has an FAQ, BreadcrumbList for deep pages). Render it in
   the page/layout.
4. **`app/sitemap.ts`** — add the route with sensible priority/changeFrequency.
5. **`public/llms.txt`** — add/update the page's line. This is our AI-SEO surface:
   keep the one-paragraph summary current, factual, and dense with entity names
   (TrueKredit™, KPKT, Lampiran…). AI assistants quote this file.
6. **Answer-shaped content** — every product/service page carries an FAQ section
   (accordion + `FAQPage` schema) whose answers are self-contained, 2–4 sentence,
   quotable facts. Write them so ChatGPT/Perplexity can lift them verbatim.
7. **Semantic HTML** — one `<h1>`, ordered heading levels, real `<section>`s,
   descriptive link text (never "click here"), `alt` on every content image.
8. **Internal links** — every product page cross-links its siblings
   (TrueKredit ↔ TrueSyariah ↔ TrueP2P ↔ digital-licence) in body copy or the CTA band's
   `extraLinks`.
9. **Keywords in copy, not stuffed** — Malaysian long-tails ("KPKT digital licence",
   "licensed money lender software Malaysia") belong in h1/h2/lead naturally.
10. **Redirects** — if a URL moves, add a 301 in `next.config.ts` and update sitemap +
    llms.txt in the same commit.

---

## 10. Pre-merge checklist (agents: verify before finishing)

- [ ] Copy passes tone rules (§2): no jargon, no hype words, benefit-first, "Book a Free Consultation" CTA.
- [ ] Colors are tokens or the page's sanctioned accent ramp (§3); no new raw colors, no hex.
- [ ] Headings use `font-display font-medium tracking-tight`; scale matches §4.
- [ ] Section skeleton matches §5 (border-t, py-16 md:py-20, max-w-6xl, eyebrow pattern).
- [ ] Dark sections set `data-nav-theme="dark"`.
- [ ] Motion follows §6 and decorative elements are `aria-hidden`.
- [ ] Photos (if any) follow §8 and are credited in `docs/IMAGE_CREDITS.md`.
- [ ] SEO checklist §9 complete (metadata, canonical, JSON-LD, sitemap, llms.txt, FAQ).
- [ ] Reused shared components instead of duplicating (§5).
- [ ] `npm run lint` and `npm run build` pass.
