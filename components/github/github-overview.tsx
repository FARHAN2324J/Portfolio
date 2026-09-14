import { GithubActivity } from "./github-activity";
import { GithubLanguages } from "./github-languages";

function GithubOverview() {
    return (
        <section
            aria-label="GitHub overview"
            className="grid gap-3 lg:grid-cols-[2fr_1fr] mt-3"
        >
            <GithubActivity />
            <GithubLanguages />
        </section>
    );
}

export { GithubOverview };