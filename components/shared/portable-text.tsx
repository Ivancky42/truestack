import Image from "next/image";
import Link from "next/link";
import {
	PortableText,
	toPlainText,
	type PortableTextBlock,
	type PortableTextComponents,
	type PortableTextMarkComponentProps,
	type PortableTextTypeComponentProps,
} from "@portabletext/react";
import { imageUrl } from "@/lib/insights/client";
import type { PortableTextValue, SanityImage } from "@/lib/insights/types";

/** Sanity encodes pixel size in the asset ref: `image-<id>-<width>x<height>-<ext>`. */
function assetDimensions(ref: string | undefined) {
	const match = ref?.match(/-(\d+)x(\d+)-[a-z]+$/i);
	if (!match) return null;
	const width = Number(match[1]);
	const height = Number(match[2]);
	if (!width || !height) return null;
	return { width, height };
}

function headingId(block: PortableTextBlock) {
	return toPlainText(block)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
}

const linkClassName =
	"font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary";

function LinkMark({
	value,
	children,
}: PortableTextMarkComponentProps<{ _type: "link"; href?: string }>) {
	const href = value?.href?.trim();

	if (!href) {
		return <>{children}</>;
	}

	if (/^https?:\/\//i.test(href)) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={linkClassName}
			>
				{children}
			</a>
		);
	}

	if (href.startsWith("/") && !href.startsWith("//")) {
		return (
			<Link href={href} className={linkClassName}>
				{children}
			</Link>
		);
	}

	if (/^(mailto:|tel:)/i.test(href)) {
		return (
			<a href={href} className={linkClassName}>
				{children}
			</a>
		);
	}

	return <>{children}</>;
}

function BodyImage({ value }: PortableTextTypeComponentProps<SanityImage>) {
	const ref = value?.asset?._ref;
	if (!ref) {
		return null;
	}

	const dimensions = assetDimensions(ref);
	const alt = value.alt?.trim() ?? "";
	if (!alt) {
		return null;
	}

	let src: string;
	try {
		src = imageUrl(value).width(1600).url();
	} catch {
		return null;
	}
	if (!src) {
		return null;
	}

	return (
		<figure className="my-8 overflow-hidden rounded-3xl border bg-muted/20 shadow-sm">
			{dimensions ? (
				<Image
					src={src}
					alt={alt}
					width={dimensions.width}
					height={dimensions.height}
					sizes="(max-width: 768px) 100vw, 768px"
					className="h-auto w-full"
				/>
			) : (
				<div className="relative aspect-video w-full">
					<Image
						src={src}
						alt={alt}
						fill
						sizes="(max-width: 768px) 100vw, 768px"
						className="object-cover"
					/>
				</div>
			)}
		</figure>
	);
}

const components: PortableTextComponents = {
	block: {
		normal: ({ children }) => (
			<p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
				{children}
			</p>
		),
		// Body copy never owns the page h1 — promote it to a section heading.
		h1: ({ children, value }) => (
			<h2
				id={headingId(value)}
				className="mt-12 scroll-mt-28 font-display text-2xl font-medium tracking-tight md:text-3xl"
			>
				{children}
			</h2>
		),
		h2: ({ children, value }) => (
			<h2
				id={headingId(value)}
				className="mt-12 scroll-mt-28 font-display text-2xl font-medium tracking-tight md:text-3xl"
			>
				{children}
			</h2>
		),
		h3: ({ children, value }) => (
			<h3
				id={headingId(value)}
				className="mt-9 scroll-mt-28 font-display text-xl font-medium tracking-tight md:text-2xl"
			>
				{children}
			</h3>
		),
		h4: ({ children, value }) => (
			<h4
				id={headingId(value)}
				className="mt-7 scroll-mt-28 font-display text-lg font-medium tracking-tight md:text-xl"
			>
				{children}
			</h4>
		),
		blockquote: ({ children }) => (
			<blockquote className="mt-8 border-l-2 border-primary/40 bg-muted/30 py-4 pl-5 pr-4 text-base leading-relaxed text-foreground md:text-lg">
				{children}
			</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul className="mt-5 list-disc space-y-2.5 pl-5">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="mt-5 list-decimal space-y-2.5 pl-5">{children}</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => (
			<li className="text-base leading-relaxed text-muted-foreground marker:text-primary md:text-lg md:leading-8">
				{children}
			</li>
		),
		number: ({ children }) => (
			<li className="text-base leading-relaxed text-muted-foreground marker:text-primary md:text-lg md:leading-8">
				{children}
			</li>
		),
	},
	marks: {
		strong: ({ children }) => (
			<strong className="font-semibold text-foreground">{children}</strong>
		),
		em: ({ children }) => <em className="italic">{children}</em>,
		code: ({ children }) => (
			<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
				{children}
			</code>
		),
		link: LinkMark,
	},
	types: {
		image: BodyImage,
	},
};

/**
 * Renders Sanity Portable Text with the site's long-form type scale.
 * No raw HTML is injected — every node maps to a React element.
 */
export function PortableTextBody({ value }: { value: PortableTextValue }) {
	if (!value || value.length === 0) {
		return null;
	}

	return (
		<div className="[&>*:first-child]:mt-0">
			<PortableText value={value} components={components} />
		</div>
	);
}
