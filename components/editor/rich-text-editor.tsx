"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { useEffect, useState } from "react";

import { en } from "@blocknote/core/locales";
import type { Block } from "@blocknote/core";

import {
    BlockNoteView,
    darkDefaultTheme,
    lightDefaultTheme,
} from "@blocknote/mantine";

import { useCreateBlockNote } from "@blocknote/react";

type RichTextEditorProps = {
    content: Block[];
    onChange: (content: Block[]) => void;
    disabled?: boolean;
};

export function RichTextEditor({
    content,
    onChange,
    disabled = false,
}: RichTextEditorProps) {
    const [isDark, setIsDark] = useState(false);

    const editor = useCreateBlockNote({
        initialContent:
            content.length > 0
                ? content
                : undefined,
        dictionary: {
            ...en,
            placeholders: {
                ...en.placeholders,
                default:
                    "Start writing or type '/' for commands",
                heading: "Heading",
                emptyDocument:
                    "Start writing your article...",
            },
        },
    });

    useEffect(() => {
        const root = document.documentElement;

        const updateTheme = () => {
            setIsDark(root.classList.contains("dark"));
        };

        updateTheme();

        const observer = new MutationObserver(updateTheme);

        observer.observe(root, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        return editor.onChange(() => {
            onChange(editor.document);
        });
    }, [editor, onChange]);

    const theme = isDark
        ? darkDefaultTheme
        : lightDefaultTheme;

    return (
        <div
            className={[
                "min-h-105 overflow-hidden",
                "rounded-xl border border-border",
                "bg-background",
                disabled ? "opacity-60" : "",
            ].join(" ")}
        >
            <BlockNoteView
                editor={editor}
                editable={!disabled}
                theme={theme}
                formattingToolbar
                slashMenu
                sideMenu
            />
        </div>
    );
}