import type { Block } from "@blocknote/core";
import { ServerBlockNoteEditor } from "@blocknote/server-util";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

type PostContentProps = {
    content: Block[];
};

export async function PostContent({
    content,
}: PostContentProps) {
    const editor =
        ServerBlockNoteEditor.create();

    const html =
        await editor.blocksToFullHTML(
            content,
        );

    return (
        <div
            className={[
                "bn-container",
                "w-full max-w-none",
                "overflow-x-auto",
                "text-foreground",
            ].join(" ")}
            dangerouslySetInnerHTML={{
                __html: html,
            }}
        />
    );
}