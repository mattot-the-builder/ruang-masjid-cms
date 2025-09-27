import ResponsiveSection from "@/components/layout/ResponsiveSection";
import SocialMediaLink from "@/components/navigation/SocialMediaLink";
import getCurrentMosque from "@/helpers/get-current-mosque"

export default async function ContactUsPage() {
    const mosque = await getCurrentMosque();

    return (
        <main>
            <ResponsiveSection>
                <h2>Hubungi Kami</h2>
                <p>
                    Nama: {mosque.name}
                </p>
                <p> Tel: {mosque.contact?.telephone} </p>
                <div className="flex gap-2">
                    {mosque.contact?.socialMedia?.map((socmed, index) => (
                        <SocialMediaLink key={index} platform={socmed.platform} url={socmed.url} />
                    ))}
                </div>
            </ResponsiveSection>
        </main>
    )
}
