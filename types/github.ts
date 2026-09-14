export type GithubProfileData = {
    name: string;
    username: string;
    avatarUrl: string;
};

export type GithubStatsData = {
    repositories: number;
    commits: number;
    followers: number;
};

export type GithubContributionLevel =
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";

export type GithubContributionDayData = {
    date: string;
    contributionCount: number;
    contributionLevel: GithubContributionLevel;
};

export type GithubContributionWeekData = {
    contributionDays: GithubContributionDayData[];
};

export type GithubActivityData = {
    totalContributions: number;
    weeks: GithubContributionWeekData[];
};

export type GithubLanguageData = {
    name: string;
    percentage: number;
};

export type GithubRepositoryData = {
    name: string;
    description: string | null;
    language: string | null;
    stars: number;
    forks: number;
    url: string;
};

export type GithubPageData = {
    profile: GithubProfileData;
    stats: GithubStatsData;
    activity: GithubActivityData;
    languages: GithubLanguageData[];
    repositories: GithubRepositoryData[];
};