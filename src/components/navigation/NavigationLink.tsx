"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Navigation } from "@/types";

export default function NavigationLink({ title, href }: Navigation) {
    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Button variant={isActive ? "default" : "ghost"} className="block" asChild>
            <Link href={href}>
                {title}
            </Link>
        </Button>
    )
}
