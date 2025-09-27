import { DropdownNavigationLinkProps } from "@/components/navigation/DropdownNavigationLink";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import MobileNavigationLink from "./MobileNavigationLink";

export default function MobileDropdownNavigationLink({ title, children }: DropdownNavigationLinkProps) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={title}>
                <AccordionTrigger className="py-0 text-lg font-semibold">{title}</AccordionTrigger>
                <AccordionContent className="pb-2">
                    {children.map((item, index) => (
                        <MobileNavigationLink key={index} href={item.href} title={item.title} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
