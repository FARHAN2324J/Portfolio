export type GithubGraphQLResponse = {
  user: {
    name: string | null;
    login: string;
    avatarUrl: string;

    followers: {
      totalCount: number;
    };

    repositories: {
      totalCount: number;

      nodes: {
        name: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;

        primaryLanguage: {
          name: string;
        } | null;

        languages: {
          edges: {
            size: number;
            node: {
              name: string;
            };
          }[];
        };
      }[];
    };

    pinnedItems: {
      nodes: {
        name: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;

        primaryLanguage: {
          name: string;
        } | null;
      }[];
    };

    contributionsCollection: {
      totalCommitContributions: number;
      totalPullRequestContributions: number;

      contributionCalendar: {
        totalContributions: number;

        weeks: {
          contributionDays: {
            date: string;
            contributionCount: number;
            contributionLevel:
              | "NONE"
              | "FIRST_QUARTILE"
              | "SECOND_QUARTILE"
              | "THIRD_QUARTILE"
              | "FOURTH_QUARTILE";
          }[];
        }[];
      };
    };
  } | null;
};
