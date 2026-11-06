import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
    aiLabPage,
    getLocalizedText,
    type AiLabChapter,
    type AiLabLocale,
} from "@/lib/ai-lab/content";

type AiLabHeroProps = {
    chapters: readonly AiLabChapter[];
    locale: AiLabLocale;
};

const numberFormatters: Record<AiLabLocale, Intl.NumberFormat> = {
    fa: new Intl.NumberFormat("fa-IR"),
    en: new Intl.NumberFormat("en-US"),
};

function AiLabHero({ chapters, locale }: AiLabHeroProps) {
    const topics = chapters.flatMap((chapter) => chapter.topics);
    const firstTopicHref =
        topics.find((topic) => topic.href)?.href ?? "/ai-lab";
    const StartIcon = locale === "fa" ? ArrowLeft : ArrowRight;
    const formatNumber = numberFormatters[locale];

    const stats = [
        {
            label: getLocalizedText(aiLabPage.stats.chapters, locale),
            value: chapters.length,
        },
        {
            label: getLocalizedText(aiLabPage.stats.topics, locale),
            value: topics.length,
        },
        {
            label: getLocalizedText(aiLabPage.stats.pages, locale),
            value: topics.filter((topic) => topic.href).length,
        },
    ];

    return (
        <section
            aria-labelledby="ai-lab-title"
            className="relative isolate mb-10 sm:mb-12"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,#000_20%,transparent_100%)]" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
                <div className="text-center lg:text-start">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur mt-10">
                        <span
                            aria-hidden="true"
                            className="relative flex size-1.5"
                        >
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-sky-400" />
                        </span>

                        {aiLabPage.kicker}
                    </span>

                    <h1
                        id="ai-lab-title"
                        className="mt-5 bg-[linear-gradient(180deg,#ffffff_0%,#f2f2f2_45%,#bdbdbd_100%)] bg-clip-text text-balance text-3xl font-medium leading-[1.35] tracking-tight text-transparent sm:text-4xl lg:text-[2.75rem] lg:leading-[1.3]"
                    >
                        {getLocalizedText(aiLabPage.title, locale)}
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:mx-0">
                        {getLocalizedText(aiLabPage.description, locale)}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                        <Button
                            asChild
                            variant="primary"
                            className="h-11 px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            <Link href={firstTopicHref}>
                                {getLocalizedText(
                                    aiLabPage.actions.start,
                                    locale,
                                )}

                                <StartIcon
                                    aria-hidden="true"
                                    className="size-4"
                                />
                            </Link>
                        </Button>

                        <a
                            href="#chapters"
                            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 text-sm font-medium text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            {getLocalizedText(
                                aiLabPage.actions.browse,
                                locale,
                            )}

                            <ArrowDown
                                aria-hidden="true"
                                className="size-4 text-muted-foreground"
                            />
                        </a>
                    </div>

                    <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border/60 pt-6 lg:justify-start">
                        {stats.map((stat) => (
                            <li
                                key={stat.label}
                                className="flex items-baseline gap-2"
                            >
                                <span className="text-lg font-semibold tabular-nums text-foreground">
                                    {formatNumber.format(stat.value)}
                                </span>

                                <span className="text-xs text-muted-foreground">
                                    {stat.label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <figure className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
                    <div
                        aria-hidden="true"
                        className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_68%)] blur-2xl"
                    />

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]">
                        <Image
                            src="/images/ai-lab-stable.gif"
                            alt="تصویرسازی پیکسلی از یک برنامه‌نویس در حال کار با کامپیوتر در آزمایشگاه هوش مصنوعی"
                            width={377}
                            height={239}
                            priority
                            unoptimized
                            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 420px, 90vw"
                            className="block h-auto w-full [image-rendering:pixelated]"
                        />
                    </div>
                </figure>
            </div>
        </section>
    );
}

export { AiLabHero };
export type { AiLabHeroProps };
