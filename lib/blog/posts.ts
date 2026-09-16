import type { Block } from "@blocknote/core";

import { createClient } from "@/lib/supabase/server";

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string;
  created_at: string;
};

export type PublicPostWithContent = PublicPost & {
  content: Block[];
};

export async function getPublicPosts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, description, category, created_at")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error("Failed to load blog posts.");
  }

  return data;
}

export async function getPublicPostBySlug(
  slug: string,
): Promise<PublicPostWithContent | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, description, category, content, created_at")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error("Failed to load the blog post.");
  }

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    description: data.description,
    category: data.category,
    created_at: data.created_at,
    content: JSON.parse(JSON.stringify(data.content)),
  };
}

export async function getPublicPostMetadataBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("title, slug, description")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error("Failed to load the blog post metadata.");
  }

  return data;
}
