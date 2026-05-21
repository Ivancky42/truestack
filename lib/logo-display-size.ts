export type LogoDisplaySize = "dense" | "default" | "large";

export function toLogoDisplaySize(
	logoSize: "default" | "large",
	dense: boolean,
): LogoDisplaySize {
	if (dense) return "dense";
	if (logoSize === "large") return "large";
	return "default";
}
