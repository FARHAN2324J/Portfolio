export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: readonly string[];
  liveUrl: string;
  githubUrl?: string;
};

export const projects = [
  {
    id: "updev",
    title: "UPDEV",
    description: "The latest tech news, all in one place.",
    image: "/images/projects/updev-DbgAhrjN.jpg",
    imageAlt: "UPDEV technology news website",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
    ],
    liveUrl: "https://updev-app.vercel.app/",
    githubUrl: "https://github.com/FARHAN2324J/UPDEV",
  },
  {
    id: "standup",
    title: "Standup.io",
    description: "Track your team's progress without the meetings.",
    image: "/images/projects/StandUp-DPrc-zPD.webp",
    imageAlt: "Standup.io team progress website",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "SupabaseAuth",
      "Prisma",
    ],
    liveUrl: "https://standup-io.vercel.app/",
    githubUrl: "https://github.com/attarnia/standup.io",
  },
  {
    id: "planto",
    title: "Planto",
    description:
      "A clean and modern website for discovering and exploring plants.",
    image: "/images/projects/Planto.webp",
    imageAlt: "Planto website",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    liveUrl: "https://farhan2324j.github.io/Planto/",
    githubUrl: "https://github.com/FARHAN2324J/Planto-web",
  },
  {
    id: "mntn",
    title: "MNTN",
    description:
      "Get out there and discover your next slope, mountain, and destination.",
    image: "/images/projects/MNTN-i3cim1h7.webp",
    imageAlt: "MNTN outdoor travel website",
    technologies: ["React", "TailwindCSS", "ScrollTrigger"],
    liveUrl: "https://farhan2324j.github.io/MNTN/",
  },
  {
    id: "Veloce",
    title: "Véloce",
    description:
      "A modern web experience with a clean interface and smooth interactions.",
    image: "/images/projects/Framev.webp",
    imageAlt: "Framev website",
    technologies: ["Next.js", "TypeScript", "Motion"],
    liveUrl: "https://farhan2324j.github.io/VELOSE/",
  },
  {
    id: "running-for-change",
    title: "RunningForChange",
    description:
      "A modern website built to promote an initiative and encourage community participation.",
    image: "/images/projects/RunningForChange.webp",
    imageAlt: "Running for Change website",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "SplitText",
      "ScrollTrigger",
    ],
    liveUrl: "https://farhan2324j.github.io/RunningForChange/",
  },
  {
    id: "finance",
    title: "Noble Finances",
    description:
      "A clean and modern interface for presenting financial information.",
    image: "/images/projects/Finance.webp",
    imageAlt: "Finance website",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    liveUrl: "https://farhan2324j.github.io/NobleFinances/",
  },
] satisfies readonly Project[];

export type ProjectId = (typeof projects)[number]["id"];

export const featuredProjects = [
  "updev",
  "standup",
  "planto",
] as const satisfies readonly ProjectId[];
