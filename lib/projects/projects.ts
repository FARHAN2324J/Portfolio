export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects = [
  {
    id: "project-1",
    title: "Project One",
    description:
      "A short description about this project and the problem it solves.",
    image: "/images/projects/project-1.webp",
    imageAlt: "Screenshot of Project One website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/project-one",
  },
  {
    id: "project-2",
    title: "Project Two",
    description:
      "A short description about this project and the main technologies used to build it.",
    image: "/images/projects/project-2.webp",
    imageAlt: "Screenshot of Project Two website",
    technologies: ["React", "TypeScript", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/project-two",
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "A short description about this project and its key features.",
    image: "/images/projects/project-3.webp",
    imageAlt: "Screenshot of Project Three website",
    technologies: ["Next.js", "React", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/project-three",
  },
  {
    id: "project-4",
    title: "Project Four",
    description:
      "A short description about this project and what makes it useful.",
    image: "/images/projects/project-4.webp",
    imageAlt: "Screenshot of Project Four website",
    technologies: ["Next.js", "TypeScript", "Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/project-four",
  },
] satisfies readonly Project[];
