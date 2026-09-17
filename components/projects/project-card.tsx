import Image from "next/image";

import {
    HiArrowTopRightOnSquare,
    HiCodeBracket,
} from "react-icons/hi2";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Description } from "@/components/ui/Description";
import { TechBadge } from "@/components/ui/TechBadge";
import { Title } from "@/components/ui/Title";

import type { Project } from "@/lib/projects/projects";

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <Card
            className={[
                "group overflow-hidden",
                "rounded-2xl",
                "border border-border",
                "bg-card",
            ].join(" ")}
        >
            <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
            </div>

            <div className="flex flex-col p-5 sm:p-6">
                <Title
                    as="h2"
                    className="text-lg tracking-tight"
                >
                    {project.title}
                </Title>

                <Description className="mt-2 text-sm leading-6">
                    {project.description}
                </Description>

                <ul
                    aria-label={`${project.title} technologies`}
                    className="mt-5 flex flex-wrap gap-2"
                >
                    {project.technologies.map(
                        (technology) => (
                            <li key={technology}>
                                <TechBadge
                                    label={technology}
                                />
                            </li>
                        ),
                    )}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-5">
                    <Button
                        asChild
                        variant="primary"
                        size="sm"
                    >
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title} website`}
                        >
                            <span>Visit site</span>

                            <HiArrowTopRightOnSquare
                                className="size-4"
                                aria-hidden="true"
                            />
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="link"
                        size="sm"
                    >
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                        >
                            <HiCodeBracket
                                className="size-4"
                                aria-hidden="true"
                            />

                            <span>View code</span>
                        </a>
                    </Button>
                </div>
            </div>
        </Card>
    );
}