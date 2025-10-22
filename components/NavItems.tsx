'use client' // directive to render client-side

import { NAV_ITEMS } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
    const pathname = usePathname(); //get pathname

    // function to check if the given path is the active path
    const isActive = (path: string) =>
    {
        if (path === '/') return pathname === '/'; // return true if path is /

        return pathname.startsWith(path); // return true if pathname starts with path
    }

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
                <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                    isActive(href) ? 'text-gray-100': ''
                }`}>
                    {label}
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems