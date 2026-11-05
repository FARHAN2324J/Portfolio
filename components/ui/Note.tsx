import type * as React from "react";

import { cn } from "@/lib/utils";

type NoteProps = {
    children: React.ReactNode;
    className?: string;
};

function Note({ children, className }: NoteProps) {
    return (
        <aside
            data-slot="note"
            className={cn(
                "rounded-xl border border-border border-s-2 border-s-foreground/40 bg-background px-4 py-3",
                className
            )}
        >
            <p className="text-pretty text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-8">
                {children}
            </p>
        </aside>
    );
}

export { Note };
export type { NoteProps };
