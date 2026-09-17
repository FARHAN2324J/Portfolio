"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";

type RelativeDateProps = {
    date: string;
};

export function RelativeDate({
    date,
}: RelativeDateProps) {
    const [relativeTime, setRelativeTime] =
        useState("just now");

    useEffect(() => {
        const update = () => {
            setRelativeTime(
                formatDistanceToNowStrict(
                    new Date(date),
                    {
                        addSuffix: true,
                    },
                ),
            );
        };

        update();

        const intervalId =
            window.setInterval(
                update,
                60_000,
            );

        return () => {
            window.clearInterval(intervalId);
        };
    }, [date]);

    return (
        <time
            dateTime={date}
            title={new Date(date).toLocaleString(
                "en-US",
                {
                    dateStyle: "long",
                    timeStyle: "short",
                },
            )}
        >
            {relativeTime}
        </time>
    );
}