import { Link } from "@/i18n/navigation";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export default function RootNotFound() {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<section className="border-t bg-background py-16 md:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="mx-auto max-w-3xl text-center">
							<h1 className="type-h1">Page not found</h1>
							<p className="mx-auto mt-4 max-w-2xl type-lede text-muted-foreground">
								The page you&apos;re looking for doesn&apos;t exist or
								has moved.
							</p>
							<div className="mt-8">
								<Button asChild size="lg">
									<Link href="/">Back to home</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</body>
		</html>
	);
}
