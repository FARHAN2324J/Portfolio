import Image from "next/image";
import { Card } from "../ui/Card";
import { Description } from "../ui/Description";
import { Title } from "../ui/Title";
import { GithubProfileData } from "@/types/github";

type GithubProfileProps = {
    profile: GithubProfileData;
};

function GithubProfile({ profile }: GithubProfileProps) {
    return (
        <Card className="flex items-center gap-4 p-4">
            <Image
                src={profile.avatarUrl}
                alt={`${profile.name}'s profile picture`}
                width={64}
                height={64}
                className="size-16 rounded-full object-cover"
            />

            <div className="min-w-0">
                <Title as="h1" className="truncate text-lg">
                    {profile.name}
                </Title>

                <Description className="truncate text-sm">
                    @{profile.username}
                </Description>
            </div>
        </Card>
    );
}

export { GithubProfile };