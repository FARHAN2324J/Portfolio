"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";

type ProjectsErrorProps = {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
};

export default function ProjectsError({
    error,
    reset,
}: ProjectsErrorProps) {
    useEffect(() => {
        console.error(
            "Projects page error:",
            error,
        );
    }, [error]);

    return (
        <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <section
                aria-labelledby="projects-error-title"
                className="w-full text-center"
            >
                <Title
                    id="projects-error-title"
                    as="h1"
                    className="text-2xl tracking-tight sm:text-3xl"
                >
                    Something went wrong
                </Title>

                <Description className="mx-auto mt-3 max-w-md text-sm leading-6 sm:text-base">
                    We couldn&apos;t load the projects right now.
                    Please try again.
                </Description>

                <div className="mt-6">
                    <Button
                        type="button"
                        variant="primary"
                        onClick={() => reset()}
                    >
                        Try again
                    </Button>
                </div>
            </section>
        </main>
    );
}