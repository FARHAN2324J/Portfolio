export default function BlogPostLoading() {
    return (
        <main
            aria-busy="true"
            aria-label="Loading blog post"
            className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        >
            <article>
                <header className="space-y-4">
                    <div className="h-5 w-28 animate-pulse rounded-full bg-muted" />

                    <div className="space-y-3">
                        <div className="h-10 w-full max-w-2xl animate-pulse rounded-lg bg-muted sm:h-12" />

                        <div className="h-6 w-full max-w-xl animate-pulse rounded-lg bg-muted" />

                        <div className="h-4 w-32 animate-pulse rounded-full bg-muted" />
                    </div>
                </header>

                <div
                    aria-hidden="true"
                    className="mt-10 border-t border-border pt-10"
                >
                    <div className="space-y-4">
                        <div className="h-4 w-full animate-pulse rounded bg-muted" />
                        <div className="h-4 w-full animate-pulse rounded bg-muted" />
                        <div className="h-4 w-11/12 animate-pulse rounded bg-muted" />

                        <div className="h-8 w-2/3 animate-pulse rounded-lg bg-muted" />

                        <div className="h-4 w-full animate-pulse rounded bg-muted" />
                        <div className="h-4 w-10/12 animate-pulse rounded bg-muted" />
                        <div className="h-4 w-9/12 animate-pulse rounded bg-muted" />
                    </div>
                </div>
            </article>
        </main>
    );
}