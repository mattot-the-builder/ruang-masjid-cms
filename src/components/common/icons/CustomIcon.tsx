import icons from "@/components/common/icons/custom-icon-definitions"
import { cn } from "@/lib/utils"

type CustomIconProps = {
    name: keyof typeof icons
    className?: string
}

export default function CustomIcon({ name, className }: CustomIconProps) {
    return <span
        className={cn(
            "flex items-center justify-center size-6 [&_svg]:size-full [&_svg]:fill-current",
            className,
        )}
    >
        {icons[name]}
    </span>
}
