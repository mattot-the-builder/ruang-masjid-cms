import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavigationLink from "@/components/navigation/NavigationLink";
import DropdownNavigationLink from "@/components/navigation/DropdownNavigationLink";

const NavbarData = [
    { title: "Laman Utama", href: "/" },
    {
        title: "Galeri", children: [
            { title: "Sampel Galeri 1", href: "/" },
            { title: "Sampel Galeri 2", href: "/galeri/2" },
            { title: "Sampel Galeri 3", href: "/galeri/3" },
        ]
    },
    { title: "Hubungi Kami", href: "/hubungi-kami" },
]

export default function Navbar() {
    return <nav className="w-full border-b">
        <div className="p-6 max-w-(--breakpoint-2xl) mx-auto flex justify-between items-center xl:px-12">
            <div className="flex items-center gap-4">
                <Link href="/" className="font-semibold text-xl">
                    RuangMasjid.
                </Link>
                <ul className="flex gap-2">
                    {NavbarData.map((item, index) => {
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
