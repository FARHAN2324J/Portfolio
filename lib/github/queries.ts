export const GITHUB_PROFILE_QUERY = `
    query GithubProfile($username: String!) {
        user(login: $username) {
            name
            login
            avatarUrl

            followers {
                totalCount
            }

            repositories(
                first: 100
                ownerAffiliations: OWNER
                privacy: PUBLIC
            ) {
                totalCount

                nodes {
                    name
                    description
                    url
                    stargazerCount
                    forkCount

                    primaryLanguage {
                        name
                    }

                    languages(
                        first: 10
                        orderBy: {
                            field: SIZE
                            direction: DESC
                        }
                    ) {
                        edges {
                            size
                            node {
                                name
                            }
                        }
                    }
                }
            }

            pinnedItems(
                first: 6
                types: REPOSITORY
            ) {
                nodes {
                    ... on Repository {
                        name
                        description
                        url
                        stargazerCount
                        forkCount

                        primaryLanguage {
                            name
                        }
                    }
                }
            }

            contributionsCollection {
                totalCommitContributions
                totalPullRequestContributions

                contributionCalendar {
                    totalContributions

                    weeks {
                        contributionDays {
                            date
                            contributionCount
                            contributionLevel
                        }
                    }
                }
            }
        }
    }
`;
