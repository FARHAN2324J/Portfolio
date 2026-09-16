"use client";

import {
    useState,
    type FormEvent,
} from "react";

import { useRouter } from "next/navigation";

import { RichTextEditor } from "@/components/editor/rich-text-editor";
import { createPost } from "@/app/admin/(protected)/blog/new/actions";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";
import { Description } from "../ui/Description";
import { postCategories } from "@/lib/blog/categories";

export function CreatePostForm() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] =
        useState("");
    const [content, setContent] = useState<
        Record<string, unknown>
    >({
        type: "doc",
        content: [
            {
                type: "paragraph",
            },
        ],
    });

    const [category, setCategory] =
        useState("code");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<
        string | null
    >(null);

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        if (loading) {
            return;
        }

        setError(null);
        setLoading(true);

        try {
            await createPost({
                title,
                description,
                category,
                content,
            });
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong.",
            );

            setLoading(false);
        }
    }

    return (
        <Card className="p-6 sm:p-8">
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <header className="space-y-1">
                    <Title
                        as="h2"
                        className="text-xl"
                    >
                        New blog post
                    </Title>

                    <Description className="text-sm">
                        Create a new article for your
                        blog.
                    </Description>
                </header>

                <div className="space-y-2">
                    <label
                        htmlFor="title"
                        className="text-sm font-medium text-foreground"
                    >
                        Title
                    </label>

                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={(event) =>
                            setTitle(event.target.value)
                        }
                        required
                        disabled={loading}
                        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="text-sm font-medium text-foreground"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(event) =>
                            setDescription(
                                event.target.value,
                            )
                        }
                        rows={3}
                        disabled={loading}
                        className="w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="category"
                        className="text-sm font-medium text-foreground"
                    >
                        Category
                    </label>

                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(event) =>
                            setCategory(event.target.value)
                        }
                        disabled={loading}
                        className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                    >
                        {postCategories.map((item) => (
                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                        Content
                    </label>

                    <RichTextEditor
                        content={content}
                        onChange={setContent}
                    />
                </div>

                {error && (
                    <p
                        role="alert"
                        aria-live="polite"
                        className="text-sm text-destructive text-foreground"
                    >
                        {error}
                    </p>
                )}

                <footer className="flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={() =>
                            router.push("/admin/blog")
                        }
                        disabled={loading}
                        className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-foreground"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        disabled={
                            loading || !title.trim()
                        }
                        className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        {loading
                            ? "Creating..."
                            : "Create post"}
                    </button>
                </footer>
            </form>
        </Card>
    );
}