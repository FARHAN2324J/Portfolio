"use client";

import { Title } from "@/components/ui/Title";
import { useEffect } from "react";


export default function BlogError({
    error,
    reset,
}: {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center justify-center px-4 py-12 sm:px-6">
            <section
                aria-labelledby="blog-error-title"
                className="w-full text-center"
            >
                <Title
                    as="h1"
                    id="blog-error-title"
                    className="text-2xl tracking-tight sm:text-3xl"
                >
                    Something went wrong
                </Title>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    We couldn&apos;t load the blog
                    right now. Please try again.
                </p>

                <button
                    type="button"
                    onClick={() => reset()}
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    Try again
                </button>
            </section>
        </main>
    );
}