import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return <nav className="w-full border-b">
        <div className="p-6 max-w-(--breakpoint-2xl) mx-auto flex justify-between items-center xl:px-12">
            <div className="flex items-center gap-4">
                <Link href="/" className="font-semibold text-xl">
                    RuangMasjid.
                </Link>
                <ul className="flex gap-2">
                    <Button variant="ghost">Link</Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost">Dropdown <ChevronDown /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ul>
            </div>
            <Button size="lg">Login</Button>
        </div>
    </nav>
}
