"use server";

import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/supabase/auth";
import { createClient } from "@/lib/supabase/server";

export async function deletePost(formData: FormData) {
  await requireAdmin();

  const id = formData.get("id");

  if (typeof id !== "string" || !id) {
    throw new Error("Post id is required.");
  }

  const supabase = await createClient();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    throw new Error("Failed to delete the post.");
  }

  redirect("/admin/blog");
}
