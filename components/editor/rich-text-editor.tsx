"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    EditorContent,
    useEditor,
} from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

import {
    Bold,
    Code,
    Italic,
    Link as LinkIcon,
    List,
    ListOrdered,
    Minus,
    Quote,
    Redo2,
    Strikethrough,
    Undo2,
} from "lucide-react";

type RichTextEditorProps = {
    content?: Record<string, unknown>;
    onChange?: (
        content: Record<string, unknown>,
    ) => void;
    disabled?: boolean;
};

export function RichTextEditor({
    content,
    onChange,
    disabled = false,
}: RichTextEditorProps) {
    const [isLinkActive, setIsLinkActive] =
        useState(false);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
                autolink: true,
                linkOnPaste: true,
            }),
        ],

        content:
            content ?? {
                type: "doc",
                content: [
                    {
                        type: "paragraph",
                    },
                ],
            },

        immediatelyRender: false,

        editable: !disabled,

        onUpdate({ editor }) {
            onChange?.(editor.getJSON());
        },

        onSelectionUpdate({ editor }) {
            setIsLinkActive(
                editor.isActive("link"),
            );
        },

        editorProps: {
            attributes: {
                class: [
                    "min-h-64",
                    "px-4",
                    "py-4",
                    "outline-none",
                    "text-foreground",
                    "prose",
                    "prose-neutral",
                    "max-w-none",
                    "dark:prose-invert",
                    "prose-headings:font-medium",
                    "prose-headings:tracking-tight",
                    "prose-p:leading-7",
                    "prose-a:text-foreground",
                    "prose-a:underline",
                    "prose-a:underline-offset-4",
                    "prose-code:rounded",
                    "prose-code:bg-muted",
                    "prose-code:px-1.5",
                    "prose-code:py-0.5",
                    "prose-pre:overflow-x-auto",
                    "prose-pre:rounded-xl",
                ].join(" "),
            },
        },
    });

    useEffect(() => {
        if (!editor) {
            return;
        }

        editor.setEditable(!disabled);
    }, [editor, disabled]);

    if (!editor) {
        return (
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
                <div className="h-64 animate-pulse bg-muted/30" />
            </div>
        );
    }

    function toggleLink() {
        if (editor.isActive("link")) {
            editor
                .chain()
                .focus()
                .unsetLink()
                .run();

            return;
        }

        const currentUrl =
            editor.getAttributes("link").href;

        const url = window.prompt(
            "Enter URL",
            currentUrl ?? "https://",
        );

        if (url === null) {
            return;
        }

        const trimmedUrl = url.trim();

        if (!trimmedUrl) {
            editor
                .chain()
                .focus()
                .unsetLink()
                .run();

            return;
        }

        editor
            .chain()
            .focus()
            .setLink({
                href: trimmedUrl,
            })
            .run();
    }

    const iconButtonClass = (
        active = false,
    ) =>
        [
            "inline-flex h-8 w-8 items-center justify-center",
            "rounded-lg",
            "text-muted-foreground",
            "transition-colors",
            "hover:bg-muted",
            "hover:text-foreground",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-ring",
            "disabled:pointer-events-none",
            "disabled:opacity-40",
            active
                ? "bg-muted text-foreground"
                : "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div
                role="toolbar"
                aria-label="Text formatting"
                className="flex flex-wrap items-center gap-1 border-b border-border p-2"
            >
                <button
                    type="button"
                    title="Bold"
                    aria-label="Bold"
                    aria-pressed={editor.isActive(
                        "bold",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive("bold"),
                    )}
                >
                    <Bold
                        aria-hidden="true"
                        size={16}
                    />
                </button>

                <button
                    type="button"
                    title="Italic"
                    aria-label="Italic"
                    aria-pressed={editor.isActive(
                        "italic",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive("italic"),
                    )}
                >
                    <Italic
                        aria-hidden="true"
                        size={16}
                    />
                </button>

                <button
                    type="button"
                    title="Strike"
                    aria-label="Strike"
                    aria-pressed={editor.isActive(
                        "strike",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive("strike"),
                    )}
                >
                    <Strikethrough
                        aria-hidden="true"
                        size={16}
                    />
                </button>

                <button
                    type="button"
                    title="Inline code"
                    aria-label="Inline code"
                    aria-pressed={editor.isActive(
                        "code",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive("code"),
                    )}
                >
                    <Code
                        aria-hidden="true"
                        size={16}
                    />
                </button>

                <div
                    aria-hidden="true"
                    className="mx-1 h-5 w-px bg-border"
                />

                <button
                    type="button"
                    title="Heading 1"
                    aria-label="Heading 1"
                    aria-pressed={editor.isActive(
                        "heading",
                        { level: 1 },
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({
                                level: 1,
                            })
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive(
                            "heading",
                            { level: 1 },
                        ),
                    )}
                >
                    <span
                        aria-hidden="true"
                        className="text-xs font-semibold"
                    >
                        H1
                    </span>
                </button>

                <button
                    type="button"
                    title="Heading 2"
                    aria-label="Heading 2"
                    aria-pressed={editor.isActive(
                        "heading",
                        { level: 2 },
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({
                                level: 2,
                            })
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive(
                            "heading",
                            { level: 2 },
                        ),
                    )}
                >
                    <span
                        aria-hidden="true"
                        className="text-xs font-semibold"
                    >
                        H2
                    </span>
                </button>

                <button
                    type="button"
                    title="Heading 3"
                    aria-label="Heading 3"
                    aria-pressed={editor.isActive(
                        "heading",
                        { level: 3 },
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({
                                level: 3,
                            })
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive(
                            "heading",
                            { level: 3 },
                        ),
                    )}
                >
                    <span
                        aria-hidden="true"
                        className="text-xs font-semibold"
                    >
                        H3
                    </span>
                </button>

                <div
                    aria-hidden="true"
                    className="mx-1 h-5 w-px bg-border"
                />

                <button
                    type="button"
                    title="Bullet list"
                    aria-label="Bullet list"
                    aria-pressed={editor.isActive(
                        "bulletList",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBulletList()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive(
                            "bulletList",
                        ),
                    )}
                >
                    <List
                        aria-hidden="true"
                        size={17}
                    />
                </button>

                <button
                    type="button"
                    title="Ordered list"
                    aria-label="Ordered list"
                    aria-pressed={editor.isActive(
                        "orderedList",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleOrderedList()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive(
                            "orderedList",
                        ),
                    )}
                >
                    <ListOrdered
                        aria-hidden="true"
                        size={17}
                    />
                </button>

                <button
                    type="button"
                    title="Blockquote"
                    aria-label="Blockquote"
                    aria-pressed={editor.isActive(
                        "blockquote",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBlockquote()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive(
                            "blockquote",
                        ),
                    )}
                >
                    <Quote
                        aria-hidden="true"
                        size={17}
                    />
                </button>

                <button
                    type="button"
                    title="Code block"
                    aria-label="Code block"
                    aria-pressed={editor.isActive(
                        "codeBlock",
                    )}
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleCodeBlock()
                            .run()
                    }
                    className={iconButtonClass(
                        editor.isActive(
                            "codeBlock",
                        ),
                    )}
                >
                    <Code
                        aria-hidden="true"
                        size={17}
                    />
                </button>

                <button
                    type="button"
                    title="Horizontal rule"
                    aria-label="Horizontal rule"
                    disabled={disabled}
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .setHorizontalRule()
                            .run()
                    }
                    className={iconButtonClass()}
                >
                    <Minus
                        aria-hidden="true"
                        size={17}
                    />
                </button>

                <div
                    aria-hidden="true"
                    className="mx-1 h-5 w-px bg-border"
                />

                <button
                    type="button"
                    title="Add link"
                    aria-label={
                        isLinkActive
                            ? "Remove link"
                            : "Add link"
                    }
                    aria-pressed={isLinkActive}
                    disabled={disabled}
                    onClick={toggleLink}
                    className={iconButtonClass(
                        isLinkActive,
                    )}
                >
                    <LinkIcon
                        aria-hidden="true"
                        size={16}
                    />
                </button>

                <div className="flex-1" />

                <button
                    type="button"
                    title="Undo"
                    aria-label="Undo"
                    disabled={
                        disabled ||
                        !editor.can().undo()
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                    className={iconButtonClass()}
                >
                    <Undo2
                        aria-hidden="true"
                        size={16}
                    />
                </button>

                <button
                    type="button"
                    title="Redo"
                    aria-label="Redo"
                    disabled={
                        disabled ||
                        !editor.can().redo()
                    }
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                    className={iconButtonClass()}
                >
                    <Redo2
                        aria-hidden="true"
                        size={16}
                    />
                </button>
            </div>

            <EditorContent
                editor={editor}
            />
        </div>
    );
}