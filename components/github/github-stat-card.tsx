import { Card } from "../ui/Card";

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
            <span className="text-sm font-medium text-muted-foreground">
                {label}
            </span>

            <span className="mt-1 block text-2xl font-medium text-foreground">
                {value.toLocaleString()}
            </span>
        </Card>
    );
}

export { GithubStatCard };