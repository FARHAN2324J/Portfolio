import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";

export function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="mt-20"
        >
            <Title
                id="about-title"
                as="h2"
                className="text-xl"
            >
                About me
            </Title>

            <Description className="mt-4 max-w-[65ch] text-pretty text-base leading-7 sm:text-lg sm:leading-8">
                <span className="block">
                    I&apos;m Farhan Fadaei, a frontend developer from Iran.
                    I started programming in 2024, and I&apos;m currently
                    focused on building modern and reliable web experiences.
                </span>

                <span className="mt-5 block">
                    Alongside frontend development, I&apos;m expanding my
                    backend skills so I can build complete,
                    production-ready applications from end to end.
                </span>

                <span className="mt-5 block">
                    I work remotely as a freelancer and I&apos;m also open
                    to full-time remote opportunities. If you&apos;re looking
                    for a frontend developer to join your team or
                    collaborate on a project, I&apos;d be happy to{" "}
                    <a
                        href="#footer"
                        className="whitespace-nowrap text-foreground underline underline-offset-2 transition-opacity hover:opacity-80 outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                    >
                        connect
                    </a>
                    .
                </span>
            </Description>
        </section>
    );
}