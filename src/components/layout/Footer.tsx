import ResponsiveSection from "@/components/layout/ResponsiveSection";
import getCurrentMosque from "@/helpers/get-current-mosque";

export default async function Footer() {
    const mosque = await getCurrentMosque();

    return (
        <footer>
            <ResponsiveSection>
                {mosque.name}
            </ResponsiveSection>
        </footer>
    )
}
