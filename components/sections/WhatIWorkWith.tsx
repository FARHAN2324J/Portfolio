import {
    SiBackbonedotjs,
    SiExpress,
    SiFigma,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiReact,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "@icons-pack/react-simple-icons";

import { Card } from "@/components/ui/Card";
import { TechBadge } from "@/components/ui/TechBadge";
import { Title } from "@/components/ui/Title";

const techStack = [
    {
        title: "Frontend",
        technologies: [
            { label: "Next.js", icon: SiNextdotjs },
            { label: "React", icon: SiReact },
            { label: "TypeScript", icon: SiTypescript },
            { label: "JavaScript", icon: SiJavascript },
            { label: "HTML", icon: SiHtml5 },
            { label: "CSS" },
            { label: "Tailwind CSS", icon: SiTailwindcss },
            { label: "shadcn/ui" },
            { label: "GSAP" },
        ],
    },
    {
        title: "Backend",
        technologies: [
            { label: "Node.js", icon: SiNodedotjs },
            { label: "Express", icon: SiExpress },
            { label: "PostgreSQL", icon: SiPostgresql },
            { label: "Prisma", icon: SiPrisma },
            { label: "Supabase", icon: SiSupabase },
        ],
    },
    {
        title: "Tools",
        technologies: [
            { label: "Git", icon: SiGit },
            { label: "GitHub", icon: SiGithub },
            { label: "VS Code" },
            { label: "Postman", icon: SiPostman },
            { label: "Figma", icon: SiFigma },
            { label: "Vercel", icon: SiVercel },
        ],
    },
];

export function WhatIWorkWith() {
    return (
        <section
            aria-labelledby="what-i-work-with-title"
            className="mt-12"
        >
            <Title id="what-i-work-with-title" as="h2" className="text-xl">
                What I work with
            </Title>

            <div className="mt-4 grid grid-cols-1 gap-3">
                {techStack.map((category) => (
                    <Card key={category.title} className="p-5">
                        <Title as="h3" className="text-lg">
                            {category.title}
                        </Title>

                        <ul className="mt-4 flex flex-wrap gap-2">
                            {category.technologies.map(({ label, icon: Icon }) => (
                                <li key={label}>
                                    <TechBadge
                                        label={label}
                                        className="text-sm"
                                        icon={
                                            Icon ? (
                                                <Icon color="default" size={16} />
                                            ) : undefined
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </section>
    );
}