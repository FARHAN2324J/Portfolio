import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div">;

function Card({ className, ...props }: CardProps) {
    return (
        <div
            data-slot="card"
            className={cn(
                "bg-card rounded-[20px] border border-border",
                className
            )}
            {...props}
        />
    );
}

export { Card };