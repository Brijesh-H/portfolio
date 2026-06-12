"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.97]",
          variant === "primary" &&
            "bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 glow-indigo",
          variant === "outline" &&
            "border border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800 active:bg-slate-700",
          variant === "ghost" &&
            "bg-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-100 active:bg-slate-700",
          variant === "glass" &&
            "glass glass-hover text-slate-100",
          size === "sm" && "h-11 min-w-[44px] px-4 text-sm",
          size === "md" && "h-11 min-w-[44px] px-5 text-sm",
          size === "lg" && "h-12 min-w-[44px] px-7 text-base",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
