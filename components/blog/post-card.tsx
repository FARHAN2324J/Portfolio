import Link from "next/link";

import {
    getPostCategory,
} from "@/lib/blog/categories";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";
import { Description } from "../ui/Description";


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
    const categoryConfig =
        getPostCategory(category);

    const CategoryIcon =
        categoryConfig.icon;

    return (
        <Card className="group flex h-full flex-col p-6">
            <article className="flex h-full flex-col">
                <div className="space-y-4">
                    <CategoryIcon
                        aria-hidden="true"
                        size={20}
                        strokeWidth={1.8}
                        className="text-muted-foreground"
                    />

                    <div className="space-y-2">
                        <Title
                            as="h2"
                            className="text-xl tracking-tight"
                        >
                            {title}
                        </Title>

                        {description && (
                            <Description className="line-clamp-3 text-sm leading-6">
                                {description}
                            </Description>
                        )}
                    </div>
                </div>

                <div className="mt-auto pt-6">
                    <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center text-sm font-medium text-foreground transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        Read more
                        <span
                            aria-hidden="true"
                            className="ml-1 transition-transform group-hover:translate-x-0.5"
                        >
                            →
                        </span>
                    </Link>
                    
                </div>
            </article>
        </Card>
    );
}