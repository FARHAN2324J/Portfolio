"use client";

import {
    useState,
    type FormEvent,
} from "react";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";
import { Card } from "../ui/Card";
import { Title } from "../ui/Title";
import { Description } from "../ui/Description";



export function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(
        null,
    );
    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        if (loading) {
            return;
        }

        setError(null);
        setLoading(true);

        const supabase = createClient();

        const { error } =
            await supabase.auth.signInWithPassword({
                email: email.trim(),
                password,
            });

        if (error) {
            setError(
                "Email or password is incorrect.",
            );

            setLoading(false);

            return;
        }

        router.replace("/admin/blog");
        router.refresh();
    }

    return (
        <Card className="w-full p-6 sm:p-8">
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-labelledby="admin-login-title"
            >
                <header className="space-y-1">
                    <Title
                        as="h1"
                        id="admin-login-title"
                        className="text-2xl tracking-tight"
                    >
                        Admin Login
                    </Title>

                    <Description className="text-sm">
                        Sign in to manage your blog.
                    </Description>
                </header>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-muted-foreground"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(
                                    event.target.value,
                                )
                            }
                            autoComplete="username"
                            autoCapitalize="none"
                            spellCheck={false}
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-muted-foreground"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(
                                    event.target.value,
                                )
                            }
                            autoComplete="current-password"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground"
                        />
                    </div>
                </div>

                {error && (
                    <p
                        role="alert"
                        aria-live="polite"
                        className="text-sm text-destructive"
                    >
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={
                        loading ||
                        !email ||
                        !password
                    }
                    className="w-full rounded-full bg-foreground px-4 py-1 text-sm font-medium text-background transition duration-200 hover:opacity-80 hover:scale-98 disabled:pointer-events-none disabled:opacity-50"
                >
                    {loading
                        ? "Signing in..."
                        : "Sign in"}
                </button>
            </form>
        </Card>
    );
}