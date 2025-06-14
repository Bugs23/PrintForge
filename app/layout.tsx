import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import printforgeLogoD from "@/public/printforge-logo-d.svg";
import printforgeLogoM from "@/public/printforge-logo-m.svg";

const albertSans = Albert_Sans({
	subsets: ["latin"],
	display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat-alternates",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${albertSans.className} ${montserratAlternates.variable}`}
			>
				<header className="w-full bg-white">
					<nav className="flex justify-between px-6 py-4">
						<Link href="/">
							<div className="relative">
								{/* Desktop logo */}
								<Image
									src={printforgeLogoD}
									alt="PrintForge Logo"
									width={240}
									className="hidden md:block"
								/>
								<Image
									src={printforgeLogoM}
									alt="PrintForge Logo"
									width={60}
									className="block md:hidden"
								/>
							</div>
						</Link>
						<ul className="flex gap-6 items-center">
							<li>
								<Link href="/3d-models">3D Models</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
						</ul>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
