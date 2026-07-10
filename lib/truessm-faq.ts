export const truessmFaq = [
	{
		question: "What is TrueSSM™?",
		answer:
			"TrueSSM™ is Truestack's REST API for Malaysian Companies Commission (SSM) registry data. Integrate one API to search entities, pull ROC/ROB/LLP profiles, retrieve officers, shareholders, charges, and download scanned documents — with transparent RM pricing per operation.",
	},
	{
		question: "What registry data can I pull with TrueSSM™?",
		answer:
			"TrueSSM supports free entity search, company profiles (ROC), business profiles (ROB), LLP profiles, particulars of officers, share capital, shareholders, registered address, company secretary, charges, audit firm details, and scanned document list/image endpoints.",
	},
	{
		question: "How does TrueSSM™ pricing work?",
		answer:
			"Entity search validation is free when no match is found. Billable operations are priced transparently in Malaysian Ringgit per delivered pull — for example company profiles around RM 15.40. Failed validations and most no-data responses are not charged. Custom tiers are available for high volume.",
	},
	{
		question: "What is idempotent billing on TrueSSM™?",
		answer:
			"Send an Idempotency-Key header on pull requests so safe retries do not double-bill. If the same key already produced a delivered result, you receive the cached outcome without a second charge — important for automated underwriting and onboarding pipelines.",
	},
	{
		question: "Who uses TrueSSM™?",
		answer:
			"Lenders, underwriters, fintech onboarding teams, and compliance functions use TrueSSM to verify corporate borrowers and counterparties — pulling officers, share capital, charges, and filings in seconds instead of manual SSM portal work.",
	},
	{
		question: "How does TrueSSM™ relate to TrueKredit™ and TrueIdentity™?",
		answer:
			"TrueSSM uses a separate API key from TrueIdentity and integrates into Truestack lending stacks — including TrueKredit™ workflows that already wire Infomina/SSM checks for Malaysian KPKT and enterprise loan operations.",
	},
] as const;
