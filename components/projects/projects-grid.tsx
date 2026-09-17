import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects/projects";

export function ProjectsGrid() {
    return (
        <section
            aria-labelledby="projects-list-title"
        >
            <h2
                id="projects-list-title"
                className="sr-only"
            >
                Projects
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}