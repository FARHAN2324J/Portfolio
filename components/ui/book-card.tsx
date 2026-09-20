import Image from "next/image";

import type { Book } from "@/lib/books";
import { Title } from "./Title";

function BookCard({ title, image }: Book) {
    return (
        <article className="group min-w-0">
            <div className="relative mx-auto aspect-2/3 w-[82%] perspective-distant [--book-depth:16px] sm:[--book-depth:26px] mt-5">
                <div
                    aria-hidden
                    className="absolute inset-x-[6%] -bottom-3 h-4 rounded-full bg-black/30 blur-md"
                />

                <div className="relative size-full transform-3d transform-[rotateY(25deg)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:[transform:rotateY(34deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-l-[3px] rounded-r-md bg-muted [transform:translateZ(calc(var(--book-depth)/2))]">
                        <Image
                            src={image}
                            alt={`Cover of ${title}`}
                            fill
                            sizes="(min-width: 640px) 28vw, 45vw"
                            className="object-cover"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.3)_0%,rgba(255,255,255,0.2)_2.5%,transparent_6%),linear-gradient(115deg,rgba(255,255,255,0.15),transparent_40%)]"
                        />
                    </div>

                    <div
                        aria-hidden
                        className="absolute top-0 flex h-full w-(--book-depth) items-center justify-center bg-zinc-800 [left:calc(var(--book-depth)/-2)] [transform:rotateY(-90deg)]"
                    >
                        <span className="max-h-[90%] truncate text-[8px] font-medium tracking-wide text-zinc-100/90 [writing-mode:vertical-rl] sm:text-[9px]">
                            {title}
                        </span>
                    </div>
                </div>
            </div>

            <Title as="h3" className="sr-only">
                {title}
            </Title>
        </article>
    );
}

export { BookCard };