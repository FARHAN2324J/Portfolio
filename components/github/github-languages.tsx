import { Card } from "../ui/Card";
import { Description } from "../ui/Description";
import { Title } from "../ui/Title";

function GithubLanguages() {
    return (
        <Card className="p-5">
            <Title as="h2" className="text-lg">
                Languages
            </Title>

            <Description className="mt-4">
                Languages will appear here.
            </Description>
        </Card>
    );
}

export { GithubLanguages };