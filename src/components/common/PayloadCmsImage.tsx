import { Media } from "@/payload-types";
import Image from "next/image";

export default async function PayloadCmsImage({ image }: { image: Media }) {
    if (!image.url) return null

    return <Image src={image.url} alt={image.alt} width={image.width || 1920} height={image.height || 1080} />
}
