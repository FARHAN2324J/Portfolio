import { baskervville } from "@/app/fonts";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="flex justify-center"
        >
            <div className="mt-10 w-full">
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
                    <span className="block">
                        Building Websites
                    </span>

                    <span className="block">
                        that Turn{" "}
                        <span
                            className={`${baskervville.className} bg-[linear-gradient(180deg,#EEEEEE,#101010)] bg-clip-text font-normal italic text-transparent`}
                        >
                            Visitors
                        </span>
                    </span>

                    <span className="block">
                        into{" "}
                        <span
                            className={`${baskervville.className} bg-[linear-gradient(180deg,#EEEEEE,#101010)] bg-clip-text font-normal italic text-transparent`}
                        >
                            Customers
                        </span>
                    </span>
                </h1>

                <div className="mt-7 flex flex-wrap items-center gap-3">
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
                            My work
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}