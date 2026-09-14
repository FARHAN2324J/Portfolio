import type { GithubLanguageData } from "@/types/github";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";

type GithubLanguagesProps = {
    languages: GithubLanguageData[];
};

const colors = [
    "stroke-foreground",
    "stroke-muted-foreground",
    "stroke-border",
    "stroke-accent",
    "stroke-secondary",
];

function GithubLanguages({ languages }: GithubLanguagesProps) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    let offset = 0;

    return (
        <Card className="p-5">
            <Title as="h2" className="text-lg">
                Languages
            </Title>

            {languages.length ? (
                <div className="mt-6 flex items-center gap-6">
                    <div className="relative size-32 shrink-0">
                        <svg
                            viewBox="0 0 100 100"
                            className="size-full -rotate-90"
                            aria-hidden="true"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r={radius}
                                fill="none"
                                className="stroke-muted"
                                strokeWidth="9"
                            />

                            {languages.map((language, index) => {
                                const length =
                                    (language.percentage / 100) *
                                    circumference;

                                const dash = Math.max(length - 2, 0);
                                const currentOffset = offset;

                                offset += length;

                                return (
                                    <circle
                                        key={language.name}
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        fill="none"
                                        className={
                                            colors[
                                                index % colors.length
                                            ]
                                        }
                                        strokeWidth="9"
                                        strokeDasharray={`${dash} ${circumference - dash}`}
                                        strokeDashoffset={-currentOffset}
                                    />
                                );
                            })}
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xl font-medium text-foreground">
                                {languages[0].percentage}%
                            </span>

                            <span className="text-[11px] text-muted-foreground">
                                {languages[0].name}
                            </span>
                        </div>
                    </div>

                    <div className="min-w-0 flex-1 space-y-2">
                        {languages.slice(0, 5).map((language, index) => (
                            <div
                                key={language.name}
                                className="flex items-center justify-between gap-3"
                            >
                                <div className="flex min-w-0 items-center gap-2">
                                    <span
                                        aria-hidden="true"
                                        className={`size-2 rounded-full ${colors[
                                            index % colors.length
                                        ].replace("stroke-", "bg-")}`}
                                    />

                                    <span className="truncate text-sm text-muted-foreground">
                                        {language.name}
                                    </span>
                                </div>

                                <span className="text-sm font-medium text-foreground">
                                    {language.percentage}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="mt-4 text-sm text-muted-foreground">
                    No language data available.
                </p>
            )}
        </Card>
    );
}

export { GithubLanguages };
