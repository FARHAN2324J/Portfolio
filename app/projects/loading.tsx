import { Card } from "@/components/ui/Card";

const skeletonProjects = Array.from(
    { length: 3 },
    (_, index) => index,
);

export default function Loading() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <header className="mx-auto max-w-2xl text-center">
                <div
                    className="mx-auto h-9 w-32 animate-pulse rounded-md bg-muted sm:h-10"
                    aria-hidden="true"
                />

                <div
                    className="mx-auto mt-4 h-5 w-full max-w-lg animate-pulse rounded-md bg-muted"
                    aria-hidden="true"
                />
            </header>

            <section
                aria-label="Loading projects"
                aria-busy="true"
                className="mt-10 sm:mt-12"
            >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {skeletonProjects.map((project) => (
                        <Card
                            key={project}
                            className="overflow-hidden rounded-2xl border border-border"
                        >
                            <div
                                className="aspect-video animate-pulse bg-muted"
                                aria-hidden="true"
                            />

                            <div className="p-5 sm:p-6">
                                <div
                                    className="h-6 w-2/3 animate-pulse rounded-md bg-muted"
                                    aria-hidden="true"
                                />

                                <div className="mt-3 space-y-2">
                                    <div
                                        className="h-4 w-full animate-pulse rounded-md bg-muted"
                                        aria-hidden="true"
                                    />

                                    <div
                                        className="h-4 w-4/5 animate-pulse rounded-md bg-muted"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="mt-5 flex gap-2">
                                    <div
                                        className="h-8 w-20 animate-pulse rounded-full bg-muted"
                                        aria-hidden="true"
                                    />

                                    <div
                                        className="h-8 w-24 animate-pulse rounded-full bg-muted"
                                        aria-hidden="true"
                                    />

                                    <div
                                        className="h-8 w-16 animate-pulse rounded-full bg-muted"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="mt-6 flex gap-3 border-t border-border pt-5">
                                    <div
                                        className="h-8 w-24 animate-pulse rounded-full bg-muted"
                                        aria-hidden="true"
                                    />

                                    <div
                                        className="h-8 w-24 animate-pulse rounded-full bg-muted"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}