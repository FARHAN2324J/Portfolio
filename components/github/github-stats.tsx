import { GithubStatCard } from "./github-stat-card";

const stats = [
    {
        label: "Repositories",
        value: 24,
    },
    {
        label: "Commits",
        value: 482,
    },
    {
        label: "Followers",
        value: 18,
    },
    {
        label: "Pull Requests",
        value: 12,
    },
] as const;

function GithubStats() {
    return (
        <section aria-labelledby="github-stats-title">
            <h2 id="github-stats-title" className="sr-only">
                GitHub statistics
            </h2>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mt-3">
                {stats.map((stat) => (
                    <GithubStatCard
                        key={stat.label}
                        label={stat.label}
                        value={stat.value}
                    />
                ))}
            </div>
        </section>
    );
}

export { GithubStats };