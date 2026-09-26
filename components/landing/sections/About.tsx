import { baskervville } from "@/app/fonts";
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

            <Description className="mt-4 max-w-2xl text-lg leading-6">
                <span className="block">
                    I&apos;m Farhan Fadaei, a frontend developer. I started
                    programming in 2024 and I&apos;m currently focused on growing
                    professionally in the field.
                </span>

                <span className="mt-4 block">
                    Alongside frontend development, I&apos;m learning backend
                    development with the goal of building complete, production-ready
                    applications end to end.
                </span>

                <span className="mt-4 block">
                    I work remotely as a freelancer, and I&apos;m also open to
                    remote full-time opportunities with teams and companies. If
                    you&apos;re looking for a frontend developer to work with,
                    I&apos;d be happy to{" "}
                    <a
                        href="#footer"
                        className="text-foreground transition-opacity hover:opacity-80"
                    >
                        connect
                    </a>
                    .
                </span>
            </Description>
        </section>
    );
}