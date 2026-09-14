import type { Metadata } from "next";
import { GithubRepositories } from "@/components/github/GithubRepositories";
import { getGithubData } from "@/lib/github/get-github-data";
import { GithubProfile } from "@/components/github/github-profile";
import { GithubStats } from "@/components/github/github-stats";
import { GithubOverview } from "@/components/github/github-overview";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "GitHub",
    description:
        "Explore my GitHub profile, activity, and repositories.",
};

export default async function GithubPage() {
    const username =
        process.env.GITHUB_USERNAME;

    if (!username) {
        throw new Error(
            "GITHUB_USERNAME is not configured.",
        );
    }

    const data =
        await getGithubData(username);

    return (
        <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <Button asChild variant="link">
                <Link href="/">
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    <span>Back</span>
                </Link>
            </Button>
            <header>
                <GithubProfile
                    profile={data.profile}
                />
            </header>

            <div className="mt-4 space-y-4">
                <GithubStats
                    stats={data.stats}
                />

                <GithubOverview
                    activity={data.activity}
                    languages={data.languages}
                />

                <GithubRepositories
                    repositories={
                        data.repositories
                    }
                />
            </div>
        </main>
    );
}