import type { Metadata } from "next";

import { AiLabTables } from "@/components/ai-lab/ai-lab-tables";
import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";
import {
    aiLabChapters,
    aiLabPage,
    defaultAiLabLocale,
    getLocalizedText,
    localeDirections,
    localeLanguages,
} from "@/lib/ai-lab/content";

export const metadata: Metadata = {
    title: "AI Lab",
    description:
        "جدول‌های آموزشی برای مرور و تمرین کار با ایجنت‌های کدنویسی.",
    alternates: {
        canonical: "/ai-lab",
    },
    openGraph: {
        type: "website",
        title: "AI Lab",
        description:
            "جدول‌های آموزشی برای مرور و تمرین کار با ایجنت‌های کدنویسی.",
        url: "/ai-lab",
    },
    twitter: {
        card: "summary",
        title: "AI Lab",
        description:
            "جدول‌های آموزشی برای مرور و تمرین کار با ایجنت‌های کدنویسی.",
    },
};

export default function AiLabPage() {
    const locale = defaultAiLabLocale;

    return (
        <main
            dir={localeDirections[locale]}
            lang={localeLanguages[locale]}
            className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <header className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {aiLabPage.kicker}
                </p>

                <Title
                    as="h1"
                    className="mt-2 text-3xl tracking-tight sm:text-4xl"
                >
                    {getLocalizedText(aiLabPage.title, locale)}
                </Title>

                <Description className="mt-3 text-sm leading-7 sm:text-base">
                    {getLocalizedText(aiLabPage.description, locale)}
                </Description>
            </header>

            <AiLabTables chapters={aiLabChapters} locale={locale} />
        </main>
    );
}
