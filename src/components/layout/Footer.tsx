import ResponsiveSection from "@/components/layout/ResponsiveSection";
import getCurrentMosque from "@/helpers/get-current-mosque";
import { Navigation } from "@/types";
import Link from "next/link";
import SocialMediaLink from "../navigation/SocialMediaLink";
import { protocol, rootDomain } from "@/constants";
import { TypographyLarge, TypographyP } from "@/components/ui/typography";

const footerData = [
    {
        title: "Pautan Utama",
        links: [
            { title: "Laman Utama", href: "/" },
            { title: "Hubungi Kami", href: "/hubungi-kami" },
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
                        <TypographyLarge>
                            {mosque.name}
                        </TypographyLarge>
                        <TypographyP className="mb-4">
                            {mosque.address.addressLine1}, <br />
                            {mosque.address.addressLine2 && `${mosque.address.addressLine2}` + <br />}
                            {mosque.address.postcode} {mosque.address.district}, <br />
                            {mosque.address.state}
                        </TypographyP>
                        <div className="flex gap-2">
                            {mosque.contact?.socialMedia?.map((socmed, index) => (
                                <SocialMediaLink key={index} platform={socmed.platform} url={socmed.url} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-20">
                        {footerData.map((linkGroup, index) => (
                            <LinkGroup key={index} {...linkGroup} />
                        ))}
                    </div>
                </div>
                <div className="border-t pt-4 flex flex-col gap-1 items-center justify-between lg:flex-row">
                    <span className="text-xs text-muted-foreground"> &copy; {currentYear} <a href={`${protocol}://${rootDomain}`} className="hover:underline">{rootDomain}</a>. All rights reserved. </span>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <Link href="#" className="hover:underline">Terma dan Syarat</Link>
                        <Link href="#" className="hover:underline">Polisi Privasi</Link>
                        <Link href="#" className="hover:underline">Soalan Lazim (FAQ)</Link>
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

