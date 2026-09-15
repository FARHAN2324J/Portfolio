"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type RichTextEditorProps = {
    content?: Record<string, unknown>;
    onChange?: (
        content: Record<string, unknown>,
    ) => void;
};

export function RichTextEditor({
    content,
    onChange,
}: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content ?? {
            type: "doc",
            content: [
                {
                    type: "paragraph",
                },
            ],
        },
        immediatelyRender: false,
        onUpdate({ editor }) {
            onChange?.(editor.getJSON());
        },
        editorProps: {
            attributes: {
                class: "min-h-64 px-4 py-3 outline-none",
            },
        },
    });

    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-background text-foreground">
            <EditorContent editor={editor} />
        </div>
    );
}