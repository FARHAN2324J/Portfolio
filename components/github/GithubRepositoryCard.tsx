import type { GithubRepositoryData } from "@/types/github";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { TechBadge } from "../ui/TechBadge";
import { Title } from "../ui/Title";

type GithubRepositoryCardProps = {
    repository: GithubRepositoryData;
};

function GithubRepositoryCard({
    repository,
}: GithubRepositoryCardProps) {
    return (
        <Card className="flex flex-col p-5">
            <Title as="h3" className="text-lg">
                <a
                    href={repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    {repository.name}
                </a>
            </Title>

            <div className="mt-4 flex flex-wrap items-center gap-3">
                {repository.language && (
                    <TechBadge
                        className="py-1 px-2.5"
                        label={repository.language}
                    />
                )}

                <span className="text-sm text-muted-foreground">
                    ★ {repository.stars}
                </span>
            </div>

            <Button
                asChild
                variant="link"
                className="mt-4 self-start"
            >
                <a
                    href={repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View repository
                </a>
            </Button>
        </Card>
    );
}

export { GithubRepositoryCard };