import type { ReactNode } from "react";

type TiptapMark = {
    type?: string;
    attrs?: Record<string, unknown>;
};

type TiptapNode = {
    type?: string;
    text?: string;
    attrs?: Record<string, unknown>;
    marks?: TiptapMark[];
    content?: TiptapNode[];
};

type PostContentProps = {
    content: Record<string, unknown>;
};

function isSafeHref(href: string) {
    try {
        const url = new URL(href, "https://example.com");

        return (
            url.protocol === "http:" ||
            url.protocol === "https:" ||
            url.protocol === "mailto:" ||
            url.protocol === "tel:"
        );
    } catch {
        return false;
    }
}

function renderMarks(
    content: ReactNode,
    marks: TiptapMark[] | undefined,
): ReactNode {
    if (!marks?.length) {
        return content;
    }

    return marks.reduce<ReactNode>(
        (result, mark) => {
            switch (mark.type) {
                case "bold":
                    return (
                        <strong>
                            {result}
                        </strong>
                    );

                case "italic":
                    return <em>{result}</em>;

                case "strike":
                    return <s>{result}</s>;

                case "code":
                    return (
                        <code>
                            {result}
                        </code>
                    );

                case "link": {
                    const href =
                        typeof mark.attrs?.href === "string"
                            ? mark.attrs.href
                            : null;

                    if (!href || !isSafeHref(href)) {
                        return result;
                    }

                    const isExternal =
                        href.startsWith("http://") ||
                        href.startsWith("https://");

                    return (
                        <a
                            href={href}
                            {...(isExternal
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                }
                                : {})}
                        >
                            {result}
                        </a>
                    );
                }

                default:
                    return result;
            }
        },
        content,
    );
}

function renderNode(
    node: TiptapNode,
    key: string,
): ReactNode {
    const children =
        node.content?.map(
            (child, index) =>
                renderNode(
                    child,
                    `${key}-${index}`,
                ),
        );

    switch (node.type) {
        case "paragraph":
            return (
                <p key={key}>
                    {children}
                </p>
            );

        case "heading": {
            const level =
                typeof node.attrs?.level ===
                    "number"
                    ? node.attrs.level
                    : 2;

            if (level === 1) {
                return (
                    <h1 key={key}>
                        {children}
                    </h1>
                );
            }

            if (level === 3) {
                return (
                    <h3 key={key}>
                        {children}
                    </h3>
                );
            }

            if (level === 4) {
                return (
                    <h4 key={key}>
                        {children}
                    </h4>
                );
            }

            return (
                <h2 key={key}>
                    {children}
                </h2>
            );
        }

        case "bulletList":
            return (
                <ul key={key}>
                    {children}
                </ul>
            );

        case "orderedList":
            return (
                <ol key={key}>
                    {children}
                </ol>
            );

        case "listItem":
            return (
                <li key={key}>
                    {children}
                </li>
            );

        case "blockquote":
            return (
                <blockquote key={key}>
                    {children}
                </blockquote>
            );

        case "codeBlock":
            return (
                <pre key={key}>
                    <code>
                        {node.content
                            ?.map(
                                (child) =>
                                    child.text ??
                                    "",
                            )
                            .join("")}
                    </code>
                </pre>
            );

        case "hardBreak":
            return <br key={key} />;

        case "horizontalRule":
            return <hr key={key} />;

        case "text":
            return renderMarks(
                node.text ?? "",
                node.marks,
            );
        default:
            return children ?? null;
    }
}

export function PostContent({
    content,
}: PostContentProps) {
    const document =
        content as TiptapNode;

    return (
        <div
            className="
                prose prose-neutral max-w-none
                dark:prose-invert
                prose-headings:font-medium
                prose-headings:tracking-tight
                prose-p:leading-8
                prose-a:font-medium
                prose-a:text-foreground
                prose-a:underline
                prose-a:underline-offset-4
                prose-blockquote:border-l-border
                prose-blockquote:text-muted-foreground
                prose-code:rounded
                prose-code:bg-muted
                prose-code:px-1.5
                prose-code:py-0.5
                prose-pre:overflow-x-auto
                prose-pre:rounded-2xl
                prose-pre:bg-muted
                prose-pre:text-foreground
            "
        >
            {document.content?.map(
                (node, index) =>
                    renderNode(
                        node,
                        `node-${index}`,
                    ),
            )}
        </div>
    );
}