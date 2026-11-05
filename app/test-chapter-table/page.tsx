"use client";

import Link from "next/link";
import { useState } from "react";
import { HiArrowUturnLeft } from "react-icons/hi2";

import { Button } from "@/components/ui/Button";
import {
    ChapterTable,
    type ChapterTopic,
} from "@/components/ui/ChapterTable";
import { Card } from "@/components/ui/Card";
import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";

type TestChapter = {
    id: string;
    title: string;
    topics: ChapterTopic[];
};

const chapters: TestChapter[] = [
    {
        id: "prompt-engineering",
        title: "Chapter One: Prompt Engineering",
        topics: [
            {
                id: "prompt-engineering-basics",
                title: "Prompt Engineering",
                summary:
                    "Designing precise and targeted instructions to get better outputs from AI.",
            },
            {
                id: "context-engineering",
                title: "Context Engineering",
                summary:
                    "Providing appropriate information and context to improve model performance.",
            },
            {
                id: "prompt-structure",
                title: "Prompt Structure",
                summary:
                    "Understanding the main components of an effective prompt.",
            },
        ],
    },
    {
        id: "ai-agents",
        title: "Chapter Two: AI Agents",
        topics: [
            {
                id: "agent-loops",
                title: "Agent Loops",
                summary:
                    "How an agent plans, acts, observes the result, and decides what to do next.",
            },
            {
                id: "tool-use",
                title: "Tool Use",
                summary:
                    "Giving a model access to functions and APIs it can call to complete a task.",
            },
        ],
    },
    {
        id: "advanced-patterns",
        title: "Chapter Three: Advanced Patterns",
        topics: [],
    },
];

export default function ChapterTableTestPage() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Button asChild variant="link" className="text-muted-foreground">
                <Link href="/">
                    <HiArrowUturnLeft className="size-4" aria-hidden="true" />
                    <span>Back</span>
                </Link>
            </Button>

            <header className="mt-4">
                <Title as="h1" className="text-2xl tracking-tight sm:text-3xl">
                    Chapter Table
                </Title>
                <Description className="mt-2 text-sm sm:text-base">
                    Demo page for the reusable ChapterTable component. Select a
                    topic to see the interaction; no topic pages are wired up
                    yet.
                </Description>
            </header>

            <Card className="mt-6 px-4 py-3">
                <Description
                    role="status"
                    aria-live="polite"
                    className="text-sm"
                >
                    {selectedTopic
                        ? `Selected topic: ${selectedTopic}`
                        : "No topic selected yet."}
                </Description>
            </Card>

            <div className="mx-auto mt-8 flex w-full max-w-3xl flex-col gap-6">
                {chapters.map((chapter) => (
                    <ChapterTable
                        key={chapter.id}
                        title={chapter.title}
                        topics={chapter.topics}
                        onTopicSelect={(topic) =>
                            setSelectedTopic(`${chapter.title} — ${topic.title}`)
                        }
                    />
                ))}
            </div>
        </main>
    );
}
