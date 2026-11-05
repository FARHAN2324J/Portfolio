"use client";

import { useState } from "react";

import { Card } from "@/components/ui/Card";
import { ChapterTable } from "@/components/ui/ChapterTable";
import { Description } from "@/components/ui/Description";
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
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const copy = getAiLabCopy(locale);

    return (
        <>
            <Card className="mx-auto mt-8 w-full max-w-3xl px-4 py-3">
                <Description
                    role="status"
                    aria-live="polite"
                    className="text-sm"
                >
                    {selectedTopic
                        ? `${copy.selectedPrefix}${selectedTopic}`
                        : copy.noSelection}
                </Description>
            </Card>

            <div className="mx-auto mt-6 flex w-full max-w-3xl flex-col gap-6">
                {chapters.map((chapter) => {
                    const title = getLocalizedText(chapter.title, locale);

                    return (
                        <ChapterTable
                            key={chapter.id}
                            title={title}
                            topics={chapter.topics.map((topic) => ({
                                id: topic.id,
                                title: getLocalizedText(topic.title, locale),
                                summary: getLocalizedText(
                                    topic.summary,
                                    locale,
                                ),
                            }))}
                            caption={`${title}${copy.captionSuffix}`}
                            topicColumnLabel={copy.topicColumn}
                            summaryColumnLabel={copy.summaryColumn}
                            onTopicSelect={(topic) =>
                                setSelectedTopic(`${title} — ${topic.title}`)
                            }
                        />
                    );
                })}
            </div>
        </>
    );
}

export { AiLabTables };
