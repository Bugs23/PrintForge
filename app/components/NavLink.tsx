import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link href={href} className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 ${isActive ? "text-orange-400" : "text-gray-700"}`}>{children}</Link>
  )
}