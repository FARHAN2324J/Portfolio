import type { GithubStatsData } from "@/types/github";
import { GithubStatCard } from "./github-stat-card";

type GithubStatsProps = {
    stats: GithubStatsData;
};

function GithubStats({ stats }: GithubStatsProps) {
    const items = [
        {
            label: "Repositories",
            value: stats.repositories,
        },
        {
            label: "Commits",
            value: stats.commits,
        },
        {
            label: "Followers",
            value: stats.followers,
        },
    ];

    return (
        <section aria-labelledby="github-stats-title">
            <h2
                id="github-stats-title"
                className="sr-only"
            >
                GitHub statistics
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {items.map((item) => (
                    <GithubStatCard
                        key={item.label}
                        label={item.label}
                        value={item.value}
                    />
                ))}
            </div>
        </section>
    );
}

export { GithubStats };