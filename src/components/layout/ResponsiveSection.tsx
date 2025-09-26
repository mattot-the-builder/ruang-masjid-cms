import { cn } from "@/lib/utils";

const responsiveSectionVariants = {
    default: "p-6 max-w-(--breakpoint-2xl) mx-auto xl:px-12",
    dashboard: "px-3 py-2 sm:p-4 md:px-6",
};

export default function ResponsiveSection({
    children,
    variant = "default",
    className,
    id,
}: {
    children: React.ReactNode;
    variant?: "default" | "dashboard";
    className?: string;
    id?: string;
}) {
    return (
        <section
            id={id}
            className={cn(responsiveSectionVariants[variant], className)}
        >
            {children}
        </section>
    );
}
