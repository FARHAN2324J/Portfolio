import {
    SiCss,
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
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiGsap,
    SiAnthropic,
} from "@icons-pack/react-simple-icons";
import { VscVscode } from "react-icons/vsc";
import { Card } from "@/components/ui/Card";
import { TechBadge } from "@/components/ui/TechBadge";
import { Title } from "@/components/ui/Title";
import { baskervville } from "@/app/fonts";

const techStack = [
    {
        title: "Frontend",
        technologies: [
            { label: "HTML", icon: SiHtml5 },
            { label: "CSS", icon: SiCss },
            { label: "JavaScript", icon: SiJavascript },
            { label: "TypeScript", icon: SiTypescript },
            { label: "React", icon: SiReact },
            { label: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
            { label: "Tailwind CSS", icon: SiTailwindcss },
            { label: "shadcn/ui", icon: SiShadcnui },
            { label: "GSAP", icon: SiGsap, },
        ],
    },
    {
        title: "Backend",
        technologies: [
            { label: "Node.js", icon: SiNodedotjs },
            { label: "Express", icon: SiExpress, color: "#00C853" },
            { label: "PostgreSQL", icon: SiPostgresql },
            { label: "Prisma", icon: SiPrisma },
            { label: "Supabase", icon: SiSupabase },
        ],
    },
    {
        title: "Tools",
        technologies: [
            { label: "Git", icon: SiGit },
            { label: "GitHub", icon: SiGithub, color: "#FFFFFF" },
            {
                label: "VS Code",
                icon: VscVscode,
                color: "#0098FF"
            },
            { label: "Postman", icon: SiPostman },
            { label: "Figma", icon: SiFigma },
            { label: "Vercel", icon: SiVercel },
            {
                label: "Claude",
                icon: SiAnthropic,
                color: "#D97757"
            },
            {
                label: "ChatGPT",
            },
        ],
    },
];


export function WhatIBuildWith() {
    return (
        <section
            aria-labelledby="what-i-work-with-title"
            className="mt-20"
        >
            <Title
                id="what-i-work-with-title"
                as="h2"
                className="text-xl"
            >
                What I{" "}
                <span className={`${baskervville.className} font-medium`}>
                    build
                </span>{" "}
                with
            </Title>

            <div className="mt-4 grid grid-cols-1 gap-3">
                {techStack.map((category) => (
                    <Card key={category.title} className="p-5">
                        <Title as="h3" className="text-lg">
                            {category.title}
                        </Title>

                        <ul className="mt-4 flex flex-wrap gap-2">
                            {category.technologies.map(
                                ({ label, icon: Icon, color }) => (
                                    <li key={label}>
                                        <TechBadge
                                            label={label}
                                            className="text-sm"
                                            icon={
                                                Icon ? (
                                                    <Icon
                                                        color={color ?? "default"}
                                                        size={16}
                                                    />
                                                ) : undefined
                                            }
                                        />
                                    </li>
                                )
                            )}
                        </ul>
                    </Card>
                ))}
            </div>
        </section>
    );
}
