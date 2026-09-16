export default function BlogLoading() {
    return (
        <main
            aria-busy="true"
            aria-label="Loading blog"
            className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <header className="mx-auto max-w-2xl text-center">
                <div
                    className="mx-auto h-10 w-24 animate-pulse rounded-md bg-border sm:h-11 sm:w-28"
                    aria-hidden="true"
                />

                <div
                    className="mx-auto mt-3 h-5 w-full max-w-md animate-pulse rounded bg-border"
                    aria-hidden="true"
                />
            </header>

            <section
                aria-labelledby="blog-loading-title"
                className="mt-10 sm:mt-12"
            >
                <h2
                    id="blog-loading-title"
                    className="sr-only"
                >
                    Loading blog posts
                </h2>

                <div className="flex flex-col">
                    {Array.from({ length: 6 }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 border-b border-border py-5 sm:gap-5 sm:py-6"
                                aria-hidden="true"
                            >
                                <div className="size-9 shrink-0 animate-pulse rounded-full bg-border" />

                                <div className="min-w-0 flex-1 space-y-2">
                                    <div
                                        className={[
                                            "h-5 animate-pulse rounded bg-border",
                                            index % 3 === 0
                                                ? "w-2/5"
                                                : index % 3 === 1
                                                    ? "w-1/2"
                                                    : "w-1/3",
                                        ].join(" ")}
                                    />

                                    <div
                                        className={[
                                            "h-4 animate-pulse rounded bg-border",
                                            index % 2 === 0
                                                ? "w-3/5"
                                                : "w-2/5",
                                        ].join(" ")}
                                    />
                                </div>

                                <div className="size-5 shrink-0 animate-pulse rounded bg-border" />
                            </div>
                        ),
                    )}
                </div>
            </section>
        </main>
    );
}