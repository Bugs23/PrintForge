import Image from "next/image"
import Link from "next/link"
import printforgeLogoD from "@/public/printforge-logo-d.svg";
import printforgeLogoM from "@/public/printforge-logo-m.svg";

export default function Navbar() {
  return (
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
  )
}