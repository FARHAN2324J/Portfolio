"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    async function handleLogout() {
        if (loading) {
            return;
        }

        setLoading(true);

        const supabase = createClient();

        const { error } =
            await supabase.auth.signOut();

        if (error) {
            setLoading(false);

            return;
        }

        router.replace("/admin/login");
        router.refresh();
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            disabled={loading}
            aria-busy={loading}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600"
        >
            {loading
                ? "Signing out..."
                : "Sign out"}
        </button>
    );
}