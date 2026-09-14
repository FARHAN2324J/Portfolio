"use client";

import { Button } from "@/components/ui/Button";
import { Title } from "@/components/ui/Title";
import { Description } from "@/components/ui/Description";

type GithubErrorProps = {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
};

export default function GithubError({
    reset,
}: GithubErrorProps) {
    return (
        <main className="mx-auto flex w-full max-w-5xl justify-center px-4 py-16">
            <div
                className="max-w-md text-center"
                role="alert"
            >
                <Title as="h1" className="text-xl">
                    Unable to load GitHub data
                </Title>

                <Description className="mt-2">
                    Something went wrong while loading the GitHub profile.
                    Please try again.
                </Description>

                <Button
                    variant="primary"
                    className="mt-6"
                    onClick={reset}
                >
                    Try again
                </Button>
            </div>
        </main>
    );
}