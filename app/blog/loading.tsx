export default function BlogLoading() {
    return (
        <main
            aria-busy="true"
            aria-label="Loading blog"
            className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <div className="mx-auto max-w-2xl text-center">
                <div className="mx-auto h-10 w-32 animate-pulse rounded-full bg-muted" />

                <div className="mx-auto mt-4 h-5 w-full max-w-md animate-pulse rounded-full bg-muted" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                {Array.from({ length: 6 }).map(
                    (_, index) => (
                        <div
                            key={index}
                            className="h-56 animate-pulse rounded-[20px] border border-border bg-muted/40"
                        />
                    ),
                )}
            </div>
        </main>
    );
}