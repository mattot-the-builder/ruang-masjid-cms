import ResponsiveSection from "@/components/layout/ResponsiveSection";
import getCurrentMosque from "@/helpers/get-current-mosque";
import { Navigation } from "@/types";
import Link from "next/link";
import SocialMediaLink from "../navigation/SocialMediaLink";

const footerData = [
    {
        title: "Quick Links",
        links: [
            { title: "Overview", href: "#" },
            { title: "Overview", href: "#" },
            { title: "Overview", href: "#" },
        ]
    },
    {
        title: "Sample",
        links: [
            { title: "Overview", href: "#" },
            { title: "Overview", href: "#" },
            { title: "Overview", href: "#" },
        ]
    },
]

export default async function Footer() {
    const mosque = await getCurrentMosque();

    const currentYear = new Date().getFullYear().toString()

    return (
        <footer>
            <ResponsiveSection className="space-y-6">
                <div className="flex flex-col justify-between gap-8 lg:flex-row">
                    <div>
                        {mosque.name}
                        <div className="flex gap-4">
                            {mosque.contact?.socialMedia?.map((socmed, index) => (
                                <SocialMediaLink key={index} platform={socmed.platform} url={socmed.url} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 lg:flex-row">
                        {footerData.map((linkGroup, index) => (
                            <LinkGroup key={index} {...linkGroup} />
                        ))}
                    </div>
                </div>
                <div className="border-t pt-4 flex flex-col gap-1 items-center justify-between lg:flex-row">
                    <span className="text-xs text-muted-foreground"> &copy; {currentYear} ruang-masjid.com. All rights reserved. </span>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <Link href="#" className="hover:underline">Terms and Conditions</Link>
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                    </div>
                </div>
            </ResponsiveSection>
        </footer>
    )
}

function LinkGroup({ title, links }: { title: string, links: Navigation[] }) {
    return <div className="space-y-2">
        <p className="font-semibold">{title}</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href} className="hover:underline">{link.title}</Link>
                </li>
            ))}
        </ul>
    </div>
}

