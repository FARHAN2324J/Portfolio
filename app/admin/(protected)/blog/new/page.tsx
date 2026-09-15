import { CreatePostForm } from "@/components/admin/create-post-form";
import { Description } from "@/components/ui/Description";
import { Title } from "@/components/ui/Title";

export default function NewPostPage() {
    return (
        <main className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
            <header className="mb-6 space-y-1">
                <Title
                    as="h1"
                    className="text-2xl tracking-tight sm:text-3xl"
                >
                    Create post
                </Title>

                <Description className="text-sm">
                    Write and publish a new blog post.
                </Description>
            </header>

            <CreatePostForm />
        </main>
    );
}