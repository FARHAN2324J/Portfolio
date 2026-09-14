const GITHUB_API_URL = "https://api.github.com";

export async function githubRest<T>(path: string): Promise<T> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured.");
  }

  const response = await fetch(`${GITHUB_API_URL}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",

      Authorization: `Bearer ${token}`,

      "X-GitHub-Api-Version": "2022-11-28",
    },

    next: {
      revalidate: 1800,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub REST API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
