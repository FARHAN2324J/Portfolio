import Image from "next/image";
import { Title } from "../ui/Title";
import { Description } from "../ui/Description";
import { Card } from "../ui/Card";


type GithubProfileProps = {
    name: string;
    username: string;
    avatarUrl: string;
};

function GithubProfile({
    name,
    username,
    avatarUrl,
}: GithubProfileProps) {
    return (
        <Card className="flex items-center gap-4 p-4">
            <Image
                src={avatarUrl}
                alt={`${name}'s profile picture`}
                width={64}
                height={64}
                className="size-16 rounded-full object-cover"
            />

            <div className="min-w-0">
                <Title as="h1" className="truncate text-lg">
                    {name}
                </Title>

                <Description className="truncate text-sm">
                    @{username}
                </Description>
            </div>
        </Card>
    );
}

export { GithubProfile };