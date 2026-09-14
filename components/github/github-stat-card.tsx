import { Card } from "../ui/Card";
import { Description } from "../ui/Description";

type GithubStatCardProps = {
    label: string;
    value: number;
};

function GithubStatCard({
    label,
    value,
}: GithubStatCardProps) {
    return (
        <Card className="p-4">
            <Description className="text-sm">
                {label}
            </Description>

            <p className="mt-1 text-2xl font-medium text-foreground">
                {value.toLocaleString()}
            </p>
        </Card>
    );
}

export { GithubStatCard };