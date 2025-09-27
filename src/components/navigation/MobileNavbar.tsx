"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import MobileNavigationLink from "./MobileNavigationLink"
import { NavbarDataType } from "../layout/Navbar"
import MobileDropdownNavigationLink from "./MobileDropdownNavigationLink"

export default function MobileNavbar({ navbarData }: { navbarData: NavbarDataType }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return <nav className={cn("w-full border-b bg-background transition-transform duration-300 lg:hidden", isOpen ? "absolute inset-0" : "")}>
        <div className="p-6 flex justify-between items-center">
            <Link href="/" className="font-semibold text-xl">
                RuangMasjid.
            </Link>
            <button onClick={handleToggle}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        {isOpen && (
            <div className="px-6">
                {navbarData.map((item, index) => {
                    if (item.children) {
                        return <MobileDropdownNavigationLink key={index} {...item} />
                    }

                    return <MobileNavigationLink key={index} {...item} />
                })}
            </div>
        )}
    </nav>
}
