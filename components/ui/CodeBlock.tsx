import { cn } from "@/lib/utils";

type CodeBlockProps = {
    code: string;
    /** Highlighting hint; not rendered as visible text. */
    language?: string;
    className?: string;
};

function CodeBlock({ code, language, className }: CodeBlockProps) {
    return (
        <figure
            dir="ltr"
            data-slot="code-block"
            className={cn(
                "overflow-hidden rounded-xl border border-border bg-background",
                className
            )}
        >
            <pre className="overflow-x-auto p-4 text-left">
                <code
                    data-language={language}
                    className="font-mono text-[13px] leading-6 whitespace-pre text-foreground/90"
                >
                    {code}
                </code>
            </pre>
        </figure>
    );
}

export { CodeBlock };
export type { CodeBlockProps };
