import type * as React from "react";

import { cn } from "@/lib/utils";

type ProseProps = React.ComponentProps<"p">;

function Prose({ className, ...props }: ProseProps) {
    return (
        <p
            data-slot="prose"
            className={cn(
                "text-pretty text-sm leading-7 text-foreground/85 sm:text-[15px] sm:leading-8",
                className
            )}
            {...props}
        />
    );
}

export { Prose };
export type { ProseProps };
