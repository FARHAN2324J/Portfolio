import type * as React from "react";

import { cn } from "@/lib/utils";

import { Card } from "./Card";
import { Title } from "./Title";

type SectionProps = {
    /** Anchor target for deep links. */
    id?: string;
    title: string;
    children: React.ReactNode;
    className?: string;
};

function Section({ id, title, children, className }: SectionProps) {
    const headingId = id ? `${id}-heading` : undefined;

    return (
        <section
            id={id}
            aria-labelledby={headingId}
            className={cn("scroll-mt-24", className)}
        >
            <Card className="p-5 sm:p-7">
                <header className="border-b border-border pb-3">
                    <Title
                        as="h2"
                        id={headingId}
                        className="text-lg leading-8 tracking-tight text-balance sm:text-xl"
                    >
                        {title}
                    </Title>
                </header>

                <div className="mt-4 space-y-4">{children}</div>
            </Card>
        </section>
    );
}

export { Section };
export type { SectionProps };
