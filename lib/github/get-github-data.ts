import type { GithubPageData } from "@/types/github";
import { githubGraphQL } from "./client";
import { GITHUB_PROFILE_QUERY } from "./queries";
import type { GithubGraphQLResponse } from "./types";
import { getCachedGithubData, setCachedGithubData } from "./cache";

type GithubRepositoryNode = NonNullable<
  GithubGraphQLResponse["user"]
>["repositories"]["nodes"][number];

function mapLanguages(repositories: GithubRepositoryNode[]) {
  const languageSizes = new Map<string, number>();

  for (const repository of repositories) {
    for (const edge of repository.languages.edges) {
      const currentSize = languageSizes.get(edge.node.name) ?? 0;

      languageSizes.set(edge.node.name, currentSize + edge.size);
    }
  }

  const totalSize = Array.from(languageSizes.values()).reduce(
    (total, size) => total + size,
    0,
  );

  if (totalSize === 0) {
    return [];
  }

  return Array.from(languageSizes.entries())
    .map(([name, size]) => ({
      name,
      percentage: Number(((size / totalSize) * 100).toFixed(1)),
    }))
    .sort((a, b) => b.percentage - a.percentage);
}

async function fetchGithubData(username: string): Promise<GithubPageData> {
  const response = await githubGraphQL<GithubGraphQLResponse>(
    GITHUB_PROFILE_QUERY,
    {
      username,
    },
  );

  const user = response.user;

  if (!user) {
    throw new Error(`GitHub user "${username}" was not found.`);
  }

  const repositories = user.repositories.nodes;

  const contributionCalendar =
    user.contributionsCollection.contributionCalendar;

  return {
    profile: {
      name: user.name ?? user.login,
      username: user.login,
      avatarUrl: user.avatarUrl,
    },

    stats: {
      repositories: user.repositories.totalCount,

      commits: user.contributionsCollection.totalCommitContributions,

      followers: user.followers.totalCount,
    },

    activity: {
      totalContributions: contributionCalendar.totalContributions,

      weeks: contributionCalendar.weeks.map((week) => ({
        contributionDays: week.contributionDays,
      })),
    },

    languages: mapLanguages(repositories),

    repositories: user.pinnedItems.nodes.map((repository) => ({
      name: repository.name,
      description: repository.description,
      language: repository.primaryLanguage?.name ?? null,
      stars: repository.stargazerCount,
      forks: repository.forkCount,
      url: repository.url,
    })),
  };
}

export async function getGithubData(username: string): Promise<GithubPageData> {
  try {
    const data = await fetchGithubData(username);

    void setCachedGithubData(data).catch((error) => {
      console.error("Failed to update GitHub cache.", error);
    });

    return data;
  } catch (error) {
    console.error("GitHub request failed. Trying cached data.", error);

    const cachedData = await getCachedGithubData();

    if (cachedData) {
      return cachedData;
    }

    throw error;
  }
}
