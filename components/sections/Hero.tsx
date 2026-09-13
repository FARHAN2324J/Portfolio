import { baskervville } from "@/app/fonts";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="flex justify-center"
        >
            <div className="w-full mt-10">
                <h1
                    id="hero-title"
                    className="
                        text-2xl
                        font-semibold
                        leading-[1.05]
                        tracking-tight
                        text-foreground
                        sm:text-2xl
                        md:text-3xl
                        lg:text-4xl
                        xl:text-5xl
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

                <div className="mt-5 flex items-center gap-3">
                    <Button
                        asChild
                        variant={"primary"}
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
                        variant={"primary"}
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