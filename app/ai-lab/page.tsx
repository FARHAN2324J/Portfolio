import type { Metadata } from "next";

import { AiLabHero } from "@/components/ai-lab/ai-lab-hero";
import { AiLabTables } from "@/components/ai-lab/ai-lab-tables";
import {
    aiLabChapters,
    defaultAiLabLocale,
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
            className="mx-auto w-full max-w-5xl overflow-x-clip px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20"
        >
            <AiLabHero chapters={aiLabChapters} locale={locale} />

            <div id="chapters" className="scroll-mt-24">
                <AiLabTables chapters={aiLabChapters} locale={locale} />
            </div>
        </main>
    );
}
