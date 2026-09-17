"use client";

import { useEffect, useState } from "react";
import { Check, Share2 } from "lucide-react";

import { Button } from "@/components/ui/Button";

type SharePostButtonProps = {
    title: string;
};

export function SharePostButton({
    title,
}: SharePostButtonProps) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;

        const timeoutId = window.setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [copied]);

    async function handleShare() {
        try {
            await navigator.clipboard.writeText(
                window.location.href,
            );

            setCopied(true);
        } catch {
            setCopied(false);
        }
    }

    return (
        <>
            <Button
                type="button"
                variant="social"
                onClick={handleShare}
                aria-label={
                    copied
                        ? "Post link copied"
                        : `Copy link to ${title}`
                }
                aria-pressed={copied}
            >
                <span
                    className="relative flex size-5 items-center justify-center"
                    aria-hidden="true"
                >
                    <Share2
                        className={[
                            "absolute size-5",
                            "transition-all duration-300 ease-out",
                            copied
                                ? "scale-75 opacity-0"
                                : "scale-100 opacity-100",
                        ].join(" ")}
                    />

                    <Check
                        className={[
                            "absolute size-5",
                            "transition-all duration-300 ease-out",
                            copied
                                ? "scale-100 opacity-100"
                                : "scale-75 opacity-0",
                        ].join(" ")}
                    />
                </span>
            </Button>

            <span
                className="sr-only"
                aria-live="polite"
            >
                {copied
                    ? "Post link copied to clipboard."
                    : ""}
            </span>
        </>
    );
}