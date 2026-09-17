"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const navItems = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/projects",
        label: "Projects",
    },
    {
        href: "/github",
        label: "Dashboard",
    },
    {
        href: "/blog",
        label: "Blog",
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
            isActivePath(
                pathname,
                item.href,
            ),
        ),
    );

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="flex justify-center px-3 pt-4 sm:px-6">
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
                                "left-0 top-0 h-10",
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
                                            "flex h-10 w-full",
                                            "items-center justify-center",
                                            "rounded-full",
                                            "px-2 sm:px-3",
                                            "whitespace-nowrap",
                                            "text-xs font-medium sm:text-sm",
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
                                        {item.label}
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