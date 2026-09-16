"use client";

import { useEffect } from "react";

import Link from "next/link";
import { Title } from "@/components/ui/Title";


type BlogPostErrorProps = {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
};

export default function BlogPostError({
    error,
    reset,
}: BlogPostErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center justify-center px-4 py-12 sm:px-6">
            <section
                aria-labelledby="blog-post-error-title"
                className="text-center"
            >
                <Title
                    as="h1"
                    id="blog-post-error-title"
                    className="text-2xl tracking-tight sm:text-3xl"
                >
                    Something went wrong
                </Title>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    We couldn&apos;t load this article
                    right now. Please try again.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={reset}
                        className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        Try again
                    </button>

                    <Link
                        href="/blog"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        Back to blog
                    </Link>
                </div>
            </section>
        </main>
    );
}