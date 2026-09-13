import * as React from "react";

import { cn } from "@/lib/utils";

type TitleProps<T extends React.ElementType = "h2"> = {
    as?: T;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

function Title<T extends React.ElementType = "h2">({
    as,
    className,
    ...props
}: TitleProps<T>) {
    const Tag = as ?? "h2";

    return (
        <Tag
            data-slot="title"
            className={cn(
                "font-medium text-foreground",
                className
            )}
            {...props}
        />
    );
}

export { Title };