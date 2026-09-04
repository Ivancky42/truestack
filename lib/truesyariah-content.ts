export const truesyariahStages = [
	{ key: "entity", n: "01" },
	{ key: "committee", n: "02" },
	{ key: "submission", n: "03" },
	{ key: "golive", n: "04" },
] as const;

export const truesyariahLifecycle = [
	{ key: "application" },
	{ key: "assessment" },
	{ key: "aqad" },
	{ key: "tawarruq" },
	{ key: "servicing" },
	{ key: "settlement", final: true },
] as const;

export const truesyariahRecordFields = [
	{ key: "contract", arabic: "عقد" },
	{ key: "commodity", arabic: "تورق" },
	{ key: "compensation", arabic: "تعويض" },
	{ key: "penalty", arabic: "غرامة" },
	{ key: "profit", arabic: "ربا" },
] as const;

export const truesyariahModules = [
	{ key: "customer" },
	{ key: "origination" },
	{ key: "commodity" },
	{ key: "schedules" },
	{ key: "lateCharge" },
	{ key: "collections" },
	{ key: "documents" },
	{ key: "reporting" },
] as const;

export const truesyariahGovernance = [
	{ key: "contracts" },
	{ key: "trades" },
	{ key: "charity" },
	{ key: "audit" },
] as const;

export const truesyariahTerms = [
	{ key: "tawarruq", arabic: "تورق" },
	{ key: "tawidh", arabic: "تعويض" },
	{ key: "gharamah", arabic: "غرامة" },
	{ key: "aqad", arabic: "عقد" },
	{ key: "riba", arabic: "ربا" },
] as const;

export const truesyariahReceive = [
	{ key: "commodity" },
	{ key: "identity" },
	{ key: "apps" },
	{ key: "payments" },
	{ key: "credit" },
	{ key: "infrastructure" },
] as const;
