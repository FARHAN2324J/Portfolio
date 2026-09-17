import type { GithubRepositoryData } from "@/types/github";
import { Description } from "../ui/Description";
import { Title } from "../ui/Title";
import { GithubRepositoryCard } from "./GithubRepositoryCard";

type GithubRepositoriesProps = {
    repositories: GithubRepositoryData[];
};

function GithubRepositories({
    repositories,
}: GithubRepositoriesProps) {
    return (
        <section aria-labelledby="github-repositories-title" className="mb-10">
            <Title
                as="h2"
                id="github-repositories-title"
                className="text-xl"
            >
                Pinned Repositories
            </Title>

            {repositories.length > 0 ? (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {repositories.map(
                        (repository) => (
                            <GithubRepositoryCard
                                key={
                                    repository.name
                                }
                                repository={
                                    repository
                                }
                            />
                        ),
                    )}
                </div>
            ) : (
                <Description className="mt-4">
                    No pinned repositories found.
                </Description>
            )}
        </section>
    );
}

export { GithubRepositories };