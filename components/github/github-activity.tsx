import { Card } from "../ui/Card";
import { Description } from "../ui/Description";
import { Title } from "../ui/Title";

function GithubActivity() {
    return (
        <Card className="p-5">
            <Title as="h2" className="text-lg">
                Activity
            </Title>

            <Description className="mt-4">
                GitHub activity will appear here.
            </Description>
        </Card>
    );
}

export { GithubActivity };