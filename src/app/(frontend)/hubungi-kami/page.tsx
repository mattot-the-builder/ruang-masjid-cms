import ResponsiveSection from "@/components/layout/ResponsiveSection";
import SocialMediaLink from "@/components/navigation/SocialMediaLink";
import { TypographyH1 } from "@/components/ui/typography";
import getCurrentMosque from "@/helpers/get-current-mosque"

export default async function ContactUsPage() {
    const mosque = await getCurrentMosque();

    return (
        <main>
            <ResponsiveSection className="space-y-6">
                <div className="space-y-1">
                    <TypographyH1>Hubungi Kami</TypographyH1>
                    <p className="text-xl text-muted-foreground">Hubungi kami untuk sebarang pertanyaan.</p>
                </div>
                {/* <p> */}
                {/*     Nama: {mosque.name} */}
                {/* </p> */}
                {/* <p> Tel: {mosque.contact?.telephone} </p> */}
                {/* <div className="flex gap-2"> */}
                {/*     {mosque.contact?.socialMedia?.map((socmed, index) => ( */}
                {/*         <SocialMediaLink key={index} platform={socmed.platform} url={socmed.url} /> */}
                {/*     ))} */}
                {/* </div> */}
            </ResponsiveSection>
        </main>
    )
}
