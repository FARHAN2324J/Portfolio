import { GithubRepositoryCard } from "./GithubRepositoryCard";
import { Title } from "../ui/Title";

const repositories = [
    {
        name: "Portfolio",
        description: "My personal portfolio website.",
        language: "TypeScript",
    },
    {
        name: "Project Two",
        description: "A modern web application.",
        language: "TypeScript",
    },
    {
        name: "Project Three",
        description: "An open-source project.",
        language: "JavaScript",
    },
] as const;

function GithubRepositories() {
    return (
        <section aria-labelledby="github-repositories-title">
            <Title
                as="h2"
                id="github-repositories-title"
                className="text-xl"
            >
                Top Repositories
            </Title>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
                {repositories.map((repository) => (
                    <GithubRepositoryCard
                        key={repository.name}
                        {...repository}
                    />
                ))}
            </div>
        </section>
    );
}

export { GithubRepositories };