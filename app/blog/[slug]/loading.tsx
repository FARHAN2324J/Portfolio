export default function BlogPostLoading() {
    return (
        <main
            aria-busy="true"
            aria-label="Loading blog post"
            className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
        >
            <article>
                <header className="space-y-4">
                    <div
                        className="size-9 animate-pulse rounded-full bg-border"
                        aria-hidden="true"
                    />

                    <div className="space-y-3">
                        <div
                            className="h-10 w-full animate-pulse rounded-md bg-border sm:h-11 lg:h-12"
                            aria-hidden="true"
                        />

                        <div
                            className="h-10 w-[88%] animate-pulse rounded-md bg-border sm:h-11 lg:h-12"
                            aria-hidden="true"
                        />

                        <div
                            className="h-6 w-4/5 animate-pulse rounded-md bg-border sm:w-2/3"
                            aria-hidden="true"
                        />

                        <div
                            className="h-4 w-32 animate-pulse rounded bg-border"
                            aria-hidden="true"
                        />
                    </div>
                </header>

                <div className="mt-10 border-t border-border pt-10">
                    <div
                        className="space-y-4"
                        aria-hidden="true"
                    >
                        <div className="h-4 w-full animate-pulse rounded bg-border" />
                        <div className="h-4 w-[94%] animate-pulse rounded bg-border" />
                        <div className="h-4 w-[82%] animate-pulse rounded bg-border" />

                        <div className="pt-4">
                            <div className="h-7 w-[52%] animate-pulse rounded-md bg-border" />
                        </div>

                        <div className="h-4 w-full animate-pulse rounded bg-border" />
                        <div className="h-4 w-[91%] animate-pulse rounded bg-border" />
                        <div className="h-4 w-[76%] animate-pulse rounded bg-border" />

                        <div className="pt-4">
                            <div className="h-7 w-[42%] animate-pulse rounded-md bg-border" />
                        </div>

                        <div className="h-4 w-full animate-pulse rounded bg-border" />
                        <div className="h-4 w-[88%] animate-pulse rounded bg-border" />
                        <div className="h-4 w-[70%] animate-pulse rounded bg-border" />
                    </div>
                </div>
            </article>
        </main>
    );
}