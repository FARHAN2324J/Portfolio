import {
  BookOpen,
  Briefcase,
  Code2,
  Lightbulb,
  NotebookPen,
  type LucideIcon,
} from "lucide-react";

export const postCategories = [
  {
    value: "code",
    label: "Code",
    icon: Code2,
  },
  {
    value: "learning",
    label: "Learning",
    icon: Lightbulb,
  },
  {
    value: "book",
    label: "Book",
    icon: BookOpen,
  },
  {
    value: "notes",
    label: "Notes",
    icon: NotebookPen,
  },
  {
    value: "career",
    label: "Career",
    icon: Briefcase,
  },
] as const;

export type PostCategory = (typeof postCategories)[number]["value"];

export type PostCategoryConfig = (typeof postCategories)[number];

export function getPostCategory(value: string): PostCategoryConfig {
  return (
    postCategories.find((category) => category.value === value) ??
    postCategories[0]
  );
}
