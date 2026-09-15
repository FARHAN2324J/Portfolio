"use server";

import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/supabase/auth";
import { createClient } from "@/lib/supabase/server";

type CreatePostInput = {
  title: string;
  description: string;
  content: Record<string, unknown>;
};

function createSlug(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createPost(input: CreatePostInput) {
  await requireAdmin();

  const title = input.title.trim();
  const description = input.description.trim();

  if (!title) {
    throw new Error("Title is required.");
  }

  if (!input.content) {
    throw new Error("Content is required.");
  }

  const slug = createSlug(title);

  if (!slug) {
    throw new Error(
      "Title must contain at least one English letter or number.",
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.from("posts").insert({
    title,
    slug,
    description: description || null,
    content: input.content,
  });

  if (error) {
    if (error.code === "23505") {
      throw new Error("A post with this title already exists.");
    }

    throw new Error("Failed to create the post.");
  }

  redirect("/admin/blog");
}
