/**
 * AI Lab content, UI copy, and locale scaffolding.
 *
 * Content lives once, with stable (untranslated) ids and localized text fields.
 * To add a chapter or topic, append an entry to `aiLabChapters`. To translate,
 * fill in the `en` field — no component changes are needed.
 */

export const AI_LAB_LOCALES = ["fa", "en"] as const;

export type AiLabLocale = (typeof AI_LAB_LOCALES)[number];

/** Locale rendered until the language switch is wired up. */
export const defaultAiLabLocale: AiLabLocale = "fa";

export const localeDirections: Record<AiLabLocale, "rtl" | "ltr"> = {
    fa: "rtl",
    en: "ltr",
};

export const localeLanguages: Record<AiLabLocale, string> = {
    fa: "fa",
    en: "en",
};

export type LocalizedText = {
    fa: string;
    en?: string;
};

export function getLocalizedText(
    text: LocalizedText,
    locale: AiLabLocale,
): string {
    return text[locale] ?? text.fa;
}

export type AiLabTopic = {
    /** Stable identifier used for keys and future topic URLs. */
    id: string;
    title: LocalizedText;
    summary: LocalizedText;
};

export type AiLabChapter = {
    /** Stable identifier used for keys and future chapter URLs. */
    id: string;
    title: LocalizedText;
    topics: readonly AiLabTopic[];
};

export const aiLabPage = {
    kicker: "AI Lab",
    title: {
        fa: "آزمایشگاه هوش مصنوعی",
    },
    description: {
        fa: "این بخش برای مرور و تمرین کار با ایجنت‌های کدنویسی است. هر فصل یک جدول مستقل دارد و هر ردیف یک موضوع را با خلاصه‌ای کوتاه معرفی می‌کند.",
    },
} satisfies {
    kicker: string;
    title: LocalizedText;
    description: LocalizedText;
};

type AiLabCopy = {
    topicColumn: string;
    summaryColumn: string;
    noSelection: string;
    selectedPrefix: string;
    captionSuffix: string;
};

const faCopy: AiLabCopy = {
    topicColumn: "موضوع",
    summaryColumn: "خلاصه",
    noSelection: "هنوز موضوعی انتخاب نشده است.",
    selectedPrefix: "موضوع انتخاب‌شده: ",
    captionSuffix: " — موضوع‌ها و خلاصه‌ها",
};

const aiLabCopy: Partial<Record<AiLabLocale, AiLabCopy>> = {
    fa: faCopy,
};

export function getAiLabCopy(locale: AiLabLocale): AiLabCopy {
    return aiLabCopy[locale] ?? faCopy;
}

export const aiLabChapters: readonly AiLabChapter[] = [
    {
        id: "prompt-engineering",
        title: {
            fa: "فصل اول: مهندسی پرامپت برای کدنویسی با ایجنت",
        },
        topics: [
            {
                id: "prompt-engineering",
                title: {
                    fa: "Prompt Engineering",
                },
                summary: {
                    fa: "طراحی درخواست واضح و ساختاریافته برای گرفتن نتیجه بهتر از مدل.",
                },
            },
            {
                id: "context-engineering",
                title: {
                    fa: "Context Engineering",
                },
                summary: {
                    fa: "انتخاب و آماده‌سازی اطلاعاتی که ایجنت برای حل مسئله واقعاً نیاز دارد.",
                },
            },
            {
                id: "goal-definition",
                title: {
                    fa: "Goal Definition",
                },
                summary: {
                    fa: "مشخص کردن هدف نهایی و اینکه دقیقاً چه چیزی باید ساخته یا اصلاح شود.",
                },
            },
            {
                id: "task-decomposition",
                title: {
                    fa: "Task Decomposition",
                },
                summary: {
                    fa: "شکستن یک کار بزرگ به وظایف کوچک و قابل بررسی.",
                },
            },
            {
                id: "negative-examples",
                title: {
                    fa: "Negative Examples",
                },
                summary: {
                    fa: "نشان دادن کارهایی که نباید انجام شوند؛ مانند ساختن لایه اضافی یا تغییر نام‌های عمومی.",
                },
            },
            {
                id: "prompt-chaining",
                title: {
                    fa: "Prompt Chaining",
                },
                summary: {
                    fa: "تقسیم فرایند به چند درخواست وابسته؛ مثلاً تحلیل، طراحی، پیاده‌سازی و بررسی.",
                },
            },
            {
                id: "prompt-injection",
                title: {
                    fa: "Prompt Injection",
                },
                summary: {
                    fa: "شناخت تلاش‌های مخرب داخل فایل‌ها، مستندات یا خروجی ابزارها برای منحرف کردن ایجنت.",
                },
            },
            {
                id: "verification-prompt",
                title: {
                    fa: "Verification Prompt",
                },
                summary: {
                    fa: "درخواست بررسی مستقل تغییرات، تست‌ها و معیارهای پذیرش پیش از اعلام اتمام کار.",
                },
            },
            {
                id: "reusable-prompt",
                title: {
                    fa: "Reusable Prompt",
                },
                summary: {
                    fa: "ساخت قالب‌های ثابت برای باگ‌فیکس، افزودن قابلیت، Refactor و Code Review.",
                },
            },
        ],
    },
];
