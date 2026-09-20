import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

import { getPostCategory } from "@/lib/blog/categories";
import { Description } from "../ui/Description";
import { Title } from "../ui/Title";

type PostCardProps = {
    title: string;
    slug: string;
    description: string | null;
    category: string;
};

export function PostCard({
    title,
    slug,
    description,
    category,
}: PostCardProps) {
    const categoryConfig = getPostCategory(category);
    const CategoryIcon = categoryConfig.icon;

    return (
        <article className="group border-b border-border">
            <Link
                href={`/blog/${slug}`}
                className={[
                    "flex items-center gap-4 py-5",
                    "transition-colors duration-200",
                    "hover:bg-muted/30",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-ring",
                    "sm:gap-5",
                ].join(" ")}
            >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-[#0b0b0b]">
                    <CategoryIcon
                        size={18}
                        strokeWidth={2}
                        className="text-muted-foreground"
                        aria-hidden="true"
                    />
                </div>

                <div className="min-w-0 flex-1">
                    <Title
                        as="h2"
                        className="text-base font-medium tracking-tight sm:text-lg"
                    >
                        {title}
                    </Title>

                    {description && (
                        <Description className="mt-1 line-clamp-2 text-sm leading-6">
                            {description}
                        </Description>
                    )}
                </div>

                <GoChevronRight
                    className={[
                        "size-5 shrink-0",
                        "text-muted-foreground",
                        "transition-transform duration-200",
                        "group-hover:translate-x-1",
                        "group-hover:text-foreground",
                    ].join(" ")}
                    aria-hidden="true"
                />
            </Link>
        </article>
    );
}