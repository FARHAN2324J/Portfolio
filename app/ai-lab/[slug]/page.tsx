import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AiLabDocumentView } from "@/components/ai-lab/ai-lab-document";
import {
    aiLabDocuments,
    defaultAiLabLocale,
    getAiLabDocument,
    localeDirections,
    localeLanguages,
} from "@/lib/ai-lab/content";

type AiLabDocumentPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return aiLabDocuments.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({
    params,
}: AiLabDocumentPageProps): Promise<Metadata> {
    const { slug } = await params;
    const document = getAiLabDocument(slug);

    if (!document) {
        return {
            title: "AI Lab",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: document.title,
        description: document.description,
        alternates: {
            canonical: `/ai-lab/${document.slug}`,
        },
        openGraph: {
            type: "article",
            title: document.title,
            description: document.description,
            url: `/ai-lab/${document.slug}`,
        },
    };
}

export default async function AiLabDocumentPage({
    params,
}: AiLabDocumentPageProps) {
    const { slug } = await params;
    const document = getAiLabDocument(slug);

    if (!document) {
        notFound();
    }

    const locale = defaultAiLabLocale;

    return (
        <main
            dir={localeDirections[locale]}
            lang={localeLanguages[locale]}
            className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <AiLabDocumentView document={document} />
        </main>
    );
}
