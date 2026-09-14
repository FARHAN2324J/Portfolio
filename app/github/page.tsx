import { GithubOverview } from "@/components/github/github-overview";
import { GithubProfile } from "@/components/github/github-profile";
import { GithubStats } from "@/components/github/github-stats";
import { GithubRepositories } from "@/components/github/GithubRepositories";

export default function GithubPage() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-8">
            <header>
                <GithubProfile
                    name="Farhan"
                    username="FARHAN2324J"
                    avatarUrl="https://github.com/FARHAN2324J.png"

                />
            </header>

            <div className="mt-4 space-y-4">
                <GithubStats />

                <GithubOverview />

                <GithubRepositories />
            </div>
        </main>
    );
}