import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1",
    "whitespace-nowrap",
    "transition-transform transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 font-medium",
  ],
  {
    variants: {
      variant: {
        primary: [
          "rounded-full",
          "bg-foreground",
          "px-3 py-2",
          "text-sm",
          "text-background",
          "hover:scale-105",
        ],

        link: [
          "text-sm text-foreground",
          "hover:opacity-80",
        ],

        social: [
          "text-sm text-muted-foreground",
          "hover:text-foreground",
        ],
      },

      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
    },

    defaultVariants: {
      variant: "link",
      size: "default",
    },
  }
);

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };