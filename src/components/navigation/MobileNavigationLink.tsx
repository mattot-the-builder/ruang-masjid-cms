import { cn } from "@/lib/utils";
import { Navigation } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileNavigationLinkProps = Navigation & { onClick?: () => void }

export default function MobileNavigationLink({ title, href, onClick }: MobileNavigationLinkProps) {
    const pathname = usePathname()

    const isActive = pathname === href

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return <Link href={href} className={cn("font-semibold text-lg block", isActive && "underline underline-offset-3")} onClick={handleClick}>
        {title}
    </Link>
}
