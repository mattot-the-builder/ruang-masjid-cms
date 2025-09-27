import MobileNavbar from "@/components/navigation/MobileNavbar";
import DesktopNavbar from "../navigation/DesktopNavbar";
import { Navigation } from "@/types";
import getCurrentMosque from "@/helpers/get-current-mosque";
import payload from "@/helpers/payload/get-payload-instance";


export type NavbarDataType = { title: string, href: string, children?: undefined } | { title: string, children: Navigation[], href?: undefined }

export default async function Navbar() {
    const mosque = await getCurrentMosque();

    const galleries = await payload.find({
        collection: "galleries",
        where: {
            mosque: { equals: mosque.id }
        }
    })

    const navbarData: NavbarDataType[] = [
        { title: "Laman Utama", href: "/" },
    ]

    if (galleries.totalDocs > 0) {
        const galleriesNavbarData: NavbarDataType = {
            title: "Galeri",
            children: galleries.docs.map((gallery) => {
                return {
                    title: gallery.title,
                    href: `/galeri/${gallery.slug}`
                }
            })
        }

        navbarData.push(galleriesNavbarData)
    }

    navbarData.push({ title: "Hubungi Kami", href: "/hubungi-kami" })

    return (
        <>
            <DesktopNavbar navbarData={navbarData} />
            <MobileNavbar navbarData={navbarData} />
        </>
    )
}

