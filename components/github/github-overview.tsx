import type {
    GithubActivityData,
    GithubLanguageData,
} from "@/types/github";
import { GithubActivity } from "./github-activity";
import { GithubLanguages } from "./github-languages";

type GithubOverviewProps = {
    activity: GithubActivityData;
    languages: GithubLanguageData[];
};

function GithubOverview({
    activity,
    languages,
}: GithubOverviewProps) {
    return (
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <GithubActivity activity={activity} />
            <GithubLanguages languages={languages} />
        </div>
    );
}

export { GithubOverview };