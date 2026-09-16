import { Title } from "@/components/ui/Title";
import Link from "next/link";


export default function BlogPostNotFound() {
    return (
        <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center justify-center px-4 py-12 sm:px-6">
            <section
                aria-labelledby="post-not-found-title"
                className="text-center"
            >
                <Title
                    as="h1"
                    id="post-not-found-title"
                    className="text-2xl tracking-tight sm:text-3xl"
                >
                    Post not found
                </Title>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    The article you&apos;re looking for
                    doesn&apos;t exist or may have been
                    removed.
                </p>

                <Link
                    href="/blog"
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                    Back to blog
                </Link>
            </section>
        </main>
    );
}