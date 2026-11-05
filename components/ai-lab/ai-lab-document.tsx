import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import type { AiLabDocument } from "@/lib/ai-lab/content";

import { ContentBlocks } from "./content-blocks";

type AiLabDocumentViewProps = {
    document: AiLabDocument;
};

/**
 * Shared template for every AI Lab document. Layout, rhythm, and heading
 * hierarchy live here so pages of different lengths look like one set.
 */
function AiLabDocumentView({ document }: AiLabDocumentViewProps) {
    return (
        <article>
            <PageHeader
                kicker={document.kicker}
                title={document.title}
                description={document.description}
            />

            <div className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-4 sm:gap-5">
                {document.sections.map((section) => (
                    <Section key={section.id} id={section.id} title={section.title}>
                        <ContentBlocks blocks={section.blocks} />
                    </Section>
                ))}
            </div>
        </article>
    );
}

export { AiLabDocumentView };
export type { AiLabDocumentViewProps };
