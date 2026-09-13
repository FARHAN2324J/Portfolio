import * as React from "react";
import { cn } from "@/lib/utils";

type TechBadgeProps = React.ComponentProps<"div"> & {
    icon?: React.ReactNode;
    label: string;
};

function TechBadge({
    icon,
    label,
    className,
    ...props
}: TechBadgeProps) {
    return (
        <div
            data-slot="tech-badge"
            className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-2 text-muted-foreground font-medium bg-border",
                className
            )}
            {...props}
        >
            {icon}
            <span>{label}</span>
        </div>
    );
}

export { TechBadge };
