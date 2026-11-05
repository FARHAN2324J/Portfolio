import type { Metadata } from "next";

import { AiLabTables } from "@/components/ai-lab/ai-lab-tables";
import { PageHeader } from "@/components/ui/PageHeader";
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
            <PageHeader
                kicker={aiLabPage.kicker}
                title={getLocalizedText(aiLabPage.title, locale)}
                description={getLocalizedText(aiLabPage.description, locale)}
            />

            <AiLabTables chapters={aiLabChapters} locale={locale} />
        </main>
    );
}
