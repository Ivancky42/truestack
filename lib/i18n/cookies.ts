/** Client-only cookie helpers. Never import `next/headers` here. */

export function readCookie(name: string): string | undefined {
	if (typeof document === "undefined") return undefined;
	const prefix = `${name}=`;
	const found = document.cookie.split("; ").find((row) => row.startsWith(prefix));
	if (!found) return undefined;
	return found.slice(prefix.length);
}

export function setCookie(
	name: string,
	value: string,
	maxAgeSeconds: number,
): void {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}
