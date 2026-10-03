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
                    I&apos;m Farhan Fadaei, a frontend developer.
                    I started programming in 2024 and I&apos;m currently focused on growing professionally in the field.
                </span>

                <span className="mt-5 block">
                    Alongside frontend development, I&apos;m learning backend development with the goal of building complete, production-ready applications end to end.
                </span>

                <span className="mt-5 block">
                    I work remotely as a freelancer, and I&apos;m also open to remote full-time opportunities with teams and companies. If you&apos;re looking for a frontend developer to work with, I&apos;d be happy to{" "}
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