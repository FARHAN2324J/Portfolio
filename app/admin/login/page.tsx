import { redirect } from "next/navigation";

import { LoginForm } from "@/components/admin/login-form";
import { getAdminUser } from "@/lib/supabase/auth";

export default async function AdminLoginPage() {
    const user = await getAdminUser();

    if (user) {
        redirect("/admin/blog");
    }

    return (
        <main className="flex min-h-dvh items-center justify-center px-4 py-8">
            <section
                aria-labelledby="admin-login-title"
                className="w-full max-w-sm"
            >
                <LoginForm />
            </section>
        </main>
    );
}