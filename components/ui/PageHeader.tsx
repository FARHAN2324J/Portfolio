import type * as React from "react";

import { cn } from "@/lib/utils";

import { Description } from "./Description";
import { Title } from "./Title";

type PageHeaderProps = {
    /** Small label rendered above the title. */
    kicker?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
};

function PageHeader({
    kicker,
    title,
    description,
    className,
}: PageHeaderProps) {
    return (
        <header className={cn("mx-auto max-w-2xl text-center", className)}>
            {kicker && (
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {kicker}
                </p>
            )}

            <Title
                as="h1"
                className={cn(
                    "text-3xl tracking-tight sm:text-4xl",
                    kicker && "mt-2"
                )}
            >
                {title}
            </Title>

            {description && (
                <Description className="mt-3 text-sm leading-7 sm:text-base">
                    {description}
                </Description>
            )}
        </header>
    );
}

export { PageHeader };
export type { PageHeaderProps };
