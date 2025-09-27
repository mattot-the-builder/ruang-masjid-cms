import Link from "next/link";
import CustomIcon from "@/components/common/icons/CustomIcon";

type SocialMediaLinkProps = {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok';
    url: string;
}

export default function SocialMediaLink({ platform, url }: SocialMediaLinkProps) {
    return (
        <Link href={url}>
            <CustomIcon name={platform} className="text-muted-foreground hover:text-foreground" />
        </Link>
    )
}
