
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
    House,
    FolderKanban,
    LayoutDashboard,
    BookOpen,
    Boxes,
    LayoutGrid,
    ActivityIcon,
    Gauge,
    PenLine,
    NotebookPen,
    Newspaper,
    Hammer,
    FolderGit2,
    Grid2x2,
    Blocks,
    AppWindow,
    Radar,
    GitBranch,
    BarChart3,
    CircuitBoard,
    TrendingUp,
    MessageSquareText,
    ScrollText,
    Feather,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Activity } from "react";
import { SiGithub, SiGsap } from "@icons-pack/react-simple-icons";

const navItems = [
    {
        href: "/",
        label: "Home",
        icon: House,
    },
    {
        href: "/projects",
        label: "Projects",
        icon: AppWindow,
    },
    {
        href: "/github",
        label: "Dashboard",
        icon: BarChart3,
    },
    {
        href: "/blog",
        label: "Blog",
        icon: NotebookPen,
    },
] as const;

function isActivePath(
    pathname: string,
    href: string,
) {
    if (href === "/") {
        return pathname === "/";
    }

    return (
        pathname === href ||
        pathname.startsWith(`${href}/`)
    );
}

export function Navbar() {
    const pathname = usePathname();

    const activeIndex = Math.max(
        0,
        navItems.findIndex((item) =>
            isActivePath(pathname, item.href),
        ),
    );

    return (
        <header className="fixed inset-x-0 bottom-0 z-50 w-full">
            <div className="flex justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:px-6">
                <nav
                    aria-label="Main navigation"
                    className={cn(
                        "relative w-full max-w-97.5",
                        "rounded-full",
                        "border border-border/80",
                        "bg-background/50 p-1",
                        "shadow-sm backdrop-blur-xl",
                    )}
                >
                    <ul className="relative flex">
                        <motion.div
                            className={cn(
                                "pointer-events-none absolute",
                                "left-0 top-0 h-14",
                                "w-1/4 rounded-full",
                                "bg-border",
                            )}
                            animate={{
                                x: `${activeIndex * 100}%`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 450,
                                damping: 32,
                                mass: 0.6,
                            }}
                            aria-hidden="true"
                        />

                        {navItems.map((item) => {
                            const isActive =
                                isActivePath(
                                    pathname,
                                    item.href,
                                );

                            const Icon = item.icon;

                            return (
                                <li
                                    key={item.href}
                                    className="min-w-0 flex-1"
                                >
                                    <Link
                                        href={item.href}
                                        aria-current={
                                            isActive
                                                ? "page"
                                                : undefined
                                        }
                                        className={cn(
                                            "relative z-10",
                                            "flex h-14 w-full",
                                            "flex-col items-center justify-center",
                                            "gap-1 rounded-full",
                                            "px-1",
                                            "transition-colors duration-200",
                                            "focus-visible:outline-none",
                                            "focus-visible:ring-2",
                                            "focus-visible:ring-ring",
                                            "focus-visible:ring-offset-2",
                                            "focus-visible:ring-offset-background",
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground",
                                        )}
                                    >
                                        <Icon
                                            className="size-[18px] shrink-0"
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />

                                        <span className="whitespace-nowrap text-[10px] font-medium sm:text-xs">
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}