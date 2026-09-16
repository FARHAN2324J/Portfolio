import type { Metadata } from "next";

import { PostCard } from "@/components/blog/post-card";
import { getPublicPosts } from "@/lib/blog/posts";
import { Title } from "@/components/ui/Title";
import { Description } from "@/components/ui/Description";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Articles, notes, and things I learn while building software.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        type: "website",
        title: "Blog | Farhan Fadaei",
        description:
            "Articles, notes, and things I learn while building software.",
        url: "/blog",
    },
    twitter: {
        card: "summary",
        title: "Blog | Farhan Fadaei",
        description:
            "Articles, notes, and things I learn while building software.",
    },
};

export default async function BlogPage() {
    const posts = await getPublicPosts();

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <header className="mx-auto max-w-2xl text-center">
                <Title
                    as="h1"
                    className="text-3xl tracking-tight sm:text-4xl"
                >
                    Blog
                </Title>

                <Description className="mt-3 text-sm leading-6 sm:text-base">
                    Articles, notes, and things I learn
                    while building.
                </Description>
            </header>

            <section
                aria-labelledby="blog-posts-title"
                className="mt-10 sm:mt-12"
            >
                <h2
                    id="blog-posts-title"
                    className="sr-only"
                >
                    Blog posts
                </h2>

                {posts.length === 0 ? (
                    <div className="rounded-[20px] border border-dashed border-border px-6 py-16 text-center">
                        <Title
                            as="h2"
                            className="text-lg"
                        >
                            No posts yet
                        </Title>

                        <Description className="mx-auto mt-2 max-w-md text-sm">
                            There are no articles available
                            right now. Check back soon.
                        </Description>
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                slug={post.slug}
                                description={post.description}
                                category={post.category}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}