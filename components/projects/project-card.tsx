import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

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
        <Card className="flex h-full flex-col overflow-hidden">
            <div className="relative m-2 aspect-video overflow-hidden rounded-xl">
                <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col px-4 pt-2 pb-3">
                <Title
                    as="h2"
                    className="text-[16px]"
                >
                    {project.title}
                </Title>

                <Description className="text-[14px]">
                    {project.description}
                </Description>

                <ul
                    aria-label={`${project.title} technologies`}
                    className="mt-3 flex flex-wrap gap-1.5"
                >
                    {project.technologies.map((technology) => (
                        <li
                            key={technology}
                            className="text-[12px] *:px-2 *:py-1"
                        >
                            <TechBadge label={technology} />
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex items-center gap-2 pt-5">
                    <Button
                        asChild
                        variant="primary"
                        size="sm"
                    >
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit site
                            <ArrowUpRight
                                aria-hidden="true"
                                className="size-4"
                            />
                        </Link>
                    </Button>

                    {project.githubUrl && (
                        <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="rounded-full bg-border px-4 py-2.5"
                        >
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View code
                                <SiGithub
                                    aria-hidden="true"
                                    className="ml-1 size-4"
                                />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}