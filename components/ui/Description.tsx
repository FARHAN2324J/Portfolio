import * as React from "react";
import { cn } from "@/lib/utils";

type DescriptionProps = React.ComponentProps<"p">;

function Description({
  className,
  ...props
}: DescriptionProps) {
  return (
    <p
      data-slot="description"
      className={cn(
        "font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Description };