const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

type GithubGraphQLError = {
  message: string;
};

type GithubGraphQLResponse<T> = {
  data?: T;
  errors?: GithubGraphQLError[];
};

export async function githubGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured.");
  }

  const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed: ${response.status}`);
  }

  const result = (await response.json()) as GithubGraphQLResponse<T>;

  if (result.errors?.length) {
    throw new Error(result.errors.map((error) => error.message).join(", "));
  }

  if (!result.data) {
    throw new Error("GitHub GraphQL API returned no data.");
  }

  return result.data;
}
