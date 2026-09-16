"use client";

import dynamic from "next/dynamic";
import type { Block } from "@blocknote/core";

type RichTextEditorProps = {
    content: Block[];
    onChange: (content: Block[]) => void;
    disabled?: boolean;
};

const RichTextEditor = dynamic(
    () =>
        import("./rich-text-editor").then(
            (module) => module.RichTextEditor,
        ),
    {
        ssr: false,
        loading: () => (
            <div
                className={[
                    "min-h-105",
                    "rounded-xl border border-border",
                    "bg-background",
                ].join(" ")}
            />
        ),
    },
);

export function RichTextEditorClient(
    props: RichTextEditorProps,
) {
    return <RichTextEditor {...props} />;
}