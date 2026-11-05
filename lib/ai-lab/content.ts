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
  /** Set when the topic has its own document page. */
  href?: string;
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
        href: "/ai-lab/prompt-engineering",
      },
      {
        id: "context-engineering",
        title: {
          fa: "Context Engineering",
        },
        summary: {
          fa: "انتخاب و آماده‌سازی اطلاعاتی که ایجنت برای حل مسئله واقعاً نیاز دارد.",
        },
        href: "/ai-lab/context-engineering",
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
  {
    id: "chapter-context-memory",
    title: {
      fa: "فصل دوم: مدیریت Context و حافظه ایجنت",
    },
    topics: [
      {
        id: "topic-context-window",
        title: {
          fa: "Context Window",
        },
        summary: {
          fa: "حداکثر حجمی از اطلاعات که مدل می‌تواند در یک نوبت پردازش کند.",
        },
      },
      {
        id: "topic-session-management",
        title: {
          fa: "Session Management",
        },
        summary: {
          fa: "مدیریت نشست‌ها و تصمیم‌گیری درباره ادامه نشست قبلی یا شروع نشست جدید.",
        },
      },
      {
        id: "topic-conversation-history",
        title: {
          fa: "Conversation History",
        },
        summary: {
          fa: "استفاده از سابقه مکالمه برای حفظ تصمیم‌ها و جلوگیری از تکرار کار.",
        },
      },
      {
        id: "topic-project-memory",
        title: {
          fa: "Project Memory",
        },
        summary: {
          fa: "نگهداری قواعد و اطلاعات پایدار پروژه در فایل‌های مستندات یا حافظه پشتیبانی‌شده ابزار.",
        },
      },
      {
        id: "topic-working-memory",
        title: {
          fa: "Working Memory",
        },
        summary: {
          fa: "اطلاعات موقتی موردنیاز برای انجام وظیفه فعلی، مانند فایل‌های بررسی‌شده و خطاهای اخیر.",
        },
      },
      {
        id: "topic-source-of-truth",
        title: {
          fa: "Source of Truth",
        },
        summary: {
          fa: "تعیین منبع معتبر اطلاعات؛ مثلاً کد فعلی و تست‌ها بر حدس یا توضیح قدیمی مقدم باشند.",
        },
      },
      {
        id: "topic-cross-session-context-transfer",
        title: {
          fa: "Cross-Session Context Transfer",
        },
        summary: {
          fa: "تهیه خلاصه‌ای از هدف، وضعیت، فایل‌های تغییرکرده، تصمیم‌ها و قدم بعدی برای انتقال زمینه بین نشست‌ها.",
        },
      },
      {
        id: "topic-context-budgeting",
        title: {
          fa: "Context Budgeting",
        },
        summary: {
          fa: "اختصاص بخش کافی از زمینه به درخواست، کد مرتبط، قوانین و خروجی تست‌ها.",
        },
      },
    ],
  },
  {
    id: "chapter-project-instructions",
    title: {
      fa: "فصل سوم: فایل‌های راهنمای پروژه و دستورالعمل‌های دائمی",
    },
    topics: [
      {
        id: "topic-project-instructions",
        title: {
          fa: "Project Instructions",
        },
        summary: {
          fa: "تعریف قوانین و دستورالعمل‌های دائمی که ایجنت باید هنگام کار روی پروژه رعایت کند.",
        },
      },
      {
        id: "topic-agents-md",
        title: {
          fa: "AGENTS.md",
        },
        summary: {
          fa: "فایلی برای ثبت دستورالعمل‌های ایجنت؛ پشتیبانی و محدوده اثرگذاری آن به ابزار و محیط توسعه بستگی دارد.",
        },
      },
      {
        id: "topic-hierarchical-instructions",
        title: {
          fa: "Hierarchical Instructions",
        },
        summary: {
          fa: "تقسیم و سازمان‌دهی قوانین میان ریشه پروژه، زیرپروژه‌ها و پوشه‌های خاص، در صورت پشتیبانی ابزار.",
        },
      },
      {
        id: "topic-model-selection",
        title: {
          fa: "Model Selection",
        },
        summary: {
          fa: "انتخاب مدل مناسب بر اساس پیچیدگی مسئله، دقت موردنیاز، سرعت پاسخ‌گویی و هزینه پردازش.",
        },
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Document view model                                                        */
/* -------------------------------------------------------------------------- */

/**
 * A block is one unit of a document body. Blocks are rendered in array order —
 * the order here is the order a reader sees. Text is stored verbatim; the
 * visual treatment lives entirely in `components/ui`.
 */
export type AiLabBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "note"; text: string }
  | { type: "list"; ordered?: boolean; items: readonly string[] }
  | { type: "code"; language?: string; code: string }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly string[])[];
    };

export type AiLabDocumentSection = {
  /** Stable identifier used for anchors and keys. */
  id: string;
  title: string;
  blocks: readonly AiLabBlock[];
};

export type AiLabDocument = {
  /** URL segment: `/ai-lab/<slug>`. */
  slug: string;
  kicker?: string;
  title: string;
  description?: string;
  sections: readonly AiLabDocumentSection[];
};

/* -------------------------------------------------------------------------- */
/* Prompt Engineering                                                         */
/* -------------------------------------------------------------------------- */

export const promptEngineeringDocument: AiLabDocument = {
  slug: "prompt-engineering",
  kicker: "AI Lab",
  title: "Prompt Engineering",
  sections: [
    {
      id: "prompt-engineering-intro",
      title: "1. Prompt Engineering چیست؟",
      blocks: [
        {
          type: "paragraph",
          text: "Prompt Engineering یا مهندسی پرامپت یعنی طراحی و نوشتن دستوراتی دقیق، شفاف و ساختارمند برای هوش مصنوعی تا بتواند کاری را که از آن می‌خواهیم، با کمترین خطا و بیشترین دقت انجام دهد.",
        },
        {
          type: "paragraph",
          text: "در کار با AI Coding Agent، پرامپت فقط یک سؤال نیست؛ بلکه مشخص می‌کند:",
        },
        {
          type: "list",
          items: [
            "ایجنت چه کاری انجام دهد.",
            "چرا باید آن کار را انجام دهد.",
            "کدام فایل‌ها و بخش‌های پروژه را بررسی کند.",
            "از چه تکنولوژی‌ها و محدودیت‌هایی پیروی کند.",
            "چه کارهایی را نباید انجام دهد.",
            "چطور نتیجه کار را بررسی کند.",
          ],
        },
      ],
    },
    {
      id: "why-it-matters",
      title: "2. چرا Prompt Engineering در کار با Coding Agent مهم است؟",
      blocks: [
        {
          type: "paragraph",
          text: "چون ایجنت فقط پاسخ تولید نمی‌کند؛ بلکه می‌تواند:",
        },
        {
          type: "list",
          items: [
            "فایل ایجاد کند.",
            "کدهای موجود را تغییر دهد.",
            "فایل‌ها را حذف کند.",
            "پکیج نصب کند.",
            "دستورات ترمینال اجرا کند.",
            "معماری پروژه را تغییر دهد.",
            "تست اجرا کند.",
            "خطاها را برطرف کند.",
          ],
        },
      ],
    },
    {
      id: "standard-structure",
      title: "3. ساختار استاندارد یک Prompt حرفه‌ای",
      blocks: [
        {
          type: "paragraph",
          text: "یک پرامپت حرفه‌ای معمولاً از بخش‌های زیر تشکیل می‌شود:",
        },
        {
          type: "table",
          headers: ["بخش", "کاربرد"],
          rows: [
            ["Role", "تعیین نقش ایجنت"],
            ["Context", "ارائه اطلاعات پروژه"],
            ["Objective", "مشخص کردن هدف"],
            ["Task", "تعیین وظایف"],
            ["Constraints", "محدودیت‌ها"],
            ["Requirements", "نیازمندی‌ها"],
            ["Instructions", "دستورالعمل اجرا"],
            ["Examples", "ارائه نمونه"],
            ["Output Format", "قالب خروجی"],
            ["Verification", "بررسی صحت نتیجه"],
          ],
        },
      ],
    },
    {
      id: "role",
      title: "4. Role — تعیین نقش",
      blocks: [
        {
          type: "paragraph",
          text: "به ایجنت می‌گوییم از چه دیدگاه تخصصی به مسئله نگاه کند.",
        },
        { type: "paragraph", text: "مثال:" },
        {
          type: "code",
          language: "text",
          code: `Act as a Senior Backend Engineer
with expertise in Node.js, TypeScript,
PostgreSQL and software architecture.`,
        },
        {
          type: "paragraph",
          text: "یعنی ایجنت مسئله را با رویکرد یک مهندس ارشد بک‌اند بررسی کند.",
        },
        {
          type: "note",
          text: "نکته: تعیین نقش به‌تنهایی تضمین‌کننده کیفیت نیست؛ اطلاعات و معیارهای پذیرش اهمیت بیشتری دارند.",
        },
      ],
    },
    {
      id: "context",
      title: "5. Context — ارائه زمینه",
      blocks: [
        {
          type: "paragraph",
          text: "یعنی اطلاعات لازم درباره پروژه را به ایجنت بدهیم.",
        },
        { type: "paragraph", text: "مثال:" },
        {
          type: "code",
          language: "text",
          code: `Project Context:

- Framework: Next.js
- Language: TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT
- Architecture: Modular Monolith`,
        },
        {
          type: "paragraph",
          text: "بدون Context ممکن است ایجنت از تکنولوژی یا معماری اشتباهی استفاده کند.",
        },
      ],
    },
    {
      id: "objective",
      title: "6. Objective — تعیین هدف",
      blocks: [
        { type: "paragraph", text: "هدف نهایی را مشخص می‌کنیم." },
        { type: "paragraph", text: "مثال:" },
        {
          type: "code",
          language: "text",
          code: `Objective:

Build a secure authentication system
for the existing application.`,
        },
      ],
    },
    {
      id: "task",
      title: "7. Task — تعیین وظایف",
      blocks: [
        {
          type: "paragraph",
          text: "کارهایی را که باید انجام شوند، مشخص می‌کنیم.",
        },
        {
          type: "code",
          language: "text",
          code: `Tasks:

1. Analyze the existing authentication flow.
2. Implement user registration.
3. Implement login.
4. Implement JWT validation.
5. Add logout functionality.
6. Write automated tests.`,
        },
      ],
    },
    {
      id: "constraints",
      title: "8. Constraints — محدودیت‌ها",
      blocks: [
        {
          type: "paragraph",
          text: "به ایجنت می‌گوییم چه کارهایی مجاز یا غیرمجاز هستند.",
        },
        {
          type: "code",
          language: "text",
          code: `Constraints:

- Do not modify unrelated modules.
- Do not delete existing features.
- Do not change the database schema without approval.
- Follow the existing coding conventions.
- Do not install unnecessary dependencies.`,
        },
        {
          type: "paragraph",
          text: "این بخش در Coding Agent بسیار مهم است.",
        },
      ],
    },
    {
      id: "requirements",
      title: "9. Requirements — نیازمندی‌ها",
      blocks: [
        {
          type: "paragraph",
          text: "مشخص می‌کنیم خروجی باید چه ویژگی‌هایی داشته باشد.",
        },
        {
          type: "code",
          language: "text",
          code: `Requirements:

- Passwords must be hashed.
- Input validation is required.
- Errors must be handled properly.
- API responses must follow a consistent format.
- Sensitive information must never be logged`,
        },
      ],
    },
    {
      id: "instructions",
      title: "10. Instructions — دستورالعمل اجرا",
      blocks: [
        {
          type: "paragraph",
          text: "ترتیب و نحوه انجام کار را مشخص می‌کنیم.",
        },
        {
          type: "code",
          language: "text",
          code: `Instructions:

1. Inspect the project structure.
2. Read relevant source files.
3. Identify existing patterns.
4. Create an implementation plan.
5. Implement the changes.
6. Run tests.
7. Report the results.`,
        },
      ],
    },
    {
      id: "examples",
      title: "11. Examples — ارائه نمونه",
      blocks: [
        {
          type: "paragraph",
          text: "اگر قالب یا رفتار مشخصی می‌خواهیم، نمونه ارائه می‌کنیم.",
        },
        { type: "paragraph", text: "مثلاً:" },
        {
          type: "code",
          language: "json",
          code: `{
  "success": true,
  "data": {
    "userId": "123",
    "email": "user@example.com"
  }
}`,
        },
        {
          type: "paragraph",
          text: "نمونه‌ها ابهام را کاهش می‌دهند.",
        },
      ],
    },
    {
      id: "output-format",
      title: "12. Output Format — قالب خروجی",
      blocks: [
        {
          type: "paragraph",
          text: "مشخص می‌کنیم ایجنت گزارش خود را چگونه ارائه کند.",
        },
        {
          type: "code",
          language: "text",
          code: `At the end, provide:

1. Summary of changes.
2. Modified files.
3. New dependencies.
4. Tests executed.
5. Remaining issues.`,
        },
      ],
    },
    {
      id: "verification",
      title: "13. Verification — بررسی صحت",
      blocks: [
        {
          type: "paragraph",
          text: "مشخص می‌کنیم چطور مطمئن شویم کار درست انجام شده است.",
        },
        {
          type: "code",
          language: "text",
          code: `Verification:

- Run TypeScript type checking.
- Run ESLint.
- Run relevant unit tests.
- Run integration tests if available.
- Report any failures honestly.`,
        },
      ],
    },
    {
      id: "advanced-techniques",
      title: "14. تکنیک‌های حرفه‌ای Prompt Engineering",
      blocks: [
        { type: "subheading", text: "14.1. Chain of Thought / Step-by-step" },
        {
          type: "paragraph",
          text: "از ایجنت می‌خواهی کار را مرحله‌به‌مرحله تحلیل کند.",
        },
        {
          type: "code",
          language: "text",
          code: `Analyze the problem step by step.
Identify dependencies and potential risks.
Then provide an implementation plan.`,
        },
        {
          type: "paragraph",
          text: "در عمل بهتر است به‌جای درخواست نمایش تمام استدلال داخلی مدل، خروجی‌های قابل بررسی مثل فرضیات، تصمیم‌های فنی، برنامه اجرا و ریسک‌ها را بخواهی.",
        },
        { type: "subheading", text: "14.2. Plan First, Execute Later" },
        { type: "paragraph", text: "ابتدا برنامه، سپس اجرای آن." },
        {
          type: "code",
          language: "text",
          code: `First analyze the project.
Do not modify any files yet.

Provide:
- Current architecture
- Required changes
- Affected files
- Implementation plan
- Potential risks`,
        },
        { type: "subheading", text: "14.3. Prompting" },
        {
          type: "paragraph",
          text: "کار را به چند مرحله تقسیم می‌کنی و در هر مرحله نتیجه را بررسی می‌کنی.",
        },
        { type: "paragraph", text: "مثلاً:" },
        {
          type: "list",
          items: [
            "تحلیل معماری",
            "طراحی دیتابیس",
            "پیاده‌سازی Backend",
            "پیاده‌سازی Frontend",
            "تست و بررسی",
          ],
        },
        { type: "subheading", text: "5.6. Negative Constraints" },
        {
          type: "paragraph",
          text: "مشخص می‌کنی چه کارهایی نباید انجام شوند.",
        },
        {
          type: "code",
          language: "text",
          code: `Do not:
- Rewrite the entire application.
- Remove existing functionality.
- Introduce unnecessary abstractions.
- Ignore existing tests.`,
        },
        { type: "subheading", text: "5.6. Negative Constraints" },
        {
          type: "paragraph",
          text: "مشخص می‌کنی چه کارهایی نباید انجام شوند.",
        },
        {
          type: "code",
          language: "text",
          code: `Do not:
- Rewrite the entire application.
- Remove existing functionality.
- Introduce unnecessary abstractions.
- Ignore existing tests.`,
        },
      ],
    },
    {
      id: "complete-example",
      title: "15. نمونه یک Prompt حرفه‌ای و کامل",
      blocks: [
        {
          type: "code",
          language: "text",
          code: `You are acting as a Senior Full-Stack Engineer.

## Objective
Implement a user management module
in the existing application.

## Step 1: Analyze
- Inspect the project structure.
- Identify the existing architecture.
- Review relevant modules.
- Identify reusable components.

Do not modify files during this phase.

## Step 2: Plan
Provide:
- Implementation strategy
- Files to create or modify
- Dependencies
- Potential risks

Wait for approval before implementation.

## Step 3: Implement
After approval:
- Follow existing conventions.
- Reuse existing utilities.
- Implement CRUD operations.
- Add input validation.
- Handle errors properly.
- Avoid unrelated changes.

## Step 4: Verify
- Run relevant tests.
- Run type checking.
- Run linting.
- Fix issues introduced by your changes.

## Constraints
- Do not delete existing features.
- Do not expose secrets.
- Do not modify unrelated modules.
- Do not install unnecessary dependencies.

## Final Report
Provide:
1. Summary
2. Changed files
3. Dependencies
4. Tests and results
5. Remaining issues`,
        },
      ],
    },
    {
      id: "common-mistakes",
      title: "16. اشتباهات رایج در Prompt Engineering",
      blocks: [
        {
          type: "table",
          headers: ["اشتباه", "راهکار"],
          rows: [
            ["دستور مبهم", "هدف را دقیق مشخص کن"],
            ["وظیفه بیش از حد بزرگ", "آن را تقسیم کن"],
            ["ندادن Context", "اطلاعات پروژه را بده"],
            ["نداشتن محدودیت", "Constraints تعریف کن"],
            ["اجرای مستقیم بدون بررسی", "ابتدا Plan بگیر"],
            ["اعتماد کامل به خروجی", "تست و بررسی انجام بده"],
            ["تغییرات بدون کنترل", "Diff فایل‌ها را بررسی کن"],
            ["فرض کردن موفقیت تست", "نتیجه واقعی دستورات را بررسی کن"],
          ],
        },
      ],
    },
  ],
};

export const aiLabDocuments: readonly AiLabDocument[] = [
  promptEngineeringDocument,
];

export function getAiLabDocument(slug: string): AiLabDocument | undefined {
  return aiLabDocuments.find((document) => document.slug === slug);
}
