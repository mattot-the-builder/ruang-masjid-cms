import { Media } from "@/payload-types";

/**
 * Return full url from payload Media object
 *
 * @param media  A Payload `Media` object or a string containing the media's relative URL.
 * @returns      The full absolute media URL as a string.
 *
 * @author mattot <mattot.builder@gmail.com>
 */
export default function getMediaUrl(media: Media | string) {
    const mediaUrlString = typeof media === "string" ? media : media.url;

    const fullMediaUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${mediaUrlString}`;

    return fullMediaUrl;
}
