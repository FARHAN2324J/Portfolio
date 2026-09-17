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
                I’m{" "}
                <span
                    className={`${baskervville.className} text-foreground`}
                >
                    Farhan Fadaei
                </span>
                , a{" "}
                <span
                    className={`${baskervville.className} text-foreground`}
                >
                    frontend developer
                </span>{" "}
                based in Iran with over two years of professional
                experience building modern, responsive, and
                maintainable web applications.
                <br />
                <br />
                My main focus is frontend development, while I’m
                continuously expanding my skills across the{" "}
                <span
                    className={`${baskervville.className} text-foreground`}
                >
                    full stack
                </span>{" "}
                — from backend development and databases to
                building complete, production-ready applications.
                <br />
                <br />
                I’m open to{" "}
                <span
                    className={`${baskervville.className} text-foreground`}
                >
                    freelance, part-time, and full-time
                </span>{" "}
                opportunities, including{" "}
                <span
                    className={`${baskervville.className} text-foreground`}
                >
                    remote work
                </span>
                . I’m always interested in working on meaningful
                products, learning from new challenges, and
                collaborating with people who care about building
                things well.
            </Description>
        </section>
    );
}