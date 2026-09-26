import Image from "next/image";

import { baskervville } from "@/app/fonts";
import { Button } from "../../ui/Button";
import { TechBadge } from "../../ui/TechBadge";

export function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="flex justify-center"
        >
            <div className="mt-10 grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                <div className="mx-auto w-fit lg:mx-0">
                    <h1
                        id="hero-title"
                        className="
                            max-w-4xl
                            text-4xl
                            font-semibold
                            leading-none
                            tracking-[-0.03em]
                            text-foreground
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                        "
                    >
                        <span className="block whitespace-nowrap">
                            Building Websites
                        </span>

                        <span className="block whitespace-nowrap">
                            that Turn{" "}
                            <span
                                className={`${baskervville.className} bg-[linear-gradient(180deg,#EEEEEE,#101010)] bg-clip-text font-normal italic text-transparent`}
                            >
                                Visitors
                            </span>
                        </span>

                        <span className="block whitespace-nowrap">
                            into{" "}
                            <span
                                className={`${baskervville.className} bg-[linear-gradient(180deg,#EEEEEE,#101010)] bg-clip-text font-normal italic text-transparent`}
                            >
                                Customers
                            </span>
                        </span>
                    </h1>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                        <Button
                            asChild
                            variant="primary"
                            size="default"
                        >
                            <a
                                href="#about"
                                className="font-semibold"
                            >
                                About me
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="primary"
                            size="default"
                        >
                            <a
                                href="#projects"
                                className="font-semibold"
                            >
                                View projects
                            </a>
                        </Button>
                    </div>
                </div>

                <figure className="relative mx-auto w-full max-w-70 sm:max-w-[320px] md:max-w-90 lg:max-w-100">
                    <div className="relative aspect-square overflow-hidden rounded-3xl">
                        <Image
                            src="/images/profile.jpg"
                            alt="Portrait of Farhan"
                            fill
                            priority
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                            className="object-cover"
                        />
                    </div>

                    <ul
                        aria-label="Professional highlights"
                        className="pointer-events-none absolute inset-0"
                    >
                        <li className="absolute left-0 top-4 -translate-x-2 sm:left-0 sm:top-6 sm:-translate-x-4">
                            <TechBadge
                                label="2+ Years Experience"
                                className="border-border/50 bg-background/60 px-2.5 py-1.5 text-xs backdrop-blur-md sm:px-3 sm:py-2 sm:text-sm"
                            />
                        </li>

                        <li className="absolute right-0 top-4 translate-x-2 sm:right-0 sm:top-6 sm:translate-x-4">
                            <TechBadge
                                label="Freelancer · Remote"
                                className="border-border/50 bg-background/60 px-2.5 py-1.5 text-xs backdrop-blur-md sm:px-3 sm:py-2 sm:text-sm"
                            />
                        </li>

                        <li className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 sm:bottom-0">
                            <TechBadge
                                label="Available for work"
                                className="border-border/50 bg-background/60 px-2.5 py-1.5 text-xs backdrop-blur-md sm:px-3 sm:py-2 sm:text-sm"
                                icon={
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                                    </span>
                                }
                            />
                        </li>
                    </ul>
                </figure>
            </div>
        </section>
    );
}