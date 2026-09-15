import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

const ADMIN_USER_ID = process.env.ADMIN_USER_ID;

export async function getAdminUser() {
  if (!ADMIN_USER_ID) {
    throw new Error("ADMIN_USER_ID is not configured.");
  }

  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  if (user.id !== ADMIN_USER_ID) {
    return null;
  }

  return user;
}

export async function requireAdmin() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/admin/login");
  }

  return user;
}
