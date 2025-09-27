import { cn } from "@/lib/utils";
import { Navigation } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigationLink({ title, href }: Navigation) {
    const pathname = usePathname()

    const isActive = pathname === href

    return <Link href={href} className={cn("font-semibold text-lg block", isActive && "underline underline-offset-3")}>
        {title}
    </Link>
}
