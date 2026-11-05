import type * as React from "react";

import { cn } from "@/lib/utils";

type ContentListProps = {
    items: readonly React.ReactNode[];
    /** Render as an ordered list instead of a bulleted one. */
    ordered?: boolean;
    className?: string;
};

function ContentList({ items, ordered = false, className }: ContentListProps) {
    const Tag = ordered ? "ol" : "ul";

    return (
        <Tag
            data-slot="content-list"
            className={cn(
                "space-y-2 ps-5 text-sm leading-7 text-foreground/85 sm:text-[15px] sm:leading-8",
                ordered ? "list-decimal" : "list-disc",
                "marker:text-muted-foreground",
                className
            )}
        >
            {items.map((item, index) => (
                <li key={index} className="ps-1 text-pretty">
                    {item}
                </li>
            ))}
        </Tag>
    );
}

export { ContentList };
export type { ContentListProps };
