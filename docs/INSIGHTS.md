# Insights publishing contract

Contract for AI agents that publish to [truestack.my/insights](https://www.truestack.my/insights) through **Sanity MCP**. Schema source of truth: `sanity/schemaTypes/post.ts` and `lib/insights/types.ts`. Tone and SEO: [BRAND_GUIDE.md](./BRAND_GUIDE.md) §2 and §9.

**MCP setup is intentionally not in this repo.** Connect Sanity MCP yourself. Never put a token, webhook secret, or write credential in git, this file, or a commit.

| | |
|---|---|
| Project | `ms6n63j9` |
| Dataset | `production` |
| Type | `insightPost` |
| Live URL | `https://www.truestack.my/insights/{slug}` |

The site renders **published documents only**. Drafts stay off the site until `publish_documents`. Documents with `publishedAt` in the future stay off the site until that time.

---

## Cadence and research

Publish **1–4 researched posts per month**. Quality over volume. Insights covers
Truestack's work across fintech, software delivery, identity and company updates — not
only licensed money lending. Do not ship thin, generic, or uncited posts.

Before drafting:

1. Read the matching product or service page and [truekredit-product-context.md](./truekredit-product-context.md) when the topic is TrueKredit.
2. Check official sources for regulatory claims (KPKT, SC, BNM, legislation, gazetted guidelines). Quote current Malaysian terms: KPKT, MyKad, Lampiran A/B1, CTOS, SSM, Ta'widh, Gharamah, Tawarruq.
3. Do not invent product capabilities, licence outcomes, client names, or metrics. If a fact is not on the site or an official source, leave it out or keep the document in draft.

---

## Tone (BRAND_GUIDE §2)

Write for a busy decision maker — a lender owner, compliance manager, founder or product
lead. Use second person and stay concise, friendly and confident. Benefit-first
headlines end with a period. Short sentences; em-dash rhythm is on-brand.

**Spelling:** Malaysian/British English in copy (`licence`, `organisation`, `enquiry`). **URLs keep American slugs** (`/services/digital-license`). First prominent product mention on the page gets ™, then plain CamelCase.

**Banned jargon** (marketing copy): API, SDK, microservices, PostgreSQL, Redis, backend, endpoint, deployment, infrastructure-as-…, “unified platform architecture”.

**Banned hype:** revolutionary, cutting-edge, world-class, seamless, next-generation, best-in-class, robust, leverage, empower.

Primary CTA is **Book a Free Consultation** → `/contact?subject=<Product>`. Never “Learn More” or “Get Started” alone. Link text must be descriptive — never “click here”.

---

## Field contract

### Required

| Field | Rules |
|---|---|
| `title` | 12–100 chars. Benefit-first. Ends with a period when it is a headline. |
| `slug` | Sanity slug, max 80, from title. Kebab-case. Do not invent new URL spellings. |
| `excerpt` | **140–200** chars. Specific summary for the index card. |
| `category` | Exact enum (one): `KPKT Licensing` · `Lending Operations` · `Shariah Financing` · `Compliance` · `Software Delivery` · `Identity & Data` · `Product Updates` · `Company News` |
| `publishedAt` | ISO datetime. Set the intended publish time. |
| `body` | Portable Text, **minimum 3 blocks**. See below. |
| `seoDescription` | **140–160** chars. Ad-copy sentence with the primary Malaysian search term. |
| `relatedProducts` | **1–4 unique keys** from the enum below. These become on-page internal links. |
| `mainImage` | Required cover image with meaningful `alt` text (8–180 chars). Malaysian-plausible, no stock clichés (BRAND_GUIDE §8). |

### Optional

| Field | Rules |
|---|---|
| `seoTitle` | ≤ 60 chars. Defaults to `title`. Site template appends “- Truestack”. |
| `author` | `{ name` (2–80), `role?` (≤ 80) `}`. Omit to default to **Truestack team**. |
| `faq` | 0–8 items. Strongly recommended for AI-SEO. See FAQ rules. |
| `tags` | 0–8 unique strings. |

### `relatedProducts` keys (exact)

Use these string values only:

| Key | Links to |
|---|---|
| `truekredit` | `/truekredit` |
| `truesyariah` | `/truesyariah` |
| `truep2p` | `/services/p2p-software-development` |
| `digitalLicense` | `/services/digital-license` |
| `accountManagement` | `/services/account-management` |
| `trueidentity` | `/trueidentity` |
| `truessm` | `/truessm` |

Pick products the article actually helps the reader next. Also place at least one of those paths as a descriptive in-body link (BRAND_GUIDE §9).

---

## Portable Text (`body`)

Allowed only:

- Blocks: `normal`, `h2`, `h3`, `h4`, `blockquote`
- Lists: `bullet`, `number`
- Marks: `strong`, `em`
- Link annotation: `href` as `http`, `https`, `mailto`, `tel`, or a site-relative path (`/truekredit`)
- Images: hotspot allowed; `alt` required (8–180)

Do **not** use `h1` (the page title is the only h1), custom block types, raw HTML, or code marks. Prefer internal paths over absolute marketing URLs. External links must be reputable sources.

---

## FAQ

Optional in schema, expected when the article answers real buyer questions.

- `question`: 10–160 chars.
- `answer`: 80–700 chars, **2–4 self-contained sentences** a search or AI assistant can quote verbatim (BRAND_GUIDE §9).
- Factual, not teaser copy. No “contact us to find out”.

---

## Draft-first MCP flow

1. Research and write against this contract.
2. `create_documents` — always create a **draft** (`insightPost` in `ms6n63j9` / `production`).
3. Stop. A human reviews the draft (facts, tone, fields, links).
4. Patch the draft if needed. **Do not** call `publish_documents` until review is explicit.
5. After approval only: `publish_documents`.

Never auto-publish. Never write tokens into the document.

---

## After publish

Webhook revalidation may take a moment. Then check:

1. `https://www.truestack.my/insights/{slug}` — article live, title/excerpt/FAQ/related links correct.
2. `https://www.truestack.my/sitemap.xml` — `/insights` and `/insights/{slug}` present, plus the same paths under `/ms`, `/zh` and `/ru`.
3. `https://www.truestack.my/llms.txt` — Insights section lists the post (title, category, excerpt).

Do **not** edit `app/sitemap.ts` or llms source for a new post. Both are generated from published Sanity documents.
