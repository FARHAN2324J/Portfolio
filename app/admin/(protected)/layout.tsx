import { requireAdmin } from "@/lib/supabase/auth";

export default async function AdminProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await requireAdmin();

    return children;
}