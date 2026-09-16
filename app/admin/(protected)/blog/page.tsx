import Link from "next/link";

import { LogoutButton } from "@/components/admin/logout-button";
import { createClient } from "@/lib/supabase/server";

import { deletePost } from "./actions";
import { Title } from "@/components/ui/Title";
import { Description } from "@/components/ui/Description";
import { Card } from "@/components/ui/Card";

export default async function AdminBlogPage() {
    const supabase = await createClient();

    const {
        data: posts,
        error,
    } = await supabase
        .from("posts")
        .select(
            "id, title, slug, description, created_at",
        )
        .order("created_at", {
            ascending: false,
        });

    if (error) {
        throw new Error(
            "Failed to load blog posts.",
        );
    }

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
            <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <Title
                        as="h1"
                        className="text-2xl tracking-tight sm:text-3xl"
                    >
                        Blog
                    </Title>

                    <Description className="text-sm">
                        Manage blog posts.
                    </Description>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <Link
                        href="/admin/blog/new"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        Create post
                    </Link>

                    <LogoutButton />
                </div>
            </header>

            <section
                aria-labelledby="posts-heading"
                className="py-6"
            >
                <header className="mb-4">
                    <Title
                        as="h2"
                        id="posts-heading"
                        className="text-lg"
                    >
                        Posts
                    </Title>
                </header>

                {posts.length === 0 ? (
                    <Card className="border-dashed px-6 py-12 text-center">
                        <Title
                            as="h3"
                            className="text-base"
                        >
                            No posts yet
                        </Title>

                        <Description className="mt-1 text-sm">
                            Create your first blog post
                            to get started.
                        </Description>

                        <Link
                            href="/admin/blog/new"
                            className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            Create your first post
                        </Link>
                    </Card>
                ) : (
                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <li key={post.id}>
                                <Card className="h-full p-5">
                                    <article className="flex h-full flex-col">
                                        <div className="space-y-2">
                                            <Title
                                                as="h3"
                                                className="text-base"
                                            >
                                                {post.title}
                                            </Title>

                                            {post.description && (
                                                <Description className="line-clamp-3 text-sm">
                                                    {
                                                        post.description
                                                    }
                                                </Description>
                                            )}
                                        </div>

                                        <div className="mt-auto pt-5">
                                            <p
                                                className="truncate text-xs text-muted-foreground"
                                                title={`/blog/${post.slug}`}
                                            >
                                                /blog/
                                                {post.slug}
                                            </p>

                                            <div className="mt-4">
                                                <form
                                                    action={
                                                        deletePost
                                                    }
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="id"
                                                        value={
                                                            post.id
                                                        }
                                                    />

                                                    <button
                                                        type="submit"
                                                        className="inline-flex h-9 items-center justify-center rounded-full px-3 text-sm font-medium text-destructive transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-red-600"
                                                    >
                                                        Delete
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </article>
                                </Card>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}