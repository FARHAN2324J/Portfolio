import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostContent } from "@/components/blog/post-content";
import {
    getPublicPostBySlug,
    getPublicPostMetadataBySlug,
} from "@/lib/blog/posts";
import { Title } from "@/components/ui/Title";
import { Description } from "@/components/ui/Description";
import { Button } from "@/components/ui/Button";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { SharePostButton } from "@/components/blog/share-post-button";
type BlogPostPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;

    const post =
        await getPublicPostMetadataBySlug(slug);

    if (!post) {
        return {
            title: "Post not found",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: post.title,
        description:
            post.description ??
            `Read ${post.title}.`,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            type: "article",
            title: post.title,
            description:
                post.description ??
                `Read ${post.title}.`,
            url: `/blog/${post.slug}`,
        },
        twitter: {
            card: "summary",
            title: post.title,
            description:
                post.description ??
                `Read ${post.title}.`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: BlogPostPageProps) {
    const { slug } = await params;

    const post = await getPublicPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <article>
                <header className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                        <Button
                            asChild
                            variant="social"
                        >
                            <Link
                                href="/blog"
                                aria-label="Back to blog"
                            >
                                <HiArrowUturnLeft
                                    className="size-5"
                                    aria-hidden="true"
                                />
                            </Link>
                        </Button>

                        <SharePostButton title={post.title} />
                    </div>

                    <div className="space-y-3">
                        <Title
                            as="h1"
                            className="text-3xl tracking-tight sm:text-4xl lg:text-5xl"
                        >
                            {post.title}
                        </Title>

                        {post.description && (
                            <Description className="text-base leading-7 sm:text-lg">
                                {post.description}
                            </Description>
                        )}

                        <time
                            dateTime={post.created_at}
                            className="block text-sm text-muted-foreground"
                        >
                            {new Intl.DateTimeFormat(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                },
                            ).format(
                                new Date(
                                    post.created_at,
                                ),
                            )}
                        </time>
                    </div>
                </header>

                <div className="mt-10 border-t border-border">
                    <PostContent
                        content={post.content}
                    />
                </div>
            </article>
        </main>
    );
}