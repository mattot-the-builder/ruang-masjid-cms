import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Navigation } from "@/types";
import { ChevronDown } from "lucide-react";
import NavigationLink from "./NavigationLink";

export type DropdownNavigationLinkProps = {
    title: string,
    children: Navigation[]
}

export default function DropdownNavigationLink({ title, children }: DropdownNavigationLinkProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">{title} <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {children.map((c, index) => (
                    <ListItem key={index} {...c} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function ListItem(props: Navigation) {
    return <DropdownMenuItem asChild>
        <NavigationLink title={props.title} href={props.href} />
    </DropdownMenuItem>
}
