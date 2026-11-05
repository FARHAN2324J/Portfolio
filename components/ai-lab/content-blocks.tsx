import { CodeBlock } from "@/components/ui/CodeBlock";
import { ContentList } from "@/components/ui/ContentList";
import { DataTable } from "@/components/ui/DataTable";
import { Note } from "@/components/ui/Note";
import { Prose } from "@/components/ui/Prose";
import { Title } from "@/components/ui/Title";
import type { AiLabBlock } from "@/lib/ai-lab/content";

type ContentBlocksProps = {
    /** Rendered top to bottom, exactly in the order given. */
    blocks: readonly AiLabBlock[];
};

function ContentBlocks({ blocks }: ContentBlocksProps) {
    return (
        <div className="space-y-4">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case "paragraph":
                        return <Prose key={index}>{block.text}</Prose>;

                    case "subheading":
                        return (
                            <Title
                                as="h3"
                                key={index}
                                className="flex items-center gap-2 pt-3 text-base leading-7 tracking-tight sm:text-lg"
                            >
                                <span
                                    aria-hidden="true"
                                    className="h-4 w-1 shrink-0 rounded-full bg-foreground/25"
                                />
                                <span>{block.text}</span>
                            </Title>
                        );

                    case "note":
                        return <Note key={index}>{block.text}</Note>;

                    case "list":
                        return (
                            <ContentList
                                key={index}
                                items={block.items}
                                ordered={block.ordered}
                            />
                        );

                    case "code":
                        return (
                            <CodeBlock
                                key={index}
                                code={block.code}
                                language={block.language}
                            />
                        );

                    case "table":
                        return (
                            <DataTable
                                key={index}
                                headers={block.headers}
                                rows={block.rows}
                            />
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}

export { ContentBlocks };
export type { ContentBlocksProps };
