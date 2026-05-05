export const truekreditFaq = [
  {
    question: "Is TrueKredit only for KPKT PPW (offline) licensees?",
    answer:
      "No. If you're licensed to lend money, you can run the day-to-day stack—we ship Lampiran, Jadual, iDEaL-ready exports and the rest tuned for Malaysian KPKT PPW rules. Choose Standard when counters lead. Choose TrueKredit Pro when auditors expect borrower apps, video attestation and on-prem Trustgate evidence—we built those rails for KPKT online money lending compliance, not generic bolt-ons.",
  },
  {
    question: "What is included in the shared core on TrueKredit and TrueKredit Pro?",
    answer:
      "Either plan covers what's in the comparison table Core row: lifecycle plus Books A/B, e‑KYC, CTOS and SSM, Lampiran/Jadual letters, repayments, analytics, gateways, audits, walk-in origination and daily backups—all in Malaysia AWS. Pro doesn't shrink Standard; it layers borrower channels and separation online licensees get asked for.",
  },
  {
    question: "What connected modules ship on Standard and Pro?",
    answer:
      "You wire CTOS, Infomina SSM, TrueIdentity™, Truesend™ (if you subscribe), Malaysian gateways and Trustgate-backed signing the same way on both plans. TrueSight™ works the same where you opt in. Pro adds the hardened on-prem Trustgate path, tighter tenancy and examiner-ready packs we shaped for online KPKT reviews.",
  },
  {
    question: "What is exclusive to TrueKredit Pro?",
    answer:
      "Everything under Pro-exclusive matches what examiners usually want from Malaysian online licensees: Trustgate in your infrastructure, Digital Attestation with desk oversight and hosted video, borrower web and native apps, marketing sites, pen-test dossier templates, plus isolated databases and secrets. We bundled it so you're not stitching five vendors together.",
  },
  {
    question: "How does TrueKredit Standard differ from Pro in practice?",
    answer:
      "Standard is lean SaaS when you're mostly offline PPW and branch-led. Step up to Pro when you need the artifacts for KPKT online lending—borrower self-serve, PKI separation, examiner dossiers—while keeping the same core workflows underneath.",
  },
  {
    question: "How do borrower channels compare across editions?",
    answer:
      "Standard keeps origination officer-led at the counter. Pro adds branded portals and apps so borrowers finish KYC and signing online—handy when KPKT wants a clear line between digital disbursements and clerk-led flows.",
  },
  {
    question: "How do hosting and data isolation differ?",
    answer:
      "Both run in Malaysian AWS with encryption and rolling backups. Standard uses shared tenancy with strict isolation—great for offline-first workloads. Pro gives you dedicated accounts plus separate databases and secrets vaults—the layout examiners ping when they dig into online portfolios.",
  },
  {
    question: "Can we start on Standard and upgrade to TrueKredit Pro?",
    answer:
      "Yes. Start on Standard, then move to Pro when your permit or examiner steers you online—without throwing away workflows. Talk to us early so migration lines up with your supervisory timeline.",
  },
  {
    question: "Do you support Lampiran A and iDEAL CSV exports on both editions?",
    answer:
      "Yes. Lampiran A and CSV tuned for KPKT iDEaL ingestion ship on Standard and Pro.",
  },
  {
    question:
      "Do I need Truesend™ just to produce PDF receipts and letters?",
    answer:
      "No. PDFs land in the system either way. Truesend™ only handles automated delivery if you want it.",
  },
  {
    question: "Is historical loan data safeguarded whichever edition we choose?",
    answer:
      "Yes—encrypted storage, backups (including Standard's daily snapshots) and your history stays reachable for audits while your subscription is active.",
  },
] as const;
