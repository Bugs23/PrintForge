import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="w-full bg-white">
					<nav className="flex justify-between px-6 py-4">
						<div className="relative">
							{/* Desktop logo */}
							<img src="/printforge-logo-d.svg" alt="PrintForge Logo" className="w-[240px] h-auto hidden md:block" />
							<img src="/printforge-logo-m.svg" alt="PrintForge Logo" className="w-[60px] h-auto block md:hidden" />
						</div>
						<ul className="flex gap-6 items-center">
							<li>3D Models</li>
							<li>About</li>
						</ul>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
}
