import { Card } from "@/components/ui/Card";

function Skeleton({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div
            aria-hidden="true"
            className={`animate-pulse rounded-md bg-border ${className}`}
        />
    );
}

export default function Loading() {
    return (
        <main
            className="mx-auto w-full max-w-5xl px-4 py-8"
            aria-busy="true"
            aria-label="Loading GitHub profile"
        >
            <div className="space-y-4">
                <Card className="flex items-center gap-4 p-4">
                    <Skeleton className="size-16 rounded-full" />

                    <div className="space-y-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                </Card>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Card
                            key={index}
                            className="space-y-2 p-4"
                        >
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-7 w-12" />
                        </Card>
                    ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                    <Card className="space-y-4 p-5">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-32 w-full" />
                    </Card>

                    <Card className="space-y-4 p-5">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-32 w-full" />
                    </Card>
                </div>

                <Card className="space-y-4 p-5">
                    <Skeleton className="h-5 w-40" />

                    <div className="grid gap-4 md:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="h-32 w-full rounded-[20px]"
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </main>
    );
}

export { Loading };