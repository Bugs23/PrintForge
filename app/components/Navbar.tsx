"use client"

import Image from "next/image"
import NavLink from "@/app/components/NavLink"
import printforgeLogoD from "@/public/printforge-logo-d.svg"
import printforgeLogoM from "@/public/printforge-logo-m.svg"
import { usePathname } from "next/navigation"

export default function Navbar() {

  const pathname = usePathname()

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <NavLink href="/">
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
        </NavLink>
        <ul className="flex gap-6 items-center">
          <li>
            <NavLink href="/3d-models" isActive={pathname.startsWith("/3d-models")}>3D Models</NavLink>
          </li>
          <li>
            <NavLink href="/about" isActive={pathname === "/about"}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}