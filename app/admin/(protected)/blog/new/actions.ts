"use server";

import { redirect } from "next/navigation";

import type { Block } from "@blocknote/core";

import { postCategories, type PostCategory } from "@/lib/blog/categories";

import { requireAdmin } from "@/lib/supabase/auth";

import { createClient } from "@/lib/supabase/server";

type CreatePostInput = {
  title: string;
  description: string;
  category: PostCategory;
  content: Block[];
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

  if (!input.content || input.content.length === 0) {
    throw new Error("Content is required.");
  }

  const isValidCategory = postCategories.some(
    (category) => category.value === input.category,
  );

  if (!isValidCategory) {
    throw new Error("Invalid post category.");
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
    category: input.category,
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
