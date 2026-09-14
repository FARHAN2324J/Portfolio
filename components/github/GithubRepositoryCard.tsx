import { Card } from "../ui/Card";
import { Description } from "../ui/Description";
import { TechBadge } from "../ui/TechBadge";
import { Title } from "../ui/Title";

type GithubRepositoryCardProps = {
    name: string;
    description: string;
    language: string;
};

function GithubRepositoryCard({
    name,
    description,
    language,
}: GithubRepositoryCardProps) {
    return (
        <Card className="p-5">
            <Title as="h3" className="text-lg">
                {name}
            </Title>

            <Description className="mt-2 text-sm">
                {description}
            </Description>

            <TechBadge
                className="mt-4"
                label={language}
            />
        </Card>
    );
}

export { GithubRepositoryCard };