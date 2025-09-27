import { SquareDashed } from "lucide-react";
import Link from "next/link";

type SocialMediaLinkProps = {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok';
    url: string;
}

export default function SocialMediaLink({ platform, url }: SocialMediaLinkProps) {
    return (
        <Link href={url}>
            <div className="flex gap-2">
                <SquareDashed />
                sc
            </div>
        </Link>
    )
}
