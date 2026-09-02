import type { FaqSchemaItem } from "@/components/seo/faq-schema";

export const homepageFaq: readonly FaqSchemaItem[] = [
	{
		question: "Where does our borrower data live?",
		answer:
			"On your own secure cloud in Malaysia, kept separate from every other lender we work with. Your borrower files never sit in a shared tenancy. That is the default for every TrueKredit™ deployment.",
	},
	{
		question: "Will this survive an audit?",
		answer:
			"Every action is logged with who did it and when, and KPKT paperwork generates from the same records your team works in. Auditors see one trail, not a pile of spreadsheets and folders. That is how TrueKredit™ stays audit-ready by default.",
	},
	{
		question: "What if we only need one of your APIs?",
		answer:
			"Yes. TrueIdentity™ e-KYC, TrueSSM™ company checks and our payment rails can each connect to the system you already run, via API — you do not have to move your loan book onto TrueKredit™. Take one service or take several. We will tell you what that integration involves, and what it costs, before you commit.",
	},
	{
		question: "How long until we are live?",
		answer:
			"Around three months for a full digital licence conversion, and less if you are only moving an existing loan book onto TrueKredit™. A new KPKT application takes longer because the regulator sets the pace, not the software.",
	},
	{
		question:
			"Do you handle Shariah digital lending as well as a conventional KPKT licence?",
		answer:
			"Yes. A conventional digital licence is kebenaran tambahan on an existing lesen PPW, and the book runs on TrueKredit™ Pro. Shariah digital lending is a separate upcoming KPKT approval — its own entity, Shariah committee and contracts — and runs on TrueSyariah™. The two licences cannot sit in the same operating company. We scope both paths; start at truestack.my/services/digital-license or truestack.my/truesyariah.",
	},
];
