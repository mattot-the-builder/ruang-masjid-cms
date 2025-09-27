import { Homepage, Media } from "@/payload-types"
import Image from "next/image"

type HeroProps = Homepage["hero"]

export default function Hero({ image, heading }: HeroProps) {
    const imageMedia = image as Media

    if (!imageMedia.url) return null

    return <div className="relative w-full max-w-(--breakpoint-2xl) mx-auto  h-[36rem] overflow-clip">
        <div className="relative z-10 h-full grid place-items-center">
            <h1 className="text-7xl font-bold text-white">
                {heading?.toUpperCase()}
            </h1>
        </div>
        <Image
            src={imageMedia.url}
            alt={imageMedia.alt}
            width={imageMedia.width || 1920}
            height={imageMedia.height || 1080}
            className="absolute z-0 inset-0 w-full h-full object-center object-cover"
        />
    </div>
}
