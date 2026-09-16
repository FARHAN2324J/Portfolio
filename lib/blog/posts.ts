import { createClient } from "@/lib/supabase/server";

export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string;
  content: Record<string, unknown>;
  created_at: string;
};

export type PublicPostMetadata = {
  title: string;
  slug: string;
  description: string | null;
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

export async function getPublicPostBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, description, content, created_at")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error("Failed to load the blog post.");
  }

  return data as PublicPost | null;
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

  return data as PublicPostMetadata | null;
}
