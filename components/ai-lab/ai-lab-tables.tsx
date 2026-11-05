"use client";

import { ChapterTable } from "@/components/ui/ChapterTable";
import {
    getAiLabCopy,
    getLocalizedText,
    type AiLabChapter,
    type AiLabLocale,
} from "@/lib/ai-lab/content";

type AiLabTablesProps = {
    chapters: readonly AiLabChapter[];
    locale: AiLabLocale;
};

function AiLabTables({ chapters, locale }: AiLabTablesProps) {
    const copy = getAiLabCopy(locale);

    return (
        <>
           

            <div className="mx-auto mt-6 flex w-full max-w-3xl flex-col gap-6">
                {chapters.map((chapter) => {
                    const title = getLocalizedText(chapter.title, locale);

                    return (
                        <ChapterTable
                            key={chapter.id}
                            title={title}
                            topics={chapter.topics.map((topic) => ({
                                id: topic.id,
                                href: topic.href,
                                title: getLocalizedText(topic.title, locale),
                                summary: getLocalizedText(
                                    topic.summary,
                                    locale,
                                ),
                            }))}
                            caption={`${title}${copy.captionSuffix}`}
                            topicColumnLabel={copy.topicColumn}
                            summaryColumnLabel={copy.summaryColumn}
                        />
                    );
                })}
            </div>
        </>
    );
}

export { AiLabTables };
