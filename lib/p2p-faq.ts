export const p2pFaq = [
  {
    question: "What is P2P software development for the Malaysian market?",
    answer:
      "Peer-to-peer (P2P) software development is the design and engineering of online platforms that connect investors directly with issuers — typically SMEs, project sponsors, or invoice originators — without going through a traditional bank. In Malaysia, P2P financing platforms must be operated by a Recognised Market Operator (RMO) registered with the Securities Commission Malaysia (SC). Truestack builds production-ready P2P platforms that align with the SC's RMO framework, including investor onboarding, suitability assessment, escrow arrangements, listing workflows, payments, and audit trails.",
  },
  {
    question: "Do you build P2P lending platforms compliant with SC Malaysia regulations?",
    answer:
      "Yes. Every P2P platform we deliver is engineered with the SC Malaysia Guidelines on Recognised Markets and the Capital Markets and Services Act (CMSA) in mind. We map your business model to the relevant regulatory obligations, then ship the controls in code: tiered investor accreditation, investment limits per investor and per issuer, segregated trust account integration, AML/CFT screening, periodic reporting, and disclosure documents. If you are still pursuing Recognised Market Operator (RMO) registration, our consultancy team can align documentation and milestones with that pathway alongside engineering. We do not provide legal opinions, but we work alongside your legal counsel and compliance team so the platform is examiner-ready from day one.",
  },
  {
    question: "Do you build Shariah-compliant (syariah) P2P platforms?",
    answer:
      "Yes. We engineer Shariah-aligned variants of every P2P platform we deliver — for operators running an Islamic peer-to-peer financing business in Malaysia. That includes Shariah-screened asset onboarding, contract templates aligned with your Shariah committee, fee structures that avoid riba, segregated Gharamah and Ta'widh accounts (see below), and reporting tuned for Shariah committee review. We are a software partner, not a Shariah authority — we work with your appointed Shariah advisor so the platform reflects the rulings they have approved.",
  },
  {
    question: "How do you handle Gharamah and Ta'widh on a Shariah-compliant P2P platform?",
    answer:
      "On every late payment, the platform splits the late charge into two segregated accounting buckets. Ta'widh (تعويض) is the portion that represents the operator's actual cost of recovery — administrative overhead, collection costs — and may legitimately be retained by the financier or operator. Gharamah (غرامة) is the residual penalty that, under Shariah, must not enrich the financier; it is posted to a separate ledger and disbursed to approved charities on a documented schedule. Truestack builds the split logic, the cap-aware accumulation rules, the charity disbursement workflow, and the audit reports that your Shariah committee and the SC will both want to see — directly into the ledger.",
  },
  {
    question: "How long does it take to launch a P2P platform with Truestack?",
    answer:
      "A new P2P platform typically goes live within 4 to 6 months from kickoff. If you are still preparing your SC RMO application, our consultancy team can align engineering milestones with your registration roadmap so product delivery and submission timelines move together. Overall duration depends on the complexity of your asset class (invoice financing, SME term loans, project financing), the integrations required (e-KYC, CTOS/CCRIS, payment rails, escrow), and how quickly your team approves UAT. We use a battle-tested architecture and reusable modules — so we move at fintech speed without compromising compliance.",
  },
  {
    question: "What's included in your peer-to-peer platform stack?",
    answer:
      "Out of the box you get: an investor portal (web and mobile), an issuer portal, an admin and operations console, a listings engine with funding progress, automated investor matching, escrow and disbursement workflows, e-KYC and accreditation flows, e-signing, document vault, repayment processing, investor statements, and a reporting layer for SC submissions. Everything runs in AWS Malaysia for data residency, with role-based access control, full audit logs, and infrastructure-as-code.",
  },
  {
    question: "Can the P2P platform be customised to our asset class and investor strategy?",
    answer:
      "Yes. We design the listings engine, scoring model, fee structure, and investor experience around your specific asset class — invoice financing, SME working capital, supply-chain financing, asset-backed notes, or project financing. We tune the investor accreditation logic and per-investor concentration limits to your SC submission, with branding and workflows shaped for your operator.",
  },
  {
    question: "Do you handle integrations with Malaysian fintech vendors?",
    answer:
      "Yes. We routinely integrate with Malaysian rails — including FPX, DuitNow, payment gateways, escrow trustees, e-KYC providers (TrueIdentity and others), CTOS/CCRIS for credit data, MyKad and SSM verification, and digital signing providers. We also handle the vendor procurement and technical liaison so your team isn't stuck negotiating five contracts in parallel.",
  },
  {
    question: "How do you ensure security and PDPA compliance for a P2P platform?",
    answer:
      "Security is engineered in, not bolted on. Every platform ships with: encryption at rest and in transit, segregated production environments, secrets management, infrastructure-as-code, automated backups, intrusion detection, and a documented security operations runbook. We follow PDPA requirements for personal data of borrowers and investors, including consent management, retention policies, and data subject access workflows. We also coordinate independent penetration testing before launch.",
  },
  {
    question: "Do you provide ongoing maintenance after the P2P platform goes live?",
    answer:
      "Yes. We offer ongoing managed engineering — covering platform monitoring, incident response, regulatory change tracking, periodic security reviews, feature delivery, and SC reporting support. Most clients keep us as their long-term technology partner so the platform stays aligned with SC updates and market expectations as the portfolio scales.",
  },
  {
    question: "Can you help us prepare for SC Malaysia RMO registration?",
    answer:
      "Yes. Besides TrueP2P™ platform engineering, we maintain a consultancy team that can guide you through the full A–Z of developing your peer-to-peer offering and pursuing Recognised Market Operator (RMO) approval with the Securities Commission Malaysia. We combine in-house regulatory-technology expertise with a network of specialist consultants to support documentation, submission readiness, examiner conversations, and milestones alongside your build — so your platform and your licensing pathway stay aligned. We are not a law firm; formal legal advice stays with your lawyers, and we coordinate closely with them.",
  },
  {
    question: "What does a P2P platform development engagement cost?",
    answer:
      "Costs depend on scope, asset class, integrations, and delivery timeline. Most full P2P platform builds — covering investor portal, issuer portal, admin console, e-KYC, payments, escrow, e-signing, and reporting — sit in a clearly scoped fixed-fee range with a monthly managed-engineering retainer afterwards. Talk to us for a written proposal tailored to your business model and SC submission.",
  },
] as const;
