import PayloadCmsImage from "@/components/common/PayloadCmsImage";
import ResponsiveSection from "@/components/layout/ResponsiveSection";
import { TypographyH1 } from "@/components/ui/typography";
import payload from "@/helpers/payload/get-payload-instance";
import { Media } from "@/payload-types";
import { notFound } from "next/navigation";

export default async function GalleryPage({ params }: { params: Promise<{ gallerySlug: string }> }) {
    const { gallerySlug } = await params;

    const gallery = (await payload.find({
        collection: "galleries",
        where: {
            slug: { equals: gallerySlug }
        }
    })).docs[0]

    if (!gallery) return notFound();

    return (
        <main>
            <ResponsiveSection className="space-y-6">
                <TypographyH1>
                    {gallery.title}
                </TypographyH1>
                <div className="grid grid-cols-3 gap-4">
                    {gallery.images?.map(({ image }, index) => (
                        <PayloadCmsImage key={index} image={image as Media} />
                    ))}
                </div>
            </ResponsiveSection>
        </main>
    )
}
