"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-offset-zinc-900 select-none",
          variant === "primary" &&
            "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
          variant === "outline" &&
            "border-2 border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-700",
          variant === "ghost" &&
            "bg-transparent text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700",
          size === "sm" && "h-9 min-w-[44px] px-4 text-sm",
          size === "md" && "h-10 min-w-[44px] px-5 text-sm",
          size === "lg" && "h-12 min-w-[44px] px-6 text-base",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
