"use client";

import type * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./Button";
import { Card } from "./Card";
import { Description } from "./Description";
import { Title } from "./Title";

type ChapterTopic = {
    /** Stable identifier for the topic. */
    id: string;
    title: string;
    summary: string;
    /**
     * Optional destination for the topic. When omitted but `onTopicSelect` is
     * provided, the topic renders as a button; with neither, it is plain text.
     */
    href?: string;
};

type ChapterTableProps = {
    /** Chapter heading, rendered above the table. */
    title: string;
    /** Topics that belong to this chapter only. */
    topics: readonly ChapterTopic[];
    /** Called when a topic without an `href` is activated. */
    onTopicSelect?: (topic: ChapterTopic) => void;
    /** Accessible table caption. Defaults to a description built from `title`. */
    caption?: string;
    /** Heading for the topic column. Defaults to "Topic". */
    topicColumnLabel?: string;
    /** Heading for the summary column. Defaults to "Summary". */
    summaryColumnLabel?: string;
    className?: string;
};

const topicActionClassName =
    "group h-auto justify-start whitespace-normal rounded-md p-0 text-start text-sm text-foreground " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/60 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-card";

const columnLabelClassName =
    "text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm";

type TopicActionProps = {
    topic: ChapterTopic;
    onTopicSelect?: (topic: ChapterTopic) => void;
};

function TopicAction({ topic, onTopicSelect }: TopicActionProps) {
    const content: React.ReactNode = (
        <>
            <span>{topic.title}</span>
            <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground rtl:-scale-x-100"
            />
        </>
    );

    if (topic.href) {
        return (
            <Button asChild variant="link" className={topicActionClassName}>
                <a href={topic.href}>{content}</a>
            </Button>
        );
    }

    if (onTopicSelect) {
        return (
            <Button
                type="button"
                variant="link"
                className={topicActionClassName}
                onClick={() => onTopicSelect(topic)}
            >
                {content}
            </Button>
        );
    }

    return <span className="text-sm text-foreground">{topic.title}</span>;
}

function ChapterTable({
    title,
    topics,
    onTopicSelect,
    caption,
    topicColumnLabel = "Topic",
    summaryColumnLabel = "Summary",
    className,
}: ChapterTableProps) {
    return (
        <Card className={cn("p-5 sm:p-6", className)}>
            <Title as="h2" className="text-base sm:text-lg">
                {title}
            </Title>

            <table className="mt-4 w-full table-fixed border-collapse text-start">
                <caption className="sr-only">
                    {caption ?? `${title} — topics and summaries`}
                </caption>

                <thead>
                    <tr className="border-b border-border">
                        <th
                            scope="col"
                            className={cn(
                                columnLabelClassName,
                                "w-2/5 py-2.5 pe-3 sm:w-1/3"
                            )}
                        >
                            {topicColumnLabel}
                        </th>
                        <th
                            scope="col"
                            className={cn(columnLabelClassName, "py-2.5 ps-3")}
                        >
                            {summaryColumnLabel}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {topics.length === 0 ? (
                        <tr>
                            <td colSpan={2} className="py-6">
                                <Description className="text-sm">
                                    No topics in this chapter yet.
                                </Description>
                            </td>
                        </tr>
                    ) : (
                        topics.map((topic) => (
                            <tr
                                key={topic.id}
                                className="border-b border-border last:border-b-0"
                            >
                                <th
                                    scope="row"
                                    className="py-3 pe-3 align-top text-start font-normal"
                                >
                                    <TopicAction
                                        topic={topic}
                                        onTopicSelect={onTopicSelect}
                                    />
                                </th>
                                <td className="py-3 ps-3 align-top">
                                    <Description className="text-sm leading-relaxed text-muted-foreground">
                                        {topic.summary}
                                    </Description>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </Card>
    );
}

export { ChapterTable };
export type { ChapterTableProps, ChapterTopic };
