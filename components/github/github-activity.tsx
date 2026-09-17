import type {
    GithubActivityData,
    GithubContributionLevel,
} from "@/types/github";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";

type GithubActivityProps = {
    activity: GithubActivityData;
};

const contributionColors: Record<
    GithubContributionLevel,
    string
> = {
    NONE: "bg-border/20",
    FIRST_QUARTILE:
        "bg-emerald-200 dark:bg-emerald-950",
    SECOND_QUARTILE:
        "bg-emerald-300 dark:bg-emerald-800",
    THIRD_QUARTILE:
        "bg-emerald-500 dark:bg-emerald-600",
    FOURTH_QUARTILE:
        "bg-emerald-700 dark:bg-emerald-400",
};

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(`${date}T00:00:00`));
}

function GithubActivity({
    activity,
}: GithubActivityProps) {
    return (
        <Card className="overflow-hidden p-5">
            <div className="flex items-center justify-between gap-4">
                <Title as="h2" className="text-lg">
                    Activity
                </Title>

                <span className="text-sm text-muted-foreground">
                    {activity.totalContributions.toLocaleString()} contributions
                </span>
            </div>

            <div className="mt-5 overflow-x-auto pb-2">
                <div className="flex min-w-max gap-1">
                    {activity.weeks.map(
                        (week, weekIndex) => (
                            <div
                                key={weekIndex}
                                className="flex flex-col gap-1"
                            >
                                {week.contributionDays.map(
                                    (day) => (
                                        <div
                                            key={day.date}
                                            title={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
                                            className={`size-3 rounded-[3px] ${contributionColors[day.contributionLevel]}`}
                                        />
                                    ),
                                )}
                            </div>
                        ),
                    )}
                </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
                <span>Less</span>

                <div className="size-3 rounded-[3px] bg-border/20" />

                <div className="size-3 rounded-[3px] bg-emerald-200 dark:bg-emerald-950" />

                <div className="size-3 rounded-[3px] bg-emerald-300 dark:bg-emerald-800" />

                <div className="size-3 rounded-[3px] bg-emerald-500 dark:bg-emerald-600" />

                <div className="size-3 rounded-[3px] bg-emerald-700 dark:bg-emerald-400" />

                <span>More</span>
            </div>
        </Card>
    );
}

export { GithubActivity };