import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Title } from "@/components/ui/Title";
import { Description } from "@/components/ui/Description";

import {
  projects,
  featuredProjects,
} from "@/lib/projects/projects";

export function Projects() {
  const featured = featuredProjects
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project !== undefined);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mt-20"
    >
      <header className="flex items-center justify-between gap-4">
        <Title
          id="projects-title"
          as="h2"
          className="text-xl"
        >
          Projects
        </Title>

        <Button asChild variant="link" size="sm">
          <Link href="/projects" className="text-lg">
            All projects
            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
            />
          </Link>
        </Button>
      </header>

      <ul className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <li key={project.id} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden">
              <div className="relative m-2 aspect-video overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 pt-2 pb-3">
                <Title
                  as="h3"
                  className="text-[16px]"
                >
                  {project.title}
                </Title>

                <Description className="text-[14px]">
                  {project.description}
                </Description>

                <div className="mt-auto flex items-center gap-2 pt-5">
                  <Button
                    asChild
                    variant="primary"
                    size="sm"
                  >
                    <Link href={project.liveUrl}>
                      Visit site
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4"
                      />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="rounded-full bg-border px-4 py-2.5"
                  >
                    {project.githubUrl && (
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
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}