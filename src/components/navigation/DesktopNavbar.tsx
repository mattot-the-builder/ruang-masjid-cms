import { NavbarDataType } from "@/components/layout/Navbar"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavigationLink from "@/components/navigation/NavigationLink";
import DropdownNavigationLink from "@/components/navigation/DropdownNavigationLink";

export default function DesktopNavbar({ navbarData }: { navbarData: NavbarDataType[] }) {
    return <nav className="hidden w-full border-b lg:block">
        <div className="p-6 max-w-(--breakpoint-2xl) mx-auto flex justify-between items-center xl:px-12">
            <div className="flex items-center gap-4">
                <Link href="/" className="font-semibold text-xl">
                    RuangMasjid.
                </Link>
                <ul className="flex gap-2">
                    {navbarData.map((item, index) => {
                        if (item.children) {
                            return <DropdownNavigationLink key={index} {...item} />
                        }

                        return <NavigationLink key={index} title={item.title} href={item.href} />
                    })}
                </ul>
            </div>
            <Button size="lg">Login</Button>
        </div>
    </nav>
}
