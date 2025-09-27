"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import MobileNavigationLink from "@/components/navigation/MobileNavigationLink"
import { NavbarDataType } from "@/components/layout/Navbar"
import MobileDropdownNavigationLink from "@/components/navigation/MobileDropdownNavigationLink"
import { ModeToggle } from "@/components/layout/ModeToggle"

export default function MobileNavbar({ navbarData }: { navbarData: NavbarDataType[] }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    // 🔒 Lock scroll when overlay is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
        return () => document.body.classList.remove("overflow-hidden")
    }, [isOpen])

    return <nav className={cn("w-full border-b bg-background transition-transform duration-300 lg:hidden", isOpen ? "absolute inset-0 z-50" : "")}>
        <div className="p-6 flex justify-between items-center">
            <Link href="/" className="font-semibold text-xl">
                RuangMasjid.
            </Link>
            <div className="flex gap-2">
                <ModeToggle />
                <button onClick={handleToggle}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </div>
        {isOpen && (
            <div className="px-6">
                {navbarData.map((item, index) => {
                    if (item.children) {
                        return <MobileDropdownNavigationLink key={index} onClick={handleToggle} {...item} />
                    }

                    return <MobileNavigationLink key={index} onClick={handleToggle} {...item} />
                })}
            </div>
        )}
    </nav>
}
