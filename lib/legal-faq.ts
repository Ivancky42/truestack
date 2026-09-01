export const cybersecurityFaq = [
  {
    question: "Where does Truestack host customer systems?",
    answer:
      "Truestack designs its platforms around Malaysian data residency. Production infrastructure is hosted in the AWS Malaysia region where applicable. Customer TrueKredit™ deployments keep each lender's data on their own Malaysia-hosted cloud, never mixed with other lenders.",
  },
  {
    question: "Which Truestack systems does the cybersecurity policy cover?",
    answer:
      "The policy covers truestack.my, admin.truestack.my, developers.truestack.my, demo.truestack.my, demo-admin.truestack.my, and api.truestack.my. It applies to TrueKredit™, TrueSyariah™, TrueIdentity™, TrueSSM™, and related KPKT compliance services. Additional contractual controls may apply to a specific deployment.",
  },
  {
    question: "Are demonstration environments production systems?",
    answer:
      "No. demo.truestack.my and demo-admin.truestack.my are demonstration environments for evaluation. They are isolated from production loan books, may be reset, and must not be used to process live borrower or customer data unless Truestack has agreed otherwise in writing.",
  },
  {
    question: "How do I report a security concern to Truestack?",
    answer:
      "Email hello@truestack.my with a clear description of the issue, the affected host or product, and any steps needed to reproduce it. Do not include live personal data or exploit code in the report. Truestack will acknowledge the report and follow up as needed.",
  },
] as const;

export const pdpaFaq = [
  {
    question: "Is Truestack the data controller for TrueIdentity e-KYC?",
    answer:
      "Usually no. For TrueIdentity™ verification run at a lender's request, the requesting business is the data controller and Truestack acts as a data processor. Truestack is the controller for personal data you submit on truestack.my — for example a consultation enquiry or job application.",
  },
  {
    question: "What personal data does TrueIdentity process?",
    answer:
      "TrueIdentity™ may process identity fields, MyKad or passport images, OCR-extracted data, selfie and liveness media, biometric match results, fraud-screening outcomes, and audit metadata. Verification results are returned to the business that requested the check.",
  },
  {
    question: "Does Truestack sell personal data?",
    answer:
      "No. Truestack does not sell personal data. Data is shared only with the requesting customer, contracted processors needed to deliver the service (for example Innov8tif, MSC Trustgate, or CTOS), or authorities where Malaysian law requires it.",
  },
  {
    question: "How do I make a PDPA request to Truestack?",
    answer:
      "Email hello@truestack.my with enough detail for us to identify you and the request (access, correction, withdrawal, or a limit on processing). If your data was collected for a lender's KYC or loan file, we may need to refer the request to that business as the controller.",
  },
] as const;

export const privacyFaq = [
  {
    question: "What personal information does the Truestack website collect?",
    answer:
      "If you contact us, we collect the details you submit — typically your name, email, phone number, company, and message. The site may also collect technical data such as IP address, browser type, pages visited, and referring URL. We do not currently use advertising cookies or third-party marketing pixels.",
  },
  {
    question: "How is the privacy policy different from the PDPA notice?",
    answer:
      "The privacy policy explains how Truestack handles personal information across the marketing site and related systems in plain language. The PDPA notice is the Malaysia-specific notice-and-choice statement under the Personal Data Protection Act 2010, including TrueIdentity™ verification and third-party processors.",
  },
  {
    question: "Does Truestack sell or rent personal information?",
    answer:
      "No. Truestack Technologies Sdn. Bhd. does not sell, trade, or rent personal information to third parties for marketing. We share information only with service providers who help us operate, professional advisors, or authorities when the law requires it.",
  },
  {
    question: "How can I access or correct my personal data?",
    answer:
      "Email hello@truestack.my and describe the data and the change you want. Under Malaysia's PDPA you may request access, correction, withdrawal of consent, or a limit on certain processing, subject to legal requirements.",
  },
] as const;

export const termsFaq = [
  {
    question: "What do the Truestack terms of use cover?",
    answer:
      "These terms cover truestack.my and related Truestack systems we operate for information, demonstration, and developer access — including developers.truestack.my, demo.truestack.my, and demo-admin.truestack.my. Paid products such as TrueKredit™ are licensed under a separate customer agreement.",
  },
  {
    question: "Can I use the demo environments for live lending?",
    answer:
      "No. Demonstration environments are for evaluation only. They may be reset, carry no production uptime commitment, and must not be used to process live borrower or customer data unless Truestack has agreed otherwise in writing.",
  },
  {
    question: "Does the website constitute an offer of services?",
    answer:
      "No. truestack.my is for informational purposes and does not constitute an offer or solicitation. Service scope, pricing, and obligations are confirmed only in a written agreement or a booked consultation.",
  },
  {
    question: "Which law governs the Truestack terms of use?",
    answer:
      "The terms are governed by the laws of Malaysia. Disputes are subject to the exclusive jurisdiction of the courts of Malaysia. The contracting entity is Truestack Technologies Sdn. Bhd. (Registration No. 202501058714 (1660120-X)).",
  },
] as const;
