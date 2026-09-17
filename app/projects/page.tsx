import type { Metadata } from "next";

import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "A selection of projects I have built using modern web technologies.",
    alternates: {
        canonical: "/projects",
    },
    openGraph: {
        type: "website",
        title: "Projects",
        description:
            "A selection of projects I have built using modern web technologies.",
        url: "/projects",
    },
    twitter: {
        card: "summary",
        title: "Projects",
        description:
            "A selection of projects I have built using modern web technologies.",
    },
};

export default function ProjectsPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <header className="mx-auto max-w-2xl text-center">
                <Title
                    as="h1"
                    className="text-3xl tracking-tight sm:text-4xl"
                >
                    Projects
                </Title>

                <Description className="mt-3 text-sm leading-6 sm:text-base">
                    A selection of things I have built,
                    experimented with, and learned from.
                </Description>
            </header>

            <div className="mt-10 sm:mt-12">
                <ProjectsGrid />
            </div>
        </main>
    );
}