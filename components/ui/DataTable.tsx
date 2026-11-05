import { cn } from "@/lib/utils";

type DataTableProps = {
    headers: readonly string[];
    rows: readonly (readonly string[])[];
    /** Accessible description of the table. */
    caption?: string;
    className?: string;
};

function DataTable({ headers, rows, caption, className }: DataTableProps) {
    return (
        <div className={cn("w-full overflow-x-auto", className)}>
            <table className="w-full min-w-96 border-collapse text-sm">
                {caption && <caption className="sr-only">{caption}</caption>}

                <thead>
                    <tr className="border-b border-border">
                        {headers.map((header, index) => (
                            <th
                                key={`${header}-${index}`}
                                scope="col"
                                className={cn(
                                    "py-2.5 text-start align-top text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm",
                                    index === 0 ? "pe-3" : "ps-3"
                                )}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-b border-border last:border-b-0"
                        >
                            {row.map((cell, cellIndex) =>
                                cellIndex === 0 ? (
                                    <th
                                        key={cellIndex}
                                        scope="row"
                                        className="py-3 pe-3 text-start align-top font-normal text-foreground"
                                    >
                                        {cell}
                                    </th>
                                ) : (
                                    <td
                                        key={cellIndex}
                                        className="py-3 ps-3 align-top text-pretty text-muted-foreground"
                                    >
                                        {cell}
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export { DataTable };
export type { DataTableProps };
