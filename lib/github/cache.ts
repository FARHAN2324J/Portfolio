import { Redis } from "@upstash/redis";
import type { GithubPageData } from "@/types/github";

const redis = Redis.fromEnv();

const GITHUB_CACHE_KEY = "github:page-data";
const GITHUB_CACHE_TTL = 60 * 60;

export async function getCachedGithubData(): Promise<GithubPageData | null> {
  return redis.get<GithubPageData>(GITHUB_CACHE_KEY);
}

export async function setCachedGithubData(data: GithubPageData): Promise<void> {
  await redis.set(GITHUB_CACHE_KEY, data, {
    ex: GITHUB_CACHE_TTL,
  });
}
